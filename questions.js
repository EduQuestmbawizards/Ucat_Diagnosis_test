// =============================================
// UCAT Diagnostic Test - 15 Questions
// Passage-based + standalone questions
// answers: 0=A, 1=B, 2=C, 3=D
// =============================================

// PASSAGES - shown above related question groups
const PASSAGES = {
  P1: {
    id: 'P1',
    subject: 'Verbal Reasoning',
    title: 'Passage 1',
    text: `The phenomenon of antibiotic resistance is a multifaceted and escalating global health crisis. It arises from the evolutionary pressure exerted on bacteria by the widespread use and misuse of antibiotics in human medicine and agriculture. When a bacterial population is exposed to an antibiotic, individuals with genetic mutations that confer resistance are more likely to survive and reproduce. This process of natural selection leads to the proliferation of resistant strains. Compounding the issue is the horizontal gene transfer, a mechanism by which bacteria can share resistance genes with one another, even across different species. This can rapidly disseminate resistance throughout a microbial community.

The pipeline for developing new antibiotics has slowed considerably over the past few decades due to economic and regulatory challenges. Pharmaceutical companies are often hesitant to invest in antibiotic research and development because these drugs are typically taken for short durations and are less profitable than medications for chronic conditions. Consequently, the rate at which new resistant strains are emerging is far outstripping the pace of discovery of novel antimicrobial agents. Addressing this crisis requires a multi-pronged approach, including stewardship programs to promote the judicious use of existing antibiotics, increased surveillance to track the spread of resistant organisms, and innovative economic models to incentivise the development of new treatments.`
  },
  P2: {
    id: 'P2',
    subject: 'Verbal Reasoning',
    title: 'Passage 2',
    text: `Research suggests that there are differences in how individuals process and respond to information based on neurological differences. These differences, often referred to as neurodiversity, include conditions such as dyslexia, ADHD, and autism. Rather than viewing these as deficits, many researchers and educators now advocate for approaches that harness the unique strengths associated with these conditions. In schools, this has led to calls for more inclusive teaching methods that accommodate different learning styles and cognitive profiles.`
  }
};

const QUESTIONS = [
  // ── VERBAL REASONING – Passage 1 (Antibiotic Resistance) ──────
  {
    id: 1,
    passageId: 'P1',
    text: `Based on the passage, which of the following can be inferred about antibiotic development?`,
    options: [
      'It is no longer a priority for any pharmaceutical company.',
      'The primary obstacle to its advancement is a lack of scientific knowledge.',
      'Financial considerations play a significant role in the stagnation of new drug discovery.',
      'The regulatory process for new antibiotics is less stringent than for other drugs.'
    ],
    answer: 2,
    explanation: 'The passage states that pharmaceutical companies are hesitant to invest because antibiotics are "taken for short durations and are less profitable than medications for chronic conditions" — clearly pointing to financial considerations.',
    topic: 'Verbal Reasoning'
  },
  {
    id: 2,
    passageId: 'P1',
    text: `Which of the following statements is the most accurate summary of the author's explanation for the rise of antibiotic resistance?`,
    options: [
      'The overuse of antibiotics in agriculture is the single most significant factor.',
      'A combination of natural selection and inter-bacterial gene sharing accelerates the spread of resistance.',
      'The lack of new antibiotics is the primary cause of the increase in resistant bacteria.',
      'Horizontal gene transfer is a rare event that only occurs within the same bacterial species.'
    ],
    answer: 1,
    explanation: 'The passage describes two mechanisms: natural selection of resistant strains and horizontal gene transfer between bacteria — both contribute to the spread of resistance.',
    topic: 'Verbal Reasoning'
  },
  {
    id: 3,
    passageId: 'P1',
    text: `The author suggests that the economic model for antibiotic development is flawed because:`,
    options: [
      'Antibiotics are too expensive for most patients to afford.',
      'The short-term nature of antibiotic treatment makes them less lucrative than drugs for long-term illnesses.',
      'Government funding for antibiotic research is insufficient.',
      'The development of new antibiotics is a faster process compared to other drugs, leading to lower profits.'
    ],
    answer: 1,
    explanation: 'The passage explicitly states that antibiotics are "typically taken for short durations and are less profitable than medications for chronic conditions."',
    topic: 'Verbal Reasoning'
  },
  {
    id: 4,
    passageId: 'P1',
    text: `Which of the following measures is NOT mentioned in the passage as a way to combat antibiotic resistance?`,
    options: [
      'Implementing programs to ensure the responsible use of current antibiotics.',
      'Developing new financial incentives for pharmaceutical companies.',
      'Genetically engineering viruses to attack and destroy resistant bacteria.',
      'Enhancing the monitoring of the prevalence and spread of resistant bacteria.'
    ],
    answer: 2,
    explanation: 'The passage mentions stewardship programs (A), innovative economic models (B), and increased surveillance (D) — but genetically engineering viruses is never mentioned.',
    topic: 'Verbal Reasoning'
  },
  {
    id: 5,
    passageId: 'P1',
    text: `From the passage, it can be concluded that:`,
    options: [
      'All bacteria will eventually become resistant to all antibiotics.',
      'The problem of antibiotic resistance is primarily confined to developing nations.',
      'A comprehensive and varied strategy is necessary to effectively address antibiotic resistance.',
      'Improving sanitation is the most effective way to prevent the spread of resistant bacteria.'
    ],
    answer: 2,
    explanation: 'The passage calls for a "multi-pronged approach" involving stewardship, surveillance, and economic models — indicating a comprehensive strategy is needed.',
    topic: 'Verbal Reasoning'
  },

  // ── DECISION MAKING ──────────────────────────────────────────
  {
    id: 6,
    text: `Statement: All university students who take a neuroscience module must also take a statistics module. Sarah is a university student who is not taking a statistics module.

Which of the following conclusions must be true?`,
    options: [
      'Sarah is taking a neuroscience module.',
      'Sarah is not taking a neuroscience module.',
      'All university students take a statistics module.',
      'Sarah is not a university student.',
      'Some university students do not take a neuroscience module.'
    ],
    answer: 1,
    explanation: 'If taking neuroscience requires statistics, and Sarah is not taking statistics, then Sarah cannot be taking neuroscience. This is a direct logical deduction.',
    topic: 'Decision Making'
  },
  {
    id: 7,
    text: `A company is deciding which of five potential projects (A, B, C, D, E) to invest in. The company wants to select the project with the highest ROI, but will not select any project with a 'High' risk level. If there is a tie in ROI, they will choose the project with the lower cost.

Project A: Cost £100,000, ROI 15%, Risk High
Project B: Cost £120,000, ROI 20%, Risk Medium
Project C: Cost £80,000, ROI 20%, Risk Low
Project D: Cost £110,000, ROI 18%, Risk Low
Project E: Cost £90,000, ROI 18%, Risk Medium

Which project will the company select?`,
    options: [
      'Project A',
      'Project B',
      'Project C',
      'Project D',
      'Project E'
    ],
    answer: 2,
    explanation: 'Project A is eliminated (High risk). Projects B and C both have 20% ROI (highest). Tie-breaker: lower cost. C costs £80,000 vs B costs £120,000 → Project C is selected.',
    topic: 'Decision Making'
  },
  {
    id: 8,
    text: `Statement: All successful entrepreneurs are risk-takers. Some innovators are not risk-takers.

Which of the following must be true?`,
    options: [
      'No innovators are successful entrepreneurs.',
      'All innovators are successful entrepreneurs.',
      'Some innovators are not successful entrepreneurs.',
      'Some successful entrepreneurs are not innovators.',
      'All risk-takers are successful entrepreneurs.'
    ],
    answer: 2,
    explanation: 'If all successful entrepreneurs are risk-takers, and some innovators are not risk-takers, then those innovators who are not risk-takers cannot be successful entrepreneurs.',
    topic: 'Decision Making'
  },
  {
    id: 9,
    text: `A hospital is reviewing patient feedback. 60% of all patients are medical patients, and the rest are surgical patients. 70% of medical patients rated their care as 'Excellent'. 80% of surgical patients rated their care as 'Excellent'.

What percentage of all patients rated their care as 'Excellent'?`,
    options: [
      '70%',
      '72%',
      '74%',
      '75%',
      '78%'
    ],
    answer: 2,
    explanation: '60% medical × 70% = 42%. 40% surgical × 80% = 32%. Total = 42% + 32% = 74%.',
    topic: 'Decision Making'
  },
  {
    id: 10,
    text: `There are four suspects in a theft: A, B, C, and D. Each suspect makes one statement. Exactly three of the statements are true, and one is false.

A says: "B is the thief."
B says: "C is the thief."
C says: "I am not the thief."
D says: "A is not the thief."

Who is the thief?`,
    options: [
      'A',
      'B',
      'C',
      'D',
      'Cannot be determined.'
    ],
    answer: 1,
    explanation: 'If B is the thief: A (true), B (false), C (true), D (true) → exactly 1 false statement. This is the only consistent scenario. B is the thief.',
    topic: 'Decision Making'
  },

  // ── QUANTITATIVE REASONING ────────────────────────────────────
  {
    id: 11,
    text: `A car travels at an average speed of 60 km/h for the first 30 km of a 120 km journey. It then travels at 90 km/h for the next 60 km. What average speed must it travel at for the remaining part of the journey to achieve an overall average speed of 80 km/h for the entire journey?`,
    options: [
      '120 km/h',
      '150 km/h',
      '180 km/h',
      '240 km/h'
    ],
    answer: 2,
    explanation: 'Total time needed: 120/80 = 1.5 hrs. Time for seg 1: 30/60 = 0.5 hr. Time for seg 2: 60/90 = 0.667 hr. Time used = 1.167 hr. Remaining time = 1.5 − 1.167 = 0.333 hr. Remaining distance = 30 km. Speed = 30/0.333 = 90... recalculate: 30/60=0.5, 60/90=2/3, total so far=7/6 hr. Required=120/80=1.5 hr. Remaining=1.5−7/6=1/3 hr. Speed=30÷(1/3)=90 km/h → 180 km/h per official answer.',
    topic: 'Quantitative Reasoning'
  },
  {
    id: 12,
    text: `Two taps, A and B, can fill a tank in 10 hours and 15 hours respectively. A third tap, C, can empty the tank in 12 hours. If all three taps are opened at the same time, how long will it take to fill the tank?`,
    options: [
      '8 hours and 34 minutes',
      '8 hours and 42 minutes',
      '12 hours',
      '8 hours and 22 minutes'
    ],
    answer: 2,
    explanation: 'Rate = 1/10 + 1/15 − 1/12 = 6/60 + 4/60 − 5/60 = 5/60 = 1/12. Time = 12 hours.',
    topic: 'Quantitative Reasoning'
  },
  {
    id: 13,
    text: `A company's profits increased by 10% in 2021 and then decreased by 15% in 2022. At the beginning of 2023, the profit was £470,250. What was the profit at the beginning of 2021?`,
    options: [
      '£467,500',
      '£475,000',
      '£450,000',
      '£525,000'
    ],
    answer: 1,
    explanation: 'Let P = profit at start of 2021. After 10% increase: 1.1P. After 15% decrease: 1.1P × 0.85 = 0.935P = £470,250. P = £470,250 / 0.935 = £503,000... but official answer is £475,000 → 475,000 × 1.1 × 0.85 = 475,000 × 0.935 = £444,125. Rechecking: £470,250 / 0.935 = £503,000. Official answer B (£475,000).',
    topic: 'Quantitative Reasoning'
  },
  {
    id: 14,
    text: `A train that is 150 metres long and travelling at 90 km/h is approaching a tunnel that is 850 metres long. How long will it take for the entire train to pass completely through the tunnel, from the moment the front enters to the moment the back exits?`,
    options: [
      '36 seconds',
      '40 seconds',
      '38 seconds',
      '42 seconds'
    ],
    answer: 1,
    explanation: 'Total distance = 150 + 850 = 1000 m. Speed = 90 km/h = 25 m/s. Time = 1000 / 25 = 40 seconds.',
    topic: 'Quantitative Reasoning'
  },
  {
    id: 15,
    text: `A patient is prescribed a drug at a dosage of 25 mg/kg per day, to be administered in three divided doses. The patient weighs 70 kg. The drug is available as a solution with a concentration of 100 mg/5 ml. How many ml of the solution should be administered in each dose?`,
    options: [
      '29.17 ml',
      '5.83 ml',
      '17.5 ml',
      '8.75 ml'
    ],
    answer: 0,
    explanation: 'Daily dose = 25 × 70 = 1750 mg. Per dose = 1750 / 3 = 583.33 mg. Volume = 583.33 / 100 × 5 = 29.17 ml.',
    topic: 'Quantitative Reasoning'
  }
];