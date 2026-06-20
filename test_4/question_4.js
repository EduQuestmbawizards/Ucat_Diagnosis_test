const PASSAGES = {};

const QUESTIONS = [
  {
    "id": 1,
    "passageId": null,
    "text": "The following table shows the distribution of birthdays in a class of 30 students:\n\n<table style='border-collapse:collapse;margin:12px 0;width:100%;max-width:340px;'><tr style='background:rgba(124,58,237,0.15);'><th style='border:1px solid rgba(124,58,237,0.3);padding:8px 14px;text-align:left;'>Month</th><th style='border:1px solid rgba(124,58,237,0.3);padding:8px 14px;text-align:center;'>Frequency</th></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;'>January</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;text-align:center;'>3</td></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;'>February</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;text-align:center;'>5</td></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;'>March</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;text-align:center;'>3</td></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;'>April</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;text-align:center;'>3</td></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;'>May</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;text-align:center;'>2</td></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;'>June</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;text-align:center;'>2</td></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;'>July</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;text-align:center;'>4</td></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;'>August</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;text-align:center;'>0</td></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;'>September</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;text-align:center;'>2</td></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;'>October</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;text-align:center;'>1</td></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;'>November</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;text-align:center;'>3</td></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;'>December</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;text-align:center;'>2</td></tr></table>\n\nWhat percentage of students are born in the second half of the year?",
    "options": [
      "50%",
      "33.3%",
      "40%",
      "23%",
      "38%"
    ],
    "answer": 2,
    "explanation": "Adding up all of the values from July to December will give you 12. 12 / 30 = 0.4 → 40%",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 2,
    "passageId": null,
    "text": "The following table shows the distribution of birthdays in a class of 30 students:\n\n<table style='border-collapse:collapse;margin:12px 0;width:100%;max-width:340px;'><tr style='background:rgba(124,58,237,0.15);'><th style='border:1px solid rgba(124,58,237,0.3);padding:8px 14px;text-align:left;'>Month</th><th style='border:1px solid rgba(124,58,237,0.3);padding:8px 14px;text-align:center;'>Frequency</th></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;'>January</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;text-align:center;'>3</td></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;'>February</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;text-align:center;'>5</td></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;'>March</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;text-align:center;'>3</td></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;'>April</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;text-align:center;'>3</td></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;'>May</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;text-align:center;'>2</td></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;'>June</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;text-align:center;'>2</td></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;'>July</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;text-align:center;'>4</td></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;'>August</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;text-align:center;'>0</td></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;'>September</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;text-align:center;'>2</td></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;'>October</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;text-align:center;'>1</td></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;'>November</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;text-align:center;'>3</td></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;'>December</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;text-align:center;'>2</td></tr></table>\n\nWhat is the ratio of students born in July to December to students born in January to June?",
    "options": [
      "2:3",
      "5:2",
      "4.2:1",
      "3:2",
      "5:3"
    ],
    "answer": 0,
    "explanation": "Make sure you read the question carefully – it is asking for the ratio of July-December : January-June, not the other way round. 12:18 can be simplified into 2:3 by the division of 6 on both sides.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 3,
    "passageId": null,
    "text": "The following table shows the distribution of birthdays in a class of 30 students:\n\n<table style='border-collapse:collapse;margin:12px 0;width:100%;max-width:340px;'><tr style='background:rgba(124,58,237,0.15);'><th style='border:1px solid rgba(124,58,237,0.3);padding:8px 14px;text-align:left;'>Month</th><th style='border:1px solid rgba(124,58,237,0.3);padding:8px 14px;text-align:center;'>Frequency</th></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;'>January</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;text-align:center;'>3</td></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;'>February</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;text-align:center;'>5</td></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;'>March</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;text-align:center;'>3</td></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;'>April</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;text-align:center;'>3</td></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;'>May</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;text-align:center;'>2</td></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;'>June</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;text-align:center;'>2</td></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;'>July</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;text-align:center;'>4</td></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;'>August</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;text-align:center;'>0</td></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;'>September</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;text-align:center;'>2</td></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;'>October</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;text-align:center;'>1</td></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;'>November</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;text-align:center;'>3</td></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;'>December</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;text-align:center;'>2</td></tr></table>\n\nWhat is the probability of the birthdays of two randomly selected students being in May?",
    "options": [
      "0.00230",
      "0.00444",
      "0.00228",
      "0.00460",
      "0.00273"
    ],
    "answer": 0,
    "explanation": "This question can easily catch you out. In order to find the probability of one person in the class having a birthday in May, you would use 2/30 as the probability. However, once this person is selected, the number of remaining students is 29, and the number of remaining students born in May is 1. Therefore, the second value you need is 1/29. (2/30) × (1/29) will give you the correct answer of 0.00230.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 4,
    "passageId": null,
    "text": "The following table shows the distribution of birthdays in a class of 30 students:\n\n<table style='border-collapse:collapse;margin:12px 0;width:100%;max-width:340px;'><tr style='background:rgba(124,58,237,0.15);'><th style='border:1px solid rgba(124,58,237,0.3);padding:8px 14px;text-align:left;'>Month</th><th style='border:1px solid rgba(124,58,237,0.3);padding:8px 14px;text-align:center;'>Frequency</th></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;'>January</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;text-align:center;'>3</td></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;'>February</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;text-align:center;'>5</td></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;'>March</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;text-align:center;'>3</td></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;'>April</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;text-align:center;'>3</td></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;'>May</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;text-align:center;'>2</td></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;'>June</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;text-align:center;'>2</td></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;'>July</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;text-align:center;'>4</td></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;'>August</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;text-align:center;'>0</td></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;'>September</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;text-align:center;'>2</td></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;'>October</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;text-align:center;'>1</td></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;'>November</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;text-align:center;'>3</td></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;'>December</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;text-align:center;'>2</td></tr></table>\n\nWhich combination of months accounts for 40% of all birthdays in the class?",
    "options": [
      "January, February, March, May",
      "January, February, July",
      "February, July, September",
      "February, October, November, December",
      "February, July, October, November"
    ],
    "answer": 1,
    "explanation": "From the first question, we already know that 12 students make up 40% of the class. Therefore, we need to try the given combinations until one adds up to 12. January (3) + February (5) + July (4) = 12, which is option B.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 5,
    "passageId": null,
    "text": "A car hire company offers a number of different types of vehicles. Insurance and hire cost are always charged at an hourly rate, while the deposit is refundable given there is no damage to the car when returned.\n\n<table style='border-collapse:collapse;margin:12px 0;width:100%;'><tr style='background:rgba(124,58,237,0.15);'><th style='border:1px solid rgba(124,58,237,0.3);padding:8px 12px;text-align:left;'>Type of Vehicle</th><th style='border:1px solid rgba(124,58,237,0.3);padding:8px 12px;text-align:center;'>Deposit</th><th style='border:1px solid rgba(124,58,237,0.3);padding:8px 12px;text-align:center;'>Insurance (per hour)</th><th style='border:1px solid rgba(124,58,237,0.3);padding:8px 12px;text-align:center;'>Hire Cost (per hour)</th></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;'>Standard</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>£50</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>£5</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>£8.50</td></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;'>Small SUV</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>£72.50</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>£8.20</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>£13.50</td></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;'>4x4</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>£80</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>£11.15</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>£16.35</td></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;'>Luxury</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>£125</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>£17.50</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>£22.65</td></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;'>Sport</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>£115</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>£17.50</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>£20.65</td></tr></table>\n\nTom hires a vehicle for 5 hours and returns it with no damage. His total bill is £67.50. Which type of vehicle did he rent?",
    "options": [
      "Standard",
      "Small SUV",
      "4x4",
      "Luxury",
      "Sport"
    ],
    "answer": 0,
    "explanation": "The most important thing is to read the question carefully. The insurance needs to be added up hourly like the hourly rate, but the deposit is returned when the car is returned without any damage. You can add the insurance and the hourly rate together to get a \"total\" hourly rate of £13.50, and 13.5 × 5 = £67.50.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 6,
    "passageId": null,
    "text": "A car hire company offers a number of different types of vehicles. Insurance and hire cost are always charged at an hourly rate, while the deposit is refundable given there is no damage to the car when returned.\n\n<table style='border-collapse:collapse;margin:12px 0;width:100%;'><tr style='background:rgba(124,58,237,0.15);'><th style='border:1px solid rgba(124,58,237,0.3);padding:8px 12px;text-align:left;'>Type of Vehicle</th><th style='border:1px solid rgba(124,58,237,0.3);padding:8px 12px;text-align:center;'>Deposit</th><th style='border:1px solid rgba(124,58,237,0.3);padding:8px 12px;text-align:center;'>Insurance (per hour)</th><th style='border:1px solid rgba(124,58,237,0.3);padding:8px 12px;text-align:center;'>Hire Cost (per hour)</th></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;'>Standard</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>£50</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>£5</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>£8.50</td></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;'>Small SUV</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>£72.50</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>£8.20</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>£13.50</td></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;'>4x4</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>£80</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>£11.15</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>£16.35</td></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;'>Luxury</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>£125</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>£17.50</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>£22.65</td></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;'>Sport</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>£115</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>£17.50</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>£20.65</td></tr></table>\n\nAssuming there is no damage, how much more expensive would it be to rent a luxury vehicle for 4 hours than a 4x4, given as a percentage?",
    "options": [
      "42.5%",
      "146%",
      "142.5%",
      "46%",
      "4.6%"
    ],
    "answer": 3,
    "explanation": "By working out the total cost of hiring the two vehicles, you would then divide the value of the luxury car by the value of the 4x4. Luxury: (17.50 + 22.65) × 4 = £160.60. 4x4: (11.15 + 16.35) × 4 = £110.00. 160.60 / 110.00 = 1.46 → 46% increase.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 7,
    "passageId": null,
    "text": "A car hire company offers a number of different types of vehicles. Insurance and hire cost are always charged at an hourly rate, while the deposit is refundable given there is no damage to the car when returned.\n\n<table style='border-collapse:collapse;margin:12px 0;width:100%;'><tr style='background:rgba(124,58,237,0.15);'><th style='border:1px solid rgba(124,58,237,0.3);padding:8px 12px;text-align:left;'>Type of Vehicle</th><th style='border:1px solid rgba(124,58,237,0.3);padding:8px 12px;text-align:center;'>Deposit</th><th style='border:1px solid rgba(124,58,237,0.3);padding:8px 12px;text-align:center;'>Insurance (per hour)</th><th style='border:1px solid rgba(124,58,237,0.3);padding:8px 12px;text-align:center;'>Hire Cost (per hour)</th></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;'>Standard</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>£50</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>£5</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>£8.50</td></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;'>Small SUV</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>£72.50</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>£8.20</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>£13.50</td></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;'>4x4</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>£80</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>£11.15</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>£16.35</td></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;'>Luxury</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>£125</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>£17.50</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>£22.65</td></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;'>Sport</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>£115</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>£17.50</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>£20.65</td></tr></table>\n\nTom comes back to hire another vehicle the next day. He hires it for 4 hours, and his final bill is £104. Which type of vehicle did he rent?",
    "options": [
      "Standard",
      "Small SUV",
      "4x4",
      "Luxury",
      "Sport"
    ],
    "answer": 0,
    "explanation": "By looking at the numbers of the other cars, you would be able to see that multiplying the hourly rates by 4 would not give a whole number because of their decimal places. Note how the question does not mention any damage on the car – all of the other questions specified that there was no damage and so the deposit was returned. In this case, the deposit was not returned: £54 hourly fee + insurance and £50 deposit = £104.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 8,
    "passageId": null,
    "text": "A car hire company offers a number of different types of vehicles. Insurance and hire cost are always charged at an hourly rate, while the deposit is refundable given there is no damage to the car when returned.\n\n<table style='border-collapse:collapse;margin:12px 0;width:100%;'><tr style='background:rgba(124,58,237,0.15);'><th style='border:1px solid rgba(124,58,237,0.3);padding:8px 12px;text-align:left;'>Type of Vehicle</th><th style='border:1px solid rgba(124,58,237,0.3);padding:8px 12px;text-align:center;'>Deposit</th><th style='border:1px solid rgba(124,58,237,0.3);padding:8px 12px;text-align:center;'>Insurance (per hour)</th><th style='border:1px solid rgba(124,58,237,0.3);padding:8px 12px;text-align:center;'>Hire Cost (per hour)</th></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;'>Standard</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>£50</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>£5</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>£8.50</td></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;'>Small SUV</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>£72.50</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>£8.20</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>£13.50</td></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;'>4x4</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>£80</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>£11.15</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>£16.35</td></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;'>Luxury</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>£125</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>£17.50</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>£22.65</td></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;'>Sport</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>£115</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>£17.50</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>£20.65</td></tr></table>\n\nThere is a 15% markup on all hourly rates for each car. The deposit stays the same. How much does it now cost to rent a 4x4 for 6 hours (assuming no damage to the car)?",
    "options": [
      "£244.62",
      "£189.75",
      "£150.00",
      "£192.56",
      "£192.74"
    ],
    "answer": 1,
    "explanation": "All you need to do is make the same calculation as when working out the cost of hiring any of the cars, but multiply the \"hourly rate\" number by 1.15 to reflect the 15% markup. 4x4 hourly total: (11.15 + 16.35) × 1.15 = £31.625 per hour. 31.625 × 6 = £189.75.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 9,
    "passageId": null,
    "text": "The shape of a water container is a perfect cylinder, with height 1m and diameter 50cm.\n\nThe formula for the volume of the cylinder (V) is V = πr²h, where r is the radius and h is the total height of the cylinder.\n\nThe formula for the surface area of the cylinder (A) is A = 2πrh + 2πr²\n\n1 litre = 1 cubic decimetre (dm³) = 1000cm³\n\nWhat is the volume of the cylinder to 3 significant figures?",
    "options": [
      "196 cm³",
      "1.96×10⁵ cm³",
      "7.85×10⁵ cm³",
      "785 cm³",
      "1960 cm³"
    ],
    "answer": 1,
    "explanation": "Use the formula V = πr²h. Be careful to convert 1m to 100cm when plugging in the numbers into the formula as the answers are in cm³. Also, make sure that you use 25cm as the radius instead of 50cm, as 50cm is the diameter. V = π × 25² × 100 = π × 625 × 100 = 196,349.5... ≈ 1.96 × 10⁵ cm³.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 10,
    "passageId": null,
    "text": "The shape of a water container is a perfect cylinder, with height 1m and diameter 50cm.\n\nThe formula for the volume of the cylinder (V) is V = πr²h, where r is the radius and h is the total height of the cylinder.\n\nThe formula for the surface area of the cylinder (A) is A = 2πrh + 2πr²\n\n1 litre = 1 cubic decimetre (dm³) = 1000cm³\n\nWhat is the surface area:volume ratio?",
    "options": [
      "2:1",
      "1:10",
      "1.55:1",
      "1.62:1.32",
      "1.83:1.94"
    ],
    "answer": 1,
    "explanation": "To work out the surface area, use the formula A = 2πrh + 2πr². A = 2π(25)(100) + 2π(25²) = 15,707.96 + 3,926.99 = 19,634.95 cm². The volume is 196,349.5 cm³. The ratio of SA:V = 19,634.95 : 196,349.5, which simplifies to approximately 1:10.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 11,
    "passageId": null,
    "text": "The shape of a water container is a perfect cylinder, with height 1m and diameter 50cm.\n\nThe formula for the volume of the cylinder (V) is V = πr²h, where r is the radius and h is the total height of the cylinder.\n\nThe formula for the surface area of the cylinder (A) is A = 2πrh + 2πr²\n\n1 litre = 1 cubic decimetre (dm³) = 1000cm³\n\nIf the diameter of the cylinder changed to 25cm, how would the height need to change to keep the volume the same?",
    "options": [
      "The height would be doubled",
      "The height would be squared",
      "The height would be multiplied by 4",
      "The height would be halved",
      "The height would be tripled"
    ],
    "answer": 2,
    "explanation": "If you cannot tell this by looking at the formula, the best strategy would be to see what happens when you halve the radius. As you are dividing a square number by 2, you will need to multiply the other number by 2² (4) to get to your original value. π(12.5²) × h = π × (25²) × 100 → 156.25 × h = 625 × 100 → h = 400, which is 4× more.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 12,
    "passageId": null,
    "text": "The shape of a water container is a perfect cylinder, with height 1m and diameter 50cm.\n\nThe formula for the volume of the cylinder (V) is V = πr²h, where r is the radius and h is the total height of the cylinder.\n\nThe formula for the surface area of the cylinder (A) is A = 2πrh + 2πr²\n\n1 litre = 1 cubic decimetre (dm³) = 1000cm³\n\nWater pours into the cylinder at a rate of 2 litres per second. How long would it take to fill the container?",
    "options": [
      "19.6 seconds",
      "22.2 seconds",
      "98.0 seconds",
      "12.2 seconds",
      "9.8 seconds"
    ],
    "answer": 2,
    "explanation": "Use the information given to convert the volume into litres so you have smaller numbers to work with. Volume = 196,349.5 cm³ ≈ 196 litres. 196 litres / 2 litres per second = 98 seconds.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 13,
    "passageId": null,
    "text": "The following table shows the tax rates on annual income:\n\n<table style='border-collapse:collapse;margin:12px 0;width:100%;max-width:500px;'><tr style='background:rgba(124,58,237,0.15);'><th style='border:1px solid rgba(124,58,237,0.3);padding:8px 14px;text-align:left;'>Band</th><th style='border:1px solid rgba(124,58,237,0.3);padding:8px 14px;text-align:center;'>Taxable Income</th><th style='border:1px solid rgba(124,58,237,0.3);padding:8px 14px;text-align:center;'>Tax Rate</th></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;'>Personal Allowance</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;text-align:center;'>Up to £12,500</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;text-align:center;'>0%</td></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;'>Basic Rate</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;text-align:center;'>£12,501 to £50,000</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;text-align:center;'>20%</td></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;'>Higher Rate</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;text-align:center;'>£50,001 to £150,000</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;text-align:center;'>40%</td></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;'>Additional Rate</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;text-align:center;'>Over £150,000</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;text-align:center;'>45%</td></tr></table>\n\nHow much income tax would someone earning £75,000 a year pay?",
    "options": [
      "£17,500",
      "£25,000",
      "£30,000",
      "£15,500",
      "£19,850"
    ],
    "answer": 0,
    "explanation": "The maximum tax that can be charged from £12,500 to £50,000 is £7,500 (37,500 × 0.2). The person in question earns £25,000 over the band of £50,000, so that £25,000 is taxed at 40%. 25,000 × 0.4 = 10,000, and 10,000 + 7,500 = £17,500.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 14,
    "passageId": null,
    "text": "The following table shows the tax rates on annual income:\n\n<table style='border-collapse:collapse;margin:12px 0;width:100%;max-width:500px;'><tr style='background:rgba(124,58,237,0.15);'><th style='border:1px solid rgba(124,58,237,0.3);padding:8px 14px;text-align:left;'>Band</th><th style='border:1px solid rgba(124,58,237,0.3);padding:8px 14px;text-align:center;'>Taxable Income</th><th style='border:1px solid rgba(124,58,237,0.3);padding:8px 14px;text-align:center;'>Tax Rate</th></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;'>Personal Allowance</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;text-align:center;'>Up to £12,500</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;text-align:center;'>0%</td></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;'>Basic Rate</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;text-align:center;'>£12,501 to £50,000</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;text-align:center;'>20%</td></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;'>Higher Rate</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;text-align:center;'>£50,001 to £150,000</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;text-align:center;'>40%</td></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;'>Additional Rate</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;text-align:center;'>Over £150,000</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;text-align:center;'>45%</td></tr></table>\n\nLucy pays £12,500 income tax per year. How much is her annual salary before tax?",
    "options": [
      "£50,000",
      "£62,500",
      "£72,250",
      "£56,250",
      "£64,270"
    ],
    "answer": 1,
    "explanation": "This question is asking for the same thinking as the previous question, but in reverse. The maximum tax that can be charged from £12,500 to £50,000 is £7,500 (37,500 × 0.2), so we can take that number away from her total tax (£12,500) to get £5,000. We know that the £5,000 is 40% of her earnings above £50k, so we can do £5,000 / 0.4 to get £12,500. £50k + £12,500 = £62,500.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 15,
    "passageId": null,
    "text": "The following table shows the tax rates on annual income:\n\n<table style='border-collapse:collapse;margin:12px 0;width:100%;max-width:500px;'><tr style='background:rgba(124,58,237,0.15);'><th style='border:1px solid rgba(124,58,237,0.3);padding:8px 14px;text-align:left;'>Band</th><th style='border:1px solid rgba(124,58,237,0.3);padding:8px 14px;text-align:center;'>Taxable Income</th><th style='border:1px solid rgba(124,58,237,0.3);padding:8px 14px;text-align:center;'>Tax Rate</th></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;'>Personal Allowance</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;text-align:center;'>Up to £12,500</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;text-align:center;'>0%</td></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;'>Basic Rate</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;text-align:center;'>£12,501 to £50,000</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;text-align:center;'>20%</td></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;'>Higher Rate</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;text-align:center;'>£50,001 to £150,000</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;text-align:center;'>40%</td></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;'>Additional Rate</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;text-align:center;'>Over £150,000</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;text-align:center;'>45%</td></tr></table>\n\nAlex pays £12,000 income tax per year. As a percentage of his monthly salary, how much does he need to save per month in order to have enough to pay his income tax?",
    "options": [
      "1.63%",
      "9.6%",
      "20.0%",
      "19.6%",
      "18.3%"
    ],
    "answer": 3,
    "explanation": "We can use the same working as the previous question to work out how much he earns a year (£61,250). Dividing this by 12 will give his monthly salary of ~£5,104. He needs to save £12k a year to pay his tax, which works out at £1k a month. £1k a month as a percentage of his total monthly salary is 19.6%, hence the answer is D.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 16,
    "passageId": null,
    "text": "The following table shows the tax rates on annual income:\n\n<table style='border-collapse:collapse;margin:12px 0;width:100%;max-width:500px;'><tr style='background:rgba(124,58,237,0.15);'><th style='border:1px solid rgba(124,58,237,0.3);padding:8px 14px;text-align:left;'>Band</th><th style='border:1px solid rgba(124,58,237,0.3);padding:8px 14px;text-align:center;'>Taxable Income</th><th style='border:1px solid rgba(124,58,237,0.3);padding:8px 14px;text-align:center;'>Tax Rate</th></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;'>Personal Allowance</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;text-align:center;'>Up to £12,500</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;text-align:center;'>0%</td></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;'>Basic Rate</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;text-align:center;'>£12,501 to £50,000</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;text-align:center;'>20%</td></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;'>Higher Rate</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;text-align:center;'>£50,001 to £100,000</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;text-align:center;'>40%</td></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;'>New Higher Rate</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;text-align:center;'>£100,001 to £150,000</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;text-align:center;'>45%</td></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;'>Additional Rate</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;text-align:center;'>Over £150,000</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;text-align:center;'>55%</td></tr></table>\n\nA change to the tax system means that any income between £100,000 - £150,000 will now be taxed at 45%, with the Additional rate moving up to 55%. Under the new system, how much would somebody earning £200,000 a year have to pay in income tax?",
    "options": [
      "£75,000",
      "£77,500",
      "£80,000",
      "£110,000",
      "£128,000"
    ],
    "answer": 1,
    "explanation": "Using the new tax bands: Personal Allowance (up to £12,500) = £0. Basic Rate (£12,501-£50,000): 37,500 × 0.20 = £7,500. Higher Rate (£50,001-£100,000): 50,000 × 0.40 = £20,000. New Higher (£100,001-£150,000): 50,000 × 0.45 = £22,500. Additional (£150,001-£200,000): 50,000 × 0.55 = £27,500. Total = 7,500 + 20,000 + 22,500 + 27,500 = £77,500.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 17,
    "passageId": null,
    "text": "A lorry driver needs to drive from London to Edinburgh, a distance of 402 miles. His average fuel economy is 6.8 miles per gallon (mpg).\n\n1 gallon = 4.54 litres\n1 litre of fuel = £1.14\n\nIf the lorry driver drives at an average speed of 55mph, how long does it take to reach Edinburgh?",
    "options": [
      "6.82 hours",
      "7.31 hours",
      "4.02 hours",
      "8.01 hours",
      "9.02 hours"
    ],
    "answer": 1,
    "explanation": "Rearranging the formula speed = distance / time to get time = distance / speed will give you the answer. Time = 402 / 55 = 7.31 hours.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 18,
    "passageId": null,
    "text": "A lorry driver needs to drive from London to Edinburgh, a distance of 402 miles. His average fuel economy is 6.8 miles per gallon (mpg).\n\n1 gallon = 4.54 litres\n1 litre of fuel = £1.14\n\nHow much would this journey cost in terms of fuel?",
    "options": [
      "£300",
      "£312",
      "£292",
      "£306",
      "£442"
    ],
    "answer": 3,
    "explanation": "You need to use the information given. First, convert miles per gallon to miles per litre: 6.8 / 4.54 = 1.497 miles per litre. Then, divide the total miles driven by this: 402 / 1.497 = 268.54 litres needed. Finally, 268.54 × £1.14 = £306.13 ≈ £306.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 19,
    "passageId": null,
    "text": "A lorry driver needs to drive from London to Edinburgh, a distance of 402 miles. His average fuel economy is 6.8 miles per gallon (mpg).\n\n1 gallon = 4.54 litres\n1 litre of fuel = £1.14\n\nWhat would be the latest time that the driver could leave London at to still arrive in Edinburgh by 5pm?",
    "options": [
      "08:30",
      "09:20",
      "09:40",
      "10:15",
      "10:45"
    ],
    "answer": 2,
    "explanation": "You can use the answer from the first question (7.31 hours). Be careful – 7.31 hours does not mean 7 hours and 31 minutes. 0.31 × 60 = 18.6 minutes ≈ 19 minutes. So the journey takes approximately 7 hours and 19 minutes. 17:00 - 7:19 = 09:41, which is closest to 09:40.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 20,
    "passageId": null,
    "text": "A lorry driver needs to drive from London to Edinburgh, a distance of 402 miles. His average fuel economy is 6.8 miles per gallon (mpg).\n\n1 gallon = 4.54 litres\n1 litre of fuel = £1.14\n\nThe lorry has to make a diversion en route, causing the length of the journey to increase by another 10 miles. How much more fuel would the driver need in pounds?",
    "options": [
      "£7.00",
      "£7.61",
      "£5.57",
      "£6.46",
      "£7.74"
    ],
    "answer": 1,
    "explanation": "It is the same working as the fuel cost question, but just for the additional 10 miles. 10 miles / 1.497 miles per litre = 6.68 litres. 6.68 × £1.14 = £7.61.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 21,
    "passageId": null,
    "text": "The following table shows the distances between 4 major cities in Italy:\n\n<table style='border-collapse:collapse;margin:12px 0;width:100%;max-width:500px;'><tr style='background:rgba(124,58,237,0.15);'><th style='border:1px solid rgba(124,58,237,0.3);padding:8px 12px;'></th><th style='border:1px solid rgba(124,58,237,0.3);padding:8px 12px;text-align:center;'>Rome</th><th style='border:1px solid rgba(124,58,237,0.3);padding:8px 12px;text-align:center;'>Florence</th><th style='border:1px solid rgba(124,58,237,0.3);padding:8px 12px;text-align:center;'>Milan</th><th style='border:1px solid rgba(124,58,237,0.3);padding:8px 12px;text-align:center;'>Naples</th></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;font-weight:600;'>Rome</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>/</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>125 miles</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>200 miles</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>210 miles</td></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;font-weight:600;'>Florence</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>125 miles</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>/</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>120 miles</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>85 miles</td></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;font-weight:600;'>Milan</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>200 miles</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>120 miles</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>/</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>45 miles</td></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;font-weight:600;'>Naples</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>210 miles</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>85 miles</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>45 miles</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>/</td></tr></table>\n\n1 mile = 1.6 kilometres\n\nIt takes Adam exactly 4 hours to drive from Florence to Milan. What is his average speed in miles per hour?",
    "options": [
      "30 miles/hour",
      "40 miles/hour",
      "45 miles/hour",
      "60 miles/hour",
      "70 miles/hour"
    ],
    "answer": 0,
    "explanation": "Use the formula speed = distance / time. Florence to Milan = 120 miles. Speed = 120 / 4 = 30 miles/hour.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 22,
    "passageId": null,
    "text": "The following table shows the distances between 4 major cities in Italy:\n\n<table style='border-collapse:collapse;margin:12px 0;width:100%;max-width:500px;'><tr style='background:rgba(124,58,237,0.15);'><th style='border:1px solid rgba(124,58,237,0.3);padding:8px 12px;'></th><th style='border:1px solid rgba(124,58,237,0.3);padding:8px 12px;text-align:center;'>Rome</th><th style='border:1px solid rgba(124,58,237,0.3);padding:8px 12px;text-align:center;'>Florence</th><th style='border:1px solid rgba(124,58,237,0.3);padding:8px 12px;text-align:center;'>Milan</th><th style='border:1px solid rgba(124,58,237,0.3);padding:8px 12px;text-align:center;'>Naples</th></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;font-weight:600;'>Rome</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>/</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>125 miles</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>200 miles</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>210 miles</td></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;font-weight:600;'>Florence</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>125 miles</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>/</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>120 miles</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>85 miles</td></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;font-weight:600;'>Milan</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>200 miles</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>120 miles</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>/</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>45 miles</td></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;font-weight:600;'>Naples</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>210 miles</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>85 miles</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>45 miles</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>/</td></tr></table>\n\n1 mile = 1.6 kilometres\n\nThe drive between Rome and Milan usually takes 4 hours. However, increased traffic means that the journey will take 5 hours on a given day. What is the difference in average speed between the two journeys?",
    "options": [
      "5 miles/hour",
      "10 miles/hour",
      "15 miles/hour",
      "20 miles/hour",
      "25 miles/hour"
    ],
    "answer": 1,
    "explanation": "Calculate the two average speeds and subtract. Normal: 200 / 4 = 50 mph. With traffic: 200 / 5 = 40 mph. Difference = 50 - 40 = 10 miles/hour.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 23,
    "passageId": null,
    "text": "The following table shows the distances between 4 major cities in Italy:\n\n<table style='border-collapse:collapse;margin:12px 0;width:100%;max-width:500px;'><tr style='background:rgba(124,58,237,0.15);'><th style='border:1px solid rgba(124,58,237,0.3);padding:8px 12px;'></th><th style='border:1px solid rgba(124,58,237,0.3);padding:8px 12px;text-align:center;'>Rome</th><th style='border:1px solid rgba(124,58,237,0.3);padding:8px 12px;text-align:center;'>Florence</th><th style='border:1px solid rgba(124,58,237,0.3);padding:8px 12px;text-align:center;'>Milan</th><th style='border:1px solid rgba(124,58,237,0.3);padding:8px 12px;text-align:center;'>Naples</th></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;font-weight:600;'>Rome</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>/</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>125 miles</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>200 miles</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>210 miles</td></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;font-weight:600;'>Florence</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>125 miles</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>/</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>120 miles</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>85 miles</td></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;font-weight:600;'>Milan</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>200 miles</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>120 miles</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>/</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>45 miles</td></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;font-weight:600;'>Naples</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>210 miles</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>85 miles</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>45 miles</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>/</td></tr></table>\n\n1 mile = 1.6 kilometres\n\nZakariya sets off on a drive between two cities, averaging a speed of 50mph. He breaks down 1.5 hours into the drive, meaning that he is 60% of the way to his destination. Which two cities is he travelling between?",
    "options": [
      "Milan and Rome",
      "Florence and Milan",
      "Rome and Milan",
      "Florence and Rome",
      "Florence and Naples"
    ],
    "answer": 3,
    "explanation": "Calculate the miles he would have travelled in 1.5 hours: 50 × 1.5 = 75 miles. Then use inverse percentage calculation – 60% is 75 miles, so 100% of the distance is 75 / 0.6 = 125 miles. Looking at the table, Florence to Rome is 125 miles.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 24,
    "passageId": null,
    "text": "The following table shows the distances between 4 major cities in Italy:\n\n<table style='border-collapse:collapse;margin:12px 0;width:100%;max-width:500px;'><tr style='background:rgba(124,58,237,0.15);'><th style='border:1px solid rgba(124,58,237,0.3);padding:8px 12px;'></th><th style='border:1px solid rgba(124,58,237,0.3);padding:8px 12px;text-align:center;'>Rome</th><th style='border:1px solid rgba(124,58,237,0.3);padding:8px 12px;text-align:center;'>Florence</th><th style='border:1px solid rgba(124,58,237,0.3);padding:8px 12px;text-align:center;'>Milan</th><th style='border:1px solid rgba(124,58,237,0.3);padding:8px 12px;text-align:center;'>Naples</th></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;font-weight:600;'>Rome</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>/</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>125 miles</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>200 miles</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>210 miles</td></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;font-weight:600;'>Florence</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>125 miles</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>/</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>120 miles</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>85 miles</td></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;font-weight:600;'>Milan</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>200 miles</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>120 miles</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>/</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>45 miles</td></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;font-weight:600;'>Naples</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>210 miles</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>85 miles</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>45 miles</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 12px;text-align:center;'>/</td></tr></table>\n\n1 mile = 1.6 kilometres\n\nGracie decides to travel from Rome to Milan via Florence. Assuming on the way back she travels directly from Milan to Rome, how long would the round trip take if she traveled at an average of 50mph?",
    "options": [
      "8.6 hours",
      "8.7 hours",
      "8.8 hours",
      "8.9 hours",
      "9.0 hours"
    ],
    "answer": 3,
    "explanation": "Calculate the total miles: Rome → Florence (125) + Florence → Milan (120) + Milan → Rome (200) = 445 miles. Time = 445 / 50 = 8.9 hours.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 25,
    "passageId": null,
    "text": "A bank offers two different long-term investment accounts with two different types of interest: fixed-rate simple interest and compound interest. They also offer Lifetime ISA accounts, which have their interest calculated and altered yearly. Below are the standard interest rates for two of their accounts.\n\n<table style='border-collapse:collapse;margin:12px 0;width:100%;max-width:400px;'><tr style='background:rgba(124,58,237,0.15);'><th style='border:1px solid rgba(124,58,237,0.3);padding:8px 14px;text-align:left;'>Account Type</th><th style='border:1px solid rgba(124,58,237,0.3);padding:8px 14px;text-align:center;'>Interest Rate</th></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;'>Fixed-Rate Simple Interest Account</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;text-align:center;'>5%</td></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;'>Compound Interest Account</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;text-align:center;'>3.5%</td></tr></table>\n\nSam invests £1000 into both accounts. After 5 years, what is the difference in value between the two accounts to the nearest pound?",
    "options": [
      "£55",
      "£62",
      "£78",
      "£65",
      "£66"
    ],
    "answer": 1,
    "explanation": "Simple interest: £1000 + (£50 × 5) = £1,250. Compound interest: £1000 × 1.035⁵ = £1,187.69. Difference = £1,250 - £1,188 = £62.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 26,
    "passageId": null,
    "text": "A bank offers two different long-term investment accounts with two different types of interest: fixed-rate simple interest and compound interest. They also offer Lifetime ISA accounts, which have their interest calculated and altered yearly. Below are the standard interest rates for two of their accounts.\n\n<table style='border-collapse:collapse;margin:12px 0;width:100%;max-width:400px;'><tr style='background:rgba(124,58,237,0.15);'><th style='border:1px solid rgba(124,58,237,0.3);padding:8px 14px;text-align:left;'>Account Type</th><th style='border:1px solid rgba(124,58,237,0.3);padding:8px 14px;text-align:center;'>Interest Rate</th></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;'>Fixed-Rate Simple Interest Account</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;text-align:center;'>5%</td></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;'>Compound Interest Account</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;text-align:center;'>3.5%</td></tr></table>\n\nHow many years would it take for the Compound Interest Account to grow larger than the Fixed-Rate Account?",
    "options": [
      "18 years",
      "21 years",
      "25 years",
      "30 years",
      "7 years"
    ],
    "answer": 1,
    "explanation": "You need to calculate a point where the compound interest account will be worth more than £1000 + (50 × the number of years). The compound interest account grows at 1.035^n while simple interest grows linearly. At year 21, compound interest overtakes simple interest.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 27,
    "passageId": null,
    "text": "A bank offers two different long-term investment accounts with two different types of interest: fixed-rate simple interest and compound interest. They also offer Lifetime ISA accounts, which have their interest calculated and altered yearly. Below are the standard interest rates for two of their accounts.\n\n<table style='border-collapse:collapse;margin:12px 0;width:100%;max-width:400px;'><tr style='background:rgba(124,58,237,0.15);'><th style='border:1px solid rgba(124,58,237,0.3);padding:8px 14px;text-align:left;'>Account Type</th><th style='border:1px solid rgba(124,58,237,0.3);padding:8px 14px;text-align:center;'>Interest Rate</th></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;'>Fixed-Rate Simple Interest Account</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;text-align:center;'>5%</td></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;'>Compound Interest Account</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;text-align:center;'>3.5%</td></tr></table>\n\nSophie wants to invest £20,000 in one of these accounts, but is not sure which one to go with. Which would give her the greatest return after 10 years, and by how much (to the nearest thousand)?",
    "options": [
      "The Fixed-Rate account, by £2000",
      "The Fixed-Rate account, by £5000",
      "The Compound Interest account, by £2000",
      "The Compound Interest account, by £5000",
      "They would be worth the same"
    ],
    "answer": 0,
    "explanation": "Fixed-Rate after 10 years: £20,000 + (£1,000 × 10) = £30,000. Compound after 10 years: £20,000 × 1.035¹⁰ = £28,211.88. The Fixed-Rate account gives a greater return by approximately £1,788 ≈ £2,000 to the nearest thousand.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 28,
    "passageId": null,
    "text": "A bank offers two different long-term investment accounts with two different types of interest: fixed-rate simple interest and compound interest. They also offer Lifetime ISA accounts, which have their interest calculated and altered yearly. Below are the standard interest rates for two of their accounts.\n\n<table style='border-collapse:collapse;margin:12px 0;width:100%;max-width:400px;'><tr style='background:rgba(124,58,237,0.15);'><th style='border:1px solid rgba(124,58,237,0.3);padding:8px 14px;text-align:left;'>Account Type</th><th style='border:1px solid rgba(124,58,237,0.3);padding:8px 14px;text-align:center;'>Interest Rate</th></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;'>Fixed-Rate Simple Interest Account</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;text-align:center;'>5%</td></tr><tr><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;'>Compound Interest Account</td><td style='border:1px solid rgba(124,58,237,0.2);padding:6px 14px;text-align:center;'>3.5%</td></tr></table>\n\nSophie decides to go with the Compound Interest account. How long would it take for her to make a 25% return on her investment?",
    "options": [
      "6 years",
      "5 years",
      "7 years",
      "8 years",
      "9 years"
    ],
    "answer": 2,
    "explanation": "Her initial investment is £20,000, so a 25% return would mean an increase of £5,000 (reaching £25,000). Using compound interest: £20,000 × 1.035ⁿ ≥ £25,000. After 7 years: £20,000 × 1.035⁷ = £25,486.52, which exceeds £25,000. So the answer is 7 years.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 29,
    "passageId": null,
    "text": "A sphere has a diameter of 1m.\n\nThe formula for the volume of a sphere is V = (4/3)πr³\nThe formula for the surface area of a sphere is A = 4πr²\n\nWhat is the volume of the sphere in cm³?",
    "options": [
      "5.24×10⁵ cm³",
      "1.48×10⁶ cm³",
      "148 cm³",
      "5240 cm³",
      "524 cm³"
    ],
    "answer": 0,
    "explanation": "Use the formula V = (4/3)πr³. Convert 1m to 100cm, so the radius is 50cm. V = (4/3) × π × 50³ = (4/3) × π × 125,000 = 523,598.8 cm³ ≈ 5.24 × 10⁵ cm³.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 30,
    "passageId": null,
    "text": "A sphere has a diameter of 1m.\n\nThe formula for the volume of a sphere is V = (4/3)πr³\nThe formula for the surface area of a sphere is A = 4πr²\n\nWhat is the surface area of the sphere, to the nearest thousand cm²?",
    "options": [
      "30,000 cm²",
      "31,000 cm²",
      "32,000 cm²",
      "33,000 cm²",
      "34,000 cm²"
    ],
    "answer": 1,
    "explanation": "Use the formula A = 4πr². With radius = 50cm: A = 4 × π × 50² = 4 × π × 2,500 = 31,415.9 cm² ≈ 31,000 cm².",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 31,
    "passageId": null,
    "text": "A different sphere has volume 25,000cm³.\n\nThe formula for the volume of a sphere is V = (4/3)πr³\nThe formula for the surface area of a sphere is A = 4πr²\n\nWhat is the diameter of the sphere to 3 significant figures?",
    "options": [
      "36.1 cm",
      "64.2 cm",
      "18.2 cm",
      "36.3 cm",
      "37.4 cm"
    ],
    "answer": 3,
    "explanation": "Use the formula for the volume of the sphere and rearrange it to make the radius the subject. V = (4/3)πr³ → r³ = 3V/(4π) = 3(25,000)/(4π) = 5,968.31 → r = 18.14 cm. Then, multiply the radius by 2 to find the diameter = 36.3 cm.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 32,
    "passageId": null,
    "text": "A different sphere has volume 25,000cm³.\n\nThe formula for the volume of a sphere is V = (4/3)πr³\nThe formula for the surface area of a sphere is A = 4πr²\n\nWhat is the surface area to volume ratio of this sphere to 3 significant figures?",
    "options": [
      "0.151",
      "0.165",
      "0.142",
      "0.231",
      "0.823"
    ],
    "answer": 1,
    "explanation": "The surface area to volume ratio is SA/V. With r ≈ 18.14 cm: SA = 4π(18.14²) = 4,134.6 cm². SA/V = 4,134.6 / 25,000 = 0.165.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 33,
    "passageId": null,
    "text": "The following pie chart shows the distribution of degrees held by 140 employees at a particular financial institution:\n\n<br><img src=\"images/img_p241_1.jpeg\" style=\"max-width:100%;\"><br>\n\nMaster of Business Administration (MBA)\n\nHow many employees do not hold a degree in a scientific field?",
    "options": [
      "42",
      "44",
      "46",
      "48",
      "50"
    ],
    "answer": 2,
    "explanation": "Adding the percentages of the employees with an MBA (8.6%) and with a BA (24.3%) would give you 32.9%. 140 × 0.329 = 46.06 ≈ 46 employees. These are the non-scientific degree holders.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 34,
    "passageId": null,
    "text": "The following pie chart shows the distribution of degrees held by 140 employees at a particular financial institution:\n\n<br><img src=\"images/img_p241_1.jpeg\" style=\"max-width:100%;\"><br>\n\nMaster of Business Administration (MBA)\n\nWhat is the probability of randomly selecting two employees with MBA degrees out of the pool of 140 employees?",
    "options": [
      "0.00678",
      "0.678",
      "0.00735",
      "0.735",
      "0.768"
    ],
    "answer": 0,
    "explanation": "Similar to the birthday probability question, make sure that when you consider the two separate employees, you recognise that the first one is taken out of the pool. MBA employees = 140 × 0.086 ≈ 12. Probability = (12/140) × (11/139) = 0.00678.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 35,
    "passageId": null,
    "text": "The following pie chart shows the distribution of degrees held by 140 employees at a particular financial institution:\n\n<br><img src=\"images/img_p241_1.jpeg\" style=\"max-width:100%;\"><br>\n\nMaster of Business Administration (MBA)\n\nThe firm hired 5 new employees. Two held MBAs and three held Bachelor of Arts degrees. What is the new percentage of employees holding MBAs to the nearest whole percentile?",
    "options": [
      "10%",
      "9%",
      "12%",
      "8%",
      "6.5%"
    ],
    "answer": 0,
    "explanation": "Adding 2 to the number of employees with an MBA (12 + 2 = 14) and adding 5 to the overall number of employees (140 + 5 = 145) would give you 14/145 as the required fraction, which equates to roughly 9.66%. Rounded to the nearest whole number, this would give you 10%.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 36,
    "passageId": null,
    "text": "The following pie chart shows the distribution of degrees held by 140 employees at a particular financial institution:\n\n<br><img src=\"images/img_p241_1.jpeg\" style=\"max-width:100%;\"><br>\n\nMaster of Business Administration (MBA)\n\nIncluding the 5 new employees, what would be the probability of randomly selecting three employees with Bachelor of Sciences degrees out of the new pool of employees?",
    "options": [
      "0.0339",
      "0.0394",
      "0.0401",
      "0.0422",
      "0.3394"
    ],
    "answer": 1,
    "explanation": "You can use the same logic as in the MBA probability question - just make sure you use the updated figure of total employees (145). BSc employees = 140 × 0.357 ≈ 50. Probability = (50/145) × (49/144) × (48/143) = 0.0394.",
    "topic": "Quantitative Reasoning"
  }
];
