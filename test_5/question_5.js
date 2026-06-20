const PASSAGES = {};

const QUESTIONS = [
  {
    "id": 1,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nDr Ramanthan, a consultant Paediatrician, has had a very busy shift. A young child has been  \ncrying in the waiting room for over 30 minutes. When he steps out to call the child and her  \nparents in for their appointment, he finds the parents speaking very aggressively to the  \nreceptionist.\n\n<strong>Question:</strong>\nSpeak to the parents about what has upset them.",
    "options": [
      "A very appropriate thing to do",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "A very inappropriate thing to do"
    ],
    "answer": 0,
    "explanation": "The correct answer is A. It is essential for Dr Ramanthan to address the obvious fact  \nthat they are upset. Without addressing this, it will be difficult to solve the problem.  \nThis is a positive response and demonstrates empathy. Although he is having a busy  \nshift, he is taking the time to speak to the patient\u2019s parents about their concerns.",
    "topic": "Situational Judgement"
  },
  {
    "id": 2,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nDr Ramanthan, a consultant Paediatrician, has had a very busy shift. A young child has been  \ncrying in the waiting room for over 30 minutes. When he steps out to call the child and her  \nparents in for their appointment, he finds the parents speaking very aggressively to the  \nreceptionist.\n\n<strong>Question:</strong>\nTell the receptionist to carry on with her work while he deals with the situation.",
    "options": [
      "A very appropriate thing to do",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "A very inappropriate thing to do"
    ],
    "answer": 2,
    "explanation": "The correct answer is C. It is not appropriate to dismiss another staff member in the  \nmiddle of a conflict, as this may indicate that they have done something wrong. It may  \nalso be offensive to the staff member, who is not sure why they are being sent away.  \nAlthough it may seem that he is doing nothing wrong, and is simply trying to help, the  \nreceptionist was involved in the conflict and thus it is important for her to be present  \nwhile he attempts to deal with it. However, this does demonstrate an attempt to  \nresolve the main issue of the parents\u2019 frustration, so it is not entirely bad.",
    "topic": "Situational Judgement"
  },
  {
    "id": 3,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nDr Ramanthan, a consultant Paediatrician, has had a very busy shift. A young child has been  \ncrying in the waiting room for over 30 minutes. When he steps out to call the child and her  \nparents in for their appointment, he finds the parents speaking very aggressively to the  \nreceptionist.\n\n<strong>Question:</strong>\nApologise for the long delay.",
    "options": [
      "A very appropriate thing to do",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "A very inappropriate thing to do"
    ],
    "answer": 0,
    "explanation": "The correct answer is A. Remember, this does not have to be the only action that is  \ntaken. Beginning by apologising for the delay is likely to deescalate the situation. This  \nwill allow the parents to speak in a calmer manner, and hopefully discuss what the  \nissue is.",
    "topic": "Situational Judgement"
  },
  {
    "id": 4,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nJasmine is a junior registrar on a night shift in general surgery. She received a phone call from  \nEileen who states that she is the daughter of Mr Simpson, one of the patients on the ward.  \nEileen wants to know how her father is doing, as he does not have a mobile phone that she  \ncan contact him with.\n\n<strong>Question:</strong>\nLet Eileen know that her father is doing well and alleviate any concerns she may  \nhave.",
    "options": [
      "A very appropriate thing to do",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "A very inappropriate thing to do"
    ],
    "answer": 3,
    "explanation": "The correct answer is D. Without any confirmation of who the person on the phone is,  \nand whether Mr Simpson has given explicit consent for that person to be given  \ninformation about him, Jasmine cannot make any comments. It is highly inappropriate  \nto even confirm that Mr Simpson is on this ward. Patient confidentiality is crucial. If  \nhe does not want her to know he is there, it is not Jasmine\u2019s right to inform her.  \nFurther, from a patient safety point of view, it may even be someone pretending to  \nbe his daughter. Therefore, Jasmine must exercise caution and avoid giving away any  \ninformation.",
    "topic": "Situational Judgement"
  },
  {
    "id": 5,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nJasmine is a junior registrar on a night shift in general surgery. She received a phone call from  \nEileen who states that she is the daughter of Mr Simpson, one of the patients on the ward.  \nEileen wants to know how her father is doing, as he does not have a mobile phone that she  \ncan contact him with.\n\n<strong>Question:</strong>\nCheck Mr Simpson\u2019s records to see whether Eileen is mentioned.",
    "options": [
      "A very appropriate thing to do",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "A very inappropriate thing to do"
    ],
    "answer": 0,
    "explanation": "The correct answer is A. If there are identifiable details about Eileen on Mr Simpson\u2019s  \nrecord, and it has been stated that she has permission to obtain information about  \nhim, then Jasmine can pass on information. Therefore, it would be very appropriate  \nto check his record for such information.",
    "topic": "Situational Judgement"
  },
  {
    "id": 6,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nJasmine is a junior registrar on a night shift in general surgery. She received a phone call from  \nEileen who states that she is the daughter of Mr Simpson, one of the patients on the ward.  \nEileen wants to know how her father is doing, as he does not have a mobile phone that she  \ncan contact him with.\n\n<strong>Question:</strong>\nAsk Mr Simpson whether he is happy for Eileen to know how he is doing.",
    "options": [
      "A very appropriate thing to do",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "A very inappropriate thing to do"
    ],
    "answer": 0,
    "explanation": "The correct answer is A. If Jasmine has any doubt, and the patient is available and able  \nto make an informed decision, it is best to ask him directly. If he gives his explicit  \nconsent, Jasmine can answer Eileen\u2019s questions over the telephone.",
    "topic": "Situational Judgement"
  },
  {
    "id": 7,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nJasmine is a junior registrar on a night shift in general surgery. She received a phone call from  \nEileen who states that she is the daughter of Mr Simpson, one of the patients on the ward.  \nEileen wants to know how her father is doing, as he does not have a mobile phone that she  \ncan contact him with.\n\n<strong>Question:</strong>\nExplain to Eileen that she cannot disclose any information over the phone.",
    "options": [
      "A very appropriate thing to do",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "A very inappropriate thing to do"
    ],
    "answer": 0,
    "explanation": "The correct answer is A. Patient confidentiality and patient safety are at risk. It is  \nappropriate to explain to Eileen that she is unable to confirm or deny any information  \nabout any of the patients on the ward without explicit consent.",
    "topic": "Situational Judgement"
  },
  {
    "id": 8,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nGurleen, a medical student, spent the weekend at home with her family. Her younger siblings  \nmiss her a lot when she is at university, and are insistent that she stay with them for a while  \nlonger. She has seminars all day tomorrow, and knows that these are important to attend.  \nHowever, she wishes to spend more time with her siblings, as she hardly gets the chance to  \ncome home.\n\n<strong>Question:</strong>\nCall the medical school explaining her situation and ask for advice.",
    "options": [
      "A very appropriate thing to do",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "A very inappropriate thing to do"
    ],
    "answer": 0,
    "explanation": "The correct answer is A. As a medical student, it is essential to maintain  \nprofessionalism at all times. However, it is also important to maintain a good personal  \nlife and family ties. The medical school should be understanding of her situation, and  \nit would be best to seek advice on what she can do. This is a positive step towards  \nresolving the issue, and she is doing nothing wrong here.",
    "topic": "Situational Judgement"
  },
  {
    "id": 9,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nGurleen, a medical student, spent the weekend at home with her family. Her younger siblings  \nmiss her a lot when she is at university, and are insistent that she stay with them for a while  \nlonger. She has seminars all day tomorrow, and knows that these are important to attend.  \nHowever, she wishes to spend more time with her siblings, as she hardly gets the chance to  \ncome home.\n\n<strong>Question:</strong>\nReport a \u201csick\u201d absence to the medical school.",
    "options": [
      "A very appropriate thing to do",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "A very inappropriate thing to do"
    ],
    "answer": 3,
    "explanation": "The correct answer is D. Lying is always unacceptable and should always be \u201cvery  \ninappropriate\u201d.",
    "topic": "Situational Judgement"
  },
  {
    "id": 10,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nGurleen, a medical student, spent the weekend at home with her family. Her younger siblings  \nmiss her a lot when she is at university, and are insistent that she stay with them for a while  \nlonger. She has seminars all day tomorrow, and knows that these are important to attend.  \nHowever, she wishes to spend more time with her siblings, as she hardly gets the chance to  \ncome home.\n\n<strong>Question:</strong>\nAsk her friends to sign her in to the seminars and send any notes that they have  \nmade.",
    "options": [
      "A very appropriate thing to do",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "A very inappropriate thing to do"
    ],
    "answer": 3,
    "explanation": "The correct answer is D. This is also lying, which is unethical and unacceptable. It is  \ngood to ask friends for support and any notes from something that she has missed,  \nbut this must be \u201cvery inappropriate\u201d due to the unethical act of requesting to be  \nsigned in.",
    "topic": "Situational Judgement"
  },
  {
    "id": 11,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nGurleen, a medical student, spent the weekend at home with her family. Her younger siblings  \nmiss her a lot when she is at university, and are insistent that she stay with them for a while  \nlonger. She has seminars all day tomorrow, and knows that these are important to attend.  \nHowever, she wishes to spend more time with her siblings, as she hardly gets the chance to  \ncome home.\n\n<strong>Question:</strong>\nTell her siblings that she has no choice, and go back for her seminars.",
    "options": [
      "A very appropriate thing to do",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "A very inappropriate thing to do"
    ],
    "answer": 2,
    "explanation": "The correct answer is C. This maintains her professionalism as a medical student, but  \ndoes not deal with her own personal problem. It is important to have a good work-life  \nbalance and maintain good mental health, and although she should not miss any  \nimportant seminars, Gurleen should try to find a solution to spend more time with her  \nsiblings. This response shows no effort towards finding a solution, but is not entirely  \nbad as she is not doing anything wrong.",
    "topic": "Situational Judgement"
  },
  {
    "id": 12,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nGurleen, a medical student, spent the weekend at home with her family. Her younger siblings  \nmiss her a lot when she is at university, and are insistent that she stay with them for a while  \nlonger. She has seminars all day tomorrow, and knows that these are important to attend.  \nHowever, she wishes to spend more time with her siblings, as she hardly gets the chance to  \ncome home.\n\n<strong>Question:</strong>\nCall the medical school and ask if there is any way she can make up for the seminars.",
    "options": [
      "A very appropriate thing to do",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "A very inappropriate thing to do"
    ],
    "answer": 0,
    "explanation": "The correct answer is A. This is appropriate, although would not be a solo action. It is  \nalways good to reach out to the medical school and to be honest. If any important  \nsessions might be missed, it is vital to catch up on them. Therefore, this is a good step  \nto take. She may even find out that the seminars are not mandatory or that she can  \nview the recordings online.",
    "topic": "Situational Judgement"
  },
  {
    "id": 13,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nHamza is a junior doctor who has been seeking the opportunity to practice performing a  \nlumbar puncture. The opportunity finally comes up, as a patient is in need of a lumbar  \npuncture and there is a consultant to supervise and educate him on this. As Hamza is heading  \nto gather his equipment, his alarm goes off reminding him of his meeting with a research  \nsupervisor.\n\n<strong>Question:</strong>\nHamza\u2019s supervisor had offered to buy him lunch during the meeting.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 2,
    "explanation": "The correct answer is C. Considering this will not impact the main problem in a positive  \nor a negative way. The main problem is the time commitment and professionalism,  \nnot the promise of lunch. However, it would be beneficial to consider this in order to  \nsolve a minor problem. Because the doctor had offered lunch, he may take some  \noffence if Hamza does not accept this invitation, thus it is of minor importance to  \nconsider.",
    "topic": "Situational Judgement"
  },
  {
    "id": 14,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nHamza is a junior doctor who has been seeking the opportunity to practice performing a  \nlumbar puncture. The opportunity finally comes up, as a patient is in need of a lumbar  \npuncture and there is a consultant to supervise and educate him on this. As Hamza is heading  \nto gather his equipment, his alarm goes off reminding him of his meeting with a research  \nsupervisor.\n\n<strong>Question:</strong>\nHamza\u2019s supervisor has taken time out of his schedule to meet with him.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 0,
    "explanation": "The correct answer is A. The main problem here is the professionalism associated with  \nkeeping time commitments. It is very important for Hamza to ensure that he respects  \nhis commitments to others, and considers commitments that others have made for  \n\nhim. A doctor who does not uphold their professional commitments is likely to  \nstruggle upholding commitments to patients.",
    "topic": "Situational Judgement"
  },
  {
    "id": 15,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nHamza is a junior doctor who has been seeking the opportunity to practice performing a  \nlumbar puncture. The opportunity finally comes up, as a patient is in need of a lumbar  \npuncture and there is a consultant to supervise and educate him on this. As Hamza is heading  \nto gather his equipment, his alarm goes off reminding him of his meeting with a research  \nsupervisor.\n\n<strong>Question:</strong>\nSomeone else will probably end up doing the lumbar puncture while he is at the  \nmeeting.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 2,
    "explanation": "The correct answer is C. This does not address the main problem. Nowhere does it  \nsay that it is necessary for Hamza to perform this procedure. It is clear that Hamza  \nwants this for his own education and learning, which is important, but it is more  \nessential to uphold the commitments that others have made for him. However, it does  \nhelp to solve a minor problem, which is Hamza\u2019s desire to perform a lumbar puncture.  \nBy considering this, he may be able to find a solution to this minor problem, such as  \nasking the consultant to wait until he is back. If the procedure is not urgent, this may  \nbe possible.",
    "topic": "Situational Judgement"
  },
  {
    "id": 16,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nAmit, a medical student, is out doing some shopping, when he sees some students he  \nrecognises from his course. As he approaches them, he overhears one of them discussing  \nDaniel, a patient that she examined earlier.\n\n<strong>Question:</strong>\nConfront her about using patient identifiable details.",
    "options": [
      "A very appropriate thing to do",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "A very inappropriate thing to do"
    ],
    "answer": 2,
    "explanation": "The correct answer is C. This response is quite negative, as outlined by the term  \n\u201cconfront\u201d. It is important to maintain politeness, as this kind of mannerism can lead  \nto a defensive response and problems between colleagues. However, Amit is clearly  \nattempting to solve the problem by reminding her that she should not be breaking  \nconfidentiality. Therefore, although he has not used the correct tone for resolving the  \nproblem, it is not entirely inappropriate.",
    "topic": "Situational Judgement"
  },
  {
    "id": 17,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nAmit, a medical student, is out doing some shopping, when he sees some students he  \nrecognises from his course. As he approaches them, he overhears one of them discussing  \nDaniel, a patient that she examined earlier.\n\n<strong>Question:</strong>\nWalk in the other direction so as not to be associated with this breach of  \nconfidentiality.",
    "options": [
      "A very appropriate thing to do",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "A very inappropriate thing to do"
    ],
    "answer": 3,
    "explanation": "The correct answer is D. Patient confidentiality is a serious issue, and anyone  \nbreaching it should be advised not to do so. By walking away, Amit is ignoring this  \nproblem, which can make matters worse. This is very inappropriate.",
    "topic": "Situational Judgement"
  },
  {
    "id": 18,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nAmit, a medical student, is out doing some shopping, when he sees some students he  \nrecognises from his course. As he approaches them, he overhears one of them discussing  \nDaniel, a patient that she examined earlier.\n\n<strong>Question:</strong>\nReport her to the medical school as this is a serious matter.",
    "options": [
      "A very appropriate thing to do",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "A very inappropriate thing to do"
    ],
    "answer": 3,
    "explanation": "The correct answer is D. This is a severe escalation which is inappropriate as the  \nindividual involved has not been consulted prior to escalation. Further, it does not  \naddress the issue at hand, which is the current and ongoing breach of confidentiality.  \nTherefore, there is nothing immediately positive about this response.",
    "topic": "Situational Judgement"
  },
  {
    "id": 19,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nAmit, a medical student, is out doing some shopping, when he sees some students he  \nrecognises from his course. As he approaches them, he overhears one of them discussing  \nDaniel, a patient that she examined earlier.\n\n<strong>Question:</strong>\nPolitely remind her that patients\u2019 names should not be mentioned, especially in a  \npublic place.",
    "options": [
      "A very appropriate thing to do",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "A very inappropriate thing to do"
    ],
    "answer": 0,
    "explanation": "The correct answer is A. This response is well-mannered and will help maintain the  \nrelationship with his colleague. Further, it addresses the issue immediately in order to  \nresolve it.",
    "topic": "Situational Judgement"
  },
  {
    "id": 20,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nCarl is a junior doctor on a surgical rotation. When he enters the doctors\u2019 office in the  \nmorning, he witnesses one of the surgeons quickly shove a bottle of whiskey in his drawer.\n\n<strong>Question:</strong>\nReport him immediately as he should not be drinking during work.",
    "options": [
      "A very appropriate thing to do",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "A very inappropriate thing to do"
    ],
    "answer": 3,
    "explanation": "The correct answer is D. It is vital to solve the danger to patient safety, but the  \nconsultant must first be approached before any escalation. It is unclear whether or  \nnot he has been drinking, thus no assumption should be made.",
    "topic": "Situational Judgement"
  },
  {
    "id": 21,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nCarl is a junior doctor on a surgical rotation. When he enters the doctors\u2019 office in the  \nmorning, he witnesses one of the surgeons quickly shove a bottle of whiskey in his drawer.\n\n<strong>Question:</strong>\nAsk him if everything is okay.",
    "options": [
      "A very appropriate thing to do",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "A very inappropriate thing to do"
    ],
    "answer": 0,
    "explanation": "The correct answer is A. This is an appropriate and empathetic response which aims  \nto resolve any misinterpretation of the circumstances. It is non-confrontational, non- \njudgemental and non-accusatory. This open question is an ideal response to the  \ncircumstances. If the consultant had been drinking, he is less likely to be defensive  \nwith such a response.",
    "topic": "Situational Judgement"
  },
  {
    "id": 22,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nCarl is a junior doctor on a surgical rotation. When he enters the doctors\u2019 office in the  \nmorning, he witnesses one of the surgeons quickly shove a bottle of whiskey in his drawer.\n\n<strong>Question:</strong>\nConfront him about the alcohol and demand that he takes the day off work for the  \nsafety of the patients.",
    "options": [
      "A very appropriate thing to do",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "A very inappropriate thing to do"
    ],
    "answer": 3,
    "explanation": "The correct answer is D. There is no evidence that the consultant has been drinking,  \nthus harsh and negative terms such as \u201cconfront\u201d and \u201cdemand\u201d are very  \ninappropriate.",
    "topic": "Situational Judgement"
  },
  {
    "id": 23,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nCarl is a junior doctor on a surgical rotation. When he enters the doctors\u2019 office in the  \nmorning, he witnesses one of the surgeons quickly shove a bottle of whiskey in his drawer.\n\n<strong>Question:</strong>\nTalk to him to detect whether he appears to have been drinking.",
    "options": [
      "A very appropriate thing to do",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "A very inappropriate thing to do"
    ],
    "answer": 0,
    "explanation": "The correct answer is A. Carl has just walked into the room and seen the consultant  \nwith a bottle of whiskey. He has not seen him drink anything, and has not yet observed  \nhis actions. Therefore, it is very appropriate to try to assess the situation further and  \nrespond accordingly. This action will help Carl to resolve the problem and clarify any  \nmisunderstanding he may have.",
    "topic": "Situational Judgement"
  },
  {
    "id": 24,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nCarl is a junior doctor on a surgical rotation. When he enters the doctors\u2019 office in the  \nmorning, he witnesses one of the surgeons quickly shove a bottle of whiskey in his drawer.\n\n<strong>Question:</strong>\n\u201cAre you okay? It\u2019s not like you to be drinking at work.\u201d",
    "options": [
      "A very appropriate thing to do",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "A very inappropriate thing to do"
    ],
    "answer": 2,
    "explanation": "The correct answer is C. It is inappropriate to make any assumptions, as Carl has not  \nseen him drink, therefore he should not accuse him of doing so. However, the  \nresponse has an empathetic tone and attempts to deal with the situation. Therefore,  \nit is not awful.",
    "topic": "Situational Judgement"
  },
  {
    "id": 25,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nEmmanuel is a medical student on placement in a hospital. While seeing some patients, he  \nhears a quarrel and immediately runs to find out what is happening. He finds a nurse shouting  \nat one of the healthcare assistants. It appears that the healthcare assistant forgot to complete  \none of her tasks, potentially jeopardising a patient\u2019s safety.\n\n<strong>Question:</strong>\nThe healthcare assistant is new to the ward and probably did make the mistake.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 3,
    "explanation": "The correct answer is D. It is not right for any member of the team to shout at anyone.  \nPoor leadership and teamwork skills are being demonstrated by the nurse, and this  \nmatter should be resolved. If Emmanuel considers that the healthcare assistant  \nprobably made the mistake, it may stop him from doing anything to resolve the issue  \nat hand, as he may feel that the nurse\u2019s actions are necessary.",
    "topic": "Situational Judgement"
  },
  {
    "id": 26,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nEmmanuel is a medical student on placement in a hospital. While seeing some patients, he  \nhears a quarrel and immediately runs to find out what is happening. He finds a nurse shouting  \nat one of the healthcare assistants. It appears that the healthcare assistant forgot to complete  \none of her tasks, potentially jeopardising a patient\u2019s safety.\n\n<strong>Question:</strong>\nThe healthcare assistant jeopardised patient safety.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 3,
    "explanation": "The correct answer is D. If Emmanuel considers this, it may stop him from doing  \nanything to resolve the issue at hand. Shouting is never an appropriate way to deal  \nwith anything, regardless of what the issue is. If he considers that patient safety was  \nat risk, he may justify the shouting and do nothing about it. It is important to identify  \nthe main issue here, which is  not  patient safety.",
    "topic": "Situational Judgement"
  },
  {
    "id": 27,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nEmmanuel is a medical student on placement in a hospital. While seeing some patients, he  \nhears a quarrel and immediately runs to find out what is happening. He finds a nurse shouting  \nat one of the healthcare assistants. It appears that the healthcare assistant forgot to complete  \none of her tasks, potentially jeopardising a patient\u2019s safety.\n\n<strong>Question:</strong>\nEmmanuel is only a medical student and it may not be his place to step in.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 3,
    "explanation": "The correct answer is D. When something wrong is happening, anyone who is there to  \nwitness it should do something about it. There should not be a culture in a healthcare  \nenvironment whereby, due to a hierarchy of roles, people stay quiet and let abusive  \nsituations progress. Therefore, considering that he is \u201conly\u201d a medical student may  \nstop him from resolving this issue. As such, it is not important at all to consider.",
    "topic": "Situational Judgement"
  },
  {
    "id": 28,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nEmmanuel is a medical student on placement in a hospital. While seeing some patients, he  \nhears a quarrel and immediately runs to find out what is happening. He finds a nurse shouting  \nat one of the healthcare assistants. It appears that the healthcare assistant forgot to complete  \none of her tasks, potentially jeopardising a patient\u2019s safety.\n\n<strong>Question:</strong>\nPatients are listening to the quarrel.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 0,
    "explanation": "The correct answer is A. The main issues at hand are the poor leadership and  \nteamwork skills displayed. However, another major issue has presented in this  \nquestion \u2013 responsibility towards patients and the wider community. Such incidences  \nshould never occur in front of patients, as they can lead to patients losing confidence  \nand trust in the healthcare profession. If someone makes a mistake, they should be  \nadvised privately, rather than in front of patients. Thus, if Emmanuel considers that  \npatients are listening, it will urge him to act promptly to resolve the situation.",
    "topic": "Situational Judgement"
  },
  {
    "id": 29,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nEmmanuel is a medical student on placement in a hospital. While seeing some patients, he  \nhears a quarrel and immediately runs to find out what is happening. He finds a nurse shouting  \nat one of the healthcare assistants. It appears that the healthcare assistant forgot to complete  \none of her tasks, potentially jeopardising a patient\u2019s safety.\n\n<strong>Question:</strong>\nThe doctor had told the nurse to reprimand the healthcare assistant.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 3,
    "explanation": "The correct answer is D. The doctor has no right to make such a request. It is  \nappropriate to explain the errors made, but is not appropriate to shout. So, if  \nEmmanuel considers that the doctor requested this, he may think that the nurse is  \nallowed to shout at the healthcare assistant and therefore not take any action. Thus,  \n\nthis is not important at all to consider. The situation is wrong in and of itself, so the  \nreason for the shouting is not relevant.",
    "topic": "Situational Judgement"
  },
  {
    "id": 30,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nJosephine, a dental student, has just arrived at her morning tutorial. She gets a text message  \nfrom one of her friends, Cameron, asking her to sign him in to the session. She had seen his  \npictures on social media and knows he was out all night.\n\n<strong>Question:</strong>\nSign him in as he is probably hung over and it would not be appropriate for him to  \ncome to class in such a state.",
    "options": [
      "A very appropriate thing to do",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "A very inappropriate thing to do"
    ],
    "answer": 3,
    "explanation": "The correct answer is D. It is not appropriate of him to attend class hungover, but it is  \ncomplete unethical of Josephine to sign him in, regardless of his situation.",
    "topic": "Situational Judgement"
  },
  {
    "id": 31,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nJosephine, a dental student, has just arrived at her morning tutorial. She gets a text message  \nfrom one of her friends, Cameron, asking her to sign him in to the session. She had seen his  \npictures on social media and knows he was out all night.\n\n<strong>Question:</strong>\nIgnore his text message.",
    "options": [
      "A very appropriate thing to do",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "A very inappropriate thing to do"
    ],
    "answer": 2,
    "explanation": "The correct answer is C. By ignoring the situation, Josephine is not technically doing  \nanything wrong. However, she is doing nothing to resolve the problem, so this is not  \nan appropriate response. Further, if she simply ignores him, he may just ask someone  \nelse to sign him in. Therefore, it would be best to advise him of a solution to the  \nproblem.",
    "topic": "Situational Judgement"
  },
  {
    "id": 32,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nJosephine, a dental student, has just arrived at her morning tutorial. She gets a text message  \nfrom one of her friends, Cameron, asking her to sign him in to the session. She had seen his  \npictures on social media and knows he was out all night.\n\n<strong>Question:</strong>\nAdvise him that she cannot sign him in, but can take some notes and share them  \nwith him later.",
    "options": [
      "A very appropriate thing to do",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "A very inappropriate thing to do"
    ],
    "answer": 0,
    "explanation": "The correct answer is A. This is an honest and dignified approach, thus it is  \nappropriate. It also includes a helpful solution for Cameron, so it is an ideal response.",
    "topic": "Situational Judgement"
  },
  {
    "id": 33,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nJosephine, a dental student, has just arrived at her morning tutorial. She gets a text message  \nfrom one of her friends, Cameron, asking her to sign him in to the session. She had seen his  \npictures on social media and knows he was out all night.\n\n<strong>Question:</strong>\nShow the text message to the class tutor, as it is an unethical thing to do and  \nsomeone more senior should be made aware of it.",
    "options": [
      "A very appropriate thing to do",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "A very inappropriate thing to do"
    ],
    "answer": 3,
    "explanation": "The correct answer is D. It is unnecessary to escalate the situation without first  \nspeaking to Cameron. This level of escalation can severely impact her relationship with  \nher colleague, and it is always recommended to deal with matters internally before  \nescalating.",
    "topic": "Situational Judgement"
  },
  {
    "id": 34,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nColeen is a dental student who has just moved in with her friend, Charlotte, who is also a  \ndental student. They will soon be starting clinics with patients, and Coleen is concerned about  \nCharlotte. She has been expressing inappropriate ideas about the position of a dentist in  \nrelation to the patients that they treat. Coleen thinks that Charlotte has been negatively  \ninfluenced by a television series that she has been watching.\n\n<strong>Question:</strong>\nThe impact that Charlotte\u2019s behaviour might have on patients that she sees in her  \nclinics.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 0,
    "explanation": "The correct answer is A. It is always essential to consider patient safety. Patients are  \nalways a top priority, and to  not  consider patients is wrong. If Coleen considers this, it  \nwill help her to take necessary actions to prevent any harm from occurring to patients.",
    "topic": "Situational Judgement"
  },
  {
    "id": 35,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nAdam is a third-year medical student on placement in a respiratory department. It is his first  \nday, so his supervisor has asked him to have a quick 15-minute meeting after his morning  \nsession. As he is leaving the ward to attend his meeting, he sees a large pool of blood on the  \nfloor.\n\n<strong>Question:</strong>\nHis supervisor is likely to find him very unprofessional for being late.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 2,
    "explanation": "The correct answer is C. The main concern here is patient safety. This pool of blood  \ncan be contaminated and pose a risk to himself, to patients, and to other staff  \nmembers. This is the primary issue that needs to be dealt with, so considering the  \nimpact of his unpunctuality will not help solve this. However, considering this can help  \nhim to deal with the minor problem of professionalism. As such, if he considers this,  \nhe can try to contact his supervisor to explain the situation.",
    "topic": "Situational Judgement"
  },
  {
    "id": 36,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nAdam is a third-year medical student on placement in a respiratory department. It is his first  \nday, so his supervisor has asked him to have a quick 15-minute meeting after his morning  \nsession. As he is leaving the ward to attend his meeting, he sees a large pool of blood on the  \nfloor.\n\n<strong>Question:</strong>\nThe blood may be infectious.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 0,
    "explanation": "The correct answer is A. Patient safety is the main priority. Considering the possibility  \nof contamination or infection will help Adam to respond urgently and effectively.  \nAnything that is infectious needs to be dealt with in an appropriate manner in order  \nto remove all traces of contaminants, thus, this is vital to consider.",
    "topic": "Situational Judgement"
  },
  {
    "id": 37,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nAdam is a third-year medical student on placement in a respiratory department. It is his first  \nday, so his supervisor has asked him to have a quick 15-minute meeting after his morning  \nsession. As he is leaving the ward to attend his meeting, he sees a large pool of blood on the  \nfloor.\n\n<strong>Question:</strong>\nA patient may be actively bleeding.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 0,
    "explanation": "The correct answer is A. Again, patient safety is the main priority. If there is a patient  \nwho may be in danger, this needs to be dealt with immediately. As such, it is very  \nimportant to consider this in order to locate the patient or the source of the blood. If  \n\nthis is not considered, the main concern of patient safety may not be dealt with  \nappropriately.",
    "topic": "Situational Judgement"
  },
  {
    "id": 38,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nAdam is a third-year medical student on placement in a respiratory department. It is his first  \nday, so his supervisor has asked him to have a quick 15-minute meeting after his morning  \nsession. As he is leaving the ward to attend his meeting, he sees a large pool of blood on the  \nfloor.\n\n<strong>Question:</strong>\nHe is unaware of the protocol for safely disposing of potentially infectious fluids.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 0,
    "explanation": "The correct answer is A. Infectious material poses a risk of harm to anyone in contact.  \nTherefore, it is vital that it is disposed of properly. Adam must consider this in order  \nto make an appropriate decision about what to do. He can help clean the blood, but  \nhe needs to be aware of his limitations in order to seek guidance from someone who  \nis more aware of the protocol. If he does not consider the limitations to his knowledge,  \nhe may clean it in an inappropriate manner, thus maintaining the risk to patients.",
    "topic": "Situational Judgement"
  },
  {
    "id": 39,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nAdam is a third-year medical student on placement in a respiratory department. It is his first  \nday, so his supervisor has asked him to have a quick 15-minute meeting after his morning  \nsession. As he is leaving the ward to attend his meeting, he sees a large pool of blood on the  \nfloor.\n\n<strong>Question:</strong>\nSomeone else has probably already seen the blood and is planning to deal with it.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 3,
    "explanation": "The correct answer is D. Workplace safety is everybody\u2019s responsibility. He cannot  \nmake the assumption that someone is already dealing with it, nor can he base his  \nactions on this assumption. There does not appear to be anyone there dealing with it,  \nthus, he should not consider this when deciding how to act. If he happens to consider  \nthis, it may prevent him from taking urgent action, thus increasing the risk to patients  \nand other staff members.",
    "topic": "Situational Judgement"
  },
  {
    "id": 40,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nHenry, a medical student, is on placement in a cardiology ward. He is going through patient  \nnotes and prescription charts to learn of different medications that are prescribed on the  \nward. He notices that Mr Xiu\u2019s notes declare that he is allergic to a specific medication. Upon  \nchecking his prescription chart, Henry notices that Mr Xiu had been prescribed the medication  \nhe is allergic to earlier this morning. The doctor who wrote the prescription is nowhere in  \nsight.\n\n<strong>Question:</strong>\nSpend time trying to locate the doctor responsible for writing the prescription.",
    "options": [
      "A very appropriate thing to do",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "A very inappropriate thing to do"
    ],
    "answer": 3,
    "explanation": "The correct answer is D. The threat to patient safety should be urgent and immediate.   \nTherefore, after knowing that the doctor is nowhere in sight, it would be very  \ninappropriate to spend time looking for the doctor. In this time, someone may give Mr  \nXiu the medication, resulting in him having an allergic reaction. This action would  \nincrease the risk to the patient, thus is very inappropriate.",
    "topic": "Situational Judgement"
  },
  {
    "id": 41,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nHenry, a medical student, is on placement in a cardiology ward. He is going through patient  \nnotes and prescription charts to learn of different medications that are prescribed on the  \nward. He notices that Mr Xiu\u2019s notes declare that he is allergic to a specific medication. Upon  \nchecking his prescription chart, Henry notices that Mr Xiu had been prescribed the medication  \nhe is allergic to earlier this morning. The doctor who wrote the prescription is nowhere in  \nsight.\n\n<strong>Question:</strong>\nCross out the prescription so no one uses it.",
    "options": [
      "A very appropriate thing to do",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "A very inappropriate thing to do"
    ],
    "answer": 3,
    "explanation": "The correct answer is D. As a medical student, Henry is not qualified to change a  \nprescription. Although patient safety is at risk, he must not do anything outside the  \nscope of his limitations. Rules and limitations are set to ensure patient safety, so it is  \nnot appropriate to break them in an attempt to maintain patient safety.",
    "topic": "Situational Judgement"
  },
  {
    "id": 42,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nHenry, a medical student, is on placement in a cardiology ward. He is going through patient  \nnotes and prescription charts to learn of different medications that are prescribed on the  \nward. He notices that Mr Xiu\u2019s notes declare that he is allergic to a specific medication. Upon  \nchecking his prescription chart, Henry notices that Mr Xiu had been prescribed the medication  \nhe is allergic to earlier this morning. The doctor who wrote the prescription is nowhere in  \nsight.\n\n<strong>Question:</strong>\nUrgently inform the first doctor or nurse in sight.",
    "options": [
      "A very appropriate thing to do",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "A very inappropriate thing to do"
    ],
    "answer": 0,
    "explanation": "The correct answer is A. This is the appropriate measure in this scenario as Henry will  \ndeal with the problem in a time-sensitive manner and successfully resolve his  \nconcerns. Nurses are responsible for administering medications, so informing a nurse  \nwill be useful to ensure that the medication is not administered. If a doctor is found,  \nthey will communicate this to the nurse in charge of the patient, and if a nurse is  \nfound, they will communicate this to the doctor in charge of the patient. Healthcare  \nis a team effort, and in this scenario regarding patient safety, informing either a doctor  \nor nurse would be useful in beginning to resolve the problem. Although it would be  \nideal for the doctor who wrote the prescription to check it, the scenario has made it  \nclear that he is not available.",
    "topic": "Situational Judgement"
  },
  {
    "id": 43,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nLola is a first-year medical student and is about to go into the operating theatre for the first  \ntime. She is extremely excited, and tells her partner, Daniel, that she can\u2019t wait. Daniel  \nappears a bit nervous. During the surgery, there is a lot of blood, and Lola notices Daniel  \nbecoming very pale.   \n  \nChoose  both  the  one most appropriate action  and the  one least appropriate action  that  Lola   \nshould take in response to this situation.  \n  \nYou will not receive any marks for this question unless you select  both  the most and least  \nappropriate actions.\n\n<strong>Question:</strong>\n\n\nChoose the <strong>MOST appropriate</strong> action in this situation.",
    "options": [
      "Immediately inform the surgeon conducting the operation so he can help Lola to  \ndeal with this.",
      "Immediately take Daniel out of the operating room without telling anyone, as it  \nmay disrupt the operation.",
      "Take Daniel to the side and sit him down, informing one of the other staff members  \nwhat has happened."
    ],
    "answer": 2,
    "explanation": "A is the least appropriate, as Lola should not disrupt the surgeon conducting the  \noperation. This may cause him to make a mistake and potentially risk patient safety.  \nB is slightly appropriate, but it is unprofessional to leave the room without telling  \nanyone. Therefore, C is the best option, as it deals with the issue at hand, and  \nmaintains professionalism. It is important to inform one of the staff members who is  \nnot currently conducting the operation so they can help deal with the matter. They  \nlikely have a lot of experience with students feeling faint in operations, so they can  \noffer their help and advice.",
    "topic": "Situational Judgement"
  },
  {
    "id": 44,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nLola is a first-year medical student and is about to go into the operating theatre for the first  \ntime. She is extremely excited, and tells her partner, Daniel, that she can\u2019t wait. Daniel  \nappears a bit nervous. During the surgery, there is a lot of blood, and Lola notices Daniel  \nbecoming very pale.   \n  \nChoose  both  the  one most appropriate action  and the  one least appropriate action  that  Lola   \nshould take in response to this situation.  \n  \nYou will not receive any marks for this question unless you select  both  the most and least  \nappropriate actions.\n\n<strong>Question:</strong>\n\n\nChoose the <strong>LEAST appropriate</strong> action in this situation.",
    "options": [
      "Immediately inform the surgeon conducting the operation so he can help Lola to  \ndeal with this.",
      "Immediately take Daniel out of the operating room without telling anyone, as it  \nmay disrupt the operation.",
      "Take Daniel to the side and sit him down, informing one of the other staff members  \nwhat has happened."
    ],
    "answer": 0,
    "explanation": "A is the least appropriate, as Lola should not disrupt the surgeon conducting the  \noperation. This may cause him to make a mistake and potentially risk patient safety.  \nB is slightly appropriate, but it is unprofessional to leave the room without telling  \nanyone. Therefore, C is the best option, as it deals with the issue at hand, and  \nmaintains professionalism. It is important to inform one of the staff members who is  \nnot currently conducting the operation so they can help deal with the matter. They  \nlikely have a lot of experience with students feeling faint in operations, so they can  \noffer their help and advice.",
    "topic": "Situational Judgement"
  },
  {
    "id": 45,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nNatalia, a dental student, is enjoying some lunch with her colleagues in a busy canteen. Some  \nof them start to make jokes about \u201cthe role of a woman\u201d and \u201cfeminists\u201d. She starts to feel  \nextremely uncomfortable as she finds their comments very offensive.\n\n<strong>Question:</strong>\nOthers may also be feeling uncomfortable.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 0,
    "explanation": "The correct answer is A. It is important to consider that others may also find this  \noffensive and may be feeling uncomfortable. If she considers this, it will help her  \nresolve the matter in a way that is suitable for everybody. If she does not consider  \nthis, she may only take into account her own feelings and therefore not resolve the  \nmatter in the most appropriate way. The feelings of others are paramount and should  \nalways hold importance.",
    "topic": "Situational Judgement"
  },
  {
    "id": 46,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nNatalia, a dental student, is enjoying some lunch with her colleagues in a busy canteen. Some  \nof them start to make jokes about \u201cthe role of a woman\u201d and \u201cfeminists\u201d. She starts to feel  \nextremely uncomfortable as she finds their comments very offensive.\n\n<strong>Question:</strong>\nThe people making the remarks are her colleagues.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 2,
    "explanation": "The correct answer is C. The main problem is the fact that they are making offensive  \nremarks. Their positions do not give them any special privileges to be offensive.  \nTherefore, considering this will not help solve the main problem. However, it is of  \nminor importance as it is important to maintain good relationships with colleagues,  \nthus she should deal with it in an appropriate and professional way.",
    "topic": "Situational Judgement"
  },
  {
    "id": 47,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nNatalia, a dental student, is enjoying some lunch with her colleagues in a busy canteen. Some  \nof them start to make jokes about \u201cthe role of a woman\u201d and \u201cfeminists\u201d. She starts to feel  \nextremely uncomfortable as she finds their comments very offensive.\n\n<strong>Question:</strong>\nPeople in the canteen may overhear the jokes.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 0,
    "explanation": "The correct answer is A. If she finds the jokes offensive, anyone overhearing them may  \nalso find them offensive. Moreover, this can shed negative light on dental students  \nand on the profession. If she considers this, she may take more urgent action to  \nresolve the issue.",
    "topic": "Situational Judgement"
  },
  {
    "id": 48,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nNatalia, a dental student, is enjoying some lunch with her colleagues in a busy canteen. Some  \nof them start to make jokes about \u201cthe role of a woman\u201d and \u201cfeminists\u201d. She starts to feel  \nextremely uncomfortable as she finds their comments very offensive.\n\n<strong>Question:</strong>\nShe is a dental student.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 0,
    "explanation": "The correct answer is A. It is essential to maintain professionalism at all times,  \nregardless of whether Natalia is on the job, at university, or in a completely different  \nenvironment. Therefore, when associating with a group making offensive jokes, she  \nshould remember her position as a dental student and her responsibility of  \nprofessionalism. This will help her to solve the matter at hand, and to act in the most  \nprofessional way possible.",
    "topic": "Situational Judgement"
  },
  {
    "id": 49,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nDr Jerome, a dentist, is at the cinema with her children. A patient of hers, Mrs Phillips, finds  \nher in the queue for tickets. Mrs Phillips asks how Hannah, her friend\u2019s daughter, is doing  \nafter her wisdom teeth removal. Mrs Phillips is close with Hannah\u2019s family who are also  \npatients at Dr Jerome\u2019s practice.\n\n<strong>Question:</strong>\nThat Hannah is doing well.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 3,
    "explanation": "The correct answer is D. The outcomes of the surgery have no impact on whether her  \nprivate information should be released to a third party or not. Considering this may  \nactually cause harm, as it could lead Dr Jerome to making a passive remark such as  \n\u201cShe\u2019s doing well!\u201d which may seem harmless but is still a breach of confidentiality.",
    "topic": "Situational Judgement"
  },
  {
    "id": 50,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nDr Jerome, a dentist, is at the cinema with her children. A patient of hers, Mrs Phillips, finds  \nher in the queue for tickets. Mrs Phillips asks how Hannah, her friend\u2019s daughter, is doing  \nafter her wisdom teeth removal. Mrs Phillips is close with Hannah\u2019s family who are also  \npatients at Dr Jerome\u2019s practice.\n\n<strong>Question:</strong>\nShe knows that Mrs Phillips is very close with Hannah\u2019s family.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 3,
    "explanation": "The correct answer is D. Hannah\u2019s confidentiality is not any less important in the  \npresence of a family friend. It is vital to maintain patient confidentiality at all times.  \nConsidering this may lead to a more relaxed approach, and Dr Jerome may happen to  \ncasually mention details that she should not. Therefore, this should not even be  \nconsidered.",
    "topic": "Situational Judgement"
  },
  {
    "id": 51,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nDr Jerome, a dentist, is at the cinema with her children. A patient of hers, Mrs Phillips, finds  \nher in the queue for tickets. Mrs Phillips asks how Hannah, her friend\u2019s daughter, is doing  \nafter her wisdom teeth removal. Mrs Phillips is close with Hannah\u2019s family who are also  \npatients at Dr Jerome\u2019s practice.\n\n<strong>Question:</strong>\nHannah is not present during this encounter.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 2,
    "explanation": "The correct answer is C. The main problem is patient confidentiality. Regardless of  \nwhether or not Hannah is present, Dr Jerome must maintain patient confidentiality.  \nConsidering her presence will not help her resolve this problem, nor will it hinder the  \nresolution. If Hannah was present, she may be able to give consent to discuss her, but  \nher absence has no impact on confidentiality.  Therefore, this is of minor importance.",
    "topic": "Situational Judgement"
  },
  {
    "id": 52,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nSally, a dental student, is working on a group project. Aiman is visibly frustrated at one of the  \nother group members, Linda. Aiman begins to use harsh language and insults the quality of  \nLinda\u2019s work. Sally notices that this seems to have upset Linda, who remains quiet.\n\n<strong>Question:</strong>\nImmediately demand that Aiman apologises for insulting Linda.",
    "options": [
      "A very appropriate thing to do",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "A very inappropriate thing to do"
    ],
    "answer": 3,
    "explanation": "The correct answer is D. The language used is harsh. By \u201cdemanding\u201d that she  \napologise, Sally would appear unreasonable and would be making the situation worse.",
    "topic": "Situational Judgement"
  },
  {
    "id": 53,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nSally, a dental student, is working on a group project. Aiman is visibly frustrated at one of the  \nother group members, Linda. Aiman begins to use harsh language and insults the quality of  \nLinda\u2019s work. Sally notices that this seems to have upset Linda, who remains quiet.\n\n<strong>Question:</strong>\nTalk to Aiman privately afterwards to discuss what had happened.",
    "options": [
      "A very appropriate thing to do",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "A very inappropriate thing to do"
    ],
    "answer": 0,
    "explanation": "The correct answer is A. This is an ideal approach as it is empathetic rather than  \nblaming Aiman for her actions. It allows a calm environment to discuss the situation,  \nand is a better form of conflict resolution than confronting or teaming up against a  \ncertain individual who appears to be in the wrong.",
    "topic": "Situational Judgement"
  },
  {
    "id": 54,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nSally, a dental student, is working on a group project. Aiman is visibly frustrated at one of the  \nother group members, Linda. Aiman begins to use harsh language and insults the quality of  \nLinda\u2019s work. Sally notices that this seems to have upset Linda, who remains quiet.\n\n<strong>Question:</strong>\nReport Aiman\u2019s behaviour to the group supervisor as he is likely to help resolve the  \nissue.",
    "options": [
      "A very appropriate thing to do",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "A very inappropriate thing to do"
    ],
    "answer": 3,
    "explanation": "The correct answer is D. It is not appropriate to escalate the situation prior to dealing  \nwith it internally. There are steps to escalation that should be followed.",
    "topic": "Situational Judgement"
  },
  {
    "id": 55,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nCandice is a medical student on placement in a busy GP surgery. A patient comes in with a  \nlong list of problems and wants to discuss each of them in-depth with Dr Sheffield. There are  \nmany other patients waiting, so Candice is concerned that he is allowing too much time for  \nthis patient.\n\n<strong>Question:</strong>\nInterrupt the consultation to remind Dr Sheffield that other patients are waiting.",
    "options": [
      "A very appropriate thing to do",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "A very inappropriate thing to do"
    ],
    "answer": 2,
    "explanation": "The correct answer is C. It is not appropriate to interrupt the consultation, or to give  \nthe doctor such advice in front of the patient. Both parties may find this disrespectful,  \nand it may undermine the patient\u2019s trust in the doctor. However, nothing directly  \noffensive is said about the patient, and this action is attempting to deal with the issue,  \nso it is not entirely inappropriate.",
    "topic": "Situational Judgement"
  },
  {
    "id": 56,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nCandice is a medical student on placement in a busy GP surgery. A patient comes in with a  \nlong list of problems and wants to discuss each of them in-depth with Dr Sheffield. There are  \nmany other patients waiting, so Candice is concerned that he is allowing too much time for  \nthis patient.\n\n<strong>Question:</strong>\nDo nothing as there are other doctors in the surgery that can see the other patients.",
    "options": [
      "A very appropriate thing to do",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "A very inappropriate thing to do"
    ],
    "answer": 2,
    "explanation": "The correct answer is C. It is not appropriate to relay responsibilities to others, as each  \nindividual should take responsibility for patients. However, it is true that there are  \nother doctors, and sometimes it is important to give extra time to specific patients.  \nTherefore, this is inappropriate, but not awful.",
    "topic": "Situational Judgement"
  },
  {
    "id": 57,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nCandice is a medical student on placement in a busy GP surgery. A patient comes in with a  \nlong list of problems and wants to discuss each of them in-depth with Dr Sheffield. There are  \nmany other patients waiting, so Candice is concerned that he is allowing too much time for  \nthis patient.\n\n<strong>Question:</strong>\nInterrupt the consultation and ask the patient to leave, as there are other patients  \nwho need to be seen.",
    "options": [
      "A very appropriate thing to do",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "A very inappropriate thing to do"
    ],
    "answer": 3,
    "explanation": "The correct answer is D. Candice is a medical student and should not interrupt the  \nconsultation, nor should she be the one to determine that the consultation is over and  \nthe patient should leave. It is inappropriate to step outside of her limits. Each patient  \nshould be prioritised, and oftentimes, doctors need to give slightly more time to  \nspecific patients. Sometimes, patients need to wait a bit longer for their appointments  \nin busy clinics. They should still get their full appointment time in an unrushed manner.  \nThere is no indication to suggest that Dr Sheffield is giving this patient time at the  \nexpense of other patients\u2019 time.",
    "topic": "Situational Judgement"
  },
  {
    "id": 58,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nAlex is a medical student on his clinical placement. While he is taking a history from one of  \nthe patients on a bay, he hears another patient start to choke. A nurse immediately rushes to  \nthe patient and starts to perform the necessary manoeuvres. Alex has been trained on dealing  \nwith choking, and feels that the nurse is performing the manoeuvres inadequately.\n\n<strong>Question:</strong>\nChoking is very dangerous.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 0,
    "explanation": "The correct answer is A. Patient safety is a primary concern at all times, and therefore  \nis very important. He must consider this and act urgently.",
    "topic": "Situational Judgement"
  },
  {
    "id": 59,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nAlex is a medical student on his clinical placement. While he is taking a history from one of  \nthe patients on a bay, he hears another patient start to choke. A nurse immediately rushes to  \nthe patient and starts to perform the necessary manoeuvres. Alex has been trained on dealing  \nwith choking, and feels that the nurse is performing the manoeuvres inadequately.\n\n<strong>Question:</strong>\nShe is just a nurse and might not know what she is doing.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 3,
    "explanation": "The correct answer is D. The problem at hand is patient safety. Regardless of her  \nqualifications, Alex needs to act urgently for the sake of the patient. Perhaps she has  \nmade a mistake, or is newly qualified and has not had much practice. Regardless, it is  \ninappropriate to undermine other healthcare professionals. Nurses are trained in life  \nsupport, and should be very well-versed in dealing with choking. Thus, this is not  \nsomething to consider.",
    "topic": "Situational Judgement"
  },
  {
    "id": 60,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nAlex is a medical student on his clinical placement. While he is taking a history from one of  \nthe patients on a bay, he hears another patient start to choke. A nurse immediately rushes to  \nthe patient and starts to perform the necessary manoeuvres. Alex has been trained on dealing  \nwith choking, and feels that the nurse is performing the manoeuvres inadequately.\n\n<strong>Question:</strong>\nThe nurse is more qualified than Alex and probably knows what she is doing.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 3,
    "explanation": "The correct answer is D. Alex needs to respond immediately to the threat to patient  \nsafety. If he suspects there is danger, he should not let the idea that the nurse is more  \nqualified than him get in the way of acting. Therefore, this should not be considered.",
    "topic": "Situational Judgement"
  },
  {
    "id": 61,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nAlex is a medical student on his clinical placement. While he is taking a history from one of  \nthe patients on a bay, he hears another patient start to choke. A nurse immediately rushes to  \nthe patient and starts to perform the necessary manoeuvres. Alex has been trained on dealing  \nwith choking, and feels that the nurse is performing the manoeuvres inadequately.\n\n<strong>Question:</strong>\nAlex feels very confident in his ability to deal with a choking patient.",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 0,
    "explanation": "The correct answer is A. If he considers his confidence, he may be able to step in and  \nhelp out. Most importantly, he will be able to identify that the manoeuvres are not  \nbeing performed correctly, and act urgently to address the patient safety concern. If  \nhe does not recognise his own knowledge of choking, he may lack confidence and not  \nact promptly.",
    "topic": "Situational Judgement"
  },
  {
    "id": 62,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nPeter and Beth are both junior doctors working in the emergency department. Peter  \nmistakenly uses the incorrect pronoun for a patient after the patient had advised him of their  \npreferences.   \n\nChoose  both  the  one most appropriate action  and the  one least appropriate action  that  Beth   \nshould take in response to this situation.  \n  \nYou will not receive any marks for this question unless you select  both  the most and least  \nappropriate actions.\n\n<strong>Question:</strong>\n\n\nChoose the <strong>MOST appropriate</strong> action in this situation.",
    "options": [
      "Quickly apologise on Peter\u2019s behalf to deescalate the situation.",
      "Do nothing as Peter should deal with his own mistakes.",
      "Explain to the patient that Peter is not required to call patients by their preferred  \npronouns."
    ],
    "answer": 0,
    "explanation": "Although it is not ideal to apologise on behalf of someone else, this is the best option  \nout of the three as it can help to deescalate the situation. Doing nothing can cause the  \npatient to proceed with further complaints. The last option is completely  \ninappropriate, as patients\u2019 wishes should be respected.",
    "topic": "Situational Judgement"
  },
  {
    "id": 63,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nPeter and Beth are both junior doctors working in the emergency department. Peter  \nmistakenly uses the incorrect pronoun for a patient after the patient had advised him of their  \npreferences.   \n\nChoose  both  the  one most appropriate action  and the  one least appropriate action  that  Beth   \nshould take in response to this situation.  \n  \nYou will not receive any marks for this question unless you select  both  the most and least  \nappropriate actions.\n\n<strong>Question:</strong>\n\n\nChoose the <strong>LEAST appropriate</strong> action in this situation.",
    "options": [
      "Quickly apologise on Peter\u2019s behalf to deescalate the situation.",
      "Do nothing as Peter should deal with his own mistakes.",
      "Explain to the patient that Peter is not required to call patients by their preferred  \npronouns."
    ],
    "answer": 2,
    "explanation": "Although it is not ideal to apologise on behalf of someone else, this is the best option  \nout of the three as it can help to deescalate the situation. Doing nothing can cause the  \npatient to proceed with further complaints. The last option is completely  \ninappropriate, as patients\u2019 wishes should be respected.",
    "topic": "Situational Judgement"
  },
  {
    "id": 64,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nSidney, a dental student, notices that her friend, Rhiannon, has been very quiet lately. She  \ndecides to check on her, and Rhiannon confesses that she has been having very negative and  \ndepressed thoughts.\n\n<strong>Question:</strong>\nRemind her that her exams are coming up, so it would be best to try to resolve any  \nissues she is having immediately.",
    "options": [
      "A very appropriate thing to do",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "A very inappropriate thing to do"
    ],
    "answer": 2,
    "explanation": "The correct answer is C. The main priority is Rhiannon\u2019s mental wellbeing. Sidney  \nshould act with empathy. Exams are of minor concern in this situation, however, they  \nare not entirely inappropriate to mention as this shows some level of concern that  \nSidney has for her friend.",
    "topic": "Situational Judgement"
  },
  {
    "id": 65,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nSidney, a dental student, notices that her friend, Rhiannon, has been very quiet lately. She  \ndecides to check on her, and Rhiannon confesses that she has been having very negative and  \ndepressed thoughts.\n\n<strong>Question:</strong>\nAsk her if she wants to talk about what has been going on.",
    "options": [
      "A very appropriate thing to do",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "A very inappropriate thing to do"
    ],
    "answer": 0,
    "explanation": "The correct answer is A. Rhiannon has confided in Sidney, and it appears that she  \nwould like her help. Sidney has already noticed that Rhiannon has been reserved, so  \nit would be appropriate to help her where possible. Talking about things can be helpful  \nfor a lot of people, especially with a trustworthy friend. This is an empathetic response  \nthat Rhiannon was likely hoping for.",
    "topic": "Situational Judgement"
  },
  {
    "id": 66,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nSidney, a dental student, notices that her friend, Rhiannon, has been very quiet lately. She  \ndecides to check on her, and Rhiannon confesses that she has been having very negative and  \ndepressed thoughts.\n\n<strong>Question:</strong>\nAdvise her to visit her GP, as they can be helpful in dealing with depression.",
    "options": [
      "A very appropriate thing to do",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "A very inappropriate thing to do"
    ],
    "answer": 0,
    "explanation": "The correct answer is A. Although this does not show immediate empathy and help  \nfrom Sidney, it provides a practical and longer-term solution, so is highly appropriate.  \nIf someone is depressed, they should seek help, and oftentimes just talking to a friend  \nis not enough. Remember, this does not have to be the only response in order to be  \n\u201cvery appropriate\u201d. Sidney can advise her to visit the GP  and  also do everything she  \ncan to help out.",
    "topic": "Situational Judgement"
  },
  {
    "id": 67,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nSidney, a dental student, notices that her friend, Rhiannon, has been very quiet lately. She  \ndecides to check on her, and Rhiannon confesses that she has been having very negative and  \ndepressed thoughts.\n\n<strong>Question:</strong>\nInform the university of this, as they should be aware of the mental health of their  \nstudents.",
    "options": [
      "A very appropriate thing to do",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "A very inappropriate thing to do"
    ],
    "answer": 3,
    "explanation": "The correct answer is D. There is no evidence of immediate threat to Rhiannon, such  \nas mention of suicidal thoughts. Therefore, there is no justification for breaking her  \nconfidentiality and informing the school of her situation.",
    "topic": "Situational Judgement"
  },
  {
    "id": 68,
    "passageId": null,
    "text": "<strong>Scenario:</strong>\nSidney, a dental student, notices that her friend, Rhiannon, has been very quiet lately. She  \ndecides to check on her, and Rhiannon confesses that she has been having very negative and  \ndepressed thoughts.\n\n<strong>Question:</strong>\nAdvise Rhiannon to inform the university, as they can help her if they are aware of  \nher situation.",
    "options": [
      "A very appropriate thing to do",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "A very inappropriate thing to do"
    ],
    "answer": 0,
    "explanation": "The correct answer is A. It is important for students to contact their supervisor or  \nuniversity to inform them of personal circumstances that may be impacting their  \nability to attend classes, placement, or to see patients. Informing the university gives  \nthem the opportunity to provide support to the student. Therefore, this is very  \nappropriate as it provides a practical solution.",
    "topic": "Situational Judgement"
  }
];
