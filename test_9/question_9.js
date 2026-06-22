const PASSAGES = {};

const QUESTIONS = [
  {
    "id": 1,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The country of Ecunemia has a somewhat complicated tax code. There are four states that make up Ecunemia: Asteria, Bolovia, Casova and Derivia. Each state has its own tax code, including different tax rates on different items. The table below represents the tax a customer has to pay when they purchase an item from a store. E.g. a £100 coat in Asteria would cost £110. The customer must add the tax onto the advertised purchase price. In the case of an item falling into multiple categories ( for example, in the case of Imported Food) the higher tax rate is paid and the lower rate is ignored.<br><br><img src='image/set_1.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>A shopper visits a certain supermarket. Without tax, the shopper spends $50 on food, $30 on clothes and nothing on imported items. She spends $88 in total. Which state is this supermarket in?",
    "options": [
      "Asteria",
      "Bolovia",
      "Casova",
      "Derivia"
    ],
    "answer": 2,
    "explanation": "We can work out that the tax rates must fit in the following equation: ($50 x Food tax rate) + ($30 x Clothes tax rate) + $80 = $88. Only the tax rates in Casova fit correctly in this equation.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 2,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The country of Ecunemia has a somewhat complicated tax code. There are four states that make up Ecunemia: Asteria, Bolovia, Casova and Derivia. Each state has its own tax code, including different tax rates on different items. The table below represents the tax a customer has to pay when they purchase an item from a store. E.g. a £100 coat in Asteria would cost £110. The customer must add the tax onto the advertised purchase price. In the case of an item falling into multiple categories ( for example, in the case of Imported Food) the higher tax rate is paid and the lower rate is ignored.<br><br><img src='image/set_1.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Someone runs a supplier in Bolovia, supplying supermarkets in each state in Ecumenia. Each year they supply each state with 250 items of clothing, which the supermarket sells for $40 (including tax), and the supplier gets all of this revenue, minus the tax paid. A competitor in Asteria goes out of business, and this supplier has the opportunity to buy the manufacturing plant for $20,000, and transfer to this state. If the supplier purchases the site, and moves to Asteria, how many years will it take to make back the cost of purchasing the site?",
    "options": [
      "5 years",
      "12 years",
      "23 years",
      "26 years"
    ],
    "answer": 3,
    "explanation": "To answer this question, we calculate how much the supplier will make for selling the items, by considering the tax rate in each state, and deducting it from the price accordingly. Thus, in Bolovia, each year the supplier makes 250 x ($40/1.20 + $40/1.15 + $40/1.10 + $40/1.15) = $34,812 a year. In Asteria, each year the supplier makes 250 x ($40/1.10 + $40/1.15 + $40/1.10 + $40/1.15) = $35,572. (Note that in the case of an item being applicable to 2 tax rates, the higher rate will be charged. Thus, in Bolovia, imported clothes will be charged at the clothes tax rate of 15%, since this is higher than the imports rate.) Thus, by moving to Asteria, the supplier will make $760 more each year. Therefore it will take 26.3 years to recover the purchase cost of $20,000.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 3,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The country of Ecunemia has a somewhat complicated tax code. There are four states that make up Ecunemia: Asteria, Bolovia, Casova and Derivia. Each state has its own tax code, including different tax rates on different items. The table below represents the tax a customer has to pay when they purchase an item from a store. E.g. a £100 coat in Asteria would cost £110. The customer must add the tax onto the advertised purchase price. In the case of an item falling into multiple categories ( for example, in the case of Imported Food) the higher tax rate is paid and the lower rate is ignored.<br><br><img src='image/set_1.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>John goes into a store and spends $100. Of this, $12 is tax. Which of the following is possible?",
    "options": [
      "He shopped in Asteria and bought no imported goods.",
      "He shopped in Casova.",
      "He shopped in Derivia and bought at least $50 of food (excluding tax).",
      "He shopped in Bolovia and spent $10 on imported goods (excluding tax)."
    ],
    "answer": 3,
    "explanation": "If John spends $88, he will spend £12 on tax. Thus, the tax rate is 12/88 = 13.6%. If John shops in Asteria, the maximum tax rate he would have to pay is 10%; at Casova it would be 10%. If he spends at least $50 on food in Derivia, he pays no tax on it. Thus, he can spend a maximum of $38 on imported goods (at a maximum tax rate of 15%). This equates to a tax of $5.70 (not $12). Finally, if John spends $10 on imported goods in Bolovia – he would pay $0.50 in tax. Thus, he can spend up to $78 on clothes taxed at 15%. The tax on the clothes is therefore $11.70, giving $12.20 tax in total as the maximum. Since he pays $12 dollars tax, he shops in Bolovia.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 4,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The country of Ecunemia has a somewhat complicated tax code. There are four states that make up Ecunemia: Asteria, Bolovia, Casova and Derivia. Each state has its own tax code, including different tax rates on different items. The table below represents the tax a customer has to pay when they purchase an item from a store. E.g. a £100 coat in Asteria would cost £110. The customer must add the tax onto the advertised purchase price. In the case of an item falling into multiple categories ( for example, in the case of Imported Food) the higher tax rate is paid and the lower rate is ignored.<br><br><img src='image/set_1.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Sibella is on a road trip through Ecunemia, driving through different states. On the journey she buys $100 of the finest Asterian ham, $30 of the finest Bolovian caviar, a $10 case of Casovan orange juice and spends $100 on a Derivian dress (all of these prices without tax). Which of the following cannot have been the total amount Sibella spent, including tax?",
    "options": [
      "$256",
      "$264",
      "$273",
      "$288"
    ],
    "answer": 3,
    "explanation": "The sum of the basic prices is 100+30+10+100 = $240. Now the highest tax rate on the board is 20% ( for imports to Asteria), thus the maximum tax is $240 x 1.20 = $288. However, this is impossible to attain (since if we bought everything in Asteria, the ham would be cheaper, as it is not imported and would only be taxed at the food rate). Therefore no option allows the overall price to be as high as $288, so this is the answer. Answer A) is possible if all products were bought in the state they are produced in. Answer C) is the correct answer if all products were bought in Asteria (and accounting for the reduced tax rate for the ham, which is not an import). Answer B) is possible if the ham was bought in Asteria, the caviar and orange juice were bought in Casova and the dress was bought in Bolovia. SET 2",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 5,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>As a probe drops through the ocean, the pressure it experiences increases. For every 10 metres the probe drops down, the pressure it experiences increases by 10,000 Pascals (Pa).<br><br><img src='image/set_2.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>A particular probe can survive 200 pounds per square inch without incurring damage. Given that the conversion factor between these units is 7000 Pa = 1 pound per square inch and assuming that pressure at sea level is 0 Pascals, how deep can the probe drop into the ocean without incurring damage?",
    "options": [
      "14 m",
      "140 m",
      "1.4 km",
      "14 km"
    ],
    "answer": 2,
    "explanation": "Firstly, find the pressure it can withstand in Pascals: 200 pounds per square inch x 7,000 Pascals per pound per square inch = 1.4 million Pascals. Then divide this by 1,000 Pa to get the depth the probe can withstand (we can see from the question that the pressure increases by 1,000 Pa for every metre depth increase): 1,400,000/1,000 = 1,400 metres into the ocean, which is 1.4 km.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 6,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>As a probe drops through the ocean, the pressure it experiences increases. For every 10 metres the probe drops down, the pressure it experiences increases by 10,000 Pascals (Pa).<br><br><img src='image/set_2.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>A different probe is dropped into the ocean and falls downward. This probe can withstand 300,000 Pa of pressure without breaking. A model of the effect of the fluid states that the object’s depth in the fluid is d = ½√(t3), where d is depth in metres and t is time in seconds. How long will it take for this probe to break?",
    "options": [
      "65 seconds",
      "71 seconds",
      "75 seconds",
      "78 seconds."
    ],
    "answer": 1,
    "explanation": "Calculate that the probe can drop 300,000 Pa/1,000 Pa per metre = 300 metres into the ocean before breaking. Now rearrange the equation in the question, to make t the subject, as follows: 2d = √(t3) (2d)2 = t3\n\n\nt = 3√(2d)2 Then substitute the depth into this supplied equation: t = 3√(2d)2 = 3√(2x300)2 = 71 seconds. SET 3",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 7,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The fictional drug Cordrazine is used to treat four separate conditions. The following table gives the amount of drug used in each case to treat each condition, written in the form x mg/kg: i.e. for every kilogram you weigh, you take x mg of the drug. The recommended course for the drug is also listed, in the form of number of times a day and how many weeks you need to take the drug.<br><br><img src='image/set_3.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Over the course of treatment, John, an 80 kg male, takes 26.88 grams of the drug. Which disease was he prescribed the drug for?",
    "options": [
      "Black Trump Virus",
      "Swamp Fever",
      "Yellow Tick",
      "Red Rage"
    ],
    "answer": 0,
    "explanation": "Calculate the amount of drug taken for each disease: Black Trump Virus = 4 mg x 80 kg x 3 times a day x 28 days = 26.88 g Swamp Fever = 3x80x1x7 = 1.68 g Yellow Tick = 1x80x2x84 = 13.44 g Red Rage = 5x80x2x21 = 16.80 g At a quick glance, the swamp fever dosage is much lower than all the others – you can discount this and use that to save a little time if you need to.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 8,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The fictional drug Cordrazine is used to treat four separate conditions. The following table gives the amount of drug used in each case to treat each condition, written in the form x mg/kg: i.e. for every kilogram you weigh, you take x mg of the drug. The recommended course for the drug is also listed, in the form of number of times a day and how many weeks you need to take the drug.<br><br><img src='image/set_3.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Carol is a 60 kg female who is prescribed the drug (precisely and at different times) three times in one year. Two of the cases are for Yellow Tick. In total she takes 40.32 grams of the drug. Which was the third disease she was prescribed the drug for?",
    "options": [
      "Black Trump Virus",
      "Swamp Fever",
      "Yellow Tick",
      "Red Rage"
    ],
    "answer": 0,
    "explanation": "First calculate that Carol took 20.16 grams of the drug during the two courses for Yellow Tick, using the same method as for John, but using Carol’s weight of 60kg. Therefore 20.16 grams (the amount left over) corresponds to the dosage for the unknown disease: 4x60x3x28 = 20.16 g, therefore the unknown disease was Black Trump Virus.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 9,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The fictional drug Cordrazine is used to treat four separate conditions. The following table gives the amount of drug used in each case to treat each condition, written in the form x mg/kg: i.e. for every kilogram you weigh, you take x mg of the drug. The recommended course for the drug is also listed, in the form of number of times a day and how many weeks you need to take the drug.<br><br><img src='image/set_3.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Clarence takes the drug twice in his life. Once he takes it for Swamp Fever at age 18, when he weighs 80 kg, and he takes it later in life at age 40 for Black Trump Virus, when he weighs 110 kg. What is the ratio of the amount he takes each time?",
    "options": [
      "1:23",
      "1:22",
      "1:21",
      "1:20"
    ],
    "answer": 1,
    "explanation": "The first time he takes 3 x 80 x 1 x 7 = 1.68 grams, and the second time he takes 4 x 110 x 3 x 28 = 36.96 grams. Thus the ratio is 1.68 : 36.96 = 1:22.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 10,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The fictional drug Cordrazine is used to treat four separate conditions. The following table gives the amount of drug used in each case to treat each condition, written in the form x mg/kg: i.e. for every kilogram you weigh, you take x mg of the drug. The recommended course for the drug is also listed, in the form of number of times a day and how many weeks you need to take the drug.<br><br><img src='image/set_3.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Danny has liver disease. His system cannot cope with more than 15.5 grams of Cordrazine every 4 weeks. Danny has a medical condition usually treated with Cordrazine, but doctors have advised him to not complete a course of the treatment, as he would exceed the dose that his system is able to cope with. Which of the following statements is possible?",
    "options": [
      "Danny suffers from Red Rage and weighs 75 kg.",
      "Danny suffers from Swamp Fever and weighs 100 kg.",
      "Danny suffers from Black Trump and weighs 45 kg.",
      "Danny suffers from Yellow Tick and weighs 75 kg."
    ],
    "answer": 0,
    "explanation": "By calculating the dose required in each of the cases, we see that the only one that is above 15.5 grams over 4 weeks is the dosage for Red Rage: 5 x 75 x 2 x 21 = 15.75 g – therefore Danny must be suffering from Red Rage.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 11,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The fictional drug Cordrazine is used to treat four separate conditions. The following table gives the amount of drug used in each case to treat each condition, written in the form x mg/kg: i.e. for every kilogram you weigh, you take x mg of the drug. The recommended course for the drug is also listed, in the form of number of times a day and how many weeks you need to take the drug.<br><br><img src='image/set_3.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Eileen has kidney failure. Her system cannot cope with more than 10 grams of Cordrazine every 4 weeks. She suffers from Red Rage, but doctors have recommended she does not use Cordrazine to treat it, as this would exceed the 10 g dosage her system can cope with. Which of the following weights is the minimum that would support this recommendation?",
    "options": [
      "40.34 kg",
      "42.53 kg",
      "45.81 kg",
      "47.62 kg"
    ],
    "answer": 3,
    "explanation": "Heavier people need a higher dose. To find the maximum weight, we use the equation: 5 x weight x 2 x 21 = 10 g, where “weight” represents the maximum weight requiring a dosage of less than 10 g. So the maximum weight to not need a dosage exceeding 10 g is = 10,000 mg/(21 days x 2 daily doses x 5 mg/kg) = 47.62 kg. SET 4",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 12,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>A bakery sells four varieties of cakes. The cakes contain the following ingredients:<br><br><img src='image/set_4.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Which cake contains the highest proportion of flour?",
    "options": [
      "Sponge",
      "Madeira",
      "Pound",
      "Chocolate."
    ],
    "answer": 1,
    "explanation": "To solve this, divide the flour content by the overall mass. A quick inspection might show you that this is likely to be Madeira, which is confirmed by the calculation (250/825 = 0.3). Thus, 30% of the Madeira’s total weight is flour, which is a higher percentage than for any other cake",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 13,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>A bakery sells four varieties of cakes. The cakes contain the following ingredients:<br><br><img src='image/set_4.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>The cake recipes are scaled up for a large order. One cake weighs 2.6 kg and contains 625 g of flour. What variety of cake is it?",
    "options": [
      "Sponge",
      "Madeira",
      "Pound",
      "Chocolate"
    ],
    "answer": 0,
    "explanation": "In this question, there must be one cake where: (2,600/mass of cake) = (625/mass of flour in cake). Thus, there is a number that both the mass of the cake and the mass of flour can be multiplied by, in order to get these numbers respectively. We can see that if we multiply the mass of the sponge cake by 5, we get 2,600 g. Equally, if we multiply the mass of flour in the sponge cake recipe (125g) by 5, then we get 625 g. Thus, Sponge cake is the answer. No other cake recipe can be multiplied by a given number to get an overall weight of 2,600 g and 625 g of flour.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 14,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>A bakery sells four varieties of cakes. The cakes contain the following ingredients:<br><br><img src='image/set_4.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Eliza is having a wedding and wants to produce a 4-tiered wedding cake. She wishes each tier to be of different size, and scaled such that that the bottom cake is 50% heavier than normal (e.g. the cake contains 50% more ingredients), the second cake is 25% heavier than normal, the third cake is 10% heavier than normal and the top cake is normal-sized, where each cake is of the same type. Which of the following is a possible weight of sugar for the cake (rounded to 2 s.f.)?",
    "options": [
      "940 g",
      "970 g",
      "1,000 g",
      "1,030 g"
    ],
    "answer": 1,
    "explanation": "We use 1.50+1.25+1.10+1 times the ingredients for one cake, so the wedding cake will use 4.85 times as much of the ingredients listed for one cakes. We can use this to find which of the possible answers can be the amount of sugar in the cake, i.e. the sugar called for in one recipe multiplied by 4.85. The quickest way to do this is to divide each possible answer by 4.85, and see if the result matches the weight of sugar in any of the cakes. We see that 970 g/4.85 = 200 g, which is the amount of sugar in the chocolate cake. None of the other amounts are possible. Thus, B is the answer.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 15,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>A bakery sells four varieties of cakes. The cakes contain the following ingredients:<br><br><img src='image/set_4.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>It is known that flour costs £0.55 per 1.5 kg and sugar costs £0.70 per 1 kg. Which of the following is the closest to the cost ratio of flour to sugar in a Madeira cake?",
    "options": [
      "1:2",
      "3:4",
      "4:5",
      "5:6"
    ],
    "answer": 1,
    "explanation": "A kilogram of flour costs 55 x 2/3 pence and we are using 0.25 kg, so 9.167 p worth of flour goes into a Madeira cake. For sugar, we have 0.175 kg x 70 p per kg = 12.25 p worth of sugar going into the cake. The ratio is thus 9.167:12.25 = approx 0.75:1 = 3:4",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 16,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>A bakery sells four varieties of cakes. The cakes contain the following ingredients:<br><br><img src='image/set_4.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Milk costs £0.44 per kilogram and flour costs £0.55 per 1.5 kg. What is the cost ratio of flour to milk in a chocolate cake?",
    "options": [
      "1:1",
      "2:3",
      "8:7",
      "10:9"
    ],
    "answer": 3,
    "explanation": "As before, the flour costs: 55 p per 1.5 kg x 2/3 x 0.2 kg = 7.3 pence. The milk costs: 44 p per kg x 150 g/1000 g per kg = 6.6 pence. Thus the ratio is 7.3:6.6 = 1:0.9 = 10:9. SET 5",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 17,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The Kryptos Virus is particularly virulent. The infection rate is dependent upon the gender of the recipient. A random sample of 100 men and 100 women are taken from a population and tested for the Kryptos virus using Test A. The results of Test A are displayed below:<br><br><img src='image/set_5.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>What percentage of people tested have the virus?",
    "options": [
      "45%",
      "54%",
      "55%",
      "63%"
    ],
    "answer": 1,
    "explanation": "In total, 108 people out of the 200 tested have the disease; this is 108/200 = 0.54. Thus, the answer is 54%.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 18,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The Kryptos Virus is particularly virulent. The infection rate is dependent upon the gender of the recipient. A random sample of 100 men and 100 women are taken from a population and tested for the Kryptos virus using Test A. The results of Test A are displayed below:<br><br><img src='image/set_5.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>A population of 231,768 is divided: 53% women, 47% men. Use the data in the table to estimate the number of people in the population that have the Kryptos virus. Assume that the infection rates in each gender will be the same as for the sample population in Test A. Which of the following is the number of people expected to be infected with Kryptos virus in this population?",
    "options": [
      "123,587",
      "123,589",
      "125,541",
      "126,406"
    ],
    "answer": 3,
    "explanation": "As the infection rate is different for men and women, the infection rates must be calculated separately and combined: (231,768 x 0.53 women x 0.63) + (231,768 x 0.47 men x 0.45) = 126,406 to the nearest whole person.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 19,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The Kryptos Virus is particularly virulent. The infection rate is dependent upon the gender of the recipient. A random sample of 100 men and 100 women are taken from a population and tested for the Kryptos virus using Test A. The results of Test A are displayed below:<br><br><img src='image/set_5.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>3/9 of the men and 5/7 of the women testing positive for Kryptos in Test A have visited the city of Atlantis. Which of the following is the correct percentage of people in the test group testing positive for Kryptos who have NOT visited Atlantis?",
    "options": [
      "40%",
      "44%",
      "50%",
      "55%"
    ],
    "answer": 1,
    "explanation": "There are 45 men and 63 women in the test group who have the Kryptos virus. Thus 15 of the men and 45 of the women have visited Atlantis. As we now know that 60 people have visited Atlantis, we can see that 108 – 60 = 48 have not visited. Now we simply calculate 48 as a percentage of 108. 48/108 = 0.44. Thus, 44% of people testing positive for the Virus in Test A have not visited Atlantis.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 20,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The Kryptos Virus is particularly virulent. The infection rate is dependent upon the gender of the recipient. A random sample of 100 men and 100 women are taken from a population and tested for the Kryptos virus using Test A. The results of Test A are displayed below:<br><br><img src='image/set_5.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>It is known that Test A is not always correct. Test B is a more accurate test. The 45 men who tested positive for the Kryptos virus using Test A were then re-tested with Test B - only 20 tested positive. Assuming the same proportion of men and women experienced false positive results with Test A, how many women in the test group do we expect to actually have the Kryptos virus?",
    "options": [
      "20",
      "28",
      "35",
      "42"
    ],
    "answer": 1,
    "explanation": "We can see that 20/45 men testing positive in Test A have also tested positive in Test B, so we assume that the rest were false positives stemming from the inaccuracies of Test A. We are told to assume the same proportion of false positives in the women tested, so we simply apply this fraction to the number of women testing positive in Test A. Thus, we simply calculate 63 x (20/45) = 28. Thus, we expect that 28 women actually have Kryptos Virus.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 21,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The Kryptos Virus is particularly virulent. The infection rate is dependent upon the gender of the recipient. A random sample of 100 men and 100 women are taken from a population and tested for the Kryptos virus using Test A. The results of Test A are displayed below:<br><br><img src='image/set_5.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>It is decided the women who tested positive under test A should be retested using test B. This time 29 women test positive for the Kryptos Virus. Considering both the men and women tested, what percentage of people who tested positive in Test A also tested positive in Test B (to the nearest whole number)?",
    "options": [
      "40%",
      "45%",
      "50%",
      "55%"
    ],
    "answer": 2,
    "explanation": "The largest section on the pie chart for Scottish GDP is Government and Other Services – it accounts for 29% of total Scottish GDP.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 22,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>A business has 3 manufacturing plants and 3 stores. Each plant can ship to each store, and the following table shows the flat rate cost, in pounds sterling (£), of the business sending a truck from the plant to the store.<br><br><img src='image/set_6.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Currently the businesses strategy is to send material from Plant A to store 2, from Plant B to store 3 and from Plant C to store 1. One truck is suﬃcient for a day’s delivery. What is the daily cost of this plan?",
    "options": [
      "£850",
      "£930",
      "£970",
      "£1,030"
    ],
    "answer": 1,
    "explanation": "The cost of the plan is 190 + 600 + 140 = £930 per day",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 23,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>A business has 3 manufacturing plants and 3 stores. Each plant can ship to each store, and the following table shows the flat rate cost, in pounds sterling (£), of the business sending a truck from the plant to the store.<br><br><img src='image/set_6.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>The store wishes to optimize their shipping costs by sending material from Plant C to store 3, noticing that the delivery cost is lower. They then choose the two other options that save the most money. What percentage saving is achieved by this strategy relative to the strategy in the previous question (to the nearest whole number)?",
    "options": [
      "18%",
      "20%",
      "22%",
      "24%"
    ],
    "answer": 2,
    "explanation": "Firstly we need to find the two options that save the most money, aside from the one already stated. The two best options are to send material from Plant A to Store 1, and material from plant B to store 2. We can see from the table that these 2 options will be £30 per day cheaper than sending from Plant A to store 2, and plant B to store 1 (as with the current business plan).\n\n\nThe new total cost is 100 + 180 + 450 = £730. Thus the saving is (930 – 730) = £200. £200 is 22% of £930, so the percentage saving is 22% (to the nearest whole number). SET 7",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 24,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The table below shows the number of books sold by a bookshop in one day:<br><br><img src='image/set_7.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>The shop also ran an author’s visit event in the evening in which 106 people purchased the author’s book. These books are NOT counted in the above table. What proportion of the books sold on this particular day were sold at the author’s visit event (to the nearest whole number)?",
    "options": [
      "13%",
      "17%",
      "21%",
      "25%"
    ],
    "answer": 1,
    "explanation": "The shop sold 512 books outside of the visit event (sum of sales in the table), and 106 at the event. Thus the percentage at the event was 106/(512+106) = 17%.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 25,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The table below shows the number of books sold by a bookshop in one day:<br><br><img src='image/set_7.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Non-fiction books cost, on average, £10, and fiction books cost, on average, £6. What percentage of the shop’s revenue (excluding the author’s visit event) came from non-fiction books?",
    "options": [
      "10%",
      "13%",
      "19%",
      "23%"
    ],
    "answer": 1,
    "explanation": "Firstly calculate the different revenues: Non-fiction revenue = (12+30) x£10 = £420 Fiction revenue = (50+45+23+90+103+159) x£6 = £2,820 Then calculate the non-fiction percentage: 420/(2,820+420) = 13%.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 26,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The table below shows the number of books sold by a bookshop in one day:<br><br><img src='image/set_7.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Assume that the shop makes this number of sales of each type of book every day. One week, the shop adopts a new marketing strategy and markets non-fiction books more heavily. The result is that the number of non-fiction sales double during this week, but all of the other book sales stay in line with previous sales. How much does the shop earn this week?",
    "options": [
      "£24,250",
      "£25,620",
      "£26,950",
      "£27,890"
    ],
    "answer": 1,
    "explanation": "The weekly revenue is seven times the daily revenue. Daily revenue from Fiction: (50+45+23+90+103+159) x£6 = £2,820. Daily revenue from Non-fiction 2x(12+30) x£10 = £840. Therefore weekly revenue is 7x(£28.20+£840) = £25,620.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 27,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The table below shows the number of books sold by a bookshop in one day:<br><br><img src='image/set_7.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>The following week, the shop decides to market the horror books more heavily, resulting in the sales of horror books doubling, and the sales of non-fiction books returning to the normal level. How much does the shop’s income increase this week compared to the non-fiction marketing week? Sales of all other books can be assumed to be the same as un-marketed weeks.",
    "options": [
      "1%",
      "2%",
      "3%",
      "4%"
    ],
    "answer": 3,
    "explanation": "The shop’s revenue is now £6 x (100+90+23+90+103+159) + £10 x (12+30) per day. This income equates to £3,810 per day and £26,670 per week. Therefore the percentage difference is 26,670/25,620 = 1.04, giving a 4% increase on the previous week. SET 8",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 28,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The following table shows the taxing structure for Italian city hotels: Unless specifically mentioned, assume that all of the people below are aged 18 or over.<br><br><img src='image/set_8.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>A family goes on a tour of Italy in the High season. They are 2 adults and 2 children, aged 9 and 13. They spend two nights in each of Venice, Rome, Padua and Siena. They stay in 3 star hotels for the entire trip, and have two rooms (an adult room and a child room). How much tax do they pay for their trip?",
    "options": [
      "EUR 35",
      "EUR 56",
      "EUR 60",
      "EUR 65"
    ],
    "answer": 1,
    "explanation": "2 nights in Venice in a 3 star hotel, 1 room (the children are exempt) = 2x1x3 = 6 euros 2 nights in Rome in a 3 star hotel, 3 people paying (the child aged 9 is exempt) = 2x3x5 = 30 Euros 2 nights in Padua in a 3 star hotel, 2 people paying (both children exempt) = 2x2x2 = 8 euros 2 nights in Siena in the high season, 3 paying (child aged 9 exempt) = 2x3x2 = 12 euros\n\n\nSo the entire cost is the sum of these costs = 6+30+8+12 = 56 euros.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 29,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The following table shows the taxing structure for Italian city hotels: Unless specifically mentioned, assume that all of the people below are aged 18 or over.<br><br><img src='image/set_8.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Claude is comparing cities. He can either spend 7 nights in Rome in a 4 star hotel, or 8 nights in Padua in a 5 star hotel. Which of the following is the ratio between the tax he pays in Rome and the tax he pays in Padua?",
    "options": [
      "8:3",
      "7:4",
      "6:2",
      "1:4"
    ],
    "answer": 1,
    "explanation": "In Rome he pays 6 euros x 7 nights = 42 Euros. In Padua he pays 3 euros x 8 nights = 24 Euros. 42:24 = 7:4.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 30,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The following table shows the taxing structure for Italian city hotels: Unless specifically mentioned, assume that all of the people below are aged 18 or over.<br><br><img src='image/set_8.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Alice goes on a trip for 2 days to Venice in a 3 star hotel and for 3 days to Padua in a 4 star hotel. What is the percentage more tax she pays in Padua relative to Venice?",
    "options": [
      "25%",
      "50%",
      "75%",
      "100%"
    ],
    "answer": 1,
    "explanation": "A 3 star hotel in Venice for 2 days costs Alice 6 Euros. 3 days in a 4 star hotel in Padua costs 9 Euros. This is 50% more in Padua than in Venice.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 31,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The following table shows the taxing structure for Italian city hotels: Unless specifically mentioned, assume that all of the people below are aged 18 or over.<br><br><img src='image/set_8.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>How long does Reuben have to stay in a 4 star hotel in Rome so that the tax would be less than or equal to the tax he incurs if staying the same length of time in a 4 star hotel in Padua?",
    "options": [
      "10 days",
      "15 days",
      "20 days",
      "25 days"
    ],
    "answer": 2,
    "explanation": "The maximum cost of tax in a 4 star hotel in Rome is 6 euros x 10 nights = 60 EUR. Up until this point it will always be cheaper in Padua. In Padua the cost for a 4 star hotel is 3 euros a night, therefore after 20 days the cost of the Padua hotel is equal to the cost of a stay of equivalent duration in Rome. SET 9",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 32,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Peter is building a house that contains rooms of different sizes. The sitting room is 10m x 20m, the hallway is 3m x 10m, and the master bedroom is 15m x 15m. In addition, the house has another square-shaped bedroom, a kitchen and a bathroom.<br><br><img src='image/set_9.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Assuming that the second bedroom walls are 60% of the length of the master bedroom, what is the area of the second bedroom?",
    "options": [
      "64 m2",
      "81 m2",
      "100 m2",
      "121 m2"
    ],
    "answer": 1,
    "explanation": "First find the wall length: 15m x 0.6 = 9m. Therefore, the area of the room is 9m x 9m = 81 m2",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 33,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Peter is building a house that contains rooms of different sizes. The sitting room is 10m x 20m, the hallway is 3m x 10m, and the master bedroom is 15m x 15m. In addition, the house has another square-shaped bedroom, a kitchen and a bathroom.<br><br><img src='image/set_9.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Suppose the kitchen has a floor area of 100 m2 and the bathroom has a floor area of 4 m2, and the second bedroom has the floor area calculated in the previous question. What percentage of the area of the house is taken up by the master bedroom?",
    "options": [
      "30%",
      "35%",
      "40%",
      "45%"
    ],
    "answer": 1,
    "explanation": "The area of the house is 100 + 4 + (10 x 20) + (3 x 10) + (15 x 15) + 81 = 640 m2. The area of the master bedroom is 225 m2, so the percentage area is 225/640 = 35%.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 34,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Peter is building a house that contains rooms of different sizes. The sitting room is 10m x 20m, the hallway is 3m x 10m, and the master bedroom is 15m x 15m. In addition, the house has another square-shaped bedroom, a kitchen and a bathroom.<br><br><img src='image/set_9.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>After building the house, Peter decides to add an extension to the sitting room, turning it into a combined lounge and dining room. He extends the room by increasing the length of the longer wall by 5 metres. The lounge is 3 metres high. How much extra wall (in m2) does Peter have to build, assuming that he is extending directly outwards and cannot move or re-use any wall?",
    "options": [
      "15m2",
      "30m2",
      "45m2",
      "60m2"
    ],
    "answer": 3,
    "explanation": "The extra wall that is needed is the amount to extend both walls plus the new end wall. The 20m wall is extended to 25m, and it is of height 3m, thus 5 x 3 = 15 m2 is required. Then the same amount of wall is needed for the other side, thus 2 x 15 = 30 m2. Then the back wall must be rebuilt, size = 10m x 3m = 30 m2. Sum these areas to a total of 60 m2.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 35,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Peter is building a house that contains rooms of different sizes. The sitting room is 10m x 20m, the hallway is 3m x 10m, and the master bedroom is 15m x 15m. In addition, the house has another square-shaped bedroom, a kitchen and a bathroom.<br><br><img src='image/set_9.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>A larger extension is considered, and two builders offer Peter separate quotes. The first builder offers to build wall at a cost of £15 per m2, but there is also a flat fee of £200 just for starting the job. The second builder offers to build wall at a cost of £16 per m2 but with no flat fee at the start. If Peter builds 300 m2 of wall, what is the ratio of builder 1 cost to builder 2 cost (to 3 s.f.)",
    "options": [
      "1.00:1.00",
      "1.00:1.02",
      "1.02:1.00",
      "2.00:3.00"
    ],
    "answer": 1,
    "explanation": "Builder 1 costs: (15 x 300) + 200 = £4,700 Builder 2 costs: (16 x 300) = £4,800. Therefore the requested ratio is 47:48, which is 1:1.02, to 3 s.f. SET 10",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 36,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The table below shows the service prices for competing mobile phone plans A-D. Any SMSs or call minutes beyond those free with the plan are charged individually at listed price.<br><br><img src='image/set_10.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>John buys Plan B for one month and calls for 15 minutes and sends 207 SMSs. How much does he pay this month?",
    "options": [
      "£5.00",
      "£6.60",
      "£7.80",
      "£9.40",
      "£11.20"
    ],
    "answer": 3,
    "explanation": "200 SMSs are free, so he pays for 7. £5 monthly fee + 7 SMSs x £0.20 + 15 minutes x £0.20 = £9.40",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 37,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The table below shows the service prices for competing mobile phone plans A-D. Any SMSs or call minutes beyond those free with the plan are charged individually at listed price.<br><br><img src='image/set_10.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Robin buys Plan A, and makes no calls. How many SMSs can Robin send before Plan B would have been cheaper?",
    "options": [
      "6",
      "21",
      "51",
      "101",
      "121"
    ],
    "answer": 2,
    "explanation": "Plan A SMSs cost 10p each. Plan B minimum cost is £5 monthly fee, but then provides 200 free SMSs. 51 SMSs at £0.10 each cost £5.10, which is more than £5. Thus, sending 51 SMSs would be cheaper on Plan B (sending 50 would be the same price on each plan).",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 38,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The table below shows the service prices for competing mobile phone plans A-D. Any SMSs or call minutes beyond those free with the plan are charged individually at listed price.<br><br><img src='image/set_10.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Mary wants to call for 5 minutes and send 5 SMSs every day in September. Which plan should she choose for the lowest cost?",
    "options": [
      "A",
      "B",
      "C",
      "D",
      "A and B are both the lowest"
    ],
    "answer": 3,
    "explanation": "To answer this question, work out the cost of each plan. 5 minutes x 30 days = 150 minutes. 150 minutes cost: 150 x £0.10 = £15 on Plan A, 150 x £0.20 = £30 on Plan B, (150-100 free minutes) x £0.20 = £10 on Plan C and 150 x £0.00 = £0 on Plan D. Including the monthly fee, the cost to call becomes A: £15, B: £35, C: £20 and D: £15. All SMSs cost on Plan A but not D, so D is cheapest. Note that we did not have to calculate the cost of texts in order to get the answer. If you like, you could work out the cost of the SMSs on each plan too, but if you notice that after calculating the cost of calls and monthly fees Plan A and Plan D come out at the same price, it is apparent that Plan D will be cheaper as SMSs are free, and this will save time.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 39,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The table below shows the service prices for competing mobile phone plans A-D. Any SMSs or call minutes beyond those free with the plan are charged individually at listed price.<br><br><img src='image/set_10.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Evan buys Plan B but Chris buys Plan C. Which of these options is cheaper for Evan than Chris per month?",
    "options": [
      "They each call for 29 minutes and send no SMSs.",
      "They each call for 26 minutes and send 174 SMSs",
      "They each send 351 SMSs and call for 8 minutes.",
      "They each call for 4 minutes every day of the month.",
      "They each send 223 SMSs and make no calls."
    ],
    "answer": 4,
    "explanation": "They each send 223 SMSs and make no calls. Option E is cheaper for Evan than Chris: For Plan B (223 SMSs – 200 free SMSs) x £0.20 = £4.60, so with the £5 monthly fee the total cost is £9.60. For Plan C all 223 SMSs are within the free limit, but the monthly fee is £10, so Chris pays more. In option A, Evan pays £10.80, whilst Chris pays just the £10 monthly fee. In option B, Evan pays £10.20, whilst Chris still just pays the monthly fee of £10. In option C, Evan pays £36.80, whilst Chris still pays only the monthly fee of £10 (this is the biggest saving Chris makes relative to Evan out of all the options). In option D, Evan pays between £27.40 and £29.80, depending on which month (and whether there are 28, 30 or 31 days in it), whilst Chris pays between £12.40 and £14.80, again dependent on which month.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 40,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The table below shows the service prices for competing mobile phone plans A-D. Any SMSs or call minutes beyond those free with the plan are charged individually at listed price.<br><br><img src='image/set_10.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Rachel doesn’t send any SMSs and buys Plan C. What is the maximum percentage by which she can exceed her free call minutes allowance without Plan D being cheaper?",
    "options": [
      "5 %",
      "10 %",
      "25 %",
      "50 %",
      "75 %"
    ],
    "answer": 2,
    "explanation": "100 minutes are free on Plan C. Plan D has unlimited minutes and costs £5 more than C per month. At 20p a minute, Rachel can call for 25 minutes for £5, so can exceed her free minutes by 25 %, at which point Plan D is the same price. If she exceeds the free minutes allowance by any more than this, then plan D would be cheaper. SET 11",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 41,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>A muﬃn recipe calls for ingredients in the amounts listed in the table below: 1 cup = 2.5 decilitres (dl); 1 tablespoon = 15 millilitres (ml); 1 cubic decimetre (dm3) = 1 litre<br><br><img src='image/set_11.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>How many cups of ingredients are called for overall by the recipe (to 2 decimal places)?",
    "options": [
      "3.54",
      "3.66",
      "3.74",
      "3.82",
      "3.86"
    ],
    "answer": 2,
    "explanation": "4 tablespoons is 4 x 15 ml = 60 ml. 250 ml is 1 cup, so 4 tablespoons is 60 ml/250 ml = 0.24 cups. 2 cups + 1 cup + ½ cup + 0.24 cups = 3.74 cups.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 42,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>A muﬃn recipe calls for ingredients in the amounts listed in the table below: 1 cup = 2.5 decilitres (dl); 1 tablespoon = 15 millilitres (ml); 1 cubic decimetre (dm3) = 1 litre<br><br><img src='image/set_11.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>What weight ratio of milk to butter does the recipe call for (to 1 decimal place)?",
    "options": [
      "2.3:1",
      "2.7:1",
      "3.1:1",
      "3.4:1",
      "3.9:1"
    ],
    "answer": 0,
    "explanation": "First calculate the weight of butter called for by the recipe: 4 tablespoons = 60 ml = 0.06 litres = 0.06 dm3 (the question states that 1dm3 = 1 litre). Weight of butter: 950 grams/dm3 x 0.06 dm3 = 57 grams. Next, calculate the weight of milk called for by the recipe: ½ cup = 1.25 dl = 0.125 litres = 0.125 dm3. Weight of milk: 1050 grams/dm3 x 0.125 dm3 = 131.25 grams.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 43,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>A muﬃn recipe calls for ingredients in the amounts listed in the table below: 1 cup = 2.5 decilitres (dl); 1 tablespoon = 15 millilitres (ml); 1 cubic decimetre (dm3) = 1 litre<br><br><img src='image/set_11.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Jane wants to use only a ½ cup measure for baking. What is the smallest number of cups of flour she would need for it to be possible to measure all required ingredients in ½ cups?",
    "options": [
      "2",
      "10",
      "25",
      "30",
      "50"
    ],
    "answer": 4,
    "explanation": "Any whole number multiple of flour, sugar or milk can be measured with a ½ cup. 4 tablespoons is 60 ml, ½ cup is 125 ml. The least common multiple of 60 and 125 is 1500, representing the smallest possible amount of butter that can be measured with half-cup measures. 1500 grams of butter makes 25 batches of muﬃns, which would require 25 x 2 cups = 50 cups of flour. Thus, the weight ratio of Milk:Butter is 131.25/57:1 = 2.3:1.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 44,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>A muﬃn recipe calls for ingredients in the amounts listed in the table below: 1 cup = 2.5 decilitres (dl); 1 tablespoon = 15 millilitres (ml); 1 cubic decimetre (dm3) = 1 litre<br><br><img src='image/set_11.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>To make pancakes, the amount of flour and milk are reversed. What is the average density of pancake batter, assuming that there are no interactions that change the densities of the individual ingredients when they are mixed?",
    "options": [
      "930 grams/dm3",
      "970 grams/dm3",
      "1,050 grams/dm3",
      "1,070 grams/dm3",
      "1,100 grams/dm3"
    ],
    "answer": 0,
    "explanation": "The recipe will have: 2 cups of milk = 500 ml = 0.5 dm3 1 cup of sugar = 250 ml = 0.25 dm3 ½ cup of flour = 125 ml = 0.125 dm3 4 tablespoons of butter = 60 ml = 0.06 dm3.\n\n\nTherefore the volume of the batter is 0.5 dm3 + 0.25 dm3 + 0.125 dm3 + 0.06 dm3 = 0.935 dm3. Now, to calculate the density of the batter, multiply the density of each ingredient by the proportion of the batter it makes up, and then add up these figures, as follows: (1050 grams/dm3 milk x 0.5/0.935) + (850 grams/dm3 sugar x 0.25/0.935) + (600 grams/dm3 flour x 0.125/0.935) + (950 grams/dm3 butter x 0.06/0.935) = 561.5 grams/dm3 + 227.3 grams/dm3 + 80.2 grams/dm3 + 61.0 grams/dm3 = 930 grams/dm3",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 45,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>A muﬃn recipe calls for ingredients in the amounts listed in the table below: 1 cup = 2.5 decilitres (dl); 1 tablespoon = 15 millilitres (ml); 1 cubic decimetre (dm3) = 1 litre<br><br><img src='image/set_11.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>If Peter wanted to make 10 muﬃns weighing 100 grams each, how much butter would he need to 1 decimal place? Assume that the finished product weighs the same as the initial dough.",
    "options": [
      "55.1 grams",
      "62.3 grams",
      "70.7 grams",
      "76.4 grams",
      "81.3 grams"
    ],
    "answer": 4,
    "explanation": "10 muﬃns x 100 grams = 1,000 grams batter required. The recipe calls for: 2 cups flour = 5 dl = 0.5 dm3 flour. Weight of the flour is 0.5 dm3 x 600 grams/dm3 = 300 grams. 1 cup sugar = 2.5 dl = 0.25 dm3 sugar. Weight of the sugar is 0.25 dm3 x 850 grams/dm3 = 212.5 grams. From question 42 we remember that the weight of the milk as called for by the recipe is 131.25 grams and weight of the butter is 57 grams. Thus the overall weight of the batter is 300 + 212.5 + 131.25 + 57 = 700.75 grams. 700.75/1,000 grams batter = 57/B grams butter, where B is the amount of butter required in 1,000g batter. B = 81.3 grams butter.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 46,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>A muﬃn recipe calls for ingredients in the amounts listed in the table below: 1 cup = 2.5 decilitres (dl); 1 tablespoon = 15 millilitres (ml); 1 cubic decimetre (dm3) = 1 litre<br><br><img src='image/set_11.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>When Peter’s ten 100 gram muﬃns are done, assuming no losses to cooking, what percentage of the weight will be made up by flour, to the nearest whole number?",
    "options": [
      "35 %",
      "39 %",
      "43 %",
      "46 %",
      "52 %"
    ],
    "answer": 2,
    "explanation": "700.75/1,000 grams batter = 300/F grams flour, where F is the amount of flour required to make 1,000 grams of muﬃn. F = 428.11 grams. 428.11 grams/1000 grams = 0.428 = 43 % to the nearest whole number. SET 12",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 47,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>New ocean crust is formed at spreading ridges. The area of the crust formed is dependent on temperature. The volume of crust formed in a given time interval depends on the crust cross sectional area and on the spreading rate (the rate at which newly formed crust moves away from the spreading ridge, an independent variable). The relationship between crust volume formed in a time interval, cross sectional area and spreading rate is: Crust volume per time = cross sectional area x spreading rate The table below gives the crustal cross sectional area, spreading rate and temperature at Locations A-D:<br><br><img src='image/set_12.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Assuming that the trends in this table can be reliably extrapolated, at which temperature would the crust volume formed in a year be expected to be 0 km3?",
    "options": [
      "1,200 °C",
      "1,400 °C",
      "1,600 °C",
      "1.800 °C",
      "2,000 °C"
    ],
    "answer": 0,
    "explanation": "The trend shows a 10 km2 decrease in thickness for every 100 °C decrease in temperature. 10 km2 thickness is 1,300 °C, so extrapolating the trend gives 0 km2 thickness at 1,200 °C.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 48,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>New ocean crust is formed at spreading ridges. The area of the crust formed is dependent on temperature. The volume of crust formed in a given time interval depends on the crust cross sectional area and on the spreading rate (the rate at which newly formed crust moves away from the spreading ridge, an independent variable). The relationship between crust volume formed in a time interval, cross sectional area and spreading rate is: Crust volume per time = cross sectional area x spreading rate The table below gives the crustal cross sectional area, spreading rate and temperature at Locations A-D:<br><br><img src='image/set_12.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>If the temperature at Location A increased by 50%, what would be the spreading rate?",
    "options": [
      "25 mm/year",
      "50 mm/year",
      "100 mm/year",
      "150 mm/year",
      "225 mm/year"
    ],
    "answer": 3,
    "explanation": "Spreading rate is not affected by temperature, it is an independent variable. This question is designed to test your attention to detail and reinforce the importance of\n\n\nreading questions properly. Ensure you constantly pay attention to what the question is asking.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 49,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>New ocean crust is formed at spreading ridges. The area of the crust formed is dependent on temperature. The volume of crust formed in a given time interval depends on the crust cross sectional area and on the spreading rate (the rate at which newly formed crust moves away from the spreading ridge, an independent variable). The relationship between crust volume formed in a time interval, cross sectional area and spreading rate is: Crust volume per time = cross sectional area x spreading rate The table below gives the crustal cross sectional area, spreading rate and temperature at Locations A-D:<br><br><img src='image/set_12.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>What volume of crust is formed in a year at Location B?",
    "options": [
      "400 m3",
      "400 °C km3",
      "40,000 km3",
      "400,000 m3",
      "560,000 °C km3"
    ],
    "answer": 3,
    "explanation": "Crustal volume per year = 20 km2 crustal thickness x 20 mm/year spreading rate x 1 year = 20,000,000,000,000 mm2 x 20 mm = 400,000,000,000,000 mm3 = 400,000 m3",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 50,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>New ocean crust is formed at spreading ridges. The area of the crust formed is dependent on temperature. The volume of crust formed in a given time interval depends on the crust cross sectional area and on the spreading rate (the rate at which newly formed crust moves away from the spreading ridge, an independent variable). The relationship between crust volume formed in a time interval, cross sectional area and spreading rate is: Crust volume per time = cross sectional area x spreading rate The table below gives the crustal cross sectional area, spreading rate and temperature at Locations A-D:<br><br><img src='image/set_12.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>If the spreading rates of Locations A and C were exchanged, what would be the ratio of crust volume formed at the two locations each year (to 1 decimal place)?",
    "options": [
      "1:1.0",
      "1:3.3",
      "1:4.5",
      "1:5.6",
      "1:6.0"
    ],
    "answer": 2,
    "explanation": "In answering this question, it is not necessary to use the same units for crustal thickness and spreading rate, as long as we use the same units for the crustal thickness from both locations, and likewise for the spreading rate. Location A = 10 x 100 = 1,000. Location C = 30 x 150 = 4,500. A:C = 1:4,500/1,000 = 1:4.5",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 51,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>New ocean crust is formed at spreading ridges. The area of the crust formed is dependent on temperature. The volume of crust formed in a given time interval depends on the crust cross sectional area and on the spreading rate (the rate at which newly formed crust moves away from the spreading ridge, an independent variable). The relationship between crust volume formed in a time interval, cross sectional area and spreading rate is: Crust volume per time = cross sectional area x spreading rate The table below gives the crustal cross sectional area, spreading rate and temperature at Locations A-D:<br><br><img src='image/set_12.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>If the same crustal volume was produced in the same amount of time at 2 locations, E with temperature 1300 °C and F with temperature 1450 °C, how many percent faster/slower was the spreading rate at location E than F?",
    "options": [
      "250 % faster",
      "25 % slower",
      "400 % faster",
      "40 % slower",
      "500 % faster"
    ],
    "answer": 0,
    "explanation": "Crustal volume per time = crustal thickness x spreading rate. Crustal thickness at E is 10 km2 and at F is 25 km2. Crustal volume per time is equal, so 10 km2 x spreading rate E = 25 km2 x spreading rate F. Therefore the spreading rate at E = 2.5 the spreading rate at F. Thus, it is 250 % faster.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 52,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>New ocean crust is formed at spreading ridges. The area of the crust formed is dependent on temperature. The volume of crust formed in a given time interval depends on the crust cross sectional area and on the spreading rate (the rate at which newly formed crust moves away from the spreading ridge, an independent variable). The relationship between crust volume formed in a time interval, cross sectional area and spreading rate is: Crust volume per time = cross sectional area x spreading rate The table below gives the crustal cross sectional area, spreading rate and temperature at Locations A-D:<br><br><img src='image/set_12.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>If the temperature at Location D was decreased by 10%, what would be the crustal volume formed in 3 years?",
    "options": [
      "2,000 m3",
      "2,000 °C km3",
      "3,200 km3",
      "3, 200,000 m3",
      "3, 600,000,000,000,000 mm3"
    ],
    "answer": 4,
    "explanation": "Temperature at D is 1,600 °C, decreased by 10 % it would be 1440 °C. From the trend in temperature and crustal thickness this corresponds to a crustal thickness of 24 km2. Crustal volume per 3 years = 24 km2 crustal thickness x 50 mm/year x 3 years = 24,000,000,000,000 mm2 x 150 mm = 3,600,000,000,000,000 mm3 SET 13",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 53,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>A new drug to treat vision problems in diabetics is tested on volunteers. It is also tested on control groups of diabetics without vision problems and healthy volunteers with or without vision problems. Some volunteers are given one inactive placebo pill which they are told is the drug. There are the same number of people in each group testing either the drug or placebo, as indicated below. The table below shows the number of volunteers in Groups A-D who self- reported improved vision and their measured average accuracy reading letters before and after taking the drug or a placebo. Group A: 50 diabetics with vision problems (25 in each group) Group B: 46 diabetics without vision problems (23 in each group) Group C: 44 healthy volunteers with vision problems (22 in each group) Group D: 48 healthy volunteers without vision problems (24 in each group)<br><br><img src='image/set_13.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>What is the average percentage of participants who self-report vision improvements after receiving an inactive pill to the nearest percent?",
    "options": [
      "26 %",
      "31 %",
      "32 %",
      "33 %",
      "36 %"
    ],
    "answer": 2,
    "explanation": "A: 9/25, B: 6/23, C: 7/22, D: 8/24. (9+6+7+8)/(25+23+22+24) = 30/94 = 32 % to the nearest whole number.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 54,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>A new drug to treat vision problems in diabetics is tested on volunteers. It is also tested on control groups of diabetics without vision problems and healthy volunteers with or without vision problems. Some volunteers are given one inactive placebo pill which they are told is the drug. There are the same number of people in each group testing either the drug or placebo, as indicated below. The table below shows the number of volunteers in Groups A-D who self- reported improved vision and their measured average accuracy reading letters before and after taking the drug or a placebo. Group A: 50 diabetics with vision problems (25 in each group) Group B: 46 diabetics without vision problems (23 in each group) Group C: 44 healthy volunteers with vision problems (22 in each group) Group D: 48 healthy volunteers without vision problems (24 in each group)<br><br><img src='image/set_13.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>By what ratio is visual accuracy in reading letters increased by the drug in diabetics with poor sight relative to healthy volunteers with poor sight (to 2 decimal places)?",
    "options": [
      "1:0.78",
      "3.50:1",
      "4.21:1",
      "4.50:1",
      "4.83:1"
    ],
    "answer": 4,
    "explanation": "In Group A, drug-takers visual accuracy is 36%/27% = 33.33% improved. In Group C, drug-takers visual accuracy is 31%/29% = 6.90% improved. A:C = 33.33%/6.90%:1 = 4.83:1.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 55,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>A new drug to treat vision problems in diabetics is tested on volunteers. It is also tested on control groups of diabetics without vision problems and healthy volunteers with or without vision problems. Some volunteers are given one inactive placebo pill which they are told is the drug. There are the same number of people in each group testing either the drug or placebo, as indicated below. The table below shows the number of volunteers in Groups A-D who self- reported improved vision and their measured average accuracy reading letters before and after taking the drug or a placebo. Group A: 50 diabetics with vision problems (25 in each group) Group B: 46 diabetics without vision problems (23 in each group) Group C: 44 healthy volunteers with vision problems (22 in each group) Group D: 48 healthy volunteers without vision problems (24 in each group)<br><br><img src='image/set_13.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>If there are 10 women in Group A and their average accuracy was 45 % after receiving the drug, what was the average accuracy of the men in the group after receiving the drug?",
    "options": [
      "16 %",
      "27 %",
      "30 %",
      "36 %",
      "41 % Group A: 50 diabetics with vision problems (25 in each group) Group B: 46 diabetics without vision problems (23 in each group) Group C: 44 healthy volunteers with vision problems (22 in each group) Group D: 48 healthy volunteers without vision problems (24 in each group)"
    ],
    "answer": 2,
    "explanation": "10 women and 15 men have 45 % and unknown (P %) accuracy, respectively.\n\n\nAll 25 have an average of 36 % accuracy. (10/25 x 45) + (15/25 x P) = 36. P=30.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 56,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>A new drug to treat vision problems in diabetics is tested on volunteers. It is also tested on control groups of diabetics without vision problems and healthy volunteers with or without vision problems. Some volunteers are given one inactive placebo pill which they are told is the drug. There are the same number of people in each group testing either the drug or placebo, as indicated below. The table below shows the number of volunteers in Groups A-D who self- reported improved vision and their measured average accuracy reading letters before and after taking the drug or a placebo. Group A: 50 diabetics with vision problems (25 in each group) Group B: 46 diabetics without vision problems (23 in each group) Group C: 44 healthy volunteers with vision problems (22 in each group) Group D: 48 healthy volunteers without vision problems (24 in each group)<br><br><img src='image/set_13.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>If the general population has 100 000 diabetics with vision problems, how many of these people would be expected to self-report improvements in their vision because of the effects of the drug?",
    "options": [
      "24,000 people",
      "32,000 people",
      "36,000 people",
      "60,000 people",
      "96,000 people"
    ],
    "answer": 0,
    "explanation": "Diabetics with vision problems correspond to Group A. In Group A, 15 of 25 volunteers reported better vision after taking the drug, but 9 of 25 volunteers taking a placebo also reported vision improvement. This suggests only 6 of 25 had reported improvements in their vision thanks to the effects of the drug. 6/25 x 100,000 people = 24,000 people.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 57,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>A new drug to treat vision problems in diabetics is tested on volunteers. It is also tested on control groups of diabetics without vision problems and healthy volunteers with or without vision problems. Some volunteers are given one inactive placebo pill which they are told is the drug. There are the same number of people in each group testing either the drug or placebo, as indicated below. The table below shows the number of volunteers in Groups A-D who self- reported improved vision and their measured average accuracy reading letters before and after taking the drug or a placebo. Group A: 50 diabetics with vision problems (25 in each group) Group B: 46 diabetics without vision problems (23 in each group) Group C: 44 healthy volunteers with vision problems (22 in each group) Group D: 48 healthy volunteers without vision problems (24 in each group)<br><br><img src='image/set_13.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>When the drug dose was doubled, the placebo groups showed no change in numbers or accuracy, but the number of Group A volunteers who reported improved vision jumped to 18. Assuming that drug effectiveness is dose dependent, what percent of volunteers in Group A taking the drug would be expected to self-report improved vision if the dose was tripled?",
    "options": [
      "54.0 %",
      "72.0 %",
      "84.0 %",
      "90.0 %",
      "100.0 %"
    ],
    "answer": 3,
    "explanation": "The placebo group showed no change, so only the volunteers being affected by the drug compound will see greater improvements to their vision. 15 – 9 = 6 volunteers affected by drug originally. 200% of the dose gave (18-9)/6 = 1.5 = 150 % the number of people with drug- related improvements. 300% of the dose will thus give 300 % / 200 % x 150 % = 225 % the number of people. 6 volunteers x 225% = 13.5 volunteers. (9+13.5)/25 volunteers = 22.5/25 volunteers = 90.0 % of volunteers.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 58,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>A new drug to treat vision problems in diabetics is tested on volunteers. It is also tested on control groups of diabetics without vision problems and healthy volunteers with or without vision problems. Some volunteers are given one inactive placebo pill which they are told is the drug. There are the same number of people in each group testing either the drug or placebo, as indicated below. The table below shows the number of volunteers in Groups A-D who self- reported improved vision and their measured average accuracy reading letters before and after taking the drug or a placebo. Group A: 50 diabetics with vision problems (25 in each group) Group B: 46 diabetics without vision problems (23 in each group) Group C: 44 healthy volunteers with vision problems (22 in each group) Group D: 48 healthy volunteers without vision problems (24 in each group)<br><br><img src='image/set_13.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Which of the following statements is supported by the data in the table?",
    "options": [
      "The placebo is more effective than the drug.",
      "The drug acts to improve vision in diabetics and healthy volunteers.",
      "Volunteers who see well are more motivated to improve vision than those with vision problems.",
      "Thinking you have taken a drug to improve vision improves your vision.",
      "The data are inconclusive."
    ],
    "answer": 3,
    "explanation": "D is supported, because in all groups taking the placebo, there was an increase in accuracy with reading letters, suggesting better vision, and in many cases this was equivalent to the increase in those taking the drug. The data suggest that A) and B) are incorrect. Only one group showed a higher increase in accuracy amongst the placebo group, in all other groups the people taking the drug had a larger % increase in accuracy. In healthy volunteers, there was as much of an increase in accuracy amongst those taking a placebo, suggesting the drug does not have as much of an effect in healthy volunteers. Options C) and E) are relatively meaningless statements which are not supported by the data. SET 14",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 59,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Dave weighs 200 pounds and has a Basal Metabolic Rate (BMR) of 2000 calories. Elizabeth weighs 140 pounds and has a BMR of 1500 calories. The table below shows the calorific value of the foods they eat:\n\n\nTo lose one pound of fat requires a 3500 calorie deficit, obtained by eating fewer calories than the BMR or burning calories by exercising. Running burns 5 calories per hour per pound you weigh at any running speed. Cycling burns calories according to the following relationship, where M is mph cycling speed: Calories burned per mile = 50 calories + (5 calories x (M-10))<br><br><img src='image/set_14.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Dave wants his workout to take one hour on a 5 mile track. What is the maximum number of calories he can burn by running or cycling?",
    "options": [
      "Burn 125 calories running",
      "Burn 125 calories cycling",
      "Burn 1,000 calories running",
      "Burn 1,000 calories cycling",
      "Burn 1,250 calories running"
    ],
    "answer": 2,
    "explanation": "5 calories x 200 pounds x 1 hour = 1000 calories running.\n\n\nCycling burns 50 calories + (5 calories x -5) for each mile = 25 calories per mile. Cycling 5 miles gives a total burn 125 calories, which is less than the amount burned running. Thus, the maximum calorie burn comes from running, which will burn 1000 calories.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 60,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Dave weighs 200 pounds and has a Basal Metabolic Rate (BMR) of 2000 calories. Elizabeth weighs 140 pounds and has a BMR of 1500 calories. The table below shows the calorific value of the foods they eat:\n\n\nTo lose one pound of fat requires a 3500 calorie deficit, obtained by eating fewer calories than the BMR or burning calories by exercising. Running burns 5 calories per hour per pound you weigh at any running speed. Cycling burns calories according to the following relationship, where M is mph cycling speed: Calories burned per mile = 50 calories + (5 calories x (M-10))<br><br><img src='image/set_14.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Dave doesn’t want to eat less than his BMR and can only run for 30 minutes a day, but cycles 20 miles every day in an hour. How long will it take him to lose 10 pounds?",
    "options": [
      "5 days",
      "7 days",
      "10 days",
      "14 days",
      "30 days"
    ],
    "answer": 3,
    "explanation": "Losing 10 pounds requires a 35 000 calorie deficit. 30 min run: 200 pounds x 0.5 hours x 5 calories = 500 calories. 20 mile cycle at 20 mph: 50 calories + (5 calories/mph x 10 mph) = 100 calories/mile for 20 miles = 2,000 calories. Daily burn is 2500 calories. 35,000/2,000 calories per day = 14 days taken to lose 10 pounds.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 61,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Dave weighs 200 pounds and has a Basal Metabolic Rate (BMR) of 2000 calories. Elizabeth weighs 140 pounds and has a BMR of 1500 calories. The table below shows the calorific value of the foods they eat:\n\n\nTo lose one pound of fat requires a 3500 calorie deficit, obtained by eating fewer calories than the BMR or burning calories by exercising. Running burns 5 calories per hour per pound you weigh at any running speed. Cycling burns calories according to the following relationship, where M is mph cycling speed: Calories burned per mile = 50 calories + (5 calories x (M-10))<br><br><img src='image/set_14.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Elizabeth and Dave both want to lose 10% of their body weight without dieting or cycling. What is the ratio of minutes a day Elizabeth would have to run to those Dave would have to run to achieve their goal at the same time to 1 decimal place?",
    "options": [
      "1:0.5",
      "1:0.7",
      "1:1.0",
      "1:1.4",
      "1:2.0"
    ],
    "answer": 2,
    "explanation": "Both their weight loss goal and calories burned running are linearly proportional to weight. Thus, they need to run for the same amount of time in order to achieve their goals.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 62,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Dave weighs 200 pounds and has a Basal Metabolic Rate (BMR) of 2000 calories. Elizabeth weighs 140 pounds and has a BMR of 1500 calories. The table below shows the calorific value of the foods they eat:\n\n\nTo lose one pound of fat requires a 3500 calorie deficit, obtained by eating fewer calories than the BMR or burning calories by exercising. Running burns 5 calories per hour per pound you weigh at any running speed. Cycling burns calories according to the following relationship, where M is mph cycling speed: Calories burned per mile = 50 calories + (5 calories x (M-10))<br><br><img src='image/set_14.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>If Elizabeth eats cereal for breakfast, a sandwich for lunch, chicken and vegetables for dinner and does no exercise, in how many full days will she have reached her goal of 10% weight-loss?",
    "options": [
      "327 days",
      "354 days",
      "372 days",
      "416 days",
      "435 days"
    ],
    "answer": 0,
    "explanation": "10% of 140 pounds is 14 pounds of weight, thus this is how much weight she wishes to lose. At 3,500 calories/pound she needs a 14 pounds x 3500 calories/pound = 49,000 calorie deficit. Her BMR is 1500 calories and she eats 400+500+250+200=1,350 calories per day, so her daily calorie deficit is 1,500 calories-1,350 calories = 150 calories. It will take her 49 000 calories/150 calories per day = 326.67 days to reach her goal (327 to the nearest day).",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 63,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Dave weighs 200 pounds and has a Basal Metabolic Rate (BMR) of 2000 calories. Elizabeth weighs 140 pounds and has a BMR of 1500 calories. The table below shows the calorific value of the foods they eat:\n\n\nTo lose one pound of fat requires a 3500 calorie deficit, obtained by eating fewer calories than the BMR or burning calories by exercising. Running burns 5 calories per hour per pound you weigh at any running speed. Cycling burns calories according to the following relationship, where M is mph cycling speed: Calories burned per mile = 50 calories + (5 calories x (M-10))<br><br><img src='image/set_14.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>If Elizabeth also began cycling 10 miles in 1 hour every day, how much faster would she reach her goal than in question 62?",
    "options": [
      "1.00",
      "2.50",
      "3.00",
      "3.33",
      "4.33"
    ],
    "answer": 4,
    "explanation": "10 miles at 10 mph: 50 calories + (5 calories x 0 mph) = 50 calories/mile for 10 miles = 500 calories. She requires a 49,000 calorie deficit, as worked out in the previous question. Previously she had a daily deficit of 150 calories, now she has a daily deficit of 650 calories. Thus, she now has a calorie deficit which is 4.33 times the previous deficit, so she will reach her goal 4.33 times faster.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 64,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Dave weighs 200 pounds and has a Basal Metabolic Rate (BMR) of 2000 calories. Elizabeth weighs 140 pounds and has a BMR of 1500 calories. The table below shows the calorific value of the foods they eat:\n\n\nTo lose one pound of fat requires a 3500 calorie deficit, obtained by eating fewer calories than the BMR or burning calories by exercising. Running burns 5 calories per hour per pound you weigh at any running speed. Cycling burns calories according to the following relationship, where M is mph cycling speed: Calories burned per mile = 50 calories + (5 calories x (M-10))<br><br><img src='image/set_14.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Elizabeth eats one chocolate everyday; 3 times as much chicken as chocolate and twice as much cereal as chicken. If she exchanged these foods with 3 different foods in the table in the same proportions, what is the ratio of her rate of weight change before and after the switch, assuming she is trying to obtain the lowest weight she can?",
    "options": [
      "1:1",
      "1:2",
      "1:5",
      "2:1",
      "5:1"
    ],
    "answer": 4,
    "explanation": "1 chocolate is the least she can eat, which means she eats 3 pieces of chicken and 6 bowls of cereal. 1x350 calories + 3x250 calories + 6x400 calories = 3,500 calories. The lowest calorie arrangement of the 3 other foods is 1 lasagna, 3 vegetables and 6 apples. 1x700 calories + 3x200 calories + 6x100 calories = 1,900 calories. She has a 3,500 calories per day – 1500 calorie BMR = 2,000 calorie surplus before and 400 calorie surplus after. 2,000 calories:400 calories = 5:1. SET 15",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 65,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Visitors to an amusement park pay for food, rides and games with coupons. Coupons can be bought individually for £1 each or in multipacks at a discounted price. A £70 wristband can gives free entry and access to all rides (but not games or food) without using coupons. The table below shows the cost in coupons for each activity:<br><br><img src='image/set_15.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Susan buys a 20 coupon multi-pack at 10 % off single coupon price. She rides the rollercoaster five times at night. What percent off did she get on the first rollercoaster ride compared to buying single day tickets (to 1 decimal place)?",
    "options": [
      "10.0 %",
      "22.5 %",
      "25.0 %",
      "32.5 %",
      "33.3 %"
    ],
    "answer": 3,
    "explanation": "Price during day with single tickets is 4 coupons x £1 = £4. Price at night with 10% off coupons is 3 coupons x £0.90 = £2.70. Thus the saving is £1.30 Hence, the % saving is £1.30/£4.00 = 0.325 = 32.5 %.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 66,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Visitors to an amusement park pay for food, rides and games with coupons. Coupons can be bought individually for £1 each or in multipacks at a discounted price. A £70 wristband can gives free entry and access to all rides (but not games or food) without using coupons. The table below shows the cost in coupons for each activity:<br><br><img src='image/set_15.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>One weekend the single coupon prices are raised 20 %. Greg wants to ride the rollercoaster 10 times, buy 3 candy floss, play a carnival game, go through the fun house 2 times and ride the swings during the day. What is the ratio of the cost with a wristband to the cost without a wristband to 2 decimal places?",
    "options": [
      "1:0.93",
      "1:0.98",
      "1:1.02",
      "1:1.10",
      "1:1.12"
    ],
    "answer": 1,
    "explanation": "Price without a wristband is £1 per coupon x 120 % = £1.20 per coupon. The number of coupons required is: 10 coupons entrance + 40 coupons for roller coaster + 6 coupons for candy floss + 1 coupon for the games + 4 coupons for the fun house + 3 coupons for the swings = 64 coupons. 64 coupons x £1.20 = £76.80. Price with a wristband: £70 and 6 coupons for candy floss + 1 coupon for the games x £1.20 = £8.40. Thus the total price with a wristband is £78.40. Therefore, the ratio is 1:£76.80/£78.40, which is 1:0.98.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 67,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Visitors to an amusement park pay for food, rides and games with coupons. Coupons can be bought individually for £1 each or in multipacks at a discounted price. A £70 wristband can gives free entry and access to all rides (but not games or food) without using coupons. The table below shows the cost in coupons for each activity:<br><br><img src='image/set_15.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Andy went to the amusement park one night. He rode the rollercoaster 50 % more times than he rode the swings, and rode the swings 20 % more times than he played carnival games. He used a whole number of coupons that were cheaper than getting a wristband. How much did Andy pay?",
    "options": [
      "£31",
      "£44",
      "£49",
      "£56",
      "£70"
    ],
    "answer": 2,
    "explanation": "Andy rode the swings 20 % more times than he played games. The smallest number of times he could have gone on the swings is 6 times (since he can’t have gone on the swings a non-integer number of times) so he played 5 games and went on the rollercoaster 9 times. At night rates, rollercoaster 9 times x 3 coupons = 27 coupons and swings 6 times x 2 coupons = 12 coupons. 39 coupons at £1 each are worth £39, which is less than the £70 wristband. If he had played 10 games, ridden the swings 12 times and rollercoaster 18 times, the wristband would have been more cost effective. This is the second cheapest\n\n\npossibility whilst still going on the swings an integer number of times (since 10 is the next multiple of 5). Thus, we know Andy must have played 5 games, been on the swings 6 times and the rollercoaster 9 times. 39 ride coupons + 5 game coupons + 5 entrance coupons = 49 coupons = £49.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 68,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Visitors to an amusement park pay for food, rides and games with coupons. Coupons can be bought individually for £1 each or in multipacks at a discounted price. A £70 wristband can gives free entry and access to all rides (but not games or food) without using coupons. The table below shows the cost in coupons for each activity:<br><br><img src='image/set_15.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Anna and James each spent one pound less than the cost of a wristband on single coupons one day at the amusement park. Anna went on the rollercoaster for half of her rides and the fun house for the rest. James went on the swings every odd ride and in the fun house every even ride. Neither of them went on any other rides or bought any food. What is the ratio of the number of rides Anna went on to the number James went on?",
    "options": [
      "1:0.78",
      "1:0.81",
      "1:1.23",
      "1:1.28",
      "1:2.56"
    ],
    "answer": 3,
    "explanation": "They got 69 coupons each for £69 pounds. They each must have spent 10 coupons at the entrance. Together the roller coaster and fun house cost 6 coupons, so Anna took 59/6 = 9 rides on each and had 5 coupons left over, since the question states she went on each ride for half her rides, we assume she did not use any of the remaining coupons, since she could only have gone on one more ride, and thus it would not have been exactly half. The fun house and swings cost 5 coupons together, so James took 59/5 = 11 rides on each and had 4 coupons left which he spent on 1 last ride on the swings. Anna took 18 rides and James 23 rides. Anna: James = 1:23/18 = 1:1.28.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 69,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Visitors to an amusement park pay for food, rides and games with coupons. Coupons can be bought individually for £1 each or in multipacks at a discounted price. A £70 wristband can gives free entry and access to all rides (but not games or food) without using coupons. The table below shows the cost in coupons for each activity:<br><br><img src='image/set_15.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>A 10-weekend season pass covers all costs in the park and is available for £1,000. Erik goes to the park one day every weekend and buys a wristband each time. On the first weekend he buys one candyfloss, and the next four weekends increases the number of candyfloss he buys by 100%, relative to the previous weekend. The four weekends after that he increases the number of candyfloss he buys by 50% each weekend, relative to the previous weekend. On the 10th weekend he is sick of candyfloss and buys none. What is the ratio of the cost without and with a season pass (to 2 decimal places)?",
    "options": [
      "0. 7 : 1",
      "0.92 : 1",
      "1 : 0.92",
      "1 : 1.15",
      "1.15 : 1"
    ],
    "answer": 4,
    "explanation": "First we calculate how much candyfloss Erik buys each weekend, using the 100% increase for the first 4 weeks, and the 50% increase thereafter as detailed in the question. Week 1: 1, 2: 2, 3: 4, 4: 8, 5: 16, 6: 24, 7: 36, 8: 54, 9: 81, 10: 0. Thus, he bought a total of 226 lots of candy floss. 226 candy floss x 2 coupons x £1 pound each = £452. Cost with season pass = £1000. Cost without pass = £700 + £452 = £1,152. SET 16",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 70,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The table shows the prices a pizzeria charges for their pizza: The pizzeria also offers three discount deals: 20% off orders from £20 - £29.99, 30% off orders from £30 - £49.99, and 50% off orders over £50. Small pizzas have 6 slices, medium pizzas have 8 slices, and large pizzas have 10 slices<br><br><img src='image/set_16.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Josh gets 2 large stuffed-crust 2 topping pan pizzas, 1 medium 3 topping Italian pizza and 3 small cheese pan pizzas. How much does he pay?",
    "options": [
      "£31.00",
      "£40.50",
      "£52.50",
      "£81.00",
      "£96.00"
    ],
    "answer": 1,
    "explanation": "2 x (£14.00 + £2.00 + 2x£2.00) + 1 x (£8.00 + 3x£1.00) + 3 x (£10.00) = £40.00 + £11.00 + £30.00 = £81.00. 50% off orders over £50 means he pays £81.00/2 = £40.50. Ratio of cost Without:With is £1152/£1000:1 = 1.15:1.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 71,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The table shows the prices a pizzeria charges for their pizza: The pizzeria also offers three discount deals: 20% off orders from £20 - £29.99, 30% off orders from £30 - £49.99, and 50% off orders over £50. Small pizzas have 6 slices, medium pizzas have 8 slices, and large pizzas have 10 slices<br><br><img src='image/set_16.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Janet bought cheese pan pizzas for the cheapest cost per slice and got £35 off as a discount deal. How many slices did she buy?",
    "options": [
      "35",
      "48",
      "50",
      "64",
      "70"
    ],
    "answer": 2,
    "explanation": "£35 is 50% of £70. £70 buys £70/£14 = 5 large cheese pan pizzas.\n\n\nLarge pizzas have 10 slices: 10 slices x 5 pizzas = 50 slices.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 72,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The table shows the prices a pizzeria charges for their pizza: The pizzeria also offers three discount deals: 20% off orders from £20 - £29.99, 30% off orders from £30 - £49.99, and 50% off orders over £50. Small pizzas have 6 slices, medium pizzas have 8 slices, and large pizzas have 10 slices<br><br><img src='image/set_16.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Joey bought some plain cheese pizzas for a total price of £60 post-discount. All the plain cheese pizzas were the same. What is the price of the one type of pizza he could NOT have bought?",
    "options": [
      "£6.00",
      "£8.00",
      "£10.00",
      "£12.00",
      "£14.00"
    ],
    "answer": 4,
    "explanation": "£60 is 50% off £120. £120 is evenly divisible by all prices of plain cheese pizzas except the large pan. Dividing £120 by the price of the large pan gives 8.571. Since Joey cannot have bought a non-integer number of pizzas, he cannot have bought this type of pizza which costs £14.00.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 73,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The table shows the prices a pizzeria charges for their pizza: The pizzeria also offers three discount deals: 20% off orders from £20 - £29.99, 30% off orders from £30 - £49.99, and 50% off orders over £50. Small pizzas have 6 slices, medium pizzas have 8 slices, and large pizzas have 10 slices<br><br><img src='image/set_16.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Lea always buys 30 slices of cheese pan pizza with 2 toppings and stuffed crust. What is the ratio of the cost of buying all large to all small pizzas (to 2 decimal places)?",
    "options": [
      "1:0.50",
      "1:0.75",
      "1:0.80",
      "1:1.00",
      "1:1.25"
    ],
    "answer": 3,
    "explanation": "30 slices is 3 large pizzas or 5 small pizzas. 3 large pan pizzas with 2 toppings and stuffed crust cost: 3 x (£14.00 + (2x£2.00) + £2.00) = £60.00. 5 small pan pizzas with 2 toppings and stuffed crust cost: 5 x (£10.00 + 2x£0.50 + £1.00) = £60.00. Large:Small ratio is 1:£60.00/£60.00 = 1:1.00",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 74,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The table shows the prices a pizzeria charges for their pizza: The pizzeria also offers three discount deals: 20% off orders from £20 - £29.99, 30% off orders from £30 - £49.99, and 50% off orders over £50. Small pizzas have 6 slices, medium pizzas have 8 slices, and large pizzas have 10 slices<br><br><img src='image/set_16.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Kate and two friends each order cheese pan pizzas (with no toppings) and get 30% off their order. They ordered the pizzas to pay the smallest price which gets this discount, but ended up with 25% more slices than they could eat. How many slices did they manage to eat?",
    "options": [
      "16",
      "18",
      "20",
      "25",
      "32"
    ],
    "answer": 0,
    "explanation": "The lowest price order over £31 is 2 small pizzas and 1 medium pizza costing £32 total. 30% off £32 = £22.40. They get 20 slices with this order, but we know that they got 25% more than they could eat. Thus, if we treat 20 slices as 125%, then 100% is the amount that they ate. 20/1.25 = 16, so this is the amount that they could eat. SET 17",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 75,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Sarah has three journalist jobs she splits her time across. The table shows a breakdown of what she earns at each job. Her salary is composed of a fixed starter wage she earns for showing up and an hourly wage on top of that. Her hourly wage increases in each job the more hours she works at that job. She must pay for her own travel expenses. Each travel cost occurs once per job she completes, and is not affected by the length of the job in hours.<br><br><img src='image/set_17.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>If Sarah works for 1 hour at each job, what will be the ratio of the earnings expressed as [Job A Earnings:Job B Earnings:Job C Earnings] (to 2 decimal places)?",
    "options": [
      "1.00:0.75:1.00",
      "1.00:1.00:0.75",
      "1.00:1.25:1.00",
      "1.00:1.33:0.75",
      "1.00:1.33:1.00"
    ],
    "answer": 4,
    "explanation": "1 hour at Job A = £10 starter - £5 travel + £10 per hour = £15. 1 hour at Job B = £5 starter - £0 travel + £15 per hour = £20. 1 hour at Job C = £5 starter - £10 travel + £20 per hour = £15. A:B:C = £15:£20:£15 = 1:1.33:1.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 76,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Sarah has three journalist jobs she splits her time across. The table shows a breakdown of what she earns at each job. Her salary is composed of a fixed starter wage she earns for showing up and an hourly wage on top of that. Her hourly wage increases in each job the more hours she works at that job. She must pay for her own travel expenses. Each travel cost occurs once per job she completes, and is not affected by the length of the job in hours.<br><br><img src='image/set_17.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Sarah worked 25 2-hour jobs, 4 1-hour jobs and 1 4-hour job for Job A in her first month. How much did she earn?",
    "options": [
      "£625.00",
      "£730.00",
      "£770.00",
      "£980.00",
      "£1,020.00"
    ],
    "answer": 2,
    "explanation": "In her first 50 hours she worked 25 2-hour jobs: 25 x (£10 - £5 + 2x£10) = 25 x £25 = £625. Her hourly wage was then increased to £10 + £5 = £15. She then worked 4 1-hour jobs: 4 x (£10 - £5 + 1x£15) = 4 x £20 = £80. Then she worked 1 4-hour job: 1 x (£10 - £5 + 4x£15) = 1 x £65 = £65. Her total earnings were £625 + £80 + £65 = £770.00",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 77,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Sarah has three journalist jobs she splits her time across. The table shows a breakdown of what she earns at each job. Her salary is composed of a fixed starter wage she earns for showing up and an hourly wage on top of that. Her hourly wage increases in each job the more hours she works at that job. She must pay for her own travel expenses. Each travel cost occurs once per job she completes, and is not affected by the length of the job in hours.<br><br><img src='image/set_17.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Sarah can work 50 2-hour jobs per month. For which single job should she work these hours to earn the most from 2 hour jobs at the end of the month?",
    "options": [
      "A",
      "B",
      "C",
      "A and B are the same",
      "B and C are the same"
    ],
    "answer": 4,
    "explanation": "For Job A, for the first 50 hours she would earn £10 an hour. Thus, for the first 25 2-hour jobs she would earn 25 x (£10 - £5 +2x£10) = £625. After 50 hours, her hourly wage would increase to £15 an hour. Thus, for the second lot of 25 2-hour jobs she would earn 25 x (£10 - £5 + 2x£15) = £875. Thus, in total she would earn £1,750. For Job B, for the 50 2-hour jobs, she would earn 50 x (£5 + 2x£15) = £1,750. She does not get the pay increase because she does not work any hours after the pay rise at 100 hours. For Job C, for the 50 2-hour jobs, she would earn 50 x (£5 - £10 + 2x£20) = £1,750. Thus, B and C are the same.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 78,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Sarah has three journalist jobs she splits her time across. The table shows a breakdown of what she earns at each job. Her salary is composed of a fixed starter wage she earns for showing up and an hourly wage on top of that. Her hourly wage increases in each job the more hours she works at that job. She must pay for her own travel expenses. Each travel cost occurs once per job she completes, and is not affected by the length of the job in hours.<br><br><img src='image/set_17.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Sarah pays 10% income tax if her monthly salary exceeds £1275. How many hours should she work in her first month for Job C, if all jobs are the average job length, to earn the highest amount possible whilst not paying tax, to the nearest half- hour?",
    "options": [
      "60.0 hours",
      "62.5 hours",
      "65.0 hours",
      "68.0 hours",
      "75.0 hours"
    ],
    "answer": 3,
    "explanation": "Average job length for Job C is 4 hours. 1 4-hour job earns: £5 starter - £10 travel + 4x£20 per hour = £75 per job. Maximum earnings £1250/£75 = 17 jobs. 17 jobs x 4 hours = 68 hours.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 79,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Sarah has three journalist jobs she splits her time across. The table shows a breakdown of what she earns at each job. Her salary is composed of a fixed starter wage she earns for showing up and an hourly wage on top of that. Her hourly wage increases in each job the more hours she works at that job. She must pay for her own travel expenses. Each travel cost occurs once per job she completes, and is not affected by the length of the job in hours.<br><br><img src='image/set_17.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>At the start of her third month, Sarah has worked 200 hours at Job C. She works 100 hours at average job length this month. How much of her month’s earnings go to 10% income tax?",
    "options": [
      "£150.00",
      "£187.50",
      "£200.00",
      "£287.50",
      "£300.00"
    ],
    "answer": 3,
    "explanation": "Hourly wage has risen twice by £5 to £30 per hour (since it rises £5 for each 100 hours worked). 100 hours/4 hour jobs = 25 jobs. For a 4 hour job she earns: £5 starter - £10 travel + 4x£30 per hour = £115 per job. 25 jobs x £115 per job = £2,875. 10% of £2,875 = £287.50. This is the amount she pays in income tax.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 80,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Sarah has three journalist jobs she splits her time across. The table shows a breakdown of what she earns at each job. Her salary is composed of a fixed starter wage she earns for showing up and an hourly wage on top of that. Her hourly wage increases in each job the more hours she works at that job. She must pay for her own travel expenses. Each travel cost occurs once per job she completes, and is not affected by the length of the job in hours.<br><br><img src='image/set_17.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Job B wants her to work a minimum of 50 hours a month for them, and Job A and Job C require that she works at least the same hours for them as she does at any other jobs she has, or no hours at all. Assuming all jobs are the average job length, which arrangement would give her maximum earnings in her first 100-hour work month?",
    "options": [
      "50 hours for A and 50 hours for B",
      "50 hours for A and 50 hours for B",
      "50 hours for B and 50 hours for C",
      "100 hours for B",
      "None of the above."
    ],
    "answer": 3,
    "explanation": "Working 50 hours for Job B earns 50 times the hourly rate plus 50 times the fixed starter wage, as jobs average 1 hour in duration. Therefore the income = (50x£15) + (50x£5) = £1,000.00. The extra 50 hours can be worked at either Job A, B or C (note that Jobs A and B have travel expenses). The same calculation for Job A gives (10x50) + (10 x 25) – (5x25) = £625.00. The same calculation for Job C gives (50x20) + (5x12.5) – (10x12.5) = £937.50. Therefore she earns most by working 100 hours for Job B. SET 18",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 81,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The table below shows the number of cars passing a toll booth going into the town centre and how many passengers the cars carried, including the drivers. It also shows the number of passengers who got off at the town’s central underground station each day.<br><br><img src='image/set_18.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Taking the underground costs £5. On Wednesdays this fare is reduced 15% and it is cheaper for some drivers to leave the car at home. How much more revenue is generated on Wednesday than the next highest grossing day?",
    "options": [
      "£1,457.75",
      "£3,537.25",
      "£5,275.75",
      "£1,1730.00",
      "£1,3187.75"
    ],
    "answer": 0,
    "explanation": "Monday has the 2nd highest number of passengers, so this will be the 2nd highest grossing day. On Monday the revenue is £5 x 2346 underground passengers = £11,730.00. On Wednesday the revenue is 3,103 x 0.85 x £5 = £1,3187.75. £13,187.75 - £11,730.00 = £1,457.75",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 82,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The table below shows the number of cars passing a toll booth going into the town centre and how many passengers the cars carried, including the drivers. It also shows the number of passengers who got off at the town’s central underground station each day.<br><br><img src='image/set_18.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>On weekdays, what is the ratio of the average number of people being driven (not driving) in cars to the average number of people riding on the underground (to 2 decimal places)?",
    "options": [
      "1:0.25",
      "1:0.78",
      "1:3.97",
      "1:7.60",
      "1:9.60"
    ],
    "answer": 2,
    "explanation": "Total number of weekday underground passengers = 2346 +1798 +3103 + 2118 + 1397 = 10,762 Total number of weekday car passengers = total passengers – number of drivers = Monday: 1873-1517=356 Tusesday: 2421-1632=789 Wednesday: 1116-987=129 Thursday: 2101-1465=636 Friday: 2822-2024 =798 356+789+129+636+798 = 2708 The average ratio is 10,762 : 2,708 = 1:3.97",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 83,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The table below shows the number of cars passing a toll booth going into the town centre and how many passengers the cars carried, including the drivers. It also shows the number of passengers who got off at the town’s central underground station each day.<br><br><img src='image/set_18.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>What is the ratio of the average number of people per car on Tuesday compared to the average number of people per car on Saturday?",
    "options": [
      "1:0.67",
      "1:0.85",
      "1:1.27",
      "1:1.33",
      "1:1.89"
    ],
    "answer": 4,
    "explanation": "Tuesday: 2,421/1,632= 1.48 Weekend: 1,339/478= 2.80. Ratio of Tuesday to Saturday = 1.48/2.8 = 1:1.89",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 84,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The table below shows the number of cars passing a toll booth going into the town centre and how many passengers the cars carried, including the drivers. It also shows the number of passengers who got off at the town’s central underground station each day.<br><br><img src='image/set_18.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>What is the ratio of the number of Underground passengers on Monday compared to that on Saturday?",
    "options": [
      "1:0.13",
      "1:0.25",
      "1:0.40",
      "1:1.50",
      "1:4.08"
    ],
    "answer": 1,
    "explanation": "This is straightforward: 2,346/576 = 4.07:1 = 1:0.25",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 85,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The table below shows the number of cars passing a toll booth going into the town centre and how many passengers the cars carried, including the drivers. It also shows the number of passengers who got off at the town’s central underground station each day.<br><br><img src='image/set_18.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>The tollbooths charge £4 per car and an additional £1 per passenger (including the driver). 80% of this payment is tax. How much tax is paid at the tollbooths next week from Monday-Friday if there are 4,219 commuters everyday split in the ratio of 2:1.7:1 - underground passenger : car passenger (including driver) : car ratio?",
    "options": [
      "£1,938.45",
      "£4,219.00",
      "£4,560.50",
      "£5,198.40",
      "£6,498.96"
    ],
    "answer": 3,
    "explanation": "There are 4,219 commuters each day (as seen by adding the total car passengers and underground passengers on any given day). For every 1 car there are 1.7 passengers and 2 underground riders. Thus, by dividing 1.7 by 3.7 and multiplying this by the total number of passengers (4219), we can calculate how many people are in cars: 1.7/3.7 x 4,219 = 1,938 people drive (to the nearest whole number, obviously there cannot be a non-integer number of people driving). Now, by dividing the number of people driving (1938) by the number of passengers, we can calculate the number of cars: 1938/1.7 = 1,140 cars. 1,140 cars x £4 = £4,560. £4,560 + 1,938x£1 = £6,498. 80% of £6,498 is £5,198.40.\n\n\nSET 19",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 86,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Music practice rooms are available seven days a week, with each day being split into three sessions: morning (8am-2pm), day (2pm-8pm) and night (8pm-2am). The table below gives the prices for the hourly rental of the music practice rooms. Some information is missing. The “two sessions” column indicates the hourly charge if two sessions are booked on the same day. NB: All prices above include VAT (25%)<br><br><img src='image/set_19.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>The hourly rate for a day session is 10% more expensive than a night session. What is the total cost, excluding the deposit, for 3 hours in the Superior room during a day session?",
    "options": [
      "£59.40",
      "£70.20",
      "£78.00",
      "£84.18",
      "£85.80"
    ],
    "answer": 4,
    "explanation": "First calculate the Superior room cost at night: 3hrs x £26.00/hr = £78.00 Now add 10%: £78 x 1.1 = £85.80",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 87,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Music practice rooms are available seven days a week, with each day being split into three sessions: morning (8am-2pm), day (2pm-8pm) and night (8pm-2am). The table below gives the prices for the hourly rental of the music practice rooms. Some information is missing. The “two sessions” column indicates the hourly charge if two sessions are booked on the same day. NB: All prices above include VAT (25%)<br><br><img src='image/set_19.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>The total cost for two 6 hour sessions in the Deluxe room is £460. How much is the deposit?",
    "options": [
      "£64",
      "£75",
      "£82",
      "£100",
      "£136"
    ],
    "answer": 3,
    "explanation": "Total cost minus deposit = 12hrs x £30/hr = £360 Deposit = £460 - £360 = £100",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 88,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Music practice rooms are available seven days a week, with each day being split into three sessions: morning (8am-2pm), day (2pm-8pm) and night (8pm-2am). The table below gives the prices for the hourly rental of the music practice rooms. Some information is missing. The “two sessions” column indicates the hourly charge if two sessions are booked on the same day. NB: All prices above include VAT (25%)<br><br><img src='image/set_19.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Mike books a Basic room and a Standard room for a full night session. The total cost is £221 including deposit. What is the hourly rate for a full night session in a Basic room?",
    "options": [
      "£12.50",
      "£13.00",
      "£15.00",
      "£16.83",
      "£18.83"
    ],
    "answer": 1,
    "explanation": "Total deposit = £10 + £25 = £35 6hrs in Standard room = 6hrs x £18/hr = £108 6hrs in Basic Room = £221 – (£108 + £35) = £78 Basic room hourly rate (2-6hrs) = £78 ÷ 6hrs = £13/hr",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 89,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Music practice rooms are available seven days a week, with each day being split into three sessions: morning (8am-2pm), day (2pm-8pm) and night (8pm-2am). The table below gives the prices for the hourly rental of the music practice rooms. Some information is missing. The “two sessions” column indicates the hourly charge if two sessions are booked on the same day. NB: All prices above include VAT (25%)<br><br><img src='image/set_19.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>The hourly rate for a morning session up to 6hrs is 5% cheaper than a night session. The deposit remains the same. A Superior room is booked for 90 minutes one morning, all costs paid up front. How much is paid at the start of the session? (Assume half hours can be booked at half the hourly rate.)",
    "options": [
      "£97.25",
      "£92.75",
      "£95.00",
      "£90.50",
      "£90.25"
    ],
    "answer": 1,
    "explanation": "1.5hrs in Superior room (night session) = 1.5hrs x £30/hr = £45 Decreased by 5% = £45 x 0.95 = £42.75 Total cost = £50 deposit + £42.75 = £92.75",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 90,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Music practice rooms are available seven days a week, with each day being split into three sessions: morning (8am-2pm), day (2pm-8pm) and night (8pm-2am). The table below gives the prices for the hourly rental of the music practice rooms. Some information is missing. The “two sessions” column indicates the hourly charge if two sessions are booked on the same day. NB: All prices above include VAT (25%)<br><br><img src='image/set_19.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>A Basic room is booked for 18 hours each day for three full weeks. What is the total cost of this booking excluding VAT and deposit?",
    "options": [
      "£1,935.36",
      "£2,419.20",
      "£2,459.52",
      "£3,024.00",
      "£3,074.40"
    ],
    "answer": 1,
    "explanation": "Basic room all day cost = 18hrs x £8/hr = £144 All week = 7 days x £144 = £1,008 Three weeks = £1,008 x 3 = £3,024 Deducting the VAT = £3,024/1.25 = £2,419.20 SET 20",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 91,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>A group of 180 people took part in a perception study and were asked to count how many differences they could spot between two similar pieces of short video footage. The results are given below<br><br><img src='image/set_20.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>What percentage of people under the age of 22 spotted more than 10 differences?",
    "options": [
      "31.3%",
      "33.3%",
      "38.7%",
      "46.7%",
      "63.2%"
    ],
    "answer": 2,
    "explanation": "Total number of people aged under 22 = sum of first two columns = 62 Number aged <22 who spotted >10 differences = 11 + 8 + 3 + 2 = 24 Percentage = 24/62 = 38.7%",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 92,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>A group of 180 people took part in a perception study and were asked to count how many differences they could spot between two similar pieces of short video footage. The results are given below<br><br><img src='image/set_20.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>75% of the results for the people who spotted 5 to 10 differences correctly were removed from the study. What percentage of the remaining people aged 16-22 spotted more than 15 differences?",
    "options": [
      "6.3%",
      "6.9%",
      "8.5%",
      "8.7%",
      "9.4%"
    ],
    "answer": 3,
    "explanation": "Valid results for 5-10 spots for ages 16-22 = 0.25 x 12 = 3 Total number of valid results for 16-22 = 10 + 3 + 8 + 2 = 23 Percentage of over 15 spots for 16-22 = 2 ÷ 23 = 8.7%",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 93,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>A group of 180 people took part in a perception study and were asked to count how many differences they could spot between two similar pieces of short video footage. The results are given below<br><br><img src='image/set_20.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>25% of people who correctly spotted over 10 differences, also incorrectly spotted over 10 differences. How many people was this?",
    "options": [
      "11",
      "12",
      "13",
      "14",
      "15"
    ],
    "answer": 2,
    "explanation": "Total who spotted over 10 = sum of bottom two rows = 52 25% of 52 = 13",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 94,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>A group of 180 people took part in a perception study and were asked to count how many differences they could spot between two similar pieces of short video footage. The results are given below<br><br><img src='image/set_20.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>10,000 people aged 48 or older take this test. Using the data, estimate how many spotted fewer than five differences to the nearest 50.",
    "options": [
      "2,300",
      "2,900",
      "4,500",
      "5,100",
      "5,150 6. 5,200"
    ],
    "answer": 4,
    "explanation": "Total 48+ who spotted <5 = 15 + 19 = 34 Total aged 48+ = sum of final two columns = 66 Percentage of 48+ who spotted <5 = 34 ÷ 66 = 52% (2 s.f.) 52% of 10,000 = 0.52 x 10,000 = 5,200",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 95,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>A group of 180 people took part in a perception study and were asked to count how many differences they could spot between two similar pieces of short video footage. The results are given below<br><br><img src='image/set_20.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>The test is repeated with the same population. The number of 16-34 year olds who spot 11-15 differences increases by 50%. All other age groups experience no change. What is the new ratio between 16-34 year olds and the total number of people in the other age groups who spot 11-15 differences?",
    "options": [
      "1:3",
      "4:17",
      "14:44",
      "14:51",
      "21:51"
    ],
    "answer": 4,
    "explanation": "50% increase in 16-34s who spot 11-15 = 1.5 x (8 + 6) = 21 New total who spot 11-15 = 11 + 21 + 2 + 8 + 9 = 51 Ratio = 21:51 SET 21",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 96,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The pie chart below shows the favourite sports of some high school students. Every student plays only their favourite sport in games lessons. The school has 1300 students, with an exact 50:50 split between boys and girls.<br><br><img src='image/set_21.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>What is the difference between the number of boys that play football and the number that play netball in games lessons?",
    "options": [
      "90",
      "91",
      "104",
      "180",
      "182 6. 286"
    ],
    "answer": 1,
    "explanation": "Number that play Football = 22% of 1300 = 286 Number that play Hockey = 8 % of 1300 = 104 Thus, the difference = 286-104 = 182 Boys + Girls; Therefore, 182/2 = 91 Boys",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 97,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The pie chart below shows the favourite sports of some high school students. Every student plays only their favourite sport in games lessons. The school has 1300 students, with an exact 50:50 split between boys and girls.<br><br><img src='image/set_21.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>The senior football teams are picked from the two most senior years – a total of 350 students. Only those whose favourite sport is football play. At least 11 people are needed per team. What is the maximum number of teams that could be made? Assume that the values given in the chart are representative of these years.",
    "options": [
      "4",
      "5",
      "6",
      "7",
      "8"
    ],
    "answer": 3,
    "explanation": "22% of 350 = 77 students 77 ÷ 11 people per team = 7 teams",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 98,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The pie chart below shows the favourite sports of some high school students. Every student plays only their favourite sport in games lessons. The school has 1300 students, with an exact 50:50 split between boys and girls.<br><br><img src='image/set_21.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>All those whose favourite sport is basketball are boys and all those whose favourite sport is netball are girls. 80% of the basketball boys are invited to play netball. What proportion of the netball-playing population do they then make?",
    "options": [
      "17%",
      "25%",
      "33%",
      "42%",
      "50%"
    ],
    "answer": 2,
    "explanation": "Number of basketball boys = 0.05 x 1,300 = 65 80% of 65 = 52 Number of netball girls = 0.08 x1, 300 = 104 Total number of netball-players = 104 + 52 = 156 Male proportion = 52 ÷ 156 = 33% (2 s.f.)",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 99,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The pie chart below shows the favourite sports of some high school students. Every student plays only their favourite sport in games lessons. The school has 1300 students, with an exact 50:50 split between boys and girls.<br><br><img src='image/set_21.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>One quarter of students in the Other category have a favourite sport which is a ball sport. In the whole school, how many students have a favourite sport which is a ball sport?",
    "options": [
      "39",
      "117",
      "572",
      "1,066",
      "1,183"
    ],
    "answer": 3,
    "explanation": "Number of Other students = 0.12 x 1,300 = 156 Other ball sports = 0.25 x 156 = 39 Total non-ball sports (swimming & athletics) = (0.06 + 0.03) x 1300 = 117 Total “other” non ball sports = 156 – 39 = 117 Total ball sports = 1,300 – 117 – 117 = 1,066",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 100,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The pie chart below shows the favourite sports of some high school students. Every student plays only their favourite sport in games lessons. The school has 1300 students, with an exact 50:50 split between boys and girls.<br><br><img src='image/set_21.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Only boys play cricket. Only girls play hockey. The gender split for tennis follows that of the school as a whole. How many more boys play cricket or tennis than girls play hockey or tennis?",
    "options": [
      "39",
      "58",
      "59",
      "111",
      "112"
    ],
    "answer": 0,
    "explanation": "Girls who play hockey = 0.07 x 1,300 = 91 Boys who play cricket = 0.1 x 1,300 = 130 Difference = 39. Note the tennis info makes no difference (50:50 split)\n\n\nSET 22",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 101,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The number of apples picked by a company per year is given below, along with the quality of the apples. 30% of edible apples are sold as they come. Passable apples and the remaining edible apples are processed into cider. Apples which are No Good are not used for human consumption, and are instead discarded for animal food.<br><br><img src='image/set_22.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>What is the percentage increase in the number of apples used for human consumption from 1998 to 2003?",
    "options": [
      "7%",
      "10%",
      "22%",
      "76%",
      "93%"
    ],
    "answer": 0,
    "explanation": "Total apples processed in 1998 = 1,100,547 + 2,983,411 = 4,083,958 Total apples processed in 2003 = 1,931,784 + 2,439,012 = 4,370,796 Ratio = 4,370,796 ÷ 4,083,958 = 1.07 (i.e. 7% increase)",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 102,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The number of apples picked by a company per year is given below, along with the quality of the apples. 30% of edible apples are sold as they come. Passable apples and the remaining edible apples are processed into cider. Apples which are No Good are not used for human consumption, and are instead discarded for animal food.<br><br><img src='image/set_22.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>What percentage of all No Good apples was produced in the year most apples could not be used for humans?",
    "options": [
      "11.6%",
      "11.8%",
      "13.9%",
      "19.9%",
      "20.2%"
    ],
    "answer": 4,
    "explanation": "Number of No Goods in worst year = 571,221 Total number of No Goods = sum of bottom row = 2,823,732 Percentage = 571,221 ÷ 2,823,732 = 20.2% (3 s.f.)",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 103,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The number of apples picked by a company per year is given below, along with the quality of the apples. 30% of edible apples are sold as they come. Passable apples and the remaining edible apples are processed into cider. Apples which are No Good are not used for human consumption, and are instead discarded for animal food.<br><br><img src='image/set_22.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>2004 saw a three-fold increase on 2003 in the number of No Good apples. The total number of apples fit for consumption remained the same. What was the difference in number between processed and No Good apples in 2004 to the nearest apple?",
    "options": [
      "2,077,598",
      "2,224,675",
      "2,478,954",
      "2,675,133",
      "2,765,131"
    ],
    "answer": 0,
    "explanation": "2004 total No Goods = 3 x 571,221 = 1,713,663 70% of edible apples are processed, as are all passable apples. Difference = (0.7 x 1,931,784 + 2,439,012) – 1,713,663 = 2,077,598",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 104,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The number of apples picked by a company per year is given below, along with the quality of the apples. 30% of edible apples are sold as they come. Passable apples and the remaining edible apples are processed into cider. Apples which are No Good are not used for human consumption, and are instead discarded for animal food.<br><br><img src='image/set_22.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>The next six-year period saw an overall 20% increase on the period 1998-2003 in the total number of edible apples picked. How many were sold as they came between 2004 and 2009?",
    "options": [
      "3,588,698",
      "3,321,646",
      "3,312,644",
      "2,392,465",
      "2,208,430"
    ],
    "answer": 2,
    "explanation": "Total number of edibles 1998-2003 = sum of top row = 9,201,790 20% increase = 1.2 x 9,201,790 = 11,042,148 30% of these are sold as they come = 0.3 x 11,042,148 = 3,312,644",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 105,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The number of apples picked by a company per year is given below, along with the quality of the apples. 30% of edible apples are sold as they come. Passable apples and the remaining edible apples are processed into cider. Apples which are No Good are not used for human consumption, and are instead discarded for animal food.<br><br><img src='image/set_22.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Generally, 20 apples give 1 litre of cider. Given that 2004 saw the same number of apples fit for human consumption as 2003, roughly how many litres of cider were produced in 2004?",
    "options": [
      "122,000 l",
      "189,600 l",
      "215,400 l",
      "247,100 l",
      "988,400 l"
    ],
    "answer": 1,
    "explanation": "Apples processed for cider = (1,931,784 x 0.7) + 2,439,012 = 3,791,260.8 Litres of cider = 3,791,260.80 ÷ 20 = 189,600 litres (4 s.f.) SET 23",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 106,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Jen tracks her daily jogs using an app which gives her data on her performance. Her app tells her that her average speed is 5 mph. Conversion factor: 1 mile = 1.6 km<br><br><img src='image/set_23.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>On wet days, Jen’s average speed decreases by 8%. How many kilometres does she cover in 40 minutes?",
    "options": [
      "3.1 km",
      "3.3 km",
      "4.9 km",
      "5.3 km",
      "7.4 km"
    ],
    "answer": 2,
    "explanation": "Decreased average speed = 0.92 x 5 mph = 4.6 mph Miles covered = 4.6 x (40 ÷ 60) = 3.07 miles Km covered = 1.6 x 3.07 miles = 4.9 km",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 107,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Jen tracks her daily jogs using an app which gives her data on her performance. Her app tells her that her average speed is 5 mph. Conversion factor: 1 mile = 1.6 km<br><br><img src='image/set_23.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Jen begins training for a marathon (26 miles). She starts off by trying to complete a marathon over the space of four equally long jogs. Estimate how long each jog is. Assume dry conditions.",
    "options": [
      "42 minutes",
      "46 minutes",
      "1 hour 18 minutes",
      "1 hour 25 minutes",
      "1 hour 30 minutes"
    ],
    "answer": 2,
    "explanation": "Distance per session = 26 miles ÷ 4 = 6.5 miles Time per session = 6.5 miles ÷ 5 mph = 1.3 hrs = 1hr 18mins",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 108,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Jen tracks her daily jogs using an app which gives her data on her performance. Her app tells her that her average speed is 5 mph. Conversion factor: 1 mile = 1.6 km<br><br><img src='image/set_23.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>After starting marathon training, her average speed decreases to her old wet speed; her average wet speed remaining 8% slower than this. Estimate, therefore, how long it would take her to cover 12km in the rain.",
    "options": [
      "1 hour 38 minutes",
      "1 hour 46 minutes",
      "2 hours 17 minutes",
      "2 hours 37 minutes",
      "2 hours 50 minutes"
    ],
    "answer": 1,
    "explanation": "New wet average speed = 0.92 x 4.6 mph = 4.232 mph 12 km in miles = 12 km ÷ 1.6 = 7.5 miles Time taken = 7.5 miles ÷ 4.232 mph = 1.77 hrs = 1hr 46mins",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 109,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Jen tracks her daily jogs using an app which gives her data on her performance. Her app tells her that her average speed is 5 mph. Conversion factor: 1 mile = 1.6 km<br><br><img src='image/set_23.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>After bringing her average speeds back to their original values, Jen starts a new regime. She goes on four jogs, each being 50% further than the last. Her first jog is 4km long. How long does the final jog take in dry conditions?",
    "options": [
      "1 hour 8 minutes",
      "1 hour 41 minutes",
      "1 hour 50 minutes",
      "2 hours 9 minutes",
      "2 hours 42 minutes"
    ],
    "answer": 1,
    "explanation": "Distance of second jog = 4 km x 1.5 = 6 km Distance of third jog = 6 km x 1.5 = 9 km Distance of last jog = 9 km x 1.5 = 13.5 km 13.5 km in miles = 13.5 km ÷ 1.6 = 8.4375 miles Time = 8.4375 miles ÷ 5 mph = 1.69 hrs = 1hr 41mins",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 110,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Jen tracks her daily jogs using an app which gives her data on her performance. Her app tells her that her average speed is 5 mph. Conversion factor: 1 mile = 1.6 km<br><br><img src='image/set_23.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Lots of training later, Jen completes the marathon in a time of 3hrs 42mins on a dry day. What is the percentage increase in Jen’s dry average speed compared to her original one?",
    "options": [
      "7%",
      "12%",
      "41%",
      "52%",
      "53%"
    ],
    "answer": 2,
    "explanation": "3hrs 42mins = 3.7 hrs Average speed = 26 miles ÷ 3.7 hrs = 7.027 mph 7.027 mph ÷ 5 mph = 1.405 (i.e. 41% increase) SET 24",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 111,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The table below gives the prices per person per week for different luxury holiday accommodations with different swimming facilities. Some types of accommodation offer a choice between swimming facilities. Some information is missing. Additional days are charged at 1/7 of the weekly cost.<br><br><img src='image/set_24.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Villas are available with a private pool, and currently they are on sale: 20% off the standard price, where the standard price sits halfway between that of an apartment with a private pool and a palazzo with a private pool. How much would this cost for two people for one week?",
    "options": [
      "£323",
      "£332",
      "£340",
      "£415",
      "£664"
    ],
    "answer": 2,
    "explanation": "Standard price = (£325 + £100) ÷ 2 = £212.50 For two people for one week = £212.50 x 2 = £425 Deducting 20% due to discount = 0.8 x £425 = £340",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 112,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The table below gives the prices per person per week for different luxury holiday accommodations with different swimming facilities. Some types of accommodation offer a choice between swimming facilities. Some information is missing. Additional days are charged at 1/7 of the weekly cost.<br><br><img src='image/set_24.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>A group of twelve rents out a beachfront palazzo for four weeks. A booking fee is required from each member of the group, in this case charged at 10% of the weekly cost per person. What is the total cost of the booking?",
    "options": [
      "£23,040",
      "£23,161",
      "£23,616",
      "£25,344",
      "£25,614"
    ],
    "answer": 2,
    "explanation": "Four weeks rent per person = 4 x £480 = £1,920 Total group rent = 12 x £1,920 = £23,040 Booking fee per person = 0.1 x £480 = £48 Total booking fee = 12 x £48 = £576 Total cost = £23,040 + £576 = £23,616",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 113,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The table below gives the prices per person per week for different luxury holiday accommodations with different swimming facilities. Some types of accommodation offer a choice between swimming facilities. Some information is missing. Additional days are charged at 1/7 of the weekly cost.<br><br><img src='image/set_24.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>A couple rents an apartment with a shared pool for 20 days. The total cost is £492.89. How much is the booking fee?",
    "options": [
      "£35.55",
      "£35.57",
      "£35.75",
      "£37.55",
      "£37.75"
    ],
    "answer": 2,
    "explanation": "One person for 10 days = £80 x (20÷7) = £228.57 Two people for 10 days = 2 x £228.57 = £457.14 Booking fee = £492.89 - £457.14 = £35.75",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 114,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The table below gives the prices per person per week for different luxury holiday accommodations with different swimming facilities. Some types of accommodation offer a choice between swimming facilities. Some information is missing. Additional days are charged at 1/7 of the weekly cost.<br><br><img src='image/set_24.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>A family of four stays at a beachfront villa for two weeks, with no booking fee. Due to a complaint, they are refunded 20% of the standard charge. How much does the family pay?",
    "options": [
      "£1,408",
      "£1,760",
      "£1,920",
      "£2,340",
      "£2,620"
    ],
    "answer": 0,
    "explanation": "Total rent = £220 x 2 weeks x 4 people = £1,760 Total discount = £1,760 x 0.2 = £352 Total cost = £1,760 - £352 = £1,408",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 115,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The table below gives the prices per person per week for different luxury holiday accommodations with different swimming facilities. Some types of accommodation offer a choice between swimming facilities. Some information is missing. Additional days are charged at 1/7 of the weekly cost.<br><br><img src='image/set_24.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>A company hires three palazzi with private pools for a week for the grand total of £19,500. The booking fee is 10% of the total cost. Assuming each palazzo has the\n\n\nsame number of people staying in it, how many people are there in each palazzo?",
    "options": [
      "18",
      "20",
      "22",
      "54",
      "60"
    ],
    "answer": 0,
    "explanation": "Booking fee = 0.1 x £19,500 = £1,950 Total rental charge = £19,500 - £1,950 = £17,550 Number of people = £17,550 ÷ £325 = 54 Number in each palazzo = 54 ÷ 3 = 18 people.\n\n\nSET 25",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 116,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>FastFoodCo is a fast food take-away that delivers directly to customers’ homes. Delivery rates are £3.00 for orders less than £10, £1.50 for orders from £10 - £15 and free for orders over £15. Below is a selection from their menu (delivery and food prices exclude 20% VAT, which is payable on all orders). VAT is added after delivery and any discounts have been taken into account.<br><br><img src='image/set_25.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>John orders a green curry, noodles and a vegetarian curry. What is the total price?",
    "options": [
      "£16.62",
      "£14.82",
      "£14.52",
      "£12.35"
    ],
    "answer": 1,
    "explanation": "The price of the food is £3.95 + £2.95 + £3.95 = £10.85. Orders between £10 and £15 are charged £1.50 for delivery. Including delivery, the cost is £12.35. We then add 20%, so multiply this by 1.2. Hence the cost of the takeaway is £14.82.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 117,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>FastFoodCo is a fast food take-away that delivers directly to customers’ homes. Delivery rates are £3.00 for orders less than £10, £1.50 for orders from £10 - £15 and free for orders over £15. Below is a selection from their menu (delivery and food prices exclude 20% VAT, which is payable on all orders). VAT is added after delivery and any discounts have been taken into account.<br><br><img src='image/set_25.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Katy orders 3 noodles, 2 chicken tikkas and a green curry. Her total is:",
    "options": [
      "£22.44",
      "£25.67",
      "£27.24",
      "£29.04"
    ],
    "answer": 2,
    "explanation": "The total price is (3 x £2.95) + (2 x £4.95) + £3.95 = £22.70. Delivery is free above £15. We then add 20%, hence the total cost is £27.24. A promotional offer is introduced whereby customers receive a 10% discount for orders over £9 (not including delivery).",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 118,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>FastFoodCo is a fast food take-away that delivers directly to customers’ homes. Delivery rates are £3.00 for orders less than £10, £1.50 for orders from £10 - £15 and free for orders over £15. Below is a selection from their menu (delivery and food prices exclude 20% VAT, which is payable on all orders). VAT is added after delivery and any discounts have been taken into account.<br><br><img src='image/set_25.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>John orders 2 noodles and a vegetarian curry. What is his total price?",
    "options": [
      "£15.42",
      "£14.24",
      "£13.62",
      "£12.14"
    ],
    "answer": 0,
    "explanation": "The total price is (2 x £2.95) + £3.95 = £9.85 Add £3 for delivery under £10: 9.85 + 3 = 11.865 Add 20% for VAT: 11.865 x 1.2 = £15.42",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 119,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>FastFoodCo is a fast food take-away that delivers directly to customers’ homes. Delivery rates are £3.00 for orders less than £10, £1.50 for orders from £10 - £15 and free for orders over £15. Below is a selection from their menu (delivery and food prices exclude 20% VAT, which is payable on all orders). VAT is added after delivery and any discounts have been taken into account.<br><br><img src='image/set_25.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Katy orders a green curry, 3 noodles and a vegetarian curry. What is her total?",
    "options": [
      "£21.89",
      "£20.10",
      "£18.52",
      "£18.09"
    ],
    "answer": 1,
    "explanation": "The total is £3.95 + (3 x £2.95) + £3.95 = £16.75 Delivery is free over £15. We then add 20% for VAT: 16.75 x 1.2 = £20.10",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 120,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>FastFoodCo is a fast food take-away that delivers directly to customers’ homes. Delivery rates are £3.00 for orders less than £10, £1.50 for orders from £10 - £15 and free for orders over £15. Below is a selection from their menu (delivery and food prices exclude 20% VAT, which is payable on all orders). VAT is added after delivery and any discounts have been taken into account.<br><br><img src='image/set_25.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>A final ‘two for the price of one’ offer is applied for noodles. John orders 4 noodles, 2 chicken tikkas and a green curry. What is his total?",
    "options": [
      "£18.20",
      "£21.33",
      "£22.51",
      "£23.70",
      "£24.31"
    ],
    "answer": 3,
    "explanation": "The total price is (2 x £2.95) + (2 x £4.95) + £3.95 = £19.75 (price of only two noodles because of offer) Delivery is free over £15. We then add 20% for VAT: 19.75 x 1.2 = £23.70 SET 26",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 121,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The graph below shows the first quarter profits (in GBP) of four suppliers of prescription medicine.<br><br><img src='image/set_26.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>What percentage of total first quarter profits were earned by MediCo?",
    "options": [
      "26.6%",
      "28.6%",
      "30.4%",
      "33.3%"
    ],
    "answer": 1,
    "explanation": "Divide the profits earned by MediCo by the total profits earned by all suppliers: (15,000 + 30,000 + 25,000 + 35,000) = £105,000. 30,000/105,000 = 28.6%.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 122,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The graph below shows the first quarter profits (in GBP) of four suppliers of prescription medicine.<br><br><img src='image/set_26.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>What percentage of the total first quarter profit is from MediCo and Lifecare combined?",
    "options": [
      "56.8%",
      "59.5%",
      "61.9%",
      "62.3%"
    ],
    "answer": 2,
    "explanation": "Divide the profits earned by MediCo and Lifecare combined by the total profits earned by all suppliers: (15,000 + 30,000 + 25,000 + 35,000) = £105000. (30,000 + 35,000)/105,000 = 61.9%.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 123,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The graph below shows the first quarter profits (in GBP) of four suppliers of prescription medicine.<br><br><img src='image/set_26.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>PillPlus offers a 10% discount on all products in the second quarter. As a result, their sales increase and profit increases by 15%. Assuming that the profits of all other suppliers remain constant into the second quarter, what percentage of the total second quarter profits did PillPlus make?",
    "options": [
      "16.4%",
      "23.8%",
      "26.4%",
      "27.3%"
    ],
    "answer": 2,
    "explanation": "Increase the profit of PillPlus by 15% and use this value when calculating the new total profit earned by all suppliers: 25,000 x 1.15 = 28,750. 28,750/(15,000 + 30,000 + 28,750 + 35,000) = 26.4%.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 124,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The graph below shows the first quarter profits (in GBP) of four suppliers of prescription medicine.<br><br><img src='image/set_26.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>During the third quarter, all profits fall by 10% from second quarter values. Lifecare then buys DrugX. What percentage of the third quarter profits was made by Lifecare?",
    "options": [
      "46.0%",
      "46.6%",
      "47.9%",
      "48.2%"
    ],
    "answer": 0,
    "explanation": "As all profits across suppliers decrease by an equal amount, this is irrelevant and cancels in the division. 0.9(35,000 + 15,000)/0.9(35,000 + 28,750 + 30,000 + 15,000) = 46%.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 125,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The graph below shows the first quarter profits (in GBP) of four suppliers of prescription medicine.<br><br><img src='image/set_26.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Production costs are increased in the fourth quarter, resulting in all profits falling by a further 5%, despite an increase in sales. The information given in question 124 still applies. How much money does Lifecare make in this quarter?",
    "options": [
      "£41,800",
      "£42,750",
      "£43,490",
      "£47,002"
    ],
    "answer": 1,
    "explanation": "Take account of the first fall in profits of 10% and then a further fall of 5%: (15,000 + 35,000) x 0.9 x 0.95 = £42,750. SET 27",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 126,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The chart below shows the cost of a variety of cars and optional extras. All prices are excluding 20% VAT, which must be paid by all customers.<br><br><img src='image/set_27.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>What is the total cost of the Stuntman, with all optional extras?",
    "options": [
      "£15,942",
      "£15,904",
      "£15,894",
      "£15,616"
    ],
    "answer": 0,
    "explanation": "The total value for the Stuntman is £12500 + £345 + £145 + £295 = £13,285. Adding 20% VAT, this is £13,285 x 1.2 = £15,942.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 127,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The chart below shows the cost of a variety of cars and optional extras. All prices are excluding 20% VAT, which must be paid by all customers.<br><br><img src='image/set_27.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>What is the price difference between the Saloon and the Pod (with all optional extras)?",
    "options": [
      "£3,900",
      "£4,020",
      "£4,040",
      "£4,100"
    ],
    "answer": 1,
    "explanation": "Remember to include tax in all calculations: Saloon: (£21500 + £495 + £245 + £445) = £22,685. £22,685 x 1.2 = £27,222. Pod: (£18000 + £445 + £395 + £495) = £19335. £19335 x 1.2 = £23,202. £27,222 - £23,202 = £4020",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 128,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The chart below shows the cost of a variety of cars and optional extras. All prices are excluding 20% VAT, which must be paid by all customers.<br><br><img src='image/set_27.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>What is the difference in price between the Racer (with no optional extras) and the Stuntman with all optional extras?",
    "options": [
      "£2,040",
      "£2,048",
      "£2,058",
      "£2,142"
    ],
    "answer": 2,
    "explanation": "Racer: (£15,000 x 1.2) = £18,000. Stuntman: (£12500 + £345 + £145 + £295) = £13,285. £13,285 x 1.2 = £15,942. £18,000 - £15,942 = £2,058",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 129,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The chart below shows the cost of a variety of cars and optional extras. All prices are excluding 20% VAT, which must be paid by all customers.<br><br><img src='image/set_27.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>There is a 10% discount on the Racer and all its optional extras. What is the difference in price between the Pod with no optional extras and the Racer with all optional extras?",
    "options": [
      "£4,236.20",
      "£4,285.50",
      "£4,336.20",
      "£4,438.40"
    ],
    "answer": 2,
    "explanation": "The Pod with no optional extras is £18000 x 1.2 = £21,600. The Racer with all optional extras with a 10% discount is (£15000 + £395 + £195 + £395) x 0.9 x 1.2 = £17,263.80. £21,600 - £17263.80 = £4,336.20",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 130,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The chart below shows the cost of a variety of cars and optional extras. All prices are excluding 20% VAT, which must be paid by all customers.<br><br><img src='image/set_27.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>A final offer on the Saloon is 20% off, including all options. What is the difference in final price between the Saloon with Leather seats and Easy-Park technology and the Pod with only basic features?",
    "options": [
      "£18.60",
      "£37.20",
      "£48.30",
      "£57.60"
    ],
    "answer": 3,
    "explanation": "Saloon with leather seats and easy-park technology = £21500 + £495 + £445 = £22440. Add 20% = £22,440 x 1.2 = £26,928. Reduced by 20% = £26928 x 0.8 = £21,542.40. Pod = £18,000 x 1.2 = £21600. £21,600 - £21,542.40 = £57.60 SET 28",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 131,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The graph below shows the total amount of CO2 (in Tonnes) emitted by the country Aissur in each year from 2000 onwards.<br><br><img src='image/set_28.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>What was the rate of increase of CO2 emissions between 2000 and 2005?",
    "options": [
      "250 Tonnes/year",
      "225 Tonnes/year",
      "200 Tonnes/year",
      "100 Tonnes/year"
    ],
    "answer": 2,
    "explanation": "Emissions increased by 1,000 tonnes from 1,000 to 2,000 tonnes over 5 years, therefore the rate of increase was 200 tonnes per year",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 132,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The graph below shows the total amount of CO2 (in Tonnes) emitted by the country Aissur in each year from 2000 onwards.<br><br><img src='image/set_28.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>The economic crash of 2008 caused global CO2 emissions to decrease due to a decrease in industrial output. How much less CO2 was emitted in the year 2010 compared to if emissions had continued to rise at the same rate seen from 2000 to 2005.",
    "options": [
      "500 Tonnes",
      "750 Tonnes",
      "1,000 Tonnes",
      "2,500 Tonnes"
    ],
    "answer": 0,
    "explanation": "If there had been no crash, 2,010 emissions would have been 3,000 Tonnes, as calculated by applying an increase in emissions of 200 Tonnes/year from 2005 to 2010. With the economic crash, 2010 emissions were 2500 Tonnes: 3,000 – 2,500 = 500 Tonnes less in 2010 due to the economic crash.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 133,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The graph below shows the total amount of CO2 (in Tonnes) emitted by the country Aissur in each year from 2000 onwards.<br><br><img src='image/set_28.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>What is the percentage increase in CO2 emissions from 2005 to 2015?",
    "options": [
      "25%",
      "33%",
      "50%",
      "150%\n\n\nQuestions 134 – 135 require the following information: In 2015, the government of Aissur voted on a new energy bill. The bill seeks to reduce the rate of CO2 increase over the past 5 years by 50% over the next 5 years, and keep the increase at this level thereafter."
    ],
    "answer": 2,
    "explanation": "Percentage increase = (new amount – old amount)/old amount x 100 = (3,000–2,000)/2,000 x 100 = 50%. Note that you are asked for the percentage INCREASE. (New amount/old amount) x100 = percentage CHANGE.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 134,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The graph below shows the total amount of CO2 (in Tonnes) emitted by the country Aissur in each year from 2000 onwards.<br><br><img src='image/set_28.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>If the new energy bill is successful in meeting its aims, how much CO2 will be saved by the end of 2020 relative to the 2010 – 2015 trend continuing?",
    "options": [
      "200 Tonnes",
      "250 Tonnes",
      "500 Tonnes",
      "750 Tonnes"
    ],
    "answer": 1,
    "explanation": "2015 – 2020 the amount would increase from 3,000 tonnes to 3,500 tonnes without any action. This equates to a rate of increase of 100 tonnes per year. With the new act, this is reduced by 50% to 50 tonnes per year, thus over 5 years: Overall saving = 50 x 5 = 250 Tonnes",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 135,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The graph below shows the total amount of CO2 (in Tonnes) emitted by the country Aissur in each year from 2000 onwards.<br><br><img src='image/set_28.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>What will the total CO2 be in 2020 according to this new act?",
    "options": [
      "2,750 Tonnes",
      "3,000 Tonnes",
      "3,250 Tonnes",
      "3,500 Tonne"
    ],
    "answer": 2,
    "explanation": "The emissions in 2020 = projected – rate reduction (50% of the difference between projected total and current total). Rate reduction = 50 tonnes per year. Projected rate = current emissions (3,000 tonnes) + projected increase without the act (5 x 100, which is 500). = (3,000+500) – (5 x 50) = 3250 Tonnes SET 29",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 136,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The chart below shows the price per item for different styles of printing. The price is lower when larger orders are made, as shown in the table.<br><br><img src='image/set_29.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>What is the price per job of 74 single sided black & white sheets?",
    "options": [
      "£3.70",
      "£5.18",
      "£5.24",
      "£7.40"
    ],
    "answer": 1,
    "explanation": "For between 10 and 100 units, single sided black and white printing costs £0.07 per page. 74 x 7p = £5.18.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 137,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The chart below shows the price per item for different styles of printing. The price is lower when larger orders are made, as shown in the table.<br><br><img src='image/set_29.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>How many double-sided colour sheets can you buy for £100?",
    "options": [
      "222",
      "333",
      "400",
      "425 A 10% discount is offered for orders above 50 units, applying to the whole order. All other offers still apply."
    ],
    "answer": 2,
    "explanation": "£100 will clearly buy more than 100 sheets as all prices are under £1, therefore use the 100+ price: The price for double sided colour printing over 100 sheets is £0.25. £100/0.25 = 400 sheets",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 138,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The chart below shows the price per item for different styles of printing. The price is lower when larger orders are made, as shown in the table.<br><br><img src='image/set_29.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>What is the price of 150 units of double sided black & white?",
    "options": [
      "£13.50",
      "£15.50",
      "£16.20",
      "£20.25"
    ],
    "answer": 0,
    "explanation": "For over 100 sheets of double sided black and white, the cost per sheet is £0.10 each. Hence the total non-discounted price for 150 sheets is 150 x £0.10 = £15. If this is discounted by 10%, this is £15 x 0.9 = £13.50.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 139,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The chart below shows the price per item for different styles of printing. The price is lower when larger orders are made, as shown in the table.<br><br><img src='image/set_29.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Compared to buying 150 double sided black & white sheets individually, how many sheets worth (at the standard price for 1 sheet) is saved by buying in one transaction at the discounted price?",
    "options": [
      "65 sheets",
      "60 sheets",
      "53 sheets",
      "50 Sheets"
    ],
    "answer": 1,
    "explanation": "Price for buying separately = 150 x 0.15 = £22.50 Price buying together = 150 x 0.10 x 0.9 (discount) = £13.50 Difference = £9 Number of sheets could buy with £9 = 9/0.15 = 60 sheets",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 140,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The chart below shows the price per item for different styles of printing. The price is lower when larger orders are made, as shown in the table.<br><br><img src='image/set_29.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>What is the total cost of an order of double sided pages, with 227 requiring black and white printing and 34 requiring colour printing?",
    "options": [
      "£22.38",
      "£29.61",
      "£32.90",
      "£34.32"
    ],
    "answer": 1,
    "explanation": "The price for 227 sheets of double sided black and white printing is £0.10 each, so the total is £22.70. The price for 34 sheets of double sided colour printing is £0.30 each, so the total is £10.20. The total for all the sheets is £32.90. If this is discounted by 10%, this is £32.90 x 0.9 = £29.61. SET 30",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 141,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>4 sets of 300 volunteers take part in a clinical trial for a new drug, which is aimed at reducing the effects of asthma. The responses received are recorded below.<br><br><img src='image/set_30.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>How many people reacted positively overall?",
    "options": [
      "135",
      "265",
      "523",
      "795"
    ],
    "answer": 3,
    "explanation": "We can calculate the number of people who reacted positively in each group and then add up the total: 75% of 300 is 225 65% of 300 is 195 70% of 300 is 210 55% of 300 is 165 225 + 195 + 210 + 165 = 795",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 142,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>4 sets of 300 volunteers take part in a clinical trial for a new drug, which is aimed at reducing the effects of asthma. The responses received are recorded below.<br><br><img src='image/set_30.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>How many more people reacted negatively from",
    "options": [],
    "answer": 2,
    "explanation": "In group 2, 30% reacted negatively: 30% of 300 is 90. In group 3, 15% reacted negatively: 15% of 300 is 45. Therefore the difference is 45; 45 more people in group 2 reacted negatively than people in group 3.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 143,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>? 1. 15 2. 33 3. 45 4. 56<br><br><img src='image/set_3.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>What proportion of those tested overall reacted negatively?",
    "options": [
      "21%",
      "23%",
      "26%",
      "28% After modifications to the drug, a new survey of 300 volunteers was taken. The results of this are shown below"
    ],
    "answer": 1,
    "explanation": "We can calculate the number of people who reacted negatively in each group and then add up the total:\n\n\n20% of 300 is 60 30% of 300 is 90 15% of 300 is 45 25% of 300 is 75 60 + 90 + 45 + 75 = 270 270 as a percentage of the total, 1200, is 22.5%, which rounds to 23%.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 144,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>? 1. 15 2. 33 3. 45 4. 56<br><br><img src='image/set_3.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>What was the percentage increase in the success rate (i.e. the percentage of people reacting positively) in the 5th group compared to the first 4 groups?",
    "options": [
      "7.81%",
      "15.75%",
      "17.93%",
      "23.77%"
    ],
    "answer": 3,
    "explanation": "The overall success rate of the first four groups was = (75 + 65 + 70 + 55)/4 = 66.25% Therefore increase in success rate = 82/66.25 = 23.77% increase.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 145,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>? 1. 15 2. 33 3. 45 4. 56<br><br><img src='image/set_3.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Across all groups, including group 5, how many people reacted negatively to the drug?",
    "options": [
      "275",
      "315",
      "355",
      "380"
    ],
    "answer": 1,
    "explanation": "In the answer to question 143 we calculated that in the first 4 groups, 270 people reacted negatively. In group 5, 15% of 300 people, which is 45 people, reacted negatively. Hence the negative reactions total 315 people. SET 31",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 146,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The graph below shows the total number of views for two rival local television dramas, The Last Chase and The Final Frontier, across the 4 yearly quarters in 2014.<br><br><img src='image/set_31.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>What is the difference between the total number of views of the Final Frontier and The Last Chase during 2014?",
    "options": [
      "10,000",
      "15,000",
      "20,000",
      "25,000"
    ],
    "answer": 2,
    "explanation": "The total number of views of The Last Chase is 20,000 + 20,000 + 15,000 + 20,000 = 75,000. The total number of views of The Final Frontier is 15,000 + 20,000 + 25,000 + 35,000 = 95,000. Hence the difference is 95,000 – 75,000 = 20,000",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 147,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The graph below shows the total number of views for two rival local television dramas, The Last Chase and The Final Frontier, across the 4 yearly quarters in 2014.<br><br><img src='image/set_31.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Broadcasters earn £2,500 from advertisements per 1,000 views. What is the difference in money earned through advertising between the two shows in 2014?",
    "options": [
      "£45,000",
      "£50,000",
      "£55,000",
      "£60,000"
    ],
    "answer": 1,
    "explanation": "The difference in viewers is 20,000. If £2,500 is earned per 1,000 viewers, then the difference in advertising revenue will be £2,500 x 20 = £50,000.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 148,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The graph below shows the total number of views for two rival local television dramas, The Last Chase and The Final Frontier, across the 4 yearly quarters in 2014.<br><br><img src='image/set_31.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>If the number of views of The Final Frontier continues to increase at same rate it did from Q1 – Q3 of 2014, how many views will it have during the final quarter of year 2015?",
    "options": [
      "50,000",
      "55,000",
      "60,000",
      "65,000"
    ],
    "answer": 1,
    "explanation": "Growth rate is 5,000 per quarter between Q1 and Q3 of 2014. Therefore the total growth during 2015: 35,000 + (5,000 x 4) = 55,000",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 149,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The graph below shows the total number of views for two rival local television dramas, The Last Chase and The Final Frontier, across the 4 yearly quarters in 2014.<br><br><img src='image/set_31.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>If the number of views of The Final Frontier continues to increase at same rate it did from Q1 – Q3 of 2014, how many views will it have in 2015 in total?",
    "options": [
      "180,000",
      "190,000",
      "200,000",
      "250,000"
    ],
    "answer": 1,
    "explanation": "Growth rate is 5,000 per quarter between Q1 and Q3 of 2014. Therefore the total growth during 2015: Q1: 35,000 + 5,000 = 40,000 Q2: 40,000 + 5,000 = 45,000\n\n\nQ3: 45,000 + 5,000 = 50,000 Q4: 50,000 + 5,000 = 55,000 Thus, the total number of views = 40,000 + 45,000 + 50,000 + 55,000 = 190,000.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 150,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The graph below shows the total number of views for two rival local television dramas, The Last Chase and The Final Frontier, across the 4 yearly quarters in 2014.<br><br><img src='image/set_31.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Under different circumstances, at the end of the third quarter of 2014, the broadcasters decide to terminate The Last Chase. As a result, half of The Last Chase’s views instead transfer to The Final Frontier. How many views will The Final Frontier have at the end of the final quarter of 2014 under these circumstances?",
    "options": [
      "25,000",
      "35,000",
      "37,500",
      "45,000"
    ],
    "answer": 3,
    "explanation": "Without the show cancellation, there are 35,000 Final Frontier views and 20,000 Last Chase views. With the cancellation, half of the Last Chase views transfer over to Final Frontier, this equates to 10,000 views. Therefore the Final Frontier now has 45,000 views in this scenario. SET 32",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 151,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The table below shows the average time, in minutes, spent waiting for GP appointments by patients, according to a series of surveys from 2014. On average, 20% of patients who wait between 11 and 30 minutes and 40% of those who wait for more than 30 minutes register a complaint during a customer satisfaction survey. No patients who waited for 10 minutes or less registered complaints.<br><br><img src='image/set_32.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>How many patients waited for less than half an hour for an appointment in Scotland?",
    "options": [
      "12,500",
      "27,500",
      "40,000",
      "45,000"
    ],
    "answer": 2,
    "explanation": "55% + 25% = 80% of Scottish patients wait less than half an hour. 80% of 50,000 patients = 40,000, therefore 40,000 patients waited for less than half an hour for an appointment.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 152,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The table below shows the average time, in minutes, spent waiting for GP appointments by patients, according to a series of surveys from 2014. On average, 20% of patients who wait between 11 and 30 minutes and 40% of those who wait for more than 30 minutes register a complaint during a customer satisfaction survey. No patients who waited for 10 minutes or less registered complaints.<br><br><img src='image/set_32.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>What percentage of patients across the UK waited for more than half an hour for an appointment?",
    "options": [
      "10%",
      "15%",
      "20%",
      "25%"
    ],
    "answer": 1,
    "explanation": "We can work out how many patients had to wait more than half an hour for an appointment in each part of the UK then find the total: In England, 10% of 100,000 patients = 10,000 patients had to wait longer than half an hour. In Scotland, 20% of 50,000 patients = 10,000 patients had to wait longer than half an hour. In Wales, 25% of 25,000 patients = 6,250 patients had to wait longer than half an hour. In Northern Ireland, 15% of 25,000 patients = 3,750 patients had to wait longer than half an hour. The total number of patients that had to wait longer than half an hour is 10,000 + 10,000 + 6,250 + 3,750 = 30,000. 30,000/200,000 = 15%",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 153,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The table below shows the average time, in minutes, spent waiting for GP appointments by patients, according to a series of surveys from 2014. On average, 20% of patients who wait between 11 and 30 minutes and 40% of those who wait for more than 30 minutes register a complaint during a customer satisfaction survey. No patients who waited for 10 minutes or less registered complaints.<br><br><img src='image/set_32.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>How many complaints are received from this survey at the end of the year?",
    "options": [
      "20,250",
      "21,500",
      "23,000",
      "24,250"
    ],
    "answer": 2,
    "explanation": "In the previous question we found that 30,000 patients had to wait longer than half an hour, so 40% of 30,000 people complained = 12,000. In England, 30% of 100,000 patients = 30,000 patients had to wait 11-30 minutes. In Scotland, 25% of 50,000 patients = 12,500 patients had to wait 11-30 minutes.\n\n\nIn Wales, 25% of 25,000 patients = 6,250 patients had to wait had to wait 11-30 minutes. In Northern Ireland, 25% of 25,000 patients = 6,250 patients had to wait 11-30 minutes. The total number of patients that had to wait 11-30 minutes is 30,000 + 12,500 + 6,250 + 6,250 = 55,000. If 20% of 55,000 patients complain, this is 11,000. Hence the total number of complaints is 11,000 + 12,000 = 23,000.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 154,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The table below shows the average time, in minutes, spent waiting for GP appointments by patients, according to a series of surveys from 2014. On average, 20% of patients who wait between 11 and 30 minutes and 40% of those who wait for more than 30 minutes register a complaint during a customer satisfaction survey. No patients who waited for 10 minutes or less registered complaints.<br><br><img src='image/set_32.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>What proportion of patients complained about waiting times by the end of the 2014 survey?",
    "options": [
      "12.1%",
      "11.5%",
      "11.0%",
      "10.7%"
    ],
    "answer": 1,
    "explanation": "Use the total survey size to calculate the proportion: 23,000/200,000 = 11.5%.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 155,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The table below shows the average time, in minutes, spent waiting for GP appointments by patients, according to a series of surveys from 2014. On average, 20% of patients who wait between 11 and 30 minutes and 40% of those who wait for more than 30 minutes register a complaint during a customer satisfaction survey. No patients who waited for 10 minutes or less registered complaints.<br><br><img src='image/set_32.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>In January 2015, the government announced a target to reduce the number of patients waiting for longer than 30 minutes for an appointment by 50%, and by 25% for those waiting between 11-30 minutes. Proportionally, what will be the decrease in the number of complaints recorded by an identical survey at the end of 2015, if all targets are met?",
    "options": [
      "40%",
      "38%",
      "36%",
      "34%"
    ],
    "answer": 1,
    "explanation": "We worked out in question 153 that 30,000 people had to wait longer than 30 minutes and 55,000 people had to wait between 11 and 30 minutes. If the targets are met, 15,000 people will have to wait longer than 30 minutes and 41,250 will have to wait between 11 and 30 minutes. If 20% of these 41,250 people complain, this is 8,250 complaints. If 40% of the 15,000 people complain this is 6,000 complaints. Hence there are a total of 14,250 complaints. The previous number of complaints was 23,000, hence the percentage decrease is (23,000-14,250)/23,000 = 0.38 = 38%. SET 33",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 156,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The graph below shows the price of crude oil in US Dollars during 2014: The total oil production, in millions of barrels per day, is shown on the graph below:<br><br><img src='image/set_33.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>At what rate did the price of oil fall between January and March of 2014?",
    "options": [
      "$16.70 per month",
      "$20.00 per month",
      "$22.70 per month",
      "$25.00 per month"
    ],
    "answer": 3,
    "explanation": "The decrease in the price of crude oil between January and March is $150-$100 = $50, as can be seen in the graph. This fall has occurred over a 2-month period, giving a decrease in price of $25 per month.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 157,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The graph below shows the price of crude oil in US Dollars during 2014: The total oil production, in millions of barrels per day, is shown on the graph below:<br><br><img src='image/set_33.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>What was approximate total oil production in 2014?",
    "options": [
      "1,750 million barrels",
      "2,146 million barrels",
      "2,300 million barrels",
      "2,700 million barrels"
    ],
    "answer": 3,
    "explanation": "This is a question of estimation. The average production across the year is at least 7 million barrels per day. Multiplying this by 365 gives around 2,550 million barrels per year. All other options require less than 7 million barrels daily production, and it is clear there are at least 7 million barrels per day. Therefore the answer is 2,700 million. Alternatively, we can estimate using 30 days per month, and multiplying the amount of barrels produced per day in each month by 30 (this is more accurate but more time consuming). 6+7+7+7.5+7.5+7+7.5+8+8.5+8.5+8+9 = 91.5, multiplying by 30 gives just over 2,700 million barrels per year.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 158,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The graph below shows the price of crude oil in US Dollars during 2014: The total oil production, in millions of barrels per day, is shown on the graph below:<br><br><img src='image/set_33.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>How much did oil sales total in July 2014?",
    "options": [
      "$0.56 Billion",
      "$16.9 Billion",
      "$17.4 Billion",
      "$21.1 Billion"
    ],
    "answer": 2,
    "explanation": "Use both graphs. For July, multiply the oil price by the amount sold in the month, and then multiply by the number of days in the month. July = 7.5 million barrels x $75 per barrel x 31 days = $17,400 million = $17.4 billion",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 159,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The graph below shows the price of crude oil in US Dollars during 2014: The total oil production, in millions of barrels per day, is shown on the graph below:<br><br><img src='image/set_33.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Oil prices have been falling due to a high supply. On average, the price of extraction & production of oil makes up 40% of the total price. The rest of the price is profit. How much profit was made from oil sales during June 2014?",
    "options": [
      "$8.4 Billion",
      "$12.6 Billion",
      "$13.0 Billion",
      "$21.0 Billion"
    ],
    "answer": 1,
    "explanation": "If the costs are 40%, the gross profit is 60%. Oil sales in June 2014 totalled 7 million barrels x $100 per barrel x 30 days = £21,000 million = $21 billion. Therefore gross profit was 0.6 x $21 billion = $12.6 billion.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 160,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The graph below shows the price of crude oil in US Dollars during 2014: The total oil production, in millions of barrels per day, is shown on the graph below:<br><br><img src='image/set_33.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Profit from oil extraction is 60% of the total sale price. This profit is split between the oil companies and the nation producing the oil in a ratio of 5:2. Of the oil company profits, 30% are used for corporation tax in the companies’ home countries. Given that the overall sales value was $204 billion over the year, how much corporation tax was paid in 2014 (to 2 decimal places).",
    "options": [
      "$26.23 Billion",
      "$36.74 Billion",
      "$43.71 Billion",
      "$67.57 Billion"
    ],
    "answer": 0,
    "explanation": "You are given the total sales value of $204 billion, so work with this. Work clearly in stages and this question is not hard. The profit is 60% of this, which is $122.4 billion. This is split 5:2 between the oil companies and the oil-producing nation. Thus, the profit for the oil companies is 5/7 of $122.4 billion is profit for the oil companies, which is $87.43 billion. Corporation tax is then 30% of this profit, which is $26.23 billion. SET 34",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 161,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The chart below shows the severity of asthma amongst a sample of 5 groups of 50 people of different ages. The average cost of asthma inhalers per patient is £50 per year. The population of the United Kingdom averaged 50 million during the period of interest. Children aged 0-5 years made up 7% of the population and children aged 5- 10 years made up 10% of the population. Children below the age of 10 who suffer from mild asthma have a half chance of developing respiratory problems in adult life. This figure is 90% for children below the age of 10 who suffer severe asthma. Children without asthma will not develop respiratory problems. A review into doctors’ practices concluded that between 1990 and 1995, 35% of mild asthma diagnoses of children between 0-10 were incorrect.<br><br><img src='image/set_34.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>How many people surveyed suffer from asthma?",
    "options": [
      "25",
      "35",
      "45",
      "55"
    ],
    "answer": 1,
    "explanation": "Calculate the total people with no asthma, then take it away from the total number of people which is 250: 80% of the 50 people aged 0-5 have no asthma, which is 40. 75% of the 50 people aged 5-10 have no asthma, which is 37.5. 85% of the people aged 10-21 have no asthma, which is 42.5. 95% of the people aged 21-30 have no asthma, which is 47.5. 95% of the people aged 30+ have no asthma, which is 47.5. Hence the total people who have no asthma is 215. Hence the total people with asthma is 250 – 215 = 35.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 162,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The chart below shows the severity of asthma amongst a sample of 5 groups of 50 people of different ages. The average cost of asthma inhalers per patient is £50 per year. The population of the United Kingdom averaged 50 million during the period of interest. Children aged 0-5 years made up 7% of the population and children aged 5- 10 years made up 10% of the population. Children below the age of 10 who suffer from mild asthma have a half chance of developing respiratory problems in adult life. This figure is 90% for children below the age of 10 who suffer severe asthma. Children without asthma will not develop respiratory problems. A review into doctors’ practices concluded that between 1990 and 1995, 35% of mild asthma diagnoses of children between 0-10 were incorrect.<br><br><img src='image/set_34.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>What is the proportion of children surveyed who are likely to develop respiratory problems?",
    "options": [
      "13.00%",
      "13.25%",
      "13.50%",
      "14.25%"
    ],
    "answer": 1,
    "explanation": "Of children aged 0-5, 15% have mild asthma which is 7.5. Hence 3.75 will develop respiratory problems.\n\n\nOf children aged 0-5, 5% have severe asthma which is 2.5. Hence 2.25 will develop respiratory problems. Of children aged 5-10, 20% have mild asthma which is 10. Hence 5 will develop respiratory problems. Of children aged 5-10, 5% have severe asthma which is 2.5. Hence 2.25 will develop respiratory problems. Hence 13.25 children per 100 will develop respiratory problems, so the answer is 13.25%.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 163,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The chart below shows the severity of asthma amongst a sample of 5 groups of 50 people of different ages. The average cost of asthma inhalers per patient is £50 per year. The population of the United Kingdom averaged 50 million during the period of interest. Children aged 0-5 years made up 7% of the population and children aged 5- 10 years made up 10% of the population. Children below the age of 10 who suffer from mild asthma have a half chance of developing respiratory problems in adult life. This figure is 90% for children below the age of 10 who suffer severe asthma. Children without asthma will not develop respiratory problems. A review into doctors’ practices concluded that between 1990 and 1995, 35% of mild asthma diagnoses of children between 0-10 were incorrect.<br><br><img src='image/set_34.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>How many 0-10 year olds from the survey have been incorrectly diagnosed with asthma?",
    "options": [
      "6.1%",
      "6.9%",
      "7.4%",
      "8.0%"
    ],
    "answer": 0,
    "explanation": "(15%+20%)/2 = 17.5% diagnosed. 17.5% x 0.35 = 6.125% Incorrect diagnoses.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 164,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The chart below shows the severity of asthma amongst a sample of 5 groups of 50 people of different ages. The average cost of asthma inhalers per patient is £50 per year. The population of the United Kingdom averaged 50 million during the period of interest. Children aged 0-5 years made up 7% of the population and children aged 5- 10 years made up 10% of the population. Children below the age of 10 who suffer from mild asthma have a half chance of developing respiratory problems in adult life. This figure is 90% for children below the age of 10 who suffer severe asthma. Children without asthma will not develop respiratory problems. A review into doctors’ practices concluded that between 1990 and 1995, 35% of mild asthma diagnoses of children between 0-10 were incorrect.<br><br><img src='image/set_34.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>What proportion of children below the age of 10 who were correctly diagnosed with asthma will develop respiratory problems?",
    "options": [
      "9%",
      "10%",
      "11%",
      "12%"
    ],
    "answer": 1,
    "explanation": "Taking into account that only 65% of children diagnosed with mild asthma were diagnosed correctly: 17.5% diagnosed (mild) ➔ 11.375% correctly diagnosed ➔ 5.69% complications 5% diagnosed (severe) ➔ 4.5% complications (all are correct diagnoses) Therefore 5.69 + 4.5 = 10% overall respiratory complication rate.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 165,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The chart below shows the severity of asthma amongst a sample of 5 groups of 50 people of different ages. The average cost of asthma inhalers per patient is £50 per year. The population of the United Kingdom averaged 50 million during the period of interest. Children aged 0-5 years made up 7% of the population and children aged 5- 10 years made up 10% of the population. Children below the age of 10 who suffer from mild asthma have a half chance of developing respiratory problems in adult life. This figure is 90% for children below the age of 10 who suffer severe asthma. Children without asthma will not develop respiratory problems. A review into doctors’ practices concluded that between 1990 and 1995, 35% of mild asthma diagnoses of children between 0-10 were incorrect.<br><br><img src='image/set_34.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>How much money was wasted on mistakenly prescribing medication to children who were wrongly diagnosed with asthma from 1990 to 1995?",
    "options": [
      "£133 million",
      "£157 million",
      "£187 million",
      "£255 million"
    ],
    "answer": 0,
    "explanation": "False  diagnoses:  (0.15x0.35x0.07x50,000,000)  0-5  year  olds  + (0.2x0.35x0.1x50,000,000) 5-10 year olds = 533,750 Cost per diagnosis: £50 per year = £250 over 5 years Total money wasted: 533,750 x £250 = £133 million SET 35",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 166,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The following table shows data related to equity shares issued by five public sector companies on 1 March 2015.<br><br><img src='image/set_35.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>If the government disinvested 50% of its stake in A at current market price, what (in £) is the amount of revenue generated by the government through the disinvestment?",
    "options": [
      "375 Million",
      "325 Million",
      "275 Million",
      "225 Million"
    ],
    "answer": 3,
    "explanation": "Total value of company A = (price per share x number of shares) = £60 x 10 million = £600 million Government holding = 75% of 600 million = £450 million Disinvestment (50%) = 0.5 x 450 = £225 million Hence £225 million is raised from the disinvestment.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 167,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The following table shows data related to equity shares issued by five public sector companies on 1 March 2015.<br><br><img src='image/set_35.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>If the government disinvested 25% of its stake in B at current market price, the amount of revenue generated by the government through the disinvestment would be (in £):",
    "options": [
      "125 Million",
      "150 Million",
      "175 Million",
      "200 Million"
    ],
    "answer": 0,
    "explanation": "Total value of company B = (price per share x number of shares) = £20 x 50 million = 1,000 million Government holding = 50% of 1,000 Million = £500 million Disinvestment (25%) = 0.25 x 500 = £125 million",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 168,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The following table shows data related to equity shares issued by five public sector companies on 1 March 2015.<br><br><img src='image/set_35.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>The government disinvested its entire stake in C at a price of £35 per share. What would have been the additional revenue generated by the government had it done the given disinvestment at the given market price?",
    "options": [
      "£25 Million",
      "£50 Million",
      "£75 Million",
      "£100 Million"
    ],
    "answer": 1,
    "explanation": "Government holds 1/3 of the 30 million shares, which is 10 million shares. It sold each share for £35, £5 less than the £40 market price. Hence the additional revenue for selling at the market price would have been £5 per share x 10 million shares = £50 million.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 169,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The following table shows data related to equity shares issued by five public sector companies on 1 March 2015.<br><br><img src='image/set_35.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>If the share price of D fell to £25 on 2 March 2015, then what was the decline in the total value of D’s shares held by the government from that of the previous day?",
    "options": [
      "£25 Million",
      "£50 Million",
      "£75 Million",
      "£100 Million"
    ],
    "answer": 1,
    "explanation": "Government holds 25% of 40 million shares, which is 10 million shares. The price of each share fell from £30 to £35, so fell by £5 per share. If the price of 10 million shares fell by £5, the total fall was £50 million.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 170,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The following table shows data related to equity shares issued by five public sector companies on 1 March 2015.<br><br><img src='image/set_35.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>If the share price of E rose to £25 on 2 March 2015, then what was the increase in the total value of E’s shares held by the government over that of the previous day (in £)?",
    "options": [
      "£30.25 Million",
      "£30.75 Million",
      "£31.25 Million",
      "£31.75 Million"
    ],
    "answer": 2,
    "explanation": "Government holds 12.5% of 50 million shares, which is 6.25 million. The price has risen by £5 per share, so the total rise is £31.25 million.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 171,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The following table shows data related to equity shares issued by five public sector companies on 1 March 2015.<br><br><img src='image/set_35.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Which of the following will fetch higher revenue for government?",
    "options": [
      "Redeeming all its stock from company A.",
      "Redeeming all its stock from company B.",
      "Both of the above will fetch the same value.",
      "None of the above."
    ],
    "answer": 1,
    "explanation": "Total value of option A = £10 x 60 million x 75% = £450 Million Total value of option B = £20 x 50 million x 50% = £500 Million Hence they will fetch difference values, with B fetching more. SET 36",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 172,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The table below shows the production of some agricultural crops in Harvestland in the years 2011-12 and the targets that were earlier set for that growing season.<br><br><img src='image/set_36.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>The production of food grain (in tonnes) in 2010-11 was:",
    "options": [
      "40",
      "60",
      "80",
      "100"
    ],
    "answer": 2,
    "explanation": "In 2011-2012, food grain production was 100, and this was a 25% increase on 2010-2011. If 100 is 125%, then 100% = 80. Hence food production in tonnes in 2010-2011 was 80 tonnes.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 173,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The table below shows the production of some agricultural crops in Harvestland in the years 2011-12 and the targets that were earlier set for that growing season.<br><br><img src='image/set_36.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>What was the difference in targeted production in 2011-12 and actual production in 2010-11 for oil seeds (in tonnes)?",
    "options": [
      "10",
      "20",
      "30",
      "40"
    ],
    "answer": 1,
    "explanation": "Target production (2011-12) = 60 tonnes Actual production (2010-11) = 50/125% = 40 tonnes Difference = 60 - 40 = 20 tonnes",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 174,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The table below shows the production of some agricultural crops in Harvestland in the years 2011-12 and the targets that were earlier set for that growing season.<br><br><img src='image/set_36.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>How much more sugarcane should have been produced in order to meet the target in 2011-12 (in tonnes)?",
    "options": [
      "5",
      "10",
      "15",
      "20"
    ],
    "answer": 1,
    "explanation": "Difference = Target - Actual = 50 - 40 = 10 tonnes",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 175,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The table below shows the production of some agricultural crops in Harvestland in the years 2011-12 and the targets that were earlier set for that growing season.<br><br><img src='image/set_36.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>What was the combined production of Cotton and Jute in year 2010-11 (in tonnes)?",
    "options": [
      "11",
      "21",
      "31",
      "41"
    ],
    "answer": 3,
    "explanation": "Cotton production (2010-11) = 30/120% = 25 tonnes Jute production (2010-11) = 20/125% = 16 tonnes Combined = 25 + 16 = 41 tonnes",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 176,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The table below shows the production of some agricultural crops in Harvestland in the years 2011-12 and the targets that were earlier set for that growing season.<br><br><img src='image/set_36.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>How much more food grain was produced than oil seeds in 2010-11 (in TONNES)?",
    "options": [
      "10",
      "20",
      "30",
      "40"
    ],
    "answer": 3,
    "explanation": "Food grain production (2010-11) = 100/125% = 80 tonnes Oil seeds production (2010-11) = 50/125% = 40 tonnes Difference = 80 - 40 = 40 tonnes",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 177,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The table below shows the production of some agricultural crops in Harvestland in the years 2011-12 and the targets that were earlier set for that growing season.<br><br><img src='image/set_36.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Cotton constituted what percentage of total crops in year 2011-12?",
    "options": [
      "10",
      "12.5",
      "15",
      "17.5",
      "30"
    ],
    "answer": 1,
    "explanation": "Total production (2011-12) = 100+50+40+30+20 = 240 tonnes Cotton as a percentage of total = 30/240 = 12.5% SET 37",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 178,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The table given below shows the sales volume of four products A, B, C and D manufactured by a company from January to April in the year 2014.<br><br><img src='image/set_37.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>In February, sale of product B constituted what percentage of total sales of all 4 products put together?",
    "options": [
      "26%",
      "27%",
      "28%",
      "29%"
    ],
    "answer": 3,
    "explanation": "Sales of product B in Feb = 7,000 Total sales of all products in Feb = 10,250 + 7,000 + 3,750 + 3100 = 24,100 Percentage of product B’s sales = 7,000/24,100 = 29%",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 179,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The table given below shows the sales volume of four products A, B, C and D manufactured by a company from January to April in the year 2014.<br><br><img src='image/set_37.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Which of the following products recorded maximum percentage increase from March to April?",
    "options": [
      "Product A",
      "Product B",
      "Product C",
      "Product D"
    ],
    "answer": 3,
    "explanation": "Percentage increase: Product A = (11,000-10,500)/10,500 = 4.76% Product B = (7,500-7,250)/7,250 = 3.45% Product C = (4,250-4,000)/4,000 = 6.25% Product D = (4,000-3,500)/3,500 = 14.29% Hence product D witnessed highest percentage growth. However to answer this question more quickly, look at the numbers – the numbers are giving you a clue. You can visually see that product D’s sales’ values have gone up the equal maximum amount of £500. But it is also apparent that the absolute value of sales is the lowest, therefore you can deduce that D is the largest percentage increase without actually doing any sums!",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 180,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The table given below shows the sales volume of four products A, B, C and D manufactured by a company from January to April in the year 2014.<br><br><img src='image/set_37.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>In May 2014, the sales of product C witnessed an increase of 20% over the previous month. The sales of D were the same as those of C. What was the percentage increase in the sales of D in May relative to April?",
    "options": [
      "22.5 %",
      "25.0 %",
      "27.5 %",
      "30.0 %"
    ],
    "answer": 2,
    "explanation": "Sales of product C in May = 4,250 x 1.2 = 5,100 Therefore sales of product D in May = 5,100 Percentage increase in sales of D from April to May = (5,100 – 4,000)/4,000 = 27.5%",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 181,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The table given below shows the sales volume of four products A, B, C and D manufactured by a company from January to April in the year 2014.<br><br><img src='image/set_37.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>By what percentage did the combined sales of product A and product C increase from January to April?",
    "options": [
      "17.0 %",
      "17.1 %",
      "17.2 %",
      "17.3 %"
    ],
    "answer": 3,
    "explanation": "Sale of products (A+C) in January = 13,000 Sale of products (A+C) in April = 15,250 Percentage increase in combined sale from January to April = (15,250 – 13,000)/13,000 = 17.31%",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 182,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The table given below shows the sales volume of four products A, B, C and D manufactured by a company from January to April in the year 2014.<br><br><img src='image/set_37.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Assume a different scenario, that May 2015 witnessed a 20% growth in sales for products A and B, and a 30% growth in sales for products C and D over April values. What was the total sales value in May for all the products combined?",
    "options": [
      "32,925",
      "33,925",
      "34,925",
      "35,925"
    ],
    "answer": 0,
    "explanation": "Sale of product (A+B) in May = 1.2 x (11,000+75,00) = 22,200 Sale of product (C+D) in May = 1.3 x (4,250+4,000) = 10,725 Total sales in May = 32925",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 183,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The table given below shows the sales volume of four products A, B, C and D manufactured by a company from January to April in the year 2014.<br><br><img src='image/set_37.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Assume a different scenario, that May 2015 witnessed 20% growth in sales of product A and 10% growth in sales for the other 3 products (B, C and D). Sales of A constituted what percentage of total sales in May 2015?",
    "options": [
      "40.25 %",
      "41.25 %",
      "42.25 %",
      "43.24 %"
    ],
    "answer": 3,
    "explanation": "Sale of product A in May = 1.2 x 11,000 = 13,200 Sale of product (B+C+D) in May = 1.1 x (7,500+4,250+4,000) = 173,25 Total sales in May = 13,200+17,325 = 30,525 Percentage of sales of A over total sales = 13,200/30,525 = 43.24% SET 38",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 184,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>A courier company uses three modes of transportation for delivering consignments – Road, Rail and Air. The following table shows the percentage distribution of the total number of consignments delivered, the revenue generated and the cost incurred, across the three modes of transportation in 2014.<br><br><img src='image/set_38.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>In 2012, the profit made by Courier Company was 30% of the total revenue. The company made a profit of £2.5 million. What was the total revenue?",
    "options": [
      "£3.6 Million",
      "£7.2 Million",
      "£8.3 Million",
      "£25 Million"
    ],
    "answer": 2,
    "explanation": "Overall profit is 30% of revenue. Since profit = £2.5 million, overall revenue = 2.5/30 x 100 = £8.3 Million",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 185,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>A courier company uses three modes of transportation for delivering consignments – Road, Rail and Air. The following table shows the percentage distribution of the total number of consignments delivered, the revenue generated and the cost incurred, across the three modes of transportation in 2014.<br><br><img src='image/set_38.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>In 2014, the cost per consignment was the lowest through which method?",
    "options": [
      "Rail",
      "Road",
      "Air",
      "Equal between road and rail"
    ],
    "answer": 1,
    "explanation": "Let us assume cost per article = C; Total number of articles = N Cost per consignment: Rail = 25C/30N = 0.83C/N Road = 25C/45N = 0.56C/N Air = 50C/25N = 2C/N Hence road has the lowest cost per consignment. However if you look at the figures, a shortcut is apparent. Road occupies by far the greatest number of consignments, but the cost is the equal lowest in the business. Therefore at a glance you can see the answer is road, even before you open the calculator and start doing unnecessary sums.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 186,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>A courier company uses three modes of transportation for delivering consignments – Road, Rail and Air. The following table shows the percentage distribution of the total number of consignments delivered, the revenue generated and the cost incurred, across the three modes of transportation in 2014.<br><br><img src='image/set_38.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>In 2014, the cost per consignment through rail was £5 and the revenue per consignment through rail was £20. What was the ratio of the total revenue through rail to the total cost through rail? Assume the number of consignments is equal to that given in the table.",
    "options": [
      "4:1",
      "5:1",
      "6:1",
      "7:1",
      "8:1"
    ],
    "answer": 0,
    "explanation": "The ratio will be the same for any number of consignments as the proportions are preserved. Ratio of total revenue to total cost = £20:£5 = 4:1",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 187,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>A courier company uses three modes of transportation for delivering consignments – Road, Rail and Air. The following table shows the percentage distribution of the total number of consignments delivered, the revenue generated and the cost incurred, across the three modes of transportation in 2014.<br><br><img src='image/set_38.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>In 2013, the total costs of the company are £54,000. What is the total cost of air transportation in the year 2013?",
    "options": [
      "£13,500",
      "£17,000",
      "£27,000",
      "£32,000",
      "More information needed"
    ],
    "answer": 2,
    "explanation": "From the table it is given that 50% of the total costs are associated with air transportation, so 50% of the total costs are due to air travel. 50% x £54,000 = £27,000",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 188,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>A courier company uses three modes of transportation for delivering consignments – Road, Rail and Air. The following table shows the percentage distribution of the total number of consignments delivered, the revenue generated and the cost incurred, across the three modes of transportation in 2014.<br><br><img src='image/set_38.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>In 2014, if the total number of consignments delivered was 17,145, then what was total number of consignments delivered using rail and road?",
    "options": [
      "11,670",
      "11,974",
      "12,463",
      "12,859"
    ],
    "answer": 3,
    "explanation": "From the table it is given that 30% are delivered by rail and 45% by road, so 75% of consignments are delivered by rail and road taken together. 75% x 17,145 = 12,859 SET 39",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 189,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The following table provides partial information about the composition of three different alloys, A, B and C. Each of these alloys contains five different elements: Zinc, Tin, Lead, Copper and Nickel, and no other substances. An alloy, Alloy G, the composition of which is not given in the table, contains alloys A, B, C in the ratio 2:1:3. It is also known that in Alloy G, Tin, Lead and Copper are present in equal quantities.<br><br><img src='image/set_39.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Find the percentage of Lead in alloy A.",
    "options": [
      "8.33 %",
      "4.16 %",
      "2.70 %",
      "2.08 %"
    ],
    "answer": 0,
    "explanation": "This is a diﬃcult question that would be worth “flagging for review”. Set the percentage of lead in alloy A to a, and the percentage of tin in alloy C to b. We can then find the percentage of copper in each as a function of a and b. The key thing here is to use the composition of Alloy G. We can find the composition of Alloy G in terms of a and b and then set the amounts of tin, lead and copper equal to each other to find a and b: For Alloy G, the percentages will be weighted according to the proportion A:B:C = 2:1:3: 2/6 (40) + 1/6 (15) + 3/6 (b) = 2/6 (a) + 1/6 (50) + 3/6 (20) = 2/6 (40-a) + 1/6 (5) + 3/6 (30-b) 80 + 15 + 3b = 2a + 50 + 60 = 80 -2a + 5 + 90 -3b Solving above equation, we will get values: 95 + 3b = 2a + 110 2a + 110 = 175 – 2a – 3b 3b = 65 – 4a 2a = 95 – 110 + 65 – 4a 6a = 50 a = 50/6 b = 95/9 Percentage of Lead in alloy A = a = 50/6% = 25/3% = 8.33%",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 190,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The following table provides partial information about the composition of three different alloys, A, B and C. Each of these alloys contains five different elements: Zinc, Tin, Lead, Copper and Nickel, and no other substances. An alloy, Alloy G, the composition of which is not given in the table, contains alloys A, B, C in the ratio 2:1:3. It is also known that in Alloy G, Tin, Lead and Copper are present in equal quantities.<br><br><img src='image/set_39.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Find the percentage of Tin in alloy C.",
    "options": [
      "31.3 %",
      "15.8 %",
      "10.6 %",
      "7.9 %"
    ],
    "answer": 2,
    "explanation": "Using our solution from the previous question, we found that the percentage of Tin in alloy C, b, was:\n\n\nb = 95/9 Percentage of Tin in alloy C = 95/9 = 10.6%",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 191,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The following table provides partial information about the composition of three different alloys, A, B and C. Each of these alloys contains five different elements: Zinc, Tin, Lead, Copper and Nickel, and no other substances. An alloy, Alloy G, the composition of which is not given in the table, contains alloys A, B, C in the ratio 2:1:3. It is also known that in Alloy G, Tin, Lead and Copper are present in equal quantities.<br><br><img src='image/set_39.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>An alloy X contains A, B and C in equal proportion. What is the percentage of Zinc in this alloy?",
    "options": [
      "12.50 %",
      "16.67 %",
      "25.00 %",
      "33.33 %"
    ],
    "answer": 1,
    "explanation": "Zinc percentage in alloy X is equal to the average of the percentages of the composite alloys, as they are present in equal proportions. This can be found by adding together and dividing by 3. X = (10+25+15)/3 = 50/3 = 16.67%",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 192,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The following table provides partial information about the composition of three different alloys, A, B and C. Each of these alloys contains five different elements: Zinc, Tin, Lead, Copper and Nickel, and no other substances. An alloy, Alloy G, the composition of which is not given in the table, contains alloys A, B, C in the ratio 2:1:3. It is also known that in Alloy G, Tin, Lead and Copper are present in equal quantities.<br><br><img src='image/set_39.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Find the percentage of Tin and Copper combined in alloy C.",
    "options": [
      "15 %",
      "20 %",
      "25 %",
      "30 %"
    ],
    "answer": 3,
    "explanation": "To solve, subtract the amounts of the known metals to find the remaining metal, which is equal to the percentage of Tin and Copper combined in alloy C. We know there are no other components as this is stated in the question. (100% – 15% – 20% – 35%) = 30%",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 193,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The following table provides partial information about the composition of three different alloys, A, B and C. Each of these alloys contains five different elements: Zinc, Tin, Lead, Copper and Nickel, and no other substances. An alloy, Alloy G, the composition of which is not given in the table, contains alloys A, B, C in the ratio 2:1:3. It is also known that in Alloy G, Tin, Lead and Copper are present in equal quantities.<br><br><img src='image/set_39.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Find the percentage of Tin in alloy G.",
    "options": [
      "11.11 %",
      "21.11 %",
      "31.11 %",
      "41.11 %"
    ],
    "answer": 1,
    "explanation": "We know the percentages of tin in each of the alloys which make up Alloy G, and the composition of Alloy G. Alloy G is made up of alloys A:B:C in the ratio 2:1:3. Alloy A has 40% tin, alloy B has 15% and alloy C has 95/9% tin. Hence the percentage in Alloy G is (2/6 x 40)+(1/6 x 15)+(3/6 x 95/9) = 21.11%.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 194,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The following table provides partial information about the composition of three different alloys, A, B and C. Each of these alloys contains five different elements: Zinc, Tin, Lead, Copper and Nickel, and no other substances. An alloy, Alloy G, the composition of which is not given in the table, contains alloys A, B, C in the ratio 2:1:3. It is also known that in Alloy G, Tin, Lead and Copper are present in equal quantities.<br><br><img src='image/set_39.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>How many elements have exactly the same concentration in Alloy G?",
    "options": [
      "One",
      "Two",
      "Three",
      "Four"
    ],
    "answer": 2,
    "explanation": "Percentage of elements in alloy G: We know that Alloy G has 21.11% Tin from the last question. We also know from the initial explanation that it has the same concentration of tin, lead and copper. This is 3 elements with the same concentration. We then need to work out how much nickel and zinc there is to check whether there is a 4th. Alloy G is made up of alloys A:B:C in the ratio 2:1:3. Alloy A has 10% nickel, alloy B has 5% and alloy C has 35% nickel. Hence the percentage in Alloy G is ((2x10)+(1x5)+ (3x35))/6, = 21.6666. We can also work out from the fact that these 4 elements plus Zinc are 100% of the total that Zinc is 15%. Zinc = 15% Tin = 21.11% Lead = 21.11% Copper = 21.11% Nickel = 21.67%\n\n\nSET 40",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 195,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The following table chart represents the number of people in the USA surveyed by CNN-Time in an opinion poll for “e most in̏uential person of the year 2001”. The number of people surveyed is 11,500.<br><br><img src='image/set_40.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>How many people voted in favour of Hillary Clinton, who received 60% of total votes polled for lady politicians?",
    "options": [
      "1,173",
      "1,223",
      "1,253",
      "1,273"
    ],
    "answer": 0,
    "explanation": "Number of persons who voted in favour of Hilary Clinton = 60% of 17% of 11,500 = 0.6x0.17x11, 500 = 1173.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 196,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The following table chart represents the number of people in the USA surveyed by CNN-Time in an opinion poll for “e most in̏uential person of the year 2001”. The number of people surveyed is 11,500.<br><br><img src='image/set_40.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>If everyone who voted in favour of Robert Guiliani is a citizen of New York, then out of all the people surveyed, the number of citizens from New York is:",
    "options": [
      "460",
      "960",
      "1,040",
      "Cannot be determined."
    ],
    "answer": 3,
    "explanation": "We cannot find the number of people living in New York, as we do not know the proportion of citizens of New York who voted for people other than Robert Guiliani. We can only say that there was a minimum of 460 New York citizens. We cannot determine the actual number.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 197,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The following table chart represents the number of people in the USA surveyed by CNN-Time in an opinion poll for “e most in̏uential person of the year 2001”. The number of people surveyed is 11,500.<br><br><img src='image/set_40.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Out of the respondents, 20% are not US citizens. Given that only US citizens voted for George Bush, determine the percentage of US citizens who voted in favour of Bush.",
    "options": [
      "42.8%",
      "45.3%",
      "46.6%",
      "48.8%"
    ],
    "answer": 3,
    "explanation": "0.39 x 11,500 = 44,85 votes for Bush. Therefore 4,485/(11,500 x 0.8) gives the proportion of US citizens who voted for Bush. This equals 48.8%.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 198,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The following table chart represents the number of people in the USA surveyed by CNN-Time in an opinion poll for “e most in̏uential person of the year 2001”. The number of people surveyed is 11,500.<br><br><img src='image/set_40.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Out of the total people surveyed, 40% are employees of the Federal Government and out of these 10% are in favour of Rumsfield. Find the number of people who are in favour of Rumsfield but are NOT employees of the Federal Government.",
    "options": [
      "105",
      "110",
      "115",
      "120"
    ],
    "answer": 2,
    "explanation": "10% of 40% of people surveyed are in favour of Rumsfield and employees of the federal government, so 10% of 40% of 11,500 = 460 people. Also from the table, Rumsfield has 5% of 11500 votes = 575 people who are in favour of him in total. Hence the number of people who are in favour of Rumsfeld who are not employees of the federal government is 575-460 = 115.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 199,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The following table chart represents the number of people in the USA surveyed by CNN-Time in an opinion poll for “e most in̏uential person of the year 2001”. The number of people surveyed is 11,500.<br><br><img src='image/set_40.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>A mid-year survey has also been done on the same group of people. In that survey 16% of the people were in favour of Bill Clinton. Find the decrease in the number of people who voted in favour of Bill Clinton from mid-year survey to the actual survey.",
    "options": [
      "1,210",
      "1,410",
      "1,610",
      "1,810"
    ],
    "answer": 2,
    "explanation": "The number of people polled was constant. The decrease in percentage is from 16% to 2%, i.e. 14 % of 11,500 = 1,610 people.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 200,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The following table chart represents the number of people in the USA surveyed by CNN-Time in an opinion poll for “e most in̏uential person of the year 2001”. The number of people surveyed is 11,500.<br><br><img src='image/set_40.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>A mid-year survey has also been done on the same group of people. In that survey 40% of the people were in favour of Bush. Find the decrease in the number of people who voted in favour of Bush from mid-year survey to the actual survey.",
    "options": [
      "115",
      "230",
      "460",
      "920"
    ],
    "answer": 0,
    "explanation": "The number of people polled was constant. The decrease in percentage is from 40% to 39%, i.e. 1% of 11,500 = 115 people. SET 41",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 201,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Shop A sells merchandised mugs and also offers to print flyers at the prices shown below:<br><br><img src='image/set_41.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Before Christmas, the shop offers an extra 15% discount. Customer A decides to buy 5 premium mugs and 4 basic mugs with a unique picture printed on the basic mugs. How much will this cost?",
    "options": [
      "£2.50",
      "£2.59",
      "£2.76",
      "£2.81",
      "£2.98"
    ],
    "answer": 4,
    "explanation": "15% indicates that only 85% of the total price is to be paid. 50p is the price per unit for premium mugs for quantity below 49 units. 20p is the price per unit for basic mugs for quantity below 49 units. 5p is the price per unit for logo on basic mugs for quantity below 49 units.\n\n\nUsing this information, we can work out: 0.85x(5x50p+4x(20p+5p)) = 297.5p = £2.975 rounded up to £2.98 Therefore the company will have to pay £2.98",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 202,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Shop A sells merchandised mugs and also offers to print flyers at the prices shown below:<br><br><img src='image/set_41.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Customer B needs 750 premium mugs, 130 basic mugs and 80 flyers, after Christmas. She wants a logo printed on the basic mugs. She wants black and white flyers. To the nearest pound, how much will she have to pay?",
    "options": [
      "£160",
      "£170",
      "£172",
      "£388",
      "£395"
    ],
    "answer": 1,
    "explanation": "20p is the price per unit for premium mugs for quantity above 500 units. 10p is the price per unit for basic mugs for quantity between 100 and 499 units. 3p is the price to add logos to those mugs. 4p is the price per unit for black and white flyers for quantity between 10 and 99 units. Combining this information together gives the equation: 750x20p +130x(10p+3p)+80x4p=17010p = £170.10 rounded down to £170 So, the company will have to pay £170.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 203,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Shop A sells merchandised mugs and also offers to print flyers at the prices shown below:<br><br><img src='image/set_41.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Customer C wants to spend £250. How many medium mugs with a logo can she buy with this money if she also wants to buy 50 colour flyers?",
    "options": [
      "1200",
      "1225",
      "2041",
      "2452",
      "2500"
    ],
    "answer": 2,
    "explanation": "Step I. £250 equals 25,000p 25,000p – 50x10p = 24,500p 10p is the price per unit for colour flyer between 10 and 99 units. Step II. 24,500p/(10p+2p)=2041.667. Therefore she can buy 2041 medium mugs. Once you bought the flyers you are left with 24,500p and you want to know how many medium mugs with logo you can buy. 10p is the price per unit for medium mugs above 500 units. 2p is the price per unit for logo on medium mugs above 500 units.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 204,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Shop A sells merchandised mugs and also offers to print flyers at the prices shown below:<br><br><img src='image/set_41.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>The price of extra logo printed on the mug decreased by 1p, the price of premium mug decreased by 2p and the price of colour flyer decreased by 1p across all quantities in 2015. In percentage terms, how much cheaper would have been to order 70 medium mugs with logo and 150 colour flyers in 2015 instead of 2014?",
    "options": [
      "4%",
      "5%",
      "7%",
      "8%",
      "11%"
    ],
    "answer": 3,
    "explanation": "Step I. 2014: 70x(26p+4p)+150x5p= 2850p 26p is the price per unit for medium mugs below 99 units in 2014. 4p is the price per unit for logo on medium mugs below 99 units in 2014. 5p is the price per unit for colour flyers above 100 units in 2014. Step II. 2015: 70x(26p+3p)+150x4p=2630p 26p is the price per unit for medium mugs below 99 units in 2015. 3p is the price per unit for logo on medium mugs below 99 units in 2015. 4p is the price per unit for colour flyers above 100 units in 2015.\n\n\nStep III. 1-(2630/2850)=0.077 = 8%",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 205,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Shop A sells merchandised mugs and also offers to print flyers at the prices shown below:<br><br><img src='image/set_41.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>The shop made a profit of £325,750 in 2015. This was a compound average growth rate of 1.2% between 2012 and 2015. What was the profit in 2012?",
    "options": [
      "£188,513",
      "£231,862",
      "£314,299",
      "£318,071",
      "£362,059"
    ],
    "answer": 2,
    "explanation": "£325,750/(1.012^(3)) =£314,298.9 rounded down to £314,299 1.2% equals 0.0012 3 years between 2012 and 2015. SET 42",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 206,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>In St. Mary College, all students must have at least one device to interact with digital, interactive study materials. There are thirty students who have all three gadgets: Smartphone, tablet and laptop.<br><br><img src='image/set_42.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>How many students are studying at St. Mary College in total?",
    "options": [
      "325",
      "340",
      "345",
      "350",
      "360"
    ],
    "answer": 1,
    "explanation": "The easiest way to solve this problem is using a Venn diagram. The Venn diagram below shows all possible combinations of the three devices each student can have as well as the number of students with a combination of devices. The sum of the numbers in the Venn diagram must be equal to the total number of students. Using the information given in the graphs, we know there are:\n\n\n30 students with all three devices 50 students with smartphone only 40 students with tablet only 50 students with laptop only 180 students with smartphone 190 students with tablet 200 students with laptop Therefore we can construct the following Venn diagram: Laptop: 200=50+30+z+x z=120-x Smartphone: 180 =50+30+x+y y=100-x Tablet: 190=40+30+y+z y=120-z So, we see that y=100-x and y=120-z and thus z=20+x Then, we see that z=20+x and z=120-x and thus x=50 Plug it in to see, z=20+x=70 and y=100-x=50 Now, the total number of students is the sum of the numbers in the Venn diagram.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 207,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>In St. Mary College, all students must have at least one device to interact with digital, interactive study materials. There are thirty students who have all three gadgets: Smartphone, tablet and laptop.<br><br><img src='image/set_42.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>How many students have both a tablet and smartphone but no laptop?",
    "options": [
      "40",
      "45",
      "50",
      "55",
      "65"
    ],
    "answer": 2,
    "explanation": "Using the previously constructed Venn diagram, we can see the total number of students with a smartphone and a laptop is 50.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 208,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>In St. Mary College, all students must have at least one device to interact with digital, interactive study materials. There are thirty students who have all three gadgets: Smartphone, tablet and laptop.<br><br><img src='image/set_42.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>How many more students have a smartphone than both a tablet and laptop?",
    "options": [
      "80",
      "85",
      "95",
      "100",
      "80"
    ],
    "answer": 0,
    "explanation": "180 students have smartphone 100 students have both tablet and laptop So, 180-100=80, 80 students.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 209,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>In St. Mary College, all students must have at least one device to interact with digital, interactive study materials. There are thirty students who have all three gadgets: Smartphone, tablet and laptop.<br><br><img src='image/set_42.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>What percentage of all students have both a smartphone and a laptop?",
    "options": [
      "20.5%",
      "23.1%",
      "23.5%",
      "25.4%",
      "25.9%"
    ],
    "answer": 2,
    "explanation": "Total number of students: 340 80 students have both smartphone and laptop. 80/340=0.25 23.5%",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 210,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>In St. Mary College, all students must have at least one device to interact with digital, interactive study materials. There are thirty students who have all three gadgets: Smartphone, tablet and laptop.<br><br><img src='image/set_42.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Five more students come to St. Mary College. Three of the students have both a smartphone and a tablet. Two of the students have a smartphone only. What percentage of all students in the college have a smartphone now?",
    "options": [
      "34%",
      "45%",
      "54%",
      "55%",
      "60%"
    ],
    "answer": 2,
    "explanation": "185/345=0.536 54% 185 – no of students with smartphone (AFTER) 345 – total no of students (AFTER) BEFORE AFTER SET 43",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 211,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Train Timetable [Cambridge to London Liverpool Street]<br><br><img src='image/set_43.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>How many trains leave from Cambridge Station going to Liverpool Street between 2pm and 6.00pm?",
    "options": [
      "10",
      "12",
      "15",
      "18",
      "20"
    ],
    "answer": 1,
    "explanation": "From 7.10am, trains run in every 20 minutes and hence the first one after 2pm will depart at 2.10pm - in every 20 minutes. This gives us three trains per hour from\n\n\n2.10pm which would come to 12 trains before 6.15pm.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 212,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Train Timetable [Cambridge to London Liverpool Street]<br><br><img src='image/set_43.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>At 2.45pm, Antonia is at Sawbridgeworth station waiting for the next train to London Liverpool Street. What is the earliest time can she expect to arrive at Liverpool Street?",
    "options": [
      "3.01pm",
      "3.09pm",
      "3.19pm",
      "3.31pm",
      "3.51pm"
    ],
    "answer": 2,
    "explanation": "From 8.18am, trains run in every 20 minutes and hence the first one Antonia can catch is the 2.58pm train. As it takes 21 minutes to get to London Liverpool Street station, she can arrive by 3.19pm.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 213,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Train Timetable [Cambridge to London Liverpool Street]<br><br><img src='image/set_43.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>How many trains run from Cambridge Station to Liverpool Street all day?",
    "options": [
      "46",
      "47",
      "50",
      "51",
      "56"
    ],
    "answer": 3,
    "explanation": "There are three trains in the morning before 7.10am. Thereafter, 3 trains per hour and the last one departs at 23.10pm. There are 16 hours between 7.10am and 23.10pm, so 3+16x3=51. 51 trains run all day.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 214,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Train Timetable [Cambridge to London Liverpool Street]<br><br><img src='image/set_43.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>It is 3pm and Mark wants to take the next train from Cambridge Station to Tottenham Hale for a 1 hour meeting straight at the station. What is the earliest time that Mark could schedule the meeting?",
    "options": [
      "4.25pm",
      "4.28pm",
      "4.45pm",
      "4.55pm",
      "5.02pm"
    ],
    "answer": 1,
    "explanation": "The first train after 3pm departs at 3.10pm from Cambridge Station and arrives at Tottenham Hale by 4.28pm.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 215,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Train Timetable [Cambridge to London Liverpool Street]<br><br><img src='image/set_43.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>If the distance between Audley End and Bishops Stortford is 10.5 miles. What is the speed of the train?",
    "options": [
      "60 miles/hour",
      "70 miles/hour",
      "80 miles/hour",
      "90 miles/hour",
      "100 miles/hour"
    ],
    "answer": 3,
    "explanation": "Using the equation: velocity = distance/time 7 minutes = 7/60 hour from Audley End to Bishops Stortford 10.5 miles between Audley End and Bishops Stortford 10.5 miles / (7/60) hour = 90 miles per hour SET 44",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 216,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The list of the longest rivers in the UK by length in 2014.<br><br><img src='image/set_44.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>What is the total length of the five longest rivers in the UK?",
    "options": [
      "897",
      "905",
      "1026",
      "1143",
      "1234"
    ],
    "answer": 0,
    "explanation": "The top five rivers in the table are the longest. Take the length in miles from column 2 and add them together. Sum: 220+215+185+143+134=897 miles",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 217,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The list of the longest rivers in the UK by length in 2014.<br><br><img src='image/set_44.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>In 2015, the drainage area of the River Thames increased by 1345.5 square miles. In percentage terms, how much did the drainage area of the seven longest rivers in England increase in 2015 if the other rivers the same?",
    "options": [
      "2%",
      "7%",
      "17%",
      "93%",
      "97%"
    ],
    "answer": 1,
    "explanation": "Firstly, you add the drainage area of all seven rivers from column C. Then you add the increase in drainage area of River Thames (1345.5 square mile). Finally, you can calculate the percentage increase, dividing New by Old. Old: 4,409+4,994+4,029+3,236+1,597+560+431=19256 New: 1345.5+4,409+4,994+4,029+3,236+1,597+560+431=20601.5 Percentage: 20601.5/19256=1.06987 7%",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 218,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The list of the longest rivers in the UK by length in 2014.<br><br><img src='image/set_44.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>In percentage terms, how much bigger was the drainage area of the River Thames than the River Wye in 2014?",
    "options": [
      "213%",
      "276%",
      "313%",
      "345%",
      "425%"
    ],
    "answer": 2,
    "explanation": "River Thames: 4,994 square mile River Wye: 1,597 square mile Percentage:\n\n\n4,994/1,597=3.127 313%",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 219,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The list of the longest rivers in the UK by length in 2014.<br><br><img src='image/set_44.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>What was the difference in length between the two rivers with the highest and lowest average discharge?",
    "options": [
      "68 miles",
      "91 miles",
      "117 miles",
      "185 miles",
      "213 miles"
    ],
    "answer": 0,
    "explanation": "Lowest average discharge: River Tay – length: 117 miles Highest average discharge: River Trent – length: 185 miles Difference: 185-117=68 SET 45",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 220,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The list of the longest rivers in the UK by length in 2014.<br><br><img src='image/set_44.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>What was the average drainage area of the six longest rivers in England in 2014?",
    "options": [
      "2750",
      "3138",
      "3210",
      "3455",
      "4235"
    ],
    "answer": 1,
    "explanation": "Remember that only the SIX longest rivers shall be included in the calculation. Use the figures from column 3 to obtain the equation: (4,409+4,994+4,029+3,236+1,597+560)/6=3137.5",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 221,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br><br><br><img src='image/set_45.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Which industry has the largest contribution to Scottish GDP?",
    "options": [
      "Agriculture, Forestry and Fishing",
      "Construction",
      "Government and Other Services",
      "Manufacturing",
      "Other Production"
    ],
    "answer": 0,
    "explanation": "No explanation available.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 222,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br><br><br><img src='image/set_45.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>In 2015, UK GDP increased by 5% overall to 4.2tn pounds. How much was the UK GDP in 2014?",
    "options": [
      "3.9tn",
      "4tn",
      "4.1tn",
      "4.2tn",
      "4.41tn"
    ],
    "answer": 1,
    "explanation": "Using the figures we are given: 4,2tn pounds and 5% (1.05) growth, we can plug them into the equation: GDP2014 x 1.05 = 4.2tn This can be arranged as: GDP2014=4,2/1,05=4",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 223,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br><br><br><img src='image/set_45.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>How much bigger is the contribution of Business Services and Finance to total UK GDP than the contribution of Manufacturing to Scottish GDP?",
    "options": [
      "3%",
      "4%",
      "5%",
      "7%",
      "14%"
    ],
    "answer": 4,
    "explanation": "This requires a simple subtraction. Manufacturing in Scottish GDP 14% Business Services and Finance in UK GDP 28% Difference: 28-14=14 14%",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 224,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br><br><br><img src='image/set_45.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Scottish GDP was £1.2tn in 2014. What is the share of Agriculture, Forestry and Fishing in Scottish GDP in 2015 if there was an overall increase in GDP by 3%? Assume the percentage share of GDP for Agriculture, Forestry and Fishing does not change from 2014 to 2015.",
    "options": [
      "£0.007tn",
      "£0.012tn",
      "£0.015tn",
      "£0.022tn",
      "£1.11tn"
    ],
    "answer": 1,
    "explanation": "We can use the figures given us to formulate the following equation: £1.2tn (GDP in 2014) x 1.03 (3% GDP increase) x 0.01 (1% share of Agriculture, Forestry and Fishing) = 0.01236tn",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 225,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br><br><br><img src='image/set_45.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>What are the top three contributing sectors to UK GDP?",
    "options": [
      "Agriculture, Forestry and Fishing; Manufacturing; Construction",
      "Government and Other Services; Manufacturing; Construction",
      "Business Services and Finance; Government and Other Services; Manufacturing",
      "Distribution, Hotels and Catering; Business Services and Finance; Government and Other Services",
      "Distribution,  Hotels  and  Catering;  Business  Services  and  Finance; Manufacturing"
    ],
    "answer": 3,
    "explanation": "The three largest sections of the UK GDP pie chart are: Distribution, Hotels and Catering 15% Business Services Finance 28% Government and Other Services 24% SET 46",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 226,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br><br><br><img src='image/set_46.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>In percentage terms, how much did the most-watched TV show increase in the number of viewers between year 1 and year 2?",
    "options": [
      "29%",
      "33%",
      "36%",
      "41%",
      "42%"
    ],
    "answer": 2,
    "explanation": "The most-watched TV show is Geordie shore Year 1 divided by Year 2 9.2/12.5=1.35869 36%",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 227,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br><br><br><img src='image/set_46.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>How many more viewers did The Voice and Britain’s Got Talent have together in year 2 than in year 1?",
    "options": [
      "0.1 million",
      "0.2 million",
      "0.5 million",
      "0.7 million",
      "1.1 million"
    ],
    "answer": 4,
    "explanation": "The Voice: 3.4 and 4.1 in year 1 and 2 respectively Britain’s got talent: 5.2 and 5.6 in year 1 and 2 respectively Year I: 5.2+3.4=8.6 Year II: 5.6+4.1=9.7 Difference: 9.7-8.6=1.1",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 228,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br><br><br><img src='image/set_46.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Which is the least-watched TV show by males in year 2?",
    "options": [
      "Big Brother",
      "Fresh Meat",
      "The Voice",
      "Britain’s Got Talent",
      "Can’t tell"
    ],
    "answer": 2,
    "explanation": "The show that the fewest percentage of males watched in year 2 was The Voice.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 229,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br><br><br><img src='image/set_46.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>In percentage terms, what was the total increase in the number of viewers across all TV shows from year 1 to year 2?",
    "options": [
      "5%",
      "10%",
      "15%",
      "20%",
      "25%"
    ],
    "answer": 1,
    "explanation": "Year  2  (all  five  TV  show)  /  year1  (all  five  TV  show)  = (4.1+5.6+1.4+12.5+3)/(5+9.2+1.3+5.2+3.4) = 1.1037 10%",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 230,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br><br><br><img src='image/set_46.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>If the total population of females in year 2 was 30 million, how many males watched Geordie Shore in year 2?",
    "options": [
      "1.75 million",
      "2.38 million",
      "2.9 million",
      "6.2 million",
      "6.3 million"
    ],
    "answer": 3,
    "explanation": "Total population of females in year 2: 30 million Number of females who watched Geordie Shore: 30x0.21=6.3 million Number of males who watched Geordie Shore: 12.5-6.3=6.2 million SET 47",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 231,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Mobile Phone Plans Monthly fee for basic and premium plan fees: £45.29 and £47.89 respectively.<br><br><img src='image/set_47.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Each month, Claire sends 300 text messages and makes 75 mobile calls in the same network, each one minute on average. Which plan would be cheaper for Claire\n\n\nand by how much per month?",
    "options": [
      "Basic plan by £4.90",
      "Basic plan by £5.90",
      "Premium plan by £3.90",
      "Premium plan by £4.90",
      "Premium plan by £5.90"
    ],
    "answer": 3,
    "explanation": "Basic plan: £45.29 + £7.50 = £52.79 250 free texts – more than 75 free minutes: (300-250) x15 = £7.50 Premium plan: £47.89 More than 300 free texts – more than 75 free minutes £52.79 - £47.89 = £4.90",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 232,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Mobile Phone Plans Monthly fee for basic and premium plan fees: £45.29 and £47.89 respectively.<br><br><img src='image/set_47.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Adam wants to spend maximum £60 per month on a mobile plan. Excluding any included minutes, what is the maximum number of additional minutes he can use if he has the premium plan?",
    "options": [
      "105 minutes",
      "145 minutes",
      "201 minutes",
      "245 minutes",
      "283 minutes"
    ],
    "answer": 2,
    "explanation": "Premium plan: £47.89 £60 - £47.89 = 12.11, so he has £12.11 left Cheapest calls: Standard Calls – 6p 12.11/0.06= 201.83=201 minutes.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 233,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Mobile Phone Plans Monthly fee for basic and premium plan fees: £45.29 and £47.89 respectively.<br><br><img src='image/set_47.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>All basic plan charges increase by 1p; the basic plan fee remains unchanged. Andrew sends 45 texts, and uses 125 minutes in the same network and 325 minutes in other networks on average. How much is he worse off?0p",
    "options": [
      "75p",
      "£1.55",
      "£2.05",
      "£2.25"
    ],
    "answer": 4,
    "explanation": "45 texts free, 125 mins same network free, 100 minutes free with other network 225 mins other network in both options. Before 225 x 0.15 = 33.75\n\n\nAfter 225 x 0.16 = 36. Difference is £2.25",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 234,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Mobile Phone Plans Monthly fee for basic and premium plan fees: £45.29 and £47.89 respectively.<br><br><img src='image/set_47.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Daisy does not send any text messages ever. She makes 800 minutes of calls in the same network. Which plan would be cheaper for Daisy and by how much?",
    "options": [
      "Basic plan by £2.10",
      "Premium plan by £5.75",
      "Premium plan by £9.33",
      "Premium plan by £10.90",
      "Premium plan by £11.89"
    ],
    "answer": 3,
    "explanation": "Basic plan: £45.29 + £58.50 = £103.79 (800-150) x9p= £58.50 – 150 minutes for free Premium plan: £47.89 + £45.00 =£92.89 (800-500) x15p= 4500p = £45.00 – 500 minutes for free Difference: £103.79- £92.89 = £10.90",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 235,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Mobile Phone Plans Monthly fee for basic and premium plan fees: £45.29 and £47.89 respectively.<br><br><img src='image/set_47.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Kevin sends only text messages, 450 per month on average. If there were a 15% price increase in the monthly fee for both basic and premium plans, how much would Kevin save by changing to premium plan now?",
    "options": [
      "£23.43",
      "£25.01",
      "£27.01",
      "£27.10",
      "£28.91"
    ],
    "answer": 2,
    "explanation": "Basic plan: £45.29x1.15 + (450-250)x £0.15 = £52.08+£30.00=£82.08 Premium plan: £47.89x1.15=£55.07 Difference: £82.08 - £55.07=£27.01 SET 48",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 236,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br><br><br><img src='image/set_48.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>What was the mean monthly snowfall in cm across Davos and Chamonix Mont- Blanc during winter in 2015?",
    "options": [
      "12.325 cm",
      "16.875 cm",
      "19.738 cm",
      "26.842 cm",
      "43.123 cm"
    ],
    "answer": 1,
    "explanation": "Davos: 15cm, 15cm, 15cm and 10cm in November, December, January, February respectively Chamonix Mont-Blanc: 5cm, 40cm, 15cm, 20cm in November, December, January, February respectively We can use these figures to create the equation: (15+15+15+10)+(5+40+15+20)/8=16.875 cm",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 237,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br><br><br><img src='image/set_48.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>During Winter 2015, where was the average monthly snowfall the highest?",
    "options": [
      "Davos",
      "Chamonix Mont-Blanc",
      "Cortina d’Ampezzo",
      "Garmisch Partenkirchen",
      "Can’t tell"
    ],
    "answer": 2,
    "explanation": "Davos: 15cm, 15cm, 15cm and 10cm in November, December, January, February respectively Average snowfall in Davos: (15+15+15+10)/4 = 13.75 Chamonix Mont-Blanc: 5cm, 40cm, 15cm, 20cm in November, December, January, February respectively Average snowfall in Chamonix Mont-Blanc: (5+40+15+20)/4 =20 Cortina d’ Ampezzo: 50cm, 50cm, 40cm and 5cm in November, December, January, February respectively Average snowfall in Cortina d’ Ampezzo: (50+50+40+5)/4=36.25 Garmisch Partenkirchen: 10cm, 15cm, 35cm, 20cm in November, December, January, February respectively Average snowfall in Garmisch Partenkirchen: (10+15+35+20)/4=20\n\n\nSo the highest average snowfall was in Cotine d’Ampezzo.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 238,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br><br><br><img src='image/set_48.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>In percentage terms, how much more snow fell in December than in February overall?",
    "options": [
      "8%",
      "12%",
      "14%",
      "20%",
      "22%"
    ],
    "answer": 2,
    "explanation": "Inserting figures from all of the places into an equation: December/February = (15+15+50+40)/(35+10+40+20)=120/105=1.14",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 239,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br><br><br><img src='image/set_48.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>In November 2014, 30cm snow fell in the four areas together. In percentage terms, how much more snow fell in November 2015 in the four areas together?",
    "options": [
      "5%",
      "17%",
      "19%",
      "24%",
      "29%"
    ],
    "answer": 1,
    "explanation": "We are told that in November 2014 there is 30cm of snowfall (in all four areas) To work out November 2015, we need to add all the areas: - Garmisch- Partenkirchen: 10cm, Davos: 15cm, Cortina d’Ampezzo: 5cm, Chamonix Mont-Blanc: 5cm This gives us 35cm for November 2015 This gives us the equation: 35/30=1.1667",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 240,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br><br><br><img src='image/set_48.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>How much snow fell in Cortina d’ Ampezzo and Garmisch Partenkirchen in November and February together?",
    "options": [
      "20 cm",
      "30 cm",
      "60 cm",
      "90 cm",
      "145 cm"
    ],
    "answer": 3,
    "explanation": "We need to add the values for November and February for both of these places. Cortina d’ Ampezzo 5 + 40 = 45 Garmisch Partenkirchen 35 + 10 = 45 Sum: 45 + 45 = 90 SET 49",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 241,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Please find below Kevin’s expenses for December 2015. Mileage paid at £0.25 per mile for the first 100 miles each month and £0.10 thereafter<br><br><img src='image/set_49.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>The greatest proportion of December expenses related to which client?",
    "options": [
      "HSBC",
      "Soros Fund Management",
      "Black Rock",
      "MKB",
      "Can’t Tell"
    ],
    "answer": 0,
    "explanation": "Remember that two expenses relate to HSBC: Sum: £35.90+£16.80=£52.70 Check: Sum is greater than any other item on the list.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 242,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Please find below Kevin’s expenses for December 2015. Mileage paid at £0.25 per mile for the first 100 miles each month and £0.10 thereafter<br><br><img src='image/set_49.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>What is the total expense in December?",
    "options": [
      "£121.50",
      "£137.60",
      "£142.45",
      "£146.50",
      "£210.40"
    ],
    "answer": 1,
    "explanation": "Add all of the expenses from each company together. £35.90+£16.80+£15.40+£20.00+£49.50=£137.60",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 243,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Please find below Kevin’s expenses for December 2015. Mileage paid at £0.25 per mile for the first 100 miles each month and £0.10 thereafter<br><br><img src='image/set_49.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>In percentage terms, how much more did Kevin spend on meals than on train tickets?",
    "options": [
      "35%",
      "41%",
      "59%",
      "149%",
      "141%"
    ],
    "answer": 4,
    "explanation": "Meal/Train: (£35.90+£49.50)/(£15.40+£20.00)-1=1.413 141%",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 244,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Please find below Kevin’s expenses for December 2015. Mileage paid at £0.25 per mile for the first 100 miles each month and £0.10 thereafter<br><br><img src='image/set_49.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>How many miles did Kevin travel by his car in December?",
    "options": [
      "50.5 miles",
      "67.2 miles",
      "67.9 miles",
      "78.4 miles",
      "112.6 miles"
    ],
    "answer": 1,
    "explanation": "Mileage paid at £0.25 per mile for the first 100 miles each month and £0.10 thereafter Paid: £16.80 100 miles x £0.25 per mile = £25 this is higher than £16.80 that Kevin actually paid, so the £0.25 per mile applies. £16.80/£0.25=67.2",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 245,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Please find below Kevin’s expenses for December 2015. Mileage paid at £0.25 per mile for the first 100 miles each month and £0.10 thereafter<br><br><img src='image/set_49.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>The company decides to change its policy from 2016 and only 75% of travel expenses and 90% of accommodation and meal expenses will be reimbursed. How much money would Kevin have lost in December if the new policy had been implemented already in 2015?",
    "options": [
      "£8.54",
      "£14.22",
      "£13.05",
      "£21.59",
      "£39.15"
    ],
    "answer": 3,
    "explanation": "The total sum of travel expenses - £16.80+£15.40+£20.00=£52.2 75% of travel expenses - £52.2 x 0.75 =£39.15 Difference - £52.2-£39.15= £13.05 Accommodation and meal expenses - £35.90+£49.50=£85.40 90% of accommodation and meal expenses - £85.40x0.9=£76.86 Difference - £85.40—£76.86=£8.54 Sum of differences: £13.05+£8.54=£21.59 SET 50",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 246,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The table below shows the cost of jet ski renting. There are four different jet skies: Alpha, Beta, Gamma and Delta. The deposit is non-refundable.<br><br><img src='image/set_50.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>How much is the deposit for Alpha jet ski?",
    "options": [
      "£20",
      "£30",
      "£40",
      "£50",
      "£60"
    ],
    "answer": 0,
    "explanation": "£30 per hour and Total cost £50 £50-£30=£20",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 247,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The table below shows the cost of jet ski renting. There are four different jet skies: Alpha, Beta, Gamma and Delta. The deposit is non-refundable.<br><br><img src='image/set_50.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>What is the difference between the total cost of renting a Beta and a Gamma jet ski for 6 hours each?",
    "options": [
      "£150",
      "£155",
      "£200",
      "£205",
      "£215"
    ],
    "answer": 1,
    "explanation": "Gamma for 6 hours = £25 deposit + (£115 x 6 hours) = 25 + 690 = £715 Beta for 6 hours = £20 deposit + (£90 x 6 hours) = 20 + 540 = £560 Difference = 715 – 560 = £155",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 248,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The table below shows the cost of jet ski renting. There are four different jet skies: Alpha, Beta, Gamma and Delta. The deposit is non-refundable.<br><br><img src='image/set_50.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Aron has £500 for jet ski renting. Which jet skis can he afford to rent for an hour?",
    "options": [
      "Alpha only",
      "Alpha and Beta and Gamma",
      "Alpha and Beta and Gamma and Delta",
      "Beta only",
      "Gamma only"
    ],
    "answer": 1,
    "explanation": "Using the information from the table: Alpha: £50 Gamma: £140 Beta: £110 Delta: £250\n\n\nAron can afford to rent Alpha, Beta and Gamma for one hour (£300). Alpha, Beta, Gamma and Delta would cost £550 which is out of his budget.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 249,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The table below shows the cost of jet ski renting. There are four different jet skies: Alpha, Beta, Gamma and Delta. The deposit is non-refundable.<br><br><img src='image/set_50.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Andrew and Thomas want to rent Alpha and Gamma jet ski for three hours. How much will they pay in total?",
    "options": [
      "£360",
      "£480",
      "£660",
      "£690",
      "£960"
    ],
    "answer": 1,
    "explanation": "Alpha: £30 per half an hour £90 for three hours plus deposit of £20 £110 Gamma: 3hours x £115 (cost per hour) + £25 (deposit) = £370 Sum: £110+£370=£480",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 250,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The table below shows the cost of jet ski renting. There are four different jet skies: Alpha, Beta, Gamma and Delta. The deposit is non-refundable.<br><br><img src='image/set_50.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>If the deposit for Delta jet ski is increased by 5% on Sundays, what will be the total cost of renting a Delta jet ski for 8 hours on a Sunday?",
    "options": [
      "£990",
      "£1200",
      "£1305",
      "£1605",
      "£1900"
    ],
    "answer": 2,
    "explanation": "Old: Deposit £100 + (£150x8) = £1300 New: (£100 x 1.05) + (£150x8) = £1305 SET 51",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 251,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Flight tickets to various regions from the UK Assumed exchange rate is 1£ = 2$ = 1.5€<br><br><img src='image/set_51.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>What is the price of the cheapest offer to East Asia in pounds (£)?",
    "options": [
      "£238",
      "£252",
      "£267",
      "£276",
      "£280"
    ],
    "answer": 2,
    "explanation": "Remember to convert all of the prices into £ Around the World offers a price of 400 €. Every 1.5€ equals the value of 1£. 400/1.5 = 266,67 rounded up to £267. This is cheaper than the other options available.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 252,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Flight tickets to various regions from the UK Assumed exchange rate is 1£ = 2$ = 1.5€<br><br><img src='image/set_51.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>On average how much more expensive is it to choose a non-European destination with Good Fly than to choose a European one? (rounded up to one digit)",
    "options": [
      "£185.2",
      "£186.3",
      "£186.9",
      "£189.8",
      "£191.0"
    ],
    "answer": 1,
    "explanation": "The differences from the European price in pounds are 190, 175, 180 and 200. The average of the differences is (190+175+180+200)/4 = 186.25 rounded up to 186.3",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 253,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Flight tickets to various regions from the UK Assumed exchange rate is 1£ = 2$ = 1.5€<br><br><img src='image/set_51.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Take Me There decides to offer a 50$ discount on every travel to the Americas. In percentages, how much more expensive is the discounted ticket to North America than the original price offered by In The Air?",
    "options": [
      "2%",
      "4%",
      "5%",
      "7%",
      "11%"
    ],
    "answer": 0,
    "explanation": "The discounted price of Take Me There is 560-50=510$, in pounds 510/2=255 This discounted ticket is £5 more expensive than the original price of In The Air (£250). In percentages, this difference is 5/250x100 = 2%",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 254,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Flight tickets to various regions from the UK Assumed exchange rate is 1£ = 2$ = 1.5€<br><br><img src='image/set_51.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Around The World only sells 10 tickets to Australia and 5 tickets to South America. Good Fly only sells 25 tickets to Europe and 12 tickets to Australia. Rounded to two decimals, what is the difference between the total revenues of these two companies, in percentage of the higher revenue?",
    "options": [
      "33.33%",
      "34.86%",
      "34.43%",
      "35.35%",
      "36.36%"
    ],
    "answer": 2,
    "explanation": "The total revenue of Around The World is 10x450+5x300=€6000, in pounds 6000/1.5=£4000 The total revenue of Good Fly is 25x100+12x300= £6100 The difference between revenues is £2100, which is 2100/6100x100=34.42….% of the higher revenue, rounded up to 34.43%",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 255,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Flight tickets to various regions from the UK Assumed exchange rate is 1£ = 2$ = 1.5€<br><br><img src='image/set_51.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>The £ to $ exchange rate changes in a way that £1 = 2.5$. In pounds, what is the difference between the original and the new ticket price of Take Me There to Australia?",
    "options": [
      "£55",
      "£58",
      "£61",
      "£64",
      "£75"
    ],
    "answer": 2,
    "explanation": "The original price in pounds is 610/2=£305, the new price is 610/2.5=£244. The difference is 305-244=£61\n\n\nSET 52",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 256,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br><br><br><img src='image/set_52.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Which industry has the largest contribution to Indian GDP?",
    "options": [
      "Agriculture, Forestry and Fishing",
      "Construction",
      "Government and Other Services",
      "Manufacturing",
      "Other Production"
    ],
    "answer": 3,
    "explanation": "Looking at the pie chart for Indian GDP, the largest section is for manufacturing, which accounts for 24% of total Indian GDP.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 257,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br><br><br><img src='image/set_52.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Expressing ‘Government and Other Services’ as a percentage of ‘Business Services and Finance’, what is the difference between these ratios in India and the UK?",
    "options": [
      "10%",
      "12%",
      "26%",
      "34%",
      "67%"
    ],
    "answer": 2,
    "explanation": "UK: Government and Other Services (24%) / Business Services and Finance (28%) = 86% India: Government and Other Services (9%) / Business Services and Finance (15%) = 60% UK – India = 26%",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 258,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br><br><br><img src='image/set_52.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>What are the top three contributing sectors to Indian GDP?",
    "options": [
      "Business Services Finance; Distribution, Hotels and Catering; Manufacturing",
      "Agriculture, Forestry and Fishing; Business Services Finance; Manufacturing",
      "Distribution, Hotels and Catering; Government and Other Services; Business Services and Finance",
      "Construction; Manufacturing; Transportation, Storage and Communication",
      "Distribution, Hotels and Catering"
    ],
    "answer": 0,
    "explanation": "The three largest sections of the pie chart for Indian GDP are: Distribution, Hotels and Catering 20% Business Services Finance 15% Manufacturing: 24%",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 259,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br><br><br><img src='image/set_52.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>If the Indian GDP was £2 trillion and the UK GDP was £4.2 trillion in 2014. How much more did the bottom two performing sectors contribute to the UK GDP than to the Indian GDP?",
    "options": [
      "£10 Billion",
      "£15 Billion",
      "£21 Billion",
      "£30 Billion",
      "£40 Billion"
    ],
    "answer": 3,
    "explanation": "Bottom two performing sector in the UK: Agriculture, Forestry and Fishing (1%), Other Production (4%) Contribution: £4.2tn (total GDP) x 0.05 (1%+4%) = £210Bn Bottom two performing sector in India: Other Production (3%), Construction (6%) Contribution: £2tn (total GDP) x 0.12 (9%+3%) = £180Bn UK minus India: £210Bn - £180Bn = £30Bn",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 260,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br><br><br><img src='image/set_52.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>If the Indian GDP was £2 trillion and the UK GDP was £4.2 trillion in 2014. In monetary terms which sector was the largest?",
    "options": [
      "Business Services and Finance in the India with £400 Billion",
      "Business Services and Finance in the UK with £400 Billion",
      "Manufacturing in India with £1.176 trillion",
      "Business Services and Finance in the UK with £1.176 trillion",
      "Business Services and Finance in the UK with £2 trillion"
    ],
    "answer": 3,
    "explanation": "Largest sector in the UK: Business Services and Finance: £4.2tn x 0.28 =£1.176tn Largest sector in India: Manufacturing: £2tn x 0.2 =£400Bn Size of the UK economy: £4.2tn Size of Business Services and Finance in the UK is £1.176tn, which is the largest SET 53",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 261,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The table below shows the average value of 1 Japanese Yen (JPY).<br><br><img src='image/set_53.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>How much USD could you get for 1500 Yen in 2011?",
    "options": [
      "USD 19.50",
      "USD 21.00",
      "USD 21.90",
      "USD 25.50",
      "USD 100.50"
    ],
    "answer": 0,
    "explanation": "1500 JPY at 1 JPY = 0.013 USD 1500 x 0.013 = 19.50",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 262,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The table below shows the average value of 1 Japanese Yen (JPY).<br><br><img src='image/set_53.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>What was the GBP/USD average exchange rate in 2013 based on the information available?",
    "options": [
      "0.85",
      "0.92",
      "1.26",
      "1.47",
      "1.54"
    ],
    "answer": 3,
    "explanation": "I JPY = 0.022 GBP\n\n\n1 JPY = 0.015 USD GBP/USD = 0.022 / 0.015 = 1.47",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 263,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The table below shows the average value of 1 Japanese Yen (JPY).<br><br><img src='image/set_53.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>In percentage terms, what was the increase in JPY/CAD exchange rate between 2011 and 2012?",
    "options": [
      "3.5%",
      "3.9%",
      "4.5%",
      "5.1%",
      "11.5%"
    ],
    "answer": 0,
    "explanation": "% increase: ((JPY/CAD) 2012 / (JPY/CAD) 2011) - 1 = 0.119 / 0.115 = 0.0348. 3.5%.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 264,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The table below shows the average value of 1 Japanese Yen (JPY).<br><br><img src='image/set_53.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>How much more JPY would I have received for USD 1300 in 2010 than in 2013?",
    "options": [
      "JPY 43,333",
      "JPY 45,000",
      "JPY 45,225",
      "JPY 46,310",
      "JPY 47,450"
    ],
    "answer": 0,
    "explanation": "USD 1300 at USD/JPY rate of 0.010 in 2010 JPY 130,000 USD 1300 at USD/JPY rate of 0.015 in 2013 JPY 86,667 Difference: JPY 130,000 - JPY 86,667 = 43,333",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 265,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The table below shows the average value of 1 Japanese Yen (JPY).<br><br><img src='image/set_53.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Which exchange rate has been the least volatile between 2010 and 2013?",
    "options": [
      "CAD",
      "USD",
      "EUR",
      "JPY",
      "GBP"
    ],
    "answer": 2,
    "explanation": "Looking at the table it is easy to notice that EUR exchange rate is near constant over the given time period except for one change in 2011 by 0.001. This is smaller than all the other currency changes SET 54",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 266,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The table below shows changes in car use and population in four American cities between 2009 and 2014.<br><br><img src='image/set_54.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>In which city was the population growth the largest between 2009 and 2014?",
    "options": [
      "Boston",
      "Chicago",
      "Denver",
      "El Monte",
      "Can’t Tell"
    ],
    "answer": 3,
    "explanation": "Boston: 4.4 – 4 = 0.4 million Chicago: 3.3 – 3.5 = -0.2 million Denver: 2.1 – 2 = 0.1 million El Monte 1.5 – 0.8 = 0.7 million El Monte has the highest growth in population",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 267,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The table below shows changes in car use and population in four American cities between 2009 and 2014.<br><br><img src='image/set_54.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>In which city was the growth in the number of cars used the largest between 2009 and 2014?",
    "options": [
      "Boston",
      "Chicago",
      "Denver",
      "El Monte",
      "Can’t Tell"
    ],
    "answer": 0,
    "explanation": "Boston: 542,000– 235,675 = 306,325 Chicago: 350,685 – 345,526 = 5159 Denver: 249,990 – 231,456 = 18534 El Monte 62,044 – 54,000 = 8044",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 268,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The table below shows changes in car use and population in four American cities between 2009 and 2014.<br><br><img src='image/set_54.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>In which city was the number of cars per person the lowest in 2014?",
    "options": [
      "Boston",
      "Chicago",
      "Denver",
      "El Monte",
      "Can’t Tell"
    ],
    "answer": 3,
    "explanation": "Boston: 542,000/4.4 million = 0.123 Chicago: 350,685/3.3 million = 0.106 Denver: 249,990/2.1 million = 0.119\n\n\nEl Monte 62,044/1.5 million = 0.041",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 269,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The table below shows changes in car use and population in four American cities between 2009 and 2014.<br><br><img src='image/set_54.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>In which city was the change in the number of cars per person the largest between 2009 and 2014?",
    "options": [
      "Boston",
      "Chicago",
      "Denver",
      "El Monte",
      "Can’t Tell"
    ],
    "answer": 0,
    "explanation": "2014: Boston: 542,000/4.4 million = 0.123 Chicago: 350,685/3.3 million = 0.106 Denver: 249,990/2.1 million = 0.119 El Monte 62,044/1.5 million = 0.041 2009: Boston: 235,675/4 million = 0.059 Chicago: 345,526/3.5 million = 0.099 Denver: 231,456/2 million = 0.116 El Monte 54,000/0.8 million = 0.068 Difference: Boston: 0.123 - 0.059 = 0.064 Chicago: 0.106 - 0.099 = 0.007 Denver: 0.119 - 0.116 = 0.003 El Monte: 0.041 - 0.068 = -0.027",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 270,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The table below shows changes in car use and population in four American cities between 2009 and 2014.<br><br><img src='image/set_54.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>What is the difference between the number of cars per person in 2009 and 2014 in Boston?",
    "options": [
      "0.0064",
      "0.035",
      "0.054",
      "0.064",
      "0.065"
    ],
    "answer": 3,
    "explanation": "2009: Boston: 235,675/4 million = 0.059 2014: Boston: 542,000/4.4 million = 0.123 Difference: Boston: 0.123 - 0.059 = 0.064 SET 55",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 271,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The table shows the change in tax rates and bands from tax year 2014-15 to 2015-16. Family: Adam, Lewis, Courtney and Bruno<br><br><img src='image/set_55.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Adam earned £37,000 in 2014-15. How much income was deducted from his salary during that year?",
    "options": [
      "£4560",
      "£6730",
      "£8129.50",
      "£9110.75",
      "£9530"
    ],
    "answer": 4,
    "explanation": "Starting rate: 15 % of 2,450 £367.5 Basic rate: 25% of 2,450 – 33,500 so 25% of £31,050 £7762.50 Higher rate: 40% of 33,500 – 37,000 40% of £3500 £1400 Overall: £367.5 + £7762.25 + £1400 =£9530",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 272,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The table shows the change in tax rates and bands from tax year 2014-15 to 2015-16. Family: Adam, Lewis, Courtney and Bruno<br><br><img src='image/set_55.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Bruno and Lewis each have a part-time job at a local pub and each earned £7,000 per year in 2014-15. What is the difference between their annual incomes after\n\n\nincome tax has been deducted?",
    "options": [
      "£0",
      "£50",
      "£176",
      "£450",
      "£745"
    ],
    "answer": 0,
    "explanation": "They earn the same salary.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 273,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The table shows the change in tax rates and bands from tax year 2014-15 to 2015-16. Family: Adam, Lewis, Courtney and Bruno<br><br><img src='image/set_55.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Courtney received £42,000 in the tax year 2014-15. What was her average monthly income tax deduction?",
    "options": [
      "£878.98",
      "£898.98",
      "£910.15",
      "£960.83",
      "£1024.58"
    ],
    "answer": 3,
    "explanation": "Starting rate: 15 % of 2,450 £367.5 Basic rate: 25% of 2,451 – 33,500 so 25% of £31,049 £7762.25 Higher rate: 40% of 33,500 – 42,000 40% of £8500 £3400 Monthly average: (£367.5+ £7762.25+ £3400)/12 =£960.80",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 274,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The table shows the change in tax rates and bands from tax year 2014-15 to 2015-16. Family: Adam, Lewis, Courtney and Bruno<br><br><img src='image/set_55.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Adam earned a performance bonus of £4,000 in 2014-15, increasing his salary from £37,000 to £41.000. By how much did his income tax change from what it would have been for this year without the performance bonus?",
    "options": [
      "£1200",
      "£1600",
      "£1800",
      "£2100",
      "£3400"
    ],
    "answer": 1,
    "explanation": "Adam’s income tax with £37,000 salary Starting rate: 15 % of 2,450 £367.5 Basic rate: 25% of 2,451 – 33,500 so 25% of £31,049 £7762.25 Higher rate: 40% of 33,500 – 37,000 40% of £3500 £1400 Overall: £367.5+ £7762.25+ £1400 =£9529.75 Adam’s income tax with £41,000 salary Starting rate: 15 % of 2,450 £367.5 Basic rate: 25% of 2,451 – 33,500 so 25% of £31,049 £7762.25 Higher rate: 40% of 33,500 – 41,000 40% of £7500 £3000 Overall: £367.5+ £7762.25+ £3000=£11129.75 Difference: £11129.75 - £9529.75= £1600",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 275,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The table shows the change in tax rates and bands from tax year 2014-15 to 2015-16. Family: Adam, Lewis, Courtney and Bruno<br><br><img src='image/set_55.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>How much did the starting rate upper bound change from 2014-15 to 2015-16?",
    "options": [
      "£80 decrease",
      "£150 decrease",
      "£280 decrease",
      "£150 increase",
      "£280 increase"
    ],
    "answer": 4,
    "explanation": "2014-15: £2,450 2015-16: £2,730 Difference: £2,730 - £2,450 = £280 increase SET 56",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 276,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The table below shows the annual summary for performance evaluation of four partners at a management consulting firm. The bonus earned is calculated by multiplying the total sales by the bonus rate.<br><br><img src='image/set_56.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Who received the highest bonus?",
    "options": [
      "Adam",
      "John",
      "Richard",
      "Daniel",
      "Can’t Tell"
    ],
    "answer": 3,
    "explanation": "Follows from the table.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 277,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The table below shows the annual summary for performance evaluation of four partners at a management consulting firm. The bonus earned is calculated by multiplying the total sales by the bonus rate.<br><br><img src='image/set_56.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>What is the average sales per project generated by Daniel?",
    "options": [
      "£83,755,000",
      "£93,450,000",
      "£96,345,000",
      "£99,950,000",
      "£100,145,000"
    ],
    "answer": 1,
    "explanation": "£654,150,000 (total sales) / 7 (number of projects) = 93,450,000",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 278,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The table below shows the annual summary for performance evaluation of four partners at a management consulting firm. The bonus earned is calculated by multiplying the total sales by the bonus rate.<br><br><img src='image/set_56.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>How much bonus did Richard and Adam receive together?",
    "options": [
      "£5,500,000",
      "£6,000,000",
      "£6,350,000",
      "£7,250,000",
      "£7,650,000"
    ],
    "answer": 4,
    "explanation": "£45,000,000 x 1% + £180,000,000 x 4% = 450,000 + 7,200,000 = 7,650,000",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 279,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The table below shows the annual summary for performance evaluation of four partners at a management consulting firm. The bonus earned is calculated by multiplying the total sales by the bonus rate.<br><br><img src='image/set_56.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Whose customer satisfaction rate was the highest?",
    "options": [
      "Adam",
      "John",
      "Richard",
      "Daniel",
      "Can’t Tell"
    ],
    "answer": 0,
    "explanation": "Follows from the table.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 280,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The table below shows the annual summary for performance evaluation of four partners at a management consulting firm. The bonus earned is calculated by multiplying the total sales by the bonus rate.<br><br><img src='image/set_56.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>How much was the total sales generated by the four partners together?",
    "options": [
      "£1,029,603,000",
      "£1,135,150,000",
      "£1,529,540,000",
      "£1,529,110,000",
      "£2,130,042,000"
    ],
    "answer": 0,
    "explanation": "Sum: £45,000,000 + £150,453,000 + £180,000,000 +£654,150,000 = £1,029,603,000 SET 57",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 281,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The table below shows the daily share price movements of four UK companies: Market Capitalisation is calculated as: number of shares outstanding (volume) multiplied by share price<br><br><img src='image/set_57.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>What was the share price of GSK yesterday?",
    "options": [
      "£132.873",
      "£134.157",
      "£134.257",
      "£134.345",
      "£135.012"
    ],
    "answer": 2,
    "explanation": "Previous day share price x (1 + change from previous day) = current share price Change from previous day is +0.13% Current share price is £134.432 £134.432 / (1-0.0013) = £134.257",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 282,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The table below shows the daily share price movements of four UK companies: Market Capitalisation is calculated as: number of shares outstanding (volume) multiplied by share price<br><br><img src='image/set_57.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>What was difference between the daily highest and lowest price of British Land?",
    "options": [
      "£0",
      "£0.01",
      "£0.02",
      "£0.025",
      "£0.3"
    ],
    "answer": 2,
    "explanation": "British Land highest: 54.934 British Land lowest: 54.914 Difference: 54.934 - 54.914 = 0.02",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 283,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The table below shows the daily share price movements of four UK companies: Market Capitalisation is calculated as: number of shares outstanding (volume) multiplied by share price<br><br><img src='image/set_57.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>What was the market capitalisation of HSBC yesterday assuming that the volume is unchanged?",
    "options": [
      "£186,250,178.618",
      "£186,350,178.618",
      "£186,450,178.618",
      "£186,650,178.618",
      "£186,862,262.351"
    ],
    "answer": 4,
    "explanation": "Calculate previous day share price first, then calculate market capitalisation HSBC current share price: 25.432 HSBC volume: 7,345,321 Market capitalisation: 25.432 x 7,345,321 = 186,806,203.672 Change from previous day: -0.03% 25.432/(1-0.0003) = 25.4396318896 Therefore, the market capitalisation previous day was 186,806,203.672 / (1 + 0.03) =186,750,178.618 25.439 etc. x 7,345,321 = 186, 862, 262.351",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 284,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The table below shows the daily share price movements of four UK companies: Market Capitalisation is calculated as: number of shares outstanding (volume) multiplied by share price<br><br><img src='image/set_57.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Which company’s actual share price changed the most from yesterday?",
    "options": [
      "HSBC",
      "British Land",
      "BP",
      "GSK",
      "Can’t Tell"
    ],
    "answer": 2,
    "explanation": "Follows from the table.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 285,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The table below shows the daily share price movements of four UK companies: Market Capitalisation is calculated as: number of shares outstanding (volume) multiplied by share price<br><br><img src='image/set_57.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>What is the difference between the latest market capitalisation of BP and British Land?",
    "options": [
      "993,441,229.268",
      "993,941,234.268",
      "994,114,112.268",
      "994,241,299.268",
      "1,113,345,891.268"
    ],
    "answer": 0,
    "explanation": "BP market cap: 286.123 (share price) x 4,431,748 (volume) = 1,268,025,033.004 British Land market cap: 54.923 (share price) x 4,999,432 (volume) = 274,583,803,736 Difference: 1,268,025,033.004 - 274,583,803,736 = 993,441,229.268 SET 58",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 286,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The table below is a summary of students who signed up for the following courses at St. Mary Grammar School: Students can take more than one course.<br><br><img src='image/set_58.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>For which course is the ratio of women and men most similar to that of Psychology?",
    "options": [
      "Mathematics",
      "Physics",
      "Programming",
      "Literature",
      "History"
    ],
    "answer": 3,
    "explanation": "Psychology: 10/6 = 1.66 To determine the course with a similar ratio of men to women as psychology, we need to calculate the ratios for all of the other courses\n\n\nMathematics: 8/7 =1.14 Physics: 10/15 = 0.66 Programming: 4/5 = 0.8 Literature: 12/8 = 1.5 History: 7/7 =1 From these figures, we can see that Literature has the most similar ratio.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 287,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The table below is a summary of students who signed up for the following courses at St. Mary Grammar School: Students can take more than one course.<br><br><img src='image/set_58.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>For which course is the ratio of women and men most similar to that of Physics?",
    "options": [
      "Mathematics",
      "Psychology",
      "Programming",
      "Literature",
      "History"
    ],
    "answer": 2,
    "explanation": "Physics: 10/15 = 0.66 Similarly to the previous question, we need to calculate the ratios for all other courses Psychology: 10/6 = 1.66 Mathematics: 8/7 =1.14 Programming: 4/5 = 0.8 Literature: 12/8 = 1.5 History: 7/7 =1",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 288,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The table below is a summary of students who signed up for the following courses at St. Mary Grammar School: Students can take more than one course.<br><br><img src='image/set_58.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>What is the total number of women in St. Mary Grammar School?",
    "options": [
      "34",
      "51",
      "64",
      "145",
      "Can’t Tell"
    ],
    "answer": 4,
    "explanation": "Can’t tell because students can take more than one course.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 289,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The table below is a summary of students who signed up for the following courses at St. Mary Grammar School: Students can take more than one course.<br><br><img src='image/set_58.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>What is the total proportion of women to men?",
    "options": [
      "0.25",
      "0.5",
      "0.96",
      "1",
      "Cannot Say"
    ],
    "answer": 4,
    "explanation": "As one student can take more than one course and we do not have any information about the total number of students we cannot say.",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 290,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The table below is a summary of students who signed up for the following courses at St. Mary Grammar School: Students can take more than one course.<br><br><img src='image/set_58.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>If three new students arrive at St. Mary Grammar School and they are all women studying Psychology. What is the change in the ratio of women to men studying Psychology?",
    "options": [
      "0.1",
      "0.3",
      "0.5",
      "0.7",
      "1.2"
    ],
    "answer": 2,
    "explanation": "Before ratio: 10:6 = (10/6):1 = 1.66:1 After ratio: 13:6 = (13/6):1 = 2.16:1 Difference: 2.16-1.66 = 0.5 SET 59",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 291,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>This graph below shows the employment statistics (in percentages) of the men and women living in the UK in September 2015. A person is considered being in employment if they are shown as employed, self-employed, or “employed other”.<br><br><img src='image/set_59.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>The difference between the percentage of women and men in employment is:",
    "options": [
      "0.6",
      "0.7",
      "1.2",
      "3.2",
      "4.2"
    ],
    "answer": 0,
    "explanation": "Women in employment: 85.5% (employed) + 5% (self-employed) + 2.7% (employed other) = 93.2% Men in employment: 81.3% (employed) + 8% (self-employed) + 4.5% (employed other) = 93.8% Difference: 93.8% - 93.2% = 0.6",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 292,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>This graph below shows the employment statistics (in percentages) of the men and women living in the UK in September 2015. A person is considered being in employment if they are shown as employed, self-employed, or “employed other”.<br><br><img src='image/set_59.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>The proportion of men to women self-employed or unemployed is:",
    "options": [
      "0.1",
      "0.5",
      "0.9",
      "1.2",
      "1.7"
    ],
    "answer": 3,
    "explanation": "Women self-employed: 5% - Women unemployed: 6.8% sum: 11.8%\n\n\nMen self-employed: 8% - Men unemployed: 6.1% sum: 14.1% Ratio men to women: 14.1% / 11.8% = 1.2",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 293,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>This graph below shows the employment statistics (in percentages) of the men and women living in the UK in September 2015. A person is considered being in employment if they are shown as employed, self-employed, or “employed other”.<br><br><img src='image/set_59.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>If there are overall 21 million women in employment in the UK how many women are self-employed?",
    "options": [
      "0.59 million",
      "0.86 million",
      "0.93 million",
      "1.07 million",
      "1.13 million"
    ],
    "answer": 4,
    "explanation": "21 million (women employed) x 0.05 (5% self-employed) = 1.05 million If there are 21 million women in employment 21 million are either employed, self-employed or employed other – so 21 million women is (85.5+5+2.7) 93.2% of the country. This means 6.8% of the country is 1532189 so country population is 22,532,189. 5% of this is 1,126,609 so answer should be 1.13 million",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 294,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>This graph below shows the employment statistics (in percentages) of the men and women living in the UK in September 2015. A person is considered being in employment if they are shown as employed, self-employed, or “employed other”.<br><br><img src='image/set_59.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>If there are 31 million men and 32 million women living in the UK, how many more women are unemployed than men?",
    "options": [
      "285,000",
      "423,000",
      "659,500",
      "735,000",
      "810,000"
    ],
    "answer": 0,
    "explanation": "Men unemployed: 6.1% 31 million x 0.061 = 1.891 Women unemployed: 6.8% 32 million x 0.068 = 2.176 Difference 2.176 – 1.891 = 0.285",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 295,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>This graph below shows the employment statistics (in percentages) of the men and women living in the UK in September 2015. A person is considered being in employment if they are shown as employed, self-employed, or “employed other”.<br><br><img src='image/set_59.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>What is the proportion of employed to unemployed women in the UK?",
    "options": [
      "2.87",
      "5.43",
      "8.51",
      "13.7",
      "15.91"
    ],
    "answer": 3,
    "explanation": "Women in employment (as defined above): 93.2 Unemployed women: 6.8 93.2/6.8 = 13.7 SET 60",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 296,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>This chart shows the expenses of the Jones household for this month. Overall they spent 360 pounds.<br><br><img src='image/set_60.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>How much was their energy cost (electricity and gas) this month?",
    "options": [
      "65 pounds",
      "85 pounds",
      "90 pounds",
      "155 pounds",
      "200 pounds"
    ],
    "answer": 2,
    "explanation": "Energy cost: electricity plus gas. Note that Gas and Electricity together add up to ¼ of the total area. And therefore, 360 pounds x ¼ = 90 pounds",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 297,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>This chart shows the expenses of the Jones household for this month. Overall they spent 360 pounds.<br><br><img src='image/set_60.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>What is the ratio of household purchases, travel and gas costs to energy costs (electricity and gas)?",
    "options": [
      "0.5:1",
      "1:1",
      "1.5:1",
      "2:1",
      "3:1"
    ],
    "answer": 3,
    "explanation": "Household purchases, travel and gas costs – ½ of the total area 180 pounds Energy costs – ¼ of the total area 90 pounds Ratio: 180 / 90 = 2",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 298,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>This chart shows the expenses of the Jones household for this month. Overall they spent 360 pounds.<br><br><img src='image/set_60.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Which cost item was the greatest this month?",
    "options": [
      "Gas",
      "Travel",
      "Electricity",
      "Household purchases",
      "Energy"
    ],
    "answer": 1,
    "explanation": "The largest section of the pie chart is for ‘Travel’",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 299,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>This chart shows the expenses of the Jones household for this month. Overall they spent 360 pounds.<br><br><img src='image/set_60.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>If the total cost of household purchases, travel and gas costs was 180 pounds. How much were the energy costs in total this month?",
    "options": [
      "80 pounds",
      "87.5 pounds",
      "89.5 pounds",
      "90 pounds",
      "95 pounds"
    ],
    "answer": 3,
    "explanation": "Household purchases, travel and gas costs – ½ of the total area 180 pounds Energy costs – ¼ of the total area 90 pounds",
    "topic": "Quantitative Reasoning"
  },
  {
    "id": 300,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>This chart shows the expenses of the Jones household for this month. Overall they spent 360 pounds.<br><br><img src='image/set_60.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Which was the smallest cost item this month?",
    "options": [
      "Gas",
      "Travel",
      "Electricity",
      "Household purchases",
      "TV subscription\n\n\nABSTRACT REASONING The Basics The abstract reasoning section of the UKCAT will test your ability to think beyond the information that is readily available to you in form of the information provided by the question. The idea behind this section of the paper is to test how well the candidate is able to respond to questions that may go beyond the scope of their knowledge or require them to apply their existing knowledge in an unusual way. This is thought to be helpful in determining how well a student will be able to interpret information such as scans, X-rays or other test results as a clinician. This section of the test examines pattern recognition and the logical approach to a series of symbols in order to match symbols to one group or another. There are a number of different question types, but all require one key skill – the ability to recognise patterns in a set of shapes In this section of the UKCAT, you have to answer 55 questions in only 13 minutes (with one additional minute to read instructions). Thus, it is mathematically the most time pressured section of the UKCAT. But in terms of timing, think of it in terms of the image sets. There are multiple questions per image set. Since the main investment in time is in figuring out the pattern, you have a greater proportion of the time to spend on the first question in each set. Then all subsequent questions in that set will be easy and quick to answer. By far the hardest task is deducing the rules – once you have them, matching the options to the correct set is straightforward. Therefore as a rule of thumb, if the image set has 5 questions on it you have about 60 seconds to work out the pattern. Then, match the options to the set they each belong in using the remaining time allocation. TIMINGS"
    ],
    "answer": 4,
    "explanation": "The smallest section of the pie chart is for ‘TV subscription’",
    "topic": "Quantitative Reasoning"
  }
];
