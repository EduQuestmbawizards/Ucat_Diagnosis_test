
    const ADMIN_EMAIL = 'rupali.eduquest@gmail.com'; // <-- yahan apna admin email daalo

    const supabaseClient = window.supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey);

    let allProfiles = [];
    let currentFilter = 'pending';
    const LETTERS = ['A', 'B', 'C', 'D'];
    let modalChart = null;
    let allReports = [];
    let groupedReports = {};

    // ── Topic to Question file mapping ─────
    const TOPIC_QUESTIONS_MAP = {
      'Reading Comprehension': { q: './questions.js', dir: '.' },
      'Vocabulary in Context': { q: './topic2/questions2.js', dir: './topic2' },
      'Grammar & Usage': { q: './topic-3/questions.js', dir: './topic-3' },
      'Sentence Completion': { q: './topic4/questions.js', dir: './topic4' },
      'Rhetorical Skills': { q: './topic5/questions.js', dir: './topic5' },
      'Critical Thinking & Data': { q: './test_6/questions.js', dir: './test_6' },
      'Paired Passages': { q: './topic_7/questions.js', dir: './topic_7' },
      'Research Notes Questions': { q: './topic_8/questions.js', dir: './topic_8' },
      'Numbers & Operations': { q: './topic_9/questions.js', dir: './topic_9' },
      'Linear Algebra': { q: './topic_10/questions.js', dir: './topic_10' },
      'Functions & Graphs': { q: './topic_11/questions.js', dir: './topic_11' },
      'Quadratics & Polynomials': { q: './topic_12/questions.js', dir: './topic_12' },
      'Geometry': { q: './topic_13/questions.js', dir: './topic_13' },
      'Trigonometry': { q: './topic_14/questions.js', dir: './topic_14' },
      'Statistics & Probability': { q: './topic_15/questions.js', dir: './topic_15' },
      'Advanced Math': { q: './topic_16/questions.js', dir: './topic_16' },
      'Words in Context': { q: './wic/questions_wic.js', dir: './wic' },
      'Text Structure and Purpose': { q: './text_structure_purpose/questions_sp.js', dir: './text_structure_purpose' },
      'Central Ideas and Details': { q: './Central_Ideas_and_Details/questions_cid.js', dir: './Central_Ideas_and_Details' },
      'Command of Evidence: Textual': { q: './coe_textual/questions_coe_textual.js', dir: './coe_textual' },
      'Inferences': { q: './inferences/questions.js', dir: './inferences' },
      'UCAT Diagnostic': { q: './questions.js', dir: '.' },
      'Verbal Reasoning Mock Test': { q: './test_2/question_2.js', dir: './test_2' },
      'Decision Making Mock Test': { q: './test_3/question_3.js', dir: './test_3' },
      'Quantitative Reasoning Mock Test': { q: './test_4/question_4.js', dir: './test_4' },
      'Situational Judgement Mock Test': { q: './test_5/question_5.js', dir: './test_5' },
      'UCAT Full Mock Test (No AR)': { q: './test_6/question_6.js', dir: './test_6' },
      'UCAT Verbal Reasoning Mock 2': { q: './test_7/question_7.js', dir: './test_7' },
      'UCAT Decision Making Mock 2': { q: './test_8/question_8.js', dir: './test_8' },
      'UCAT Quantitative Reasoning Mock 2 Test': { q: './test_9/question_9.js', dir: './test_9' },
      'UCAT Situational Judgement Mock 2 Test': { q: './test_10/question_10.js', dir: './test_10' },
      'UCAT Verbal Reasoning Mock 3 Test': { q: './test_11/question_11.js', dir: './test_11' },
      'UCAT Quantitative Reasoning Mock 3 Test': { q: './test_12/question_12.js', dir: './test_12' },
      'UCAT Decision Analysis Mock': { q: './test_13/question_13.js', dir: './test_13' },
      'UCAT Situational Judgement Mock 3 Test': { q: './test_14/question_14.js', dir: './test_14' }
    };

    // ── Fix Image Paths for deployment consistency ────────────────
    function fixAllImagePaths(obj, dir) {
      if (!obj) return obj;
      let cleanDir = '';
      if (dir) {
        cleanDir = dir.replace(/^\.\//, '').replace(/\/$/, '');
      }
      function fixHTML(str) {
        if (!str || typeof str !== 'string') return str;
        // 1. Strip "../" from "../test_X/..."
        str = str.replace(/src=(['"])\.\.\/(test_[^'"]+)/g, 'src=$1$2');
        // 2. Prepend cleanDir to raw "image/" or "images/" paths if cleanDir is specified
        if (cleanDir && cleanDir !== '.') {
          str = str.replace(/src=(['"])(images?\/[^'"]+)/g, `src=$1${cleanDir}/$2`);
        }
        return str;
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

    const loadedQuestionsCache = {};
    const loadedImagesCache = {};

    function getTopicMapping(topicName) {
      if (!topicName) return null;
      const clean = topicName.trim().toLowerCase();

      if (clean.startsWith('ucat full mock test')) {
        return { key: topicName, q: './full_mock_data.js', dir: '.' };
      }

      // Handle dynamic test parts
      if (clean.startsWith('verbal reasoning - part ')) {
        return { key: topicName, q: './test_vr_parts/master_questions.js', dir: './test_vr_parts' };
      }
      if (clean.startsWith('decision making - part ')) {
        return { key: topicName, q: './test_dm_parts/master_questions.js', dir: './test_dm_parts' };
      }
      if (clean.startsWith('quantitative reasoning - part ')) {
        return { key: topicName, q: './test_qr_parts/master_questions.js', dir: './test_qr_parts' };
      }
      if (clean.startsWith('situational judgement - part ')) {
        return { key: topicName, q: './test_sj_parts/master_questions.js', dir: './test_sj_parts' };
      }

      const key = Object.keys(TOPIC_QUESTIONS_MAP).find(k => k.trim().toLowerCase() === clean);
      return key ? { key, ...TOPIC_QUESTIONS_MAP[key] } : null;
    }

    function loadQuestionsForTopic(topicName) {
      if (loadedQuestionsCache[topicName]) {
        return Promise.resolve(loadedQuestionsCache[topicName]);
      }
      return new Promise((resolve) => {
        const clean = (topicName || '').trim().toLowerCase();
        if (clean.startsWith('ucat full mock test')) {
          const match = clean.match(/\d+/);
          const mockId = match ? match[0] : '1';
          if (window.FULL_MOCKS && window.FULL_MOCKS[mockId]) {
            const mock = window.FULL_MOCKS[mockId];
            const qs = [];
            ['vr', 'dm', 'qr', 'ar', 'sjt'].forEach(sec => {
              if (mock.sections && mock.sections[sec] && mock.sections[sec].questions) {
                mock.sections[sec].questions.forEach(q => {
                  qs.push({ ...q, sectionName: mock.sections[sec].name });
                });
              }
            });
            loadedQuestionsCache[topicName] = fixAllImagePaths(qs, '.');
            resolve(loadedQuestionsCache[topicName]);
            return;
          }
        }

        const mapping = getTopicMapping(topicName);
        const path = mapping ? mapping.q : null;
        const dir = mapping ? mapping.dir : null;
        if (!path) {
          resolve(null);
          return;
        }

        const loadViaIframe = () => {
          try {
            const iframe = document.createElement('iframe');
            iframe.style.display = 'none';
            document.body.appendChild(iframe);
            const doc = iframe.contentDocument || iframe.contentWindow.document;
            const script = doc.createElement('script');
            script.src = path;
            script.onload = () => {
              try {
                const qs = iframe.contentWindow.QUESTIONS;
                if (qs && Array.isArray(qs)) {
                  loadedQuestionsCache[topicName] = fixAllImagePaths(qs, dir);
                  resolve(loadedQuestionsCache[topicName]);
                } else {
                  resolve(null);
                }
              } catch (e) {
                resolve(null);
              }
              document.body.removeChild(iframe);
            };
            script.onerror = () => {
              resolve(null);
              document.body.removeChild(iframe);
            };
            doc.head.appendChild(script);
          } catch (e) {
            resolve(null);
          }
        };

        fetch(path)
          .then(res => {
            if (!res.ok) throw new Error("Failed to load");
            return res.text();
          })
          .then(text => {
            let code = text.replace(/(const|let|var)\s+QUESTIONS\s*=/, "var local_qs =");
            code += "\n; if (typeof local_qs !== 'undefined') { local_qs } else if (typeof QUESTIONS !== 'undefined') { QUESTIONS } else { null };";
            try {
              const fn = new Function(code);
              const result = fn();
              if (result && Array.isArray(result)) {
                loadedQuestionsCache[topicName] = fixAllImagePaths(result, dir);
                resolve(loadedQuestionsCache[topicName]);
              } else {
                throw new Error("Eval did not yield array");
              }
            } catch (e) {
              console.warn("Function execution failed, trying iframe loading", e);
              loadViaIframe();
            }
          })
          .catch(err => {
            console.warn("Fetch failed, trying iframe loading", err);
            loadViaIframe();
          });
      });
    }

    function loadImageMappingForTopic(topicName, dir) {
      if (loadedImagesCache[topicName]) {
        return Promise.resolve(loadedImagesCache[topicName]);
      }
      return new Promise((resolve) => {
        if (dir === '.' || !dir) {
          resolve({});
          return;
        }
        const path = dir + '/images.js';

        const loadViaIframe = () => {
          try {
            const iframe = document.createElement('iframe');
            iframe.style.display = 'none';
            document.body.appendChild(iframe);
            const doc = iframe.contentDocument || iframe.contentWindow.document;
            const script = doc.createElement('script');
            script.src = path;
            script.onload = () => {
              try {
                const imgs = iframe.contentWindow.QUESTION_IMAGES;
                loadedImagesCache[topicName] = imgs || {};
                resolve(imgs || {});
              } catch (e) {
                resolve({});
              }
              document.body.removeChild(iframe);
            };
            script.onerror = () => {
              resolve({});
              document.body.removeChild(iframe);
            };
            doc.head.appendChild(script);
          } catch (e) {
            resolve({});
          }
        };

        fetch(path)
          .then(res => {
            if (!res.ok) throw new Error("No images.js");
            return res.text();
          })
          .then(text => {
            let code = text.replace(/(const|let|var)\s+QUESTION_IMAGES\s*=/, "var local_imgs =");
            code += "\n; if (typeof local_imgs !== 'undefined') { local_imgs } else if (typeof QUESTION_IMAGES !== 'undefined') { QUESTION_IMAGES } else { {} };";
            const fn = new Function(code);
            const result = fn();
            loadedImagesCache[topicName] = result || {};
            resolve(result || {});
          })
          .catch(() => {
            loadViaIframe();
          });
      });
    }

    function closeModal() {
      document.getElementById('testModal').classList.remove('open');
    }

    // Close modal on overlay click
    document.addEventListener('DOMContentLoaded', () => {
      const modal = document.getElementById('testModal');
      if (modal) {
        modal.addEventListener('click', function (e) {
          if (e.target === this) closeModal();
        });
      }
    });

    // ── Check session on load ──────────────────────
    (async function init() {
      const { data: { session } } = await supabaseClient.auth.getSession();
      if (session && session.user.email === ADMIN_EMAIL) {
        showDashboard();
      } else {
        showLogin();
      }
    })();

    function showLogin() {
      document.getElementById('loginScreen').style.display = 'block';
      document.getElementById('dashboard').style.display = 'none';
    }

    function showDashboard() {
      document.getElementById('loginScreen').style.display = 'none';
      document.getElementById('dashboard').style.display = 'block';
      loadProfiles();
    }

    // ── Login ───────────────────────────────────────
    async function adminLogin() {
      const email = document.getElementById('adminEmail').value.trim();
      const password = document.getElementById('adminPassword').value;
      const msg = document.getElementById('loginMsg');

      if (email.toLowerCase() !== ADMIN_EMAIL.toLowerCase()) {
        msg.textContent = 'This account is not authorized as admin.';
        return;
      }

      const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });
      if (error) {
        msg.textContent = error.message;
        return;
      }
      showDashboard();
    }

    async function adminLogout() {
      await supabaseClient.auth.signOut();
      showLogin();
    }

    // ── Load profiles ────────────────────────────────
    async function loadProfiles() {
      const { data, error } = await supabaseClient
        .from('profiles')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        document.getElementById('userList').innerHTML = `<div class="empty">Error loading data: ${error.message}</div>`;
        return;
      }

      allProfiles = data || [];
      updateStats();
      renderList();
    }

    function updateStats() {
      const total = allProfiles.length;
      const satApproved = allProfiles.filter(p => p.has_access).length;
      const topicApproved = allProfiles.filter(p => p.has_topic_reading_access || p.has_topic_math_access || p.has_topic_class_test_access).length;
      const actApproved = allProfiles.filter(p => p.has_act_access).length;
      const ucatApproved = allProfiles.filter(p => p.has_ucat_access || p.has_access).length;

      document.getElementById('statTotal').textContent = total;
      document.getElementById('statSatApproved').textContent = satApproved;
      document.getElementById('statSatPending').textContent = total - satApproved;
      document.getElementById('statTopicApproved').textContent = topicApproved;
      document.getElementById('statTopicPending').textContent = total - topicApproved;
      document.getElementById('statActApproved').textContent = actApproved;
      document.getElementById('statActPending').textContent = total - actApproved;
      if (document.getElementById('statUcatApproved')) document.getElementById('statUcatApproved').textContent = ucatApproved;
      if (document.getElementById('statUcatPending')) document.getElementById('statUcatPending').textContent = total - ucatApproved;
    }

    // ── Filter tabs ───────────────────────────────────
    function setFilter(filter) {
      currentFilter = filter;
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      document.querySelector(`.tab[data-filter="${filter}"]`).classList.add('active');

      const usersSection = document.getElementById('usersSection');
      const reportsSection = document.getElementById('reportsSection');

      if (filter === 'reports') {
        usersSection.style.display = 'none';
        reportsSection.classList.add('active');
        reportsSection.style.display = 'block';
        loadReportsData();
      } else {
        usersSection.style.display = 'block';
        reportsSection.classList.remove('active');
        reportsSection.style.display = 'none';
        renderList();
      }
    }

    // ── Render list ───────────────────────────────────
    function renderList() {
      const search = document.getElementById('searchBox').value.trim().toLowerCase();
      let list = allProfiles;

      if (currentFilter === 'pending') {
        list = list.filter(p => !p.has_access || !p.has_ucat_access || (!p.has_topic_reading_access && !p.has_topic_math_access && !p.has_topic_class_test_access));
      } else if (currentFilter === 'approved') {
        list = list.filter(p => p.has_access || p.has_ucat_access || p.has_topic_reading_access || p.has_topic_math_access || p.has_topic_class_test_access);
      }

      if (search) list = list.filter(p => (p.email || '').toLowerCase().includes(search));

      const container = document.getElementById('userList');
      if (list.length === 0) {
        container.innerHTML = `<div class="empty">No users found.</div>`;
        return;
      }

      container.innerHTML = list.map(p => `
    <div class="user-card">
      <div class="user-info">
        <div class="email">${p.email || '(no email)'}</div>
        <div class="meta">Signed up: ${p.created_at ? new Date(p.created_at).toLocaleString() : '–'}</div>
        <div style="margin-top: 8px; display: flex; gap: 8px; flex-wrap: wrap;">
          <span class="badge ${p.has_access ? 'granted' : 'pending'}">SAT: ${p.has_access ? '✓' : '⏳'}</span>
          <span class="badge ${p.has_topic_reading_access ? 'granted' : 'pending'}">Topic R&W: ${p.has_topic_reading_access ? '✓' : '⏳'}</span>
          <span class="badge ${p.has_topic_math_access ? 'granted' : 'pending'}">Math: ${p.has_topic_math_access ? '✓' : '⏳'}</span>
          <span class="badge ${p.has_topic_class_test_access ? 'granted' : 'pending'}">R&W Class Test: ${p.has_topic_class_test_access ? '✓' : '⏳'}</span>
          <span class="badge ${p.has_act_access ? 'granted' : 'pending'}">ACT: ${p.has_act_access ? '✓' : '⏳'}</span>
          <span class="badge ${(p.has_ucat_access || p.has_access) ? 'granted' : 'pending'}">UCAT: ${(p.has_ucat_access || p.has_access) ? '✓' : '⏳'}</span>
        </div>
        <div style="margin-top: 10px;">
          <input type="text" class="org-input" placeholder="Organization" value="${p.organization || ''}"
            onchange="updateOrg('${p.id}', this.value)">
        </div>
      </div>
      <div class="actions" style="display: flex; flex-direction: column; gap: 8px;">
        <div style="display: flex; align-items: center; justify-content: flex-end; gap: 8px;">
          <span style="font-size: 0.8rem; color: rgba(255,255,255,0.6); min-width: 95px; text-align: right;">SAT Test:</span>
          ${p.has_access
          ? `<button class="btn-sm btn-revoke" onclick="setAccess('${p.id}', 'sat', false)">Revoke</button>`
          : `<button class="btn-sm btn-approve" onclick="setAccess('${p.id}', 'sat', true)">Approve</button>`
        }
        </div>
        <div style="display: flex; align-items: center; justify-content: flex-end; gap: 8px;">
          <span style="font-size: 0.8rem; color: rgba(255,255,255,0.6); min-width: 95px; text-align: right;">Topic R&W:</span>
          ${p.has_topic_reading_access
          ? `<button class="btn-sm btn-revoke" onclick="setAccess('${p.id}', 'topic_rw', false)">Revoke</button>`
          : `<button class="btn-sm btn-approve" onclick="setAccess('${p.id}', 'topic_rw', true)">Approve</button>`
        }
        </div>
        <div style="display: flex; align-items: center; justify-content: flex-end; gap: 8px;">
          <span style="font-size: 0.8rem; color: rgba(255,255,255,0.6); min-width: 95px; text-align: right;">Topic Math:</span>
          ${p.has_topic_math_access
          ? `<button class="btn-sm btn-revoke" onclick="setAccess('${p.id}', 'topic_math', false)">Revoke</button>`
          : `<button class="btn-sm btn-approve" onclick="setAccess('${p.id}', 'topic_math', true)">Approve</button>`
        }
        </div>
        <div style="display: flex; align-items: center; justify-content: flex-end; gap: 8px;">
          <span style="font-size: 0.8rem; color: rgba(255,255,255,0.6); min-width: 95px; text-align: right;">R&W Class Test:</span>
          ${p.has_topic_class_test_access
          ? `<button class="btn-sm btn-revoke" onclick="setAccess('${p.id}', 'topic_class_test', false)">Revoke</button>`
          : `<button class="btn-sm btn-approve" onclick="setAccess('${p.id}', 'topic_class_test', true)">Approve</button>`
        }
        </div>
        <div style="display: flex; align-items: center; justify-content: flex-end; gap: 8px;">
          <span style="font-size: 0.8rem; color: rgba(255,255,255,0.6); min-width: 95px; text-align: right;">ACT Test:</span>
          ${p.has_act_access
          ? `<button class="btn-sm btn-revoke" onclick="setAccess('${p.id}', 'act', false)">Revoke</button>`
          : `<button class="btn-sm btn-approve" onclick="setAccess('${p.id}', 'act', true)">Approve</button>`
        }
        </div>
        <div style="display: flex; align-items: center; justify-content: flex-end; gap: 8px;">
          <span style="font-size: 0.8rem; color: rgba(255,255,255,0.6); min-width: 95px; text-align: right;">UCAT Test:</span>
          ${(p.has_ucat_access || p.has_access)
          ? `<button class="btn-sm btn-revoke" onclick="setAccess('${p.id}', 'ucat', false)">Revoke</button>`
          : `<button class="btn-sm btn-approve" onclick="setAccess('${p.id}', 'ucat', true)">Approve</button>`
        }
        </div>
      </div>
    </div>
  `).join('');
    }

    // ── Approve / Revoke ────────────────────────────
    async function setAccess(userId, type, value) {
      const updatePayload = {};
      if (type === 'sat') {
        updatePayload.has_access = value;
      } else if (type === 'topic_rw') {
        updatePayload.has_topic_reading_access = value;
      } else if (type === 'topic_math') {
        updatePayload.has_topic_math_access = value;
      } else if (type === 'topic_class_test') {
        updatePayload.has_topic_class_test_access = value;
      } else if (type === 'act') {
        updatePayload.has_act_access = value;
      } else if (type === 'ucat') {
        updatePayload.has_ucat_access = value;
      }

      let { error } = await supabaseClient
        .from('profiles')
        .update(updatePayload)
        .eq('id', userId);

      if (error && type === 'ucat') {
        // Fallback if has_ucat_access column is not present in PostgreSQL schema
        const fallbackPayload = { has_access: value };
        const res = await supabaseClient.from('profiles').update(fallbackPayload).eq('id', userId);
        error = res.error;
        if (!error) {
          const p = allProfiles.find(x => x.id === userId);
          if (p) p.has_access = value;
        }
      }

      if (error) {
        alert('Update failed: ' + error.message);
        return;
      }

      const p = allProfiles.find(x => x.id === userId);
      if (p) {
        if (type === 'sat') p.has_access = value;
        else if (type === 'topic_rw') p.has_topic_reading_access = value;
        else if (type === 'topic_math') p.has_topic_math_access = value;
        else if (type === 'topic_class_test') p.has_topic_class_test_access = value;
        else if (type === 'act') p.has_act_access = value;
        else if (type === 'ucat') p.has_ucat_access = value;
      }
      updateStats();
      if (currentFilter === 'reports') {
        renderReportsList();
      } else {
        renderList();
      }
    }

    // ── Update organization ──────────────────────────
    async function updateOrg(userId, value) {
      const { error } = await supabaseClient
        .from('profiles')
        .update({ organization: value })
        .eq('id', userId);

      if (error) {
        alert('Update failed: ' + error.message);
        return;
      }

      const p = allProfiles.find(x => x.id === userId);
      if (p) p.organization = value;
    }
    // ── REPORTS TAB LOGIC ──────────────────────
    async function loadReportsData() {
      try {
        // Fetch all UCAT diagnosis reports
        const { data: ucatData, error: ucatError } = await supabaseClient
          .from('Ucat_diagnosis')
          .select('*')
          .order('submit_time', { ascending: false });

        if (ucatError) console.warn('UCAT reports fetch error:', ucatError);

        // Fetch legacy sat_topic_report records
        const { data: satData, error: satError } = await supabaseClient
          .from('sat_topic_report')
          .select('*')
          .order('submit_time', { ascending: false });

        if (satError) console.warn('Legacy reports fetch error:', satError);

        // Filter out registration-only rows without submit_time for UCAT
        const validUcat = (ucatData || []).filter(r => r.submit_time || r.pct !== undefined);

        // Re-label any legacy sat_topic_report records so topic labels display as UCAT tests
        const mappedSatData = (satData || []).filter(t => t.submit_time || t.pct !== undefined).map(r => ({
          ...r,
          topic: (!r.topic || r.topic.includes('SAT')) ? 'UCAT Topic Test' : r.topic
        }));

        allReports = [...validUcat, ...mappedSatData];
        allReports.sort((a, b) => new Date(b.submit_time || 0) - new Date(a.submit_time || 0));

        // Group by email
        groupedReports = {};
        allReports.forEach(r => {
          const email = (r.email || 'unknown').toLowerCase();
          if (!groupedReports[email]) groupedReports[email] = [];
          groupedReports[email].push(r);
        });

        renderReportOverviewStats();
        renderReportsList();
      } catch (err) {
        console.error('loadReportsData error:', err);
        document.getElementById('reportsList').innerHTML = '<div class="report-empty">Error loading reports. Check console.</div>';
      }
    }
    function renderReportOverviewStats() {
      const totalReports = allReports.length;
      const uniqueStudents = Object.keys(groupedReports).length;
      const avgScore = totalReports > 0
        ? Math.round(allReports.reduce((s, r) => s + (r.pct || 0), 0) / totalReports)
        : 0;
      const totalQs = allReports.reduce((s, r) => s + (r.total || 0), 0);

      document.getElementById('reportOverviewStats').innerHTML = `
        <div class="rstat"><div class="rnum">${uniqueStudents}</div><div class="rlbl">Students</div></div>
        <div class="rstat"><div class="rnum">${totalReports}</div><div class="rlbl">Total Tests</div></div>
        <div class="rstat"><div class="rnum">${avgScore}%</div><div class="rlbl">Avg Score</div></div>
        <div class="rstat"><div class="rnum">${totalQs}</div><div class="rlbl">Total Qs</div></div>
      `;
    }

    function renderReportsList() {
      const search = (document.getElementById('reportSearchBox').value || '').trim().toLowerCase();
      let emails = Object.keys(groupedReports);

      if (search) emails = emails.filter(e => e.includes(search));

      if (emails.length === 0) {
        document.getElementById('reportsList').innerHTML = `<div class="report-empty">No student reports found.</div>`;
        return;
      }

      document.getElementById('reportsList').innerHTML = emails.map(email => {
        const tests = groupedReports[email];
        const totalTests = tests.length;
        const avgPct = Math.round(tests.reduce((s, t) => s + (t.pct || 0), 0) / totalTests);
        const avgScaled = Math.round(tests.reduce((s, t) => s + (t.scaled || 0), 0) / totalTests);
        const safeEmail = email.replace(/[^a-zA-Z0-9]/g, '_');

        // Find profile to check access
        const p = allProfiles.find(x => x.email && x.email.toLowerCase() === email);

        return `
        <div class="student-report-card" id="src-${safeEmail}">
          <div class="src-header" onclick="toggleStudentReport('${safeEmail}')">
            <div class="src-info">
              <div class="src-email">${email}</div>
              <div class="src-meta">${tests[0].name || '–'}</div>
            </div>
            <div class="src-stats">
              <div class="src-stat"><div class="ss-num">${totalTests}</div><div class="ss-lbl">Tests</div></div>
              <div class="src-stat"><div class="ss-num">${avgPct}%</div><div class="ss-lbl">Avg</div></div>
              <div class="src-stat"><div class="ss-num">${avgScaled}</div><div class="ss-lbl">Scaled</div></div>
            </div>
            <div class="src-toggle" id="toggle-${safeEmail}">▼</div>
          </div>
          <div class="src-body" id="body-${safeEmail}">
            ${p ? `
            <div style="margin-bottom: 16px; padding: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
              <div style="font-size: 0.85rem; font-weight: 600; color: rgba(255,255,255,0.7);">Manage Access:</div>
              <div style="display: flex; align-items: center; gap: 8px;">
                <span style="font-size: 0.8rem; color: rgba(255,255,255,0.6);">SAT Test:</span>
                ${p.has_access
              ? `<button class="btn-sm btn-revoke" onclick="setAccess('${p.id}', 'sat', false)">Revoke</button>`
              : `<button class="btn-sm btn-approve" onclick="setAccess('${p.id}', 'sat', true)">Approve</button>`
            }
              </div>
              <div style="display: flex; align-items: center; gap: 8px; margin-top: 6px;">
                <span style="font-size: 0.8rem; color: rgba(255,255,255,0.6);">Topic R&W:</span>
                ${p.has_topic_reading_access
              ? `<button class="btn-sm btn-revoke" onclick="setAccess('${p.id}', 'topic_rw', false)">Revoke</button>`
              : `<button class="btn-sm btn-approve" onclick="setAccess('${p.id}', 'topic_rw', true)">Approve</button>`
            }
              </div>
              <div style="display: flex; align-items: center; gap: 8px; margin-top: 6px;">
                <span style="font-size: 0.8rem; color: rgba(255,255,255,0.6);">Topic Math:</span>
                ${p.has_topic_math_access
              ? `<button class="btn-sm btn-revoke" onclick="setAccess('${p.id}', 'topic_math', false)">Revoke</button>`
              : `<button class="btn-sm btn-approve" onclick="setAccess('${p.id}', 'topic_math', true)">Approve</button>`
            }
              </div>
              <div style="display: flex; align-items: center; gap: 8px; margin-top: 6px;">
                <span style="font-size: 0.8rem; color: rgba(255,255,255,0.6);">R&W Class Test:</span>
                ${p.has_topic_class_test_access
              ? `<button class="btn-sm btn-revoke" onclick="setAccess('${p.id}', 'topic_class_test', false)">Revoke</button>`
              : `<button class="btn-sm btn-approve" onclick="setAccess('${p.id}', 'topic_class_test', true)">Approve</button>`
            }
              </div>
              <div style="display: flex; align-items: center; gap: 8px; margin-top: 6px;">
                <span style="font-size: 0.8rem; color: rgba(255,255,255,0.6);">ACT Test:</span>
                ${p.has_act_access
              ? `<button class="btn-sm btn-revoke" onclick="setAccess('${p.id}', 'act', false)">Revoke</button>`
              : `<button class="btn-sm btn-approve" onclick="setAccess('${p.id}', 'act', true)">Approve</button>`
            }
              </div>
            </div>
            ` : ''}
            
            ${tests.map((t, testIdx) => {
              const p_score = t.pct || 0;
              const pillClass = p_score >= 70 ? 'high' : p_score >= 50 ? 'mid' : 'low';
              const date = t.submit_time ? new Date(t.submit_time).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }) : '–';
              return `
              <div class="src-test-row" style="cursor: pointer;" onclick="openAdminTestDetail('${email}', ${testIdx})">
                <div class="str-topic">${t.topic || 'Unknown'}</div>
                <div class="str-date">${date}</div>
                <div class="str-scores">
                  <span style="color:#6ee7b7">✓${t.correct || 0}</span>
                  <span style="color:#f87171">✗${t.wrong || 0}</span>
                  <span style="color:#fbbf24">⏭${t.unattempted || 0}</span>
                  <span class="admin-score-pill ${pillClass}">${p_score}%</span>
                </div>
              </div>`;
            }).join('')}
            <button class="btn-combine-admin" onclick="generateAdminCombined('${safeEmail}', '${email}')">📊 Generate Combined Report</button>
            <div id="admin-combined-${safeEmail}"></div>
          </div>
        </div>`;
      }).join('');
    }

    function toggleStudentReport(safeEmail) {
      const body = document.getElementById(`body-${safeEmail}`);
      const toggle = document.getElementById(`toggle-${safeEmail}`);
      body.classList.toggle('open');
      toggle.classList.toggle('open');
    }

        async function openAdminTestDetail(email, testIdx) {
      const tests = groupedReports[email.toLowerCase()];
      if (!tests || !tests[testIdx]) return;
      const t = tests[testIdx];
      const LETTERS = ['A', 'B', 'C', 'D', 'E'];
      let details = [];
      try { details = JSON.parse(t.details_json || '[]'); } catch (e) { }

      const modal = document.getElementById('modalContent');
      modal.innerHTML = `
        <div class="modal-hdr">
          <h3>${t.topic || 'Test Detail'}</h3>
          <button class="modal-close" onclick="closeModal()">✕</button>
        </div>
        <div class="loading-spinner">Loading question details...</div>
      `;
      document.getElementById('testModal').classList.add('open');

      const topicMapping = getTopicMapping(t.topic);
      const matchedTopicKey = topicMapping ? topicMapping.key : t.topic;
      const dir = topicMapping ? topicMapping.dir : '.';
      const qs = await loadQuestionsForTopic(matchedTopicKey);
      const imgMapping = await loadImageMappingForTopic(matchedTopicKey, dir);

      // Merge questions metadata
      if (qs && qs.length > 0) {
        if (details.length === 0) {
          details = qs.map((q, qIdx) => ({
            id: q.id !== undefined ? q.id : (qIdx + 1),
            section: q.section || q.sectionName,
            sectionName: q.sectionName || q.section,
            text: q.text,
            passageTitle: q.passageTitle,
            passageText: q.passageText,
            options: q.options,
            status: 'unattempted',
            chosen: -1,
            answer: q.answer,
            explanation: q.explanation || '',
            useImage: q.useImage,
            imageKey: q.imageKey
          }));
        } else {
          details = details.map((d, dIdx) => {
            const matchedQ = qs.find(q => String(q.id) === String(d.id)) || qs[dIdx];
            let processedText = d.text || (matchedQ ? matchedQ.text : '') || '';
            if (processedText && dir && dir !== '.') {
              processedText = processedText.replace(/img src=["'](images?)\//g, (m, g) => `img src="${dir}/${g}/`);
            }
            return {
              ...d,
              section: d.section || (matchedQ ? (matchedQ.section || matchedQ.sectionName) : ''),
              sectionName: d.sectionName || (matchedQ ? (matchedQ.sectionName || matchedQ.section) : ''),
              text: processedText,
              passageTitle: d.passageTitle || (matchedQ ? matchedQ.passageTitle : '') || '',
              passageText: d.passageText || (matchedQ ? matchedQ.passageText : '') || '',
              options: (d.options && d.options.length) ? d.options : (matchedQ ? matchedQ.options : []),
              explanation: d.explanation || (matchedQ ? matchedQ.explanation : '') || '',
              useImage: d.useImage !== undefined ? d.useImage : (matchedQ ? matchedQ.useImage : false),
              imageKey: d.imageKey || (matchedQ ? matchedQ.imageKey : '')
            };
          });
        }
      details = fixAllImagePaths(details, dir);

      // Check if test is a Full Mock Test
      const topicLower = (t.topic || '').toLowerCase();
      const secNames = new Set((details || []).map(d => {
        let sec = (d.section || d.sectionName || '').toUpperCase();
        if (sec.includes('VERBAL') || sec === 'VR') return 'VR';
        if (sec.includes('DECISION') || sec === 'DM') return 'DM';
        if (sec.includes('QUANT') || sec === 'QR') return 'QR';
        if (sec.includes('ABSTRACT') || sec === 'AR') return 'AR';
        if (sec.includes('SITUATIONAL') || sec.includes('JUDG') || sec === 'SJT') return 'SJT';
        return 'OTHER';
      }));
      secNames.delete('OTHER');

      const isFullMock = topicLower.includes('full mock') || topicLower.includes('ucat mock test') || (secNames.size >= 3);

      const studentName = t.name || email.split('@')[0];

      if (isFullMock) {
        // Group details by section: VR, DM, QR, SJT (AR kept for legacy historical results)
        const secGroups = { VR: [], DM: [], QR: [], AR: [], SJT: [] };
        details.forEach((d, idx) => {
          let rawSec = (d.section || d.sectionName || '').toUpperCase();
          if (rawSec.includes('VERBAL') || rawSec === 'VR') secGroups.VR.push(d);
          else if (rawSec.includes('DECISION') || rawSec === 'DM') secGroups.DM.push(d);
          else if (rawSec.includes('QUANT') || rawSec === 'QR') secGroups.QR.push(d);
          // AR kept for LEGACY historical result display only — not active in new tests
          else if (rawSec.includes('ABSTRACT') || rawSec === 'AR') secGroups.AR.push(d);
          else if (rawSec.includes('SITUATIONAL') || rawSec.includes('JUDG') || rawSec === 'SJT') secGroups.SJT.push(d);
          else {
            // Fallback for old unlabeled results
            if (idx < 44) secGroups.VR.push(d);
            else if (idx < 44 + 35) secGroups.DM.push(d);
            else if (idx < 44 + 35 + 36) secGroups.QR.push(d);
            else if (details.length >= 239 && idx < 44 + 35 + 36 + 55) secGroups.AR.push(d); // legacy
            else secGroups.SJT.push(d);
          }
        });

        function calcSecStats(qList, secKey) {
          const total = qList.length || (secKey === 'VR' ? 44 : secKey === 'DM' ? 35 : secKey === 'QR' ? 36 : secKey === 'AR' ? 55 : 69); // AR=55 kept for legacy
          let raw = 0;
          qList.forEach(q => {
            if (secKey === 'SJT') {
              if (q.status === 'correct') raw += 1.0;
              else if (q.status === 'partial') raw += 0.5;
            } else {
              if (q.status === 'correct') raw += 1.0;
            }
          });
          const pct = total > 0 ? Math.round((raw / total) * 100) : 0;
          let scaled = 300;
          if (typeof UCATScoring !== 'undefined') {
            scaled = UCATScoring.calculateSectionScaledScore(secKey, raw, total);
          } else {
            scaled = Math.max(300, Math.min(900, Math.round(300 + (raw / total) * 600)));
          }
          return { total, raw, pct, scaled };
        }

        const vrStats = calcSecStats(secGroups.VR, 'VR');
        const dmStats = calcSecStats(secGroups.DM, 'DM');
        const qrStats = calcSecStats(secGroups.QR, 'QR');
        // arStats kept for legacy historical result display only
        const arStats = calcSecStats(secGroups.AR, 'AR');

        let sjtRaw = 0;
        const sjtTotal = secGroups.SJT.length || 69;
        secGroups.SJT.forEach(q => {
          if (q.status === 'correct') sjtRaw += 1.0;
          else if (q.status === 'partial') sjtRaw += 0.5;
        });
        const sjtPct = sjtTotal > 0 ? Math.round((sjtRaw / sjtTotal) * 100) : 0;
        let sjtBandObj = { band: 'Band 4', interpretation: 'Demonstrates low understanding of professionalism and appropriateness; substantial improvement needed.' };
        if (typeof UCATScoring !== 'undefined') {
          sjtBandObj = UCATScoring.calculateSJTBand(sjtRaw, sjtTotal);
        } else {
          const b = sjtPct >= 75 ? 'Band 1' : sjtPct >= 55 ? 'Band 2' : sjtPct >= 35 ? 'Band 3' : 'Band 4';
          sjtBandObj = { band: b, interpretation: '' };
        }

        // hasAR = true only for LEGACY historical results that contain AR data
        const hasAR = secGroups.AR.length > 0;
        // NEW tests: cognitive total = VR + DM + QR = max 2700
        // LEGACY tests with AR: VR + DM + QR + AR = max 3600 (backward compat)
        const totalCog = vrStats.scaled + dmStats.scaled + qrStats.scaled + (hasAR ? arStats.scaled : 0);
        const maxCog = hasAR ? 3600 : 2700;

        modal.innerHTML = `
          <div class="modal-hdr">
            <div>
              <div style="display:flex;align-items:center;gap:10px;">
                <span style="font-size:1.8rem;">🎓</span>
                <div>
                  <h2 style="font-family:'Syne',sans-serif;font-size:1.6rem;font-weight:800;">${t.topic || 'UCAT Full Mock Test'}</h2>
                  <div style="font-size:0.85rem;color:rgba(255,255,255,0.5);">${studentName} (${email})</div>
                </div>
              </div>
            </div>
            <div style="display:flex;gap:8px;align-items:center;">
              <button class="btn btn-green" style="padding:6px 14px;font-size:0.82rem;" onclick="printReport()">🖨️ Print Report</button>
              <button class="modal-close" onclick="closeModal()">✕</button>
            </div>
          </div>

          <!-- Section Score Cards: VR / DM / QR (cognitive) + SJT (band) -->
          <!-- AR card only shown for legacy historical results -->
          <div class="score-banner">
            <div class="score-box">
              <div class="val">${vrStats.scaled} <span style="font-size:0.65rem;color:var(--muted);">/900</span></div>
              <div class="lbl">Verbal Reasoning</div>
              <div class="sub">Raw: ${vrStats.raw}/${vrStats.total} (${vrStats.pct}%)</div>
            </div>
            <div class="score-box">
              <div class="val">${dmStats.scaled} <span style="font-size:0.65rem;color:var(--muted);">/900</span></div>
              <div class="lbl">Decision Making</div>
              <div class="sub">Raw: ${dmStats.raw}/${dmStats.total} (${dmStats.pct}%)</div>
            </div>
            <div class="score-box">
              <div class="val">${qrStats.scaled} <span style="font-size:0.65rem;color:var(--muted);">/900</span></div>
              <div class="lbl">Quant Reasoning</div>
              <div class="sub">Raw: ${qrStats.raw}/${qrStats.total} (${qrStats.pct}%)</div>
            </div>
            <!-- AR card: LEGACY ONLY — hidden for new tests -->
            <div class="score-box" style="${hasAR ? 'opacity:0.7;' : 'display:none;'}">
              <div class="val">${arStats.scaled} <span style="font-size:0.65rem;color:var(--muted);">/900</span></div>
              <div class="lbl">Abstract Reasoning <span style="font-size:0.7rem;">(Legacy)</span></div>
              <div class="sub">Raw: ${arStats.raw}/${arStats.total} (${arStats.pct}%)</div>
            </div>
            <!-- SJT: Band only, never /900, never in cognitive total -->
            <div class="score-box" style="border-color: rgba(168, 85, 247, 0.35);">
              <div class="val" style="color:#c084fc;">${sjtBandObj.band}</div>
              <div class="lbl">Situational Judgement</div>
              <div class="sub">Raw: ${sjtRaw}/${sjtTotal} (${sjtPct}%)</div>
            </div>
          </div>

          <!-- Total Cognitive Score Banner: VR+DM+QR only (max 2700 for new tests) -->
          <div class="total-score-banner">
            <div class="lbl">TOTAL COGNITIVE SCORE (VR + DM + QR${hasAR ? ' + AR (Legacy)' : ''}) — MAX ${maxCog}</div>
            <div class="val">${totalCog} / ${maxCog}</div>
            <div class="sjt-desc">
              <strong>${sjtBandObj.band}:</strong> ${sjtBandObj.interpretation}
            </div>
          </div>

          <!-- Complete Question Review & Solutions -->
          <div class="review-wrap" style="margin-top:24px;">
            <div class="q-review-hdr" style="font-size:1.2rem;margin-bottom:16px;">📋 Complete Question Review & Solutions (${details.length} questions)</div>
            <div class="q-review-list">
              ${details.map((d, i) => {
                const hasText = !!d.text;
                const isPartial = d.status === 'partial';
                const statusClass = d.status === 'correct' ? 'correct' : (isPartial ? 'unattempted' : (d.status === 'wrong' ? 'wrong' : 'unattempted'));
                const statusText = d.status === 'correct' ? '✅ Correct' : (isPartial ? '🟡 Partial Choice (0.5 mark)' : (d.status === 'wrong' ? '❌ Wrong' : '⏭ Skipped'));
                const secName = d.sectionName || d.section || '';

                let imgSrc = '';
                if (d.useImage && d.imageKey && imgMapping[d.imageKey]) {
                  const val = imgMapping[d.imageKey];
                  imgSrc = (val.startsWith('data:') || val.startsWith('http')) ? val : (dir + '/' + val);
                }

                return `
                  <div class="q-card-rev">
                    <div class="q-rev-header">
                      <span>Question ${d.qNum || (i + 1)} ${secName ? `<span style="font-size:0.8rem;color:#a78bfa;font-weight:normal;margin-left:6px;">[${secName}]</span>` : ''}</span>
                      <span class="q-rev-status ${statusClass}">${statusText}</span>
                    </div>

                    ${d.passageText ? `
                      <div class="passage-box">
                        <strong>${d.passageTitle || 'Passage'}</strong><br><br>${d.passageText}
                      </div>
                    ` : ''}

                    ${hasText ? `<div class="q-rev-text">${d.text}</div>` : `<div class="q-rev-text" style="opacity:0.6;">Question content</div>`}

                    ${imgSrc ? `<div class="q-image-container"><img src="${imgSrc}" alt="Question Image" /></div>` : ''}

                    ${hasText && d.options && d.options.length ? `
                      <div class="q-rev-opts">
                        ${d.options.map((optText, optIdx) => {
                          let optClass = '';
                          let badge = '';

                          if (optIdx === d.answer) {
                            optClass = 'correct';
                            badge = '<span style="color:#10b981;font-weight:bold;">✓ Correct Answer</span>';
                          }
                          if (d.status === 'wrong' && optIdx === d.chosen) {
                            optClass = 'wrong-chosen';
                            badge = '<span style="color:#ef4444;font-weight:bold;">✗ Student Choice</span>';
                          }
                          if (isPartial && optIdx === d.chosen) {
                            optClass = 'wrong-chosen';
                            badge = '<span style="color:#f59e0b;font-weight:bold;">🟡 Partial Choice (0.5 mark)</span>';
                          }
                          if (d.status === 'correct' && optIdx === d.chosen) {
                            badge = '<span style="color:#10b981;font-weight:bold;">✓ Student Choice</span>';
                          }

                          return `
                            <div class="q-rev-opt ${optClass}">
                              <span style="flex:1;min-width:0;word-break:break-word;overflow-wrap:anywhere;"><strong>${LETTERS[optIdx] || (optIdx+1)}.</strong> ${optText}</span>
                              ${badge ? `<span style="flex-shrink:0;white-space:nowrap;margin-left:8px;">${badge}</span>` : ''}
                            </div>
                          `;
                        }).join('')}
                      </div>
                    ` : `
                      <div class="q-detail" style="margin-top:8px;">
                        ${d.status === 'wrong' ? `Student answer: <strong>${LETTERS[d.chosen] || '–'}</strong> · Correct: <strong>${LETTERS[d.answer] || '–'}</strong>` : ''}
                        ${d.status === 'unattempted' ? `Correct answer: <strong>${LETTERS[d.answer] || '–'}</strong>` : ''}
                      </div>
                    `}

                    ${d.explanation ? `
                      <div class="q-rev-exp">
                        <strong>💡 Explanation:</strong> ${d.explanation}
                      </div>
                    ` : ''}
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        `;
      } else {
        const pct = Number(t.pct) || 0;
        const scoreColor = pct >= 70 ? '#6ee7b7' : pct >= 50 ? '#fbbf24' : '#f87171';
        const isSJT = topicLower.includes('situational') || topicLower.includes('sjt');

        let displayScaled = t.scaled;
        if (!isSJT && (!displayScaled || Number(displayScaled) < 100)) {
          const raw = Number(t.correct) || 0;
          const tot = details.length || Number(t.total) || 20;
          if (typeof UCATScoring !== 'undefined') {
            displayScaled = UCATScoring.calculateSectionScaledScore(t.topic, raw, tot);
          } else {
            displayScaled = Math.max(300, Math.min(900, Math.round(300 + (raw / tot) * 600)));
          }
        }

        let sjtBandObj = null;
        if (isSJT) {
          const raw = Number(t.correct) || 0;
          const tot = details.length || Number(t.total) || 20;
          if (typeof UCATScoring !== 'undefined') {
            sjtBandObj = UCATScoring.calculateSJTBand(raw, tot);
          } else {
            const b = pct >= 75 ? 'Band 1' : pct >= 55 ? 'Band 2' : pct >= 35 ? 'Band 3' : 'Band 4';
            sjtBandObj = { band: b, interpretation: '' };
          }
        }

        modal.innerHTML = `
          <div class="modal-hdr">
            <div>
              <div style="display:flex;align-items:center;gap:10px;">
                <span style="font-size:1.8rem;">🎓</span>
                <div>
                  <h2 style="font-family:'Syne',sans-serif;font-size:1.4rem;font-weight:800;">${t.topic || 'Test Detail'}</h2>
                  <div style="font-size:0.82rem;color:rgba(255,255,255,0.5);">${studentName} (${email})</div>
                </div>
              </div>
            </div>
            <div style="display:flex;gap:8px;align-items:center;">
              <button class="btn btn-green" style="padding:6px 14px;font-size:0.82rem;" onclick="printReport()">🖨️ Print Report</button>
              <button class="modal-close" onclick="closeModal()">✕</button>
            </div>
          </div>

          <div style="text-align:center;margin:16px 0 20px;">
            <div style="font-family:'Syne';font-size:2.6rem;font-weight:800;color:${isSJT ? '#c084fc' : scoreColor};">${isSJT ? (t.grade || (sjtBandObj ? sjtBandObj.band : 'Band 2')) : displayScaled}</div>
            <div style="font-size:0.85rem;color:rgba(255,255,255,0.5);margin-top:4px;">${isSJT ? 'Situational Judgement Band' : 'Scaled Score (300 - 900)'} · ${t.submit_time ? new Date(t.submit_time).toLocaleString() : '–'}</div>
            ${isSJT && sjtBandObj && sjtBandObj.interpretation ? `
              <div style="max-width:560px;margin:10px auto 0;font-size:0.85rem;color:rgba(192,132,252,0.9);background:rgba(192,132,252,0.1);padding:10px 16px;border-radius:8px;border:1px solid rgba(192,132,252,0.25);">
                <strong>${sjtBandObj.band}:</strong> ${sjtBandObj.interpretation}
              </div>
            ` : ''}
          </div>

          <div class="modal-stats">
            <div class="modal-stat"><div class="ms-num" style="color:#6ee7b7">${t.correct || 0}</div><div class="ms-lbl">Correct</div></div>
            <div class="modal-stat"><div class="ms-num" style="color:#f87171">${t.wrong || 0}</div><div class="ms-lbl">Wrong</div></div>
            <div class="modal-stat"><div class="ms-num" style="color:#fbbf24">${t.unattempted || 0}</div><div class="ms-lbl">Skipped</div></div>
            <div class="modal-stat"><div class="ms-num" style="color:#93c5fd">${pct}%</div><div class="ms-lbl">Accuracy</div></div>
          </div>

          <div class="review-wrap" style="margin-top:24px;">
            <div class="q-review-hdr" style="font-size:1.15rem;margin-bottom:16px;">📋 Complete Question Review & Solutions (${details.length} questions)</div>
            <div class="q-review-list">
              ${details.map((d, i) => {
                const hasText = !!d.text;
                const isPartial = d.status === 'partial';
                const statusClass = d.status === 'correct' ? 'correct' : (isPartial ? 'unattempted' : (d.status === 'wrong' ? 'wrong' : 'unattempted'));
                const statusText = d.status === 'correct' ? '✅ Correct' : (isPartial ? '🟡 Partial Choice (0.5 mark)' : (d.status === 'wrong' ? '❌ Wrong' : '⏭ Skipped'));

                let imgSrc = '';
                if (d.useImage && d.imageKey && imgMapping[d.imageKey]) {
                  const val = imgMapping[d.imageKey];
                  imgSrc = (val.startsWith('data:') || val.startsWith('http')) ? val : (dir + '/' + val);
                }

                return `
                  <div class="q-card-rev">
                    <div class="q-rev-header">
                      <span>Question ${d.qNum || d.id || (i + 1)}</span>
                      <span class="q-rev-status ${statusClass}">${statusText}</span>
                    </div>

                    ${d.passageText ? `
                      <div class="passage-box">
                        <strong>${d.passageTitle || 'Passage'}</strong><br><br>${d.passageText}
                      </div>
                    ` : ''}

                    ${hasText ? `<div class="q-rev-text">${d.text}</div>` : `<div class="q-rev-text" style="opacity:0.6;">Question content</div>`}

                    ${imgSrc ? `<div class="q-image-container"><img src="${imgSrc}" alt="Question Image" /></div>` : ''}

                    ${hasText && d.options && d.options.length ? `
                      <div class="q-rev-opts">
                        ${d.options.map((optText, optIdx) => {
                          let optClass = '';
                          let badge = '';

                          if (optIdx === d.answer) {
                            optClass = 'correct';
                            badge = '<span style="color:#10b981;font-weight:bold;">✓ Correct Answer</span>';
                          }
                          if (d.status === 'wrong' && optIdx === d.chosen) {
                            optClass = 'wrong-chosen';
                            badge = '<span style="color:#ef4444;font-weight:bold;">✗ Student Choice</span>';
                          }
                          if (isPartial && optIdx === d.chosen) {
                            optClass = 'wrong-chosen';
                            badge = '<span style="color:#f59e0b;font-weight:bold;">🟡 Partial Choice (0.5 mark)</span>';
                          }
                          if (d.status === 'correct' && optIdx === d.chosen) {
                            badge = '<span style="color:#10b981;font-weight:bold;">✓ Student Choice</span>';
                          }

                          return `
                            <div class="q-rev-opt ${optClass}">
                              <span style="flex:1;min-width:0;word-break:break-word;overflow-wrap:anywhere;"><strong>${LETTERS[optIdx] || (optIdx+1)}.</strong> ${optText}</span>
                              ${badge ? `<span style="flex-shrink:0;white-space:nowrap;margin-left:8px;">${badge}</span>` : ''}
                            </div>
                          `;
                        }).join('')}
                      </div>
                    ` : `
                      <div class="q-detail" style="margin-top:8px;">
                        ${d.status === 'wrong' ? `Student answer: <strong>${LETTERS[d.chosen] || '–'}</strong> · Correct: <strong>${LETTERS[d.answer] || '–'}</strong>` : ''}
                        ${d.status === 'unattempted' ? `Correct answer: <strong>${LETTERS[d.answer] || '–'}</strong>` : ''}
                      </div>
                    `}

                    ${d.explanation ? `
                      <div class="q-rev-exp">
                        <strong>💡 Explanation:</strong> ${d.explanation}
                      </div>
                    ` : ''}
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        `;
      }

      if (window.MathJax && MathJax.typesetPromise) {
        MathJax.typesetPromise();
      }
    }

    function closeModal() {
      const modal = document.getElementById('testModal');
      if (modal) modal.classList.remove('open');
    }

    // Close modal on overlay click or Escape key
    document.addEventListener('DOMContentLoaded', () => {
      const modal = document.getElementById('testModal');
      if (modal) {
        modal.addEventListener('click', function (e) {
          if (e.target === this) closeModal();
        });
      }
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
      });
    });

    async function generateAdminCombined(safeEmail, email) {
      const tests = groupedReports[email];
      if (!tests || tests.length === 0) return;

      const container = document.getElementById(`admin-combined-${safeEmail}`);
      container.innerHTML = `
        <div class="admin-combined" style="text-align:center;padding:20px;">
          <div class="loading-spinner">Generating combined report & loading questions...</div>
        </div>
      `;

      // Gather unique topics in the selected tests and load their questions/images
      const uniqueTopics = [...new Set(tests.map(t => t.topic).filter(Boolean))];
      const topicsData = {};
      for (const topic of uniqueTopics) {
        const topicMapping = getTopicMapping(topic);
        const matchedTopicKey = topicMapping ? topicMapping.key : topic;
        const dir = topicMapping ? topicMapping.dir : '.';
        const qs = await loadQuestionsForTopic(matchedTopicKey);
        const imgMapping = await loadImageMappingForTopic(matchedTopicKey, dir);
        topicsData[topic] = { qs, imgMapping, dir };
      }

      const totCorrect = tests.reduce((s, t) => s + (t.correct || 0), 0);
      const totWrong = tests.reduce((s, t) => s + (t.wrong || 0), 0);
      const totSkipped = tests.reduce((s, t) => s + (t.unattempted || 0), 0);
      const totQs = tests.reduce((s, t) => s + (t.total || 0), 0);
      const avgPct = totQs > 0 ? Math.round(totCorrect / totQs * 100) : 0;
      const overallGrade = avgPct >= 90 ? 'A+' : avgPct >= 80 ? 'A' : avgPct >= 70 ? 'B' : avgPct >= 60 ? 'C' : 'D';

      // Topic-wise
      const topicMap = {};
      tests.forEach(t => {
        const name = t.topic || 'Unknown';
        if (!topicMap[name]) topicMap[name] = { correct: 0, wrong: 0, skipped: 0, total: 0, count: 0 };
        topicMap[name].correct += (t.correct || 0);
        topicMap[name].wrong += (t.wrong || 0);
        topicMap[name].skipped += (t.unattempted || 0);
        topicMap[name].total += (t.total || 0);
        topicMap[name].count++;
      });

      const topics = Object.keys(topicMap);
      const topicPcts = topics.map(k => topicMap[k].total > 0 ? Math.round(topicMap[k].correct / topicMap[k].total * 100) : 0);
      const barColors = topicPcts.map(p => p >= 70 ? '#059669' : p >= 50 ? '#d97706' : '#dc2626');

      const pieId = `ac-pie-${safeEmail}`;
      const barId = `ac-bar-${safeEmail}`;

      // Merge all question details
      let allDetails = [];
      tests.forEach((t, testIndex) => {
        try {
          let details = JSON.parse(t.details_json || '[]');
          if (details.length > 0) {
            const topicData = topicsData[t.topic];
            if (topicData && topicData.qs) {
              details = details.map(d => {
                const matchedQ = topicData.qs.find(q => String(q.id) === String(d.id));
                let processedText = d.text || (matchedQ ? matchedQ.text : '') || '';
                if (processedText && topicData.dir && topicData.dir !== '.') {
                  processedText = processedText.replace(/img src=["'](images?)\//g, (m, g) => `img src="${topicData.dir}/${g}/`);
                }
                return {
                  ...d,
                  section: d.section || (matchedQ ? (matchedQ.section || matchedQ.sectionName) : ''),
                  sectionName: d.sectionName || (matchedQ ? (matchedQ.sectionName || matchedQ.section) : ''),
                  text: processedText,
                  passageTitle: d.passageTitle || (matchedQ ? matchedQ.passageTitle : '') || '',
                  passageText: d.passageText || (matchedQ ? matchedQ.passageText : '') || '',
                  options: (d.options && d.options.length) ? d.options : (matchedQ ? matchedQ.options : []),
                  explanation: d.explanation || (matchedQ ? matchedQ.explanation : '') || '',
                  useImage: d.useImage !== undefined ? d.useImage : (matchedQ ? matchedQ.useImage : false),
                  imageKey: d.imageKey || (matchedQ ? matchedQ.imageKey : '')
                };
              });
            }
            details = fixAllImagePaths(details, topicData ? topicData.dir : '.');
            allDetails.push({
              testName: t.topic || `Test ${testIndex + 1}`,
              details,
              dir: topicData ? topicData.dir : '.',
              imgMapping: topicData ? topicData.imgMapping : {}
            });
          }
        } catch (e) {
          console.error("Failed to parse details for test", t, e);
        }
      });

      container.innerHTML = `
        <div class="admin-combined" id="adminCombinedCard-${safeEmail}">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 16px;">
            <h4 style="margin-bottom:0;">📊 Combined Report – ${email}</h4>
            <button class="btn-sm" style="background:rgba(255,255,255,0.1); border:1px solid rgba(255,255,255,0.2); color:#fff; cursor:pointer;" onclick="printReport()">🖨️ Print Report</button>
          </div>
          <div class="ac-stats">
            <div class="ac-stat"><div class="acn" style="color:#6ee7b7">${totCorrect}</div><div class="acl">Correct</div></div>
            <div class="ac-stat"><div class="acn" style="color:#f87171">${totWrong}</div><div class="acl">Wrong</div></div>
            <div class="ac-stat"><div class="acn" style="color:#fbbf24">${totSkipped}</div><div class="acl">Skipped</div></div>
            <div class="ac-stat"><div class="acn" style="color:#93c5fd">${totQs}</div><div class="acl">Total</div></div>
            <div class="ac-stat"><div class="acn" style="color:#a78bfa">${avgPct}%</div><div class="acl">Score</div></div>
            <div class="ac-stat"><div class="acn" style="color:#a78bfa">${overallGrade}</div><div class="acl">Grade</div></div>
          </div>
          <div class="admin-chart-grid">
            <div class="admin-chart-box"><h5>Score Breakdown</h5><canvas id="${pieId}" height="180"></canvas></div>
            <div class="admin-chart-box"><h5>Topic Performance</h5><canvas id="${barId}" height="180"></canvas></div>
          </div>

          ${allDetails.length > 0 ? `
          <div style="margin-top:20px; text-align:left;">
            <h5 style="color:rgba(255,255,255,0.8); margin-bottom:12px; font-weight:700;">📋 Detailed Question Review</h5>
            ${allDetails.map(td => `
              <div style="margin-top:20px;margin-bottom:10px;font-family:'Syne',sans-serif;font-weight:700;color:#93c5fd;border-bottom:1px solid rgba(255,255,255,0.1);padding-bottom:6px;font-size:0.95rem;text-align:left;">
                ${td.testName}
              </div>
              <div>
              ${td.details.map((d, i) => {
        const hasText = !!d.text;
        const statusClass = d.status === 'correct' ? 'correct' : d.status === 'wrong' ? 'wrong' : 'unattempted';
        const statusText = d.status === 'correct' ? '✅ Correct' : d.status === 'wrong' ? '❌ Wrong' : '⏭ Skipped';

        let imgSrc = '';
        if (d.useImage && d.imageKey && td.imgMapping[d.imageKey]) {
          const val = td.imgMapping[d.imageKey];
          imgSrc = (val.startsWith('data:') || val.startsWith('http')) ? val : (td.dir + '/' + val);
        }

        return `
                  <div class="q-card" style="margin-bottom:12px; padding:12px;">
                    <div class="q-card-header">
                      <span style="font-weight: 700; font-size: 0.9rem;">Question ${d.id || (i + 1)}</span>
                      <span class="q-status ${statusClass}" style="padding:1px 6px; font-size:0.65rem;">${statusText}</span>
                    </div>
                    
                    ${hasText ? `<div class="q-card-text" style="font-size:0.85rem; margin-bottom:8px;">${d.text}</div>` : `<div class="q-card-text" style="opacity:0.6; font-size:0.85rem; margin-bottom:8px;">Question text not available.</div>`}
                    
                    ${imgSrc ? `<div class="q-image-container" style="margin-bottom:8px; padding:6px;"><img src="${imgSrc}" style="border-radius:4px;" /></div>` : ''}

                    ${hasText && d.options ? `
                      <div class="q-card-opts" style="gap:6px; margin-bottom:8px;">
                        ${d.options.map((optText, optIdx) => {
          let optClass = '';
          if (optIdx === d.answer) {
            optClass = 'correct';
          }
          if (d.status === 'wrong' && optIdx === d.chosen) {
            optClass = 'wrong-chosen';
          }

          let badgeIcon = '';
          if (optIdx === d.answer) {
            badgeIcon = ' <span style="margin-left:auto; font-weight:bold; color:#10b981; font-size:0.75rem;">✓ Correct</span>';
          } else if (d.status === 'wrong' && optIdx === d.chosen) {
            badgeIcon = ' <span style="margin-left:auto; font-weight:bold; color:#ef4444; font-size:0.75rem;">✗ Student Choice</span>';
          } else if (d.status === 'correct' && optIdx === d.chosen) {
            badgeIcon = ' <span style="margin-left:auto; font-weight:bold; color:#10b981; font-size:0.75rem;">✓ Student Choice</span>';
          }

          return `
                            <div class="q-card-opt ${optClass}" style="padding:6px 10px; font-size:0.8rem;">
                              <div class="q-card-opt-letter" style="width:20px; height:20px; font-size:0.7rem;">${LETTERS[optIdx]}</div>
                              <div class="q-card-opt-text">${optText}</div>
                              ${badgeIcon}
                            </div>
                          `;
        }).join('')}
                      </div>
                    ` : `
                      <div class="q-detail" style="margin-top:6px; font-size:0.78rem;">
                        ${d.status === 'wrong' ? `Student answer: <strong>${LETTERS[d.chosen] || '–'}</strong> · Correct: <strong>${LETTERS[d.answer] || '–'}</strong>` : ''}
                        ${d.status === 'unattempted' ? `Correct answer: <strong>${LETTERS[d.answer] || '–'}</strong>` : ''}
                      </div>
                    `}

                    ${d.explanation ? `
                      <div class="q-card-exp" style="padding:6px 10px; font-size:0.75rem;">
                        <strong>💡 Explanation:</strong> ${d.explanation}
                      </div>
                    ` : ''}
                  </div>
                `;
      }).join('')}
              </div>
            `).join('')}
          </div>` : ''}
        </div>
      `;

      // Destroy old charts for this student
      if (adminCharts[pieId]) adminCharts[pieId].destroy();
      if (adminCharts[barId]) adminCharts[barId].destroy();

      adminCharts[pieId] = new Chart(document.getElementById(pieId), {
        type: 'doughnut',
        data: {
          labels: ['Correct', 'Wrong', 'Skipped'],
          datasets: [{ data: [totCorrect, totWrong, totSkipped], backgroundColor: ['#059669', '#dc2626', '#d97706'], borderWidth: 0 }]
        },
        options: {
          plugins: { legend: { position: 'bottom', labels: { color: 'rgba(255,255,255,0.5)', font: { family: 'IBM Plex Sans', size: 10 } } } },
          cutout: '60%'
        }
      });

      adminCharts[barId] = new Chart(document.getElementById(barId), {
        type: 'bar',
        data: {
          labels: topics.map(t => t.length > 14 ? t.substring(0, 12) + '…' : t),
          datasets: [{
            label: 'Score %',
            data: topicPcts,
            backgroundColor: barColors.map(c => c + '33'),
            borderColor: barColors,
            borderWidth: 2,
            borderRadius: 4
          }]
        },
        options: {
          indexAxis: topics.length > 3 ? 'y' : 'x',
          plugins: { legend: { display: false } },
          scales: {
            x: { max: 100, ticks: { color: 'rgba(255,255,255,0.3)', font: { size: 9 } }, grid: { color: 'rgba(255,255,255,0.04)' } },
            y: { ticks: { color: 'rgba(255,255,255,0.4)', font: { size: 9 } }, grid: { color: 'rgba(255,255,255,0.04)' } }
          }
        }
      });
    }

    function downloadAdminCombinedPDF(safeEmail, email) {
      const element = document.getElementById(`adminCombinedCard-${safeEmail}`);
      const buttons = element.querySelectorAll('button');
      buttons.forEach(b => b.style.display = 'none');

      html2pdf().set({
        margin: [10, 10, 10, 10],
        filename: `EduQuest_Combined_Report_${email}_${new Date().toISOString().slice(0, 10)}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true, backgroundColor: '#0d0d14' },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
      }).from(element).save().then(() => {
        buttons.forEach(b => b.style.display = '');
      }).catch(err => {
        console.error('PDF generation failed', err);
        buttons.forEach(b => b.style.display = '');
      });
    }

    function printReport() {
      window.print();
    }
  