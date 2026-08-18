// =============================================
// UCAT Diagnostic Test - 15 Questions (Audited & Verified)
// Passage-based + standalone questions
// answers: 0=A, 1=B, 2=C, 3=D, 4=E
// =============================================

// PASSAGES - shown above related question groups
const PASSAGES = {
  P1: {
    id: 'P1',
    subject: 'Verbal Reasoning',
    title: 'Passage 1',
    text: `The phenomenon of antibiotic resistance is a multifaceted and escalating global health crisis. It arises from the evolutionary pressure exerted on bacteria by the widespread use and misuse of antibiotics in human medicine and agriculture. When a bacterial population is exposed to an antibiotic, individuals with genetic mutations that confer resistance are more likely to survive and reproduce. This process of natural selection leads to the proliferation of resistant strains. Compounding the issue is horizontal gene transfer, a mechanism by which bacteria can share resistance genes with one another, even across different species. This can rapidly disseminate resistance throughout a microbial community.

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
    explanation: 'The passage explicitly says pharmaceutical companies hesitate to invest because antibiotics are "taken for short durations and are less profitable than medications for chronic conditions." This is a direct statement of financial cause, so C is the only option directly supported by the text. A is too extreme ("no longer a priority for any"), B is contradicted (the obstacle stated is economic, not a lack of scientific knowledge), and D is never mentioned in the passage.',
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
    explanation: 'The passage names two specific mechanisms driving resistance: natural selection (resistant bacteria survive and reproduce) and horizontal gene transfer (bacteria share resistance genes, even across species). B captures both accurately. A singles out one factor the passage never ranks as "most significant." C confuses cause (slow drug development doesn\'t cause resistance, it fails to keep pace with it). D is directly contradicted — the passage says gene transfer happens "even across different species," not that it\'s confined to the same species.',
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
    explanation: 'This is a near-direct restatement of the passage: antibiotics are "typically taken for short durations and are less profitable than medications for chronic conditions." A, C, and D are never stated in the passage — the passage never discusses patient affordability, government funding, or development speed.',
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
    explanation: 'The passage lists exactly three measures: stewardship programs (A), innovative economic models to incentivise development (B), and increased surveillance (D). "Genetically engineering viruses" (phage therapy) is never mentioned anywhere in the passage, making C the correct "NOT mentioned" answer.',
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
    explanation: 'The passage\'s final sentence explicitly calls for a "multi-pronged approach," listing stewardship, surveillance, and new economic models — directly supporting C. A and B are unsupported overgeneralisations never stated in the text. D (sanitation) is never mentioned at all.',
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
    explanation: 'This is a straightforward contrapositive: "Neuroscience → Statistics" logically means "Not Statistics → Not Neuroscience." Since Sarah is not taking statistics, she cannot be taking neuroscience. B follows with certainty. C, D, and E all go beyond what the single statement about Sarah supports.',
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
    explanation: 'Project A is eliminated immediately (High risk). Among the rest, the highest ROI is 20%, shared by B and C. The tie-breaker is lower cost: C costs £80,000 versus B\'s £120,000, so Project C wins.',
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
    explanation: 'Since all successful entrepreneurs are risk-takers, anyone who is NOT a risk-taker cannot be a successful entrepreneur. We\'re told some innovators are not risk-takers — so those specific innovators cannot be successful entrepreneurs, meaning "some innovators are not successful entrepreneurs" must be true. A is too strong (only some innovators are excluded, not all). D and E introduce claims not supported by the given statements.',
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
    explanation: 'Weighted average: (60% × 70%) + (40% × 80%) = 42% + 32% = 74%.',
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
    explanation: 'Test each suspect as the thief and count true statements: If A is the thief: A(false), B(false), C(true), D(false) → 1 true, 3 false. If B is the thief: A(true), B(false), C(true), D(true) → 3 true, 1 false (Fits!). If C is the thief: A(false), B(true), C(false), D(true) → 2 true, 2 false. If D is the thief: A(false), B(false), C(true), D(true) → 2 true, 2 false. Only "B is the thief" produces exactly three true statements, so B is the thief.',
    topic: 'Decision Making'
  },

  // ── QUANTITATIVE REASONING ────────────────────────────────────
  {
    id: 11,
    text: `A car travels at an average speed of 60 km/h for the first 30 km of a 120 km journey. It then travels at 90 km/h for the next 60 km. What average speed must it travel at for the remaining part of the journey to achieve an overall average speed of 80 km/h for the entire journey?`,
    options: [
      '90 km/h',
      '150 km/h',
      '180 km/h',
      '240 km/h'
    ],
    answer: 0,
    explanation: 'Total journey = 120 km, required overall average = 80 km/h, so total allowed time = 120 ÷ 80 = 1.5 hours. Time for first 30 km at 60 km/h = 0.5 h. Time for next 60 km at 90 km/h = 60 ÷ 90 = 0.667 h. Time used so far = 1.167 h. Time remaining = 1.5 − 1.167 = 0.333 h (i.e., 1/3 hour). Remaining distance = 120 − 30 − 60 = 30 km. Required speed = 30 ÷ (1/3) = 90 km/h.',
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
    explanation: 'Combined rate = 1/10 + 1/15 − 1/12. Using a common denominator of 60: 6/60 + 4/60 − 5/60 = 5/60 = 1/12 of the tank per hour. Time to fill = 12 hours.',
    topic: 'Quantitative Reasoning'
  },
  {
    id: 13,
    text: `A company's profits increased by 10% in 2021 and then decreased by 15% in 2022. At the beginning of 2023, the profit was £444,125. What was the profit at the beginning of 2021?`,
    options: [
      '£467,500',
      '£475,000',
      '£450,000',
      '£525,000'
    ],
    answer: 1,
    explanation: 'Let P = profit at the start of 2021. After a 10% increase then a 15% decrease: P × 1.10 × 0.85 = 0.935P. Setting 0.935P = £444,125 gives P = £475,000.',
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
    explanation: 'Total distance to clear the tunnel = train length + tunnel length = 150 + 850 = 1,000 m. Speed = 90 km/h = 25 m/s. Time = 1,000 ÷ 25 = 40 seconds.',
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
    explanation: 'Daily dose = 25 mg/kg × 70 kg = 1,750 mg. Per dose (÷3) = 583.33 mg. Volume = (583.33 ÷ 100) × 5 ml = 29.17 ml.',
    topic: 'Quantitative Reasoning'
  }
];