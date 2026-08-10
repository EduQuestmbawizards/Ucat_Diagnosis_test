/**
 * test_ucat_scoring.js
 * Comprehensive automated verification test suite for UCAT Scoring Engine
 */

const assert = require('assert');
const UCATScoring = require('./ucatScoring.js');

console.log('🧪 Starting UCAT Scoring Engine Test Suite...\n');

let passedTests = 0;
let totalTests = 0;

function runTest(testName, testFn) {
  totalTests++;
  try {
    testFn();
    console.log(`  ✅ PASS: ${testName}`);
    passedTests++;
  } catch (err) {
    console.error(`  ❌ FAIL: ${testName}`);
    console.error(err);
  }
}

// ─────────────────────────────────────────────────────────────
// TEST CASE 1: FULL MOCK - ALL CORRECT
// ─────────────────────────────────────────────────────────────
runTest('Test Case 1 — Full Mock with All Correct Answers', () => {
  // Simulate 4 cognitive sections + SJT
  const mockQuestions = {
    vr: { name: 'Verbal Reasoning', questions: Array.from({ length: 44 }, (_, i) => ({ id: `vr_${i+1}`, section: 'VR', answer: 0, options: ['A','B','C','D'] })) },
    dm: { name: 'Decision Making', questions: Array.from({ length: 35 }, (_, i) => ({ id: `dm_${i+1}`, section: 'DM', answer: 1, options: ['A','B','C','D'] })) },
    qr: { name: 'Quantitative Reasoning', questions: Array.from({ length: 36 }, (_, i) => ({ id: `qr_${i+1}`, section: 'QR', answer: 2, options: ['A','B','C','D'] })) },
    ar: { name: 'Abstract Reasoning', questions: Array.from({ length: 55 }, (_, i) => ({ id: `ar_${i+1}`, section: 'AR', answer: 3, options: ['A','B','C','D'] })) },
    sjt: { name: 'Situational Judgement', questions: Array.from({ length: 69 }, (_, i) => ({ id: `sjt_${i+1}`, section: 'SJT', answer: 0, options: ['Very Appropriate','Appropriate','Inappropriate','Very Inappropriate'] })) }
  };

  const studentAnswers = {
    vr: Object.fromEntries(mockQuestions.vr.questions.map(q => [q.id, 0])),
    dm: Object.fromEntries(mockQuestions.dm.questions.map(q => [q.id, 1])),
    qr: Object.fromEntries(mockQuestions.qr.questions.map(q => [q.id, 2])),
    ar: Object.fromEntries(mockQuestions.ar.questions.map(q => [q.id, 3])),
    sjt: Object.fromEntries(mockQuestions.sjt.questions.map(q => [q.id, 0]))
  };

  const report = UCATScoring.generateUCATReport({
    testType: 'FULL_MOCK',
    examName: 'UCAT Full Mock Test 1',
    questions: mockQuestions,
    studentAnswers: studentAnswers,
    studentData: { name: 'Top Student', email: 'top@example.com' }
  });

  // Verify Cognitive scaled scores are 900
  assert.strictEqual(report.sections.VR.scaledScore, 900, 'VR scaled score must be 900');
  assert.strictEqual(report.sections.DM.scaledScore, 900, 'DM scaled score must be 900');
  assert.strictEqual(report.sections.QR.scaledScore, 900, 'QR scaled score must be 900');
  assert.strictEqual(report.sections.AR.scaledScore, 900, 'AR scaled score must be 900');

  // Verify Total Cognitive Score is 3600
  assert.strictEqual(report.totalCognitiveScore, 3600, 'Total cognitive score must be 3600');
  assert.strictEqual(report.totalCognitiveScore, (report.sections.VR.scaledScore + report.sections.DM.scaledScore + report.sections.QR.scaledScore + report.sections.AR.scaledScore), 'Total must strictly equal sum of 4 sections');

  // Verify SJT is Band 1 and not included in cognitive score
  assert.strictEqual(report.sections.SJT.band, 'Band 1', 'SJT must be Band 1');
  assert.strictEqual(report.sections.SJT.rawScore, 69, 'SJT raw score must be 69');
  assert.strictEqual(report.sections.SJT.scaledScore, undefined, 'SJT must NOT have a scaledScore');

  // Verify validation passed
  assert.strictEqual(report.validation.isValid, true, 'Validation must pass');
});

// ─────────────────────────────────────────────────────────────
// TEST CASE 2: FULL MOCK - ALL INCORRECT
// ─────────────────────────────────────────────────────────────
runTest('Test Case 2 — Full Mock with All Incorrect Answers', () => {
  const mockQuestions = {
    vr: { name: 'Verbal Reasoning', questions: Array.from({ length: 44 }, (_, i) => ({ id: `vr_${i+1}`, section: 'VR', answer: 0, options: ['A','B','C','D'] })) },
    dm: { name: 'Decision Making', questions: Array.from({ length: 35 }, (_, i) => ({ id: `dm_${i+1}`, section: 'DM', answer: 1, options: ['A','B','C','D'] })) },
    qr: { name: 'Quantitative Reasoning', questions: Array.from({ length: 36 }, (_, i) => ({ id: `qr_${i+1}`, section: 'QR', answer: 2, options: ['A','B','C','D'] })) },
    ar: { name: 'Abstract Reasoning', questions: Array.from({ length: 55 }, (_, i) => ({ id: `ar_${i+1}`, section: 'AR', answer: 3, options: ['A','B','C','D'] })) },
    sjt: { name: 'Situational Judgement', questions: Array.from({ length: 69 }, (_, i) => ({ id: `sjt_${i+1}`, section: 'SJT', answer: 0, options: ['1','2','3','4'] })) }
  };

  // Wrong choices (and far away for SJT: choose 3 when answer is 0)
  const studentAnswers = {
    vr: Object.fromEntries(mockQuestions.vr.questions.map(q => [q.id, 1])),
    dm: Object.fromEntries(mockQuestions.dm.questions.map(q => [q.id, 0])),
    qr: Object.fromEntries(mockQuestions.qr.questions.map(q => [q.id, 0])),
    ar: Object.fromEntries(mockQuestions.ar.questions.map(q => [q.id, 0])),
    sjt: Object.fromEntries(mockQuestions.sjt.questions.map(q => [q.id, 3]))
  };

  const report = UCATScoring.generateUCATReport({
    testType: 'FULL_MOCK',
    examName: 'UCAT Full Mock Test 1',
    questions: mockQuestions,
    studentAnswers: studentAnswers
  });

  // Verify Cognitive scaled scores are at minimum 300
  assert.strictEqual(report.sections.VR.scaledScore, 300, 'VR scaled score must be 300');
  assert.strictEqual(report.sections.DM.scaledScore, 300, 'DM scaled score must be 300');
  assert.strictEqual(report.sections.QR.scaledScore, 300, 'QR scaled score must be 300');
  assert.strictEqual(report.sections.AR.scaledScore, 300, 'AR scaled score must be 300');

  // Verify Total Cognitive Score is 1200
  assert.strictEqual(report.totalCognitiveScore, 1200, 'Total cognitive score must be 1200');

  // Verify SJT is Band 4
  assert.strictEqual(report.sections.SJT.band, 'Band 4', 'SJT must be Band 4');
  assert.strictEqual(report.sections.SJT.rawScore, 0, 'SJT raw score must be 0');

  assert.strictEqual(report.validation.isValid, true, 'Validation must pass');
});

// ─────────────────────────────────────────────────────────────
// TEST CASE 3: PARTIALLY ATTEMPTED & UNANSWERED QUESTIONS
// ─────────────────────────────────────────────────────────────
runTest('Test Case 3 — Partially Attempted (Unanswered handled correctly)', () => {
  const vrQuestions = Array.from({ length: 44 }, (_, i) => ({ id: i + 1, section: 'VR', answer: 0 }));
  
  // Student answers only 20 questions (all correct), 24 unanswered
  const answers = {};
  for (let i = 1; i <= 20; i++) {
    answers[i] = 0;
  }

  const rawResult = UCATScoring.calculateSectionRawScore(vrQuestions, answers, 'VR');
  assert.strictEqual(rawResult.attempted, 20, 'Attempted must be 20');
  assert.strictEqual(rawResult.unattempted, 24, 'Unattempted must be 24');
  assert.strictEqual(rawResult.correct, 20, 'Correct must be 20');
  assert.strictEqual(rawResult.wrong, 0, 'Wrong must be 0');
  assert.strictEqual(rawResult.rawScore, 20, 'Raw score must be 20');

  const scaled = UCATScoring.calculateSectionScaledScore('VR', rawResult.rawScore, rawResult.maxPossibleScore);
  assert(scaled >= 550 && scaled <= 650, `Scaled score for 20/44 should be ~600, got ${scaled}`);
});

// ─────────────────────────────────────────────────────────────
// TEST CASE 4: SJT PARTIAL CREDIT MARKING & BANDS
// ─────────────────────────────────────────────────────────────
runTest('Test Case 4 — SJT Partial Credit & Band Calculation', () => {
  // Test single question scoring
  const sjtQ = {
    id: 1,
    section: 'SJT',
    answer: 0, // 'Very appropriate'
    options: ['Very appropriate', 'Appropriate', 'Inappropriate', 'Very Inappropriate']
  };

  // Exact match -> 1 mark
  const exact = UCATScoring.calculateQuestionScore(sjtQ, 0, 'SJT');
  assert.strictEqual(exact.marks, 1.0, 'Exact match must receive 1.0 mark');
  assert.strictEqual(exact.status, 'correct');

  // Adjacent match (index 1 when answer is 0) -> 0.5 mark
  const adjacent = UCATScoring.calculateQuestionScore(sjtQ, 1, 'SJT');
  assert.strictEqual(adjacent.marks, 0.5, 'Adjacent match must receive 0.5 mark');
  assert.strictEqual(adjacent.status, 'partial');

  // 2 steps away (index 2 when answer is 0) -> 0 mark
  const distant = UCATScoring.calculateQuestionScore(sjtQ, 2, 'SJT');
  assert.strictEqual(distant.marks, 0, '2 steps away must receive 0 marks');
  assert.strictEqual(distant.status, 'wrong');

  // 3 steps away (index 3 when answer is 0) -> 0 mark
  const opposite = UCATScoring.calculateQuestionScore(sjtQ, 3, 'SJT');
  assert.strictEqual(opposite.marks, 0, 'Opposite answer must receive 0 marks');
  assert.strictEqual(opposite.status, 'wrong');

  // Test Bands
  assert.strictEqual(UCATScoring.calculateSJTBand(55, 69).band, 'Band 1', '55/69 (79.7%) -> Band 1');
  assert.strictEqual(UCATScoring.calculateSJTBand(42, 69).band, 'Band 2', '42/69 (60.8%) -> Band 2');
  assert.strictEqual(UCATScoring.calculateSJTBand(28, 69).band, 'Band 3', '28/69 (40.5%) -> Band 3');
  assert.strictEqual(UCATScoring.calculateSJTBand(15, 69).band, 'Band 4', '15/69 (21.7%) -> Band 4');
});

// ─────────────────────────────────────────────────────────────
// TEST CASE 5: TOPIC TEST (Part test 20 questions)
// ─────────────────────────────────────────────────────────────
runTest('Test Case 5 — Topic Test (20 questions raw score, no fake scaled score)', () => {
  const topicQuestions = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    topic: 'Verbal Reasoning',
    answer: 0,
    options: ['A','B','C','D']
  }));

  const answers = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 1 }; // 4 correct, 1 wrong, 15 unattempted

  const report = UCATScoring.generateUCATReport({
    testType: 'TOPIC_TEST',
    examName: 'Verbal Reasoning - Part 1',
    questions: topicQuestions,
    studentAnswers: answers
  });

  assert.strictEqual(report.isTopicTest, true);
  assert.strictEqual(report.overallStats.totalQuestions, 20);
  assert.strictEqual(report.overallStats.attempted, 5);
  assert.strictEqual(report.overallStats.correct, 4);
  assert.strictEqual(report.overallStats.wrong, 1);
  assert.strictEqual(report.overallStats.unattempted, 15);
  assert.strictEqual(report.overallStats.rawScore, 4);
  assert.strictEqual(report.overallStats.maxPossibleScore, 20);
  assert.strictEqual(report.overallStats.accuracy, 20.0);
  // Must NOT assign fake scaled score for topic test
  assert.strictEqual(report.sections.VR.scaledScore, null, 'Topic test must not have scaledScore');
});

// ─────────────────────────────────────────────────────────────
// TEST CASE 6: SECTIONAL TEST
// ─────────────────────────────────────────────────────────────
runTest('Test Case 6 — Complete VR Sectional Test (44 questions)', () => {
  const vrQuestions = Array.from({ length: 44 }, (_, i) => ({
    id: i + 1,
    section: 'VR',
    answer: 0,
    options: ['A','B','C','D']
  }));

  // 35 correct out of 44
  const answers = {};
  for (let i = 1; i <= 35; i++) answers[i] = 0;
  for (let i = 36; i <= 44; i++) answers[i] = 1;

  const report = UCATScoring.generateUCATReport({
    testType: 'SECTIONAL_TEST',
    examName: 'Verbal Reasoning Mock Test',
    questions: vrQuestions,
    studentAnswers: answers
  });

  assert.strictEqual(report.sections.VR.totalQuestions, 44);
  assert.strictEqual(report.sections.VR.correct, 35);
  assert.strictEqual(report.sections.VR.rawScore, 35);
  assert.strictEqual(report.sections.VR.scaledScore, 860);
  // Ensure no fake sections were generated
  assert.strictEqual(report.sections.DM, undefined, 'DM must not exist in VR sectional test');
  assert.strictEqual(report.sections.QR, undefined, 'QR must not exist in VR sectional test');
});

// ─────────────────────────────────────────────────────────────
// TEST CASE 7: DETERMINISM & REPRODUCIBILITY
// ─────────────────────────────────────────────────────────────
runTest('Test Case 7 — Score Determinism and Reproducibility', () => {
  const vrQuestions = Array.from({ length: 44 }, (_, i) => ({ id: i + 1, section: 'VR', answer: (i % 4) }));
  const answers = Object.fromEntries(vrQuestions.map(q => [q.id, (q.id % 3)]));

  const report1 = UCATScoring.generateUCATReport({
    testType: 'SECTIONAL_TEST',
    examName: 'Verbal Reasoning Mock Test',
    questions: vrQuestions,
    studentAnswers: answers
  });

  const report2 = UCATScoring.generateUCATReport({
    testType: 'SECTIONAL_TEST',
    examName: 'Verbal Reasoning Mock Test',
    questions: vrQuestions,
    studentAnswers: answers
  });

  assert.strictEqual(report1.sections.VR.rawScore, report2.sections.VR.rawScore);
  assert.strictEqual(report1.sections.VR.scaledScore, report2.sections.VR.scaledScore);
  assert.strictEqual(report1.overallStats.accuracy, report2.overallStats.accuracy);
});

// ─────────────────────────────────────────────────────────────
// TEST CASE 8: VALIDATION INVARIANTS
// ─────────────────────────────────────────────────────────────
runTest('Test Case 8 — Invariant Validation Engine', () => {
  const validReport = {
    testType: 'FULL_MOCK',
    sections: {
      VR: { scaledScore: 720 },
      DM: { scaledScore: 680 },
      QR: { scaledScore: 750 },
      AR: { scaledScore: 710 },
      SJT: { band: 'Band 2' }
    },
    totalCognitiveScore: 2860,
    sjtReport: { band: 'Band 2' },
    overallStats: {
      totalQuestions: 204,
      attempted: 190,
      unattempted: 14,
      correct: 150,
      partial: 10,
      wrong: 30,
      rawScore: 155,
      maxPossibleScore: 204
    }
  };

  const valRes = UCATScoring.validateReport(validReport);
  assert.strictEqual(valRes.isValid, true, 'Valid report must pass all invariants');
  assert.strictEqual(valRes.errors.length, 0);

  // Invalidate sum: Total cognitive score != sum
  const badSumReport = JSON.parse(JSON.stringify(validReport));
  badSumReport.totalCognitiveScore = 2000;
  const badVal = UCATScoring.validateReport(badSumReport);
  assert.strictEqual(badVal.isValid, false, 'Bad sum must fail validation');
  assert(badVal.errors.some(e => e.includes('Validation 1 Failed')));
});

console.log(`\n📊 Test Results: ${passedTests} / ${totalTests} passed.`);
if (passedTests === totalTests) {
  console.log('🎉 ALL UCAT SCORING TESTS PASSED PERFECTLY!\n');
} else {
  console.error('💥 Some tests failed. Please review.');
  process.exit(1);
}
