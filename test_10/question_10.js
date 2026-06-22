const PASSAGES = {};

const QUESTIONS = [
  {
    "id": 1,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nA conversation is taking place between a midwife Kate and the senior Dr Herbert: Jacob, the medical student, is observing. Dr Herbert is being rude to the Kate and is acting superior. When Dr Herbert leaves, Jacob overhears Kate talking to the other midwives about his behaviour, and how it happens frequently, and makes both the midwives and the patients feel uncomfortable. How appropriate are the following actions from Jacob?\n\n<strong>Question:</strong>\nTell Kate that you will help to file a complaint against Dr Herbert.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 3,
    "explanation": "because Jacob didn’t know the entire story and this could be resolved by having a simple conversation instead. There is no need at his stage to get more people involved, especially as the doctor’s behaviour has not directly affected the patient’s safety or treatment.",
    "topic": "Situational Judgement"
  },
  {
    "id": 2,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nA conversation is taking place between a midwife Kate and the senior Dr Herbert: Jacob, the medical student, is observing. Dr Herbert is being rude to the Kate and is acting superior. When Dr Herbert leaves, Jacob overhears Kate talking to the other midwives about his behaviour, and how it happens frequently, and makes both the midwives and the patients feel uncomfortable. How appropriate are the following actions from Jacob?\n\n<strong>Question:</strong>\nMake Dr Herbert aware that perhaps he should be kinder the next time he speaks to Kate and patients.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 1,
    "explanation": ", because the medical student would not be telling the doctor anything specific.",
    "topic": "Situational Judgement"
  },
  {
    "id": 3,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nA conversation is taking place between a midwife Kate and the senior Dr Herbert: Jacob, the medical student, is observing. Dr Herbert is being rude to the Kate and is acting superior. When Dr Herbert leaves, Jacob overhears Kate talking to the other midwives about his behaviour, and how it happens frequently, and makes both the midwives and the patients feel uncomfortable. How appropriate are the following actions from Jacob?\n\n<strong>Question:</strong>\nIgnore the situation and do nothing.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 3,
    "explanation": "because as a medical student you are a member of the health care team as well, so if there is something that is affecting the rest of the staff and patients, then it should not be ignored.",
    "topic": "Situational Judgement"
  },
  {
    "id": 4,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nA conversation is taking place between a midwife Kate and the senior Dr Herbert: Jacob, the medical student, is observing. Dr Herbert is being rude to the Kate and is acting superior. When Dr Herbert leaves, Jacob overhears Kate talking to the other midwives about his behaviour, and how it happens frequently, and makes both the midwives and the patients feel uncomfortable. How appropriate are the following actions from Jacob?\n\n<strong>Question:</strong>\nAlert his supervisor as to what he saw, and to get advice on what to do.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 0,
    "explanation": "because the supervisor would be able to advise the student as to what they should do.",
    "topic": "Situational Judgement"
  },
  {
    "id": 5,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nA conversation is taking place between a midwife Kate and the senior Dr Herbert: Jacob, the medical student, is observing. Dr Herbert is being rude to the Kate and is acting superior. When Dr Herbert leaves, Jacob overhears Kate talking to the other midwives about his behaviour, and how it happens frequently, and makes both the midwives and the patients feel uncomfortable. How appropriate are the following actions from Jacob?\n\n<strong>Question:</strong>\nTell Dr Herbert that his behaviour was making patients and midwives feel uncomfortable.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 1,
    "explanation": ", whilst it makes Dr Herbert aware of the issue, it is quite confrontational and Dr Herbert may become defensive.",
    "topic": "Situational Judgement"
  },
  {
    "id": 6,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nA medical student, George, is sitting in a foot clinic with Dr Walker. George notices that Dr Walker hasn’t been washing his hands between patients, despite examining the feet of all of his patients without gloves. In his training George was told that he must wash his hands properly before and after touching each patient to prevent the spread of infections.\n\n\nHow appropriate are each of the following responses by George in this situation?\n\n<strong>Question:</strong>\nAlert Dr Walker that he ought to wash his hands more after the current consultation has finished.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 0,
    "explanation": ", because Dr Walker could have gotten into a bad habit and may be unaware that he hasn’t been washing his hands.",
    "topic": "Situational Judgement"
  },
  {
    "id": 7,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nA medical student, George, is sitting in a foot clinic with Dr Walker. George notices that Dr Walker hasn’t been washing his hands between patients, despite examining the feet of all of his patients without gloves. In his training George was told that he must wash his hands properly before and after touching each patient to prevent the spread of infections.\n\n\nHow appropriate are each of the following responses by George in this situation?\n\n<strong>Question:</strong>\nWash his hands before and after each patient in the hopes that Dr Walker will follow by example.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 1,
    "explanation": ", because Dr Walker may not pick up on the hint, although it might save George some awkwardness in having to ask Dr Walker directly.",
    "topic": "Situational Judgement"
  },
  {
    "id": 8,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nA medical student, George, is sitting in a foot clinic with Dr Walker. George notices that Dr Walker hasn’t been washing his hands between patients, despite examining the feet of all of his patients without gloves. In his training George was told that he must wash his hands properly before and after touching each patient to prevent the spread of infections.\n\n\nHow appropriate are each of the following responses by George in this situation?\n\n<strong>Question:</strong>\nDo nothing because Dr Walker is an experienced consultant.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 3,
    "explanation": "because hospitals function as a team. If George is aware of something that could potentially cause patients harm, he must try to solve the issue.",
    "topic": "Situational Judgement"
  },
  {
    "id": 9,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nA medical student, George, is sitting in a foot clinic with Dr Walker. George notices that Dr Walker hasn’t been washing his hands between patients, despite examining the feet of all of his patients without gloves. In his training George was told that he must wash his hands properly before and after touching each patient to prevent the spread of infections.\n\n\nHow appropriate are each of the following responses by George in this situation?\n\n<strong>Question:</strong>\nTell the nurse in charge of the foot patients after the clinic has finished.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 2,
    "explanation": ", because it is not addressing the situation and could make it a bigger problem than it actually is. In general, problems with doctors should be escalated to more senior doctors; problems with nurses should be escalated to more senior nurses.",
    "topic": "Situational Judgement"
  },
  {
    "id": 10,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nA medical student, George, is sitting in a foot clinic with Dr Walker. George notices that Dr Walker hasn’t been washing his hands between patients, despite examining the feet of all of his patients without gloves. In his training George was told that he must wash his hands properly before and after touching each patient to prevent the spread of infections.\n\n\nHow appropriate are each of the following responses by George in this situation?\n\n<strong>Question:</strong>\nWrite in the patient notes that Dr Walker didn’t wash his hands before examining them.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 3,
    "explanation": "because Dr Walker would not have been informed and the fact that George would have witnessed it without trying to correct the problem could back fire onto him and get him into trouble if any harm were to arise.",
    "topic": "Situational Judgement"
  },
  {
    "id": 11,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nA medical student, Linh, is working on a project with a small group of other students. The students have to examine real skull bones, which were provided by the medical school’s museum, and are very valuable. One of the students in Linh’s group accidentally drops the skull and some of the smaller delicate bones shatter. How appropriate are the following responses by Linh?\n\n<strong>Question:</strong>\nIgnore what happened, throw the skull remains away, and borrow another group’s skull to finish the project.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 3,
    "explanation": "because the medical school museum would have to account for the missing bones. The bones are very valuable, and even the remains of bones could be useful as they would make them into slides or as cut sections.",
    "topic": "Situational Judgement"
  },
  {
    "id": 12,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nA medical student, Linh, is working on a project with a small group of other students. The students have to examine real skull bones, which were provided by the medical school’s museum, and are very valuable. One of the students in Linh’s group accidentally drops the skull and some of the smaller delicate bones shatter. How appropriate are the following responses by Linh?\n\n<strong>Question:</strong>\nAlert the museum curator about what happened as a group, and write a letter of apology together.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 0,
    "explanation": "because it acknowledges the respect to both the bones and the museum. The bones came from a real human, so cannot be treated as though they are any old piece of waste.",
    "topic": "Situational Judgement"
  },
  {
    "id": 13,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nA medical student, Linh, is working on a project with a small group of other students. The students have to examine real skull bones, which were provided by the medical school’s museum, and are very valuable. One of the students in Linh’s group accidentally drops the skull and some of the smaller delicate bones shatter. How appropriate are the following responses by Linh?\n\n<strong>Question:</strong>\nPretend that the skull was stolen.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 3,
    "explanation": "because this would prompt an investigation and would waste a lot of money from the medical school. It would also mean that future classes may be banned from performing such projects, hindering their educational experience.",
    "topic": "Situational Judgement"
  },
  {
    "id": 14,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nA medical student, Linh, is working on a project with a small group of other students. The students have to examine real skull bones, which were provided by the medical school’s museum, and are very valuable. One of the students in Linh’s group accidentally drops the skull and some of the smaller delicate bones shatter. How appropriate are the following responses by Linh?\n\n<strong>Question:</strong>\nTell the museum curator in private about who dropped the skull.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 2,
    "explanation": ", because despite the fact that the curator would be informed of what occurred, it could get your colleague into trouble that could have been avoided.",
    "topic": "Situational Judgement"
  },
  {
    "id": 15,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nA medical student, Linh, is working on a project with a small group of other students. The students have to examine real skull bones, which were provided by the medical school’s museum, and are very valuable. One of the students in Linh’s group accidentally drops the skull and some of the smaller delicate bones shatter. How appropriate are the following responses by Linh?\n\n<strong>Question:</strong>\nTell her supervisor.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 1,
    "explanation": ", because the supervisor can give advice as to what to do, but it does not directly address the problem.",
    "topic": "Situational Judgement"
  },
  {
    "id": 16,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nA medical student, Henry, is living in a set of halls with students that study many different subjects. The other students find it funny to joke about Henry’s work. Henry is finding it diﬃcult to keep up with his work, and silently takes offense every time the other students joke with him. The night before one of Henry’s exams, the other students make a joke that really affects Henry, and he is unable to concentrate on finishing up his revision.\n\n\nHow appropriate are each of the following responses by Henry?\n\n<strong>Question:</strong>\nSpeak to his personal tutor about how he can organise himself and tackle his work in the future.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 0,
    "explanation": "because his tutor can give him proper advice and will also be aware of any reasons behind a potentially disappointing exam mark.",
    "topic": "Situational Judgement"
  },
  {
    "id": 17,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nA medical student, Henry, is living in a set of halls with students that study many different subjects. The other students find it funny to joke about Henry’s work. Henry is finding it diﬃcult to keep up with his work, and silently takes offense every time the other students joke with him. The night before one of Henry’s exams, the other students make a joke that really affects Henry, and he is unable to concentrate on finishing up his revision.\n\n\nHow appropriate are each of the following responses by Henry?\n\n<strong>Question:</strong>\nRetaliate by insulting the other students.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 3,
    "explanation": "because it will increase tensions and result in a more stressful environment, which would hinder his progress even more.",
    "topic": "Situational Judgement"
  },
  {
    "id": 18,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nA medical student, Henry, is living in a set of halls with students that study many different subjects. The other students find it funny to joke about Henry’s work. Henry is finding it diﬃcult to keep up with his work, and silently takes offense every time the other students joke with him. The night before one of Henry’s exams, the other students make a joke that really affects Henry, and he is unable to concentrate on finishing up his revision.\n\n\nHow appropriate are each of the following responses by Henry?\n\n<strong>Question:</strong>\nDo nothing because he doesn’t want to offend anyone and is embarrassed about not being able to cope with the workload.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 3,
    "explanation": "because he will end up feeling very isolated and lonely and anxious, which will also ruin both his friendships and his work progress.",
    "topic": "Situational Judgement"
  },
  {
    "id": 19,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nA medical student, Henry, is living in a set of halls with students that study many different subjects. The other students find it funny to joke about Henry’s work. Henry is finding it diﬃcult to keep up with his work, and silently takes offense every time the other students joke with him. The night before one of Henry’s exams, the other students make a joke that really affects Henry, and he is unable to concentrate on finishing up his revision.\n\n\nHow appropriate are each of the following responses by Henry?\n\n<strong>Question:</strong>\nMove out of the halls.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 2,
    "explanation": ", because he will lose out on friendships as well as go through the diﬃculty of finding another place to live. This could end up as a lonely option with no support network.",
    "topic": "Situational Judgement"
  },
  {
    "id": 20,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nA medical student, Henry, is living in a set of halls with students that study many different subjects. The other students find it funny to joke about Henry’s work. Henry is finding it diﬃcult to keep up with his work, and silently takes offense every time the other students joke with him. The night before one of Henry’s exams, the other students make a joke that really affects Henry, and he is unable to concentrate on finishing up his revision.\n\n\nHow appropriate are each of the following responses by Henry?\n\n<strong>Question:</strong>\nSpeak to his medical student friends about how annoying he finds his flat mates.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 1,
    "explanation": "because he may find that everyone is having similar problems. It doesn’t directly address the problems but Henry might find it helpful to discuss the situation with someone else.",
    "topic": "Situational Judgement"
  },
  {
    "id": 21,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nMark, a medical student, is working with a group of nursing and physiotherapy students to learn about integrated care. Mark is mistaken for a junior doctor, as he is not in uniform, and is asked to test the urine of an elderly patient on the ward using a dipstick. Mark is familiar with the patient, and knows exactly how to do the test. Unfortunately, the doctor that asked him to do the test has left, and there are no other members of staff that are able to do the test for another 5 hours. The results of the test will determine the patient’s management. How appropriate are the following responses by Mark?\n\n<strong>Question:</strong>\nGet the most senior student in his study group to perform the test and write the results in the patient’s notes.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 3,
    "explanation": "because Mark was only asked because he was mistaken for a doctor. Therefore exchanging one student for another would be an inappropriate action. Also, the other student wasn’t asked.",
    "topic": "Situational Judgement"
  },
  {
    "id": 22,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nMark, a medical student, is working with a group of nursing and physiotherapy students to learn about integrated care. Mark is mistaken for a junior doctor, as he is not in uniform, and is asked to test the urine of an elderly patient on the ward using a dipstick. Mark is familiar with the patient, and knows exactly how to do the test. Unfortunately, the doctor that asked him to do the test has left, and there are no other members of staff that are able to do the test for another 5 hours. The results of the test will determine the patient’s management. How appropriate are the following responses by Mark?\n\n<strong>Question:</strong>\nDo the test himself and write the results in the patient’s notes.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 1,
    "explanation": ", because Mark could document the results as a student and write exactly who he was. Students are allowed to perform tests, just not to administer medication.",
    "topic": "Situational Judgement"
  },
  {
    "id": 23,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nMark, a medical student, is working with a group of nursing and physiotherapy students to learn about integrated care. Mark is mistaken for a junior doctor, as he is not in uniform, and is asked to test the urine of an elderly patient on the ward using a dipstick. Mark is familiar with the patient, and knows exactly how to do the test. Unfortunately, the doctor that asked him to do the test has left, and there are no other members of staff that are able to do the test for another 5 hours. The results of the test will determine the patient’s management. How appropriate are the following responses by Mark?\n\n<strong>Question:</strong>\nBleep the doctor that is in charge of the patient to alert him about his mistake.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 0,
    "explanation": "because it will alert the doctor as to his mistake, and the student can be advised appropriately.",
    "topic": "Situational Judgement"
  },
  {
    "id": 24,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nMark, a medical student, is working with a group of nursing and physiotherapy students to learn about integrated care. Mark is mistaken for a junior doctor, as he is not in uniform, and is asked to test the urine of an elderly patient on the ward using a dipstick. Mark is familiar with the patient, and knows exactly how to do the test. Unfortunately, the doctor that asked him to do the test has left, and there are no other members of staff that are able to do the test for another 5 hours. The results of the test will determine the patient’s management. How appropriate are the following responses by Mark?\n\n<strong>Question:</strong>\nPretend that the doctor never asked him to do the test.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 3,
    "explanation": "because the test needs to be done, and the doctor would assume that the test had been done. Therefore the patient could be left waiting for a long time.",
    "topic": "Situational Judgement"
  },
  {
    "id": 25,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nMark, a medical student, is working with a group of nursing and physiotherapy students to learn about integrated care. Mark is mistaken for a junior doctor, as he is not in uniform, and is asked to test the urine of an elderly patient on the ward using a dipstick. Mark is familiar with the patient, and knows exactly how to do the test. Unfortunately, the doctor that asked him to do the test has left, and there are no other members of staff that are able to do the test for another 5 hours. The results of the test will determine the patient’s management. How appropriate are the following responses by Mark?\n\n<strong>Question:</strong>\nTry to find another member of staff that would be capable of performing the test.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 0,
    "explanation": "because they might be better qualified to do the test.",
    "topic": "Situational Judgement"
  },
  {
    "id": 26,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nA medical student, Adele, is studying for her first year exams. She has started to panic, and does not feel as though she will be able to complete her revision before the exams start. If Adele fails the exams she would have to resit them in her holidays, which she has come to terms with. She is embarrassed of the possibility of failing,\n\n\nand would rather tell her friends and family that she was ill and unable to take the exams than face the embarrassment of failure. It is against the Medical School rules to opt out of an exam without a medical reason and a Doctor’s letter. How appropriate are the following actions for Adele to take?\n\n<strong>Question:</strong>\nFake an illness and postpone her exams.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 3,
    "explanation": "because it is dishonest and if the truth were to emerge, she could be expelled from the medical school for such an act.",
    "topic": "Situational Judgement"
  },
  {
    "id": 27,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nA medical student, Adele, is studying for her first year exams. She has started to panic, and does not feel as though she will be able to complete her revision before the exams start. If Adele fails the exams she would have to resit them in her holidays, which she has come to terms with. She is embarrassed of the possibility of failing,\n\n\nand would rather tell her friends and family that she was ill and unable to take the exams than face the embarrassment of failure. It is against the Medical School rules to opt out of an exam without a medical reason and a Doctor’s letter. How appropriate are the following actions for Adele to take?\n\n<strong>Question:</strong>\nSpeak to her parents and her personal tutor about her struggle to get through the revision.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 0,
    "explanation": "because they can support her and help her organise the rest of her revision.",
    "topic": "Situational Judgement"
  },
  {
    "id": 28,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nA medical student, Adele, is studying for her first year exams. She has started to panic, and does not feel as though she will be able to complete her revision before the exams start. If Adele fails the exams she would have to resit them in her holidays, which she has come to terms with. She is embarrassed of the possibility of failing,\n\n\nand would rather tell her friends and family that she was ill and unable to take the exams than face the embarrassment of failure. It is against the Medical School rules to opt out of an exam without a medical reason and a Doctor’s letter. How appropriate are the following actions for Adele to take?\n\n<strong>Question:</strong>\nSpeak to the other medical students to see if they all felt the same way about their work.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 0,
    "explanation": "because it can reassure her and give her more confidence as most people would probably feel similar.",
    "topic": "Situational Judgement"
  },
  {
    "id": 29,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nA medical student, Adele, is studying for her first year exams. She has started to panic, and does not feel as though she will be able to complete her revision before the exams start. If Adele fails the exams she would have to resit them in her holidays, which she has come to terms with. She is embarrassed of the possibility of failing,\n\n\nand would rather tell her friends and family that she was ill and unable to take the exams than face the embarrassment of failure. It is against the Medical School rules to opt out of an exam without a medical reason and a Doctor’s letter. How appropriate are the following actions for Adele to take?\n\n<strong>Question:</strong>\nRefuse to turn up to the exams on the day and pretend that she had food poisoning.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 3,
    "explanation": "because this is also dishonest and therefore, unprofessional.",
    "topic": "Situational Judgement"
  },
  {
    "id": 30,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nA medical student, Adele, is studying for her first year exams. She has started to panic, and does not feel as though she will be able to complete her revision before the exams start. If Adele fails the exams she would have to resit them in her holidays, which she has come to terms with. She is embarrassed of the possibility of failing,\n\n\nand would rather tell her friends and family that she was ill and unable to take the exams than face the embarrassment of failure. It is against the Medical School rules to opt out of an exam without a medical reason and a Doctor’s letter. How appropriate are the following actions for Adele to take?\n\n<strong>Question:</strong>\nMake an eﬃcient revision plan for her remaining days before the exams and attempt to do the exams as best as she can.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 0,
    "explanation": "because she might just pass her exams and surprise herself.",
    "topic": "Situational Judgement"
  },
  {
    "id": 31,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nRohan, a final year medical student, notices that Dijam, one of the medical students on his ward who had been drinking a lot the previous night is on call. How appropriate are the following actions by Rohan?\n\n<strong>Question:</strong>\nAdvise Dijam to go home.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 0,
    "explanation": "because Dijam should not be in the hospital and is not employed to be in the hospital so can go home to recuperate.",
    "topic": "Situational Judgement"
  },
  {
    "id": 32,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nRohan, a final year medical student, notices that Dijam, one of the medical students on his ward who had been drinking a lot the previous night is on call. How appropriate are the following actions by Rohan?\n\n<strong>Question:</strong>\nIgnore the situation because Dijam wasn’t actually treating any of the patients.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 3,
    "explanation": "because Dijam still has contact with the patients and it is against the rules to be hungover or have alcohol in your system as a student on the wards. Dijam could get asked to do certain tasks and must make sure that he is mentally and physically competent.",
    "topic": "Situational Judgement"
  },
  {
    "id": 33,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nRohan, a final year medical student, notices that Dijam, one of the medical students on his ward who had been drinking a lot the previous night is on call. How appropriate are the following actions by Rohan?\n\n<strong>Question:</strong>\nInform the doctors that are on call with Dijam.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 1,
    "explanation": "because they might send Dijam home as well, or could allow him to stay but restrict what he was allowed to do for the day.",
    "topic": "Situational Judgement"
  },
  {
    "id": 34,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nRohan, a final year medical student, notices that Dijam, one of the medical students on his ward who had been drinking a lot the previous night is on call. How appropriate are the following actions by Rohan?\n\n<strong>Question:</strong>\nJoke with Dijam about how he managed to make it into work on time.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 3,
    "explanation": "because this is a very serious violation of professionalism and joking about it is not addressing the problem.",
    "topic": "Situational Judgement"
  },
  {
    "id": 35,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nRohan, a final year medical student, notices that Dijam, one of the medical students on his ward who had been drinking a lot the previous night is on call. How appropriate are the following actions by Rohan?\n\n<strong>Question:</strong>\nInform the Doctor that is in charge of Dijam and Rohan’s attachment about Dijam’s state.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 1,
    "explanation": "because Dijam could get into more trouble than he probably ought to. That doctor also may not have witnessed Dijam in his state anyway, so it is better to inform the doctors that Dijam is shadowing than the one that is in charge.",
    "topic": "Situational Judgement"
  },
  {
    "id": 36,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nPatrick is a medical student, and is working with another group of students on a project that they will receive a joint mark for. Patrick has noticed that there are a couple of loud dominating people in the group, and that the rest of the group are very shy and quiet, and rarely contribute to the conversations. Jina is one particularly loud\n\n\nstudent that is involved, however she has been making some excellent points and is happy to do a lot of the work. How appropriate are the following responses by Patrick?\n\n<strong>Question:</strong>\nIgnore the situation and allow Jina to do the majority of the work.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 2,
    "explanation": "as the work should be a joint effort from everyone but it won’t be confrontational.",
    "topic": "Situational Judgement"
  },
  {
    "id": 37,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nPatrick is a medical student, and is working with another group of students on a project that they will receive a joint mark for. Patrick has noticed that there are a couple of loud dominating people in the group, and that the rest of the group are very shy and quiet, and rarely contribute to the conversations. Jina is one particularly loud\n\n\nstudent that is involved, however she has been making some excellent points and is happy to do a lot of the work. How appropriate are the following responses by Patrick?\n\n<strong>Question:</strong>\nAsk his personal tutor for advice on how he should tackle the situation.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 0,
    "explanation": "because Patrick’s personal tutor can advise him accordingly.",
    "topic": "Situational Judgement"
  },
  {
    "id": 38,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nPatrick is a medical student, and is working with another group of students on a project that they will receive a joint mark for. Patrick has noticed that there are a couple of loud dominating people in the group, and that the rest of the group are very shy and quiet, and rarely contribute to the conversations. Jina is one particularly loud\n\n\nstudent that is involved, however she has been making some excellent points and is happy to do a lot of the work. How appropriate are the following responses by Patrick?\n\n<strong>Question:</strong>\nAsk the quieter members of the team about what they think of Jina.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 1,
    "explanation": "it will allow them to speak up but the conversation wouldn’t involve Jina.",
    "topic": "Situational Judgement"
  },
  {
    "id": 39,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nPatrick is a medical student, and is working with another group of students on a project that they will receive a joint mark for. Patrick has noticed that there are a couple of loud dominating people in the group, and that the rest of the group are very shy and quiet, and rarely contribute to the conversations. Jina is one particularly loud\n\n\nstudent that is involved, however she has been making some excellent points and is happy to do a lot of the work. How appropriate are the following responses by Patrick?\n\n<strong>Question:</strong>\nSubtly hint to everyone to try to contribute more during the sessions so that it is a more even contribution from everyone.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 1,
    "explanation": "because the group members may not pick up on the hinting.",
    "topic": "Situational Judgement"
  },
  {
    "id": 40,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nPatrick is a medical student, and is working with another group of students on a project that they will receive a joint mark for. Patrick has noticed that there are a couple of loud dominating people in the group, and that the rest of the group are very shy and quiet, and rarely contribute to the conversations. Jina is one particularly loud\n\n\nstudent that is involved, however she has been making some excellent points and is happy to do a lot of the work. How appropriate are the following responses by Patrick?\n\n<strong>Question:</strong>\nConfront Jina and tell her to be less dominating during the sessions.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 2,
    "explanation": "because the confrontational approach could offend Jina and not achieve what Patrick was hoping for.",
    "topic": "Situational Judgement"
  },
  {
    "id": 41,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nNazia, a medical student, has been working on busy hospital ward. She has been writing up notes from the patient’s notes into her notebook so that she can construct a presentation on the case for her study group. No-one is allowed to remove the patient’s notes from the hospital. However, she has noticed that one of her friends, Joshua, has a set of patient’s notes sticking out of his bag. He has an appointment to get to, and has no time to write the notes up whilst at the hospital. Joshua says that he will return the notes first thing in the morning after he completes the work at home. How appropriate are the following responses from Nazia?\n\n<strong>Question:</strong>\nTell Joshua to do the presentation the next day instead when he has more time.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 0,
    "explanation": "because Joshua should never be allowed to breach confidentiality and take the patient’s notes away from the hospital.",
    "topic": "Situational Judgement"
  },
  {
    "id": 42,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nNazia, a medical student, has been working on busy hospital ward. She has been writing up notes from the patient’s notes into her notebook so that she can construct a presentation on the case for her study group. No-one is allowed to remove the patient’s notes from the hospital. However, she has noticed that one of her friends, Joshua, has a set of patient’s notes sticking out of his bag. He has an appointment to get to, and has no time to write the notes up whilst at the hospital. Joshua says that he will return the notes first thing in the morning after he completes the work at home. How appropriate are the following responses from Nazia?\n\n<strong>Question:</strong>\nIgnore what he is doing.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 3,
    "explanation": "because Nazia has a duty to not allow any serious breaches of confidentiality if she is aware of them.",
    "topic": "Situational Judgement"
  },
  {
    "id": 43,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nNazia, a medical student, has been working on busy hospital ward. She has been writing up notes from the patient’s notes into her notebook so that she can construct a presentation on the case for her study group. No-one is allowed to remove the patient’s notes from the hospital. However, she has noticed that one of her friends, Joshua, has a set of patient’s notes sticking out of his bag. He has an appointment to get to, and has no time to write the notes up whilst at the hospital. Joshua says that he will return the notes first thing in the morning after he completes the work at home. How appropriate are the following responses from Nazia?\n\n<strong>Question:</strong>\nTell the ward nurses after Joshua leaves with the notes.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 1,
    "explanation": "because although people have been made aware, the notes have already left the hospital.",
    "topic": "Situational Judgement"
  },
  {
    "id": 44,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nNazia, a medical student, has been working on busy hospital ward. She has been writing up notes from the patient’s notes into her notebook so that she can construct a presentation on the case for her study group. No-one is allowed to remove the patient’s notes from the hospital. However, she has noticed that one of her friends, Joshua, has a set of patient’s notes sticking out of his bag. He has an appointment to get to, and has no time to write the notes up whilst at the hospital. Joshua says that he will return the notes first thing in the morning after he completes the work at home. How appropriate are the following responses from Nazia?\n\n<strong>Question:</strong>\nSeek advice from your clinical supervisor.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 0,
    "explanation": "because your clinical advisor can give you the best advice when it is unclear what is best to do.",
    "topic": "Situational Judgement"
  },
  {
    "id": 45,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nNazia, a medical student, has been working on busy hospital ward. She has been writing up notes from the patient’s notes into her notebook so that she can construct a presentation on the case for her study group. No-one is allowed to remove the patient’s notes from the hospital. However, she has noticed that one of her friends, Joshua, has a set of patient’s notes sticking out of his bag. He has an appointment to get to, and has no time to write the notes up whilst at the hospital. Joshua says that he will return the notes first thing in the morning after he completes the work at home. How appropriate are the following responses from Nazia?\n\n<strong>Question:</strong>\nTell Joshua that you will write the notes for him so he doesn’t have to take the notes away from the hospital.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 1,
    "explanation": "because it prevents Joshua from taking the notes away from the hospital but will cost Megan her time.",
    "topic": "Situational Judgement"
  },
  {
    "id": 46,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nMr. Marshall has been seeing Dr Kelly regularly for years to check up on his diabetes. Recently, Mr Marshall has been seen by a different specialist doctor, Dr O’Brien. Dr O’Brien runs a test that shows that Mr. Marshall has cancer. He is then\n\n\nbooked to see Dr O’Brien the following week who will break the diagnosis. Mr. Marshall is currently in clinic with Dr Kelly and asks her “is everything okay?” How appropriate are the following responses by Dr Kelly?\n\n<strong>Question:</strong>\nTell Mr. Marshall that everything is fine.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 3,
    "explanation": "as this is a clear lie and therefore grossly unprofessional.",
    "topic": "Situational Judgement"
  },
  {
    "id": 47,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nMr. Marshall has been seeing Dr Kelly regularly for years to check up on his diabetes. Recently, Mr Marshall has been seen by a different specialist doctor, Dr O’Brien. Dr O’Brien runs a test that shows that Mr. Marshall has cancer. He is then\n\n\nbooked to see Dr O’Brien the following week who will break the diagnosis. Mr. Marshall is currently in clinic with Dr Kelly and asks her “is everything okay?” How appropriate are the following responses by Dr Kelly?\n\n<strong>Question:</strong>\nReassure Mr. Marshall that Dr O’Brien will be able to answer his question better.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 0,
    "explanation": "because Dr Kelly cannot really explain much to Mr. Marshall without breaking the bad news to him.",
    "topic": "Situational Judgement"
  },
  {
    "id": 48,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nMr. Marshall has been seeing Dr Kelly regularly for years to check up on his diabetes. Recently, Mr Marshall has been seen by a different specialist doctor, Dr O’Brien. Dr O’Brien runs a test that shows that Mr. Marshall has cancer. He is then\n\n\nbooked to see Dr O’Brien the following week who will break the diagnosis. Mr. Marshall is currently in clinic with Dr Kelly and asks her “is everything okay?” How appropriate are the following responses by Dr Kelly?\n\n<strong>Question:</strong>\nTell Mr. Marshall that she is not allowed to discuss that information with him yet.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 1,
    "explanation": "because this may damage their relationship.",
    "topic": "Situational Judgement"
  },
  {
    "id": 49,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nMr. Marshall has been seeing Dr Kelly regularly for years to check up on his diabetes. Recently, Mr Marshall has been seen by a different specialist doctor, Dr O’Brien. Dr O’Brien runs a test that shows that Mr. Marshall has cancer. He is then\n\n\nbooked to see Dr O’Brien the following week who will break the diagnosis. Mr. Marshall is currently in clinic with Dr Kelly and asks her “is everything okay?” How appropriate are the following responses by Dr Kelly?\n\n<strong>Question:</strong>\nLook away and say nothing to try to express the seriousness of the situation.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 3,
    "explanation": "because this may create confusion and being unnecessarily cryptic.",
    "topic": "Situational Judgement"
  },
  {
    "id": 50,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nMr. Marshall has been seeing Dr Kelly regularly for years to check up on his diabetes. Recently, Mr Marshall has been seen by a different specialist doctor, Dr O’Brien. Dr O’Brien runs a test that shows that Mr. Marshall has cancer. He is then\n\n\nbooked to see Dr O’Brien the following week who will break the diagnosis. Mr. Marshall is currently in clinic with Dr Kelly and asks her “is everything okay?” How appropriate are the following responses by Dr Kelly?\n\n<strong>Question:</strong>\nTell Mr. Marshall that he has cancer.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 2,
    "explanation": "because although it will address his concerns, Dr Kelly is not the best person to break the news.",
    "topic": "Situational Judgement"
  },
  {
    "id": 51,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nMary, a patient, has been in hospital for a long time whilst she recovers from a leg wound, and is desperate to return home. One day, Dr Anil is speaking to her on the ward. He has to leave urgently to answer his bleep call. Mary is left with a junior medical student, Julia. She asks Julia why she is still in the hospital, and wants to know if she can leave that day. How appropriate are the following responses by Julia?\n\n<strong>Question:</strong>\nExplain to Mary that she is unable to answer her question, and that the doctor will be back soon.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 0,
    "explanation": "because Julia is unable to advise Mary.",
    "topic": "Situational Judgement"
  },
  {
    "id": 52,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nMary, a patient, has been in hospital for a long time whilst she recovers from a leg wound, and is desperate to return home. One day, Dr Anil is speaking to her on the ward. He has to leave urgently to answer his bleep call. Mary is left with a junior medical student, Julia. She asks Julia why she is still in the hospital, and wants to know if she can leave that day. How appropriate are the following responses by Julia?\n\n<strong>Question:</strong>\nTell Mary that in most cases people wouldn’t be able to leave the hospital at her stage of recovery.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 3,
    "explanation": "because Julia isn’t experienced enough to assess when Mary will be able to go home.",
    "topic": "Situational Judgement"
  },
  {
    "id": 53,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nMary, a patient, has been in hospital for a long time whilst she recovers from a leg wound, and is desperate to return home. One day, Dr Anil is speaking to her on the ward. He has to leave urgently to answer his bleep call. Mary is left with a junior medical student, Julia. She asks Julia why she is still in the hospital, and wants to know if she can leave that day. How appropriate are the following responses by Julia?\n\n<strong>Question:</strong>\nTell Mary that she can self-discharge from hospital if she is very keen to leave, but that it might be against medical opinion.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 2,
    "explanation": "because whilst technically true, it is not Julia’s responsibility to advise Mary on anything without the permission of her doctor.",
    "topic": "Situational Judgement"
  },
  {
    "id": 54,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nMary, a patient, has been in hospital for a long time whilst she recovers from a leg wound, and is desperate to return home. One day, Dr Anil is speaking to her on the ward. He has to leave urgently to answer his bleep call. Mary is left with a junior medical student, Julia. She asks Julia why she is still in the hospital, and wants to know if she can leave that day. How appropriate are the following responses by Julia?\n\n<strong>Question:</strong>\nTell Mary that she will find out and let her know.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 0,
    "explanation": "as she would then be giving correct information and also addressing Mary’s concerns.",
    "topic": "Situational Judgement"
  },
  {
    "id": 55,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nMary, a patient, has been in hospital for a long time whilst she recovers from a leg wound, and is desperate to return home. One day, Dr Anil is speaking to her on the ward. He has to leave urgently to answer his bleep call. Mary is left with a junior medical student, Julia. She asks Julia why she is still in the hospital, and wants to know if she can leave that day. How appropriate are the following responses by Julia?\n\n<strong>Question:</strong>\nAnswer Mary’s questions directly.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 2,
    "explanation": "because Julia is not qualified and cannot answer Mary’s questions.",
    "topic": "Situational Judgement"
  },
  {
    "id": 56,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nDaniel, a first year medical student, is visiting a hospital for the first time since he started medical school. The doctor supervising them asked Hannah, another student to let the group know that they would be having a hand washing assessment\n\n\nconsisting of practical and theoretical aspects. Unfortunately, Daniel was not been about the assessment, and doesn’t know how to wash his hands properly. How appropriate are the following responses by Daniel?\n\n<strong>Question:</strong>\nAsk to have his turn once a few of his colleagues had been so he can observe.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 0,
    "explanation": "because it shows that Daniel is trying his best to learn the skill with minimal fuss.",
    "topic": "Situational Judgement"
  },
  {
    "id": 57,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nDaniel, a first year medical student, is visiting a hospital for the first time since he started medical school. The doctor supervising them asked Hannah, another student to let the group know that they would be having a hand washing assessment\n\n\nconsisting of practical and theoretical aspects. Unfortunately, Daniel was not been about the assessment, and doesn’t know how to wash his hands properly. How appropriate are the following responses by Daniel?\n\n<strong>Question:</strong>\nConfront Hannah and ask her why she didn’t tell him about the assessment.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 2,
    "explanation": "because Hannah needs to know that she missed someone out, but it won’t solve the immediate problem.",
    "topic": "Situational Judgement"
  },
  {
    "id": 58,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nDaniel, a first year medical student, is visiting a hospital for the first time since he started medical school. The doctor supervising them asked Hannah, another student to let the group know that they would be having a hand washing assessment\n\n\nconsisting of practical and theoretical aspects. Unfortunately, Daniel was not been about the assessment, and doesn’t know how to wash his hands properly. How appropriate are the following responses by Daniel?\n\n<strong>Question:</strong>\nTell the doctor that it was Hannah’s fault.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 3,
    "explanation": "because it could have been a genuine mistake on Hannah’s part, and will not make the current situation better.",
    "topic": "Situational Judgement"
  },
  {
    "id": 59,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nDaniel, a first year medical student, is visiting a hospital for the first time since he started medical school. The doctor supervising them asked Hannah, another student to let the group know that they would be having a hand washing assessment\n\n\nconsisting of practical and theoretical aspects. Unfortunately, Daniel was not been about the assessment, and doesn’t know how to wash his hands properly. How appropriate are the following responses by Daniel?\n\n<strong>Question:</strong>\nAsk the group to see how many people were prepared for the assessment.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 0,
    "explanation": "because it might have been an issue that affected lots of people, instead of just Daniel.",
    "topic": "Situational Judgement"
  },
  {
    "id": 60,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nDaniel, a first year medical student, is visiting a hospital for the first time since he started medical school. The doctor supervising them asked Hannah, another student to let the group know that they would be having a hand washing assessment\n\n\nconsisting of practical and theoretical aspects. Unfortunately, Daniel was not been about the assessment, and doesn’t know how to wash his hands properly. How appropriate are the following responses by Daniel?\n\n<strong>Question:</strong>\nAsk the doctor if he can have his assessment another day so he can learn the skill and the theory properly.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 1,
    "explanation": ". This shows that Daniel cares about his assessment but also means extra hassle for the doctor.",
    "topic": "Situational Judgement"
  },
  {
    "id": 61,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nHelen, a medical student, is waiting for her exam results. She was very worried because she didn’t feel as though she was ready for them. When the results come out, she realises that she has to retake her exams. She had booked to go travelling with a friend in South America over the summer holidays, but the resit exams are during the holidays and she is now worried that she will be unable to go, or that if she goes she will not have enough time to revise for the exams. She is also worried that her friend will be left to travel by herself if she doesn’t go. How appropriate are the following responses by Helen in this situation?\n\n<strong>Question:</strong>\nCall her friend and cancel the holiday.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 3,
    "explanation": "because her friend will have spent a lot of money on the flights and will be left to fend for herself or not be able to go.",
    "topic": "Situational Judgement"
  },
  {
    "id": 62,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nHelen, a medical student, is waiting for her exam results. She was very worried because she didn’t feel as though she was ready for them. When the results come out, she realises that she has to retake her exams. She had booked to go travelling with a friend in South America over the summer holidays, but the resit exams are during the holidays and she is now worried that she will be unable to go, or that if she goes she will not have enough time to revise for the exams. She is also worried that her friend will be left to travel by herself if she doesn’t go. How appropriate are the following responses by Helen in this situation?\n\n<strong>Question:</strong>\nGo travelling but take her revision with her and revise every day.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 2,
    "explanation": "because the holiday will not be enjoyable for Helen’s friend, and Helen will also not benefit from having a fun experience.",
    "topic": "Situational Judgement"
  },
  {
    "id": 63,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nHelen, a medical student, is waiting for her exam results. She was very worried because she didn’t feel as though she was ready for them. When the results come out, she realises that she has to retake her exams. She had booked to go travelling with a friend in South America over the summer holidays, but the resit exams are during the holidays and she is now worried that she will be unable to go, or that if she goes she will not have enough time to revise for the exams. She is also worried that her friend will be left to travel by herself if she doesn’t go. How appropriate are the following responses by Helen in this situation?\n\n<strong>Question:</strong>\nGo for part of the holiday and come home early to revise for the exams.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 0,
    "explanation": "because Helen also needs a break and being able to go for part of the holiday will be rewarding without having to miss out completely, and will leave enough time to prepare for the exams too.",
    "topic": "Situational Judgement"
  },
  {
    "id": 64,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nHelen, a medical student, is waiting for her exam results. She was very worried because she didn’t feel as though she was ready for them. When the results come out, she realises that she has to retake her exams. She had booked to go travelling with a friend in South America over the summer holidays, but the resit exams are during the holidays and she is now worried that she will be unable to go, or that if she goes she will not have enough time to revise for the exams. She is also worried that her friend will be left to travel by herself if she doesn’t go. How appropriate are the following responses by Helen in this situation?\n\n<strong>Question:</strong>\nGo travelling and cram in the revision in the few days between coming back and taking the exams.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 3,
    "explanation": "because Helen will be jeopardizing her chances of remaining in medical school.",
    "topic": "Situational Judgement"
  },
  {
    "id": 65,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nHelen, a medical student, is waiting for her exam results. She was very worried because she didn’t feel as though she was ready for them. When the results come out, she realises that she has to retake her exams. She had booked to go travelling with a friend in South America over the summer holidays, but the resit exams are during the holidays and she is now worried that she will be unable to go, or that if she goes she will not have enough time to revise for the exams. She is also worried that her friend will be left to travel by herself if she doesn’t go. How appropriate are the following responses by Helen in this situation?\n\n<strong>Question:</strong>\nTry to get another friend to replace her so she can stay at home and revise but without leaving her friend to fend for herself.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 0,
    "explanation": "because she will not be disappointing her friend as much, and will still be able to do her revision.",
    "topic": "Situational Judgement"
  },
  {
    "id": 66,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nCelia, a medical student, is living at home instead of at halls because she doesn’t live far away from the medical school. She found it hard to make friends in first year, and wants to move out for her second year or she fears that she will be further\n\n\nisolated from everyone. Unfortunately, that would depend on financial support from her parents. Celia’s parents are unable to provide much financial aid, and Celia doesn’t have time to take up another job. How appropriate are the following responses by Celia?\n\n<strong>Question:</strong>\nConfront her parents and demand the money because they are ‘denying her a student experience’.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 3,
    "explanation": "because Celia’s parents have not chosen to isolate her on purpose.",
    "topic": "Situational Judgement"
  },
  {
    "id": 67,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nCelia, a medical student, is living at home instead of at halls because she doesn’t live far away from the medical school. She found it hard to make friends in first year, and wants to move out for her second year or she fears that she will be further\n\n\nisolated from everyone. Unfortunately, that would depend on financial support from her parents. Celia’s parents are unable to provide much financial aid, and Celia doesn’t have time to take up another job. How appropriate are the following responses by Celia?\n\n<strong>Question:</strong>\nLive at home but join a sports team so she can meet more people and join in with the student lifestyle a little more.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 0,
    "explanation": "because Celia can meet new people without having to worry about insulting her parents.",
    "topic": "Situational Judgement"
  },
  {
    "id": 68,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nCelia, a medical student, is living at home instead of at halls because she doesn’t live far away from the medical school. She found it hard to make friends in first year, and wants to move out for her second year or she fears that she will be further\n\n\nisolated from everyone. Unfortunately, that would depend on financial support from her parents. Celia’s parents are unable to provide much financial aid, and Celia doesn’t have time to take up another job. How appropriate are the following responses by Celia?\n\n<strong>Question:</strong>\nStart spending every night at her friend’s room in halls.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 2,
    "explanation": "as although she will be closer to her friends, she may turn into an unwelcome guest quite quickly.",
    "topic": "Situational Judgement"
  },
  {
    "id": 69,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nCelia, a medical student, is living at home instead of at halls because she doesn’t live far away from the medical school. She found it hard to make friends in first year, and wants to move out for her second year or she fears that she will be further\n\n\nisolated from everyone. Unfortunately, that would depend on financial support from her parents. Celia’s parents are unable to provide much financial aid, and Celia doesn’t have time to take up another job. How appropriate are the following responses by Celia?\n\n<strong>Question:</strong>\nLive at home in resentment and isolate herself from her university friends.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 3,
    "explanation": "because this will affect her mental health and her relationships, and will probably lead to underperformance in her studies as well",
    "topic": "Situational Judgement"
  },
  {
    "id": 70,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nCelia, a medical student, is living at home instead of at halls because she doesn’t live far away from the medical school. She found it hard to make friends in first year, and wants to move out for her second year or she fears that she will be further\n\n\nisolated from everyone. Unfortunately, that would depend on financial support from her parents. Celia’s parents are unable to provide much financial aid, and Celia doesn’t have time to take up another job. How appropriate are the following responses by Celia?\n\n<strong>Question:</strong>\nCome to an agreement with her parents that if she can move out for a couple of years and then live at home for the rest of medical school.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 0,
    "explanation": "because it shows that she understands her family’s situation whilst attempting to address her own predicaments.",
    "topic": "Situational Judgement"
  },
  {
    "id": 71,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nXun, a medical student, is due to hand in an essay the following day at 8AM but is only half way to finishing it at 9PM. The essay will contribute 20% to his final grade and he is beginning to panic. How appropriate are the following responses by Xun?\n\n<strong>Question:</strong>\nStay up late and finish the essay so that he doesn’t miss the deadline.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 0,
    "explanation": "Xun should try to do it to the best of his ability in the remaining time.",
    "topic": "Situational Judgement"
  },
  {
    "id": 72,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nXun, a medical student, is due to hand in an essay the following day at 8AM but is only half way to finishing it at 9PM. The essay will contribute 20% to his final grade and he is beginning to panic. How appropriate are the following responses by Xun?\n\n<strong>Question:</strong>\nCall the head of the assessments and explain his situation to them, in the hope that there will be some leniency.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 1,
    "explanation": "it is unlikely that the deadline will be unchanged but there is always space for honesty and he might just be lucky.",
    "topic": "Situational Judgement"
  },
  {
    "id": 73,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nXun, a medical student, is due to hand in an essay the following day at 8AM but is only half way to finishing it at 9PM. The essay will contribute 20% to his final grade and he is beginning to panic. How appropriate are the following responses by Xun?\n\n<strong>Question:</strong>\nGive up and hand in the essay half-complete.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 3,
    "explanation": "because this action will affect his final grade.",
    "topic": "Situational Judgement"
  },
  {
    "id": 74,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nXun, a medical student, is due to hand in an essay the following day at 8AM but is only half way to finishing it at 9PM. The essay will contribute 20% to his final grade and he is beginning to panic. How appropriate are the following responses by Xun?\n\n<strong>Question:</strong>\nCopy out a similar essay that a friend has written.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 3,
    "explanation": "because this is plagiarism and both Xun and his friend would be penalised for it.",
    "topic": "Situational Judgement"
  },
  {
    "id": 75,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nXun, a medical student, is due to hand in an essay the following day at 8AM but is only half way to finishing it at 9PM. The essay will contribute 20% to his final grade and he is beginning to panic. How appropriate are the following responses by Xun?\n\n<strong>Question:</strong>\nFake an illness and ask for an extension.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 3,
    "explanation": "because he would be lying to the assessment oﬃce and could get into a lot of trouble for it.",
    "topic": "Situational Judgement"
  },
  {
    "id": 76,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nNahor, a medical student, has always enjoyed having creative hairstyles. He is starting his rotations in the hospitals next week, and is worried that he will be unable to express himself through his hair anymore.\n\n\nHow appropriate are the following responses by Nahor in this situation?\n\n<strong>Question:</strong>\nCut his hair and get a professional looking colour and style.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 0,
    "explanation": "because he will be showing that he respects the hospital, infection control, and the patients.",
    "topic": "Situational Judgement"
  },
  {
    "id": 77,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nNahor, a medical student, has always enjoyed having creative hairstyles. He is starting his rotations in the hospitals next week, and is worried that he will be unable to express himself through his hair anymore.\n\n\nHow appropriate are the following responses by Nahor in this situation?\n\n<strong>Question:</strong>\nStart his hospital rotations with his pink long hair, and refuse to change it if he is asked to.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 3,
    "explanation": "because this will set a bad first impression to his patients and colleagues – made worse by his refusal.",
    "topic": "Situational Judgement"
  },
  {
    "id": 78,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nNahor, a medical student, has always enjoyed having creative hairstyles. He is starting his rotations in the hospitals next week, and is worried that he will be unable to express himself through his hair anymore.\n\n\nHow appropriate are the following responses by Nahor in this situation?\n\n<strong>Question:</strong>\nStart his hospital rotations with his pink long hair, and only change it if he is asked to.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 2,
    "explanation": ". Nahor may set a bad first impression but there is a small chance that he might be allowed to keep it.",
    "topic": "Situational Judgement"
  },
  {
    "id": 79,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nNahor, a medical student, has always enjoyed having creative hairstyles. He is starting his rotations in the hospitals next week, and is worried that he will be unable to express himself through his hair anymore.\n\n\nHow appropriate are the following responses by Nahor in this situation?\n\n<strong>Question:</strong>\nKeep his hair a little quirky but make it look more professional that it has previously been.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 0,
    "explanation": "because he can still enjoy keeping his hair in an individual style without looking unprofessional.",
    "topic": "Situational Judgement"
  },
  {
    "id": 80,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nNahor, a medical student, has always enjoyed having creative hairstyles. He is starting his rotations in the hospitals next week, and is worried that he will be unable to express himself through his hair anymore.\n\n\nHow appropriate are the following responses by Nahor in this situation?\n\n<strong>Question:</strong>\nRequest permission from the clinical dean to keep his hair as it is.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 1,
    "explanation": ". Whilst this is a proactive approach, it is such a minor issue that it is not worth wasting the dean’s time about. In addition, the answer is very likely to be ‘no’.",
    "topic": "Situational Judgement"
  },
  {
    "id": 81,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nCharles, a medical student, was on call with Dr Patel in a busy hospital. Dr Patel told Charles to wait for the doctor that is going to handover to arrive before he leaves. The doctor isn’t due to arrive for another 30 minutes. Charles has a sports match in 15 minutes, and needs to leave before then. Unfortunately Dr Patel is busy with a patient and is not answering his bleep. How appropriate are the following responses by Charles?\n\n<strong>Question:</strong>\nLeave and email Dr Patel with a letter of apology.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 3,
    "explanation": "because Dr Patel will not receive the email until he has handed over to the doctor that they are waiting for and it could affect patient safety if Charles leaves.",
    "topic": "Situational Judgement"
  },
  {
    "id": 82,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nCharles, a medical student, was on call with Dr Patel in a busy hospital. Dr Patel told Charles to wait for the doctor that is going to handover to arrive before he leaves. The doctor isn’t due to arrive for another 30 minutes. Charles has a sports match in 15 minutes, and needs to leave before then. Unfortunately Dr Patel is busy with a patient and is not answering his bleep. How appropriate are the following responses by Charles?\n\n<strong>Question:</strong>\nCall up the captain of the sports team to apologise, and promise that you will make the second half of the match.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 0,
    "explanation": "because Charles knew he was going to be on call. If the doctor was running late then it would be different, but as this was planned Charles should wait for his commitment to finish first.",
    "topic": "Situational Judgement"
  },
  {
    "id": 83,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nCharles, a medical student, was on call with Dr Patel in a busy hospital. Dr Patel told Charles to wait for the doctor that is going to handover to arrive before he leaves. The doctor isn’t due to arrive for another 30 minutes. Charles has a sports match in 15 minutes, and needs to leave before then. Unfortunately Dr Patel is busy with a patient and is not answering his bleep. How appropriate are the following responses by Charles?\n\n<strong>Question:</strong>\nLeave the on call room and try to find Dr Patel to talk to him in person.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 0,
    "explanation": "because it addresses the problem directly and Dr Patel would then know that Charles was leaving.",
    "topic": "Situational Judgement"
  },
  {
    "id": 84,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nCharles, a medical student, was on call with Dr Patel in a busy hospital. Dr Patel told Charles to wait for the doctor that is going to handover to arrive before he leaves. The doctor isn’t due to arrive for another 30 minutes. Charles has a sports match in 15 minutes, and needs to leave before then. Unfortunately Dr Patel is busy with a patient and is not answering his bleep. How appropriate are the following responses by Charles?\n\n<strong>Question:</strong>\nLeave a message with one of the nurses in the on call room to tell the doctor that is meant to be taking over.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 2,
    "explanation": "because Charles should not rely on messengers as they aren’t as reliable as telling Dr Patel himself.",
    "topic": "Situational Judgement"
  },
  {
    "id": 85,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nCharles, a medical student, was on call with Dr Patel in a busy hospital. Dr Patel told Charles to wait for the doctor that is going to handover to arrive before he leaves. The doctor isn’t due to arrive for another 30 minutes. Charles has a sports match in 15 minutes, and needs to leave before then. Unfortunately Dr Patel is busy with a patient and is not answering his bleep. How appropriate are the following responses by Charles?\n\n<strong>Question:</strong>\nTry to call up the doctor that is taking over to explain the situation to him.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 3,
    "explanation": "No explanation available.",
    "topic": "Situational Judgement"
  },
  {
    "id": 86,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nArchie, a medical student, is in clinic with Dr Coombe. Dr Coombe explains to the patient that her medication isn’t working and that will have to try something else. Dr Coombe has to take an urgent call and walks out of the room- leaving Archie and the patient in the room. The patient then starts to ask Archie lots of questions about her medication.\n\n\nHow appropriate are the following responses by Archie?\n\n<strong>Question:</strong>\nExplain that he is unable to say, but that the patient should direct her questions towards Dr Coombe when he returns.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 0,
    "explanation": "because Archie is being truthful and professional without ignoring the patient and still addresses her concerns.",
    "topic": "Situational Judgement"
  },
  {
    "id": 87,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nArchie, a medical student, is in clinic with Dr Coombe. Dr Coombe explains to the patient that her medication isn’t working and that will have to try something else. Dr Coombe has to take an urgent call and walks out of the room- leaving Archie and the patient in the room. The patient then starts to ask Archie lots of questions about her medication.\n\n\nHow appropriate are the following responses by Archie?\n\n<strong>Question:</strong>\nTry to answer the questions to the best of his ability.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 3,
    "explanation": "because Archie is not qualified to answer questions regarding management from a patient.",
    "topic": "Situational Judgement"
  },
  {
    "id": 88,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nArchie, a medical student, is in clinic with Dr Coombe. Dr Coombe explains to the patient that her medication isn’t working and that will have to try something else. Dr Coombe has to take an urgent call and walks out of the room- leaving Archie and the patient in the room. The patient then starts to ask Archie lots of questions about her medication.\n\n\nHow appropriate are the following responses by Archie?\n\n<strong>Question:</strong>\nTell the patient that they should ‘Google’ the answers.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 2,
    "explanation": "because whilst Archie is not giving any harmful information directly, the patient is unlikely to find his advice useful and it doesn’t really address the problem.",
    "topic": "Situational Judgement"
  },
  {
    "id": 89,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nArchie, a medical student, is in clinic with Dr Coombe. Dr Coombe explains to the patient that her medication isn’t working and that will have to try something else. Dr Coombe has to take an urgent call and walks out of the room- leaving Archie and the patient in the room. The patient then starts to ask Archie lots of questions about her medication.\n\n\nHow appropriate are the following responses by Archie?\n\n<strong>Question:</strong>\nTell the patient that he will ‘Google’ the answers.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 3,
    "explanation": "because Archie doesn’t have the expertise necessary to give medical advice – with or without the use of Google.",
    "topic": "Situational Judgement"
  },
  {
    "id": 90,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nArchie, a medical student, is in clinic with Dr Coombe. Dr Coombe explains to the patient that her medication isn’t working and that will have to try something else. Dr Coombe has to take an urgent call and walks out of the room- leaving Archie and the patient in the room. The patient then starts to ask Archie lots of questions about her medication.\n\n\nHow appropriate are the following responses by Archie?\n\n<strong>Question:</strong>\nExcuse himself and walk out of the room to leave the patient in there by herself until Dr Coombe returns.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 2,
    "explanation": "because it is doesn’t address the problem directly but at least isn’t going to make the situation worse.",
    "topic": "Situational Judgement"
  },
  {
    "id": 91,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nMatthias, a medical student, has hurt his knee whilst playing hockey. He will need to wear a full leg brace which will prevent him from walking around the hospital. Matthias is concerned that it will affect his studies adversely. He will have to take at least 6 weeks off. How appropriate are the following responses by Matthias?\n\n<strong>Question:</strong>\nWrite to the medical school and his personal tutor for advice as soon as possible.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 0,
    "explanation": "because they can advise Matthias on the best possible care.",
    "topic": "Situational Judgement"
  },
  {
    "id": 92,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nMatthias, a medical student, has hurt his knee whilst playing hockey. He will need to wear a full leg brace which will prevent him from walking around the hospital. Matthias is concerned that it will affect his studies adversely. He will have to take at least 6 weeks off. How appropriate are the following responses by Matthias?\n\n<strong>Question:</strong>\nTry to go to the hospital for 2 days to see if he can cope.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 2,
    "explanation": "because it may slow his recovery and may be dangerous. However, he would at least know if he was able to cope with the activity.",
    "topic": "Situational Judgement"
  },
  {
    "id": 93,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nMatthias, a medical student, has hurt his knee whilst playing hockey. He will need to wear a full leg brace which will prevent him from walking around the hospital. Matthias is concerned that it will affect his studies adversely. He will have to take at least 6 weeks off. How appropriate are the following responses by Matthias?\n\n<strong>Question:</strong>\nDo all of his book work whilst he is unable to walk around the hospital, so that he can focus on clinical training when he’s better.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 0,
    "explanation": "because it shows that he is being proactive and does not want to waste time.",
    "topic": "Situational Judgement"
  },
  {
    "id": 94,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nMatthias, a medical student, has hurt his knee whilst playing hockey. He will need to wear a full leg brace which will prevent him from walking around the hospital. Matthias is concerned that it will affect his studies adversely. He will have to take at least 6 weeks off. How appropriate are the following responses by Matthias?\n\n<strong>Question:</strong>\nStop going into hospital without letting anyone know.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 3,
    "explanation": "because the medical school might assume that he is being lazy and not going to hospital as he isn’t committed.",
    "topic": "Situational Judgement"
  },
  {
    "id": 95,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nMatthias, a medical student, has hurt his knee whilst playing hockey. He will need to wear a full leg brace which will prevent him from walking around the hospital. Matthias is concerned that it will affect his studies adversely. He will have to take at least 6 weeks off. How appropriate are the following responses by Matthias?\n\n<strong>Question:</strong>\nStop going into hospital and ask his friends to let the medical school know.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 2,
    "explanation": "because the medical school should find out from Matthias- not his friends.",
    "topic": "Situational Judgement"
  },
  {
    "id": 96,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nJessie, a medical student, has a friend called Gemma. Jessie suspects that Gemma has an eating disorder. Gemma was very stressed at medical school, and Jessie is uncertain with how to proceed. How appropriate are the following responses by Jessie in this situation?\n\n<strong>Question:</strong>\nIgnore the situation and hope that someone else will notice.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 3,
    "explanation": "because Jessie may be the only person who notices this and is therefore in a position to address it. If nothing is done, Gemma may become very isolated.",
    "topic": "Situational Judgement"
  },
  {
    "id": 97,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nJessie, a medical student, has a friend called Gemma. Jessie suspects that Gemma has an eating disorder. Gemma was very stressed at medical school, and Jessie is uncertain with how to proceed. How appropriate are the following responses by Jessie in this situation?\n\n<strong>Question:</strong>\nTry to talk to Gemma and bring up her eating disorder.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 1,
    "explanation": "because Gemma will probably not want to talk about her eating disorder and avoid the topic in the future.",
    "topic": "Situational Judgement"
  },
  {
    "id": 98,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nJessie, a medical student, has a friend called Gemma. Jessie suspects that Gemma has an eating disorder. Gemma was very stressed at medical school, and Jessie is uncertain with how to proceed. How appropriate are the following responses by Jessie in this situation?\n\n<strong>Question:</strong>\nChat to Gemma about her stress and ask if she is coping. Allow her to bring up the disorder on her own account.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 0,
    "explanation": "because it shows that Jessie can be trusted and is there for Gemma, without being confrontational.",
    "topic": "Situational Judgement"
  },
  {
    "id": 99,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nJessie, a medical student, has a friend called Gemma. Jessie suspects that Gemma has an eating disorder. Gemma was very stressed at medical school, and Jessie is uncertain with how to proceed. How appropriate are the following responses by Jessie in this situation?\n\n<strong>Question:</strong>\nSpeak to Gemma’s parents about it, without consulting her.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 1,
    "explanation": "as whilst it may make Gemma’s parents aware – it is likely to strain their friendship.",
    "topic": "Situational Judgement"
  },
  {
    "id": 100,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nJessie, a medical student, has a friend called Gemma. Jessie suspects that Gemma has an eating disorder. Gemma was very stressed at medical school, and Jessie is uncertain with how to proceed. How appropriate are the following responses by Jessie in this situation?\n\n<strong>Question:</strong>\nSpeak to your personal tutor for advice.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 0,
    "explanation": "because they will have seen this scenario before, and will know how to respond to it.",
    "topic": "Situational Judgement"
  },
  {
    "id": 101,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nHelen, a medical student, is has to retake her end of year exams because she failed them the first time. She had booked to go travelling with a friend in South America over the summer holidays, but the resit exams are during this period. She is worried that she will be unable to go and therefore, her friend will be left to travel by herself. If she goes she won’t have enough time to revise for the exams. How appropriate are the following responses by Helen in this situation?\n\n<strong>Question:</strong>\nCall her friend and cancel the holiday.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 2,
    "explanation": "although this will allow her to revise for her exams, her friend will have spent a lot of money on the flights and will be left to fend for herself or not be able to go.",
    "topic": "Situational Judgement"
  },
  {
    "id": 102,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nHelen, a medical student, is has to retake her end of year exams because she failed them the first time. She had booked to go travelling with a friend in South America over the summer holidays, but the resit exams are during this period. She is worried that she will be unable to go and therefore, her friend will be left to travel by herself. If she goes she won’t have enough time to revise for the exams. How appropriate are the following responses by Helen in this situation?\n\n<strong>Question:</strong>\nGo travelling but take her revision with her and revise every day.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 1,
    "explanation": "Helen would be addressing both issues but given the circumstances, her revision may suffer or her friend may not enjoy the holiday as much.",
    "topic": "Situational Judgement"
  },
  {
    "id": 103,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nHelen, a medical student, is has to retake her end of year exams because she failed them the first time. She had booked to go travelling with a friend in South America over the summer holidays, but the resit exams are during this period. She is worried that she will be unable to go and therefore, her friend will be left to travel by herself. If she goes she won’t have enough time to revise for the exams. How appropriate are the following responses by Helen in this situation?\n\n<strong>Question:</strong>\nGo for part of the holiday and come home early to revise for the exams.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 0,
    "explanation": "because Helen also needs a break and being able to go for part of the holiday would be rewarding and shouldn’t affect her revision as long as she comes back early enough.",
    "topic": "Situational Judgement"
  },
  {
    "id": 104,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nHelen, a medical student, is has to retake her end of year exams because she failed them the first time. She had booked to go travelling with a friend in South America over the summer holidays, but the resit exams are during this period. She is worried that she will be unable to go and therefore, her friend will be left to travel by herself. If she goes she won’t have enough time to revise for the exams. How appropriate are the following responses by Helen in this situation?\n\n<strong>Question:</strong>\nGo travelling and cram in the revision in the few days between coming back and taking the exams.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 3,
    "explanation": "because Helen will be jeopardizing her chances of remaining in medical school.",
    "topic": "Situational Judgement"
  },
  {
    "id": 105,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nHelen, a medical student, is has to retake her end of year exams because she failed them the first time. She had booked to go travelling with a friend in South America over the summer holidays, but the resit exams are during this period. She is worried that she will be unable to go and therefore, her friend will be left to travel by herself. If she goes she won’t have enough time to revise for the exams. How appropriate are the following responses by Helen in this situation?\n\n<strong>Question:</strong>\nTransfer her holiday booking to another mutually good friend so she can stay at home and revise but without leaving her friend to fend for herself.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 0,
    "explanation": "because she will not be disappointing her friend as much, and will still be able to do her revision.",
    "topic": "Situational Judgement"
  },
  {
    "id": 106,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nDaniel and Sean are medical students who are working together on a project. They get into a heated argument in the hospital lobby because Daniel has been prioritising his social life recently which is frustrating Sean. How important are the following factors for Sean in deciding on what to do?\n\n<strong>Question:</strong>\nSean can generally produce better work than Daniel anyway.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 2,
    "explanation": "because the task should be joint effort.",
    "topic": "Situational Judgement"
  },
  {
    "id": 107,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nDaniel and Sean are medical students who are working together on a project. They get into a heated argument in the hospital lobby because Daniel has been prioritising his social life recently which is frustrating Sean. How important are the following factors for Sean in deciding on what to do?\n\n<strong>Question:</strong>\nThe mark that they get will be recorded in their log books.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 1,
    "explanation": ", because this means that their grade is significant, and Sean will want to do as well as possible.",
    "topic": "Situational Judgement"
  },
  {
    "id": 108,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nDaniel and Sean are medical students who are working together on a project. They get into a heated argument in the hospital lobby because Daniel has been prioritising his social life recently which is frustrating Sean. How important are the following factors for Sean in deciding on what to do?\n\n<strong>Question:</strong>\nDaniel and Sean have to work together for the rest of the year.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 1,
    "explanation": "because they should learn how to work together to prevent future problems with their group work.",
    "topic": "Situational Judgement"
  },
  {
    "id": 109,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nDaniel and Sean are medical students who are working together on a project. They get into a heated argument in the hospital lobby because Daniel has been prioritising his social life recently which is frustrating Sean. How important are the following factors for Sean in deciding on what to do?\n\n<strong>Question:</strong>\nDaniel has recently broken up with his girlfriend.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 2,
    "explanation": "although this might be troubling Daniel, he shouldn’t let his social life affect his work life.",
    "topic": "Situational Judgement"
  },
  {
    "id": 110,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nDaniel and Sean are medical students who are working together on a project. They get into a heated argument in the hospital lobby because Daniel has been prioritising his social life recently which is frustrating Sean. How important are the following factors for Sean in deciding on what to do?\n\n<strong>Question:</strong>\nSean usually does most of the work when they have to do projects together.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 0,
    "explanation": "because Daniel maybe used to not pulling his weight, and will have to be informed that he needs to contribute more.",
    "topic": "Situational Judgement"
  },
  {
    "id": 111,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nA medical student Tanya is invited to attend a clinic with Dr Garg who is in charge of Tanya’s grade for the whole term. On the morning of the clinic, Tanya realises that she has not finished her essay that is due the next day. How important are the following factors for Tanya to consider in deciding on what to do?\n\n<strong>Question:</strong>\nThe importance of the essay towards her final mark for the year.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 0,
    "explanation": ", because if the essay counts towards Tanya’s final mark for the year then she would want to do very well.",
    "topic": "Situational Judgement"
  },
  {
    "id": 112,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nA medical student Tanya is invited to attend a clinic with Dr Garg who is in charge of Tanya’s grade for the whole term. On the morning of the clinic, Tanya realises that she has not finished her essay that is due the next day. How important are the following factors for Tanya to consider in deciding on what to do?\n\n<strong>Question:</strong>\nTanya’s friend did not find the clinic very educational.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 3,
    "explanation": "different people learn in different ways and every clinic is different.",
    "topic": "Situational Judgement"
  },
  {
    "id": 113,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nA medical student Tanya is invited to attend a clinic with Dr Garg who is in charge of Tanya’s grade for the whole term. On the morning of the clinic, Tanya realises that she has not finished her essay that is due the next day. How important are the following factors for Tanya to consider in deciding on what to do?\n\n<strong>Question:</strong>\nTanya’s reputation with Dr Garg.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 2,
    "explanation": ", because Dr Garg will be assessing her at the end of the term.",
    "topic": "Situational Judgement"
  },
  {
    "id": 114,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nA medical student Tanya is invited to attend a clinic with Dr Garg who is in charge of Tanya’s grade for the whole term. On the morning of the clinic, Tanya realises that she has not finished her essay that is due the next day. How important are the following factors for Tanya to consider in deciding on what to do?\n\n<strong>Question:</strong>\nWhether or not Tanya will be able to attend a different clinic with Dr Garg.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 0,
    "explanation": ", because if this opportunity is available at another time, then missing this particular clinic is not particularly disastrous for Tanya’s learning.",
    "topic": "Situational Judgement"
  },
  {
    "id": 115,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nA medical student Tanya is invited to attend a clinic with Dr Garg who is in charge of Tanya’s grade for the whole term. On the morning of the clinic, Tanya realises that she has not finished her essay that is due the next day. How important are the following factors for Tanya to consider in deciding on what to do?\n\n<strong>Question:</strong>\nHow long it will take to finish the essay.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 0,
    "explanation": ", because Tanya can complete the essay in time for the clinic, then she would not be compromising her learning.",
    "topic": "Situational Judgement"
  },
  {
    "id": 116,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nCaroline, a final year medical student, is teaching first year medical students. She notices that they frequently arrive looking untidy and has noticed that some of the doctors have started to comment on how badly dressed the first year students are. She is worried that she will offend the students if she asks them to dress more appropriately, because 2 of the students are on her sports team. How important are the following factors for Caroline in deciding on what to do?\n\n<strong>Question:</strong>\nCaroline’s reputation with the doctors.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 1,
    "explanation": ", because the doctors that will be assessing Caroline will associate her with the dishevelled looking first year students and it may look unprofessional.",
    "topic": "Situational Judgement"
  },
  {
    "id": 117,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nCaroline, a final year medical student, is teaching first year medical students. She notices that they frequently arrive looking untidy and has noticed that some of the doctors have started to comment on how badly dressed the first year students are. She is worried that she will offend the students if she asks them to dress more appropriately, because 2 of the students are on her sports team. How important are the following factors for Caroline in deciding on what to do?\n\n<strong>Question:</strong>\nThe first year students are only in hospital for 2 hours every week.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 3,
    "explanation": ", because they will still be representing the medical school and as such have a duty towards acting properly.",
    "topic": "Situational Judgement"
  },
  {
    "id": 118,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nCaroline, a final year medical student, is teaching first year medical students. She notices that they frequently arrive looking untidy and has noticed that some of the doctors have started to comment on how badly dressed the first year students are. She is worried that she will offend the students if she asks them to dress more appropriately, because 2 of the students are on her sports team. How important are the following factors for Caroline in deciding on what to do?\n\n<strong>Question:</strong>\nThe first year students have direct contact with the patients and the hospital staff.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 0,
    "explanation": ", because the first year students are therefore expected to dress appropriately and professionally.",
    "topic": "Situational Judgement"
  },
  {
    "id": 119,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nCaroline, a final year medical student, is teaching first year medical students. She notices that they frequently arrive looking untidy and has noticed that some of the doctors have started to comment on how badly dressed the first year students are. She is worried that she will offend the students if she asks them to dress more appropriately, because 2 of the students are on her sports team. How important are the following factors for Caroline in deciding on what to do?\n\n<strong>Question:</strong>\n2 of the students are on her sports team.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 2,
    "explanation": ", because if she needs to ask them to dress more appropriately, they shouldn’t get offended.",
    "topic": "Situational Judgement"
  },
  {
    "id": 120,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nCaroline, a final year medical student, is teaching first year medical students. She notices that they frequently arrive looking untidy and has noticed that some of the doctors have started to comment on how badly dressed the first year students are. She is worried that she will offend the students if she asks them to dress more appropriately, because 2 of the students are on her sports team. How important are the following factors for Caroline in deciding on what to do?\n\n<strong>Question:</strong>\nThe first year students don’t have their professionalism exams until third year.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 3,
    "explanation": "the students are representing the medical profession and must appear appropriately presentable regardless of when their examinations are.",
    "topic": "Situational Judgement"
  },
  {
    "id": 121,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nA medical student, Albert, is in his third year and is captain of the hockey team. He has noticed that his hockey training on Wednesday afternoons always clashes\n\n\nwith his consultant teaching sessions. The consultant will be responsible for his final grade for the year. How important are the following factors for Albert in deciding on what to do?\n\n<strong>Question:</strong>\nHis hockey team needs him this year to win the championships.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 3,
    "explanation": "timetabled clinical commitments should always come first (without extenuating circumstances).",
    "topic": "Situational Judgement"
  },
  {
    "id": 122,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nA medical student, Albert, is in his third year and is captain of the hockey team. He has noticed that his hockey training on Wednesday afternoons always clashes\n\n\nwith his consultant teaching sessions. The consultant will be responsible for his final grade for the year. How important are the following factors for Albert in deciding on what to do?\n\n<strong>Question:</strong>\nAlbert is on a sports scholarship at medical school.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 0,
    "explanation": ", because he may have to show a sports contribution to the medical school if he is on a scholarship. If this is the case, his firm head might\n\n\nunderstand, and rearrange the teaching sessions.",
    "topic": "Situational Judgement"
  },
  {
    "id": 123,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nA medical student, Albert, is in his third year and is captain of the hockey team. He has noticed that his hockey training on Wednesday afternoons always clashes\n\n\nwith his consultant teaching sessions. The consultant will be responsible for his final grade for the year. How important are the following factors for Albert in deciding on what to do?\n\n<strong>Question:</strong>\nHis grade will determine if he can progress to his fourth year.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 0,
    "explanation": ", because he may not be allowed to finish his degree if he chooses to miss the sessions and not inform the consultant.",
    "topic": "Situational Judgement"
  },
  {
    "id": 124,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nA medical student, Albert, is in his third year and is captain of the hockey team. He has noticed that his hockey training on Wednesday afternoons always clashes\n\n\nwith his consultant teaching sessions. The consultant will be responsible for his final grade for the year. How important are the following factors for Albert in deciding on what to do?\n\n<strong>Question:</strong>\nThe consultant is free on Wednesday mornings.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 1,
    "explanation": "because this might allow him to rearrange the teaching sessions.",
    "topic": "Situational Judgement"
  },
  {
    "id": 125,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nA medical student, Albert, is in his third year and is captain of the hockey team. He has noticed that his hockey training on Wednesday afternoons always clashes\n\n\nwith his consultant teaching sessions. The consultant will be responsible for his final grade for the year. How important are the following factors for Albert in deciding on what to do?\n\n<strong>Question:</strong>\nThis is the only teaching he will get on this particular topic this year.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 0,
    "explanation": "because if he is missing invaluable teaching then this will affect his training and disadvantage him in the long run.",
    "topic": "Situational Judgement"
  },
  {
    "id": 126,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nA patient is in a consultation with Dr Davison and Sybil, a medical student is observing. The doctor swears a number of times during the consultation, and Sybil notices that the patient is getting uncomfortable. How important are the following factors for Sybil in deciding on what to do?\n\n<strong>Question:</strong>\nDr Davison is marking one of Sybil’s assessments.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 3,
    "explanation": "patient satisfaction in important and challenging bad practice does not reflect badly on students.",
    "topic": "Situational Judgement"
  },
  {
    "id": 127,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nA patient is in a consultation with Dr Davison and Sybil, a medical student is observing. The doctor swears a number of times during the consultation, and Sybil notices that the patient is getting uncomfortable. How important are the following factors for Sybil in deciding on what to do?\n\n<strong>Question:</strong>\nThe patient appears to be uncomfortable with Dr Davison swearing.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 1,
    "explanation": "because the patient might be reluctant to ask questions or comply with the treatment if they are uncomfortable.",
    "topic": "Situational Judgement"
  },
  {
    "id": 128,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nA patient is in a consultation with Dr Davison and Sybil, a medical student is observing. The doctor swears a number of times during the consultation, and Sybil notices that the patient is getting uncomfortable. How important are the following factors for Sybil in deciding on what to do?\n\n<strong>Question:</strong>\nHow often Dr Davison swears during other patient consultations.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 1,
    "explanation": "because if it is not a regular thing, then perhaps it is because Dr Davison is particularly stressed one day and might not be aware that he is swearing.",
    "topic": "Situational Judgement"
  },
  {
    "id": 129,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nA patient is in a consultation with Dr Davison and Sybil, a medical student is observing. The doctor swears a number of times during the consultation, and Sybil notices that the patient is getting uncomfortable. How important are the following factors for Sybil in deciding on what to do?\n\n<strong>Question:</strong>\nIf other members of staff are aware of Dr Davison’s swearing.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 2,
    "explanation": "because whether or not they are aware of his swearing, it still makes the patient feel uncomfortable.",
    "topic": "Situational Judgement"
  },
  {
    "id": 130,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nA patient is in a consultation with Dr Davison and Sybil, a medical student is observing. The doctor swears a number of times during the consultation, and Sybil notices that the patient is getting uncomfortable. How important are the following factors for Sybil in deciding on what to do?\n\n<strong>Question:</strong>\nIf the patient has seen Dr Davison before.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 0,
    "explanation": "because that means that the patient was either comfortable with the doctor previously, or that they were uncomfortable from before.",
    "topic": "Situational Judgement"
  },
  {
    "id": 131,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nMarco and Alex are medical students on their surgical placement. They are invited to observe surgery with Mr. Daniels and told not to touch the sterile equipment. Before the operation begins, Marco sees Alex accidentally touch the sterile trolley with the operating equipment on it. Alex doesn’t tell anyone, and Marco thinks that he should inform someone. How important are the following factors for Marco in deciding on what to do?\n\n<strong>Question:</strong>\nThe risk to the patient who is about to have the operation.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 0,
    "explanation": "because the patient could be subjected to avoidable infections, which could be life threatening.",
    "topic": "Situational Judgement"
  },
  {
    "id": 132,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nMarco and Alex are medical students on their surgical placement. They are invited to observe surgery with Mr. Daniels and told not to touch the sterile equipment. Before the operation begins, Marco sees Alex accidentally touch the sterile trolley with the operating equipment on it. Alex doesn’t tell anyone, and Marco thinks that he should inform someone. How important are the following factors for Marco in deciding on what to do?\n\n<strong>Question:</strong>\nThe inconvenience for all of the theatre staff to have to bring out a new sterile trolley.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 3,
    "explanation": "because the risk of the patient receiving an infection is worth the time required for the theatre staff to get more equipment ready.",
    "topic": "Situational Judgement"
  },
  {
    "id": 133,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nMarco and Alex are medical students on their surgical placement. They are invited to observe surgery with Mr. Daniels and told not to touch the sterile equipment. Before the operation begins, Marco sees Alex accidentally touch the sterile trolley with the operating equipment on it. Alex doesn’t tell anyone, and Marco thinks that he should inform someone. How important are the following factors for Marco in deciding on what to do?\n\n<strong>Question:</strong>\nAlex would be embarrassed because he touched something that he wasn’t meant to.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 2,
    "explanation": ", because he is only a medical student so can be forgiven for making mistakes. The repercussions of not saying anything could be far more serious.",
    "topic": "Situational Judgement"
  },
  {
    "id": 134,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nMarco and Alex are medical students on their surgical placement. They are invited to observe surgery with Mr. Daniels and told not to touch the sterile equipment. Before the operation begins, Marco sees Alex accidentally touch the sterile trolley with the operating equipment on it. Alex doesn’t tell anyone, and Marco thinks that he should inform someone. How important are the following factors for Marco in deciding on what to do?\n\n<strong>Question:</strong>\nAlex only briefly touched the trolley.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 2,
    "explanation": "because there is still a risk of infection if he is not sterile but the trolley is. He could still transmit infections.",
    "topic": "Situational Judgement"
  },
  {
    "id": 135,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nMarco and Alex are medical students on their surgical placement. They are invited to observe surgery with Mr. Daniels and told not to touch the sterile equipment. Before the operation begins, Marco sees Alex accidentally touch the sterile trolley with the operating equipment on it. Alex doesn’t tell anyone, and Marco thinks that he should inform someone. How important are the following factors for Marco in deciding on what to do?\n\n<strong>Question:</strong>\nMr Daniels would be disappointed in Marco and Alex.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 2,
    "explanation": "because it is still important to protect the patient first and foremost.",
    "topic": "Situational Judgement"
  },
  {
    "id": 136,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nA medical student, Freddie, is on a busy hospital ward. A patient is addicted to pain medication and constantly bullies staff, so that they are reluctant to see her. Freddie has noticed that the doctors and nurses have been attending to her less frequently than before. One day, after she has been reviewed by the doctors and nurses, she starts to verbally abuse Freddie. She demands that he gets her more pain medication. How important are the following factors for Freddie in determining what he should do?\n\n<strong>Question:</strong>\nThe patient might be in pain.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 1,
    "explanation": "because if the patient really is in pain then action should be taken. However, given that the patient is addicted to pain medication, it becomes less important.",
    "topic": "Situational Judgement"
  },
  {
    "id": 137,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nA medical student, Freddie, is on a busy hospital ward. A patient is addicted to pain medication and constantly bullies staff, so that they are reluctant to see her. Freddie has noticed that the doctors and nurses have been attending to her less frequently than before. One day, after she has been reviewed by the doctors and nurses, she starts to verbally abuse Freddie. She demands that he gets her more pain medication. How important are the following factors for Freddie in determining what he should do?\n\n<strong>Question:</strong>\nThe patient is being avoided by staff.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 3,
    "explanation": "because her demands for pain medication are irrelevant to the staff, especially since she has just been reviewed by the doctors and nurses.",
    "topic": "Situational Judgement"
  },
  {
    "id": 138,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nA medical student, Freddie, is on a busy hospital ward. A patient is addicted to pain medication and constantly bullies staff, so that they are reluctant to see her. Freddie has noticed that the doctors and nurses have been attending to her less frequently than before. One day, after she has been reviewed by the doctors and nurses, she starts to verbally abuse Freddie. She demands that he gets her more pain medication. How important are the following factors for Freddie in determining what he should do?\n\n<strong>Question:</strong>\nFreddie is not authorised to administer pain medication.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 0,
    "explanation": "because Freddie cannot administer any medications.",
    "topic": "Situational Judgement"
  },
  {
    "id": 139,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nA medical student, Freddie, is on a busy hospital ward. A patient is addicted to pain medication and constantly bullies staff, so that they are reluctant to see her. Freddie has noticed that the doctors and nurses have been attending to her less frequently than before. One day, after she has been reviewed by the doctors and nurses, she starts to verbally abuse Freddie. She demands that he gets her more pain medication. How important are the following factors for Freddie in determining what he should do?\n\n<strong>Question:</strong>\nThe patient may have already had her regular pain medication.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 0,
    "explanation": "because this means that the pain medication is not working or she is asking for it unnecessarily.",
    "topic": "Situational Judgement"
  },
  {
    "id": 140,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nA medical student, Freddie, is on a busy hospital ward. A patient is addicted to pain medication and constantly bullies staff, so that they are reluctant to see her. Freddie has noticed that the doctors and nurses have been attending to her less frequently than before. One day, after she has been reviewed by the doctors and nurses, she starts to verbally abuse Freddie. She demands that he gets her more pain medication. How important are the following factors for Freddie in determining what he should do?\n\n<strong>Question:</strong>\nThe patient has recently been reviewed by the doctors and nurses.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 0,
    "explanation": "because the patient has been reviewed and is therefore unlikely to need anything else so soon.",
    "topic": "Situational Judgement"
  },
  {
    "id": 141,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nJenny is a junior doctor who is training under Mr. Gupta. Her sister, Claire, is due to be operated on by Mr. Gupta to correct a hernia. Claire is nervous about the operation and asks Jenny what she thinks about Mr. Gupta. Jenny knows that Mr. Gupta is a very good surgeon but he is often late when seeing patients on the wards. Therefore, he always appears to be rushing, flustered, and a little sweaty when speaking to them before their operations, which can make them lose confidence in him. Jenny must decide on what to say to her sister Claire.\n\n\nHow important are the following factors for Jenny in deciding on what to do?\n\n<strong>Question:</strong>\nMr. Gupta is very competent.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 0,
    "explanation": "because this is the key issue and the most important one for patient outcomes.",
    "topic": "Situational Judgement"
  },
  {
    "id": 142,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nJenny is a junior doctor who is training under Mr. Gupta. Her sister, Claire, is due to be operated on by Mr. Gupta to correct a hernia. Claire is nervous about the operation and asks Jenny what she thinks about Mr. Gupta. Jenny knows that Mr. Gupta is a very good surgeon but he is often late when seeing patients on the wards. Therefore, he always appears to be rushing, flustered, and a little sweaty when speaking to them before their operations, which can make them lose confidence in him. Jenny must decide on what to say to her sister Claire.\n\n\nHow important are the following factors for Jenny in deciding on what to do?\n\n<strong>Question:</strong>\nThe surgeon is often flustered when speaking to patients.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 1,
    "explanation": "because letting Claire know this would put Claire at ease but it is not an essential piece of information to convey.",
    "topic": "Situational Judgement"
  },
  {
    "id": 143,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nJenny is a junior doctor who is training under Mr. Gupta. Her sister, Claire, is due to be operated on by Mr. Gupta to correct a hernia. Claire is nervous about the operation and asks Jenny what she thinks about Mr. Gupta. Jenny knows that Mr. Gupta is a very good surgeon but he is often late when seeing patients on the wards. Therefore, he always appears to be rushing, flustered, and a little sweaty when speaking to them before their operations, which can make them lose confidence in him. Jenny must decide on what to say to her sister Claire.\n\n\nHow important are the following factors for Jenny in deciding on what to do?\n\n<strong>Question:</strong>\nMr. Gupta recently reprimanded Jenny for filling in a drug chart incorrectly.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 3,
    "explanation": "as it is irrelevant to Claire’s operation.",
    "topic": "Situational Judgement"
  },
  {
    "id": 144,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nJenny is a junior doctor who is training under Mr. Gupta. Her sister, Claire, is due to be operated on by Mr. Gupta to correct a hernia. Claire is nervous about the operation and asks Jenny what she thinks about Mr. Gupta. Jenny knows that Mr. Gupta is a very good surgeon but he is often late when seeing patients on the wards. Therefore, he always appears to be rushing, flustered, and a little sweaty when speaking to them before their operations, which can make them lose confidence in him. Jenny must decide on what to say to her sister Claire.\n\n\nHow important are the following factors for Jenny in deciding on what to do?\n\n<strong>Question:</strong>\nClaire is already quite anxious about having an operation.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 0,
    "explanation": ", because her anxiety could affect her recovery if she is not completely comfortable with the surgeon.",
    "topic": "Situational Judgement"
  },
  {
    "id": 145,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nJenny is a junior doctor who is training under Mr. Gupta. Her sister, Claire, is due to be operated on by Mr. Gupta to correct a hernia. Claire is nervous about the operation and asks Jenny what she thinks about Mr. Gupta. Jenny knows that Mr. Gupta is a very good surgeon but he is often late when seeing patients on the wards. Therefore, he always appears to be rushing, flustered, and a little sweaty when speaking to them before their operations, which can make them lose confidence in him. Jenny must decide on what to say to her sister Claire.\n\n\nHow important are the following factors for Jenny in deciding on what to do?\n\n<strong>Question:</strong>\nPatients usually do better if they are confident and at ease before an operation.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 0,
    "explanation": "because if this is true, it will help Claire’s recovery.",
    "topic": "Situational Judgement"
  },
  {
    "id": 146,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nA medical student, Alex, is on the university rugby team. He has been given model answers for various written assessments from older members of the rugby team. His friend, Annabel, realises that the Medical school often repeats their questions, and that it is against the rules to pass down previous papers from year to year. How important are the following factors for Annabel in deciding on what to do?\n\n<strong>Question:</strong>\nAlex and Annabel dated for the first year, until he broke up with her.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 2,
    "explanation": "because Annabel should respond according to the situation, not because of who is involved. However, she should be wary that her actions are not in revenge.",
    "topic": "Situational Judgement"
  },
  {
    "id": 147,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nA medical student, Alex, is on the university rugby team. He has been given model answers for various written assessments from older members of the rugby team. His friend, Annabel, realises that the Medical school often repeats their questions, and that it is against the rules to pass down previous papers from year to year. How important are the following factors for Annabel in deciding on what to do?\n\n<strong>Question:</strong>\nAlex is a hard working student.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 1,
    "explanation": "because it will show that he usually works hard, whether or not he receives the help.",
    "topic": "Situational Judgement"
  },
  {
    "id": 148,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nA medical student, Alex, is on the university rugby team. He has been given model answers for various written assessments from older members of the rugby team. His friend, Annabel, realises that the Medical school often repeats their questions, and that it is against the rules to pass down previous papers from year to year. How important are the following factors for Annabel in deciding on what to do?\n\n<strong>Question:</strong>\nIn this particular year, most of the questions won’t be the same as in previous years.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 1,
    "explanation": "because the help from his rugby friends would not count as cheating.",
    "topic": "Situational Judgement"
  },
  {
    "id": 149,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nA medical student, Alex, is on the university rugby team. He has been given model answers for various written assessments from older members of the rugby team. His friend, Annabel, realises that the Medical school often repeats their questions, and that it is against the rules to pass down previous papers from year to year. How important are the following factors for Annabel in deciding on what to do?\n\n<strong>Question:</strong>\nAnnabel isn’t part of a team where information from older members is readily available.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 3,
    "explanation": "Annabel might be jealous that she doesn’t have this support network, but that should not influence her actions.",
    "topic": "Situational Judgement"
  },
  {
    "id": 150,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nA medical student, Alex, is on the university rugby team. He has been given model answers for various written assessments from older members of the rugby team. His friend, Annabel, realises that the Medical school often repeats their questions, and that it is against the rules to pass down previous papers from year to year. How important are the following factors for Annabel in deciding on what to do?\n\n<strong>Question:</strong>\nThe answers are not available to all students.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 0,
    "explanation": "because it severely disadvantages students who don’t have access to the answers.",
    "topic": "Situational Judgement"
  },
  {
    "id": 151,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nMatthew, a medical student, is running late for his teaching session. He missed his bus and the next one doesn’t come for another hour. His class was warned yesterday that if they were late for another session without a good reason, then they would not get a good grade for professionalism at the end of the term. How important are the following factors for Matthew in deciding on what to do?\n\n<strong>Question:</strong>\nHis marks for professionalism are not included in his final grade for the year.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 2,
    "explanation": "whilst it won’t stop him progressing with his degree, professionalism is a very important thing, and the medical school might want to investigate it further.",
    "topic": "Situational Judgement"
  },
  {
    "id": 152,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nMatthew, a medical student, is running late for his teaching session. He missed his bus and the next one doesn’t come for another hour. His class was warned yesterday that if they were late for another session without a good reason, then they would not get a good grade for professionalism at the end of the term. How important are the following factors for Matthew in deciding on what to do?\n\n<strong>Question:</strong>\nPublic transport information updates are readily available online.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 1,
    "explanation": ", because Matthew would have evidence of the public transport being delayed.",
    "topic": "Situational Judgement"
  },
  {
    "id": 153,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nMatthew, a medical student, is running late for his teaching session. He missed his bus and the next one doesn’t come for another hour. His class was warned yesterday that if they were late for another session without a good reason, then they would not get a good grade for professionalism at the end of the term. How important are the following factors for Matthew in deciding on what to do?\n\n<strong>Question:</strong>\nThe rest of his class is usually late.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 3,
    "explanation": ", because the punctuality of the rest of his class does not reflect on Matthew at all.",
    "topic": "Situational Judgement"
  },
  {
    "id": 154,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nMatthew, a medical student, is running late for his teaching session. He missed his bus and the next one doesn’t come for another hour. His class was warned yesterday that if they were late for another session without a good reason, then they would not get a good grade for professionalism at the end of the term. How important are the following factors for Matthew in deciding on what to do?\n\n<strong>Question:</strong>\nMatthew is usually on time for most classes.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 0,
    "explanation": ", because if Matthew can prove that his punctuality is usually satisfactory, then he can be more readily forgiven or excused for being late on the one occasion.",
    "topic": "Situational Judgement"
  },
  {
    "id": 155,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nMatthew, a medical student, is running late for his teaching session. He missed his bus and the next one doesn’t come for another hour. His class was warned yesterday that if they were late for another session without a good reason, then they would not get a good grade for professionalism at the end of the term. How important are the following factors for Matthew in deciding on what to do?\n\n<strong>Question:</strong>\nHis teacher will be involved in his studies for the next year.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 0,
    "explanation": ", because Matthew should maintain a good rapport with his teacher if they are to see each other regularly for the next year.",
    "topic": "Situational Judgement"
  },
  {
    "id": 156,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nMichaela, a medical student, is shadowing doctors on the intensive care unit of a busy hospital. Unfortunately Michaela becomes unwell during the week. She was told on her first day to stay at home if she becomes ill to minimise the risk of spreading infection to the patients. She is reluctant to remain at home because she this is her first and only week on the intensive care unit. How important are the following factors for Michaela in deciding on what to do?\n\n<strong>Question:</strong>\nMichaela cannot spend another week on the intensive care unit.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 0,
    "explanation": ", because the week will be a vital part of her learning experience, and she will miss out if she misses the opportunity.",
    "topic": "Situational Judgement"
  },
  {
    "id": 157,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nMichaela, a medical student, is shadowing doctors on the intensive care unit of a busy hospital. Unfortunately Michaela becomes unwell during the week. She was told on her first day to stay at home if she becomes ill to minimise the risk of spreading infection to the patients. She is reluctant to remain at home because she this is her first and only week on the intensive care unit. How important are the following factors for Michaela in deciding on what to do?\n\n<strong>Question:</strong>\nMichaela’s illness is just a mild cold and is unlikely to cause serious harm.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 2,
    "explanation": "because whilst it may not cause seriously harm healthy people, it could seriously harm ill patients.",
    "topic": "Situational Judgement"
  },
  {
    "id": 158,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nMichaela, a medical student, is shadowing doctors on the intensive care unit of a busy hospital. Unfortunately Michaela becomes unwell during the week. She was told on her first day to stay at home if she becomes ill to minimise the risk of spreading infection to the patients. She is reluctant to remain at home because she this is her first and only week on the intensive care unit. How important are the following factors for Michaela in deciding on what to do?\n\n<strong>Question:</strong>\nThe illness doesn’t affect her ability to interact with patients.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 3,
    "explanation": "because the issue here is of infection control – not if Michaela can function in the hospital.",
    "topic": "Situational Judgement"
  },
  {
    "id": 159,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nMichaela, a medical student, is shadowing doctors on the intensive care unit of a busy hospital. Unfortunately Michaela becomes unwell during the week. She was told on her first day to stay at home if she becomes ill to minimise the risk of spreading infection to the patients. She is reluctant to remain at home because she this is her first and only week on the intensive care unit. How important are the following factors for Michaela in deciding on what to do?\n\n<strong>Question:</strong>\nMichaela was told by the doctors not to come in if she became unwell.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 0,
    "explanation": "because if a patient became ill, Michaela would be unable to say that she had not been instructed appropriately.",
    "topic": "Situational Judgement"
  },
  {
    "id": 160,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nMichaela, a medical student, is shadowing doctors on the intensive care unit of a busy hospital. Unfortunately Michaela becomes unwell during the week. She was told on her first day to stay at home if she becomes ill to minimise the risk of spreading infection to the patients. She is reluctant to remain at home because she this is her first and only week on the intensive care unit. How important are the following factors for Michaela in deciding on what to do?\n\n<strong>Question:</strong>\nMichaela’s friend told her that she would learn a lot during her time on the intensive care unit.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 1,
    "explanation": ", as it would be a useful opportunity but not very important because the information is just her friend’s opinion.",
    "topic": "Situational Judgement"
  },
  {
    "id": 161,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nJenny, a 4th year medical student, has booked and paid to go on the university ski trip. Unfortunately, she finds out that she has the option to sit a set of mock practical exams during the week of the ski trip. Jenny will lose the full amount of money if she pulls out of the ski trip. One of Jenny’s friends has their mock exam the day after Jenny gets back. Jenny wants to try and swap their exam dates. How important are the following factors for Jenny in deciding on what to do?\n\n<strong>Question:</strong>\nHow useful the mock exams will be.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 0,
    "explanation": ", as this may be Jenny’s only attempt to see what the exams are going to be like.",
    "topic": "Situational Judgement"
  },
  {
    "id": 162,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nJenny, a 4th year medical student, has booked and paid to go on the university ski trip. Unfortunately, she finds out that she has the option to sit a set of mock practical exams during the week of the ski trip. Jenny will lose the full amount of money if she pulls out of the ski trip. One of Jenny’s friends has their mock exam the day after Jenny gets back. Jenny wants to try and swap their exam dates. How important are the following factors for Jenny in deciding on what to do?\n\n<strong>Question:</strong>\nThe cost of her ski trip.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 2,
    "explanation": "Jenny’s education is more important than losing out on money for a ski trip. However, it is still important, especially depending on what her financial situation is, but is not as relevant when deciding on how important the exams are.",
    "topic": "Situational Judgement"
  },
  {
    "id": 163,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nJenny, a 4th year medical student, has booked and paid to go on the university ski trip. Unfortunately, she finds out that she has the option to sit a set of mock practical exams during the week of the ski trip. Jenny will lose the full amount of money if she pulls out of the ski trip. One of Jenny’s friends has their mock exam the day after Jenny gets back. Jenny wants to try and swap their exam dates. How important are the following factors for Jenny in deciding on what to do?\n\n<strong>Question:</strong>\nThe mock exams are optional.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 1,
    "explanation": ", as Jenny would not have to worry about missing them or swapping her exam dates.",
    "topic": "Situational Judgement"
  },
  {
    "id": 164,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nJenny, a 4th year medical student, has booked and paid to go on the university ski trip. Unfortunately, she finds out that she has the option to sit a set of mock practical exams during the week of the ski trip. Jenny will lose the full amount of money if she pulls out of the ski trip. One of Jenny’s friends has their mock exam the day after Jenny gets back. Jenny wants to try and swap their exam dates. How important are the following factors for Jenny in deciding on what to do?\n\n<strong>Question:</strong>\nThe university’s policy on swapping dates of exams.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 0,
    "explanation": ", because if the university agrees to swap their exam dates then the issue would be resolved.",
    "topic": "Situational Judgement"
  },
  {
    "id": 165,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nJenny, a 4th year medical student, has booked and paid to go on the university ski trip. Unfortunately, she finds out that she has the option to sit a set of mock practical exams during the week of the ski trip. Jenny will lose the full amount of money if she pulls out of the ski trip. One of Jenny’s friends has their mock exam the day after Jenny gets back. Jenny wants to try and swap their exam dates. How important are the following factors for Jenny in deciding on what to do?\n\n<strong>Question:</strong>\nJenny has performed well on all exams in medical school so far.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 2,
    "explanation": ", although she has done well on exams so far, there is no guarantee that it would be the same for this set of mocks. It is still something to bear in mind whilst making her choice.",
    "topic": "Situational Judgement"
  },
  {
    "id": 166,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nLuke, a medical student, has wanted to do a particular project for months. He has already spoken with the project’s supervisor and planned it with him. He has also put it as his top choice for a project, although he knows that of other people also want to do the same project. Later next week, Luke finds out that he has been allocated to his second choice project instead. His friend, Architha, has been allocated the project that he wanted even though it was her last choice. Based, on this, Luke wants to make an oﬃcial appeal. How important are the following factors for Luke in deciding whether to appeal?\n\n<strong>Question:</strong>\nLuke has spoken to the project supervisor.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 0,
    "explanation": ", because it shows that he was very interested and proactive in the subject. It can also be used as evidence that Luke should be reconsidered for the project.",
    "topic": "Situational Judgement"
  },
  {
    "id": 167,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nLuke, a medical student, has wanted to do a particular project for months. He has already spoken with the project’s supervisor and planned it with him. He has also put it as his top choice for a project, although he knows that of other people also want to do the same project. Later next week, Luke finds out that he has been allocated to his second choice project instead. His friend, Architha, has been allocated the project that he wanted even though it was her last choice. Based, on this, Luke wants to make an oﬃcial appeal. How important are the following factors for Luke in deciding whether to appeal?\n\n<strong>Question:</strong>\nArchitha didn’t want to have the project.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 0,
    "explanation": "because Architha may be willing to help Luke in his appeal as she could also gain from it.",
    "topic": "Situational Judgement"
  },
  {
    "id": 168,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nLuke, a medical student, has wanted to do a particular project for months. He has already spoken with the project’s supervisor and planned it with him. He has also put it as his top choice for a project, although he knows that of other people also want to do the same project. Later next week, Luke finds out that he has been allocated to his second choice project instead. His friend, Architha, has been allocated the project that he wanted even though it was her last choice. Based, on this, Luke wants to make an oﬃcial appeal. How important are the following factors for Luke in deciding whether to appeal?\n\n<strong>Question:</strong>\nThe project grade will count for Luke’s final grade at the end of the year.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 3,
    "explanation": ", because Luke should try to achieve the best grade possible with whichever project he was given.",
    "topic": "Situational Judgement"
  },
  {
    "id": 169,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nLuke, a medical student, has wanted to do a particular project for months. He has already spoken with the project’s supervisor and planned it with him. He has also put it as his top choice for a project, although he knows that of other people also want to do the same project. Later next week, Luke finds out that he has been allocated to his second choice project instead. His friend, Architha, has been allocated the project that he wanted even though it was her last choice. Based, on this, Luke wants to make an oﬃcial appeal. How important are the following factors for Luke in deciding whether to appeal?\n\n<strong>Question:</strong>\nLuke finds it diﬃcult to invest time in a project that he doesn’t care about.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 2,
    "explanation": ", although Luke will find it diﬃcult to concentrate on the project that he was allocated, personal preferences should not hinder his overall performance.",
    "topic": "Situational Judgement"
  },
  {
    "id": 170,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nLuke, a medical student, has wanted to do a particular project for months. He has already spoken with the project’s supervisor and planned it with him. He has also put it as his top choice for a project, although he knows that of other people also want to do the same project. Later next week, Luke finds out that he has been allocated to his second choice project instead. His friend, Architha, has been allocated the project that he wanted even though it was her last choice. Based, on this, Luke wants to make an oﬃcial appeal. How important are the following factors for Luke in deciding whether to appeal?\n\n<strong>Question:</strong>\nLuke was allocated his second choice of project.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 0,
    "explanation": ", because the medical school can show that took his preferences into account.",
    "topic": "Situational Judgement"
  },
  {
    "id": 171,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nLucinda, a medical student, has been performing very well in her exams so far. She has been in a relationship with Andy (who is also in her year) for 6 weeks. Unfortunately, Andy will need to repeat the year as he has been struggling with the workload. Lucinda is desperate to stay in his year. Andy suggests that she fail her exams on purpose so that she can stay in his year. How important are the following factors for Lucinda in deciding on what to do?\n\n<strong>Question:</strong>\nIf Lucinda fails her exams the mark will be on her university transcript when she graduates.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 0,
    "explanation": ", because the mark will reflect on her ability for the rest of her life.",
    "topic": "Situational Judgement"
  },
  {
    "id": 172,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nLucinda, a medical student, has been performing very well in her exams so far. She has been in a relationship with Andy (who is also in her year) for 6 weeks. Unfortunately, Andy will need to repeat the year as he has been struggling with the workload. Lucinda is desperate to stay in his year. Andy suggests that she fail her exams on purpose so that she can stay in his year. How important are the following factors for Lucinda in deciding on what to do?\n\n<strong>Question:</strong>\nJobs as a junior doctor are partially determined based on your grades at medical school.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 0,
    "explanation": ", because this act might prevent Lucinda from getting the job she wants later on in her medical career.",
    "topic": "Situational Judgement"
  },
  {
    "id": 173,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nLucinda, a medical student, has been performing very well in her exams so far. She has been in a relationship with Andy (who is also in her year) for 6 weeks. Unfortunately, Andy will need to repeat the year as he has been struggling with the workload. Lucinda is desperate to stay in his year. Andy suggests that she fail her exams on purpose so that she can stay in his year. How important are the following factors for Lucinda in deciding on what to do?\n\n<strong>Question:</strong>\nLucinda and Andy have only been in a relationship for 6 weeks.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 1,
    "explanation": ", because it is a short period of time and if their relationship ends then Lucinda would have waster a year.",
    "topic": "Situational Judgement"
  },
  {
    "id": 174,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nLucinda, a medical student, has been performing very well in her exams so far. She has been in a relationship with Andy (who is also in her year) for 6 weeks. Unfortunately, Andy will need to repeat the year as he has been struggling with the workload. Lucinda is desperate to stay in his year. Andy suggests that she fail her exams on purpose so that she can stay in his year. How important are the following factors for Lucinda in deciding on what to do?\n\n<strong>Question:</strong>\nLucinda’s friends are performing very well and will progress onto the next year.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 2,
    "explanation": "although she is used to being with people that do well, they shouldn’t affect her decision.",
    "topic": "Situational Judgement"
  },
  {
    "id": 175,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nLucinda, a medical student, has been performing very well in her exams so far. She has been in a relationship with Andy (who is also in her year) for 6 weeks. Unfortunately, Andy will need to repeat the year as he has been struggling with the workload. Lucinda is desperate to stay in his year. Andy suggests that she fail her exams on purpose so that she can stay in his year. How important are the following factors for Lucinda in deciding on what to do?\n\n<strong>Question:</strong>\nAndy has asked her to fail her exams on purpose.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 2,
    "explanation": ", although they are in a relationship, she needs to make the decision herself rather than be pressured into it.",
    "topic": "Situational Judgement"
  },
  {
    "id": 176,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nShiv, a medical student, is nearly at the end of his rotation. He really wants to go to Australia for the Christmas holidays to see his girlfriend who is on her elective there. The flights are much cheaper if he skips the final day of his rotation. Most of his medical friends have already finished for the holidays because the doctors that were in charge of them finished their final assessments early. However, Shiv has a very strict doctor who insists that their final assessments will be on the final day of term, and no sooner. The doctor is due to retire after Christmas. How important are the following factors for Shiv in deciding on what to do?\n\n<strong>Question:</strong>\nShiv must pay for his own flights with the money he has saved up.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 0,
    "explanation": ", because Shiv will save a lot of money if he skips the last day.",
    "topic": "Situational Judgement"
  },
  {
    "id": 177,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nShiv, a medical student, is nearly at the end of his rotation. He really wants to go to Australia for the Christmas holidays to see his girlfriend who is on her elective there. The flights are much cheaper if he skips the final day of his rotation. Most of his medical friends have already finished for the holidays because the doctors that were in charge of them finished their final assessments early. However, Shiv has a very strict doctor who insists that their final assessments will be on the final day of term, and no sooner. The doctor is due to retire after Christmas. How important are the following factors for Shiv in deciding on what to do?\n\n<strong>Question:</strong>\nShiv’s final assessment involves the doctor asking him how the term has gone for him, and then signing his log book.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 3,
    "explanation": ", because the content of the assessment is not the issue but rather its timing.",
    "topic": "Situational Judgement"
  },
  {
    "id": 178,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nShiv, a medical student, is nearly at the end of his rotation. He really wants to go to Australia for the Christmas holidays to see his girlfriend who is on her elective there. The flights are much cheaper if he skips the final day of his rotation. Most of his medical friends have already finished for the holidays because the doctors that were in charge of them finished their final assessments early. However, Shiv has a very strict doctor who insists that their final assessments will be on the final day of term, and no sooner. The doctor is due to retire after Christmas. How important are the following factors for Shiv in deciding on what to do?\n\n<strong>Question:</strong>\nShiv has been punctual and has produced impressive work throughout the rotation.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 1,
    "explanation": ", because this shows that Shiv is a good student. It also means that the doctor may have already formed an opinion for Shiv, and might be more likely to be lenient if he misses the final assessment.",
    "topic": "Situational Judgement"
  },
  {
    "id": 179,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nShiv, a medical student, is nearly at the end of his rotation. He really wants to go to Australia for the Christmas holidays to see his girlfriend who is on her elective there. The flights are much cheaper if he skips the final day of his rotation. Most of his medical friends have already finished for the holidays because the doctors that were in charge of them finished their final assessments early. However, Shiv has a very strict doctor who insists that their final assessments will be on the final day of term, and no sooner. The doctor is due to retire after Christmas. How important are the following factors for Shiv in deciding on what to do?\n\n<strong>Question:</strong>\nShiv’s doctor will be retiring after Christmas.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 3,
    "explanation": ", because it will have no impact on Shiv’s grade.",
    "topic": "Situational Judgement"
  },
  {
    "id": 180,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nShiv, a medical student, is nearly at the end of his rotation. He really wants to go to Australia for the Christmas holidays to see his girlfriend who is on her elective there. The flights are much cheaper if he skips the final day of his rotation. Most of his medical friends have already finished for the holidays because the doctors that were in charge of them finished their final assessments early. However, Shiv has a very strict doctor who insists that their final assessments will be on the final day of term, and no sooner. The doctor is due to retire after Christmas. How important are the following factors for Shiv in deciding on what to do?\n\n<strong>Question:</strong>\nShiv’s girlfriend is in Australia.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 2,
    "explanation": "although Shiv would like to meet with his girlfriend, he will be able to see her eventually so this isn’t important in deciding when to leave.",
    "topic": "Situational Judgement"
  },
  {
    "id": 181,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nJazzmynne, a medical student, is a talented vocalist and is offered the chance to go on a prestigious singing tour for a month with her choir. Unfortunately, this would mean missing a month of classes. How important are the following factors for Jazzmynne in deciding on what to do?\n\n<strong>Question:</strong>\nHer choir has never been on an international tour before and this might be Jazzmynne’s only chance to go.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 0,
    "explanation": "because if Jazzmynne won’t get another chance to go on tour then it may be worth considering if she can miss classes.",
    "topic": "Situational Judgement"
  },
  {
    "id": 182,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nJazzmynne, a medical student, is a talented vocalist and is offered the chance to go on a prestigious singing tour for a month with her choir. Unfortunately, this would mean missing a month of classes. How important are the following factors for Jazzmynne in deciding on what to do?\n\n<strong>Question:</strong>\nJazzmynne would end up missing half of one of her clinical rotations.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 0,
    "explanation": ", because her learning is also important, and if she misses this rotation then she may not necessarily get the chance to catch up again.",
    "topic": "Situational Judgement"
  },
  {
    "id": 183,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nJazzmynne, a medical student, is a talented vocalist and is offered the chance to go on a prestigious singing tour for a month with her choir. Unfortunately, this would mean missing a month of classes. How important are the following factors for Jazzmynne in deciding on what to do?\n\n<strong>Question:</strong>\nJazzmynne’s parents get anxious when she misses class.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 2,
    "explanation": ", because Jazzmynne is an adult and if she feels as though she can handle the workload then she should be able to make her decisions herself. However, she should still keep her parent’s concerns in mind.",
    "topic": "Situational Judgement"
  },
  {
    "id": 184,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nJazzmynne, a medical student, is a talented vocalist and is offered the chance to go on a prestigious singing tour for a month with her choir. Unfortunately, this would mean missing a month of classes. How important are the following factors for Jazzmynne in deciding on what to do?\n\n<strong>Question:</strong>\nJazzmynne sometimes struggles to keep up with her workload.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 0,
    "explanation": ", because if Jazzmynne sometimes struggles to keep up with her workload without having any help, then with the extra stress of missing lots of work, she might struggle a lot.",
    "topic": "Situational Judgement"
  },
  {
    "id": 185,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nJazzmynne, a medical student, is a talented vocalist and is offered the chance to go on a prestigious singing tour for a month with her choir. Unfortunately, this would mean missing a month of classes. How important are the following factors for Jazzmynne in deciding on what to do?\n\n<strong>Question:</strong>\nJazzmynne’s friends are also going on the tour with her.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 3,
    "explanation": "as Jazzmynne should not make the decision based on how much she would gain from the tour not because of what her friends decide.",
    "topic": "Situational Judgement"
  },
  {
    "id": 186,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nEllen, a medical student, has been writing for the university newspaper since her first year. She likes to focus on stories that are topical for the students. Recently, the new principal of the medical school has created a ban on stories that involve student bars and social lives. Ellen wants to start a petition to change this rule. How important are the following factors for Ellen in deciding on what to do?\n\n<strong>Question:</strong>\nEllen is in her final year of medical school.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 2,
    "explanation": ". The changes may not come into action for Ellen to see but if she still feels strongly about the paper then it shouldn’t change her actions.",
    "topic": "Situational Judgement"
  },
  {
    "id": 187,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nEllen, a medical student, has been writing for the university newspaper since her first year. She likes to focus on stories that are topical for the students. Recently, the new principal of the medical school has created a ban on stories that involve student bars and social lives. Ellen wants to start a petition to change this rule. How important are the following factors for Ellen in deciding on what to do?\n\n<strong>Question:</strong>\nThe university has a good reputation for responding positively to student petitions.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 0,
    "explanation": ", as this shows that the university will take the opinions of the students into account.",
    "topic": "Situational Judgement"
  },
  {
    "id": 188,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nEllen, a medical student, has been writing for the university newspaper since her first year. She likes to focus on stories that are topical for the students. Recently, the new principal of the medical school has created a ban on stories that involve student bars and social lives. Ellen wants to start a petition to change this rule. How important are the following factors for Ellen in deciding on what to do?\n\n<strong>Question:</strong>\n90% of the university newspaper readers are medical students.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 0,
    "explanation": ", because if the general stories are changed completely, then the majority of student readers may stop reading the papers. This could impact the newspaper’s finances adversely.",
    "topic": "Situational Judgement"
  },
  {
    "id": 189,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nEllen, a medical student, has been writing for the university newspaper since her first year. She likes to focus on stories that are topical for the students. Recently, the new principal of the medical school has created a ban on stories that involve student bars and social lives. Ellen wants to start a petition to change this rule. How important are the following factors for Ellen in deciding on what to do?\n\n<strong>Question:</strong>\nThe principal wants to encourage more stories about the health press, the world, and academics, rather than gossip at the bars.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 2,
    "explanation": ", because the principal’s stories can still be incorporated into the newspapers without abolishing the papers on the students’ social lives.",
    "topic": "Situational Judgement"
  },
  {
    "id": 190,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nEllen, a medical student, has been writing for the university newspaper since her first year. She likes to focus on stories that are topical for the students. Recently, the new principal of the medical school has created a ban on stories that involve student bars and social lives. Ellen wants to start a petition to change this rule. How important are the following factors for Ellen in deciding on what to do?\n\n<strong>Question:</strong>\nEllen doesn’t like the new principal very much.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 3,
    "explanation": "as this isn’t a personal issue and should be handled professionally instead.",
    "topic": "Situational Judgement"
  },
  {
    "id": 191,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nGuy, a medical student, works at the student bar during the week. The recent change in the university’s health and safety policy imposes a maximum number of students that can enter the bar at any time. This means that on popular nights, there is usually an hour-long queue to get into the bar. Guy thinks that this is unfair, and drafts a letter to the university, asking them to expand the student bar. How important are the following factors for Guy in deciding on what to do?\n\n<strong>Question:</strong>\nStudents are being denied access to their own bars.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 0,
    "explanation": ", because the student bars should be safe, controlled spaces for the students to enjoy themselves.",
    "topic": "Situational Judgement"
  },
  {
    "id": 192,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nGuy, a medical student, works at the student bar during the week. The recent change in the university’s health and safety policy imposes a maximum number of students that can enter the bar at any time. This means that on popular nights, there is usually an hour-long queue to get into the bar. Guy thinks that this is unfair, and drafts a letter to the university, asking them to expand the student bar. How important are the following factors for Guy in deciding on what to do?\n\n<strong>Question:</strong>\nGuy will get more work and therefore money if the bar expands.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 2,
    "explanation": "whilst extra money would be useful, the decision to appeal should be based on the needs of the student body rather than serving a selfish agenda.",
    "topic": "Situational Judgement"
  },
  {
    "id": 193,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nGuy, a medical student, works at the student bar during the week. The recent change in the university’s health and safety policy imposes a maximum number of students that can enter the bar at any time. This means that on popular nights, there is usually an hour-long queue to get into the bar. Guy thinks that this is unfair, and drafts a letter to the university, asking them to expand the student bar. How important are the following factors for Guy in deciding on what to do?\n\n<strong>Question:</strong>\nThe university has dropped in student satisfaction league tables.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 0,
    "explanation": ", because this is another factor that could bring their satisfaction ratings down further.",
    "topic": "Situational Judgement"
  },
  {
    "id": 194,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nGuy, a medical student, works at the student bar during the week. The recent change in the university’s health and safety policy imposes a maximum number of students that can enter the bar at any time. This means that on popular nights, there is usually an hour-long queue to get into the bar. Guy thinks that this is unfair, and drafts a letter to the university, asking them to expand the student bar. How important are the following factors for Guy in deciding on what to do?\n\n<strong>Question:</strong>\nThe bar is very expensive.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 3,
    "explanation": "the issue is not about the cost but about the waiting times.",
    "topic": "Situational Judgement"
  },
  {
    "id": 195,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nGuy, a medical student, works at the student bar during the week. The recent change in the university’s health and safety policy imposes a maximum number of students that can enter the bar at any time. This means that on popular nights, there is usually an hour-long queue to get into the bar. Guy thinks that this is unfair, and drafts a letter to the university, asking them to expand the student bar. How important are the following factors for Guy in deciding on what to do?\n\n<strong>Question:</strong>\nThe university is having financial troubles.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 1,
    "explanation": ", because expanding the bar could bring in more money for the university.",
    "topic": "Situational Judgement"
  },
  {
    "id": 196,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nOlivia, a medical student, wants to run for president of the student union. She has been involved for many years, and is very dedicated to the union. Her friend, Phil, also wants to run for president. Phil is very popular, although he has not contributed as much to the union as Olivia. How important are the following factors for Olivia in deciding on what to do?\n\n<strong>Question:</strong>\nOlivia and Phil were previously in a relationship.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 3,
    "explanation": ", because this should be handled amiably rather than making it personal.",
    "topic": "Situational Judgement"
  },
  {
    "id": 197,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nOlivia, a medical student, wants to run for president of the student union. She has been involved for many years, and is very dedicated to the union. Her friend, Phil, also wants to run for president. Phil is very popular, although he has not contributed as much to the union as Olivia. How important are the following factors for Olivia in deciding on what to do?\n\n<strong>Question:</strong>\nPhil is in his final year but Olivia is in her penultimate year.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 0,
    "explanation": ", because Phil does not have a chance of running again, but Olivia does.",
    "topic": "Situational Judgement"
  },
  {
    "id": 198,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nOlivia, a medical student, wants to run for president of the student union. She has been involved for many years, and is very dedicated to the union. Her friend, Phil, also wants to run for president. Phil is very popular, although he has not contributed as much to the union as Olivia. How important are the following factors for Olivia in deciding on what to do?\n\n<strong>Question:</strong>\nOlivia has worked for the student union for a lot longer than Phil has.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 1,
    "explanation": ", because it shows that Olivia is dedicated to the student union. It is not very important as there will be other factors that will differentiate Olivia and Phil.",
    "topic": "Situational Judgement"
  },
  {
    "id": 199,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nOlivia, a medical student, wants to run for president of the student union. She has been involved for many years, and is very dedicated to the union. Her friend, Phil, also wants to run for president. Phil is very popular, although he has not contributed as much to the union as Olivia. How important are the following factors for Olivia in deciding on what to do?\n\n<strong>Question:</strong>\nNeither Phil nor Olivia are happy to run for any other position on the committee.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 0,
    "explanation": ", because this excludes any chance of compromise with position allocation.",
    "topic": "Situational Judgement"
  },
  {
    "id": 200,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nOlivia, a medical student, wants to run for president of the student union. She has been involved for many years, and is very dedicated to the union. Her friend, Phil, also wants to run for president. Phil is very popular, although he has not contributed as much to the union as Olivia. How important are the following factors for Olivia in deciding on what to do?\n\n<strong>Question:</strong>\nOlivia gave up the presidency of the student union last year because her friend who was in his final year wanted it.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 0,
    "explanation": ", because it shows that Olivia has already compromised with the position previously, and will be unlikely to want to compromise again",
    "topic": "Situational Judgement"
  },
  {
    "id": 201,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nAnnie, a final year medical student, is in the library. She notices George, another final year student, rushing out of the library and accidentally leaving some of his papers by the photocopying machine. She later finds out that they are copies of the upcoming final year exam. How appropriate are each of the following responses by Annie in this situation?\n\n<strong>Question:</strong>\nTell George she found the exam and won’t inform anyone else as long as she can have a copy of the exam herself.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 3,
    "explanation": "This shows a lack of honesty and integrity and it is unfair to other students.",
    "topic": "Situational Judgement"
  },
  {
    "id": 202,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nAnnie, a final year medical student, is in the library. She notices George, another final year student, rushing out of the library and accidentally leaving some of his papers by the photocopying machine. She later finds out that they are copies of the upcoming final year exam. How appropriate are each of the following responses by Annie in this situation?\n\n<strong>Question:</strong>\nCopy the exam and distribute it to all the final year medical students so it is fair for everyone.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 3,
    "explanation": "Although this appears to be a fair process as all the students are receiving the exam, it undermines the exam process and displays a lack of integrity in practice.",
    "topic": "Situational Judgement"
  },
  {
    "id": 203,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nAnnie, a final year medical student, is in the library. She notices George, another final year student, rushing out of the library and accidentally leaving some of his papers by the photocopying machine. She later finds out that they are copies of the upcoming final year exam. How appropriate are each of the following responses by Annie in this situation?\n\n<strong>Question:</strong>\nIgnore the situation and do nothing.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 3,
    "explanation": "As a medical student you should take initiative and escalate situations appropriately. When you see that there is something that can affect the rest of the students and the medical school, you should involve those at a senior level",
    "topic": "Situational Judgement"
  },
  {
    "id": 204,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nAnnie, a final year medical student, is in the library. She notices George, another final year student, rushing out of the library and accidentally leaving some of his papers by the photocopying machine. She later finds out that they are copies of the upcoming final year exam. How appropriate are each of the following responses by Annie in this situation?\n\n<strong>Question:</strong>\nAlert her supervisor as to what she saw, and get advice on what to do.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 0,
    "explanation": "The supervisor would be able to advise the student on what to do and would be able to help them in escalating the issue if required.",
    "topic": "Situational Judgement"
  },
  {
    "id": 205,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nAnnie, a final year medical student, is in the library. She notices George, another final year student, rushing out of the library and accidentally leaving some of his papers by the photocopying machine. She later finds out that they are copies of the upcoming final year exam. How appropriate are each of the following responses by Annie in this situation?\n\n<strong>Question:</strong>\nAlert the medical school as to what she saw.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 0,
    "explanation": "The medical school will have a protocol for reporting situations such as these, and can deal with the situation accordingly.",
    "topic": "Situational Judgement"
  },
  {
    "id": 206,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nKate is a medical student on a ward round. A patient calls her and complains that a small amount of money has disappeared from her bedside table. How appropriate are each of the following responses by Kate in this situation?\n\n<strong>Question:</strong>\nCall the police on the patients behalf, stealing is a criminal offense.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 3,
    "explanation": "Kate does not know the circumstances surrounding the missing money. It would be inappropriate to involve the police without the patient’s permission and without exploring other avenues such as asking the senior nurses or look for the money herself.",
    "topic": "Situational Judgement"
  },
  {
    "id": 207,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nKate is a medical student on a ward round. A patient calls her and complains that a small amount of money has disappeared from her bedside table. How appropriate are each of the following responses by Kate in this situation?\n\n<strong>Question:</strong>\nTell the patient that she should have been more careful and you will see what you can do.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 1,
    "explanation": "Kate needs to be careful not to sound patronising, as the patient will know that the wards are very exposed. However, it is good she offers them reassurance.",
    "topic": "Situational Judgement"
  },
  {
    "id": 208,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nKate is a medical student on a ward round. A patient calls her and complains that a small amount of money has disappeared from her bedside table. How appropriate are each of the following responses by Kate in this situation?\n\n<strong>Question:</strong>\nTell the patient that she should not be making false accusations.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 3,
    "explanation": "This is very patronising to the patient. Kate is accusing them of lying without understanding the full story. Also she has not provided any re-assurance that she will follow this up with more senior members of the department.",
    "topic": "Situational Judgement"
  },
  {
    "id": 209,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nKate is a medical student on a ward round. A patient calls her and complains that a small amount of money has disappeared from her bedside table. How appropriate are each of the following responses by Kate in this situation?\n\n<strong>Question:</strong>\nAsk the patient for further details about the theft, reassure her you will see what you can do and alert the nurse in charge of the ward.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 0,
    "explanation": "Kate has taken some further details, she has re-assured the patient and has escalated the issue to the right person. Also the nurse in charge will be aware of the hospital processes and would be able to provide the patient with more information and assurance.",
    "topic": "Situational Judgement"
  },
  {
    "id": 210,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nKate is a medical student on a ward round. A patient calls her and complains that a small amount of money has disappeared from her bedside table. How appropriate are each of the following responses by Kate in this situation?\n\n<strong>Question:</strong>\nSend an e-mail out to all other medical students to alert them of the theft.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 1,
    "explanation": "Alerting other students of the theft is appropriate so they can keep their possessions safe and be on the lookout for the money, however it does not deal with the patient’s alleged theft.",
    "topic": "Situational Judgement"
  },
  {
    "id": 211,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nDuring a discussion with a fellow medical student, Andrew, in the student common room, Sam notices that a bag of marijuana falls out of Andrew’s bag. How appropriate are each of the following responses by Sam?\n\n<strong>Question:</strong>\nAccuse Andrew of drug possession and tell him he will be informing his supervisor.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 2,
    "explanation": "Sam should not accuse Andrew of possession before he clarifies the situation. However, escalating the problem to his supervisor is appropriate.",
    "topic": "Situational Judgement"
  },
  {
    "id": 212,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nDuring a discussion with a fellow medical student, Andrew, in the student common room, Sam notices that a bag of marijuana falls out of Andrew’s bag. How appropriate are each of the following responses by Sam?\n\n<strong>Question:</strong>\nSeek information from Andrew about why he has the marijuana in his bag, and tell him he will ignore the situation if he gets rid of it.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 3,
    "explanation": "Ignoring the situation, especially when Andrew may need help and support is inappropriate. There are also future implications to consider. Agreeing with Andrew to get rid of the drugs may lead Andrew to feel that taking drugs is ok.",
    "topic": "Situational Judgement"
  },
  {
    "id": 213,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nDuring a discussion with a fellow medical student, Andrew, in the student common room, Sam notices that a bag of marijuana falls out of Andrew’s bag. How appropriate are each of the following responses by Sam?\n\n<strong>Question:</strong>\nDiscuss the incident with his own supervisor.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 0,
    "explanation": "The supervisor would be able to provide advice to Sam on what he should do next.",
    "topic": "Situational Judgement"
  },
  {
    "id": 214,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nDuring a discussion with a fellow medical student, Andrew, in the student common room, Sam notices that a bag of marijuana falls out of Andrew’s bag. How appropriate are each of the following responses by Sam?\n\n<strong>Question:</strong>\nOffer support to Andrew and recommend he seek professional help.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 0,
    "explanation": "Offering support to Andrew would provide reassurance and a possibility to confide in a friend. Recommending professional help means that Sam recognises his own limitations and has signposted Andrew down the correct pathway.",
    "topic": "Situational Judgement"
  },
  {
    "id": 215,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nDuring a discussion with a fellow medical student, Andrew, in the student common room, Sam notices that a bag of marijuana falls out of Andrew’s bag. How appropriate are each of the following responses by Sam?\n\n<strong>Question:</strong>\nPretend he did not see anything and do nothing.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 3,
    "explanation": "Doing nothing is totally inappropriate. Seeing patients under the influence of drugs may put patient safety at risk and totally undermines a doctor’s position of trust.",
    "topic": "Situational Judgement"
  },
  {
    "id": 216,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nAnna is a final year medical student attached to a medical team.. One morning, a junior doctor from the team arrives very drunk. The junior doctor is about to start his ward duties. How appropriate are each of the following responses by Anna?\n\n<strong>Question:</strong>\nAlert a more senior member of the team to the situation at hand.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 0,
    "explanation": "Anna has recognised her limitations, informing someone who is senior who has more experience will ensure that the situation is dealt with more promptly and effectively. Patient safety is also maintained, and will ensure that the junior doctor receives professional help if he needs it.",
    "topic": "Situational Judgement"
  },
  {
    "id": 217,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nAnna is a final year medical student attached to a medical team.. One morning, a junior doctor from the team arrives very drunk. The junior doctor is about to start his ward duties. How appropriate are each of the following responses by Anna?\n\n<strong>Question:</strong>\nDo nothing as she is only a medical student.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 3,
    "explanation": "Anna should not ignore the situation, the doctor is obviously drunk and he may put patients in danger. As a medical student if she sees there is something wrong in medical practice she needs to act on it.",
    "topic": "Situational Judgement"
  },
  {
    "id": 218,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nAnna is a final year medical student attached to a medical team.. One morning, a junior doctor from the team arrives very drunk. The junior doctor is about to start his ward duties. How appropriate are each of the following responses by Anna?\n\n<strong>Question:</strong>\nAllow the junior doctor to carry out his ward duties and accompany him to make sure he is not making any mistakes.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 3,
    "explanation": "Anna needs to recognise the limitations of her expertise and allowing the doctor to carry out his duties under the influence of alcohol can place patient safety at risk.",
    "topic": "Situational Judgement"
  },
  {
    "id": 219,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nAnna is a final year medical student attached to a medical team.. One morning, a junior doctor from the team arrives very drunk. The junior doctor is about to start his ward duties. How appropriate are each of the following responses by Anna?\n\n<strong>Question:</strong>\nReflect on the situation later that evening.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 2,
    "explanation": "It is good to reflect on diﬃcult situations in practice, however this has not provided a solution to the current situation.",
    "topic": "Situational Judgement"
  },
  {
    "id": 220,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nAnna is a final year medical student attached to a medical team.. One morning, a junior doctor from the team arrives very drunk. The junior doctor is about to start his ward duties. How appropriate are each of the following responses by Anna?\n\n<strong>Question:</strong>\nAdvise the junior doctor to inform the team and go home.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 0,
    "explanation": "Anna has recognised that the doctor is drunk and won’t be able to carry out his duties. Advising him to inform the team so they are aware of the situation is very appropriate. More senior members of the team will be able to follow this up and ensure that the ward is appropriately staffed. .",
    "topic": "Situational Judgement"
  },
  {
    "id": 221,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nSean is a medical student working on a group project with three other students. One of the students, Sarah, is consistently arriving late and is not contributing her fair share of work to the group project. How appropriate are each of the following responses by Sean?\n\n<strong>Question:</strong>\nTell the group’s supervisor about Sarah’s tardiness and contribution.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 0,
    "explanation": "Escalating the problem to the supervisor will enable the supervisor to provide solutions to the problem, support the group and encourage Sarah.",
    "topic": "Situational Judgement"
  },
  {
    "id": 222,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nSean is a medical student working on a group project with three other students. One of the students, Sarah, is consistently arriving late and is not contributing her fair share of work to the group project. How appropriate are each of the following responses by Sean?\n\n<strong>Question:</strong>\nDiscuss the problem with other members of the group.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 1,
    "explanation": "Seeing how other group members feel about the current situation is appropriate, however it may lead to spreading gossip about Sarah.",
    "topic": "Situational Judgement"
  },
  {
    "id": 223,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nSean is a medical student working on a group project with three other students. One of the students, Sarah, is consistently arriving late and is not contributing her fair share of work to the group project. How appropriate are each of the following responses by Sean?\n\n<strong>Question:</strong>\nApproach Sarah and tell her that her attitude and poor contribution are causing problems and she needs to pull her weight. .",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 2,
    "explanation": "Informing Sarah that he has noticed her lateness and lack of contribution is an appropriate course of action. However the approach used is very patronising, furthermore there may be an underlying reason for her lateness that Sean should have asked about.",
    "topic": "Situational Judgement"
  },
  {
    "id": 224,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nSean is a medical student working on a group project with three other students. One of the students, Sarah, is consistently arriving late and is not contributing her fair share of work to the group project. How appropriate are each of the following responses by Sean?\n\n<strong>Question:</strong>\nAsk Sarah if there is a reason for her lateness and lack of contribution and if there is anything Sean can do to help.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 0,
    "explanation": "Clarifying the situation with Sarah and making her aware that her lateness and contribution have not gone unnoticed allows her to\n\n\nincrease her contribution and change her behaviour. Providing support may mean that he is able to remedy the current situation.",
    "topic": "Situational Judgement"
  },
  {
    "id": 225,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nSean is a medical student working on a group project with three other students. One of the students, Sarah, is consistently arriving late and is not contributing her fair share of work to the group project. How appropriate are each of the following responses by Sean?\n\n<strong>Question:</strong>\nIgnore the situation. The rest of the group is working well and you can work harder to complete the group project.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 3,
    "explanation": "This is unfair to the other group members, in addition Sarah may be going through personal problems that she needs support for.",
    "topic": "Situational Judgement"
  },
  {
    "id": 226,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nMary is a medical student who is attending a placement on the wards. One day she sees a nurse pick antibiotics out of a drug trolley and place them in her handbag for personal use. How appropriate are each of the following responses by Mary?\n\n<strong>Question:</strong>\nApproach the nurse and inform her that this is not best practice.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 1,
    "explanation": "The nurse may not be aware of whom Mary is and Mary may come across as patronising, so the nurse may not be inclined to listen to her.",
    "topic": "Situational Judgement"
  },
  {
    "id": 227,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nMary is a medical student who is attending a placement on the wards. One day she sees a nurse pick antibiotics out of a drug trolley and place them in her handbag for personal use. How appropriate are each of the following responses by Mary?\n\n<strong>Question:</strong>\nInform the nurse in charge.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 0,
    "explanation": "Reporting the situation to a senior member is appropriate. The best person to report it to is the nurses immediate senior.",
    "topic": "Situational Judgement"
  },
  {
    "id": 228,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nMary is a medical student who is attending a placement on the wards. One day she sees a nurse pick antibiotics out of a drug trolley and place them in her handbag for personal use. How appropriate are each of the following responses by Mary?\n\n<strong>Question:</strong>\nReport the matter to the Consultant supervising her.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 0,
    "explanation": "Reporting the situation to the consultant is appropriate as they would be able to provide Mary with advice on what to do, or take it to the nurse’s immediate senior themselves.",
    "topic": "Situational Judgement"
  },
  {
    "id": 229,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nMary is a medical student who is attending a placement on the wards. One day she sees a nurse pick antibiotics out of a drug trolley and place them in her handbag for personal use. How appropriate are each of the following responses by Mary?\n\n<strong>Question:</strong>\nPretend she did not see anything as the nurse probably needs the antibiotics.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 3,
    "explanation": "The nurse has acted unprofessionally, taking medications from the ward may put patients at risk, therefore the nurse needs to be made aware of the effects of her actions, and her need to uphold professional values.",
    "topic": "Situational Judgement"
  },
  {
    "id": 230,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nMary is a medical student who is attending a placement on the wards. One day she sees a nurse pick antibiotics out of a drug trolley and place them in her handbag for personal use. How appropriate are each of the following responses by Mary?\n\n<strong>Question:</strong>\nWrite a reflective piece on the nurse’s practice.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 1,
    "explanation": "Reflecting on situations at medical placements is integral, as it will allow Mary to become a better future doctor. However, she has not dealt with the current situation of the nurse taking the medication.",
    "topic": "Situational Judgement"
  },
  {
    "id": 231,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nAlan is a medical student who is having a bedside teaching session.During the session the Consultant asks Alan a range of questions, some of which he struggles to answer. At the end of the session Alan feels that the Consultant was rude and has embarrassed him in front of the patient. How appropriate are each of the following responses by Alan in this situation?\n\n<strong>Question:</strong>\nComplain about the incident to a senior nurse.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 3,
    "explanation": "This is a matter between the consultant and Alan. Involving the nurse is inappropriate as she may inform the consultant, but this would involve an unnecessary party and may erode trust between the consultant and Alan.",
    "topic": "Situational Judgement"
  },
  {
    "id": 232,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nAlan is a medical student who is having a bedside teaching session.During the session the Consultant asks Alan a range of questions, some of which he struggles to answer. At the end of the session Alan feels that the Consultant was rude and has embarrassed him in front of the patient. How appropriate are each of the following responses by Alan in this situation?\n\n<strong>Question:</strong>\nArrange a meeting with the Consultant to discuss the incident.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 0,
    "explanation": "Alan’s issue is with the consultant, so directly discussing it with him may allow Alan to gain a good relationship with the consultant and allow them to come to a joint decision regarding the remaining sessions.",
    "topic": "Situational Judgement"
  },
  {
    "id": 233,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nAlan is a medical student who is having a bedside teaching session.During the session the Consultant asks Alan a range of questions, some of which he struggles to answer. At the end of the session Alan feels that the Consultant was rude and has embarrassed him in front of the patient. How appropriate are each of the following responses by Alan in this situation?\n\n<strong>Question:</strong>\nArgue with the Consultant at the bedside so he knows he is being rude.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 3,
    "explanation": "This will only inflame the situation. The consultant may not realise that he is being harsh on Alan and therefore openly arguing in front\n\n\nof the patient is unprofessional and only sour their relationship.",
    "topic": "Situational Judgement"
  },
  {
    "id": 234,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nAlan is a medical student who is having a bedside teaching session.During the session the Consultant asks Alan a range of questions, some of which he struggles to answer. At the end of the session Alan feels that the Consultant was rude and has embarrassed him in front of the patient. How appropriate are each of the following responses by Alan in this situation?\n\n<strong>Question:</strong>\nArrange a meeting with his medical school supervisor to discuss the incident.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 0,
    "explanation": "Alan is involving the relevant authority. It is his supervisor who is responsible for his educational needs, and his supervisor is in a position to provide advice at an appropriate level.",
    "topic": "Situational Judgement"
  },
  {
    "id": 235,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nAlan is a medical student who is having a bedside teaching session.During the session the Consultant asks Alan a range of questions, some of which he struggles to answer. At the end of the session Alan feels that the Consultant was rude and has embarrassed him in front of the patient. How appropriate are each of the following responses by Alan in this situation?\n\n<strong>Question:</strong>\nOnce the session is over apologise to the patient about the consultant’s behaviour.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 3,
    "explanation": "In this case, Alan is involving a patient in a conflict which is really none of their concern Alan is also undermining the Consultant’s credibility behind their back.",
    "topic": "Situational Judgement"
  },
  {
    "id": 236,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nHarry is a medical student doing a placement on a medical ward. One of the nurses comes up to Harry and complains to him about one of his colleagues, Joe’s, body odour and is asking if he could have a quiet word with him. How appropriate are each of the following responses by Harry in this situation?\n\n<strong>Question:</strong>\nTell the nurse that this is really an issue for the ward Consultant to deal with and she should go and talk to him,",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 2,
    "explanation": "The nurse has specifically asked Harry if he could have a word with his fellow student, because she may have felt that it is a situation that could be solved at the student level without involving doctors. Harry may feel that this is not his responsibility.",
    "topic": "Situational Judgement"
  },
  {
    "id": 237,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nHarry is a medical student doing a placement on a medical ward. One of the nurses comes up to Harry and complains to him about one of his colleagues, Joe’s, body odour and is asking if he could have a quiet word with him. How appropriate are each of the following responses by Harry in this situation?\n\n<strong>Question:</strong>\nRaise the issue in confidence with Joe.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 0,
    "explanation": "Addressing the issue with the colleague in question avoids public humiliation and a solution to the problem may be reached without involving someone else such as the consultant.",
    "topic": "Situational Judgement"
  },
  {
    "id": 238,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nHarry is a medical student doing a placement on a medical ward. One of the nurses comes up to Harry and complains to him about one of his colleagues, Joe’s, body odour and is asking if he could have a quiet word with him. How appropriate are each of the following responses by Harry in this situation?\n\n<strong>Question:</strong>\nTell the nurse he will speak to Joe about it, but then ignore the issue. Harry does not want to hurt Joe’s feelings.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 3,
    "explanation": "Harry is being dishonest to the nurse especially when he has promised to speak to Joe.",
    "topic": "Situational Judgement"
  },
  {
    "id": 239,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nHarry is a medical student doing a placement on a medical ward. One of the nurses comes up to Harry and complains to him about one of his colleagues, Joe’s, body odour and is asking if he could have a quiet word with him. How appropriate are each of the following responses by Harry in this situation?\n\n<strong>Question:</strong>\nSend an anonymous note to Joe.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 2,
    "explanation": "Harry is not publically humiliating Joe and he has not ignored the issue, but sending him an anonymous note is very cowardly and may upset Joe.",
    "topic": "Situational Judgement"
  },
  {
    "id": 240,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nHarry is a medical student doing a placement on a medical ward. One of the nurses comes up to Harry and complains to him about one of his colleagues, Joe’s, body odour and is asking if he could have a quiet word with him. How appropriate are each of the following responses by Harry in this situation?\n\n<strong>Question:</strong>\nRaise the issue at a student group meeting with Joe present.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 3,
    "explanation": "This action will achieve nothing other than publicly humiliating Joe in front of other students.",
    "topic": "Situational Judgement"
  },
  {
    "id": 241,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nHelen is a final year medical student. She has written a case report for publication and her Consultant has recently reviewed the final draft. When he gives her the case report back with comments, he has added two names to the list of authors. Helen enquires and the Consultant explains that it is his wife and his Registrar who are currently applying for jobs and need publications on their CVs. How appropriate are each of the following responses by Helen in this situation?\n\n<strong>Question:</strong>\nTell the consultant that she can’t publish the case report with the two names added and will only publish it under her name.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 1,
    "explanation": "It is appropriate to be honest to the consultant and to refuse to add the names unless they have contributed to the report.",
    "topic": "Situational Judgement"
  },
  {
    "id": 242,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nHelen is a final year medical student. She has written a case report for publication and her Consultant has recently reviewed the final draft. When he gives her the case report back with comments, he has added two names to the list of authors. Helen enquires and the Consultant explains that it is his wife and his Registrar who are currently applying for jobs and need publications on their CVs. How appropriate are each of the following responses by Helen in this situation?\n\n<strong>Question:</strong>\nAgree to add the names as it’s only a case report and not a research paper.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 3,
    "explanation": "This is dishonest and unprofessional, it doesn’t matter what type of publication; it is a matter of personal ethics that Helen has to her patients and society.",
    "topic": "Situational Judgement"
  },
  {
    "id": 243,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nHelen is a final year medical student. She has written a case report for publication and her Consultant has recently reviewed the final draft. When he gives her the case report back with comments, he has added two names to the list of authors. Helen enquires and the Consultant explains that it is his wife and his Registrar who are currently applying for jobs and need publications on their CVs. How appropriate are each of the following responses by Helen in this situation?\n\n<strong>Question:</strong>\nDiscuss the matter with her medical school supervisor.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 0,
    "explanation": "Escalating the problem to the medical student supervisor is appropriate as he would be able to support and provide Helen with the advice\n\n\nneeded.",
    "topic": "Situational Judgement"
  },
  {
    "id": 244,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nHelen is a final year medical student. She has written a case report for publication and her Consultant has recently reviewed the final draft. When he gives her the case report back with comments, he has added two names to the list of authors. Helen enquires and the Consultant explains that it is his wife and his Registrar who are currently applying for jobs and need publications on their CVs. How appropriate are each of the following responses by Helen in this situation?\n\n<strong>Question:</strong>\nDiscuss the matter with the consultant in a private meeting.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 0,
    "explanation": "Helen could clarify if the added names have actually contributed to the report and to discuss her concerns.",
    "topic": "Situational Judgement"
  },
  {
    "id": 245,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nHelen is a final year medical student. She has written a case report for publication and her Consultant has recently reviewed the final draft. When he gives her the case report back with comments, he has added two names to the list of authors. Helen enquires and the Consultant explains that it is his wife and his Registrar who are currently applying for jobs and need publications on their CVs. How appropriate are each of the following responses by Helen in this situation?\n\n<strong>Question:</strong>\nChoose not to publish the case report at all.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 2,
    "explanation": "This does not solve the situation; not publishing avoids being an accessory to fraudulent activity, however Helen is losing a chance to add an achievement to her own CV.",
    "topic": "Situational Judgement"
  },
  {
    "id": 246,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nThe medical school library has sent out a notice for a few missing books. John and Clare, both medical students, are studying at her home. Whilst they are studying, John sees a pile of books on her shelf which suspiciously look like the ones from the library. How appropriate are each of the following responses by John in this situation?\n\n<strong>Question:</strong>\nAccuse Clare of stealing the books from the library.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 3,
    "explanation": "John is being presumptive here, the books may be Clare’s own, and Clare may have borrowed the books from the library and forgot to return them.",
    "topic": "Situational Judgement"
  },
  {
    "id": 247,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nThe medical school library has sent out a notice for a few missing books. John and Clare, both medical students, are studying at her home. Whilst they are studying, John sees a pile of books on her shelf which suspiciously look like the ones from the library. How appropriate are each of the following responses by John in this situation?\n\n<strong>Question:</strong>\nAsk Clare if these are actually the books from the library and tell her to return them if they are the missing books.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 0,
    "explanation": "John has clarified the situation with Clare and has asked her to return the books, so has provided a solution. Medical school library books are a resource for all students so now other students would be able to use the missing books.",
    "topic": "Situational Judgement"
  },
  {
    "id": 248,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nThe medical school library has sent out a notice for a few missing books. John and Clare, both medical students, are studying at her home. Whilst they are studying, John sees a pile of books on her shelf which suspiciously look like the ones from the library. How appropriate are each of the following responses by John in this situation?\n\n<strong>Question:</strong>\nContacting the police, theft is a crime.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 3,
    "explanation": "There is no need to contact the police in this situation, John would be wasting their time and resources.",
    "topic": "Situational Judgement"
  },
  {
    "id": 249,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nThe medical school library has sent out a notice for a few missing books. John and Clare, both medical students, are studying at her home. Whilst they are studying, John sees a pile of books on her shelf which suspiciously look like the ones from the library. How appropriate are each of the following responses by John in this situation?\n\n<strong>Question:</strong>\nInform the medical school library of his suspicions.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 1,
    "explanation": "The medical school library would now know that they do not need to purchase more copies of the missing books, and they may follow it up independently, but John has not ensured that Clare would return them.",
    "topic": "Situational Judgement"
  },
  {
    "id": 250,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nThe medical school library has sent out a notice for a few missing books. John and Clare, both medical students, are studying at her home. Whilst they are studying, John sees a pile of books on her shelf which suspiciously look like the ones from the library. How appropriate are each of the following responses by John in this situation?\n\n<strong>Question:</strong>\nDiscussing the situation with his supervisor.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 0,
    "explanation": "If John is not sure of how to tackle the situation it would be best to discuss it with his supervisor as he would give him the advice needed.",
    "topic": "Situational Judgement"
  },
  {
    "id": 251,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nNadia, a fifth year medical student, is currently on a four week rotation on the neonatal wards. She has been assigned to shadow one of the consultants, Anne. During her first week, whenever Nadia approaches Anne, she is told that ‘there is not much going on today, why don’t you head home early’. This continues for a week and Nadia is starting to feel like she hasn’t learnt anything whilst shadowing Anne. How appropriate are each of the following responses by Nadia in this situation?\n\n<strong>Question:</strong>\nSpeak to Anne about her feelings of being ignored, and find a solution with Anne.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 0,
    "explanation": "Speaking to Anne is the best approach to take as Anne may not be aware of how Nadia is feeling. Anne and Nadia may also be able to find an arrangement of providing teaching sessions when the ward is quite.",
    "topic": "Situational Judgement"
  },
  {
    "id": 252,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nNadia, a fifth year medical student, is currently on a four week rotation on the neonatal wards. She has been assigned to shadow one of the consultants, Anne. During her first week, whenever Nadia approaches Anne, she is told that ‘there is not much going on today, why don’t you head home early’. This continues for a week and Nadia is starting to feel like she hasn’t learnt anything whilst shadowing Anne. How appropriate are each of the following responses by Nadia in this situation?\n\n<strong>Question:</strong>\nWatch and wait- there is still three weeks left to her attachment and things may improve.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 1,
    "explanation": "Nadia needs to take initiative for her own learning. If she feels she is not making the most of her experience then she needs to inform someone, and speaking sooner rather than later would obviously be better for her, as the situation may not improve on its own. However she may\n\n\nfeel that it is too early and the situation may improve on its own as she is new to the ward.",
    "topic": "Situational Judgement"
  },
  {
    "id": 253,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nNadia, a fifth year medical student, is currently on a four week rotation on the neonatal wards. She has been assigned to shadow one of the consultants, Anne. During her first week, whenever Nadia approaches Anne, she is told that ‘there is not much going on today, why don’t you head home early’. This continues for a week and Nadia is starting to feel like she hasn’t learnt anything whilst shadowing Anne. How appropriate are each of the following responses by Nadia in this situation?\n\n<strong>Question:</strong>\nDiscuss the situation with her supervisor.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 0,
    "explanation": "Her supervisor would be a good person to speak to, to get advice and help",
    "topic": "Situational Judgement"
  },
  {
    "id": 254,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nNadia, a fifth year medical student, is currently on a four week rotation on the neonatal wards. She has been assigned to shadow one of the consultants, Anne. During her first week, whenever Nadia approaches Anne, she is told that ‘there is not much going on today, why don’t you head home early’. This continues for a week and Nadia is starting to feel like she hasn’t learnt anything whilst shadowing Anne. How appropriate are each of the following responses by Nadia in this situation?\n\n<strong>Question:</strong>\nStop coming to the ward and go to the library instead.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 2,
    "explanation": "Nadia needs to spend time on the wards during her medical school years, as this will give her invaluable patient experience, However, she may feel that her time is spent more eﬃciently in the library.",
    "topic": "Situational Judgement"
  },
  {
    "id": 255,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nNadia, a fifth year medical student, is currently on a four week rotation on the neonatal wards. She has been assigned to shadow one of the consultants, Anne. During her first week, whenever Nadia approaches Anne, she is told that ‘there is not much going on today, why don’t you head home early’. This continues for a week and Nadia is starting to feel like she hasn’t learnt anything whilst shadowing Anne. How appropriate are each of the following responses by Nadia in this situation?\n\n<strong>Question:</strong>\nFind another doctor on the ward who she can shadow.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 1,
    "explanation": "Nadia has taken initiative for her learning, however Anne may be offended if she has not discussed this with her prior to finding another doctor. Also the other doctors may have other students assigned or other commitments to attend to.",
    "topic": "Situational Judgement"
  },
  {
    "id": 256,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nDean,a third year medical student, is currently on a placement in hospital with a group of three other students. During their placement they have to get their attendance and some clinical skills signed off by doctors. On the last day of their placement, one of the other students, Laura, approaches Dean and asks him to sign off some of her attendance and two of her skills. How appropriate are each of the following responses by Dean?\n\n<strong>Question:</strong>\nReprimand Laura for delaying signing the book until now, refuse to sign the book and give her tips of how to be more organised.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 1,
    "explanation": "Reprimanding Laura is patronising, however refusing to sign the book is the right thing to do. Students should not be signing each other’s books as it undermines the value of the clinical experience. However, offering tips for the future is a way of being supportive.",
    "topic": "Situational Judgement"
  },
  {
    "id": 257,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nDean,a third year medical student, is currently on a placement in hospital with a group of three other students. During their placement they have to get their attendance and some clinical skills signed off by doctors. On the last day of their placement, one of the other students, Laura, approaches Dean and asks him to sign off some of her attendance and two of her skills. How appropriate are each of the following responses by Dean?\n\n<strong>Question:</strong>\nAgree to sign the missing boxes for Laura, Dean knows she attended everyday.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 3,
    "explanation": "Despite seeing Laura attending the sessions, this is dishonest. It would be considered forgery as doctors are required to sign.",
    "topic": "Situational Judgement"
  },
  {
    "id": 258,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nDean,a third year medical student, is currently on a placement in hospital with a group of three other students. During their placement they have to get their attendance and some clinical skills signed off by doctors. On the last day of their placement, one of the other students, Laura, approaches Dean and asks him to sign off some of her attendance and two of her skills. How appropriate are each of the following responses by Dean?\n\n<strong>Question:</strong>\nSuggest she finds one of the junior doctors to sign her book.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 0,
    "explanation": "Directing Laura to the right person who is meant to be signing the book is appropriate as they know the appropriate steps to take.",
    "topic": "Situational Judgement"
  },
  {
    "id": 259,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nDean,a third year medical student, is currently on a placement in hospital with a group of three other students. During their placement they have to get their attendance and some clinical skills signed off by doctors. On the last day of their placement, one of the other students, Laura, approaches Dean and asks him to sign off some of her attendance and two of her skills. How appropriate are each of the following responses by Dean?\n\n<strong>Question:</strong>\nAsk Laura to demonstrate the skills and then sign them.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 3,
    "explanation": "Even if Laura has demonstrated the skill, students should not be signing assessments for one another.",
    "topic": "Situational Judgement"
  },
  {
    "id": 260,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nDean,a third year medical student, is currently on a placement in hospital with a group of three other students. During their placement they have to get their attendance and some clinical skills signed off by doctors. On the last day of their placement, one of the other students, Laura, approaches Dean and asks him to sign off some of her attendance and two of her skills. How appropriate are each of the following responses by Dean?\n\n<strong>Question:</strong>\nReport Laura to the medical school.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 2,
    "explanation": "Reporting Laura to the medical school without clarifying the situation or trying the solve it is a bit extreme, however forgery is a great academic offence.",
    "topic": "Situational Judgement"
  },
  {
    "id": 261,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nEmma is shadowing a junior doctor, Steven, on the wards. He is trying to cannulate a patient and after three failed attempts, he stops and leaves the patient’s bedside flustered without an explanation. Emma is still stood by the patient’s bedside. How appropriate are each of the following responses by Emma in this situation?\n\n<strong>Question:</strong>\nTry to cannulate the patient herself, she was successful in inserting one yesterday.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 3,
    "explanation": "There must be a reason why it took Steven three attempts to cannulate the patient, Emma should work within her limitations.",
    "topic": "Situational Judgement"
  },
  {
    "id": 262,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nEmma is shadowing a junior doctor, Steven, on the wards. He is trying to cannulate a patient and after three failed attempts, he stops and leaves the patient’s bedside flustered without an explanation. Emma is still stood by the patient’s bedside. How appropriate are each of the following responses by Emma in this situation?\n\n<strong>Question:</strong>\nSpeak to the nurse in charge about Steven.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 1,
    "explanation": "It would be best to clarify the situation with Steven before escalating, and it would be best to escalate to his direct senior.\n\n\nHowever, alerting the nurse in charge about Steven’s behaviour may avoid the situation escalating to a complaint by the patient.",
    "topic": "Situational Judgement"
  },
  {
    "id": 263,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nEmma is shadowing a junior doctor, Steven, on the wards. He is trying to cannulate a patient and after three failed attempts, he stops and leaves the patient’s bedside flustered without an explanation. Emma is still stood by the patient’s bedside. How appropriate are each of the following responses by Emma in this situation?\n\n<strong>Question:</strong>\nExcuse herself from the patient’s bedside and go and find Steven.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 0,
    "explanation": "Steven has left Emma in an awkward position. It’s best to go and find him and check everything is okay- he may have gone to get more cannulation equipment and was planning to come back.",
    "topic": "Situational Judgement"
  },
  {
    "id": 264,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nEmma is shadowing a junior doctor, Steven, on the wards. He is trying to cannulate a patient and after three failed attempts, he stops and leaves the patient’s bedside flustered without an explanation. Emma is still stood by the patient’s bedside. How appropriate are each of the following responses by Emma in this situation?\n\n<strong>Question:</strong>\nSpeak to Steven’s consultant.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 0,
    "explanation": "Escalating the situation to a more senior doctor is appropriate, they would be able to provide Emma with advice on what to do.",
    "topic": "Situational Judgement"
  },
  {
    "id": 265,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nEmma is shadowing a junior doctor, Steven, on the wards. He is trying to cannulate a patient and after three failed attempts, he stops and leaves the patient’s bedside flustered without an explanation. Emma is still stood by the patient’s bedside. How appropriate are each of the following responses by Emma in this situation?\n\n<strong>Question:</strong>\nComplain about Steven to the patient.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 3,
    "explanation": "Emma is undermining Steven as a doctor, and this would affect patient-doctor trust.",
    "topic": "Situational Judgement"
  },
  {
    "id": 266,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nJill is a medical student. She is shadowing a registrar in surgery, who is currently clerking a patient who needs an operation. The registrar leaves Jill with the patient and goes to get the operation consent forms. While he is away the patient makes a racist comment about the registrar. How appropriate are each of the following responses by Jill in this situation?\n\n<strong>Question:</strong>\nShe should retaliate and call the patient a racist idiot.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 3,
    "explanation": "Jill should remain professional in her manner even if the patient has said something offensive, and retaliating could make the situation worse.",
    "topic": "Situational Judgement"
  },
  {
    "id": 267,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nJill is a medical student. She is shadowing a registrar in surgery, who is currently clerking a patient who needs an operation. The registrar leaves Jill with the patient and goes to get the operation consent forms. While he is away the patient makes a racist comment about the registrar. How appropriate are each of the following responses by Jill in this situation?\n\n<strong>Question:</strong>\nPretend she didn’t hear the patient’s comment.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 3,
    "explanation": "As a medical student Jill is part of the team. Ignoring the situation shows she is not a good team player. The patient may also view her silence as an excuse to continue to make these racist remarks.",
    "topic": "Situational Judgement"
  },
  {
    "id": 268,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nJill is a medical student. She is shadowing a registrar in surgery, who is currently clerking a patient who needs an operation. The registrar leaves Jill with the patient and goes to get the operation consent forms. While he is away the patient makes a racist comment about the registrar. How appropriate are each of the following responses by Jill in this situation?\n\n<strong>Question:</strong>\nPolitely tell the patient that this language is not tolerated in the hospital.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 0,
    "explanation": "Racist comments are not tolerated in any workplace, so speaking to the patient politely maintains professionalism and shows that Jill has taken initiative.",
    "topic": "Situational Judgement"
  },
  {
    "id": 269,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nJill is a medical student. She is shadowing a registrar in surgery, who is currently clerking a patient who needs an operation. The registrar leaves Jill with the patient and goes to get the operation consent forms. While he is away the patient makes a racist comment about the registrar. How appropriate are each of the following responses by Jill in this situation?\n\n<strong>Question:</strong>\nDiscuss the matter with the consultant in charge.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 0,
    "explanation": "Discussing the matter with the consultant in charge is appropriate, he will provide Jill with the right advice and can help in de- escalating the situation.",
    "topic": "Situational Judgement"
  },
  {
    "id": 270,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nJill is a medical student. She is shadowing a registrar in surgery, who is currently clerking a patient who needs an operation. The registrar leaves Jill with the patient and goes to get the operation consent forms. While he is away the patient makes a racist comment about the registrar. How appropriate are each of the following responses by Jill in this situation?\n\n<strong>Question:</strong>\nReport the matter to the registrar.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 1,
    "explanation": "Reporting the matter straight to the registrar is appropriate as he would know the hospital protocol, especially since he is the one treating the patient. However it may be better to report it to someone else in case he takes offence.",
    "topic": "Situational Judgement"
  },
  {
    "id": 271,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nJohn is a first year medical student, he is working with four other medical students on a group project. Hannah, one of the other students, is dominating the group discussions and is doing a large amount of the work.\n\n\nHow appropriate are each of the following responses by John in this situation?\n\n<strong>Question:</strong>\nDiscuss the issue with the other members of the group.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 0,
    "explanation": "Xun should try to do it to the best of his ability in the remaining time.",
    "topic": "Situational Judgement"
  },
  {
    "id": 272,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nJohn is a first year medical student, he is working with four other medical students on a group project. Hannah, one of the other students, is dominating the group discussions and is doing a large amount of the work.\n\n\nHow appropriate are each of the following responses by John in this situation?\n\n<strong>Question:</strong>\nSpeak to Hannah and tell her she is not allowing others to contribute ,and if she doesn’t change she has to leave the group.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 1,
    "explanation": "it is unlikely that the deadline will be unchanged but there is always space for honesty and he might just be lucky.",
    "topic": "Situational Judgement"
  },
  {
    "id": 273,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nJohn is a first year medical student, he is working with four other medical students on a group project. Hannah, one of the other students, is dominating the group discussions and is doing a large amount of the work.\n\n\nHow appropriate are each of the following responses by John in this situation?\n\n<strong>Question:</strong>\nAllow Hannah to continue to dominate the group discussions and to do the majority of the work.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 3,
    "explanation": "because this action will affect his final grade.",
    "topic": "Situational Judgement"
  },
  {
    "id": 274,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nJohn is a first year medical student, he is working with four other medical students on a group project. Hannah, one of the other students, is dominating the group discussions and is doing a large amount of the work.\n\n\nHow appropriate are each of the following responses by John in this situation?\n\n<strong>Question:</strong>\nSpeak to his supervisor.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 3,
    "explanation": "because this is plagiarism and both Xun and his friend would be penalised for it.",
    "topic": "Situational Judgement"
  },
  {
    "id": 275,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nJohn is a first year medical student, he is working with four other medical students on a group project. Hannah, one of the other students, is dominating the group discussions and is doing a large amount of the work.\n\n\nHow appropriate are each of the following responses by John in this situation?\n\n<strong>Question:</strong>\nSpeak to Hannah and tell her it would be good if all members of the group contributed equally to the project.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 3,
    "explanation": "because he would be lying to the assessment oﬃce and could get into a lot of trouble for it.",
    "topic": "Situational Judgement"
  },
  {
    "id": 276,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nJenny, a medical student, hears that one of her colleagues has recently lost their grandmother. They are both at hospital on their rotation, when her colleague bursts into tears. How appropriate are each of the following responses by Jenny in this situation?\n\n<strong>Question:</strong>\nAdvise her colleague to go home for the day.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 0,
    "explanation": "because he will be showing that he respects the hospital, infection control, and the patients.",
    "topic": "Situational Judgement"
  },
  {
    "id": 277,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nJenny, a medical student, hears that one of her colleagues has recently lost their grandmother. They are both at hospital on their rotation, when her colleague bursts into tears. How appropriate are each of the following responses by Jenny in this situation?\n\n<strong>Question:</strong>\nOffer her colleague support.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 3,
    "explanation": "because this will set a bad first impression to his patients and colleagues – made worse by his refusal.",
    "topic": "Situational Judgement"
  },
  {
    "id": 278,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nJenny, a medical student, hears that one of her colleagues has recently lost their grandmother. They are both at hospital on their rotation, when her colleague bursts into tears. How appropriate are each of the following responses by Jenny in this situation?\n\n<strong>Question:</strong>\nDiscuss this with her supervisor.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 2,
    "explanation": ". Nahor may set a bad first impression but there is a small chance that he might be allowed to keep it.",
    "topic": "Situational Judgement"
  },
  {
    "id": 279,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nJenny, a medical student, hears that one of her colleagues has recently lost their grandmother. They are both at hospital on their rotation, when her colleague bursts into tears. How appropriate are each of the following responses by Jenny in this situation?\n\n<strong>Question:</strong>\nTell her colleague it is inappropriate to cry on the wards and to stop.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 0,
    "explanation": "because he can still enjoy keeping his hair in an individual style without looking unprofessional.",
    "topic": "Situational Judgement"
  },
  {
    "id": 280,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nJenny, a medical student, hears that one of her colleagues has recently lost their grandmother. They are both at hospital on their rotation, when her colleague bursts into tears. How appropriate are each of the following responses by Jenny in this situation?\n\n<strong>Question:</strong>\nGive her colleague some time alone.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 1,
    "explanation": ". Whilst this is a proactive approach, it is such a minor issue that it is not worth wasting the dean’s time about. In addition, the answer is very likely to be ‘no’.",
    "topic": "Situational Judgement"
  },
  {
    "id": 281,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nMaya, a sixth year medical student, is out with a group of her friends from medical school. They are all out at a restaurant for an evening meal. The students start discussing some of the interesting patients they had seen over the last few weeks. Some of the patients’ names are being mentioned in the conversation, and other diners could certainly overhear. How appropriate are each of the following responses by Maya in this situation?\n\n<strong>Question:</strong>\nMaya should join in the conversation and speak about a particularly interesting patient she had seen.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 3,
    "explanation": "This is a breach of patient confidentiality. Patient details should not be discussed in public places.",
    "topic": "Situational Judgement"
  },
  {
    "id": 282,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nMaya, a sixth year medical student, is out with a group of her friends from medical school. They are all out at a restaurant for an evening meal. The students start discussing some of the interesting patients they had seen over the last few weeks. Some of the patients’ names are being mentioned in the conversation, and other diners could certainly overhear. How appropriate are each of the following responses by Maya in this situation?\n\n<strong>Question:</strong>\nMaya should warn her friends that they are in a public place and should not be talking about patients using their names.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 0,
    "explanation": "Maya is within a group of friends and she should remind her friends of patient confidentiality and their duty to protect it.",
    "topic": "Situational Judgement"
  },
  {
    "id": 283,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nMaya, a sixth year medical student, is out with a group of her friends from medical school. They are all out at a restaurant for an evening meal. The students start discussing some of the interesting patients they had seen over the last few weeks. Some of the patients’ names are being mentioned in the conversation, and other diners could certainly overhear. How appropriate are each of the following responses by Maya in this situation?\n\n<strong>Question:</strong>\nMaya should try to change the subject of the conversation.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 2,
    "explanation": "Maya is trying to changing the subject of the conversation, however she may not be successful and she has not highlighted to\n\n\nher friends that what they are doing is wrong.",
    "topic": "Situational Judgement"
  },
  {
    "id": 284,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nMaya, a sixth year medical student, is out with a group of her friends from medical school. They are all out at a restaurant for an evening meal. The students start discussing some of the interesting patients they had seen over the last few weeks. Some of the patients’ names are being mentioned in the conversation, and other diners could certainly overhear. How appropriate are each of the following responses by Maya in this situation?\n\n<strong>Question:</strong>\nMaya should report her friends to the medical school",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 1,
    "explanation": "Maya’s friends need to made aware of their actions at this stage, not saying anything means her friends will continue breaching patient confidentiality until they are called by the medical school. This would also cause unnecessary worry for her friends, and suspicion of her, especially when the matter could have been solved between friends.",
    "topic": "Situational Judgement"
  },
  {
    "id": 285,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nMaya, a sixth year medical student, is out with a group of her friends from medical school. They are all out at a restaurant for an evening meal. The students start discussing some of the interesting patients they had seen over the last few weeks. Some of the patients’ names are being mentioned in the conversation, and other diners could certainly overhear. How appropriate are each of the following responses by Maya in this situation?\n\n<strong>Question:</strong>\nExcuse herself from the table and leave.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 3,
    "explanation": "By excusing herself she has taken no action to make her friends aware that they are breaching patient confidentiality, so they will continue discussing patient cases, which is not acceptable.",
    "topic": "Situational Judgement"
  },
  {
    "id": 286,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nMichael is a medical student; one of his colleagues Simon confides in him that he is suffering from depression and feels it is affecting their work. He asks Michael not to tell anyone. How appropriate are each of the following responses by Michael in this situation?\n\n<strong>Question:</strong>\nSpeak to his own supervisor without telling Simon.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 1,
    "explanation": "The supervisor would be able to provide Michael with advice on how to proceed, but Simon may not have wanted anyone else to know.",
    "topic": "Situational Judgement"
  },
  {
    "id": 287,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nMichael is a medical student; one of his colleagues Simon confides in him that he is suffering from depression and feels it is affecting their work. He asks Michael not to tell anyone. How appropriate are each of the following responses by Michael in this situation?\n\n<strong>Question:</strong>\nAdvise Simon to speak to his supervisor.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 0,
    "explanation": "Simon has been advised to speak to his supervisor so that the supervisor could provide him with the support he needed. He will also be aware of the medical school procedures so he would be able to assist Simon directly.",
    "topic": "Situational Judgement"
  },
  {
    "id": 288,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nMichael is a medical student; one of his colleagues Simon confides in him that he is suffering from depression and feels it is affecting their work. He asks Michael not to tell anyone. How appropriate are each of the following responses by Michael in this situation?\n\n<strong>Question:</strong>\nMock him and tell him he should get over it.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 3,
    "explanation": "Simon has confided in Michael seeking support, mocking him may make him feel worse about himself.",
    "topic": "Situational Judgement"
  },
  {
    "id": 289,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nMichael is a medical student; one of his colleagues Simon confides in him that he is suffering from depression and feels it is affecting their work. He asks Michael not to tell anyone. How appropriate are each of the following responses by Michael in this situation?\n\n<strong>Question:</strong>\nTell other students in the medical school so they can offer some support.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 2,
    "explanation": "Simon has confided in Michael and has asked him not to tell anyone. Michael feels if more people know then they might help him, but he has broken Simon’s confidence and lost his trust.",
    "topic": "Situational Judgement"
  },
  {
    "id": 290,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nMichael is a medical student; one of his colleagues Simon confides in him that he is suffering from depression and feels it is affecting their work. He asks Michael not to tell anyone. How appropriate are each of the following responses by Michael in this situation?\n\n<strong>Question:</strong>\nOffer any help he can, and advise him to see his GP or a counselor.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 0,
    "explanation": "Advising him to seek help from the right channels is the right thing to do. Seeking medical advice is also a duty of all students and doctors if they feel their physical or mental health has an impact on their work.",
    "topic": "Situational Judgement"
  },
  {
    "id": 291,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nMark is a medical student, he walk into the doctor’s mess and sees one of the doctors watching adult pornography on one of the hospital computers. How appropriate are each of the following responses by Mark in this situation?\n\n<strong>Question:</strong>\nPretend he didn’t see anything and leave the doctor’s mess immediately.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 3,
    "explanation": "The doctor is in breach of hospital regulations and his moral obligations; he needs to be made aware that what he is doing is wrong.",
    "topic": "Situational Judgement"
  },
  {
    "id": 292,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nMark is a medical student, he walk into the doctor’s mess and sees one of the doctors watching adult pornography on one of the hospital computers. How appropriate are each of the following responses by Mark in this situation?\n\n<strong>Question:</strong>\nSpeak to his supervisor.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 0,
    "explanation": "Mark’s supervisor would be aware of the guidelines for similar issues so he would be able to advise Mark on what to do and to support\n\n\nhim.",
    "topic": "Situational Judgement"
  },
  {
    "id": 293,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nMark is a medical student, he walk into the doctor’s mess and sees one of the doctors watching adult pornography on one of the hospital computers. How appropriate are each of the following responses by Mark in this situation?\n\n<strong>Question:</strong>\nConfront the doctor about the issue.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 1,
    "explanation": "It is good to speak to the doctor directly, however, confrontation can make the situation worse, it is best to approach the doctor and clarify the situation; it may have been something innocuous such as a computer virus.",
    "topic": "Situational Judgement"
  },
  {
    "id": 294,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nMark is a medical student, he walk into the doctor’s mess and sees one of the doctors watching adult pornography on one of the hospital computers. How appropriate are each of the following responses by Mark in this situation?\n\n<strong>Question:</strong>\nSpread the news in the hospital that there was a doctor watching pornography during working hours.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 3,
    "explanation": "Mark has not clarified the situation with the doctor; this may anger the doctor and may lead to patients losing trust in doctors.",
    "topic": "Situational Judgement"
  },
  {
    "id": 295,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nMark is a medical student, he walk into the doctor’s mess and sees one of the doctors watching adult pornography on one of the hospital computers. How appropriate are each of the following responses by Mark in this situation?\n\n<strong>Question:</strong>\nContact the hospital IT services.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 1,
    "explanation": "Contacting the hospital IT services to make them aware that these website are accessible so they can firewall these sites would be good, however it does not lead to immediately solving the situation of the doctor watching pornography in a public place.",
    "topic": "Situational Judgement"
  },
  {
    "id": 296,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nAlice has arranged to go out for dinner with her boyfriend tonight. Just before leaving medical school she receives an e-mail which informs her that tomorrow morning’s seminar has been moved to this evening and starts in the next 30 minutes. How appropriate are each of the following responses by Alice in this situation?\n\n<strong>Question:</strong>\nTell another student to apologise to the seminar leader for her absence.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 1,
    "explanation": "She is offering her apologies, however is involving another student and this is not the appropriate step to take.",
    "topic": "Situational Judgement"
  },
  {
    "id": 297,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nAlice has arranged to go out for dinner with her boyfriend tonight. Just before leaving medical school she receives an e-mail which informs her that tomorrow morning’s seminar has been moved to this evening and starts in the next 30 minutes. How appropriate are each of the following responses by Alice in this situation?\n\n<strong>Question:</strong>\nLeave as planned, and hope her absence goes unnoticed.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 2,
    "explanation": "The change in seminar times was very short notice, so other students may be off sick however Alice would have to justify her absence at a later date.",
    "topic": "Situational Judgement"
  },
  {
    "id": 298,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nAlice has arranged to go out for dinner with her boyfriend tonight. Just before leaving medical school she receives an e-mail which informs her that tomorrow morning’s seminar has been moved to this evening and starts in the next 30 minutes. How appropriate are each of the following responses by Alice in this situation?\n\n<strong>Question:</strong>\nFind out what the seminar is about and speak to the seminar leader and explain that she had prior arrangements.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 0,
    "explanation": "Discussing the issue with the seminar leader, the person who knows best, is proactive and shows that Alice is taking initiative and she has not involved a third party.",
    "topic": "Situational Judgement"
  },
  {
    "id": 299,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nAlice has arranged to go out for dinner with her boyfriend tonight. Just before leaving medical school she receives an e-mail which informs her that tomorrow morning’s seminar has been moved to this evening and starts in the next 30 minutes. How appropriate are each of the following responses by Alice in this situation?\n\n<strong>Question:</strong>\nCall her boyfriend and tell him that the dinner needs to be cancelled, as she must attend an important teaching session.",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 1,
    "explanation": "Alice has realised that she has to attend the teaching session, it is good to have a work and social life balance so cancelling the dinner plans is not ideal.",
    "topic": "Situational Judgement"
  },
  {
    "id": 300,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nAlice has arranged to go out for dinner with her boyfriend tonight. Just before leaving medical school she receives an e-mail which informs her that tomorrow morning’s seminar has been moved to this evening and starts in the next 30 minutes. How appropriate are each of the following responses by Alice in this situation?\n\n<strong>Question:</strong>\nWrite a rude email to the seminar leader complaining about the short notice.\n\n\nANSWERS",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 3,
    "explanation": "The change in seminar times is short notice however; there are ways that Alice could approach the issue without being rude.",
    "topic": "Situational Judgement"
  }
];
