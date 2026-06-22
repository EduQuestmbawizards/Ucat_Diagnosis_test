const PASSAGES = {};

const QUESTIONS = [
  {
    "id": 1,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br><img src='image/da_table_1.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>What is the best interpretation of the coded message: 2D, 3, 9, 10(7)",
    "options": [
      "The human stopped the leader of the moon voyage.",
      "Humans stop the journey leader on the moon.",
      "Humans on the moon stop the head ship.",
      "Humans go on a head-trip at night.",
      "At night, humans stop thinking."
    ],
    "answer": 4,
    "explanation": "The literal translation is moon(up), human, stop, head(journey). The first part of the message could mean  night, as night is the time when the moon is up. Answers (A), (B) and (C) do not include a representation  of up in combination with moon, so they cannot be correct. The third part of the message, stop, is cor- rectly interpreted in (E). (D) incorrectly interprets this part of the message as 'go', which is the opposite  of stop; opposite is F in the table, but is not found in the message, so eliminate (D). The answer is (E).",
    "topic": "Decision Making"
  },
  {
    "id": 2,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br><img src='image/da_table_1.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>What is the best interpretation of the coded message: F4, 12(7), F2, A7, F2",
    "options": [
      "The distance between planets was too far to travel.",
      "We flew a great distance between planets.",
      "The distance between suns was too far for us to travel.",
      "We flew from a planet to a distant moon.",
      "The distance from planet to sun is too far for them to fly."
    ],
    "answer": 1,
    "explanation": "The literal translation is opposite(them), air(journey), opposite(moon), big(journey), opposite(moon). Three of  the answers interpret the first part of the message as 'we' or 'us'; eliminate (A), which omits this part of the  message, and also (E), which omits opposite and instead interprets it as 'them'. It's not clear from the message  and the code whether the opposite of moon could mean sun, planet or both; however, (D) interprets the final \n\n\nAppendix C  Chapter 8 Kaplan UKCAT Mock Test Explanations 347 opposite(moon) as distant moon, which omits opposite, so eliminate (D). The remaining answers interpret  the second part of the message as 'flew' and 'travel', but travel does not omit the concept of air, which is com- bined with journey in this part of the message. Eliminate (C); the answer is therefore (B).",
    "topic": "Decision Making"
  },
  {
    "id": 3,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br><img src='image/da_table_1.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>What would be the best way to encode the following message? Message: The aliens don't eat plants.",
    "options": [
      "G16, B14, 4(F5)",
      "16, 14, 4(F3)",
      "G16, B, 4(F5)",
      "16, B14, 4(F5)",
      "G16, 14, 4(F3)"
    ],
    "answer": 3,
    "explanation": "The first part of the coded message is either 16, plant, or G16, one(plant). Plant is plural in the message, so  one cannot be part of the correct answer; eliminate (A), (C) and (E). The second part of the coded mes- sage is either 14, fuel, or B14, negative(fuel). Since the message requires the negative, the correct answer  is (D). NB This answer encodes 'aliens' as 4(F5), them(opposite(home)). This information could be useful  on a later question.",
    "topic": "Decision Making"
  },
  {
    "id": 4,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br><img src='image/da_table_1.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>What is the best interpretation of the coded message: F4, F9, 5, 16(BJ)",
    "options": [
      "We stopped opposite the house with no plants.",
      "We went to the house with no plants.",
      "We left home because plants couldn't grow.",
      "We left Earth because there were no plants.",
      "No plants grow on Earth, so we have a new home."
    ],
    "answer": 2,
    "explanation": "The literal translation is opposite(them), opposite(stop), home, plant(negative(grow)). All the answers give  the first part of the message as 'we'. The second part of the message is interpreted as 'went' or 'left' in three  of the answers; eliminate (A), which omits opposite, and also (E), which omits this part of the message  entirely. Two of the remaining answers give the third part of the message as 'house' or 'home'; (D) is very  questionable, because 'Earth' would likely require further elements from the table. The final part of the  message includes grow, but (B) and (D) omit grow, so they cannot be correct. The answer is (C).",
    "topic": "Decision Making"
  },
  {
    "id": 5,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br><img src='image/da_table_1.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>What is the best interpretation of the coded message: J3, 12(13), FJ(JC)",
    "options": [
      "Growing humans use up more air from the tank.",
      "More humans will use up the air tanks.",
      "More humans empty the air tank more quickly.",
      "A growing human's air tank slowly shrinks.",
      "Humanity's air tank is not growing."
    ],
    "answer": 2,
    "explanation": "The literal translation is grow(human), air(tank), opposite(grow)(grow(fast)). All the answers give possible  interpretations of the first two parts of the message, so eliminate based on the final part of the message.  The final part does not include negative, B; eliminate (E), which does include a negative. Grow(fast) could  mean something like more quickly; eliminate (D), which incorrectly gives the opposite of fast, rather than  grow(fast), and also (A) and (B), which omit this element entirely. The answer is therefore (C).",
    "topic": "Decision Making"
  },
  {
    "id": 6,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br><img src='image/da_table_1.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>What would be the best way to encode the following message? Message: A new planet with plants is our new home.",
    "options": [
      "K(F2, 16), K(5, F4)",
      "K(F2), J16, K5, J(F4)",
      "K(F2), JA16, K5, F4",
      "F2, K16, K5, F4",
      "F2, K16, K(5, F4)\n\n--- PAGE 283 ---\n\nOperators &  General Rules Specific Information  Basic Codes A  = big B  = negative C  = fast D  = up E  = beyond F  = opposite G = one H  = fix J  = grow K  = new   1 = star   2 = moon   3 = human   4 = them   5 = home   6 = ship   7 = journey   8 = burn   9 = stop 10 = head 11 = today 12 = air 13 = tank 14 = fuel 15 = cold 16 = plant 17 = waste"
    ],
    "answer": 0,
    "explanation": "The answers give the first part of the message, new planet, as either K(F2), new(opposite(moon)), or F2,  opposite(moon). Eliminate (D) and (E), which omit new. The remaining answers give the second part of  the message, with plants, as 16, plant, J16, grow(plant), or JA16, grow(big)(plant). Plant is not modified  in the message, so eliminate (B) and (C). The answer is (A).",
    "topic": "Decision Making"
  },
  {
    "id": 7,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br><img src='image/da_table_1.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>What is the best interpretation of the coded message: 6(A8(14), AC(7D)), E11",
    "options": [
      "In future, the rocket ship will journey into space.",
      "Tomorrow, the ship burns the rockets.",
      "In future, the rocket ship will fly past the sun.",
      "Tomorrow, we will launch the ship into space.",
      "The rocket ship launches tomorrow."
    ],
    "answer": 4,
    "explanation": "The literal translation is ship(big(burn)(fuel), big(fast)(journey(up))), beyond(today). All the answers  interpret the final part of the message as 'in future' or 'tomorrow', which both logically fit the meaning  of beyond today. The first half of the first part of the message, a ship that 'big burns' fuel, seems to mean  rocket ship, as a rocket burns a lot of fuel. Eliminate (B), which separates ship and rocket into different  parts of the message, and also (D), which does not include a representation of big(burn)(fuel). The second  half of the first part of the message fits well with 'launch', which is quite literally a big, fast journey up.  Eliminate (A), which omits fast, and also (C), which includes 'past the sun', as this would require further  codes that are not in the message. The answer is therefore (E).",
    "topic": "Decision Making"
  },
  {
    "id": 8,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br><img src='image/da_table_1.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>What is the best interpretation of the coded message: F2, J(15, C), B, F4(3)",
    "options": [
      "A fast-freezing planet is not for us humans.",
      "We humans cannot live on a fast-freezing planet.",
      "We humans can't stay on a fast-freezing planet.",
      "A quickly cooling sun is no place for humans or aliens.",
      "A quickly cooling sun is alien to us."
    ],
    "answer": 0,
    "explanation": "The literal translation is opposite(moon), grow(cold, fast), negative, opposite(them)(human). All the answers  interpret the first part of the message as planet or sun, and the second part as fast-freezing or quickly cool- ing. The third part of the message, negative, is omitted from (E), so it cannot be correct. The final part of the  message includes opposite(them), which has been interpreted in previous correct answers as 'we', and also  human. Eliminate (D), which does not include a representation of 'we' or 'us'. Of the remaining answers, (B)  and (C) each include an element-live and stay, respectively-that would require a further code that is not  in the message. (A) can be understood logically using only the codes in the message, so it is correct.",
    "topic": "Decision Making"
  },
  {
    "id": 9,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br><img src='image/da_table_1.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>What would be the best way to encode the following message? Message: In the distant future, the sun will shrink and become cold.",
    "options": [
      "A(AE11), A1, FJ, 9(8)",
      "E11, A1, FJ, JC",
      "A(AE11), A1, FJ, JC",
      "E11, A1, BJ, 9(8)",
      "A(F11), A1, BJ, JC"
    ],
    "answer": 2,
    "explanation": "The answers give three possible ways to encode the first part of the message: A(AE11), big(big  (beyond(today))); E11, beyond(today); or A(F11), big(opposite(today)). A previous answer interpret- ed beyond(today) as 'tomorrow', so something further is required for the message here; eliminate (B)  and (D). The opposite of today could be tomorrow, but it could also be yesterday; eliminate (E). The \n\n\nScore Higher on the UKCAT 348 only difference between the remaining answers is in the final part of the message: (A) gives this as 9(8),  stop(burn), while (C) gives it as FJ, JC, opposite(grow), grow(cold). Stop(burn) could imply become cold,  but would not suggest anything to do with the sun shrinking. Shrink is the opposite of grow, and grow  cold is a good fit for become cold. The answer is therefore (C). NB The correct answer here encodes 'sun'  as A1, big(star). This could be useful in answering other questions in this section.",
    "topic": "Decision Making"
  },
  {
    "id": 10,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br><img src='image/da_table_1.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>What would be the best way to encode the following message? Message: One night, many stars fell around us.",
    "options": [
      "2D, J1, 7(FD), FE, F4",
      "G(2D), F(G1), 7(FD), FE, F4",
      "G(2D), A(A1), 7(FD), FE, 4",
      "2D, A(A1), F9, FD, 4",
      "G(2D), F(G1), F9, FD, 4"
    ],
    "answer": 1,
    "explanation": "The answers encode the first part of the message as 2D, moon(up), or G(2D), one(moon(up)). A previous  correct answer interpreted 2D as 'at night', so a further code would be required for the concept of 'one  night'; G(2D) is a good logical fit for this concept. Eliminate (A) and (D). There are a number of differ- ences among the remaining answers, so eliminate on the basis of any of these. The final part of the mes- sage, us, is given as F4, opposite(them), in (B); this matches the encoding of 'we' and 'us' in the correct  answers to previous questions. (C) and (E) only have 4, them, which cannot logically mean 'us'. Eliminate  (C) and (E); the answer is (B).",
    "topic": "Decision Making"
  },
  {
    "id": 11,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br><img src='image/da_table_1.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>What is the best interpretation of the coded message: 4(F5), B9, 6(F4), 8B",
    "options": [
      "The aliens burned our ship, but didn't stop us.",
      "We stopped the aliens from burning our ship.",
      "The broken laser on our ship allowed the aliens to escape.",
      "The aliens didn't stop our ship with the evil laser.",
      "We didn't stop the alien ship because the laser failed.\n\n--- PAGE 284 ---\n\nAfter doing your preliminary research, you discover the code is in fact much more complex than you  originally thought. The additional codes and information complete the table as follows: Operators &  General Rules Specific Information  Basic Codes Complex Information  Additional Information Reactions/Outcomes  Emotions A   = big B   = negative C   = fast D   = up E   = beyond F   = opposite G  = one H   = fix J  = grow K   = new L  = give M  = special   1 = star   2 = moon   3 = human   4 = them   5 = home   6 = ship   7 = journey   8 = burn   9 = stop 10 = head 11 = today 12 = air 13 = tank 14 = fuel 15 = cold 16 = plant 17 = waste 18 = heart 19 = send 101 = launch 102 = time 103 = orange 104 = fight 105 = army 106 = money 107 = sail 108 = search 109 = scratch 110 = rock 111 = find 112 = learn 201 = panic 202 = love 203 = sorrow 204 = easy 205 = hopeful 206 = different 207 = worry"
    ],
    "answer": 3,
    "explanation": "The literal translation is them(opposite(home)), negative(stop), ship(opposite(them)), burn(negative). All  of the answers interpret the first part of the message as 'aliens', except for (E), which instead has the sin- gular form, alien; since the message has 'them', aliens must be plural. Eliminate (E). The second part of  the message combines negative and stop; eliminate (B), which omits negative, and (C), because 'allowed  to escape' is not a good interpretation of negative(stop). The remaining answers both give the third part  of the message as 'our ship'. (D) interprets the final part of the message as 'evil laser'; (A) interprets it as  'burned', which omits a representation of negative. Thus, the answer is (D).",
    "topic": "Decision Making"
  },
  {
    "id": 12,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br><img src='image/da_table_2.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>What is the best interpretation of the coded message: A1, BM, JA(J1, JA1, J2, JF2)",
    "options": [
      "The sun is not unique in the universe.",
      "The stars are not alone in our galaxy.",
      "The sun is unique in the galaxy.",
      "The galaxy is nothing without the sun.",
      "The universe is unique because of the sun."
    ],
    "answer": 0,
    "explanation": "The literal translation is big(star), negative(special), grow(big)(grow(star), grow(big)(star), grow(moon),  grow(opposite)(moon)). All of the answers interpret the first part of the message as 'sun', which a previous  correct answer gave as an acceptable meaning for big(star); eliminate (B), which instead has 'stars', as the  code does not seem to use big to form a plural noun. The second part of the message combines negative  and single into a single element; eliminate (C) and (E), which omit negative, and also (D), which omits  single. The answer is therefore (A).",
    "topic": "Decision Making"
  },
  {
    "id": 13,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br><img src='image/da_table_2.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>What is the best interpretation of the coded message: 10(3), 9(6, 7), H(7, K1)",
    "options": [
      "The captain stopped the ship and realigned its path for a new star.",
      "The captain stopped the ship's progress and set course for a new star.",
      "After stopping the ship, the captain set course for a new star.",
      "The captain set course for a special star while the ship was stopped.",
      "The head ship's progress was stopped and changed from one star to another."
    ],
    "answer": 1,
    "explanation": "The literal translation is head(human), stop(ship, journey), fix(journey, new(star)). All of the answers give  the first part of the message as 'captain', except for (E), which omits human and therefore cannot be cor- rect. The second part of the message combines stop, ship and journey into a single element. Eliminate (A),  (C) and (D), which omit a representation of journey in this part of the message. The correct answer is (B).",
    "topic": "Decision Making"
  },
  {
    "id": 14,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br><img src='image/da_table_2.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>What is the best interpretation of the coded message: A(FL12, J, 202, 9(FL12)), E2, F204",
    "options": [
      "Life in space is unusual.",
      "Life in space is not easy.",
      "Life in space is hard.",
      "It's not easy to live in space.",
      "It's hard to live your whole life in space.\n\n--- PAGE 285 ---\n\nOperators &  General Rules Specific Information  Basic Codes Complex Information  Additional Information Reactions/Outcomes  Emotions A = big B = negative C = fast D = up E = beyond F = opposite G = one H = fix J = grow K = new L = give M = special 1 = star 2 = moon 3 = human 4 = them 5 = home 6 = ship 7 = journey 8 = burn 9 = stop 10 = head 11 = today 12 = air 13 = tank 14 = fuel 15 = cold 16 = plant 17 = waste 18 = heart 19 = send 101 = launch 102 = time 103 = orange 104 = fight 105 = army 106 = money 107 = sail 108 = search 109 = scratch 110 = rock 111 = find 112 = learn 201 = panic 202 = love 203 = sorrow 204 = easy 205 = hopeful 206 = different 207 = worry"
    ],
    "answer": 2,
    "explanation": "The literal translation is big(opposite(give)(air), grow, love, stop(opposite(give)(air))), beyond(moon),  opposite(easy). All of the answers interpret the first part of the message as 'life' or 'live', and the second  part of the message as 'in space'. The final part of the message is the opposite of easy. Eliminate (A), as  unusual is the opposite of common or normal, not of easy; also, eliminate (B) and (D), as 'not easy' would  need to be encoded as negative(easy), B204. The only difference between the remaining answers is that  (E) includes 'your' and 'whole', but there are no codes in the message corresponding to these concepts. (C)  includes only the elements in the message, and is a good logical fit for its meaning; thus, (C) is correct.",
    "topic": "Decision Making"
  },
  {
    "id": 15,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br><img src='image/da_table_2.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>What would be the best way to encode the following message?   Message: A rich man will pay for a private space launch.",
    "options": [
      "3(A106), L106, A101, E2",
      "3(106), L106, 7D, E2",
      "3(A106), L106, 7D, E2",
      "3(106), L106, M101, 2",
      "3(A106), L106, M101, E2"
    ],
    "answer": 4,
    "explanation": "The first part of the message is encoded as 3(A106), human(big(money)), or 3(106), human(money). A  rich man has a lot of money, so the first option is a better fit; eliminate (B) and (D). The second part of the  message is the same in the remaining answers, but they give three different options for the third part of  the message: A101, big(launch); 7D, journey(up); M101, special(launch). Since launch is now included  in the table, the correct answer must include 101; eliminate (C). Special is a better fit for the concept of  private, so the correct answer is (E).\n\n\nAppendix C  Chapter 8 Kaplan UKCAT Mock Test Explanations 349",
    "topic": "Decision Making"
  },
  {
    "id": 16,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br><img src='image/da_table_2.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>What is the best interpretation of the coded message: 3(107, 6), (108, B111), 103(2), 14(F9)",
    "options": [
      "The astronaut discovered a fuel source on the orange moon.",
      "The pilot explored the orange moon for a fuel source.",
      "The orange moon is a fuel source for the space shuttle Explorer.",
      "The space shuttle sought, but did not find, a fuel depot on the orange moon.",
      "The fuel depot on the orange moon was discovered by astronauts."
    ],
    "answer": 1,
    "explanation": "The literal translation is human(sail, ship), (search, negative(find)), orange(moon), fuel(opposite(stop)).  The first part of the message includes human; eliminate (C) and (D), which omit human and interpret it  as 'space shuttle'. It is not clear whether the first part of the message can mean 'astronaut', as a human who  sails a ship would be something like a captain or pilot. The second part of the message gives a stronger  reason to eliminate the remaining wrong answers: (A) and (E) interpret the second part of the message  as 'discovered', but this part of the message combines search and negative(find) into a single element.  'Discovered' would mean 'searched and found', and as such omits a representation of negative. Eliminate  (A) and (E), and the answer is (B).",
    "topic": "Decision Making"
  },
  {
    "id": 17,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br><img src='image/da_table_2.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>What is the best interpretation of the coded message: 105(E2), 9(104), K(FA105), B111, 105",
    "options": [
      "The reinforcements couldn't find the space army, so the army surrendered.",
      "The replacements found the space army, but the army did not stop fighting.",
      "The space army surrendered because the reinforcements couldn't find them.",
      "The fighting stopped when the new troops found the space army.",
      "One space army stopped fighting and sent new troops to find another army."
    ],
    "answer": 0,
    "explanation": "The literal translation is army(beyond(moon)), stop(fight), new(opposite(big(army))), negative(find), army.  The first part of the message is interpreted as 'space army' in all the answers. The second part of the mes- sage does not include negative; eliminate (B), which incorrectly interprets it as 'did not stop fighting'.  The remaining answers interpret the third part of the message as 'reinforcements' or 'new troops', both  of which could fit logically with the coded message. The fourth part of the message includes negative;  eliminate (D) and (E), which omit the negative in this part of the message. The final part of the message  is army; eliminate (C), which incorrectly gives it as 'them', as them is 4 in the table but is not included in  the message. The correct answer is (A).",
    "topic": "Decision Making"
  },
  {
    "id": 18,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br><img src='image/da_table_2.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>What is the best interpretation of the coded message: 3(107, 1), L, J(10, 18, FG), E102, 19(6)",
    "options": [
      "A ship sends an astronaut to a distant time and place.",
      "The astronaut sent the ship to give a body to his future self.",
      "A ship without an astronaut gives everything to the future.",
      "An astronaut gives his entire body and future to the mission.",
      "Astronauts give everything for a mission far, far away."
    ],
    "answer": 3,
    "explanation": "The literal translation is human(sail, star), give, grow(head, heart, opposite(one)), beyond(time), send(ship).  All the answers interpret the first part of the message as astronaut, which makes logical sense, as an astro- naut is quite literally a human who sails the stars. The second part of the message, give, is omitted from  (A), which cannot be correct. The third part of the message combines head, heart and the opposite of  one-perhaps meaning something like all-into a single element. (B) and (D) interpret this element as  'body'; eliminate (C) and (E), which interpret it overly broadly as 'everything', as this is not specific to the  codes in the message. Both of the remaining answers interpret the fourth part of the message as 'future'.  (B) interprets the final part of the message as 'sent the ship', and (D) interprets it as 'the mission', which  could literally be sending of a ship. However, (B) also includes 'self' at the end of the message, and there  is no code corresponding to this concept in the message. For this reason, (B) is not a good fit for the mes- sage, and the answer is (D).",
    "topic": "Decision Making"
  },
  {
    "id": 19,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br><img src='image/da_table_2.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>What is the best interpretation of the coded message: A110(107(E12), G102), B(F101), 5(F2)",
    "options": [
      "The asteroid fell down to Earth.",
      "The space rock failed to launch.",
      "We don't launch rockets at home, but one time we did.",
      "Home is no place to launch a rocket, but one time we went sailing.",
      "The comet fell to Earth.\n\n--- PAGE 286 ---\n\nOperators &  General Rules Specific Information  Basic Codes Complex Information  Additional Information Reactions/Outcomes  Emotions A = big B = negative C = fast D = up E = beyond F = opposite G = one H = fix J = grow K = new L = give M = special 1 = star 2 = moon 3 = human 4 = them 5 = home 6 = ship 7 = journey 8 = burn 9 = stop 10 = head 11 = today 12 = air 13 = tank 14 = fuel 15 = cold 16 = plant 17 = waste 18 = heart 19 = send 101 = launch 102 = time 103 = orange 104 = fight 105 = army 106 = money 107 = sail 108 = search 109 = scratch 110 = rock 111 = find 112 = learn 201 = panic 202 = love 203 = sorrow 204 = easy 205 = hopeful 206 = different 207 = worry"
    ],
    "answer": 4,
    "explanation": "The literal translation is big(rock)(sail(beyond(space), special(time)), negative(opposite(launch)),  home(opposite(moon)). The first part of the message is very long, so it might be faster to start with the  other parts of the message. The second part of the message is the opposite of launch, modified by negative.  (A) and (E) both give this as 'fell', which could have a negative meaning as well as being the opposite of  launching. Eliminate (B), (C) and (D), which omit opposite. (A) also includes down, which is the opposite  of up, which are codes in the table that have appeared in other messages but not in this one. Thus, (A)  cannot be correct; the answer is (E).",
    "topic": "Decision Making"
  },
  {
    "id": 20,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br><img src='image/da_table_2.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>What is the best interpretation of the coded message: B16(J3), A207",
    "options": [
      "No plants grow humans; it's not a concern.",
      "No plants can grow humans, so don't worry.",
      "The lack of food is a serious concern.",
      "It's not a big concern that plants can't grow humans.",
      "The absence of edible plants is not a big problem."
    ],
    "answer": 2,
    "explanation": "The literal translation is negative(plant)(grow(human)), big(worry). This message includes two elements,  and it might be easier to start with the second-compare it to the answer choices, and eliminate those that  don't represent it as combining big and worry. Answers (A) and (B) omit a representation of big, and (D)  and (E) include a negative with big(worry) that is not part of this element in the original message. Thus,  (C) must be the correct answer.",
    "topic": "Decision Making"
  },
  {
    "id": 21,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br><img src='image/da_table_2.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>What is the best interpretation of the coded message: A103(12), J206, 3(10, 205)",
    "options": [
      "The orange gas cloud expands differently than a person would expect.",
      "The orange gas grows just as you would hope.",
      "The orange gas sample grows differently than you would hope.",
      "The orange gas expands in the tank differently than expected.",
      "A person would hope the orange gas expanded, but it didn't."
    ],
    "answer": 0,
    "explanation": "The literal translation is big(orange)(air), grow(different), human(head, hopeful). The first element could  mean 'orange gas' or 'orange gas cloud', so it does not allow you to eliminate any answers. The second ele- ment could mean 'grow differently' or 'expand differently'; eliminate (B) and (E), which omit a represen- tation of different with this element. (D) includes tank, which is 13 in the table but is not included in the  message, so (D) must be wrong. The final element of the message is given in the two remaining answers as  'a person would expect' or 'you would hope'; (A) is the better fit for the message, and is therefore correct.\n\n\nScore Higher on the UKCAT 350",
    "topic": "Decision Making"
  },
  {
    "id": 22,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br><img src='image/da_table_2.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>What would be the best way to encode the following message?   Message: I seek a planet where all beings are equal.",
    "options": [
      "G(F4), 109, F2, AJ(3, 4(F5)), B206",
      "F4, 111, F2, AJ3, F206",
      "G(F4), 108, F2, AJ(201, 202, 203, 204), B206",
      "F4, 108, F2, AJ3, F206",
      "G(F4), 108, F2, AJ(3, 4(F5)), B206"
    ],
    "answer": 4,
    "explanation": "The first part of the message is encoded as G(F4), one(opposite(them)), or F4, opposite(them). Previous  correct answers have used F4 to mean 'we' or 'us', and the singular form of 'we' is 'I'; eliminate (B) and (D).  The second part of the message is either 109, scratch, or 108, search. Search fits the message, but scratch  does not make sense; eliminate (A). The third part of both remaining answers start with AJ, big(grow).  (C) combines 'big grow' with panic, love, sorrow and easy; (E) combines 'big grow' with human and  them(opposite(home)), which was used correctly to mean 'aliens' in previous questions. Humans and  aliens combined with 'big grow' could mean all beings, but the list of emotions and reactions in (C) would  not fit logically with the message. The answer is therefore (E).",
    "topic": "Decision Making"
  },
  {
    "id": 23,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br><img src='image/da_table_2.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>What is the best interpretation of the coded message: 102(FD), 101, L(F4), J(207, B201)",
    "options": [
      "Countdown to launch makes me emotional.",
      "Countdown to launch can play on our nerves.",
      "We worry but don't panic when countdown begins.",
      "We worry but don't panic when they begin the countdown to launch.",
      "Countdown is worrying, but don't panic while we launch.\n\n--- PAGE 287 ---"
    ],
    "answer": 1,
    "explanation": "The literal translation is time(opposite(up)), launch, give(opposite(them)), grow(worry, negative(panic)).  All the answers interpret the first part of the message as 'countdown'. (C) omits launch, the second part of  the message, so it is incorrect. The third part of the message means something like 'give us'; eliminate (A),  which mistakenly uses the singular form, and also (D), which includes them rather than the opposite of  them. The final part of the message combines worry and negative panic into a single element. Eliminate  (E), which separates 'worry' and 'don't panic' into different parts of the message. The correct answer is (B).",
    "topic": "Decision Making"
  },
  {
    "id": 24,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br><img src='image/da_table_2.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>What is the best interpretation of the coded message: A7, H, JA(F202, 203, 104, F205), FE(18, FH)",
    "options": [
      "Travel is the solution for an aching and sentimental heart.",
      "Space travel helps the emotional and heavy-hearted.",
      "Distance heals all the bad feelings within a broken heart.",
      "Time is the furthest distance from trouble to a clean heart.",
      "A great journey fixes all your problems and your heart."
    ],
    "answer": 2,
    "explanation": "The literal translation is big(journey), fix, grow(big)(opposite(love), sorrow, fight, opposite(hopeful)),  opposite(beyond)(heart, opposite(fix)). The first part of the message combines big and journey into a single  element. Eliminate (A), which omits big, and (B), which includes space instead of big; previous questions  have encoded space as E2, beyond(moon), but this is not part of the message here. Eliminate (D) as well,  since time is 102 in the table but is not included in the message. Comparing the remaining answers, the  most obvious difference is that (E) includes 'your' twice; it's not clear how to represent 'you' with the table  of codes, but there are no codes in the message that could encode the concept of 'you' or 'your'. Eliminate  (E); the answer is therefore (C).",
    "topic": "Decision Making"
  },
  {
    "id": 25,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br><img src='image/da_table_2.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>What would be the best way to encode the following message?   Message: An astronaut expands knowledge, not conflict.",
    "options": [
      "3(107, 1), J(FE10), BJ105",
      "3(107, 1), J(A112), BJ104",
      "3(107, 1), J10, BJ105",
      "3(107, 6), J(A112), BJ105",
      "3(107, 6), J10, BJ104"
    ],
    "answer": 1,
    "explanation": "The correct answer to a previous question encoded 'astronaut' as a human who sails the stars, or 3(107,  1); eliminate (D) and (E), which include ship rather than star. The remaining answers give three different  ways to encode the concept of 'expand knowledge': J(FE10), grow(opposite(beyond(head))); J(A112),  grow(big(learn)); or J10, grow(head). Big(learn) is the best fit for knowledge, and growing the 'big learn'  could mean expanding knowledge. The correct answer is (B).",
    "topic": "Decision Making"
  },
  {
    "id": 26,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br><img src='image/da_table_2.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Which of the following would be the most useful and second most useful additions to the codes in order  to convey the message accurately?   Message: Poison ivy makes skin red and itchy.",
    "options": [
      "poison",
      "ivy",
      "skin",
      "red",
      "itch"
    ],
    "answer": 2,
    "explanation": "and (D) All of the answers appear in the message, so check to see which can be represented with the existing table  of codes. Itch could be represented with scratch, 109, so eliminate (E). Ivy is a plant, 16, so eliminate (B).  The opposite of fix, FH, would mean break or hurt; this could be combined with negative, or big negative,  to represent the concept of poison. Eliminate (A). There is no way to encode skin or red, so answers (C)  and (D) must be correct.",
    "topic": "Decision Making"
  },
  {
    "id": 27,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br><img src='image/da_table_2.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Which of the following would be the most useful and second most useful additions to the codes in order  to convey the message accurately?   Message: We changed the tank to finish the soldier's blood transfusion.",
    "options": [
      "change",
      "finish",
      "soldier",
      "blood",
      "transfusion"
    ],
    "answer": 0,
    "explanation": "and (D) The message includes all five answers, so check to see which could be represented with the existing codes.  Finish could be encoded as stop, 9; eliminate (B). A soldier is a single human in the army, or G3(105);  eliminate (C). There is no way to encode change, blood or transfusion with the existing codes. However,  if blood were added to the code as, say, 20, you could encode transfusion as L(K20), since a transfusion  involves giving someone new blood. Eliminate (E); the answers are (A) and (D).",
    "topic": "Decision Making"
  },
  {
    "id": 28,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br><img src='image/da_table_2.png' style='max-width:100%;'><br><br><strong>Question:</strong><br>Which of the following would be the most useful and second most useful additions to the codes in order  to convey the message accurately?   Message: Drop rubbish in a bin, not into space.",
    "options": [
      "command",
      "drop",
      "rubbish",
      "bin",
      "space STOP. IF YOU FINISH BEFORE TIME IS UP, CHECK ANY QUESTIONS YOU HAVE  MARKED FOR REVIEW. YOU MAY GO BACK TO QUESTIONS IN THIS SECTION ONLY."
    ],
    "answer": 0,
    "explanation": "and (B) All the answers are in the message except command, but the message is a command, so (A) is likely to  be correct. Check to see whether the other answers can be represented with the existing codes. Several  previous questions have encoded space as beyond(moon), E2; eliminate (E). Rubbish could be encoded  as waste, 17, and bin could be encoded as 17(13), waste(tank); eliminate (C) and (D). There is no clear  way to encode drop using the table, so the correct answers are (A) and (B).",
    "topic": "Decision Making"
  }
];
