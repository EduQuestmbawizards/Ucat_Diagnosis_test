window.EXAM_NAME = 'Situational Judgement Mock Test';
// ══════════════════════════════════════════════
// INITIALIZATION (Open for everyone)
// ══════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', async () => {
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

function initTest() {
  showPage('pageTest');
  buildPalette();
  renderQ();
  startTimer(45 * 60);
  $('timerBox').style.display = 'flex';
}

// ── Timer ────────────────────────────────────
function startTimer(s) {
  secsLeft = s;
  paintTimer();
  timerInt = setInterval(() => {
    secsLeft--;
    paintTimer();
    if (secsLeft <= 300) $('timerBox').classList.add('warn');
    if (secsLeft <= 0) { clearInterval(timerInt); doSubmit(); }
  }, 1000);
}

function paintTimer() {
  const m = String(Math.floor(secsLeft/60)).padStart(2,'0');
  const s = String(secsLeft%60).padStart(2,'0');
  $('timerDisplay').textContent = `${m}:${s}`;
}

// ── Render question ──────────────────────────
function renderQ() {
  const q = QUESTIONS[currentQ];

  const passageBox = $('passageBox');
  if (q.passageId && PASSAGES[q.passageId]) {
    const p = PASSAGES[q.passageId];
    $('passageLabel').textContent = p.title;
    $('passageSubject').textContent = p.subject;
    $('passageText').textContent = p.text;
    passageBox.style.display = 'block';
  } else {
    passageBox.style.display = 'none';
  }

  $('qBadge').textContent = `Q ${currentQ + 1}`;
  if ($('qTopic')) $('qTopic').textContent = q.topic || 'UCAT';
  $('qText').innerHTML = q.text;
  $('modProgress').textContent = `Q ${currentQ+1} of ${QUESTIONS.length}`;
  $('btnPrev').style.visibility = currentQ === 0 ? 'hidden' : 'visible';
  $('btnNext').textContent = currentQ < QUESTIONS.length-1 ? 'Next →' : '🏁 Submit';

  const opts = $('qOpts');
  opts.innerHTML = '';
  q.options.forEach((txt, i) => {
    const d = document.createElement('div');
    d.className = 'opt' + (answers[q.id] === i ? ' selected' : '');
    d.onclick = () => { answers[q.id] = i; renderQ(); };
    d.innerHTML = `<div class="opt-letter">${LETTERS[i]}</div><div class="opt-text">${txt}</div>`;
    opts.appendChild(d);
  });

  updatePalette();
  updateProg();
}

// ── Navigation ───────────────────────────────
function prevQ() { if (currentQ > 0) { currentQ--; renderQ(); } }
function nextQ() {
  if (currentQ < QUESTIONS.length-1) { currentQ++; renderQ(); }
  else confirmSubmit();
}

// ── Palette & progress ───────────────────────
function buildPalette() {
  const g = $('palette');
  g.innerHTML = '';
  QUESTIONS.forEach((q, i) => {
    const b = document.createElement('button');
    b.id = `pb${q.id}`;
    b.className = 'pb';
    b.textContent = i + 1;
    b.onclick = () => { currentQ = i; renderQ(); };
    g.appendChild(b);
  });
}

function updatePalette() {
  QUESTIONS.forEach((q, i) => {
    const b = $(`pb${q.id}`);
    if (!b) return;
    b.className = 'pb' +
      (answers[q.id] !== undefined ? ' done' : '') +
      (i === currentQ ? ' cur' : '');
  });
}

function updateProg() {
  const done = Object.keys(answers).length;
  const pct = Math.round(done / QUESTIONS.length * 100);
  $('progFill').style.width = pct + '%';
  $('progLbl').textContent = `${done} / ${QUESTIONS.length} answered`;
}

// ── Modal ────────────────────────────────────
function confirmSubmit() {
  const skip = QUESTIONS.length - Object.keys(answers).length;
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

  const isSJT = true;
  const isFullMock = false;

  const ucatReport = typeof UCATScoring !== 'undefined'
    ? UCATScoring.generateUCATReport({
        testType: isFullMock ? 'FULL_MOCK' : 'SECTIONAL_TEST',
        examName: window.EXAM_NAME || 'Situational Judgement Mock Test',
        questions: QUESTIONS,
        studentAnswers: answers,
        studentData: student
      })
    : null;

  let correct = ucatReport ? ucatReport.overallStats.correct : 0;
  let wrong = ucatReport ? ucatReport.overallStats.wrong : 0;
  let unattempted = ucatReport ? ucatReport.overallStats.unattempted : 0;
  let partial = ucatReport ? (ucatReport.overallStats.partial || 0) : 0;
  let rawScore = ucatReport ? ucatReport.overallStats.rawScore : 0;
  let total = QUESTIONS.length;
  let pct = ucatReport ? Math.round(ucatReport.overallStats.accuracy) : Math.round((correct / total) * 100);
  let grade = isSJT && ucatReport && ucatReport.sjtReport
    ? ucatReport.sjtReport.band
    : (pct >= 90 ? 'A+' : pct >= 80 ? 'A' : pct >= 70 ? 'B' : pct >= 60 ? 'C' : 'D');

  let scaled = null;
  if (!isSJT && ucatReport) {
    scaled = ucatReport.totalCognitiveScore;
  }

  const details = ucatReport ? ucatReport.detailedReviewItems : QUESTIONS.map(q => {
    const chosen = answers[q.id];
    let status = (chosen === undefined ? 'unattempted' : (chosen === q.answer ? 'correct' : 'wrong'));
    return { ...q, chosen, status, marks: chosen === q.answer ? 1 : 0 };
  });

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
    scaled,
    isSJT,
    isFullMock,
    sjtBand: isSJT && ucatReport && ucatReport.sjtReport ? ucatReport.sjtReport.band : null,
    sjtInterpretation: isSJT && ucatReport && ucatReport.sjtReport ? ucatReport.sjtReport.interpretation : null,
    examName: window.EXAM_NAME || 'Situational Judgement Mock Test',
    topicNumber: 5,
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
  const { student, correct, wrong, unattempted, partial = 0, rawScore, total, pct, grade, scaled, details, isSJT, isFullMock, sjtBand, sjtInterpretation, ucatReport } = result;
  const wrap = $('resWrap');
  const scoreColor = pct >= 70 ? '#10b981' : pct >= 50 ? '#f59e0b' : '#ef4444';

  const savedBadge = saveRes && saveRes.ok
    ? `<div class="saved-badge">✅ Result saved to database</div>`
    : (SUPABASE_CONFIG && SUPABASE_CONFIG.url !== 'YOUR_SUPABASE_URL'
        ? `<div class="saved-badge" style="color:#ef4444;border-color:rgba(239,68,68,0.3);background:rgba(239,68,68,0.08)">⚠️ Save failed — check Supabase config</div>`
        : '');

  const wrongDetails = details.filter(d => d.status !== 'correct');

  // Group by passage if present
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

  let reviewHTML = '';
  if (wrongDetails.length > 0) {
    Object.entries(passageGroups).forEach(([pid, qs]) => {
      const passage = typeof PASSAGES !== 'undefined' ? PASSAGES[pid] : null;
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

  // Hero Display
  let scoreHeroHTML = '';
  let subtestCardHTML = '';

  if (isSJT) {
    scoreHeroHTML = `
      <div class="sat-score" style="color:#a855f7">${sjtBand || grade}</div>
      <div class="score-line">Situational Judgement · Raw Marks: ${rawScore !== undefined ? rawScore : correct} / ${total} (${pct}%)</div>
      ${sjtInterpretation ? `<div style="font-size:0.85rem; color:rgba(255,255,255,0.85); margin-top:8px; max-width:600px; margin-left:auto; margin-right:auto;">${sjtInterpretation}</div>` : ''}
    `;

    subtestCardHTML = `
      <div style="background:var(--surface2); border:1px solid var(--border); border-radius:10px; padding:16px; display:flex; flex-direction:column; gap:8px;">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <span style="font-weight:600; font-size:0.9rem; color:var(--text);">⚖️ Situational Judgement</span>
          <span style="font-size:0.75rem; color:var(--muted);">${rawScore !== undefined ? rawScore : correct}/${total} Raw Marks</span>
        </div>
        <div style="font-family:var(--head); font-size:1.8rem; font-weight:800; color:var(--accent2); margin:4px 0;">${sjtBand || grade}</div>
        <div style="font-size:0.8rem; color:var(--muted);">Partial credit applied (1.0 exact, 0.5 adjacent)</div>
      </div>
    `;
  } else if (isFullMock && ucatReport) {
    const secKeys = Object.keys(ucatReport.sections);
    scoreHeroHTML = `
      <div class="sat-score" style="color:${scoreColor}">${scaled} <span style="font-size:2rem; font-family:var(--font); color:var(--muted); font-weight:normal;">/ ${ucatReport.maxCognitiveScore}</span></div>
      <div class="score-line">Total Cognitive Scaled Score · ${correct} / ${total} correct (${pct}%) · Grade: ${grade}</div>
      ${ucatReport.sjtReport ? `<div style="color:var(--accent2); font-weight:600; margin-top:4px;">SJT: ${ucatReport.sjtReport.band}</div>` : ''}
    `;

    subtestCardHTML = `
      <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap:14px;">
        ${secKeys.map(k => {
          const s = ucatReport.sections[k];
          if (s.isSJT) {
            return `
              <div style="background:var(--surface2); border:1px solid var(--border); border-radius:10px; padding:14px;">
                <div style="font-weight:600; font-size:0.85rem; color:var(--text);">⚖️ ${s.name}</div>
                <div style="font-family:var(--head); font-size:1.6rem; font-weight:800; color:var(--accent2); margin:4px 0;">${s.band}</div>
                <div style="font-size:0.75rem; color:var(--muted);">Raw: ${s.rawScore}/${s.maxPossibleScore} (${s.accuracy}%)</div>
              </div>
            `;
          }
          const barWidth = Math.round(((s.scaledScore - 300) / 600) * 100);
          return `
            <div style="background:var(--surface2); border:1px solid var(--border); border-radius:10px; padding:14px;">
              <div style="font-weight:600; font-size:0.85rem; color:var(--text);">🧩 ${s.name}</div>
              <div style="font-family:var(--head); font-size:1.6rem; font-weight:800; color:var(--accent2); margin:4px 0;">${s.scaledScore} <span style="font-size:0.8rem; font-weight:normal; color:var(--muted);">/ 900</span></div>
              <div style="font-size:0.75rem; color:var(--muted); margin-bottom:6px;">Raw: ${s.rawScore}/${s.maxPossibleScore} (${s.accuracy}%)</div>
              <div style="height:5px; background:var(--surface); border-radius:99px; overflow:hidden;">
                <div style="height:100%; width:${barWidth}%; background:linear-gradient(90deg, var(--accent), var(--accent2));"></div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  } else {
    const secName = window.EXAM_NAME || 'Situational Judgement Mock Test';
    const barWidth = scaled ? Math.round(((scaled - 300) / 600) * 100) : 0;
    scoreHeroHTML = `
      <div class="sat-score" style="color:${scoreColor}">${scaled} <span style="font-size:2rem; font-family:var(--font); color:var(--muted); font-weight:normal;">/ 900</span></div>
      <div class="score-line">Official UCAT Scaled Score · ${correct} / ${total} correct (${pct}%) · Grade: ${grade}</div>
    `;

    subtestCardHTML = `
      <div style="background:var(--surface2); border:1px solid var(--border); border-radius:10px; padding:16px; display:flex; flex-direction:column; gap:8px;">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <span style="font-weight:600; font-size:0.9rem; color:var(--text);">🧩 ${secName}</span>
          <span style="font-size:0.75rem; color:var(--muted);">${correct}/${total} Raw Score (${pct}%)</span>
        </div>
        <div style="font-family:var(--head); font-size:1.8rem; font-weight:800; color:var(--accent2); margin:4px 0;">${scaled} <span style="font-size:0.8rem; font-family:var(--font); color:var(--muted); font-weight:normal;">/ 900</span></div>
        <div style="height:6px; background:var(--surface); border-radius:99px; overflow:hidden;">
          <div style="height:100%; width:${barWidth}%; background:linear-gradient(90deg, var(--accent), var(--accent2)); border-radius:99px;"></div>
        </div>
      </div>
    `;
  }

  wrap.innerHTML = `
    <div class="res-hero">
      <div style="font-size:0.8rem;opacity:.55;text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px">${window.EXAM_NAME || 'Situational Judgement Mock Test'}</div>
      ${scoreHeroHTML}
      <div class="score-sub">${student.name} &nbsp;·&nbsp; ${new Date(result.submitTime).toLocaleString()}</div>
      ${savedBadge}
    </div>

    <div class="stats-row">
      <div class="stat-card c"><div class="num">${correct}</div><div class="lbl">Correct</div></div>
      <div class="stat-card w"><div class="num">${wrong}</div><div class="lbl">Wrong</div></div>
      <div class="stat-card s"><div class="num">${unattempted}</div><div class="lbl">Skipped</div></div>
      <div class="stat-card"><div class="num">${pct}%</div><div class="lbl">Accuracy</div></div>
    </div>

    <!-- Subtest Scaled Score Breakdown Card -->
    <div class="chart-card" style="margin-bottom:20px;">
      <h3 style="font-size:0.82rem; text-transform:uppercase; letter-spacing:0.06em; color:var(--muted); margin-bottom:16px;">🧩 Official UCAT Performance Breakdown</h3>
      ${subtestCardHTML}
    </div>

    <div class="charts-row">
      <div class="chart-card"><h3>📊 Question Breakdown</h3><canvas id="pieChart" height="220"></canvas></div>
      <div class="chart-card"><h3>📈 Accuracy</h3><canvas id="barChart" height="220"></canvas></div>
    </div>

    ${wrongDetails.length > 0 ? `
    <div class="inc-review">
      <h3>⚠️ Review: ${wrong} Wrong &nbsp;+&nbsp; ${partial > 0 ? partial + ' Partial &nbsp;+&nbsp; ' : ''}${unattempted} Skipped</h3>
      ${reviewHTML}
    </div>` : `<div class="inc-review" style="text-align:center;padding:32px"><div style="font-size:3rem;margin-bottom:8px">🎉</div><h3 style="color:var(--green);border:none;padding:0">Perfect Score!</h3></div>`}

    <div class="res-actions" id="resActions">
      <button class="btn btn-primary" style="width:auto" onclick="location.reload()">🔄 Retake Test</button>
      <a href="../index.html" class="btn btn-outline" style="text-decoration:none">🏠 Home</a>
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
    statusBadge = `<div class="inc-row" style="color:var(--amber)"><span class="label">🟡 Partial Choice:</span><span>(${LETTERS[q.chosen] || (q.chosen+1)}) ${(q.options && q.options[q.chosen]) || '–'} (0.5 mark)</span></div>`;
  } else if (q.status === 'unattempted') {
    statusBadge = `<div class="inc-row" style="color:var(--amber)"><span class="label">⏭ Skipped</span></div>`;
  }

  return `
    <div class="inc-q">
      <div class="inc-q-text">Q${q.id || q.qNum} <span style="color:var(--accent2);font-size:0.75rem">[${q.topic || q.sectionName || window.EXAM_NAME}]</span><br>${(q.text || '').substring(0,250)}${(q.text || '').length > 250 ? '…' : ''}</div>
      ${statusBadge}
      <div class="inc-row right"><span class="label">✅ Correct:</span><span>(${LETTERS[q.answer] || (q.answer+1)}) ${(q.options && q.options[q.answer]) || '–'}</span></div>
      ${q.explanation ? `<div style="font-size:0.78rem;color:var(--muted);margin-top:6px;line-height:1.5;background:rgba(124,58,237,0.06);border-radius:8px;padding:8px 10px">${q.explanation}</div>` : ''}
    </div>`;
}
