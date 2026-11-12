// The fourteen services listed on the hospital's profile page, plus general & laparoscopic
// surgery (from Dr. Stalin Raja's MS, FIAGES, FALS, FAIS) and the fertility centre.
// Descriptions are general patient education, not a list of procedures the hospital has confirmed.
export const departments = [
  {
    slug: 'fertility',
    group: 'women',
    img: '/img/h/ivf-lab.webp',
    name: { en: 'Fertility & IVF', ta: 'கருத்தரிப்பு & IVF' },
    short: {
      en: 'Amala Fertility Centre: evaluation for both partners, IUI, IVF and ICSI.',
      ta: 'அமலா கருத்தரிப்பு மையம்: தம்பதியர் இருவருக்கும் பரிசோதனை, IUI, IVF, ICSI.',
    },
    intro:
      'Roughly one couple in seven finds it hard to conceive. Infertility is a medical condition, it is shared by both partners equally often, and most couples who are evaluated early need only simple treatment. The Amala Fertility Centre sees the couple together, finds the cause, and starts with the least invasive step that can work.',
    conditions: ['Irregular or absent periods', 'PCOS', 'Blocked fallopian tubes', 'Endometriosis', 'Low sperm count or motility', 'Recurrent miscarriage', 'Unexplained infertility'],
    treatments: ['Couple evaluation and counselling', 'Follicle-tracking scans', 'Ovulation induction', 'Intrauterine insemination (IUI)', 'In vitro fertilisation (IVF)', 'ICSI', 'Frozen embryo transfer'],
    when: {
      en: ['Trying for 12 months without success (6 months if she is over 35)', 'Periods that are irregular, very painful or absent', 'Two or more miscarriages', 'A known problem with tubes, uterus or sperm'],
      ta: ['12 மாதங்கள் முயன்றும் கருத்தரிக்கவில்லை (35 வயதுக்கு மேல் 6 மாதங்கள்)', 'ஒழுங்கற்ற, மிகுந்த வலியுடன் அல்லது இல்லாத மாதவிடாய்', 'இரண்டு அல்லது அதற்கு மேற்பட்ட கருச்சிதைவுகள்', 'குழாய், கருப்பை அல்லது விந்தணுவில் தெரிந்த பிரச்சனை'],
    },
  },
  {
    slug: 'obstetrics-gynaecology',
    group: 'women',
    img: '/img/h/scan-room.webp',
    name: { en: 'Obstetrics & Gynaecology', ta: 'மகப்பேறு & மகளிர் நலம்' },
    short: {
      en: 'Pregnancy care, scans, delivery and every stage of a woman’s health.',
      ta: 'கர்ப்பகால பராமரிப்பு, ஸ்கேன், பிரசவம் மற்றும் பெண்களின் முழு ஆரோக்கியம்.',
    },
    intro:
      'Obstetrics looks after a woman and her baby through pregnancy and birth; gynaecology looks after her reproductive health at every other time, from the first period to menopause. Regular antenatal visits catch blood pressure, sugar and growth problems early, when they are easiest to manage.',
    conditions: ['Antenatal and high-risk pregnancy', 'Gestational diabetes', 'Pregnancy-induced hypertension', 'Fibroids and ovarian cysts', 'Heavy or painful periods', 'Menopause symptoms', 'Cervical screening'],
    treatments: ['Antenatal check-ups and scans', 'Normal delivery', 'Caesarean section', 'Postnatal care', 'Laparoscopic and hysteroscopic surgery', 'Pap smear screening'],
    when: {
      en: ['You have a positive pregnancy test', 'Bleeding between periods or after menopause', 'Periods heavier than usual or lasting over 7 days', 'Pelvic pain that keeps returning'],
      ta: ['கர்ப்ப பரிசோதனை பாசிட்டிவ் ஆனவுடன்', 'மாதவிடாய்க்கு இடையில் அல்லது மாதவிடாய் நின்ற பின் இரத்தப்போக்கு', 'வழக்கத்தை விட அதிகமான அல்லது 7 நாட்களுக்கு மேல் நீடிக்கும் மாதவிடாய்', 'மீண்டும் மீண்டும் வரும் அடிவயிற்று வலி'],
    },
  },
  {
    slug: 'neonatology',
    group: 'children',
    img: '/img/h/newborn-warmer.webp',
    name: { en: 'Neonatology', ta: 'பச்சிளங்குழந்தை மருத்துவம்' },
    short: {
      en: 'Specialist care for newborns in their first 28 days, including babies born early.',
      ta: 'பிறந்த முதல் 28 நாட்களில் குழந்தைகளுக்கான சிறப்பு பராமரிப்பு — குறைமாத குழந்தைகள் உட்பட.',
    },
    intro:
      'The first four weeks of life are when a baby is most fragile. Neonatology is the speciality that cares for newborns in this window, especially those born before 37 weeks, with low birth weight, jaundice, breathing difficulty or infection.',
    conditions: ['Prematurity', 'Low birth weight', 'Newborn jaundice', 'Breathing difficulty', 'Feeding problems', 'Low blood sugar', 'Newborn infections'],
    treatments: ['Newborn examination at birth', 'Phototherapy for jaundice', 'Warmth and feeding support', 'Monitoring of premature babies', 'Newborn screening and vaccination'],
    when: {
      en: ['Yellow skin or eyes spreading to the body', 'Poor feeding or a baby too sleepy to feed', 'Fast breathing or grunting', 'Fever or a temperature that is too low'],
      ta: ['உடல் முழுவதும் பரவும் மஞ்சள் நிறம்', 'சரியாக பால் குடிக்காமை அல்லது அதிக தூக்கம்', 'வேகமான மூச்சு அல்லது முனகல்', 'காய்ச்சல் அல்லது உடல் மிகக் குளிர்ச்சி'],
    },
  },
  {
    slug: 'paediatrics',
    group: 'children',
    img: '/img/h/ward.webp',
    name: { en: 'Paediatrics', ta: 'குழந்தைகள் நலம்' },
    short: {
      en: 'Child health from infancy to adolescence: illness, growth and vaccination.',
      ta: 'குழந்தைப் பருவம் முதல் இளம்பருவம் வரை: நோய், வளர்ச்சி, தடுப்பூசி.',
    },
    intro:
      'Children are not small adults: their doses, their symptoms and their normal ranges are different. Paediatrics covers everyday fevers and coughs, growth and development checks, and the national immunisation schedule that protects a child from twelve serious diseases.',
    conditions: ['Fever and infections', 'Asthma and wheezing', 'Diarrhoea and dehydration', 'Growth and nutrition concerns', 'Developmental delay', 'Allergies'],
    treatments: ['Well-baby and growth checks', 'Vaccinations on schedule', 'Nebulisation', 'Inpatient care for sick children', 'Nutrition counselling'],
    when: {
      en: ['Fever above 100.4°F in a baby under 3 months', 'Fewer wet nappies or a dry mouth', 'Breathing that pulls in below the ribs', 'A child who is unusually drowsy or floppy'],
      ta: ['3 மாதத்திற்குட்பட்ட குழந்தைக்கு 100.4°F-க்கு மேல் காய்ச்சல்', 'குறைவான சிறுநீர் அல்லது வாய் வறட்சி', 'விலா எலும்புகளுக்கு கீழே உள்ளிழுக்கும் மூச்சு', 'வழக்கத்திற்கு மாறான சோர்வு'],
    },
  },
  {
    slug: 'general-laparoscopic-surgery',
    group: 'surgery',
    img: '/img/h/ot-table.webp',
    name: { en: 'General & Laparoscopic Surgery', ta: 'பொது & லேப்ராஸ்கோபிக் அறுவை சிகிச்சை' },
    short: {
      en: 'Keyhole surgery through 5–10 mm cuts: less pain, smaller scars, home sooner.',
      ta: '5–10 மி.மீ. சிறு துளைகள் வழியே அறுவை சிகிச்சை: குறைந்த வலி, சிறிய தழும்பு, விரைவில் வீடு.',
    },
    intro:
      'In laparoscopic surgery the surgeon works through three or four small cuts using a camera and long, fine instruments, instead of one long incision. For most gallbladder, appendix and hernia operations this means less pain, a shorter stay and an earlier return to work.',
    conditions: ['Gallstones', 'Appendicitis', 'Inguinal and umbilical hernia', 'Piles, fissure and fistula', 'Lumps and cysts', 'Abdominal emergencies'],
    treatments: ['Laparoscopic cholecystectomy', 'Laparoscopic appendicectomy', 'Laparoscopic and open hernia repair', 'Diagnostic laparoscopy', 'Day-care procedures'],
    when: {
      en: ['Pain under the right ribs after fatty meals', 'Pain that moves to the lower right abdomen', 'A bulge in the groin or navel that grows on coughing', 'Bleeding or pain while passing stools'],
      ta: ['எண்ணெய் உணவுக்குப் பின் வலது விலா எலும்புக்கு கீழ் வலி', 'கீழ் வலது வயிற்றுக்கு நகரும் வலி', 'இருமும் போது பெரிதாகும் இடுப்பு / தொப்புள் வீக்கம்', 'மலம் கழிக்கும்போது இரத்தம் அல்லது வலி'],
    },
  },
  {
    slug: 'general-medicine',
    group: 'adults',
    img: '/img/h/consult-room.webp',
    name: { en: 'General Medicine', ta: 'பொது மருத்துவம்' },
    short: {
      en: 'Diagnosis and long-term care of fever, diabetes, blood pressure and more.',
      ta: 'காய்ச்சல், சர்க்கரை நோய், இரத்த அழுத்தம் போன்றவற்றின் கண்டறிதல் மற்றும் தொடர் சிகிச்சை.',
    },
    intro:
      'The physician is often the first doctor you see, and the one who keeps the whole picture in view. General medicine diagnoses illnesses that do not need an operation and manages long-term conditions such as diabetes, hypertension and thyroid disease so that they do not quietly damage the heart, kidneys and eyes.',
    conditions: ['Diabetes', 'High blood pressure', 'Thyroid disorders', 'Fever, dengue and typhoid', 'Respiratory infections', 'Anaemia'],
    treatments: ['Consultation and diagnosis', 'Master health check-ups', 'Chronic disease management', 'Inpatient medical care', 'Lifestyle counselling'],
    when: {
      en: ['A fever lasting more than three days', 'Unexplained weight loss or tiredness', 'Excessive thirst and frequent urination', 'You are over 40 and have never had a health check'],
      ta: ['மூன்று நாட்களுக்கு மேல் நீடிக்கும் காய்ச்சல்', 'காரணம் தெரியாத எடை இழப்பு அல்லது சோர்வு', 'அதிக தாகம், அடிக்கடி சிறுநீர் கழித்தல்', '40 வயதைக் கடந்தும் இதுவரை உடல் பரிசோதனை செய்யவில்லை'],
    },
  },
  {
    slug: 'orthopaedics',
    group: 'adults',
    img: '/img/h/xray.webp',
    name: { en: 'Orthopaedics', ta: 'எலும்பு & மூட்டு மருத்துவம்' },
    short: {
      en: 'Bones, joints and spine: fractures, arthritis, back pain and sports injuries.',
      ta: 'எலும்பு, மூட்டு, முதுகுத்தண்டு: முறிவு, மூட்டுவலி, முதுகுவலி, விளையாட்டு காயங்கள்.',
    },
    intro:
      'Orthopaedics treats the musculoskeletal system: the bones, joints, ligaments and spine that let us move. Many problems, including early knee arthritis and most back pain, improve with exercise, weight control and physiotherapy before surgery is ever considered.',
    conditions: ['Fractures and dislocations', 'Knee and hip arthritis', 'Back and neck pain', 'Ligament and sports injuries', 'Frozen shoulder', 'Osteoporosis'],
    treatments: ['Plaster and splinting', 'Fracture fixation', 'Joint injections', 'Arthroscopy referrals', 'Physiotherapy plans'],
    when: {
      en: ['A fall followed by swelling or inability to bear weight', 'Joint pain that wakes you at night', 'Back pain with numbness or weakness in a leg', 'Stiffness lasting more than an hour each morning'],
      ta: ['விழுந்த பின் வீக்கம் அல்லது நிற்க முடியாமை', 'இரவில் எழுப்பும் மூட்டுவலி', 'கால் மரத்துப் போதல் அல்லது பலவீனத்துடன் முதுகுவலி', 'காலையில் ஒரு மணி நேரத்திற்கு மேல் நீடிக்கும் விறைப்பு'],
    },
  },
  {
    slug: 'urology',
    group: 'adults',
    img: '/img/h/ot-tower.webp',
    name: { en: 'Urology', ta: 'சிறுநீர்ப்பாதை மருத்துவம்' },
    short: {
      en: 'Kidney stones, prostate and urinary problems, and male reproductive health.',
      ta: 'சிறுநீரகக் கல், புரோஸ்டேட், சிறுநீர்ப் பிரச்சனைகள் மற்றும் ஆண் இனப்பெருக்க நலம்.',
    },
    intro:
      'Urology is the surgical speciality of the urinary tract and the male reproductive organs. Kidney stones are common in the hot Tamil Nadu climate, and most can be prevented by drinking enough water. Urologists also assess male factors in fertility, working alongside the fertility centre.',
    conditions: ['Kidney and ureteric stones', 'Enlarged prostate', 'Urinary tract infections', 'Blood in urine', 'Varicocele', 'Male infertility factors'],
    treatments: ['Stone evaluation and removal', 'Prostate assessment', 'Cystoscopy', 'Male fertility work-up', 'Stone-prevention counselling'],
    when: {
      en: ['Severe pain from the back to the groin', 'Blood in the urine', 'A weak stream or waking often at night to pass urine', 'Burning urine that keeps coming back'],
      ta: ['முதுகிலிருந்து இடுப்பு வரை கடுமையான வலி', 'சிறுநீரில் இரத்தம்', 'பலவீனமான சிறுநீர் ஓட்டம், இரவில் அடிக்கடி எழுதல்', 'மீண்டும் மீண்டும் வரும் சிறுநீர் எரிச்சல்'],
    },
  },
  {
    slug: 'nephrology',
    group: 'adults',
    img: '/img/h/lab.webp',
    name: { en: 'Nephrology', ta: 'சிறுநீரக நோயியல்' },
    short: {
      en: 'Medical care of the kidneys: chronic kidney disease, dialysis planning, BP.',
      ta: 'சிறுநீரகங்களுக்கான மருத்துவ பராமரிப்பு: நாள்பட்ட சிறுநீரக நோய், டயாலிசிஸ் திட்டமிடல்.',
    },
    intro:
      'Where urology operates, nephrology treats with medicine. Diabetes and high blood pressure are the two most common causes of kidney damage in India, and kidney disease is usually silent until late. A simple urine and blood test (creatinine) once a year can find it early.',
    conditions: ['Chronic kidney disease', 'Diabetic kidney disease', 'Acute kidney injury', 'Protein in urine', 'Electrolyte imbalance', 'Swelling of feet and face'],
    treatments: ['Kidney function evaluation', 'Blood pressure and diabetes control for kidney protection', 'Diet counselling', 'Dialysis planning and referral'],
    when: {
      en: ['Swelling around the eyes or ankles', 'Foamy urine', 'You have diabetes or high BP and have never had a kidney test', 'Passing much less urine than usual'],
      ta: ['கண்களைச் சுற்றி அல்லது கணுக்கால் வீக்கம்', 'நுரையுடன் சிறுநீர்', 'சர்க்கரை / இரத்த அழுத்தம் இருந்தும் சிறுநீரகப் பரிசோதனை செய்யாதது', 'வழக்கத்தை விட மிகக் குறைவான சிறுநீர்'],
    },
  },
  {
    slug: 'ent',
    group: 'adults',
    img: '/img/h/consult-desk.webp',
    name: { en: 'ENT', ta: 'காது, மூக்கு, தொண்டை' },
    short: {
      en: 'Ear, nose and throat: sinusitis, tonsils, hearing and voice problems.',
      ta: 'காது, மூக்கு, தொண்டை: சைனஸ், டான்சில், கேட்கும் திறன், குரல் பிரச்சனைகள்.',
    },
    intro:
      'ENT (otorhinolaryngology) covers the connected passages of the ear, nose and throat. Recurrent tonsillitis, chronic sinus blockage, ear discharge and hearing loss are common and treatable, and early hearing checks matter especially for children who are learning to speak.',
    conditions: ['Sinusitis', 'Tonsillitis', 'Ear infections and discharge', 'Hearing loss', 'Nasal polyps', 'Vertigo', 'Voice change'],
    treatments: ['ENT examination', 'Ear cleaning and wax removal', 'Tonsillectomy', 'Sinus surgery referral', 'Hearing assessment'],
    when: {
      en: ['Ear discharge or pain lasting more than a week', 'A blocked nose on one side only', 'Hoarse voice for more than three weeks', 'A child who does not respond to sounds'],
      ta: ['ஒரு வாரத்திற்கு மேல் காது வலி அல்லது சீழ்', 'ஒரு பக்க மூக்கு அடைப்பு', 'மூன்று வாரங்களுக்கு மேல் கரகரப்பான குரல்', 'ஒலிகளுக்கு பதிலளிக்காத குழந்தை'],
    },
  },
  {
    slug: 'dental-maxillofacial',
    group: 'adults',
    img: '/img/h/consult-room.webp',
    name: { en: 'Dental, Oral & Maxillofacial Surgery', ta: 'பல், வாய் & முக அறுவை சிகிச்சை' },
    short: {
      en: 'Teeth, gums and jaw: from fillings and root canals to facial injuries.',
      ta: 'பற்கள், ஈறுகள், தாடை: நிரப்புதல், வேர் சிகிச்சை முதல் முகக் காயங்கள் வரை.',
    },
    intro:
      'Oral health affects the whole body: gum disease is linked with diabetes and with premature birth. The dental team handles routine care, and maxillofacial surgery treats the jaw and face, including impacted wisdom teeth, jaw fractures and growths in the mouth.',
    conditions: ['Tooth decay', 'Gum disease', 'Impacted wisdom teeth', 'Jaw fractures', 'Mouth ulcers and lesions', 'Misaligned teeth'],
    treatments: ['Fillings and root canal treatment', 'Scaling and cleaning', 'Extractions and wisdom-tooth surgery', 'Crowns and dentures', 'Facial trauma care'],
    when: {
      en: ['Bleeding gums when brushing', 'Tooth pain with hot or cold food', 'A mouth ulcer that has not healed in two weeks', 'Swelling of the jaw or face'],
      ta: ['பல் துலக்கும் போது ஈறுகளில் இரத்தம்', 'சூடு அல்லது குளிர் உணவால் பல் வலி', 'இரண்டு வாரங்களாக ஆறாத வாய்ப்புண்', 'தாடை அல்லது முக வீக்கம்'],
    },
  },
  {
    slug: 'dermatology',
    group: 'adults',
    img: '/img/h/consult-desk.webp',
    name: { en: 'Dermatology', ta: 'தோல் மருத்துவம்' },
    short: {
      en: 'Skin, hair and nails: acne, fungal infections, eczema, psoriasis and pigmentation.',
      ta: 'தோல், முடி, நகம்: முகப்பரு, பூஞ்சைத் தொற்று, அரிப்பு, சொரியாசிஸ், நிறமாற்றம்.',
    },
    intro:
      'In a humid climate, fungal infections of the skin are among the most common reasons people visit a doctor, and they return if treatment is stopped early. Dermatology treats conditions of the skin, hair and nails, and recognises when a skin change is a sign of something inside the body.',
    conditions: ['Fungal infections', 'Acne', 'Eczema and allergies', 'Psoriasis', 'Hair fall', 'Pigmentation and vitiligo'],
    treatments: ['Skin examination', 'Medical treatment plans', 'Patch and allergy guidance', 'Minor skin procedures', 'Hair and scalp care'],
    when: {
      en: ['An itchy rash that spreads despite creams', 'A mole that changes in size, shape or colour', 'Sudden or patchy hair loss', 'A wound that will not heal'],
      ta: ['கிரீம் தடவியும் பரவும் அரிப்பு', 'அளவு, வடிவம், நிறம் மாறும் மச்சம்', 'திடீர் அல்லது திட்டுத் திட்டான முடி உதிர்வு', 'ஆறாத புண்'],
    },
  },
  {
    slug: 'oncology',
    group: 'surgery',
    img: '/img/h/ot-carm.webp',
    name: { en: 'Medical & Surgical Oncology', ta: 'புற்றுநோய் மருத்துவம் & அறுவை சிகிச்சை' },
    short: {
      en: 'Cancer screening, diagnosis, surgery and chemotherapy planning.',
      ta: 'புற்றுநோய் பரிசோதனை, கண்டறிதல், அறுவை சிகிச்சை மற்றும் கீமோதெரபி திட்டமிடல்.',
    },
    intro:
      'Breast, cervical and oral cancers are the most common cancers in Tamil Nadu, and all three can be found early by screening. Surgical oncology removes tumours; medical oncology treats with chemotherapy and other medicines. Finding a cancer early is the single biggest factor in a good outcome.',
    conditions: ['Breast lumps', 'Cervical cancer screening', 'Oral cancer and precancer', 'Thyroid nodules', 'Gastrointestinal tumours'],
    treatments: ['Screening and biopsy', 'Cancer surgery', 'Chemotherapy planning', 'Follow-up and survivorship care'],
    when: {
      en: ['A painless lump in the breast or neck', 'A white or red patch in the mouth', 'Bleeding after intercourse or after menopause', 'Unexplained weight loss with loss of appetite'],
      ta: ['மார்பகம் அல்லது கழுத்தில் வலியற்ற கட்டி', 'வாயில் வெள்ளை அல்லது சிவப்பு திட்டு', 'உடலுறவுக்குப் பின் அல்லது மாதவிடாய் நின்ற பின் இரத்தப்போக்கு', 'பசியின்மையுடன் காரணமற்ற எடை இழப்பு'],
    },
  },
  {
    slug: 'neurosurgery',
    group: 'surgery',
    img: '/img/h/xray.webp',
    name: { en: 'Neurosurgery', ta: 'நரம்பியல் அறுவை சிகிச்சை' },
    short: {
      en: 'Surgery of the brain, spine and nerves: head injury, disc problems, tumours.',
      ta: 'மூளை, முதுகுத்தண்டு, நரம்புகளுக்கான அறுவை சிகிச்சை: தலைக்காயம், டிஸ்க், கட்டிகள்.',
    },
    intro:
      'Neurosurgery treats conditions of the brain, spinal cord and nerves that need an operation, from head injuries after road accidents to a slipped disc pressing on a nerve. Wearing a helmet is still the most effective brain surgery there is: the one you never need.',
    conditions: ['Head injury', 'Slipped disc and sciatica', 'Spinal cord compression', 'Brain tumours', 'Hydrocephalus'],
    treatments: ['Neurosurgical assessment', 'Head-injury management', 'Spine surgery', 'Referral for advanced imaging'],
    when: {
      en: ['Any head injury followed by vomiting, drowsiness or confusion', 'Back pain shooting down the leg with weakness', 'Loss of bladder or bowel control', 'A new severe headache unlike any before'],
      ta: ['வாந்தி, மயக்கம், குழப்பத்துடன் கூடிய தலைக்காயம்', 'பலவீனத்துடன் காலுக்கு பரவும் முதுகுவலி', 'சிறுநீர் / மலக் கட்டுப்பாடு இழப்பு', 'இதுவரை இல்லாத கடுமையான புதிய தலைவலி'],
    },
  },
  {
    slug: 'anaesthesiology',
    group: 'surgery',
    img: '/img/h/ot-prep.webp',
    name: { en: 'Anaesthesiology', ta: 'மயக்கவியல்' },
    short: {
      en: 'Safe anaesthesia and pain relief for surgery, childbirth and recovery.',
      ta: 'அறுவை சிகிச்சை, பிரசவம் மற்றும் மீட்புக்கு பாதுகாப்பான மயக்கம் மற்றும் வலி நிவாரணம்.',
    },
    intro:
      'The anaesthesiologist is the doctor who keeps you safe and pain-free during an operation, watching your breathing, heart and blood pressure throughout. They meet you before surgery to plan the safest type of anaesthesia: general, spinal, or a local block.',
    conditions: ['Pre-operative assessment', 'Labour pain relief', 'Post-operative pain', 'High-risk surgical patients'],
    treatments: ['General anaesthesia', 'Spinal and epidural anaesthesia', 'Nerve blocks', 'Pain management after surgery'],
    when: {
      en: ['Before any planned surgery, for a pre-anaesthetic check', 'If you have had a reaction to anaesthesia before', 'To discuss pain relief options for labour', 'If you take blood thinners or diabetes medicine'],
      ta: ['திட்டமிட்ட அறுவை சிகிச்சைக்கு முன் மயக்க பரிசோதனை', 'முன்பு மயக்க மருந்துக்கு எதிர்வினை இருந்தால்', 'பிரசவ வலி நிவாரண வழிகள் பற்றி அறிய', 'இரத்தம் நீர்க்கும் / சர்க்கரை மருந்து எடுத்தால்'],
    },
  },
  {
    slug: 'psychology',
    group: 'adults',
    img: '/img/h/consult-room.webp',
    name: { en: 'Psychology', ta: 'உளவியல்' },
    short: {
      en: 'Counselling for stress, anxiety, depression, and the strain of infertility.',
      ta: 'மன அழுத்தம், பதற்றம், மனச்சோர்வு மற்றும் கருத்தரிப்பு சிகிச்சையின் மன சுமைக்கான ஆலோசனை.',
    },
    intro:
      'Mental health is health. Counselling helps with stress, anxiety, low mood, exam pressure and relationship strain, and is a valued part of fertility treatment, where months of waiting can weigh heavily on both partners. Asking for help early is a sign of strength.',
    conditions: ['Stress and anxiety', 'Depression', 'Fertility-related distress', 'Postnatal mood changes', 'Sleep problems', 'Child behaviour concerns'],
    treatments: ['Individual counselling', 'Couple counselling', 'Postnatal support', 'Behavioural therapy'],
    when: {
      en: ['Low mood most days for more than two weeks', 'Worry that stops you sleeping or working', 'Feeling disconnected from your baby after birth', 'Thoughts of harming yourself: please seek help today'],
      ta: ['இரண்டு வாரங்களுக்கு மேல் பெரும்பாலான நாட்கள் மனச்சோர்வு', 'தூக்கம் அல்லது வேலையைத் தடுக்கும் கவலை', 'பிரசவத்திற்குப் பின் குழந்தையுடன் ஒட்டுதல் இல்லாத உணர்வு', 'தன்னைத் தானே காயப்படுத்தும் எண்ணங்கள் — இன்றே உதவி பெறுங்கள்'],
    },
  },
]

export const groups = {
  women: { en: 'Women & fertility', ta: 'பெண்கள் & கருத்தரிப்பு' },
  children: { en: 'Newborns & children', ta: 'பச்சிளங்குழந்தைகள் & குழந்தைகள்' },
  surgery: { en: 'Surgery', ta: 'அறுவை சிகிச்சை' },
  adults: { en: 'Medicine & specialities', ta: 'மருத்துவம் & சிறப்புப் பிரிவுகள்' },
}
