(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.UCATScoring = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  // =========================================================================
  // 1. SECTION DEFINITIONS & METADATA
  // =========================================================================
  // AR removed from UCAT (2024+). Cognitive sections are now VR, DM, QR only (max 2700).
  const COGNITIVE_SECTIONS = ['VR', 'DM', 'QR'];
  const SJT_SECTION = 'SJT';

  const SECTION_META = {
    VR: {
      key: 'VR',
      name: 'Verbal Reasoning',
      shortName: 'VR',
      icon: '📖',
      defaultQuestions: 44,
      defaultTimeMins: 22,
      isCognitive: true,
      minScaled: 300,
      maxScaled: 900
    },
    DM: {
      key: 'DM',
      name: 'Decision Making',
      shortName: 'DM',
      icon: '🧩',
      defaultQuestions: 35,
      defaultTimeMins: 37,
      isCognitive: true,
      minScaled: 300,
      maxScaled: 900
    },
    QR: {
      key: 'QR',
      name: 'Quantitative Reasoning',
      shortName: 'QR',
      icon: '🔢',
      defaultQuestions: 36,
      defaultTimeMins: 26,
      isCognitive: true,
      minScaled: 300,
      maxScaled: 900
    },
    // AR has been removed from the active UCAT test structure.
    // The AR entry below is retained ONLY for legacy result compatibility.
    // It will NOT appear in any new test configuration.
    AR: {
      key: 'AR',
      name: 'Abstract Reasoning (Legacy)',
      shortName: 'AR',
      icon: '📐',
      defaultQuestions: 55,
      defaultTimeMins: 13,
      isCognitive: false,
      minScaled: 300,
      maxScaled: 900,
      legacy: true
    },
    SJT: {
      key: 'SJT',
      name: 'Situational Judgement',
      shortName: 'SJT',
      icon: '⚖️',
      defaultQuestions: 69,
      defaultTimeMins: 26,
      isCognitive: false,
      minScaled: null,
      maxScaled: null
    }
  };

  // =========================================================================
  // 2. CONFIGURABLE RAW-TO-SCALED CONVERSION TABLES
  // =========================================================================
  // Standardized UCAT concordance models (300 to 900)
  const SCALING_TABLES = {
    // VR (44 questions)
    VR_44: [
      300, 300, 300, 310, 320, 340, 360, 380, 400, 410, // 0-9
      430, 450, 470, 490, 510, 530, 540, 560, 580, 600, // 10-19
      610, 630, 650, 660, 680, 700, 710, 730, 750, 760, // 20-29
      780, 790, 810, 830, 840, 860, 870, 880, 890, 900, // 30-39
      900, 900, 900, 900, 900                           // 40-44
    ],

    // DM (35 questions)
    DM_35: [
      300, 300, 310, 330, 350, 370, 390, 410, 430, 450, // 0-9
      470, 490, 510, 530, 550, 570, 590, 610, 630, 650, // 10-19
      670, 690, 710, 730, 750, 770, 790, 810, 830, 850, // 20-29
      870, 880, 890, 900, 900, 900                      // 30-35
    ],

    // DM (29 questions)
    DM_29: [
      300, 300, 320, 340, 370, 390, 420, 440, 470, 490, // 0-9
      520, 540, 570, 600, 620, 650, 670, 700, 720, 750, // 10-19
      770, 800, 820, 850, 870, 890, 900, 900, 900, 900  // 20-29
    ],

    // QR (36 questions)
    QR_36: [
      300, 300, 310, 320, 340, 360, 380, 400, 430, 450, // 0-9
      480, 500, 530, 550, 580, 600, 620, 640, 670, 690, // 10-19
      710, 730, 750, 780, 800, 820, 840, 860, 880, 890, // 20-29
      900, 900, 900, 900, 900, 900, 900                 // 30-36
    ],

    // AR_55 retained for legacy score display of old results only.
    AR_55: [
      300, 300, 300, 310, 320, 330, 340, 350, 360, 380, // 0-9
      390, 410, 420, 440, 450, 470, 480, 500, 520, 530, // 10-19
      550, 570, 580, 600, 620, 630, 650, 670, 680, 700, // 20-29
      720, 730, 750, 760, 780, 800, 810, 830, 840, 860, // 30-39
      870, 880, 890, 900, 900, 900, 900, 900, 900, 900, // 40-49
      900, 900, 900, 900, 900, 900                      // 50-55
    ]
  };

  // SJT Band Thresholds (Percentage of Maximum Raw Marks)
  const SJT_THRESHOLDS = [
    {
      band: 'Band 1',
      bandNum: 1,
      minPct: 75,
      interpretation: 'Those in Band 1 demonstrated an excellent level of performance, showing similar judgement in most cases to the panel of experts.'
    },
    {
      band: 'Band 2',
      bandNum: 2,
      minPct: 55,
      interpretation: 'Those in Band 2 demonstrated a good, solid level of performance, showing appropriate judgement frequently, with many responses matching model answers.'
    },
    {
      band: 'Band 3',
      bandNum: 3,
      minPct: 35,
      interpretation: 'Those in Band 3 demonstrated a modest level of performance, with appropriate judgement shown for some questions and substantial differences from ideal responses for others.'
    },
    {
      band: 'Band 4',
      bandNum: 4,
      minPct: 0,
      interpretation: 'The performance of those in Band 4 was low, with judgement tending to differ substantially from ideal responses in many cases.'
    }
  ];

  // =========================================================================
  // 3. SECTION KEY NORMALIZER
  // =========================================================================
  function normalizeSectionKey(keyOrName) {
    if (!keyOrName) return 'VR';
    const str = String(keyOrName).trim().toLowerCase();

    if (str === 'vr' || str.includes('verbal')) return 'VR';
    if (str === 'dm' || str.includes('decision')) return 'DM';
    if (str === 'qr' || str.includes('quant') || str.includes('numerical')) return 'QR';
    if (str === 'ar' || str.includes('abstract')) return 'AR';
    if (str === 'sjt' || str === 'sj' || str.includes('situational') || str.includes('judgement') || str.includes('judgment')) return 'SJT';

    return 'VR';
  }

  // =========================================================================
  // 4. QUESTION-LEVEL MARKING ENGINE
  // =========================================================================
  /**
   * Evaluate a student's answer for a single question
   * 
   * @param {Object} question - Question object with { id, text, options, answer, topic/section }
   * @param {number|string|null|undefined} studentAnswer - Student's chosen option index (0..N) or value
   * @param {string} [sectionKey] - Optional section override
   * @returns {Object} Evaluation details { marks, maxMarks, isAttempted, isCorrect, isPartial, status, statusText }
   */
  function calculateQuestionScore(question, studentAnswer, sectionKey) {
    if (!question) {
      return {
        marks: 0,
        maxMarks: 1,
        isAttempted: false,
        isCorrect: false,
        isPartial: false,
        status: 'unattempted',
        statusText: '⏭ Skipped'
      };
    }

    const sec = normalizeSectionKey(sectionKey || question.section || question.topic || question.subject);
    const isUnattempted = (studentAnswer === undefined || studentAnswer === null || studentAnswer === -1 || studentAnswer === '');

    if (isUnattempted) {
      return {
        marks: 0,
        maxMarks: (question.maxMarks !== undefined) ? question.maxMarks : 1,
        isAttempted: false,
        isCorrect: false,
        isPartial: false,
        status: 'unattempted',
        statusText: '⏭ Skipped',
        chosen: -1,
        answer: question.answer
      };
    }

    const chosenIdx = (typeof studentAnswer === 'number') ? studentAnswer : parseInt(studentAnswer, 10);
    const correctIdx = (typeof question.answer === 'number') ? question.answer : parseInt(question.answer, 10);

    // ── SITUATIONAL JUDGEMENT PARTIAL CREDIT MARKING ──
    if (sec === 'SJT') {
      const numOptions = Array.isArray(question.options) ? question.options.length : 4;
      const isRatingScale = (numOptions === 4);

      if (!isNaN(chosenIdx) && !isNaN(correctIdx)) {
        if (chosenIdx === correctIdx) {
          // Exact match -> Full 1.0 mark
          return {
            marks: 1.0,
            maxMarks: 1.0,
            isAttempted: true,
            isCorrect: true,
            isPartial: false,
            status: 'correct',
            statusText: '✅ Correct (1 mark)',
            chosen: chosenIdx,
            answer: correctIdx
          };
        } else if (isRatingScale && Math.abs(chosenIdx - correctIdx) === 1) {
          // 1 step away on 4-option rating scale -> Partial 0.5 mark
          return {
            marks: 0.5,
            maxMarks: 1.0,
            isAttempted: true,
            isCorrect: false,
            isPartial: true,
            status: 'partial',
            statusText: '🟡 Partial Credit (0.5 mark)',
            chosen: chosenIdx,
            answer: correctIdx
          };
        } else {
          // 2 or more steps away -> 0 marks
          return {
            marks: 0,
            maxMarks: 1.0,
            isAttempted: true,
            isCorrect: false,
            isPartial: false,
            status: 'wrong',
            statusText: '❌ Incorrect (0 marks)',
            chosen: chosenIdx,
            answer: correctIdx
          };
        }
      }
    }

    // ── COGNITIVE / STANDARD QUESTIONS ──
    const maxMarks = (question.maxMarks !== undefined) ? question.maxMarks : 1;
    let isMatch = false;

    if (typeof question.answer === 'number' && !isNaN(chosenIdx)) {
      isMatch = (chosenIdx === question.answer);
    } else {
      isMatch = String(studentAnswer).trim().toLowerCase() === String(question.answer).trim().toLowerCase();
    }

    if (isMatch) {
      return {
        marks: maxMarks,
        maxMarks: maxMarks,
        isAttempted: true,
        isCorrect: true,
        isPartial: false,
        status: 'correct',
        statusText: '✅ Correct',
        chosen: chosenIdx,
        answer: question.answer
      };
    } else {
      return {
        marks: 0,
        maxMarks: maxMarks,
        isAttempted: true,
        isCorrect: false,
        isPartial: false,
        status: 'wrong',
        statusText: '❌ Wrong',
        chosen: chosenIdx,
        answer: question.answer
      };
    }
  }

  // =========================================================================
  // 5. SECTION RAW SCORING
  // =========================================================================
  /**
   * Aggregate raw marks and question stats for a set of questions
   */
  function calculateSectionRawScore(questions, answersMap, sectionKey) {
    if (!Array.isArray(questions)) questions = [];
    const sec = normalizeSectionKey(sectionKey || (questions[0] && (questions[0].section || questions[0].topic)));

    let totalQuestions = questions.length;
    let attempted = 0;
    let unattempted = 0;
    let correct = 0;
    let partial = 0;
    let wrong = 0;
    let rawScore = 0;
    let maxPossibleScore = 0;
    const evaluatedQuestions = [];

    questions.forEach((q, idx) => {
      // Look up answer strictly by q.id if defined, or by index if q.id is absent/answers is an array
      let studentAnswer = undefined;
      if (answersMap) {
        if (q.id !== undefined && answersMap[q.id] !== undefined) {
          studentAnswer = answersMap[q.id];
        } else if (q.id !== undefined && answersMap[String(q.id)] !== undefined) {
          studentAnswer = answersMap[String(q.id)];
        } else if (q.id === undefined && answersMap[idx] !== undefined) {
          studentAnswer = answersMap[idx];
        } else if (Array.isArray(answersMap) && idx < answersMap.length) {
          studentAnswer = answersMap[idx];
        }
      }

      const evalResult = calculateQuestionScore(q, studentAnswer, sec);
      rawScore += evalResult.marks;
      maxPossibleScore += evalResult.maxMarks;

      if (!evalResult.isAttempted) {
        unattempted++;
      } else {
        attempted++;
        if (evalResult.isCorrect) {
          correct++;
        } else if (evalResult.isPartial) {
          partial++;
        } else {
          wrong++;
        }
      }

      evaluatedQuestions.push({
        id: q.id !== undefined ? q.id : (idx + 1),
        qNum: idx + 1,
        section: sec,
        sectionName: SECTION_META[sec]?.name || sec,
        text: q.text || '',
        passageTitle: q.passageTitle || '',
        passageText: q.passageText || '',
        options: q.options || [],
        chosen: evalResult.chosen,
        answer: q.answer,
        marks: evalResult.marks,
        maxMarks: evalResult.maxMarks,
        status: evalResult.status,
        statusText: evalResult.statusText,
        explanation: q.explanation || ''
      });
    });

    const accuracy = maxPossibleScore > 0 ? Number(((rawScore / maxPossibleScore) * 100).toFixed(2)) : 0;

    return {
      sectionKey: sec,
      sectionName: SECTION_META[sec]?.name || sec,
      totalQuestions,
      attempted,
      unattempted,
      correct,
      partial,
      wrong,
      rawScore: Number(rawScore.toFixed(1)),
      maxPossibleScore: Number(maxPossibleScore.toFixed(1)),
      accuracy,
      questions: evaluatedQuestions
    };
  }

  // =========================================================================
  // 6. SCALED SCORE CONVERSION (Cognitive 300 to 900)
  // =========================================================================
  /**
   * Convert a section raw score into a UCAT scaled score (300 - 900)
   */
  function calculateSectionScaledScore(sectionKeyOrName, rawScore, maxPossibleMarks) {
    const sec = normalizeSectionKey(sectionKeyOrName);
    const raw = Math.max(0, Number(rawScore) || 0);
    const maxMarks = Math.max(1, Number(maxPossibleMarks) || SECTION_META[sec]?.defaultQuestions || 40);

    // Boundary: 0 raw marks is always 300
    if (raw <= 0) return 300;
    // Boundary: max raw marks is always 900
    if (raw >= maxMarks) return 900;

    // Check pre-configured lookup table for standard lengths
    let table = null;
    if (sec === 'VR' && maxMarks === 44) table = SCALING_TABLES.VR_44;
    else if (sec === 'DM' && maxMarks === 35) table = SCALING_TABLES.DM_35;
    else if (sec === 'DM' && maxMarks === 29) table = SCALING_TABLES.DM_29;
    else if (sec === 'QR' && maxMarks === 36) table = SCALING_TABLES.QR_36;
    // AR_55 lookup kept for legacy result display only (not active in new tests)
    else if (sec === 'AR' && maxMarks === 55) table = SCALING_TABLES.AR_55;

    if (table && table[Math.round(raw)] !== undefined) {
      return table[Math.round(raw)];
    }

    // Standardized smooth S-curve interpolation for custom lengths
    // Maps [0, maxMarks] to [300, 900] with non-linear standard score shape
    const ratio = raw / maxMarks;
    // Sigmoid-like scaling factor
    const curved = (Math.sin((ratio - 0.5) * Math.PI) + 1) / 2;
    const scaled = 300 + (curved * 600);

    // Round to nearest 10 for clean UCAT scaled score
    const roundedScaled = Math.round(scaled / 10) * 10;
    return Math.max(300, Math.min(900, roundedScaled));
  }

  // =========================================================================
  // 7. SITUATIONAL JUDGEMENT BAND EVALUATION
  // =========================================================================
  /**
   * Determine SJT Band from raw marks earned
   */
  function calculateSJTBand(rawScore, maxPossibleMarks) {
    const raw = Math.max(0, Number(rawScore) || 0);
    const maxMarks = Math.max(1, Number(maxPossibleMarks) || 69);
    const pct = (raw / maxMarks) * 100;

    for (let i = 0; i < SJT_THRESHOLDS.length; i++) {
      const t = SJT_THRESHOLDS[i];
      if (pct >= t.minPct) {
        return {
          band: t.band,
          bandNumber: t.bandNum,
          percentage: Number(pct.toFixed(2)),
          rawScore: Number(raw.toFixed(1)),
          maxPossibleScore: Number(maxMarks.toFixed(1)),
          interpretation: t.interpretation
        };
      }
    }

    const defaultT = SJT_THRESHOLDS[SJT_THRESHOLDS.length - 1];
    return {
      band: defaultT.band,
      bandNumber: defaultT.bandNum,
      percentage: Number(pct.toFixed(2)),
      rawScore: Number(raw.toFixed(1)),
      maxPossibleScore: Number(maxMarks.toFixed(1)),
      interpretation: defaultT.interpretation
    };
  }

  // =========================================================================
  // 8. TEST TYPE DETECTION
  // =========================================================================
  function detectTestType(examName, questionsOrSections) {
    const title = String(examName || '').trim().toLowerCase();

    // Explicit check for Full Mocks
    if (title.includes('full mock') || title.includes('full ucat mock') || title.startsWith('ucat full mock')) {
      return 'FULL_MOCK';
    }

    // Check if multi-section mock structure is provided
    if (questionsOrSections && typeof questionsOrSections === 'object' && !Array.isArray(questionsOrSections)) {
      const keys = Object.keys(questionsOrSections).map(k => k.toLowerCase());
      const hasCog = keys.some(k => k.includes('vr') || k.includes('verbal')) &&
        keys.some(k => k.includes('dm') || k.includes('decision')) &&
        keys.some(k => k.includes('qr') || k.includes('quant'));
      if (hasCog) return 'FULL_MOCK';
    }

    // Topic / Part tests (e.g. "Verbal Reasoning - Part 1", "Part 3")
    if (title.includes('part ') || title.includes('topic test') || title.includes('topic ') || title.includes('part-')) {
      return 'TOPIC_TEST';
    }

    // Sectional Mocks (e.g. "Verbal Reasoning Mock Test", "Quantitative Reasoning Mock 2")
    if (title.includes('mock') || title.includes('sectional') || title.includes('test 2') || title.includes('test 3') || title.includes('test 4') || title.includes('test 5')) {
      return 'SECTIONAL_TEST';
    }

    if (title.includes('diagnostic')) {
      return 'DIAGNOSTIC_TEST';
    }

    return 'TOPIC_TEST';
  }

  // =========================================================================
  // 9. TOTAL COGNITIVE SCORE CALCULATION
  // =========================================================================
  function calculateTotalCognitiveScore(sectionResults) {
    if (!sectionResults || typeof sectionResults !== 'object') return 0;

    let total = 0;
    COGNITIVE_SECTIONS.forEach(secKey => {
      if (sectionResults[secKey] && sectionResults[secKey].scaledScore !== undefined) {
        total += sectionResults[secKey].scaledScore;
      }
    });

    return total;
  }

  // =========================================================================
  // 10. AUTHORITATIVE REPORT GENERATOR
  // =========================================================================
  /**
   * Generates a complete, validated UCAT report object from student responses.
   * 
   * @param {Object} params
   * @param {string} [params.testType] - 'FULL_MOCK' | 'SECTIONAL_TEST' | 'TOPIC_TEST' | 'DIAGNOSTIC_TEST'
   * @param {string} params.examName - Title of test
   * @param {Array|Object} params.questions - Array of questions or dictionary of sections
   * @param {Object} params.studentAnswers - Map of student answers { [qId]: chosenIndex }
   * @param {Object} [params.studentData] - { name, email, phone }
   * @param {number} [params.timeSpentSeconds] - Total time used
   * @returns {Object} Complete report data conforming to standard schema
   */
  function generateUCATReport(params) {
    const {
      examName = 'UCAT Test',
      questions,
      studentAnswers = {},
      studentData = { name: 'Student', email: '' },
      timeSpentSeconds = 0
    } = params;

    const detectedType = params.testType || detectTestType(examName, questions);
    const report = {
      testType: detectedType,
      examName: examName,
      student: {
        name: studentData.name || 'Student',
        email: studentData.email || '',
        phone: studentData.phone || ''
      },
      submitTime: new Date().toISOString(),
      timeSpentSeconds: timeSpentSeconds,
      sections: {},
      cognitiveSectionKeys: [],
      totalCognitiveScore: null,
      maxCognitiveScore: null,
      sjtReport: null,
      overallStats: {
        totalQuestions: 0,
        attempted: 0,
        unattempted: 0,
        correct: 0,
        partial: 0,
        wrong: 0,
        rawScore: 0,
        maxPossibleScore: 0,
        accuracy: 0
      },
      detailedReviewItems: [],
      validation: { isValid: true, errors: [] }
    };

    // ─────────────────────────────────────────────────────────────
    // CASE A: FULL MOCK TEST (Multi-section dictionary or array)
    // ─────────────────────────────────────────────────────────────
    if (detectedType === 'FULL_MOCK') {
      let activeSections = {};

      if (questions && typeof questions === 'object' && !Array.isArray(questions)) {
        // Sections object passed { vr: { questions: [...] }, dm: ... }
        Object.entries(questions).forEach(([k, secData]) => {
          const secKey = normalizeSectionKey(k);
          const qList = secData.questions || secData;
          if (Array.isArray(qList)) {
            const secAnswers = (studentAnswers[k] || studentAnswers[secKey] || studentAnswers);
            activeSections[secKey] = {
              qList,
              secAnswers
            };
          }
        });
      } else if (Array.isArray(questions)) {
        // Group single question array by section
        questions.forEach(q => {
          const secKey = normalizeSectionKey(q.section || q.topic || q.subject);
          if (!activeSections[secKey]) {
            activeSections[secKey] = { qList: [], secAnswers: studentAnswers };
          }
          activeSections[secKey].qList.push(q);
        });
      }

      let totalCogScaled = 0;
      let countCognitiveSections = 0;

      // Evaluate cognitive sections: VR, DM, QR only (AR removed from active tests)
      COGNITIVE_SECTIONS.forEach(secKey => {
        if (activeSections[secKey]) {
          const { qList, secAnswers } = activeSections[secKey];
          const rawResult = calculateSectionRawScore(qList, secAnswers, secKey);
          const scaledScore = calculateSectionScaledScore(secKey, rawResult.rawScore, rawResult.maxPossibleScore);

          report.sections[secKey] = {
            sectionKey: secKey,
            name: SECTION_META[secKey].name,
            icon: SECTION_META[secKey].icon,
            isCognitive: true,
            totalQuestions: rawResult.totalQuestions,
            attempted: rawResult.attempted,
            unattempted: rawResult.unattempted,
            correct: rawResult.correct,
            wrong: rawResult.wrong,
            rawScore: rawResult.rawScore,
            maxPossibleScore: rawResult.maxPossibleScore,
            accuracy: rawResult.accuracy,
            scaledScore: scaledScore,
            minScaled: 300,
            maxScaled: 900
          };

          totalCogScaled += scaledScore;
          countCognitiveSections++;
          report.cognitiveSectionKeys.push(secKey);

          // Aggregate overall
          report.overallStats.totalQuestions += rawResult.totalQuestions;
          report.overallStats.attempted += rawResult.attempted;
          report.overallStats.unattempted += rawResult.unattempted;
          report.overallStats.correct += rawResult.correct;
          report.overallStats.wrong += rawResult.wrong;
          report.overallStats.rawScore += rawResult.rawScore;
          report.overallStats.maxPossibleScore += rawResult.maxPossibleScore;

          report.detailedReviewItems.push(...rawResult.questions);
        }
      });

      report.totalCognitiveScore = totalCogScaled;
      // UCAT has 3 cognitive sections (VR+DM+QR), max 2700. AR excluded.
      report.maxCognitiveScore = countCognitiveSections * 900;

      // Evaluate SJT separately (NEVER included in cognitive total or /900)
      if (activeSections['SJT']) {
        const { qList, secAnswers } = activeSections['SJT'];
        const sjtRaw = calculateSectionRawScore(qList, secAnswers, 'SJT');
        const sjtBand = calculateSJTBand(sjtRaw.rawScore, sjtRaw.maxPossibleScore);

        report.sections['SJT'] = {
          sectionKey: 'SJT',
          name: SECTION_META['SJT'].name,
          icon: SECTION_META['SJT'].icon,
          isCognitive: false,
          totalQuestions: sjtRaw.totalQuestions,
          attempted: sjtRaw.attempted,
          unattempted: sjtRaw.unattempted,
          correct: sjtRaw.correct,
          partial: sjtRaw.partial,
          wrong: sjtRaw.wrong,
          rawScore: sjtRaw.rawScore,
          maxPossibleScore: sjtRaw.maxPossibleScore,
          accuracy: sjtRaw.accuracy,
          band: sjtBand.band,
          bandNumber: sjtBand.bandNumber,
          interpretation: sjtBand.interpretation
        };

        report.sjtReport = report.sections['SJT'];

        report.overallStats.totalQuestions += sjtRaw.totalQuestions;
        report.overallStats.attempted += sjtRaw.attempted;
        report.overallStats.unattempted += sjtRaw.unattempted;
        report.overallStats.correct += sjtRaw.correct;
        report.overallStats.partial += sjtRaw.partial;
        report.overallStats.wrong += sjtRaw.wrong;
        report.overallStats.rawScore += sjtRaw.rawScore;
        report.overallStats.maxPossibleScore += sjtRaw.maxPossibleScore;

        report.detailedReviewItems.push(...sjtRaw.questions);
      }

      report.overallStats.accuracy = report.overallStats.maxPossibleScore > 0
        ? Number(((report.overallStats.rawScore / report.overallStats.maxPossibleScore) * 100).toFixed(2))
        : 0;

      // Run validation rules
      validateReport(report);
      return report;
    }

    // ─────────────────────────────────────────────────────────────
    // CASE B: SECTIONAL TEST (Complete section mock, e.g. VR 44 questions)
    // ─────────────────────────────────────────────────────────────
    if (detectedType === 'SECTIONAL_TEST') {
      const qList = Array.isArray(questions) ? questions : (questions ? Object.values(questions).flat() : []);
      const primarySec = normalizeSectionKey(qList[0]?.section || qList[0]?.topic || examName);
      const rawResult = calculateSectionRawScore(qList, studentAnswers, primarySec);

      if (primarySec === 'SJT') {
        const sjtBand = calculateSJTBand(rawResult.rawScore, rawResult.maxPossibleScore);
        report.sections['SJT'] = {
          sectionKey: 'SJT',
          name: SECTION_META['SJT'].name,
          icon: SECTION_META['SJT'].icon,
          isCognitive: false,
          totalQuestions: rawResult.totalQuestions,
          attempted: rawResult.attempted,
          unattempted: rawResult.unattempted,
          correct: rawResult.correct,
          partial: rawResult.partial,
          wrong: rawResult.wrong,
          rawScore: rawResult.rawScore,
          maxPossibleScore: rawResult.maxPossibleScore,
          accuracy: rawResult.accuracy,
          band: sjtBand.band,
          bandNumber: sjtBand.bandNumber,
          interpretation: sjtBand.interpretation
        };
        report.sjtReport = report.sections['SJT'];
      } else {
        const scaledScore = calculateSectionScaledScore(primarySec, rawResult.rawScore, rawResult.maxPossibleScore);
        report.sections[primarySec] = {
          sectionKey: primarySec,
          name: SECTION_META[primarySec].name,
          icon: SECTION_META[primarySec].icon,
          isCognitive: true,
          totalQuestions: rawResult.totalQuestions,
          attempted: rawResult.attempted,
          unattempted: rawResult.unattempted,
          correct: rawResult.correct,
          wrong: rawResult.wrong,
          rawScore: rawResult.rawScore,
          maxPossibleScore: rawResult.maxPossibleScore,
          accuracy: rawResult.accuracy,
          scaledScore: scaledScore,
          minScaled: 300,
          maxScaled: 900
        };
        report.cognitiveSectionKeys.push(primarySec);
        report.totalCognitiveScore = scaledScore;
        report.maxCognitiveScore = 900;
      }

      report.overallStats = {
        totalQuestions: rawResult.totalQuestions,
        attempted: rawResult.attempted,
        unattempted: rawResult.unattempted,
        correct: rawResult.correct,
        partial: rawResult.partial,
        wrong: rawResult.wrong,
        rawScore: rawResult.rawScore,
        maxPossibleScore: rawResult.maxPossibleScore,
        accuracy: rawResult.accuracy
      };

      report.detailedReviewItems = rawResult.questions;
      validateReport(report);
      return report;
    }

    // ─────────────────────────────────────────────────────────────
    // CASE C: TOPIC TEST (e.g. 20-question chunk / part test)
    // ─────────────────────────────────────────────────────────────
    if (detectedType === 'TOPIC_TEST') {
      const qList = Array.isArray(questions) ? questions : (questions ? Object.values(questions).flat() : []);
      const primarySec = normalizeSectionKey(qList[0]?.section || qList[0]?.topic || examName);
      const rawResult = calculateSectionRawScore(qList, studentAnswers, primarySec);

      report.isTopicTest = true;
      report.topicName = examName;
      report.sectionName = SECTION_META[primarySec]?.name || primarySec;

      if (primarySec === 'SJT') {
        const sjtBand = calculateSJTBand(rawResult.rawScore, rawResult.maxPossibleScore);
        report.sjtReport = {
          band: sjtBand.band,
          bandNumber: sjtBand.bandNumber,
          interpretation: sjtBand.interpretation
        };
      }

      report.overallStats = {
        totalQuestions: rawResult.totalQuestions,
        attempted: rawResult.attempted,
        unattempted: rawResult.unattempted,
        correct: rawResult.correct,
        partial: rawResult.partial,
        wrong: rawResult.wrong,
        rawScore: rawResult.rawScore,
        maxPossibleScore: rawResult.maxPossibleScore,
        accuracy: rawResult.accuracy
      };

      const scaledScore = primarySec === 'SJT' ? null : calculateSectionScaledScore(primarySec, rawResult.rawScore, rawResult.maxPossibleScore);

      report.sections[primarySec] = {
        sectionKey: primarySec,
        name: SECTION_META[primarySec]?.name || primarySec,
        isCognitive: SECTION_META[primarySec]?.isCognitive || false,
        totalQuestions: rawResult.totalQuestions,
        attempted: rawResult.attempted,
        unattempted: rawResult.unattempted,
        correct: rawResult.correct,
        partial: rawResult.partial,
        wrong: rawResult.wrong,
        rawScore: rawResult.rawScore,
        maxPossibleScore: rawResult.maxPossibleScore,
        accuracy: rawResult.accuracy,
        scaledScore: scaledScore
      };

      if (primarySec !== 'SJT') {
        report.cognitiveSectionKeys = [primarySec];
        report.totalCognitiveScore = scaledScore;
        report.maxCognitiveScore = 900;
      }

      report.detailedReviewItems = rawResult.questions;
      validateReport(report);
      return report;
    }

    // ─────────────────────────────────────────────────────────────
    // CASE D: DIAGNOSTIC TEST (Multi-topic breakdown)
    // ─────────────────────────────────────────────────────────────
    const qList = Array.isArray(questions) ? questions : [];
    const topicGroups = {};

    qList.forEach(q => {
      const top = q.topic || q.subject || 'General';
      if (!topicGroups[top]) topicGroups[top] = [];
      topicGroups[top].push(q);
    });

    Object.entries(topicGroups).forEach(([topicName, tQs]) => {
      const secKey = normalizeSectionKey(topicName);
      const rawResult = calculateSectionRawScore(tQs, studentAnswers, secKey);

      report.sections[topicName] = {
        topicName: topicName,
        sectionKey: secKey,
        name: topicName,
        totalQuestions: rawResult.totalQuestions,
        attempted: rawResult.attempted,
        unattempted: rawResult.unattempted,
        correct: rawResult.correct,
        wrong: rawResult.wrong,
        rawScore: rawResult.rawScore,
        maxPossibleScore: rawResult.maxPossibleScore,
        accuracy: rawResult.accuracy
      };

      report.overallStats.totalQuestions += rawResult.totalQuestions;
      report.overallStats.attempted += rawResult.attempted;
      report.overallStats.unattempted += rawResult.unattempted;
      report.overallStats.correct += rawResult.correct;
      report.overallStats.wrong += rawResult.wrong;
      report.overallStats.rawScore += rawResult.rawScore;
      report.overallStats.maxPossibleScore += rawResult.maxPossibleScore;

      report.detailedReviewItems.push(...rawResult.questions);
    });

    report.overallStats.accuracy = report.overallStats.maxPossibleScore > 0
      ? Number(((report.overallStats.rawScore / report.overallStats.maxPossibleScore) * 100).toFixed(2))
      : 0;

    validateReport(report);
    return report;
  }

  // =========================================================================
  // 11. REPORT VALIDATION ENGINE (9 Invariants)
  // =========================================================================
  function validateReport(report) {
    const errors = [];

    // Validation 1 & 3: Total Cognitive Score = sum of cognitive scaled scores
    if (report.testType === 'FULL_MOCK' || (report.testType === 'SECTIONAL_TEST' && report.totalCognitiveScore !== null)) {
      let expectedSum = 0;
      let cogCount = 0;

      COGNITIVE_SECTIONS.forEach(secKey => {
        if (report.sections[secKey] && report.sections[secKey].scaledScore !== undefined) {
          expectedSum += report.sections[secKey].scaledScore;
          cogCount++;

          // Validation 2: Scaled score between 300 and 900
          if (report.sections[secKey].scaledScore < 300 || report.sections[secKey].scaledScore > 900) {
            errors.push(`Validation 2 Failed: Section ${secKey} scaled score (${report.sections[secKey].scaledScore}) out of bounds [300, 900]`);
          }
        }
      });

      if (report.totalCognitiveScore !== expectedSum) {
        errors.push(`Validation 1 Failed: Total cognitive score (${report.totalCognitiveScore}) does not equal sum of section scaled scores (${expectedSum})`);
      }

      if (cogCount > 0) {
        const minBound = cogCount * 300;
        const maxBound = cogCount * 900;
        if (report.totalCognitiveScore < minBound || report.totalCognitiveScore > maxBound) {
          errors.push(`Validation 3 Failed: Total cognitive score (${report.totalCognitiveScore}) outside [${minBound}, ${maxBound}]`);
        }
      }
    }

    // Validation 4: SJT Band must be 1, 2, 3, or 4 and never in cognitive total
    if (report.sjtReport) {
      const validBands = ['Band 1', 'Band 2', 'Band 3', 'Band 4'];
      if (!validBands.includes(report.sjtReport.band)) {
        errors.push(`Validation 4 Failed: Invalid SJT Band "${report.sjtReport.band}"`);
      }
    }

    // Validation 5: Raw score <= maximum possible marks
    if (report.overallStats.rawScore > report.overallStats.maxPossibleScore) {
      errors.push(`Validation 5 Failed: Raw score (${report.overallStats.rawScore}) exceeds max possible (${report.overallStats.maxPossibleScore})`);
    }

    // Validation 6: Attempted + Unattempted = Total Questions
    if (report.overallStats.attempted + report.overallStats.unattempted !== report.overallStats.totalQuestions) {
      errors.push(`Validation 6 Failed: Attempted (${report.overallStats.attempted}) + Unanswered (${report.overallStats.unattempted}) != Total (${report.overallStats.totalQuestions})`);
    }

    // Validation 7: Correct + Wrong + Partial = Attempted
    if (report.overallStats.correct + report.overallStats.wrong + (report.overallStats.partial || 0) !== report.overallStats.attempted) {
      errors.push(`Validation 7 Failed: Correct (${report.overallStats.correct}) + Wrong (${report.overallStats.wrong}) + Partial (${report.overallStats.partial || 0}) != Attempted (${report.overallStats.attempted})`);
    }

    report.validation = {
      isValid: errors.length === 0,
      errors: errors
    };

    if (errors.length > 0) {
      console.warn('⚠️ UCAT Scoring Report Validation Errors:', errors);
    }

    return report.validation;
  }

  // =========================================================================
  // 12. EXPORT PUBLIC INTERFACE
  // =========================================================================
  return {
    COGNITIVE_SECTIONS,
    SJT_SECTION,
    SECTION_META,
    SCALING_TABLES,
    SJT_THRESHOLDS,
    normalizeSectionKey,
    calculateQuestionScore,
    calculateSectionRawScore,
    calculateSectionScaledScore,
    calculateSJTBand,
    calculateTotalCognitiveScore,
    detectTestType,
    generateUCATReport,
    validateReport
  };
});
