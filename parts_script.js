// ══════════════════════════════════════════════
// PART-BASED TEST RUNNER
// Reads ?part=N from URL, slices master QUESTIONS array
// ══════════════════════════════════════════════

// ── Get part number from URL ─────────────────
const urlParams = new URLSearchParams(window.location.search);
const PART_NUMBER = parseInt(urlParams.get('part')) || 1;
const isAR = (window.CATEGORY_CONFIG && window.CATEGORY_CONFIG.topic === 'Abstract Reasoning') || window.location.pathname.includes('test_ar_parts');
const CHUNK_SIZE = isAR ? 55 : 20;
// ── Fix Image Paths for deployment consistency ────────────────
function fixAllImagePaths(obj, dir) {
  if (!obj) return obj;
  let cleanDir = '';
  if (dir) {
    cleanDir = dir.replace(/^\.\//, '').replace(/\/$/, '');
  }
  function fixHTML(str) {
    if (!str || typeof str !== 'string') return str;
    const isSubfolder = window.location.pathname.includes('/test_') || window.location.pathname.includes('\\test_');
    if (isSubfolder) {
      return str.replace(/src=(['"])(test_[^'"]+)/g, 'src=$1../$2');
    } else {
      return str.replace(/src=(['"])\.\.\/(test_[^'"]+)/g, 'src=$1$2');
    }
  }
  if (typeof obj === 'string') {
    return fixHTML(obj);
  }
  if (Array.isArray(obj)) {
    return obj.map(item => fixAllImagePaths(item, dir));
  }
  if (typeof obj === 'object') {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (typeof obj[key] === 'string' && (key === 'text' || key === 'explanation' || key === 'passageText')) {
          obj[key] = fixHTML(obj[key]);
        } else if (key === 'options' && Array.isArray(obj[key])) {
          obj[key] = obj[key].map(opt => typeof opt === 'string' ? fixHTML(opt) : opt);
        } else if (typeof obj[key] === 'object') {
          obj[key] = fixAllImagePaths(obj[key], dir);
        }
      }
    }
  }
  return obj;
}

if (typeof QUESTIONS !== 'undefined') fixAllImagePaths(QUESTIONS);
if (typeof PASSAGES !== 'undefined') fixAllImagePaths(PASSAGES);

// ── Slice questions for this part ────────────
const startIdx = (PART_NUMBER - 1) * CHUNK_SIZE;
const endIdx = Math.min(startIdx + CHUNK_SIZE, QUESTIONS.length);
const PART_QUESTIONS = QUESTIONS.slice(startIdx, endIdx);
const TOTAL_PARTS = Math.ceil(QUESTIONS.length / CHUNK_SIZE);

// ── Filter passages for only this part ───────
const PART_PASSAGES = {};
PART_QUESTIONS.forEach(q => {
  if (q.passageId && PASSAGES[q.passageId]) {
    PART_PASSAGES[q.passageId] = PASSAGES[q.passageId];
  }
});

// ── Get category info from page config ───────
const CATEGORY_NAME = window.CATEGORY_CONFIG ? window.CATEGORY_CONFIG.name : 'Mock Test';
const CATEGORY_TOPIC = window.CATEGORY_CONFIG ? window.CATEGORY_CONFIG.topic : 'UCAT';
const CATEGORY_ICON = window.CATEGORY_CONFIG ? window.CATEGORY_CONFIG.icon : '📝';
const TOPIC_NUMBER = window.CATEGORY_CONFIG ? window.CATEGORY_CONFIG.topicNumber : 0;
const EXAM_NAME = `${CATEGORY_NAME} - Part ${PART_NUMBER}`;
window.EXAM_NAME = EXAM_NAME;

// ── Timer: 13 minutes (780s) for AR 55 Qs, or 30s per Q for others ───────────
const TIMER_SECONDS = isAR ? 780 : (PART_QUESTIONS.length * 30);

// ══════════════════════════════════════════════
// INITIALIZATION (Open for everyone)
// ══════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', async () => {
  // Update page title
  document.title = `${EXAM_NAME} – EduQuest UCAT`;
  
  if (window.supabase) {
    const supabaseClient = window.supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey);
    const { data: { session } } = await supabaseClient.auth.getSession();
    
    if (session) {
      student = { 
        name: session.user.email.split('@')[0], 
        email: session.user.email, 
        phone: '' 
      };
      if ($('regEmail')) $('regEmail').value = session.user.email;
      if ($('regName')) $('regName').value = session.user.email.split('@')[0];
    } else {
      student = { name: 'Guest', email: 'guest@example.com', phone: '' };
    }
  } else {
    student = { name: 'Guest', email: 'guest@example.com', phone: '' };
  }
  
  if ($('pageReg')) {
    showPage('pageReg');
  } else {
    initTest();
  }
});

// ══════════════════════════════════════════════
// APP STATE
// ══════════════════════════════════════════════
const LETTERS = ['A','B','C','D','E'];
const $ = id => document.getElementById(id);
let student = {}, answers = {}, currentQ = 0, timerInt, secsLeft = 0;

function customAlert(msg) {
  $('alertMsg').textContent = msg;
  $('alertBg').classList.add('open');
}

function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  $(id).classList.add('active');
}

// ── Initialization ─────────────────────────────
function initTest() {
  showPage('pageTest');
  buildPalette();
  renderQ();
  startTimer(TIMER_SECONDS);
  $('timerBox').style.display = 'flex';
  
  // Update header info
  const partInfo = document.getElementById('partInfo');
  if (partInfo) {
    partInfo.textContent = `${EXAM_NAME} • ${PART_QUESTIONS.length} Questions • ${Math.ceil(TIMER_SECONDS/60)} Min`;
  }
}

// ── Timer ────────────────────────────────────
function startTimer(s) {
  secsLeft = s;
  paintTimer();
  timerInt = setInterval(() => {
    secsLeft--;
    paintTimer();
    if (secsLeft <= 300) $('timerBox').classList.add('warn');
    if (secsLeft <= 0)   { clearInterval(timerInt); doSubmit(); }
  }, 1000);
}
function paintTimer() {
  const m = String(Math.floor(secsLeft/60)).padStart(2,'0');
  const s = String(secsLeft%60).padStart(2,'0');
  $('timerDisplay').textContent = `${m}:${s}`;
}

// ── Render question ──────────────────────────
function renderQ() {
  const q = PART_QUESTIONS[currentQ];

  // Show/hide passage
  const passageBox = $('passageBox');
  if (q.passageId && PART_PASSAGES[q.passageId]) {
    const p = PART_PASSAGES[q.passageId];
    $('passageLabel').textContent = p.title;
    $('passageSubject').textContent = p.subject;
    $('passageText').innerHTML = p.text;
    passageBox.style.display = 'block';
  } else {
    passageBox.style.display = 'none';
  }

  $('qBadge').textContent = `Q ${currentQ + 1}`;
  if ($('qTopic')) $('qTopic').textContent = q.topic || CATEGORY_TOPIC;
  $('qText').innerHTML = q.text;
  $('modProgress').textContent = `Q ${currentQ+1} of ${PART_QUESTIONS.length}`;
  $('btnPrev').style.visibility = currentQ === 0 ? 'hidden' : 'visible';
  $('btnNext').textContent = currentQ < PART_QUESTIONS.length-1 ? 'Next →' : '🏁 Submit';

  const opts = $('qOpts');
  opts.innerHTML = '';
  q.options.forEach((txt, i) => {
    const d = document.createElement('div');
    d.className = 'opt' + (answers[q.id] === i ? ' selected' : '');
    d.onclick   = () => { answers[q.id] = i; renderQ(); };
    d.innerHTML = `<div class="opt-letter">${LETTERS[i]}</div><div class="opt-text">${txt}</div>`;
    opts.appendChild(d);
  });
  updatePalette();
  updateProg();
}

// ── Navigation ───────────────────────────────
function prevQ() { if (currentQ > 0) { currentQ--; renderQ(); } }
function nextQ() {
  if (currentQ < PART_QUESTIONS.length-1) { currentQ++; renderQ(); }
  else confirmSubmit();
}

// ── Palette & progress ───────────────────────
function buildPalette() {
  const g = $('palette');
  g.innerHTML = '';
  PART_QUESTIONS.forEach((q, i) => {
    const b = document.createElement('button');
    b.id = `pb${q.id}`; b.className = 'pb'; b.textContent = i + 1;
    b.onclick = () => { currentQ = i; renderQ(); };
    g.appendChild(b);
  });
}
function updatePalette() {
  PART_QUESTIONS.forEach((q, i) => {
    const b = $(`pb${q.id}`);
    if (!b) return;
    b.className = 'pb' +
      (answers[q.id] !== undefined ? ' done' : '') +
      (i === currentQ ? ' cur' : '');
  });
}
function updateProg() {
  const done = Object.keys(answers).length;
  const pct  = Math.round(done / PART_QUESTIONS.length * 100);
  $('progFill').style.width = pct + '%';
  $('progLbl').textContent  = `${done} / ${PART_QUESTIONS.length} answered`;
}

// ── Modal ────────────────────────────────────
function confirmSubmit() {
  const skip = PART_QUESTIONS.length - Object.keys(answers).length;
  $('modalMsg').textContent = skip > 0
    ? `You have ${skip} unanswered question${skip>1?'s':''}. Submit anyway?`
    : 'Submit your test? This cannot be undone.';
  $('modalBg').classList.add('open');
}
function closeModal() { $('modalBg').classList.remove('open'); }

// ── Final submit ──────────────────────────────
async function doSubmit() {
  clearInterval(timerInt);
  closeModal();

  $('savingOverlay').classList.add('show');
  $('savingMsg').textContent = 'Saving your result to database...';

  // Authoritative scoring via UCATScoring
  const isSJT = (CATEGORY_TOPIC === 'Situational Judgement');
  const ucatReport = typeof UCATScoring !== 'undefined'
    ? UCATScoring.generateUCATReport({
        testType: 'TOPIC_TEST',
        examName: EXAM_NAME,
        questions: PART_QUESTIONS,
        studentAnswers: answers,
        studentData: student
      })
    : null;

  let correct = ucatReport ? ucatReport.overallStats.correct : 0;
  let wrong = ucatReport ? ucatReport.overallStats.wrong : 0;
  let unattempted = ucatReport ? ucatReport.overallStats.unattempted : 0;
  let partial = ucatReport ? (ucatReport.overallStats.partial || 0) : 0;
  let rawScore = ucatReport ? ucatReport.overallStats.rawScore : 0;
  let total = PART_QUESTIONS.length;
  let pct = ucatReport ? Math.round(ucatReport.overallStats.accuracy) : Math.round((correct / total) * 100);
  let grade = isSJT && ucatReport && ucatReport.sjtReport
    ? ucatReport.sjtReport.band
    : (isSJT ? 'Band 4' : (pct >= 90 ? 'A+' : pct >= 80 ? 'A' : pct >= 70 ? 'B' : pct >= 60 ? 'C' : 'D'));

  const details = ucatReport ? ucatReport.detailedReviewItems : PART_QUESTIONS.map(q => {
    const chosen = answers[q.id];
    let status = (chosen === undefined ? 'unattempted' : (chosen === q.answer ? 'correct' : 'wrong'));
    return { ...q, chosen, status, marks: chosen === q.answer ? 1 : 0 };
  });

  const scaledScore = isSJT ? null : (ucatReport && ucatReport.totalCognitiveScore ? ucatReport.totalCognitiveScore : (typeof UCATScoring !== 'undefined' ? UCATScoring.calculateSectionScaledScore(CATEGORY_TOPIC, rawScore, total) : Math.round(300 + (correct / total) * 600)));

  const result = {
    student,
    correct,
    wrong,
    unattempted,
    partial,
    rawScore,
    total,
    pct,
    grade,
    scaled: scaledScore,
    examName: EXAM_NAME,
    topicNumber: TOPIC_NUMBER,
    categoryTopic: CATEGORY_TOPIC,
    isSJT: isSJT,
    sjtBand: isSJT && ucatReport && ucatReport.sjtReport ? ucatReport.sjtReport.band : null,
    sjtInterpretation: isSJT && ucatReport && ucatReport.sjtReport ? ucatReport.sjtReport.interpretation : null,
    details,
    answers,
    submitTime: new Date().toISOString(),
    ucatReport
  };

  const saveResult = await saveToSupabase(result);
  $('savingOverlay').classList.remove('show');

  showPage('pageResult');
  $('timerBox').style.display = 'none';
  renderResults(result, saveResult);
}

// ── Results ──────────────────────────────────
function renderResults(result, saveRes) {
  const { student, correct, wrong, unattempted, partial = 0, rawScore, total, pct, grade, details, isSJT, sjtBand, sjtInterpretation } = result;
  const wrap = $('resWrap');
  const scoreColor = pct >= 70 ? '#10b981' : pct >= 50 ? '#f59e0b' : '#ef4444';
  const savedBadge = saveRes && saveRes.ok
    ? `<div class="saved-badge">✅ Result saved to database</div>`
    : (SUPABASE_CONFIG.url !== 'YOUR_SUPABASE_URL'
        ? `<div class="saved-badge" style="color:#ef4444;border-color:rgba(239,68,68,0.3);background:rgba(239,68,68,0.08)">⚠️ Save failed — check Supabase config</div>`
        : '');

  // Group wrong/skipped by passage for review
  const wrongDetails = details.filter(d => d.status !== 'correct');

  // Group by passageId (or null for standalone)
  const passageGroups = {};
  const standaloneWrong = [];
  wrongDetails.forEach(d => {
    if (d.passageId) {
      if (!passageGroups[d.passageId]) passageGroups[d.passageId] = [];
      passageGroups[d.passageId].push(d);
    } else {
      standaloneWrong.push(d);
    }
  });

  // Build review HTML
  let reviewHTML = '';
  if (wrongDetails.length > 0) {
    Object.entries(passageGroups).forEach(([pid, qs]) => {
      const passage = PART_PASSAGES[pid] || (typeof PASSAGES !== 'undefined' ? PASSAGES[pid] : null);
      if (passage) {
        reviewHTML += `
          <div class="review-passage-block">
            <div class="review-passage-label">📄 ${passage.title} · ${passage.subject}</div>
            <div class="review-passage-text">${passage.text}</div>
          </div>
          ${qs.map(q => buildReviewQ(q)).join('')}
          <div style="height:8px"></div>
        `;
      } else {
        qs.forEach(q => { reviewHTML += buildReviewQ(q); });
      }
    });
    standaloneWrong.forEach(q => {
      reviewHTML += buildReviewQ(q);
    });
  }

  // Hero Display: SJT displays Band 1-4; Cognitive displays Raw Topic Score
  let scoreMainHTML = '';
  let subtestCardHTML = '';

  if (isSJT) {
    scoreMainHTML = `
      <div class="sat-score" style="color:#a855f7">${sjtBand || grade}</div>
      <div class="score-line">Situational Judgement · Raw Marks: ${rawScore !== undefined ? rawScore : correct} / ${total} (${pct}%)</div>
      ${sjtInterpretation ? `<div style="font-size:0.85rem; color:rgba(255,255,255,0.85); margin-top:8px; max-width:600px; margin-left:auto; margin-right:auto;">${sjtInterpretation}</div>` : ''}
    `;

    subtestCardHTML = `
      <div style="background:var(--surface2); border:1px solid var(--border); border-radius:10px; padding:16px; display:flex; flex-direction:column; gap:8px;">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <span style="font-weight:600; font-size:0.9rem; color:var(--text);">${CATEGORY_ICON} Situational Judgement (Topic Part)</span>
          <span style="font-size:0.75rem; color:var(--muted);">${rawScore !== undefined ? rawScore : correct}/${total} Raw Marks</span>
        </div>
        <div style="font-family:var(--head); font-size:1.8rem; font-weight:800; color:var(--accent2); margin:4px 0;">${sjtBand || grade}</div>
        <div style="font-size:0.8rem; color:var(--muted);">Partial credit applied (1.0 exact, 0.5 adjacent)</div>
      </div>
    `;
  } else {
    scoreMainHTML = `
      <div class="sat-score" style="color:${scoreColor}">${rawScore !== undefined ? rawScore : correct} <span style="font-size:2rem; font-family:var(--font); color:var(--muted); font-weight:normal;">/ ${total}</span></div>
      <div class="score-line">Topic Test Raw Performance · ${correct} / ${total} correct (${pct}%) · Grade: ${grade}</div>
    `;

    subtestCardHTML = `
      <div style="background:var(--surface2); border:1px solid var(--border); border-radius:10px; padding:16px; display:flex; flex-direction:column; gap:8px;">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <span style="font-weight:600; font-size:0.9rem; color:var(--text);">${CATEGORY_ICON} ${CATEGORY_TOPIC}</span>
          <span style="font-size:0.75rem; color:var(--muted);">${correct}/${total} Correct</span>
        </div>
        <div style="font-family:var(--head); font-size:1.8rem; font-weight:800; color:var(--accent2); margin:4px 0;">${pct}% <span style="font-size:0.8rem; font-family:var(--font); color:var(--muted); font-weight:normal;">Accuracy</span></div>
        <div style="height:6px; background:var(--surface); border-radius:99px; overflow:hidden;">
          <div style="height:100%; width:${pct}%; background:linear-gradient(90deg, var(--accent), var(--accent2)); border-radius:99px;"></div>
        </div>
      </div>
    `;
  }

  wrap.innerHTML = `
    <div class="res-hero">
      <div style="font-size:0.8rem;opacity:.55;text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px">${EXAM_NAME}</div>
      ${scoreMainHTML}
      <div class="score-sub">${student.name} &nbsp;·&nbsp; ${new Date(result.submitTime).toLocaleString()}</div>
      ${savedBadge}
    </div>

    <div class="stats-row">
      <div class="stat-card c"><div class="num">${correct}</div><div class="lbl">Correct</div></div>
      <div class="stat-card w"><div class="num">${wrong}</div><div class="lbl">Wrong</div></div>
      <div class="stat-card s"><div class="num">${unattempted}</div><div class="lbl">Skipped</div></div>
      <div class="stat-card"><div class="num">${pct}%</div><div class="lbl">Accuracy</div></div>
    </div>

    <!-- Topic Raw Performance Card -->
    <div class="chart-card" style="margin-bottom:20px;">
      <h3 style="font-size:0.82rem; text-transform:uppercase; letter-spacing:0.06em; color:var(--muted); margin-bottom:16px;">📋 Topic Test Performance</h3>
      <div style="display:grid; grid-template-columns: 1fr; gap:16px;">
        ${subtestCardHTML}
      </div>
    </div>

    <div class="charts-row">
      <div class="chart-card"><h3>📊 Question Breakdown</h3><canvas id="pieChart" height="220"></canvas></div>
      <div class="chart-card"><h3>📈 Performance</h3><canvas id="barChart" height="220"></canvas></div>
    </div>

    ${wrongDetails.length > 0 ? `
    <div class="inc-review">
      <h3>⚠️ Review: ${wrong} Wrong &nbsp;+&nbsp; ${partial > 0 ? partial + ' Partial &nbsp;+&nbsp; ' : ''}${unattempted} Skipped</h3>
      ${reviewHTML}
    </div>` : `<div class="inc-review" style="text-align:center;padding:32px"><div style="font-size:3rem;margin-bottom:8px">🎉</div><h3 style="color:var(--green);border:none;padding:0">Perfect Score!</h3></div>`}

    <div class="res-actions" id="resActions">
      <button class="btn btn-primary" style="width:auto" onclick="location.reload()">🔄 Retake Test</button>
      <a href="../index.html" class="btn btn-outline" style="text-decoration:none">🏠 Home</a>
      ${PART_NUMBER < TOTAL_PARTS ? `<a href="test_ucat.html?part=${PART_NUMBER+1}" class="btn btn-primary" style="width:auto;text-decoration:none">▶ Next Part (Part ${PART_NUMBER+1}) →</a>` : ''}
      <button class="btn btn-primary" style="width:auto" onclick="downloadPDF()" id="downloadPdfBtn">📄 Download PDF</button>
    </div>`;

  // Pie chart
  new Chart($('pieChart'), {
    type:'doughnut',
    data:{ labels:['Correct','Wrong','Skipped'],
      datasets:[{ data:[correct, wrong, unattempted],
        backgroundColor:['#10b981','#ef4444','#f59e0b'], borderWidth:0, hoverOffset:4 }] },
    options:{ plugins:{ legend:{ position:'bottom', labels:{ font:{ family:'IBM Plex Sans' }, color:'#8b83a3' } } }, cutout:'68%' }
  });

  // Bar chart
  new Chart($('barChart'), {
    type:'bar',
    data:{ labels: ['Accuracy %'],
      datasets:[{ label:'Accuracy %', data: [pct],
        backgroundColor: [pct >= 70 ? '#10b98133' : pct >= 50 ? '#f59e0b33' : '#ef444433'],
        borderColor: [pct >= 70 ? '#10b981' : pct >= 50 ? '#f59e0b' : '#ef4444'],
        borderWidth:2, borderRadius:6 }] },
    options:{
      plugins:{ legend:{display:false} },
      scales:{
        y:{ min: 0, max: 100, ticks:{ stepSize:20, font:{family:'IBM Plex Mono'}, color:'#8b83a3' }, grid:{color:'rgba(124,58,237,0.1)'} },
        x:{ ticks:{ font:{family:'IBM Plex Sans', size:11}, color:'#8b83a3' }, grid:{display:false} }
      }
    }
  });
}

function buildReviewQ(q) {
  let statusBadge = '';
  if (q.status === 'wrong') {
    statusBadge = `<div class="inc-row wrong"><span class="label">❌ Your answer:</span><span>(${LETTERS[q.chosen] || (q.chosen+1)}) ${(q.options && q.options[q.chosen]) || '–'}</span></div>`;
  } else if (q.status === 'partial') {
    statusBadge = `<div class="inc-row" style="color:var(--amber)"><span class="label">🟡 Partial Credit Choice:</span><span>(${LETTERS[q.chosen] || (q.chosen+1)}) ${(q.options && q.options[q.chosen]) || '–'} (0.5 mark)</span></div>`;
  } else if (q.status === 'unattempted') {
    statusBadge = `<div class="inc-row" style="color:var(--amber)"><span class="label">⏭ Skipped</span></div>`;
  }

  return `
    <div class="inc-q">
      <div class="inc-q-text">Q${q.id || q.qNum} <span style="color:var(--accent2);font-size:0.75rem">[${q.topic || q.sectionName || CATEGORY_TOPIC}]</span><br>${(q.text || '').substring(0,250)}${(q.text || '').length > 250 ? '…' : ''}</div>
      ${statusBadge}
      <div class="inc-row right"><span class="label">✅ Correct:</span><span>(${LETTERS[q.answer] || (q.answer+1)}) ${(q.options && q.options[q.answer]) || '–'}</span></div>
      ${q.explanation ? `<div style="font-size:0.78rem;color:var(--muted);margin-top:6px;line-height:1.5;background:rgba(124,58,237,0.06);border-radius:8px;padding:8px 10px">${q.explanation}</div>` : ''}
    </div>`;
}

// ── PDF Download ──────────────────────────────
function downloadPDF() {
  const element = document.getElementById('resWrap');
  const actions = document.getElementById('resActions');
  if (actions) actions.style.display = 'none';

  const opt = {
    margin:       [10, 10, 10, 10],
    filename:     `EduQuest_${EXAM_NAME.replace(/[^a-zA-Z0-9]/g, '_')}_${student.name.replace(/[^a-zA-Z0-9]/g, '_')}.pdf`,
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2, useCORS: true, scrollY: 0 },
    jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };

  html2pdf().set(opt).from(element).save().then(() => {
    if (actions) actions.style.display = 'flex';
  }).catch(err => {
    console.error('PDF generation failed', err);
    if (actions) actions.style.display = 'flex';
  });
}
