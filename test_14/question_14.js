const PASSAGES = {};

const QUESTIONS = [
  {
    "id": 1,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Adam is a second-year medical student who must attend anatomy and dissection classes as  part of his preclinical training. During his first session he felt very queasy, but manages to make it  through the class without vomiting. He is thus very nervous about his second session. He decides  to attend; however, before even starting the dissection, he began to feel very sick. His friend, Bella,  says that he looks very pale.<br><br><strong>Question:</strong><br>Tell Bella he feels sick, ask her to inform the tutor, and leave the class",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 2,
    "explanation": "Telling a peer would allow Adam to leave without disrupting the class, so it is not an awful response.  However, leaving the classroom without planning to catch up on what will be missed means Adam will  miss part of his training. Thus, this response is inappropriate.",
    "topic": "Situational Judgement"
  },
  {
    "id": 2,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Adam is a second-year medical student who must attend anatomy and dissection classes as  part of his preclinical training. During his first session he felt very queasy, but manages to make it  through the class without vomiting. He is thus very nervous about his second session. He decides  to attend; however, before even starting the dissection, he began to feel very sick. His friend, Bella,  says that he looks very pale.<br><br><strong>Question:</strong><br>Walk out immediately so as not to disrupt his peers and avoid being sick in the classroom",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 2,
    "explanation": "Walking out of the classroom is not an appropriate course of action if Adam is beginning to feel sick. He  needs to inform someone, before simply leaving for what may appear to be no good reason. However,  Adam does feel sick, so this response is not awful.",
    "topic": "Situational Judgement"
  },
  {
    "id": 3,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Adam is a second-year medical student who must attend anatomy and dissection classes as  part of his preclinical training. During his first session he felt very queasy, but manages to make it  through the class without vomiting. He is thus very nervous about his second session. He decides  to attend; however, before even starting the dissection, he began to feel very sick. His friend, Bella,  says that he looks very pale.<br><br><strong>Question:</strong><br>Tell the instructor he feels unwell, leave the class and catch up on what has been missed later",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 0,
    "explanation": "This option provides an excellent response to the immediate problem, since Adam would be informing  the instructor that he feels sick before leaving the class and would be making up what has been missed  later.",
    "topic": "Situational Judgement"
  },
  {
    "id": 4,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Adam is a second-year medical student who must attend anatomy and dissection classes as  part of his preclinical training. During his first session he felt very queasy, but manages to make it  through the class without vomiting. He is thus very nervous about his second session. He decides  to attend; however, before even starting the dissection, he began to feel very sick. His friend, Bella,  says that he looks very pale.<br><br><strong>Question:</strong><br>Finish this session, and in future pretend to be ill during anatomy sessions",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 3,
    "explanation": "Being dishonest is an inappropriate course of action in any context. This option also demonstrates Adam  would not be admitting his need for help, which may have further consequences for his training and for  becoming a good doctor. This is therefore highly inappropriate.",
    "topic": "Situational Judgement"
  },
  {
    "id": 5,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Umar is a junior doctor working on a busy hospital ward. He enters the supply cupboard, turns  on the light and discovers another junior doctor, Darryl, sat on the floor, crying and drinking from  a bottle of whisky. Darryl says that his wife has just left him for another man, and there is no point  in going on.<br><br><strong>Question:</strong><br>Ask Darryl if he would like to chat about what is going on",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 0,
    "explanation": "This response is neutral and supportive, and is thus highly appropriate.",
    "topic": "Situational Judgement"
  },
  {
    "id": 6,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Umar is a junior doctor working on a busy hospital ward. He enters the supply cupboard, turns  on the light and discovers another junior doctor, Darryl, sat on the floor, crying and drinking from  a bottle of whisky. Darryl says that his wife has just left him for another man, and there is no point  in going on.<br><br><strong>Question:</strong><br>Ask Darryl if he is seeing patients today",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 0,
    "explanation": "This response addresses one of the underlying issues: Darryl is not in a fit state to encounter patients at  the hospital. As such, the response is very appropriate.",
    "topic": "Situational Judgement"
  },
  {
    "id": 7,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Umar is a junior doctor working on a busy hospital ward. He enters the supply cupboard, turns  on the light and discovers another junior doctor, Darryl, sat on the floor, crying and drinking from  a bottle of whisky. Darryl says that his wife has just left him for another man, and there is no point  in going on.<br><br><strong>Question:</strong><br>Contact the hospital anonymously through their website to report that a doctor has a drinking problem",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 3,
    "explanation": "This is a highly inappropriate response, as it is not a local solution, and also because it is not likely that  anonymous complaint that does not specify which doctor has a drinking problem would lead to any help  for Darryl.",
    "topic": "Situational Judgement"
  },
  {
    "id": 8,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Umar is a junior doctor working on a busy hospital ward. He enters the supply cupboard, turns  on the light and discovers another junior doctor, Darryl, sat on the floor, crying and drinking from  a bottle of whisky. Darryl says that his wife has just left him for another man, and there is no point  in going on.<br><br><strong>Question:</strong><br>Encourage Darryl to let his consultant know that he is having a hard time",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 0,
    "explanation": "Darryl may require additional support as he gets his professional and personal life in order, so it would  be very appropriate to encourage him to discuss matters with his consultant.",
    "topic": "Situational Judgement"
  },
  {
    "id": 9,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Saba is a junior doctor on the surgical ward. She is well liked by the patients, who say she is always  friendly and cheerful. One morning Saba receives a message from a social networking site from a  man who she recognises as being a former patient. The patient has requested to add Saba as a  contact on the social networking site; Saba can accept, deny or ignore his request.<br><br><strong>Question:</strong><br>Report the patient to the police",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 3,
    "explanation": "This is an extreme response, given that the message is not threatening or harmful in any way; thus, involv- ing the police would be highly inappropriate. The police would only need to be involved if the patient  persistently tries to contact Saba.",
    "topic": "Situational Judgement"
  },
  {
    "id": 10,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Saba is a junior doctor on the surgical ward. She is well liked by the patients, who say she is always  friendly and cheerful. One morning Saba receives a message from a social networking site from a  man who she recognises as being a former patient. The patient has requested to add Saba as a  contact on the social networking site; Saba can accept, deny or ignore his request.<br><br><strong>Question:</strong><br>Deny the man's request",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 2,
    "explanation": "This is an inappropriate option, as it could come across as rude and might be awkward if the patient were  to be re-admitted to her ward. However, it is not awful, since doctors should not socialise with patients.  The better response would be to ignore the request, rather than denying it.",
    "topic": "Situational Judgement"
  },
  {
    "id": 11,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Saba is a junior doctor on the surgical ward. She is well liked by the patients, who say she is always  friendly and cheerful. One morning Saba receives a message from a social networking site from a  man who she recognises as being a former patient. The patient has requested to add Saba as a  contact on the social networking site; Saba can accept, deny or ignore his request.<br><br><strong>Question:</strong><br>Accept the man's request temporarily, so that she can email him to explain why they cannot socialise",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 3,
    "explanation": "This is a very inappropriate response, as it is unprofessional for Saba to socialise with a patient. Accepting  the request in order to explain why she cannot socialise would send the patient a mixed message, and  would also begin a conversation on the social networking site, which could lead to serious professional  consequences for Saba, despite her best intentions.",
    "topic": "Situational Judgement"
  },
  {
    "id": 12,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Saba is a junior doctor on the surgical ward. She is well liked by the patients, who say she is always  friendly and cheerful. One morning Saba receives a message from a social networking site from a  man who she recognises as being a former patient. The patient has requested to add Saba as a  contact on the social networking site; Saba can accept, deny or ignore his request.<br><br><strong>Question:</strong><br>Ignore the man's request",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 0,
    "explanation": "This would be a highly appropriate response, since it will not escalate the situation further, and it will  ensure that Saba does not engage in any inappropriate social contact with a patient.\n\n\nScore Higher on the UKCAT 352",
    "topic": "Situational Judgement"
  },
  {
    "id": 13,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Dr Davies approaches the nurse's station to make an urgent enquiry regarding a patient. The two  nurses at the nurse's station continue to gossip about whether or not an attractive doctor has a  girlfriend, without acknowledging Dr Davies.<br><br><strong>Question:</strong><br>Instruct the nurses that they are behaving unprofessionally",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 2,
    "explanation": "It is inappropriate for a doctor to speak to nurses in such a manner; however, the nurses are behaving  unprofessionally, so this response is not awful.",
    "topic": "Situational Judgement"
  },
  {
    "id": 14,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Dr Davies approaches the nurse's station to make an urgent enquiry regarding a patient. The two  nurses at the nurse's station continue to gossip about whether or not an attractive doctor has a  girlfriend, without acknowledging Dr Davies.<br><br><strong>Question:</strong><br>Apologise for interrupting the nurses, and request the information she requires",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 0,
    "explanation": "This response allows Dr Davies to obtain the information required quickly and directly, and is therefore  a very appropriate thing to do.",
    "topic": "Situational Judgement"
  },
  {
    "id": 15,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Dr Davies approaches the nurse's station to make an urgent enquiry regarding a patient. The two  nurses at the nurse's station continue to gossip about whether or not an attractive doctor has a  girlfriend, without acknowledging Dr Davies.<br><br><strong>Question:</strong><br>Clear her throat several times",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 2,
    "explanation": "Clearing her throat will not ensure that the nurses notice her presence or stop their gossiping, so it is not  an effective or appropriate response. However, there are no negative consequences from doing so, other  than potentially having to wait a bit longer for help from the nurses-so it is not an awful response.",
    "topic": "Situational Judgement"
  },
  {
    "id": 16,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Dr Davies approaches the nurse's station to make an urgent enquiry regarding a patient. The two  nurses at the nurse's station continue to gossip about whether or not an attractive doctor has a  girlfriend, without acknowledging Dr Davies.<br><br><strong>Question:</strong><br>Ask the nurses if one of them could assist with her urgent enquiry regarding a patient",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 0,
    "explanation": "This response is quick and direct, and is thus highly appropriate.",
    "topic": "Situational Judgement"
  },
  {
    "id": 17,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Ian is seated directly behind his best friend, Ben, in a written examination. During the examination,  Ian notices that Ben has notes written on his arm, hidden by the sleeve of his hoodie, and Ben  keeps referring to them. Ian has never witnessed Ben cheating before and knows he would not  normally do so, but Ian knows that recently Ben has been very upset over the divorce of his parents,  and so may not have had time to prepare adequately for this exam.<br><br><strong>Question:</strong><br>Raise his hand and discreetly tell an invigilator about Ben",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 0,
    "explanation": "Whilst this would be a difficult action for Ian to pursue, it is a very appropriate response that deals with  the situation immediately, discreetly and locally. No student under any circumstances should be allowed  to cheat, and this response ensures that Ben must face the consequences of his actions.",
    "topic": "Situational Judgement"
  },
  {
    "id": 18,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Ian is seated directly behind his best friend, Ben, in a written examination. During the examination,  Ian notices that Ben has notes written on his arm, hidden by the sleeve of his hoodie, and Ben  keeps referring to them. Ian has never witnessed Ben cheating before and knows he would not  normally do so, but Ian knows that recently Ben has been very upset over the divorce of his parents,  and so may not have had time to prepare adequately for this exam.<br><br><strong>Question:</strong><br>Wait until the end of the examination to tell an invigilator",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 2,
    "explanation": "This response is inappropriate, as it does not deal with the situation as swiftly as possible. However, it does  deal with the situation, so it is not awful.",
    "topic": "Situational Judgement"
  },
  {
    "id": 19,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Ian is seated directly behind his best friend, Ben, in a written examination. During the examination,  Ian notices that Ben has notes written on his arm, hidden by the sleeve of his hoodie, and Ben  keeps referring to them. Ian has never witnessed Ben cheating before and knows he would not  normally do so, but Ian knows that recently Ben has been very upset over the divorce of his parents,  and so may not have had time to prepare adequately for this exam.<br><br><strong>Question:</strong><br>Talk to Ben afterwards about how he is coping with the divorce and whether there is anything Ian can do  to support him",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 0,
    "explanation": "This response would allow Ian to determine whether Ben needed any help in dealing with his parents'  divorce, and would allow him to support his friend appropriately. As such, it is very appropriate.",
    "topic": "Situational Judgement"
  },
  {
    "id": 20,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Ian is seated directly behind his best friend, Ben, in a written examination. During the examination,  Ian notices that Ben has notes written on his arm, hidden by the sleeve of his hoodie, and Ben  keeps referring to them. Ian has never witnessed Ben cheating before and knows he would not  normally do so, but Ian knows that recently Ben has been very upset over the divorce of his parents,  and so may not have had time to prepare adequately for this exam.<br><br><strong>Question:</strong><br>Contact the medical school anonymously explaining what has been witnessed in the exam",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 3,
    "explanation": "This may save Ian from a difficult conversation with his best friend; however, this response is neither  immediate nor local. By the time the medical school investigates further, it will be hard to prove that Ben  cheated. This means it is likely that Ben will not have to face consequences for having cheated, and that  he will be able to maintain an unfair advantage over their fellow medical students. Thus, this is a highly  inappropriate response.",
    "topic": "Situational Judgement"
  },
  {
    "id": 21,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>A junior doctor, Arissa, is attempting to obtain consent for treatment from a patient, but the patient  does not respond to any of her questions. The patient appears to listen to what Arissa is saying,  but says nothing in response.<br><br><strong>Question:</strong><br>Check the patient's name to see if she is foreign",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 3,
    "explanation": "There are a number of reasons that the patient is not responding to Arissa. Perhaps Arissa is not speaking  loudly or clearly enough, or the patient may have trouble hearing, or may not speak English well or at all.  The patient's name will not help in addressing the exact cause of the problem, as a patient with a foreign  name could speak English well but could also have a hearing problem. Thus, this is a very inappropriate  response.",
    "topic": "Situational Judgement"
  },
  {
    "id": 22,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>A junior doctor, Arissa, is attempting to obtain consent for treatment from a patient, but the patient  does not respond to any of her questions. The patient appears to listen to what Arissa is saying,  but says nothing in response.<br><br><strong>Question:</strong><br>Proceed with the treatment, explaining each step calmly and clearly",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 3,
    "explanation": "The patient has not given consent for the treatment, so it would be highly unprofessional for Arissa to  proceed with the treatment. This would be a highly inappropriate thing to do, and could result in serious  professional consequences for Arissa.",
    "topic": "Situational Judgement"
  },
  {
    "id": 23,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>A junior doctor, Arissa, is attempting to obtain consent for treatment from a patient, but the patient  does not respond to any of her questions. The patient appears to listen to what Arissa is saying,  but says nothing in response.<br><br><strong>Question:</strong><br>Seek advice from a senior colleague",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 0,
    "explanation": "It is always very appropriate for a doctor to seek advice from a senior colleague.",
    "topic": "Situational Judgement"
  },
  {
    "id": 24,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Joanna and Freddie are the two new junior doctors on the wards. Joanna decides to spend most  afternoons teaching the medical students, leaving Freddie to do the boring paperwork.<br><br><strong>Question:</strong><br>Tell their consultant that Joanna is not doing her fair share of the work",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 3,
    "explanation": "This is not a local solution to the problem, and Freddie should talk to Joanna herself first before risking  damaging her reputation with their consultant. Thus, it is a highly inappropriate response.",
    "topic": "Situational Judgement"
  },
  {
    "id": 25,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Joanna and Freddie are the two new junior doctors on the wards. Joanna decides to spend most  afternoons teaching the medical students, leaving Freddie to do the boring paperwork.<br><br><strong>Question:</strong><br>Talk to Joanna about taking it in turns to teach the medical students",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 0,
    "explanation": "This would be a very appropriate thing to do, since it would give them both equal opportunities to teach  and to help complete the paperwork.\n\n\nAppendix C  Chapter 8 Kaplan UKCAT Mock Test Explanations 353",
    "topic": "Situational Judgement"
  },
  {
    "id": 26,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Joanna and Freddie are the two new junior doctors on the wards. Joanna decides to spend most  afternoons teaching the medical students, leaving Freddie to do the boring paperwork.<br><br><strong>Question:</strong><br>Tell the medical students to leave the junior doctors alone as they have work to do",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 3,
    "explanation": "This is very inappropriate, since it is not the fault of the medical students that Joanna is not doing her  share of the paperwork. The students are there to learn in a clinical setting.",
    "topic": "Situational Judgement"
  },
  {
    "id": 27,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Joanna and Freddie are the two new junior doctors on the wards. Joanna decides to spend most  afternoons teaching the medical students, leaving Freddie to do the boring paperwork.<br><br><strong>Question:</strong><br>Tell Joanna he does not want to do all the paperwork himself",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 2,
    "explanation": "This response is inappropriate, as it focuses on Freddie's preferences, rather than a fair and professional  balance of their responsibilities. However, it is not awful, as it would open a discussion of the division of  their responsibilities, which has been made based on Joanna's preferences.",
    "topic": "Situational Judgement"
  },
  {
    "id": 28,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Olubayo is a dentist who is about to perform a procedure on a patient that requires the use of sev- eral different electrical instruments that must be plugged into the mains. There have been severe  storms throughout the day, and the power to the dentist's surgery has gone out twice. The back-up  generator failed the second time the power went out. Olubayo hears thunder in the distance, and is  certain that another severe storm is approaching. The lights in the surgery begin to flicker.<br><br><strong>Question:</strong><br>Ask if the patient is comfortable with going ahead with the procedure",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 3,
    "explanation": "Olubayo is right to be concerned that the power may go out again, and patient health and safety could be  compromised if this were to happen once Olubayo starts treatment. However, this is a decision that must  be taken by the dentist on behalf of the patient; asking whether the patient is comfortable with proceeding  is therefore very inappropriate.",
    "topic": "Situational Judgement"
  },
  {
    "id": 29,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Olubayo is a dentist who is about to perform a procedure on a patient that requires the use of sev- eral different electrical instruments that must be plugged into the mains. There have been severe  storms throughout the day, and the power to the dentist's surgery has gone out twice. The back-up  generator failed the second time the power went out. Olubayo hears thunder in the distance, and is  certain that another severe storm is approaching. The lights in the surgery begin to flicker.<br><br><strong>Question:</strong><br>Notify the patient that it is unsafe to proceed due to inclement weather",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 0,
    "explanation": "This is a very appropriate response, given that Olubayo cannot be assured of being able to complete the  treatment without disruption due to the storm, which could place the patient's health at risk.",
    "topic": "Situational Judgement"
  },
  {
    "id": 30,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Olubayo is a dentist who is about to perform a procedure on a patient that requires the use of sev- eral different electrical instruments that must be plugged into the mains. There have been severe  storms throughout the day, and the power to the dentist's surgery has gone out twice. The back-up  generator failed the second time the power went out. Olubayo hears thunder in the distance, and is  certain that another severe storm is approaching. The lights in the surgery begin to flicker.<br><br><strong>Question:</strong><br>Close the surgery for the rest of the day, and reschedule patients for the earliest available appointments",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 0,
    "explanation": "This is a highly appropriate thing to do, as many treatments at the dental surgery would require the use of  electricity. Given that the back-up generator has already failed once today, proceeding with any treatment  as another storm approaches would be reckless and unprofessional.",
    "topic": "Situational Judgement"
  },
  {
    "id": 31,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Whilst Eoghan, a medical student, is taking a history from a patient, the patient asks if the consult- ant will be here to see him as he has some questions to ask about his operation which is taking  place tomorrow. Eoghan knows that the consultant does not get back from holiday until tomorrow.<br><br><strong>Question:</strong><br>Offer to get a doctor to come and talk to the patient",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 0,
    "explanation": "This is an ideal solution as it ensures the patient's questions will be answered, and does not undermine the  consultant in any way by disclosing that she is on holiday.",
    "topic": "Situational Judgement"
  },
  {
    "id": 32,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Whilst Eoghan, a medical student, is taking a history from a patient, the patient asks if the consult- ant will be here to see him as he has some questions to ask about his operation which is taking  place tomorrow. Eoghan knows that the consultant does not get back from holiday until tomorrow.<br><br><strong>Question:</strong><br>Reassure the patient that he can answer all the patient's questions himself",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 3,
    "explanation": "This would be an inappropriate thing to do since Eoghan is only a medical student and is unlikely to be  able to answer all of the patient's questions correctly or satisfactorily. Also, the patient has requested to  speak to the consultant, so it would be appropriate to arrange for the patient to speak to a doctor.",
    "topic": "Situational Judgement"
  },
  {
    "id": 33,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Whilst Eoghan, a medical student, is taking a history from a patient, the patient asks if the consult- ant will be here to see him as he has some questions to ask about his operation which is taking  place tomorrow. Eoghan knows that the consultant does not get back from holiday until tomorrow.<br><br><strong>Question:</strong><br>Try and answer any simple questions himself, then get a doctor to come and talk to the patient",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 3,
    "explanation": "This is very appropriate, as Eoghan can deal with the questions that he feels he can answer straightaway  so that the patient does not have to wait for answers. By getting a doctor to come and talk to the patient  as well, Eoghan would maintain confidence in the profession and continuity of care, and ensure that no  incorrect information is given to the patient.",
    "topic": "Situational Judgement"
  },
  {
    "id": 34,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Hannah, a paediatrician, is examining a patient, Alfie, who is aged seven and has a headache and  a sore throat. Whilst listening to Alfie's breathing, Hannah notices several bruises in various stages  of healing on Alfie's chest, all of which are concealed by his shirt. Alfie's carer is not in the examina- tion room; she has stepped outside to have a cigarette. Alfie seems shy and withdrawn, and tries  to pull away when he sees that Hannah has noticed the bruises on his chest.<br><br><strong>Question:</strong><br>Ask Alfie what happened",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 0,
    "explanation": "This is a highly appropriate response, as it is an open and neutral question, with no possible negative  consequences for Alfie.",
    "topic": "Situational Judgement"
  },
  {
    "id": 35,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Hannah, a paediatrician, is examining a patient, Alfie, who is aged seven and has a headache and  a sore throat. Whilst listening to Alfie's breathing, Hannah notices several bruises in various stages  of healing on Alfie's chest, all of which are concealed by his shirt. Alfie's carer is not in the examina- tion room; she has stepped outside to have a cigarette. Alfie seems shy and withdrawn, and tries  to pull away when he sees that Hannah has noticed the bruises on his chest.<br><br><strong>Question:</strong><br>Step outside and ask Alfie's carer for consent to examine the bruises on his chest",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 0,
    "explanation": "If Hannah wants to examine Alfie's injuries, then it would be highly appropriate to get consent from his  carer before doing so.",
    "topic": "Situational Judgement"
  },
  {
    "id": 36,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Hannah, a paediatrician, is examining a patient, Alfie, who is aged seven and has a headache and  a sore throat. Whilst listening to Alfie's breathing, Hannah notices several bruises in various stages  of healing on Alfie's chest, all of which are concealed by his shirt. Alfie's carer is not in the examina- tion room; she has stepped outside to have a cigarette. Alfie seems shy and withdrawn, and tries  to pull away when he sees that Hannah has noticed the bruises on his chest.<br><br><strong>Question:</strong><br>Reassure Alfie that she wants to help him feel better",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 0,
    "explanation": "This is a very appropriate thing to do, as it will help to calm Alfie and make it easier for Hannah to  treat him.",
    "topic": "Situational Judgement"
  },
  {
    "id": 37,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Hannah, a paediatrician, is examining a patient, Alfie, who is aged seven and has a headache and  a sore throat. Whilst listening to Alfie's breathing, Hannah notices several bruises in various stages  of healing on Alfie's chest, all of which are concealed by his shirt. Alfie's carer is not in the examina- tion room; she has stepped outside to have a cigarette. Alfie seems shy and withdrawn, and tries  to pull away when he sees that Hannah has noticed the bruises on his chest.<br><br><strong>Question:</strong><br>Phone children's services at the local council immediately to report a suspected case of child abuse",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 3,
    "explanation": "It is not clear that Alfie has been abused, though his injuries are worrying and would justify further inves- tigation by Hannah before making a report to children's services. The next step would be to examine the  injuries, ideally after obtaining consent from Alfie's carer. Phoning in a report before checking the injuries  would be highly inappropriate.\n\n\nScore Higher on the UKCAT 354",
    "topic": "Situational Judgement"
  },
  {
    "id": 38,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Dr Miller, a junior doctor, has just finished ward rounds when a woman approaches him in the cor- ridor. She says that she is the niece of a patient that Dr Miller is looking after in the Intensive Care  Unit. She wants to know everything about her uncle and how long it will be until he is well enough to  go home. Dr Miller's consultant will be busy in clinic all day, and Dr Miller knows that the patient is  very sick, with only days to live; the patient asked the consultant to inform the family of this himself.<br><br><strong>Question:</strong><br>Tell the woman that he is too busy to talk to her",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 3,
    "explanation": "This is a very inappropriate thing to do, as the patient has given consent for his family to be informed  of his condition, and it's likely that his niece has come to the hospital for this very purpose. The doctor  should make some time to speak with her, even if to briefly explain that she must wait to speak with the  consultant.",
    "topic": "Situational Judgement"
  },
  {
    "id": 39,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Dr Miller, a junior doctor, has just finished ward rounds when a woman approaches him in the cor- ridor. She says that she is the niece of a patient that Dr Miller is looking after in the Intensive Care  Unit. She wants to know everything about her uncle and how long it will be until he is well enough to  go home. Dr Miller's consultant will be busy in clinic all day, and Dr Miller knows that the patient is  very sick, with only days to live; the patient asked the consultant to inform the family of this himself.<br><br><strong>Question:</strong><br>Tell the woman that he cannot tell her anything regarding a patient",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 3,
    "explanation": "This response is very inappropriate, and it is also inaccurate, as the patient has given consent for his con- dition to be explained to his family.",
    "topic": "Situational Judgement"
  },
  {
    "id": 40,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Dr Miller, a junior doctor, has just finished ward rounds when a woman approaches him in the cor- ridor. She says that she is the niece of a patient that Dr Miller is looking after in the Intensive Care  Unit. She wants to know everything about her uncle and how long it will be until he is well enough to  go home. Dr Miller's consultant will be busy in clinic all day, and Dr Miller knows that the patient is  very sick, with only days to live; the patient asked the consultant to inform the family of this himself.<br><br><strong>Question:</strong><br>Suggest that the woman wait for the consultant in the relatives' room",
    "options": [
      "Very appropriate",
      "Appropriate, but not ideal",
      "Inappropriate, but not awful",
      "Very inappropriate"
    ],
    "answer": 0,
    "explanation": "This is a very appropriate thing to do, as it defers to the patient's wish to have the consultant explain his  condition to his family. It also allows Dr Miller to guide the woman to a more appropriate place to wait  for the consultant.",
    "topic": "Situational Judgement"
  },
  {
    "id": 41,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Jackson and Zakariyah are medical students. Upon walking into the supply cupboard one day,  Zakariyah sees Jackson filling a rucksack with bags of intravenous fluid and equipment for insert- ing drips. He asks Zakariyah not to tell the nurse in charge or their consultant.<br><br><strong>Question:</strong><br>Jackson says that he is sending the supplies to a charity hospital in Cambodia",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 3,
    "explanation": "This is not at all important, as Jackson should not be stealing the supplies for any reason.",
    "topic": "Situational Judgement"
  },
  {
    "id": 42,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Jackson and Zakariyah are medical students. Upon walking into the supply cupboard one day,  Zakariyah sees Jackson filling a rucksack with bags of intravenous fluid and equipment for insert- ing drips. He asks Zakariyah not to tell the nurse in charge or their consultant.<br><br><strong>Question:</strong><br>Zakariyah has heard Jackson discussing putting up drips on himself and his friends when they have been  out drinking",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 1,
    "explanation": "The reason that Jackson is stealing the supplies is irrelevant to how Zakariyah responds to the situation.  However, if Jackson has talked about putting up drips on himself and his friends, this is an important fac- tor to consider, as the fact that Jackson is taking drips and bags of intravenous fluids makes it more likely  that Jackson is actually engaging in an illegal and potentially dangerous misuse of medical equipment,  and Zakariyah should take this into account when dealing with the situation.",
    "topic": "Situational Judgement"
  },
  {
    "id": 43,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Jackson and Zakariyah are medical students. Upon walking into the supply cupboard one day,  Zakariyah sees Jackson filling a rucksack with bags of intravenous fluid and equipment for insert- ing drips. He asks Zakariyah not to tell the nurse in charge or their consultant.<br><br><strong>Question:</strong><br>The intravenous fluid bags are past their expiry dates",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 3,
    "explanation": "Jackson should not be stealing medical supplies from the hospital. The fact that the medical supplies are  not safe to use at the hospital is not at all important in responding to Jackson's behaviour.",
    "topic": "Situational Judgement"
  },
  {
    "id": 44,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Jackson and Zakariyah are medical students. Upon walking into the supply cupboard one day,  Zakariyah sees Jackson filling a rucksack with bags of intravenous fluid and equipment for insert- ing drips. He asks Zakariyah not to tell the nurse in charge or their consultant.<br><br><strong>Question:</strong><br>Zakariyah knows that Jackson is on his final warning in terms of appropriate behaviour whilst at medical  school",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 3,
    "explanation": "Whilst it may be tempting for Zakariyah to 'let this one go' in support of his friend, stealing hospital sup- plies is completely against all regulations and also calls into question a doctor's probity; therefore, it is  important that Zakariyah raises this through the appropriate channels without placing any importance  at all on the consequences for Jackson's medical career.",
    "topic": "Situational Judgement"
  },
  {
    "id": 45,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Liam, a junior doctor, approaches Conor, another junior doctor, and asks Conor to take over the  case of a patient he has just been assigned, Mr Abdul. Conor asks why, and Liam explains he can- not deal with 'another one of those people'. Conor asks Liam to explain himself, and Liam says  that Conor knows all about 'all these outsiders' coming to the UK so they can 'go on benefits' and  'impose their religion' on this country.<br><br><strong>Question:</strong><br>Liam's brother was injured in the war in Afghanistan",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 3,
    "explanation": "This factor is not at all important, as it does not mitigate Liam's unprofessional comments about this  patient in any way.",
    "topic": "Situational Judgement"
  },
  {
    "id": 46,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Liam, a junior doctor, approaches Conor, another junior doctor, and asks Conor to take over the  case of a patient he has just been assigned, Mr Abdul. Conor asks why, and Liam explains he can- not deal with 'another one of those people'. Conor asks Liam to explain himself, and Liam says  that Conor knows all about 'all these outsiders' coming to the UK so they can 'go on benefits' and  'impose their religion' on this country.<br><br><strong>Question:</strong><br>Whether there are any patients or staff nearby",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 0,
    "explanation": "This is a very important factor to consider, as Conor will need to decide whether to respond to Liam  immediately, or to move the conversation to a more private space where they can speak freely.",
    "topic": "Situational Judgement"
  },
  {
    "id": 47,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Liam, a junior doctor, approaches Conor, another junior doctor, and asks Conor to take over the  case of a patient he has just been assigned, Mr Abdul. Conor asks why, and Liam explains he can- not deal with 'another one of those people'. Conor asks Liam to explain himself, and Liam says  that Conor knows all about 'all these outsiders' coming to the UK so they can 'go on benefits' and  'impose their religion' on this country.<br><br><strong>Question:</strong><br>Liam has not made comments of this nature to Conor before",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 3,
    "explanation": "This is not at all important, as Liam's comments are so extreme that Conor must address them with Liam  immediately, directly and discreetly, even if this is the first time that Liam has made them.",
    "topic": "Situational Judgement"
  },
  {
    "id": 48,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Liam, a junior doctor, approaches Conor, another junior doctor, and asks Conor to take over the  case of a patient he has just been assigned, Mr Abdul. Conor asks why, and Liam explains he can- not deal with 'another one of those people'. Conor asks Liam to explain himself, and Liam says  that Conor knows all about 'all these outsiders' coming to the UK so they can 'go on benefits' and  'impose their religion' on this country.<br><br><strong>Question:</strong><br>Conor and Liam are supervised by the same consultant",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 0,
    "explanation": "This is a very important factor, as it means that it will be simple and direct for Conor to get support in  addressing Liam's behaviour effectively. Given the nature of Liam's remarks about not being able to deal  with 'another one of these people', it is likely that there are serious issues that need to be addressed, and  Conor may need help from a senior member of staff to do so effectively. This factor makes it more likely  that Conor could get such help, so it is very important.",
    "topic": "Situational Judgement"
  },
  {
    "id": 49,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Liam, a junior doctor, approaches Conor, another junior doctor, and asks Conor to take over the  case of a patient he has just been assigned, Mr Abdul. Conor asks why, and Liam explains he can- not deal with 'another one of those people'. Conor asks Liam to explain himself, and Liam says  that Conor knows all about 'all these outsiders' coming to the UK so they can 'go on benefits' and  'impose their religion' on this country.<br><br><strong>Question:</strong><br>Liam recently helped Conor when his mother was seriously ill",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 2,
    "explanation": "This factor is of minor importance. It makes it more likely that Conor would want to be sensitive yet  effective in responding to Liam's remarks, but it does not mitigate the need to address Liam's behaviour  in any way.\n\n\nAppendix C  Chapter 8 Kaplan UKCAT Mock Test Explanations 355",
    "topic": "Situational Judgement"
  },
  {
    "id": 50,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The medical team decides that a patient should have a non-urgent chest X-ray before he goes  home, but that this would not alter his treatment whilst in hospital. A junior doctor, Dr O'Keefe, is  asked by the team to organise the X-ray. The next day, however, Dr O'Keefe admits to Dr Bates, a  senior doctor on the medical team, that she has forgotten to organise the X-ray.<br><br><strong>Question:</strong><br>The consultant had specifically asked for the X-ray to be completed in the next 24 hours",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 0,
    "explanation": "This is a very important factor, since the consultant obviously had a good reason for requesting the X-ray,  and patient health and the professionalism of the team may be compromised if it is not completed on time.",
    "topic": "Situational Judgement"
  },
  {
    "id": 51,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The medical team decides that a patient should have a non-urgent chest X-ray before he goes  home, but that this would not alter his treatment whilst in hospital. A junior doctor, Dr O'Keefe, is  asked by the team to organise the X-ray. The next day, however, Dr O'Keefe admits to Dr Bates, a  senior doctor on the medical team, that she has forgotten to organise the X-ray.<br><br><strong>Question:</strong><br>Dr O'Keefe was dealing with a very sick patient all of the previous afternoon",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 0,
    "explanation": "This is very important to consider, since the safety of patients has to come first. If there was a very sick  patient on the ward who urgently needed medical care, then they should have taken priority over other  non-urgent jobs, such as organising this X-ray.",
    "topic": "Situational Judgement"
  },
  {
    "id": 52,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The medical team decides that a patient should have a non-urgent chest X-ray before he goes  home, but that this would not alter his treatment whilst in hospital. A junior doctor, Dr O'Keefe, is  asked by the team to organise the X-ray. The next day, however, Dr O'Keefe admits to Dr Bates, a  senior doctor on the medical team, that she has forgotten to organise the X-ray.<br><br><strong>Question:</strong><br>The patient is not scheduled to go home until next week",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 1,
    "explanation": "This is an important factor, as it means that there is sufficient time remaining to organise this non-urgent  X-ray before the patient leaves the hospital.",
    "topic": "Situational Judgement"
  },
  {
    "id": 53,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>The medical team decides that a patient should have a non-urgent chest X-ray before he goes  home, but that this would not alter his treatment whilst in hospital. A junior doctor, Dr O'Keefe, is  asked by the team to organise the X-ray. The next day, however, Dr O'Keefe admits to Dr Bates, a  senior doctor on the medical team, that she has forgotten to organise the X-ray.<br><br><strong>Question:</strong><br>Dr O'Keefe had some bad news about her grandmother's cancer diagnosis a few days ago",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 3,
    "explanation": "Patients must always come first, so this factor is not at all important. The fact that Dr O'Keefe had this  news a few days ago means that she had time to organise someone to cover for her if she needed to take  a few days off.",
    "topic": "Situational Judgement"
  },
  {
    "id": 54,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>A group of medical students have been assigned to prepare and give a presentation; they will be  assessed jointly for their work. At the first group meeting, they select Maisie as group leader. A few  minutes before the second group meeting, Maisie receives a text message from Catriona, another  group member, stating that she has car trouble and cannot come to the meeting; Catriona asks  Maisie to cover for her.<br><br><strong>Question:</strong><br>There is a private spot near the meeting room, where Maisie could ring Catriona",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 0,
    "explanation": "This is a very important factor, as it would allow for Maisie to ring Catriona and encourage her to make  every effort to come to the meeting before it starts. If Catriona will be delayed, then the group could delay  the start of the meeting. This is something best explained directly, rather than in a text message, so a pri- vate spot for this conversation would be very important.",
    "topic": "Situational Judgement"
  },
  {
    "id": 55,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>A group of medical students have been assigned to prepare and give a presentation; they will be  assessed jointly for their work. At the first group meeting, they select Maisie as group leader. A few  minutes before the second group meeting, Maisie receives a text message from Catriona, another  group member, stating that she has car trouble and cannot come to the meeting; Catriona asks  Maisie to cover for her.<br><br><strong>Question:</strong><br>Whether Catriona lives near enough to the meeting venue that she could walk or take public transport",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 1,
    "explanation": "This is an important consideration, as it would give Catriona a likelihood of arriving relatively soon,  although she would be likely to arrive late. This would be preferable to Catriona skipping the meeting  due to car trouble, so Maisie would be right to encourage Catriona to consider other transport options.",
    "topic": "Situational Judgement"
  },
  {
    "id": 56,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>A group of medical students have been assigned to prepare and give a presentation; they will be  assessed jointly for their work. At the first group meeting, they select Maisie as group leader. A few  minutes before the second group meeting, Maisie receives a text message from Catriona, another  group member, stating that she has car trouble and cannot come to the meeting; Catriona asks  Maisie to cover for her.<br><br><strong>Question:</strong><br>The assignment clearly requires them to prepare and give the presentation as a group",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 0,
    "explanation": "This factor is of utmost importance. If they have been clearly assigned a project that must be completed  as a group, then it is inappropriate for Catriona to ask Maisie to cover for her.",
    "topic": "Situational Judgement"
  },
  {
    "id": 57,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Two junior doctors, Addison and Petra, are called to a meeting with a hospital administrator to  discuss what happened during a procedure that caused serious health problems for the patient,  leading to a formal complaint from the patient and the threat of a lawsuit. When asked to explain  what she did during the procedure, Petra omits to mention a minor error she made that Addison  remembers noticing at the time.<br><br><strong>Question:</strong><br>Petra's error may be directly responsible for the patient's health problems that resulted from the procedure",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 0,
    "explanation": "This factor is extremely important, as it is fundamental to the matter at hand, and Addison must disclose  what he observed to the hospital administrator.",
    "topic": "Situational Judgement"
  },
  {
    "id": 58,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Two junior doctors, Addison and Petra, are called to a meeting with a hospital administrator to  discuss what happened during a procedure that caused serious health problems for the patient,  leading to a formal complaint from the patient and the threat of a lawsuit. When asked to explain  what she did during the procedure, Petra omits to mention a minor error she made that Addison  remembers noticing at the time.<br><br><strong>Question:</strong><br>The administrator does not ask Addison directly about the error made by Petra",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 3,
    "explanation": "This is not at all important, as Addison remembers noticing an error during the procedure and thus has a  professional obligation to disclose it to the hospital, even if he is not directly asked about it.",
    "topic": "Situational Judgement"
  },
  {
    "id": 59,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Two junior doctors, Addison and Petra, are called to a meeting with a hospital administrator to  discuss what happened during a procedure that caused serious health problems for the patient,  leading to a formal complaint from the patient and the threat of a lawsuit. When asked to explain  what she did during the procedure, Petra omits to mention a minor error she made that Addison  remembers noticing at the time.<br><br><strong>Question:</strong><br>Other staff present at the time may have noticed Petra's error",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 2,
    "explanation": "This factor is of minor importance. It does not mitigate Addison's responsibility to disclose Petra's error to  the hospital, though it makes it more urgent that he do so, as the other staff may have lacked the training  to understand that it was an error, or to comprehend its implications.",
    "topic": "Situational Judgement"
  },
  {
    "id": 60,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Rhiannon is a junior doctor on a busy hospital ward. Rhiannon pops into the staff lounge for a quick  cup of tea on her mid-morning break and discovers a group of medical students sitting round the  table. Rhiannon does not know them well, but was introduced when they started their placements  the week before. The medical students tell Rhiannon that they have barely spoken to the consultant  who is responsible for their placement; the consultant told them to 'just get stuck in' but they don't  know what they are meant to be doing. Rhiannon finds the consultant in the corridor and asks to  have a quick word. Rhiannon explains that the medical students need guidance as to what they  should be doing for their placement work. The consultant says he is 'too busy to be bothered' and  tells Rhiannon to 'just come up with something' and mentor the students herself.<br><br><strong>Question:</strong><br>The medical students are meant to be assessed on clear criteria set out by their university",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 0,
    "explanation": "This factor is very important to consider. Medical students are not sent on hospital placements to 'just get  stuck in,' but in order to complete specific criteria that are relevant at that stage of their medical education.  If Rhiannon is to help mentor the students, she needs to be aware of these criteria to ensure she gives the  students appropriate tasks on the ward and that she guides them sufficiently and appropriately as they  complete these tasks.",
    "topic": "Situational Judgement"
  },
  {
    "id": 61,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Rhiannon is a junior doctor on a busy hospital ward. Rhiannon pops into the staff lounge for a quick  cup of tea on her mid-morning break and discovers a group of medical students sitting round the  table. Rhiannon does not know them well, but was introduced when they started their placements  the week before. The medical students tell Rhiannon that they have barely spoken to the consultant  who is responsible for their placement; the consultant told them to 'just get stuck in' but they don't  know what they are meant to be doing. Rhiannon finds the consultant in the corridor and asks to  have a quick word. Rhiannon explains that the medical students need guidance as to what they  should be doing for their placement work. The consultant says he is 'too busy to be bothered' and  tells Rhiannon to 'just come up with something' and mentor the students herself.<br><br><strong>Question:</strong><br>The hospital requires a doctor to supervise the medical students in all their interactions with patients",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 0,
    "explanation": "This factor is extremely important. The hospital would not want medical students wandering the ward  and 'just getting stuck in' wherever they like - that would be quite chaotic, not to mention the risk  to patient health and safety. Rhiannon is a junior doctor, so she could potentially help in supervising  the medical students; however, this does not seem to have been one of her responsibilities prior to the \n\n\nScore Higher on the UKCAT 356 consultant telling her to 'just come up with something'; she would do well to discuss her concerns with the  consultant, including the fact that she likely has a very full shift without having several medical students  to mentor and supervise.",
    "topic": "Situational Judgement"
  },
  {
    "id": 62,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Rhiannon is a junior doctor on a busy hospital ward. Rhiannon pops into the staff lounge for a quick  cup of tea on her mid-morning break and discovers a group of medical students sitting round the  table. Rhiannon does not know them well, but was introduced when they started their placements  the week before. The medical students tell Rhiannon that they have barely spoken to the consultant  who is responsible for their placement; the consultant told them to 'just get stuck in' but they don't  know what they are meant to be doing. Rhiannon finds the consultant in the corridor and asks to  have a quick word. Rhiannon explains that the medical students need guidance as to what they  should be doing for their placement work. The consultant says he is 'too busy to be bothered' and  tells Rhiannon to 'just come up with something' and mentor the students herself.<br><br><strong>Question:</strong><br>The consultant is the only consultant on their ward at the moment, as several other consultants are on  annual leave or medical leave",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 1,
    "explanation": "This factor does not excuse the consultant's failure to mentor and supervise the medical students, but it  would explain why the consultant is so overrun and why he has failed so far in his duties to the medical  students. This factor is important, as it must be addressed urgently to ensure that there is adequate cover  for patients as well as for supporting the medical students on their placement. It is not the main issue  here, but it is a contributing factor that Rhiannon should address with the consultant. A hospital should  provide adequate cover, for example, bringing in locum consultants or arranging for support from con- sultants at nearby hospitals, while staff are away on medical or annual leave.",
    "topic": "Situational Judgement"
  },
  {
    "id": 63,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Rhiannon is a junior doctor on a busy hospital ward. Rhiannon pops into the staff lounge for a quick  cup of tea on her mid-morning break and discovers a group of medical students sitting round the  table. Rhiannon does not know them well, but was introduced when they started their placements  the week before. The medical students tell Rhiannon that they have barely spoken to the consultant  who is responsible for their placement; the consultant told them to 'just get stuck in' but they don't  know what they are meant to be doing. Rhiannon finds the consultant in the corridor and asks to  have a quick word. Rhiannon explains that the medical students need guidance as to what they  should be doing for their placement work. The consultant says he is 'too busy to be bothered' and  tells Rhiannon to 'just come up with something' and mentor the students herself.<br><br><strong>Question:</strong><br>The consultant does not speak Spanish very well",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 2,
    "explanation": "It is clear from the scenario that the consultant does not speak Spanish very well; it also seems clear that  the consultant's attempts at speaking Spanish have confused and agitated the patient. The failure to com- municate with the patient, and the distress that this causes the patient, are the main issues in this scenario.  The consultant's lack of fluency in Spanish is of minor importance - it needs to be acknowledged, but only  so that they can move on to calming the patient and resolving the language barrier.",
    "topic": "Situational Judgement"
  },
  {
    "id": 64,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Rhiannon is a junior doctor on a busy hospital ward. Rhiannon pops into the staff lounge for a quick  cup of tea on her mid-morning break and discovers a group of medical students sitting round the  table. Rhiannon does not know them well, but was introduced when they started their placements  the week before. The medical students tell Rhiannon that they have barely spoken to the consultant  who is responsible for their placement; the consultant told them to 'just get stuck in' but they don't  know what they are meant to be doing. Rhiannon finds the consultant in the corridor and asks to  have a quick word. Rhiannon explains that the medical students need guidance as to what they  should be doing for their placement work. The consultant says he is 'too busy to be bothered' and  tells Rhiannon to 'just come up with something' and mentor the students herself.<br><br><strong>Question:</strong><br>The patient's injury is not life-threatening",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 3,
    "explanation": "If the patient's injury were life-threatening, then it would be all the more urgent to resolve the language  barrier, as they would need to be able to communicate with her in a language she understands in order  for her to consent to treatment. However, the consultant's inept attempt at speaking Spanish has created  a new problem - the patient is confused and agitated. This is the pressing issue at the end of the scenario,  more so than her injury. Thus, the fact that her injury is not life-threatening is of no importance.",
    "topic": "Situational Judgement"
  },
  {
    "id": 65,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>Rhiannon is a junior doctor on a busy hospital ward. Rhiannon pops into the staff lounge for a quick  cup of tea on her mid-morning break and discovers a group of medical students sitting round the  table. Rhiannon does not know them well, but was introduced when they started their placements  the week before. The medical students tell Rhiannon that they have barely spoken to the consultant  who is responsible for their placement; the consultant told them to 'just get stuck in' but they don't  know what they are meant to be doing. Rhiannon finds the consultant in the corridor and asks to  have a quick word. Rhiannon explains that the medical students need guidance as to what they  should be doing for their placement work. The consultant says he is 'too busy to be bothered' and  tells Rhiannon to 'just come up with something' and mentor the students herself.<br><br><strong>Question:</strong><br>The consultant has not made an effort to determine what language the patient speaks",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 0,
    "explanation": "This is one of the main problems in this scenario, so it is an extremely important factor to consider in  responding to the situation. The consultant has assumed that the woman speaks Spanish because she  appears to be Latin American. Perhaps she is Brazilian, in which case she would speak Portuguese; in  any case, it's not advisable to try to guess a patient's nationality based on their appearance. They need to  determine what language she speaks, so they can calm her down and give her the chance to consent to  treatment.",
    "topic": "Situational Judgement"
  },
  {
    "id": 66,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>STOP. IF YOU FINISH BEFORE TIME IS UP, CHECK ANY QUESTIONS YOU HAVE  MARKED FOR REVIEW. YOU MAY GO BACK TO QUESTIONS IN THIS SECTION ONLY. A consultant paediatrician is finishing a busy shift on the children's ward when she notices that one  of her patients, Alice, aged 7, is curled up on her bed, clutching a teddy bear and crying.<br><br><strong>Question:</strong><br>She has already stayed on the ward an hour after her shift was supposed to end, and she is extremely tired",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 3,
    "explanation": "This factor is not important. The young patient is clearly distressed, and she needs someone to talk to her  and listen to her. The consultant paediatrician should take a few minutes to do so before heading home.",
    "topic": "Situational Judgement"
  },
  {
    "id": 67,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>STOP. IF YOU FINISH BEFORE TIME IS UP, CHECK ANY QUESTIONS YOU HAVE  MARKED FOR REVIEW. YOU MAY GO BACK TO QUESTIONS IN THIS SECTION ONLY. A consultant paediatrician is finishing a busy shift on the children's ward when she notices that one  of her patients, Alice, aged 7, is curled up on her bed, clutching a teddy bear and crying.<br><br><strong>Question:</strong><br>Alice's father is travelling on business, and Alice's mother has not been in to see her today",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 0,
    "explanation": "This factor is very important, as it would explain a likely reason why Alice is so distressed. A chat with her  consultant paediatrician would make her feel ever so much better.",
    "topic": "Situational Judgement"
  },
  {
    "id": 68,
    "passageId": null,
    "text": "<strong>Scenario:</strong><br>STOP. IF YOU FINISH BEFORE TIME IS UP, CHECK ANY QUESTIONS YOU HAVE  MARKED FOR REVIEW. YOU MAY GO BACK TO QUESTIONS IN THIS SECTION ONLY. A consultant paediatrician is finishing a busy shift on the children's ward when she notices that one  of her patients, Alice, aged 7, is curled up on her bed, clutching a teddy bear and crying.<br><br><strong>Question:</strong><br>Alice is recovering well from her latest operation and is due to be discharged the next day",
    "options": [
      "Very important",
      "Important",
      "Of minor importance",
      "Not important at all"
    ],
    "answer": 2,
    "explanation": "This factor is important to Alice's physical health, but it would not make much of a difference to her  emotional well-being at the moment; she's a young girl on her own in hospital, and clearly feeling lonely  and distressed. Thus, the factor is of minor importance; if Alice says that she really wants to go home, for  example, then the doctor might mention the fact that she is due to go home tomorrow.",
    "topic": "Situational Judgement"
  }
];
