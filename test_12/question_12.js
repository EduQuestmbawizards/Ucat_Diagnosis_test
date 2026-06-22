const PASSAGES = {};

const QUESTIONS = [
  {
    "id": 1,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The graph below shows the annual sales of Spiral Enterprises in different parts of the country.<br><br><img src='image/set_252.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Which region had the highest average sales for the 3 years shown?",
    "options": [
      "Northwest",
      "Southwest",
      "Southeast",
      "Midlands",
      "Wales"
    ],
    "answer": 3,
    "explanation": "To save time, avoid calculating the figures for all five regions by comparing data in the graph, using one  figure as a benchmark against which you can assess the regions quickly. In this instance, the region with  the highest average for all three years will be likely to have very high sales in all 3 years. Take 50,000 as  the benchmark: two regions (Southwest and Wales) never sold 50,000 in a single year, but two regions  (Southeast and Midlands) sold more than 50,000 in all three years. Thus, Southeast and Midlands are  likely to have the highest averages, so check their figures a bit more closely. In fact, the first and second  bars for Southeast are identical to the second and third bars for Midlands (55,000 and 60,000, respec- tively); the difference lies in the remaining bar, and the one for Midlands is higher than that for Southeast  (70,000, as compared to 60,000). Thus, Midlands must have the highest average for the 3 years; the answer  is therefore (D).",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 2,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The graph below shows the annual sales of Spiral Enterprises in different parts of the country.<br><br><img src='image/set_252.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Which region had the highest sales in 2014?",
    "options": [
      "Northwest",
      "Southeast",
      "Midlands",
      "Northwest and Midlands",
      "Southwest and Midlands"
    ],
    "answer": 0,
    "explanation": "The region with the highest sales for 2014 is simply the region with the tallest rightmost bar in its set of  3 bars. Of these, the tallest is clearly that for Northwest, so the answer is (A).\n\n\nScore Higher on the UKCAT 338",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 3,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The graph below shows the annual sales of Spiral Enterprises in different parts of the country.<br><br><img src='image/set_252.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Which region experienced the greatest growth percentage in sales from 2012 to 2014?",
    "options": [
      "Northwest",
      "Southwest",
      "Southeast",
      "Midlands",
      "Wales"
    ],
    "answer": 4,
    "explanation": "To calculate the percentage growth in sales, use the sales figure for 2012 as the original, and divide the  difference in sales from 2012 to 2014 by this original. When comparing percentages among all the answer  choices, be sure to make a note of them on the noteboard; it may be easier to keep the notation in fraction  form, as fractions can be faster to compare. Here are the notations for the percentages for the five regions,  noted as fractions: Northwest:  15 55 =  3 11 Southwest:  10 20  = 1 2 Southeast: Same sales total for 2012 and 2014, so no percentage growth. Midlands:  5 50 =  1 10 Wales:  15 25 = 3 5 Of the four regions that had percentage growth in sales from 2012 to 2014, Wales recorded the greatest  percentage growth (60%); the answer is therefore (E).",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 4,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The graph below shows the annual sales of Spiral Enterprises in different parts of the country.<br><br><img src='image/set_252.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>What were the total sales for all five regions in the year with the highest total sales?",
    "options": [
      "170,000",
      "215,000",
      "260,000",
      "270,000",
      "Can't tell"
    ],
    "answer": 2,
    "explanation": "The graph shows that four regions had their highest sales in 2014; the region that didn't (Midlands) had  its highest sales in 2010, when the sales for three of the regions were considerably lower-less than half  their regional totals for 2014. Thus, 2014 must be the year with the highest sales. The sales for 2014 are  70,000 + 30,000 + 60,000 + 60,000 + 40,000 = 260,000. The correct answer is (C).",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 5,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The diagram below shows the floor plan of a new suite of offices for a small company.<br><br><img src='image/set_253.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>The director's office is 108 square feet smaller than the conference room. What is the area of the conference  room, in square feet?",
    "options": [
      "306",
      "414",
      "684",
      "720",
      "874"
    ],
    "answer": 1,
    "explanation": "The combined area of the director's office and conference room (D + C) has dimensions of 40 ft × 18 ft,  so the combined area is 40 × 18 = 720 ft2 = D + C. The area of the director's office equals the area of the  conference room minus 108 square feet, or D = C - 108. Substitute this for the area of the director's office,  and solve for the area of the conference room: C + C - 108 = 720 ft2 2C - 108 = 720 ft2 2C = 828 ft2 C = 414 ft2 Thus, the area of the conference room is 414 ft2, and the answer is (B).",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 6,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The diagram below shows the floor plan of a new suite of offices for a small company.<br><br><img src='image/set_253.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>What is the total area of the reception/front office room?",
    "options": [
      "306 ft2",
      "484 ft2",
      "568 ft2",
      "874 ft2",
      "Can't tell"
    ],
    "answer": 3,
    "explanation": "Divide the conference room's area by its known dimension (18 ft), which represents the wall shared with  the director's office, to find its other dimension, representing the wall shared with the reception/front  office room: 414 ft2 ÷ 18 ft = 23 ft. The other dimension of the reception/front office room is the combined  length of both the conference room and the reception/front office room (56 ft) minus the length of the  conference room (18 ft): 56 ft - 18 ft = 38 ft. Multiply for the total area of the reception/front office room:  23 ft × 38 ft = 874 ft2. The correct answer is (D).",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 7,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The diagram below shows the floor plan of a new suite of offices for a small company.<br><br><img src='image/set_253.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>What are the dimensions of the reception area?",
    "options": [
      "17 ft × 18 ft",
      "15 ft × 20.4 ft",
      "19 ft × 30 ft",
      "20 ft × 24.2 ft",
      "Can't tell"
    ],
    "answer": 4,
    "explanation": "According to the bulleted info, the reception area is 35% of the combined reception/front office room, or  0.35 × 874 ft2 = 306 ft2. However, the same bulleted info states that the diagram of the offices is not to scale,  and thus it is impossible to approximate or otherwise calculate any of the dimensions of the reception  area, which is shaded in the diagram. Both answers (A) and (B) would have an area of 306 ft2, and there is  no way of determining whether one of these is correct, or whether the dimensions are a third option not  listed in the answers. For these reasons, the answer is (E).\n\n\nAppendix C  Chapter 8 Kaplan UKCAT Mock Test Explanations 339",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 8,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The diagram below shows the floor plan of a new suite of offices for a small company.<br><br><img src='image/set_253.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>What is the total cost of carpeting the entire suite of offices, except for the reception area?",
    "options": [
      "£3,851.42",
      "£4,766.06",
      "£5,732.05",
      "£7,093.30",
      "Can't tell"
    ],
    "answer": 0,
    "explanation": "First, calculate the total area to be carpeted. The combined area of the director's office and conference  room is 18 ft × 40 ft = 720 ft2. The area of the front office, not including the reception area, is 65% of  the combined reception/front office area: 0.65 × 874 ft2 = 568.1 ft2. Add these for the total area to be  carpeted: 720 ft2 + 568.1 ft2 = 1,288.1 ft2. Next, multiply by the cost of carpeting per sq ft for the total cost:  1,288.1 ft2 × £2.99/ft2 = £3,851.42. The answer is (A).",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 9,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Below is a table showing the exam scores for a group of friends.<br><br><img src='image/set_254.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Which of the six friends scored the highest in Science?",
    "options": [
      "Amanda",
      "David",
      "Derek",
      "Emily",
      "Joel"
    ],
    "answer": 4,
    "explanation": "A quick glance at the table reveals that Joel scored the highest in Science, with a result of 96 out of 100.  The correct answer is (E).",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 10,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Below is a table showing the exam scores for a group of friends.<br><br><img src='image/set_254.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Who scored the best across all subjects?",
    "options": [
      "Amanda",
      "Derek",
      "Emily",
      "Joel",
      "Zack"
    ],
    "answer": 2,
    "explanation": "On questions like this, try to answer by comparing the data in the table, rather than making any calcula- tions, which could be very time-consuming. The first step is to see if anyone scored the highest in more  than one subject. The only student who did so was Emily. She scored the highest mark in English, Maths  and French, and the second highest mark in Science. The only student who scored higher than her is  Joel, but his result in Maths is the lowest of all six friends, and he is in the bottom half in the results for  English. Thus, it is clear from looking at the data that Emily scored the best across all subjects, out of all  her friends. The answer is therefore (C).",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 11,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Below is a table showing the exam scores for a group of friends.<br><br><img src='image/set_254.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>David resits his English exam, and scores 36/60. What is the percentage rise in his English score?",
    "options": [
      "60%",
      "80%",
      "600%",
      "800%",
      "Can't tell"
    ],
    "answer": 3,
    "explanation": "Percentage change equals difference divided by original. The difference between David's old score and his  new score from his resit is 36 - 4 = 32; his old (original) score is 4. Plug these values into the formula and  divide to solve: 32 ÷ 4 = 8, or 800%, answer (D).",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 12,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Below is a table showing the exam scores for a group of friends.<br><br><img src='image/set_254.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>What is the mean score of all the Science marks of all six friends to the nearest integer?",
    "options": [
      "69/100",
      "75/100",
      "79/100",
      "84/100",
      "88/100"
    ],
    "answer": 1,
    "explanation": "To solve, add up the Science scores for all 6 friends and divide by 6, the number of friends. The sum of all  6 scores is 84 + 78 + 54 + 47 + 89 + 96 = 450. The mean score of the six friends is 450 ÷ 6 = 75. Answer  (B) is correct.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 13,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Below are the profits Equinox Holdings made from their different businesses across sectors including Retail, Leisure, Commercial and Industrial in the past three years.<br><br><img src='image/set_255.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>How much profit did businesses in the Retail sector make in 2014?",
    "options": [
      "£2,400,000",
      "£2,600,000",
      "£2,800,000",
      "£24,000,000",
      "£26,000,000"
    ],
    "answer": 1,
    "explanation": "The information needed to answer is found in the graph, which gives a figure of 2.6 for Retail in 2014.  The figures on the bars represent millions of pounds, so 2.6 equals a value of £2.6 million. Answer (B) is  correct.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 14,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Below are the profits Equinox Holdings made from their different businesses across sectors including Retail, Leisure, Commercial and Industrial in the past three years.<br><br><img src='image/set_255.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>How much profit did businesses in the Leisure sector make in 2015?",
    "options": [
      "£1,200,000",
      "£1,600,000",
      "£1,700,000",
      "£16,000,000",
      "£17,000,000"
    ],
    "answer": 2,
    "explanation": "Again, find the relevant information in the graph, which gives a figure of 1.7 for Leisure in 2015. This is  the equivalent of £1,700,000, so the correct answer is (C).",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 15,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Below are the profits Equinox Holdings made from their different businesses across sectors including Retail, Leisure, Commercial and Industrial in the past three years.<br><br><img src='image/set_255.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>The profits of the Commercial sector increased by what percentage from 2013 to 2014?",
    "options": [
      "20%",
      "25%",
      "30%",
      "33%",
      "37%"
    ],
    "answer": 3,
    "explanation": "The Commercial sector made £2.4 million in profit in 2013, which increased to £3.2 million in profit in  2014. The difference is £3,200,000 - £2,400,000 = £800,000. Use the percentage change formula (differ- ence ÷ original) to solve: 800,000 ÷ 2,400,000 = 0.333, or 33.3%. The answer is therefore (D).",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 16,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Below are the profits Equinox Holdings made from their different businesses across sectors including Retail, Leisure, Commercial and Industrial in the past three years.<br><br><img src='image/set_255.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>What was the total profit across all business sectors in 2014?",
    "options": [
      "£7.8 million",
      "£8.6 million",
      "£9.6 million",
      "£9.9 million",
      "£10.3 million"
    ],
    "answer": 2,
    "explanation": "To find the total 2014 profits of all the different business sectors, add up the relevant figures from the  graph: 1.6 + 2.6 + 3.2 + 2.2 = 9.6 million. The correct answer is (C).",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 17,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>A medical school surveyed its 336 first-year students, and asked them to pick their favourite module from the year. All students selected one option only, as illustrated in the table.<br><br><img src='image/set_256.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>According to the survey, what is the most preferred module?",
    "options": [
      "Cellular Biology",
      "Genetics",
      "Immunology",
      "Patient Safety",
      "Pharmacology"
    ],
    "answer": 4,
    "explanation": "The information in the table and just below it reveals that the module that most students picked as their  favourite is pharmacology, which is therefore the most preferred subject based on the survey. The correct  answer is (E).",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 18,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>A medical school surveyed its 336 first-year students, and asked them to pick their favourite module from the year. All students selected one option only, as illustrated in the table.<br><br><img src='image/set_256.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>What proportion of students chose one of the three most popular modules as their favourite? A\t 1:4",
    "options": [
      "3:7",
      "4:9",
      "9:14",
      "11:17"
    ],
    "answer": 3,
    "explanation": "The three most popular modules are pharmacology, genetics and immunology. Add these up for the first  figure for the proportion: 81 + 68 + 67 = 216. The information above the table indicates that 336 students  completed the survey. Therefore, the proportion of students who picked the three most popular modules  is simply 216:336. This simplifies to 9:14, answer (D).\n\n\nScore Higher on the UKCAT 340",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 19,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>A medical school surveyed its 336 first-year students, and asked them to pick their favourite module from the year. All students selected one option only, as illustrated in the table.<br><br><img src='image/set_256.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>What percentage of students chose Physiology as their favourite module?",
    "options": [
      "1%",
      "2%",
      "5%",
      "6%",
      "7%"
    ],
    "answer": 0,
    "explanation": "The bulleted information below the table indicates that two students preferred physiology. Since 336  students took part in the survey, the percentage of students who preferred physiology as a module is  2 ÷ 336 = 0.00595, or 0.595%. This rounds up to 1%, so answer (A) is correct.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 20,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>A medical school surveyed its 336 first-year students, and asked them to pick their favourite module from the year. All students selected one option only, as illustrated in the table.<br><br><img src='image/set_256.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Which module was selected as the favourite by the fewest students?",
    "options": [
      "Ethics",
      "Pathology",
      "Patient Safety",
      "Physiology",
      "Can't tell"
    ],
    "answer": 4,
    "explanation": "The bulleted information below the table explains that five modules not listed were chosen as favourite  by a single student. Thus, five modules were each selected by the fewest students, but the names of these  modules are not given in the data. For this reason, the answer is (E).",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 21,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Whilst holidaying in Majorca, Christos and Vasilis enjoy spending time on the water, riding in a motorboat and on jet skis with a top speed of 60 miles per hour.<br><br><strong>Question:</strong><br>Christos rides a jet ski for 1 hour, 12 minutes, at an average speed of 45 miles per hour. How far does  Christos travel on his jet ski?",
    "options": [
      "48 miles",
      "50 miles",
      "52 miles",
      "54 miles",
      "56 miles"
    ],
    "answer": 3,
    "explanation": "The question provides Christos's speed (45 mph) and time (1 hour, 12 minutes), and asks you to find  Christos's distance, so use the speed formula: Distance = Speed × Time. Since the speed is in mph, convert  the time into hours: 1 hour, 12 minutes = 72 minutes = 72/60 hours = 1.2 hours. Use this figure to calculate  his distance: Distance = 45 mph × 1.2 hours = 54 miles. Answer (D) is correct.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 22,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Whilst holidaying in Majorca, Christos and Vasilis enjoy spending time on the water, riding in a motorboat and on jet skis with a top speed of 60 miles per hour.<br><br><strong>Question:</strong><br>Vasilis starts out on his jet ski at the same time as Christos, but Vasilis travels 16 miles further than Chris- tos, in a total time of 75 minutes. What is Vasilis's average speed, in miles per hour?",
    "options": [
      "46",
      "47",
      "56",
      "57",
      "58"
    ],
    "answer": 2,
    "explanation": "Use the speed formula to solve for Vasilis's speed: Speed = Distance ÷ Time. The distance is 16 miles more  than Christos's, or 54 + 16 = 70 miles. The time is 75 minutes = 75/60 = 1.25 hours. Calculate using the  speed formula: Speed = 70 miles ÷ 1.25 hours = 56 mph. The answer is (C).",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 23,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Whilst holidaying in Majorca, Christos and Vasilis enjoy spending time on the water, riding in a motorboat and on jet skis with a top speed of 60 miles per hour.<br><br><strong>Question:</strong><br>How many minutes will it take Christos to catch up to Vasilis, if he travels at top speed?",
    "options": [
      "16",
      "21",
      "25",
      "26",
      "Can't tell"
    ],
    "answer": 0,
    "explanation": "The previous question indicates that Vasilis travels 16 miles further than Christos. This question does not  mention the top speed of the jet skis, but this speed is given in the information above the set as 60 mph.  Since Christos would travel a mile a minute at top speed, he would need 16 minutes to travel the 16 miles  needed to catch up to Vasilis. The answer is therefore (A).",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 24,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Whilst holidaying in Majorca, Christos and Vasilis enjoy spending time on the water, riding in a motorboat and on jet skis with a top speed of 60 miles per hour.<br><br><strong>Question:</strong><br>The next day, Vasilis covers the same distance at a more leisurely pace, completing his jet ski ride in 2 hours.  By what percentage has his journey time increased?",
    "options": [
      "40%",
      "60%",
      "64%",
      "67%",
      "167%"
    ],
    "answer": 1,
    "explanation": "This question requires the percentage change formula: Percentage Change = Difference ÷ Original. The  original time is 75 minutes, and the new time is 2 hours, or 120 minutes. The difference is therefore  120 - 75 = 45 minutes. Divide to find the percentage change: 45 ÷ 75 = 0.6, or 60%. The correct answer  is (B).",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 25,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Mr Johnston has a circular area in his garden that he wishes to renovate. The radius of this area is 5 metres. He has two options for the ground work in the garden and the cost of purchasing the materials for these is listed in the table below.<br><br><img src='image/set_258.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>If Mr Johnston uses lawn turf on the entire circular garden, how much will the materials cost?",
    "options": [
      "£78.50",
      "£95.50",
      "£157.00",
      "£314.00",
      "£412.50"
    ],
    "answer": 2,
    "explanation": "To find the cost of lawn turf for the entire circular garden, find the area of the garden and then multiply  by the cost of lawn turf. The garden is a circle, so use the equation A = πr2. The radius is 5 metres, so  A = π(5)2 = 3.14 × 25 = 78.5 m2. Lawn turf costs £2 per m2, so multiply to find the cost of lawn turf for the  circular garden: 78.5 m2 × £2/m2 = £157. The correct answer is (C).",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 26,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Mr Johnston has a circular area in his garden that he wishes to renovate. The radius of this area is 5 metres. He has two options for the ground work in the garden and the cost of purchasing the materials for these is listed in the table below.<br><br><img src='image/set_258.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>If Mr Johnston uses paving slabs on the entire circular garden, how much will the materials cost?",
    "options": [
      "£235.50",
      "£471.00",
      "£612.00",
      "£720.50",
      "£760.00"
    ],
    "answer": 1,
    "explanation": "This question requires the same approach as the previous one, so simply multiply the area of the cir- cular garden by the cost of paving slabs, which is £6 per m2: 78.5 m2 × £6/m2 = £471. The answer is  therefore (B).",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 27,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Mr Johnston has a circular area in his garden that he wishes to renovate. The radius of this area is 5 metres. He has two options for the ground work in the garden and the cost of purchasing the materials for these is listed in the table below.<br><br><img src='image/set_258.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Mr Johnston has a budget of £750 for the renovation project. If he uses paving slabs across the entire gar- den, how much money will he have left in his budget after considering material and labour costs?",
    "options": [
      "£14.00",
      "£43.50",
      "£122.00",
      "£174.50",
      "£279.00"
    ],
    "answer": 2,
    "explanation": "Work on the previous questions gave the area of the circular garden (78.5 m2) and the cost of paving slabs  for the garden (£471). The labour cost for installing paving slabs is £2 per m2, which is the same as the  charge for lawn turf, so the labour cost is the same as the answer to the first question: £157. Subtract the  cost of the paving slabs and the labour from the budget figure of £750 to find how much Mr Johnston will  have left over: £750 - £471 - £157 = £122. The answer is (C).",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 28,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Mr Johnston has a circular area in his garden that he wishes to renovate. The radius of this area is 5 metres. He has two options for the ground work in the garden and the cost of purchasing the materials for these is listed in the table below.<br><br><img src='image/set_258.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Mr Johnston decides to put a new circular garden fountain with a diameter of 2 m in the middle of the  garden. What is the area of the garden that is not covered by the new fountain?",
    "options": [
      "56.2 m",
      "65.9 m",
      "67.2 m",
      "68.4 m",
      "75.4 m"
    ],
    "answer": 4,
    "explanation": "To solve, subtract the area of the fountain from the area of the entire garden (78.5 m2). The fountain  has a diameter of 2 m, which means it has a radius of 1 m. Use the area formula to solve for the foun- tain's area: A = π(1)2 = 3.14 × 1 = 3.14 m2. Subtract the area of the fountain from the area of the entire  garden to find the area that is not covered by the fountain: 78.5 m2 - 3.14 m2 = 75.36 m2. The correct  answer is (E).\n\n\nAppendix C  Chapter 8 Kaplan UKCAT Mock Test Explanations 341",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 29,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The trend in gold and silver prices per ounce in a recent decade is shown below. Gold and silver are both traded in US dollars.<br><br><img src='image/set_259.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Approximately what was the price of gold in dollars per ounce in 2007?",
    "options": [
      "550",
      "590",
      "610",
      "850",
      "890"
    ],
    "answer": 2,
    "explanation": "The price of gold in dollars per ounce is indicated by the dashed line and the figures on the Y-axis on the  left side of the graph. The price of gold in 2007 is just above the line for $600 per ounce, which is equivalent  to a value of $610 per ounce. The correct answer is (C).",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 30,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The trend in gold and silver prices per ounce in a recent decade is shown below. Gold and silver are both traded in US dollars.<br><br><img src='image/set_259.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Which year recorded the greatest difference between gold and silver, in price per ounce?",
    "options": [
      "2002",
      "2003",
      "2006",
      "2008",
      "2010"
    ],
    "answer": 4,
    "explanation": "The scale of the labels for gold and silver prices make this question a lot more straightforward than it  might initially seem. Since the labels for the price of gold increase by $100 for each line, those for silver  increase by only $2 for each dash, and both start at $0 at the bottom of the graph, the year with the  greatest difference in price per ounce between gold and silver will simply be the year with the greatest  price per ounce for gold. In 2010, gold was approximately $1150 per ounce-a few hundred dollars above  its price per ounce in the next highest year, and well above the price of silver in any year. The answer is  therefore (E).",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 31,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The trend in gold and silver prices per ounce in a recent decade is shown below. Gold and silver are both traded in US dollars.<br><br><img src='image/set_259.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>By what percentage did silver increase in price per ounce from 2000 to 2010?",
    "options": [
      "183%",
      "240%",
      "260%",
      "325%",
      "350%"
    ],
    "answer": 1,
    "explanation": "To find the percentage increase in the price of silver per ounce, use the percentage change formula: Per- centage Change = Difference ÷ Original. The price of silver was approximately $5 per ounce in 2000 and  $17 per ounce in 2010, for a difference of $12. Calculate the percentage change: 12 ÷ 5 = 2.4, or 240%.  Answer (B) is correct.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 32,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The trend in gold and silver prices per ounce in a recent decade is shown below. Gold and silver are both traded in US dollars.<br><br><img src='image/set_259.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>At 2010 prices, how many ounces of silver could you buy for the value of 100 ounces of gold?",
    "options": [
      "104",
      "620",
      "6,197",
      "6,765",
      "7,500"
    ],
    "answer": 3,
    "explanation": "Gold was $1150 per ounce in 2010, so 100 ounces of gold would have a value of 100 × $1150 = $115,000.  Silver was $17 per ounce in 2010, so divide to find the ounces of silver you could buy with this value:  $115,000 ÷ $17 per ounce = 6,765 ounces, answer (D).",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 33,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>A distant cousin living in the USA has shared a recipe for an Amish friendship cake. To make the cake, you must ‘grow’ the starter for 10 days, adding ingredients on the 5th and 10th days. The starter must be left at room temperature (not refrigerated), covered with a tea towel, for 10 days. Normally, you would receive a portion of starter from a friend, but you can also make your own initial starter.<br><br>To make the initial starter: Combine 1 cup flour, 1 cup sugar and 1 cup milk.<br><br>To grow your starter:<br>Day 1: Stir.<br>Day 2: Stir.<br>Day 3: Stir.<br>Day 4: Stir.<br>Day 5: Add 1 cup flour, 1 cup sugar, 1 cup milk. Stir.<br>Day 6: Stir.<br>Day 7: Stir.<br>Day 8: Stir.<br>Day 9: Stir.<br>Day 10: Add 1 cup flour, 1 cup sugar, 1 cup milk. Stir. Then, divide into 4 equal portions. Use one portion to bake a cake; give the other three to friends.<br><br>Alternately, you might give two portions to friends, use one portion to bake a cake and use the fourth portion to begin the cycle again.<br><br>To bake a cake (Day 10):<br>1 portion of starter (approximately 1 cup)<br>2 cups chopped pecans or walnuts<br>3½ cups flour<br>2 cups sugar<br>3 eggs, beaten<br>1 cup cooking oil<br>1 teaspoon baking soda<br>dash of salt<br>dash of cinnamon<br>dash of vanilla<br><br>1. Preheat oven to 325°F.<br>2. Mix eggs, sugar and oil; then, add the starter.<br>3. Stir in half of the flour, followed by salt, baking soda, cinnamon and vanilla. Stir well.<br>4. Add nuts and the rest of the flour. Mix well. Dough will be stiff.<br>5. Bake in a greased cake pan at 325°F for 90 minutes.<br><br>325°F = 170°C = Gas Mark 3.<br>1 cup = 240 ml = 240 g<br>1 teaspoon = 4.9 ml<br><br><strong>Question:</strong><br>If I make the initial starter and complete the cycle 3 times, baking one cake with each cycle and giving the  extra portions to friends, how much sugar will I have used?",
    "options": [
      "1.44 kg",
      "1.68 kg",
      "2.16 kg",
      "2.88 kg",
      "3.12 kg"
    ],
    "answer": 4,
    "explanation": "The initial starter requires 1 cup of sugar. In growing the starter, you add 1 cup of sugar on Day 5 and  again on Day 10, for a total of 2 cups of sugar in each cycle. The cake requires a further 2 cups of sugar.  Thus, each cycle of growing the starter and baking a cake uses 4 cups of sugar. If you complete the cycle  and bake a cake 3 times, then you would use 4 × 3 = 12 cups of sugar, plus the cup from the initial starter,  for 13 cups total. Multiply to convert to grams: 13 × 240 = 3,120 g, or 3.12 kg. Answer (E) is correct.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 34,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>In 2011, a total of 39.7 billion text messages were sent over mobile phone networks in the UK. However, this number had fallen to 21 billion by 2014, due to the rise in popularity of data-based messaging apps, which allow users to send texts via wifi or their data plans instead of the phone network, thereby avoiding the charges levied on text messages by mobile companies. A total of 50 billion messages were sent on these data-based apps in the UK in 2014; this figure is predicted to rise in future years, whilst the amount of text messages sent through the phone network will continue to drop.<br><br><strong>Question:</strong><br>The total amount of text messages sent over mobile phone networks in the UK dropped by what percent- age from 2011 to 2014?",
    "options": [
      "42.0%",
      "47.1%",
      "52.9%",
      "79.4%",
      "89.0% A pig farmer weighs her prize pigs (in kg) once a month throughout the spring and summer. Pig Sex March April May June July August Anastasia F 67.9 68.5 70.2 71.6 73.4 74.7 Horatio M 46.1 49.5 53.3 56.0 59.8 62.4 Otto M 25.4 27.3 28.9 31.2 34.5 36.8 Queenie F 53.3 53.7 53.9 54.6 55.3 59.1 Sebastian M 38.1 42.9 44.6 48.3 51.8 54.5"
    ],
    "answer": 1,
    "explanation": "A total of 39.7 billion text messages were sent over mobile phone networks in the UK in 2011, yet only  21 billion such messages were sent in 2014, for a difference of 39.7 billion - 21 billion = 18.7 billion text  messages. To solve for percentage decrease, divide the difference by the original: 18.7 billion ÷ 39.7 billion =  0.471, or 47.1%. The answer is (B).",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 35,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>A pig farmer weighs her prize pigs (in kg) once a month throughout the spring and summer.<br><br><table class='test-table' style='width:100%; border-collapse: collapse; margin: 10px 0;'><thead><tr style='background:rgba(124,58,237,0.15);'><th style='border:1px solid rgba(124,58,237,0.3); padding:8px 14px;'>Pig</th><th style='border:1px solid rgba(124,58,237,0.3); padding:8px 14px;'>Sex</th><th style='border:1px solid rgba(124,58,237,0.3); padding:8px 14px;'>March</th><th style='border:1px solid rgba(124,58,237,0.3); padding:8px 14px;'>April</th><th style='border:1px solid rgba(124,58,237,0.3); padding:8px 14px;'>May</th><th style='border:1px solid rgba(124,58,237,0.3); padding:8px 14px;'>June</th><th style='border:1px solid rgba(124,58,237,0.3); padding:8px 14px;'>July</th><th style='border:1px solid rgba(124,58,237,0.3); padding:8px 14px;'>August</th></tr></thead><tbody><tr><td style='border:1px solid rgba(124,58,237,0.2); padding:6px 14px; text-align:center;'>Anastasia</td><td style='border:1px solid rgba(124,58,237,0.2); padding:6px 14px; text-align:center;'>F</td><td style='border:1px solid rgba(124,58,237,0.2); padding:6px 14px; text-align:center;'>67.9</td><td style='border:1px solid rgba(124,58,237,0.2); padding:6px 14px; text-align:center;'>68.5</td><td style='border:1px solid rgba(124,58,237,0.2); padding:6px 14px; text-align:center;'>70.2</td><td style='border:1px solid rgba(124,58,237,0.2); padding:6px 14px; text-align:center;'>71.6</td><td style='border:1px solid rgba(124,58,237,0.2); padding:6px 14px; text-align:center;'>73.4</td><td style='border:1px solid rgba(124,58,237,0.2); padding:6px 14px; text-align:center;'>74.7</td></tr><tr><td style='border:1px solid rgba(124,58,237,0.2); padding:6px 14px; text-align:center;'>Horatio</td><td style='border:1px solid rgba(124,58,237,0.2); padding:6px 14px; text-align:center;'>M</td><td style='border:1px solid rgba(124,58,237,0.2); padding:6px 14px; text-align:center;'>46.1</td><td style='border:1px solid rgba(124,58,237,0.2); padding:6px 14px; text-align:center;'>49.5</td><td style='border:1px solid rgba(124,58,237,0.2); padding:6px 14px; text-align:center;'>53.3</td><td style='border:1px solid rgba(124,58,237,0.2); padding:6px 14px; text-align:center;'>56.0</td><td style='border:1px solid rgba(124,58,237,0.2); padding:6px 14px; text-align:center;'>59.8</td><td style='border:1px solid rgba(124,58,237,0.2); padding:6px 14px; text-align:center;'>62.4</td></tr><tr><td style='border:1px solid rgba(124,58,237,0.2); padding:6px 14px; text-align:center;'>Otto</td><td style='border:1px solid rgba(124,58,237,0.2); padding:6px 14px; text-align:center;'>M</td><td style='border:1px solid rgba(124,58,237,0.2); padding:6px 14px; text-align:center;'>25.4</td><td style='border:1px solid rgba(124,58,237,0.2); padding:6px 14px; text-align:center;'>27.3</td><td style='border:1px solid rgba(124,58,237,0.2); padding:6px 14px; text-align:center;'>28.9</td><td style='border:1px solid rgba(124,58,237,0.2); padding:6px 14px; text-align:center;'>31.2</td><td style='border:1px solid rgba(124,58,237,0.2); padding:6px 14px; text-align:center;'>34.5</td><td style='border:1px solid rgba(124,58,237,0.2); padding:6px 14px; text-align:center;'>36.8</td></tr><tr><td style='border:1px solid rgba(124,58,237,0.2); padding:6px 14px; text-align:center;'>Queenie</td><td style='border:1px solid rgba(124,58,237,0.2); padding:6px 14px; text-align:center;'>F</td><td style='border:1px solid rgba(124,58,237,0.2); padding:6px 14px; text-align:center;'>53.3</td><td style='border:1px solid rgba(124,58,237,0.2); padding:6px 14px; text-align:center;'>53.7</td><td style='border:1px solid rgba(124,58,237,0.2); padding:6px 14px; text-align:center;'>53.9</td><td style='border:1px solid rgba(124,58,237,0.2); padding:6px 14px; text-align:center;'>54.6</td><td style='border:1px solid rgba(124,58,237,0.2); padding:6px 14px; text-align:center;'>55.3</td><td style='border:1px solid rgba(124,58,237,0.2); padding:6px 14px; text-align:center;'>59.1</td></tr><tr><td style='border:1px solid rgba(124,58,237,0.2); padding:6px 14px; text-align:center;'>Sebastian</td><td style='border:1px solid rgba(124,58,237,0.2); padding:6px 14px; text-align:center;'>M</td><td style='border:1px solid rgba(124,58,237,0.2); padding:6px 14px; text-align:center;'>38.1</td><td style='border:1px solid rgba(124,58,237,0.2); padding:6px 14px; text-align:center;'>42.9</td><td style='border:1px solid rgba(124,58,237,0.2); padding:6px 14px; text-align:center;'>44.6</td><td style='border:1px solid rgba(124,58,237,0.2); padding:6px 14px; text-align:center;'>48.3</td><td style='border:1px solid rgba(124,58,237,0.2); padding:6px 14px; text-align:center;'>51.8</td><td style='border:1px solid rgba(124,58,237,0.2); padding:6px 14px; text-align:center;'>54.5</td></tr></tbody></table><br><br><strong>Question:</strong><br>The average weight of the male pigs has increased by how much from March to August?",
    "options": [
      "10.4%",
      "24.6%",
      "38.7%",
      "40.2%",
      "43.0%"
    ],
    "answer": 3,
    "explanation": "The male pigs - Horatio, Otto and Sebastian - have a total weight of 46.1 + 25.4 + 38.1 = 109.6 kg in  March, and a total weight of 62.4 + 36.8 + 54.5 = 153.7 kg in August. This results in an average weight of  109.6 ÷ 3 = 36.53 kg in March, and an average weight of 153.7 ÷ 3 = 51.23 kg in August. The difference  in the average weights is 51.23 - 36.53 = 14.7 kg; divide this difference by the original figure (the average  weight in March) to determine the percentage change: 14.7 ÷ 36.53 = 0.4024, or 40.2%. The answer is (D).",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 36,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>In ten-pin bowling, each player tries to knock down as many pins as possible on each turn, known as a frame. Each frame normally consists of one or two rolls. If a player knocks down all ten pins in the first roll in the frame, it’s called a strike (scored with an X). If a player knocks down all ten pins by the second roll in the frame, it’s called a spare (the first roll is scored with the number of pins knocked down on that roll; the second roll is scored with a /). When a player scores a strike, the number of pins knocked down in the next two rolls is added to the frame in which they scored the strike. Thus, if a player rolls a strike, followed by a 5 and a 3 in the next frame, they score 18 in the frame with the strike, plus 8 in the following frame. When a player scores a spare, the number of pins knocked down in the next roll is added to the frame in which they scored the spare. Thus, if a player rolls a spare, followed by a 5 and a 3 in the next frame, they score 15 in the frame with the spare, plus 8 in the following frame. If a player rolls a strike in the 10th frame, they get two bonus rolls, to allow for extra points. Thus, a perfect game of ten-pin bowling would result in 12 strikes, with an overall score of 300. If a player rolls a spare in the 10th frame, they get one bonus roll, to allow for extra points.<br><br><strong>Question:</strong><br>What is the overall score of a player who scored strikes up until and including the 9th frame, followed by  a 7, a 3, and a strike on the bonus roll in the 10th frame?",
    "options": [
      "273",
      "277",
      "280",
      "283",
      "287\n\nMARKED FOR REVIEW. YOU MAY GO BACK TO QUESTIONS IN THIS SECTION ONLY."
    ],
    "answer": 1,
    "explanation": "In the example of a perfect game, scoring 300, the bowler would have earned 30 points in the 10th frame  - 10 with the initial strike, and 10 more with each of the 2 strikes on the bonus rolls. In this question, the  bowler scores 7, 3, 10 in the 10th frame, instead of 10, 10, 10. This is a difference of 30 - 20 = 10, so sub- tract 10 points from the overall score, to remove the 10th frame score: 300 - 10 = 290. However, a strike  means that you add the score from the following 2 rolls to the frame with the strike. The score in the 8th  frame includes the strike from the 9th frame and the first roll in the 10th frame; instead of 10, it should  only be 7, so subtract 3: 290 - 3 = 287. Similarly, the 9th frame score includes the first two strikes from the  10th frame, in the score for a perfect game; instead of 10, 10, the bowler in this question has 7, 3 - a net  difference of 10 points (20 - 10 = 10). Subtract a further 10: 287 - 10 = 277. Answer (B) is correct.",
    "topic": "Quantitative Reasoning"
  }
];
