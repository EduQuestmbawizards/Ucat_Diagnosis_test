window.EXAM_NAME = 'Quantitative Reasoning Mock Test';
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

// ── Initialization ─────────────────────────────
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
  const q = QUESTIONS[currentQ];

  // Show/hide passage
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
  if (currentQ < QUESTIONS.length-1) { currentQ++; renderQ(); }
  else confirmSubmit();
}

// ── Palette & progress ───────────────────────
function buildPalette() {
  const g = $('palette');
  g.innerHTML = '';
  QUESTIONS.forEach((q, i) => {
    const b = document.createElement('button');
    b.id = `pb${q.id}`; b.className = 'pb'; b.textContent = i + 1;
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
  const pct  = Math.round(done / QUESTIONS.length * 100);
  $('progFill').style.width = pct + '%';
  $('progLbl').textContent  = `${done} / ${QUESTIONS.length} answered`;
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

  let correct=0, wrong=0, unattempted=0;
  const details = QUESTIONS.map(q => {
    const chosen = answers[q.id];
    let status;
    if (chosen === undefined) { unattempted++; status='unattempted'; }
    else if (chosen === q.answer) { correct++; status='correct'; }
    else { wrong++; status='wrong'; }
    return { ...q, chosen, status };
  });

  const total  = QUESTIONS.length;
  const pct    = Math.round(correct/total*100);
  const grade  = pct>=90?'A+':pct>=80?'A':pct>=70?'B':pct>=60?'C':'D';

  // Calculate scaled scores for the subtests
  const subtests = ['Quantitative Reasoning'];
  const topicStats = {};
  subtests.forEach(topic => {
    topicStats[topic] = { correct: 0, total: 0, scaled: 300 };
  });

  details.forEach(d => {
    const topic = d.topic;
    if (topicStats[topic]) {
      topicStats[topic].total++;
      if (d.status === 'correct') {
        topicStats[topic].correct++;
      }
    }
  });

  let scaled = 0;
  subtests.forEach(topic => {
    const stats = topicStats[topic];
    if (stats.total > 0) {
      stats.scaled = 300 + Math.round((stats.correct / stats.total) * 600);
    }
    scaled += stats.scaled;
  });

  const result = {
    student, correct, wrong, unattempted, total, pct, grade, scaled,
    topicStats, examName: 'Quantitative Reasoning Mock Test', topicNumber: 2,
    details, answers, submitTime: new Date().toISOString()
  };

  const saveResult = await saveToSupabase(result);
  $('savingOverlay').classList.remove('show');

  showPage('pageResult');
  $('timerBox').style.display = 'none';
  renderResults(result, saveResult);
}

// ── Results ──────────────────────────────────
function renderResults(result, saveRes) {
  const { student, correct, wrong, unattempted, total, pct, grade, scaled, details } = result;
  const wrap = $('resWrap');
  const scoreColor = pct>=70?'#10b981':pct>=50?'#f59e0b':'#ef4444';
  const savedBadge = saveRes && saveRes.ok
    ? `<div class="saved-badge">✅ Result saved to database</div>`
    : (SUPABASE_URL !== 'YOUR_SUPABASE_URL'
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
    // Passage-based review blocks
    Object.entries(passageGroups).forEach(([pid, qs]) => {
      const passage = PASSAGES[pid];
      reviewHTML += `
        <div class="review-passage-block">
          <div class="review-passage-label">📄 ${passage.title} · ${passage.subject}</div>
          <div class="review-passage-text">${passage.text}</div>
        </div>
        ${qs.map(q => buildReviewQ(q)).join('')}
        <div style="height:8px"></div>
      `;
    });
    // Standalone wrong
    standaloneWrong.forEach(q => {
      reviewHTML += buildReviewQ(q);
    });
  }

  // Subtests stats grouping
  const subtests = ['Quantitative Reasoning'];
  const topicStats = result.topicStats || {};
  if (!result.topicStats) {
    subtests.forEach(topic => {
      topicStats[topic] = { correct: 0, total: 0, scaled: 300 };
    });
    details.forEach(d => {
      const topic = d.topic;
      if (topicStats[topic]) {
        topicStats[topic].total++;
        if (d.status === 'correct') {
          topicStats[topic].correct++;
        }
      }
    });
    subtests.forEach(topic => {
      const stats = topicStats[topic];
      if (stats.total > 0) {
        stats.scaled = 300 + Math.round((stats.correct / stats.total) * 600);
      }
    });
  }

  wrap.innerHTML = `
    <div class="res-hero">
      <div style="font-size:0.8rem;opacity:.55;text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px">UCAT Diagnostic Test</div>
      <div class="sat-score" style="color:${scoreColor}">${scaled} <span style="font-size:2rem; font-family:var(--font); color:var(--muted); font-weight:normal;">/ 900</span></div>
      <div class="score-line">Scaled Score · ${correct} / ${total} correct (${pct}%) · Grade: ${grade}</div>
      <div class="score-sub">${student.name} &nbsp;·&nbsp; ${new Date(result.submitTime).toLocaleString()}</div>
      ${savedBadge}
    </div>

    <div class="stats-row">
      <div class="stat-card c"><div class="num">${correct}</div><div class="lbl">Correct</div></div>
      <div class="stat-card w"><div class="num">${wrong}</div><div class="lbl">Wrong</div></div>
      <div class="stat-card s"><div class="num">${unattempted}</div><div class="lbl">Skipped</div></div>
      <div class="stat-card"><div class="num">${pct}%</div><div class="lbl">Score</div></div>
    </div>

    <!-- Subtest Scaled Score Breakdown Card -->
    <div class="chart-card" style="margin-bottom:20px;">
      <h3 style="font-size:0.82rem; text-transform:uppercase; letter-spacing:0.06em; color:var(--muted); margin-bottom:16px;">🧩 Subtest Scaled Scores (300-900 range each)</h3>
      <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap:16px;">
        ${subtests.map(topic => {
          const stats = topicStats[topic];
          const barWidth = Math.round(((stats.scaled - 300) / 600) * 100);
          let subtestIcon = '📖';
          if (topic === 'Decision Making') subtestIcon = '🧩';
          else if (topic === 'Quantitative Reasoning') subtestIcon = '🔢';
          
          return `
            <div style="background:var(--surface2); border:1px solid var(--border); border-radius:10px; padding:16px; display:flex; flex-direction:column; gap:8px;">
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <span style="font-weight:600; font-size:0.9rem; color:var(--text);">${subtestIcon} ${topic}</span>
                <span style="font-size:0.75rem; color:var(--muted);">${stats.correct}/${stats.total} Correct</span>
              </div>
              <div style="font-family:var(--head); font-size:1.8rem; font-weight:800; color:var(--accent2); margin:4px 0;">${stats.scaled} <span style="font-size:0.8rem; font-family:var(--font); color:var(--muted); font-weight:normal;">/ 900</span></div>
              <div style="height:6px; background:var(--surface); border-radius:99px; overflow:hidden;">
                <div style="height:100%; width:${barWidth}%; background:linear-gradient(90deg, var(--accent), var(--accent2)); border-radius:99px;"></div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>

    <div class="charts-row">
      <div class="chart-card"><h3>📊 Score Breakdown</h3><canvas id="pieChart" height="220"></canvas></div>
      <div class="chart-card"><h3>📈 Subtest Performance</h3><canvas id="barChart" height="220"></canvas></div>
    </div>

    ${wrongDetails.length > 0 ? `
    <div class="inc-review">
      <h3>⚠️ Review: ${wrong} Wrong &nbsp;+&nbsp; ${unattempted} Skipped</h3>
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
      datasets:[{ data:[correct,wrong,unattempted],
        backgroundColor:['#10b981','#ef4444','#f59e0b'], borderWidth:0, hoverOffset:4 }] },
    options:{ plugins:{ legend:{ position:'bottom', labels:{ font:{ family:'IBM Plex Sans' }, color:'#8b83a3' } } }, cutout:'68%' }
  });

  // Bar chart by subtest (showing scaled score)
  const bands = subtests.map(topic => {
    const stats = topicStats[topic];
    return {
      label: topic.length > 16 ? topic.substring(0,16)+'…' : topic,
      score: stats.scaled,
      total: 900
    };
  });
  const bScores = bands.map(b => b.score);
  const bColors = subtests.map(topic => {
    const stats = topicStats[topic];
    const p = stats.total > 0 ? stats.correct / stats.total : 0;
    return p >= 0.7 ? '#10b981' : p >= 0.4 ? '#f59e0b' : '#ef4444';
  });

  new Chart($('barChart'), {
    type:'bar',
    data:{ labels: bands.map(b=>b.label),
      datasets:[{ label:'Scaled Score', data: bScores,
        backgroundColor: bColors.map(c=>c+'33'), borderColor: bColors,
        borderWidth:2, borderRadius:6 }] },
    options:{
      plugins:{ legend:{display:false} },
      scales:{
        y:{ min: 300, max: 900, ticks:{ stepSize:100, font:{family:'IBM Plex Mono'}, color:'#8b83a3' }, grid:{color:'rgba(124,58,237,0.1)'} },
        x:{ ticks:{ font:{family:'IBM Plex Sans', size:9}, color:'#8b83a3' }, grid:{display:false} }
      }
    }
  });
}

function buildReviewQ(q) {
  return `
    <div class="inc-q">
      <div class="inc-q-text">Q${q.id} <span style="color:var(--accent2);font-size:0.75rem">[${q.topic}]</span><br>${q.text}</div>
      ${q.status==='wrong'
        ?`<div class="inc-row wrong"><span class="label">❌ Your answer:</span><span>(${LETTERS[q.chosen]}) ${q.options[q.chosen]}</span></div>`
        :`<div class="inc-row" style="color:var(--amber)"><span class="label">⏭ Skipped</span></div>`}
      <div class="inc-row right"><span class="label">✅ Correct:</span><span>(${LETTERS[q.answer]}) ${q.options[q.answer]}</span></div>
      <div style="font-size:0.78rem;color:var(--muted);margin-top:6px;line-height:1.5;background:rgba(124,58,237,0.06);border-radius:8px;padding:8px 10px">${q.explanation}</div>
    </div>`;
}

// ── PDF Download ──────────────────────────────
function downloadPDF() {
  const element = document.getElementById('resWrap');
  const actions = document.getElementById('resActions');
  if (actions) actions.style.display = 'none';

  const opt = {
    margin:       [10, 10, 10, 10],
    filename:     `EduQuest_UCAT_Report_${student.name.replace(/[^a-zA-Z0-9]/g, '_')}.pdf`,
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
