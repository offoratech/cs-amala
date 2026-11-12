// Patient education. General information reviewed against standard guidance (WHO, NICE, FOGSI);
// the hospital's doctors should read and approve every article before launch.
export const articles = [
  {
    slug: 'ivf-step-by-step',
    cat: 'fertility',
    img: '/img/h/ivf-lab.webp',
    minutes: 7,
    title: { en: 'IVF, one step at a time', ta: 'IVF — படிப்படியாக' },
    summary: {
      en: 'What actually happens in a cycle of in vitro fertilisation, from the first injection to the pregnancy test.',
      ta: 'முதல் ஊசி முதல் கர்ப்ப பரிசோதனை வரை, ஒரு IVF சுழற்சியில் உண்மையில் என்ன நடக்கிறது.',
    },
    points: {
      en: ['A cycle takes about four to six weeks', 'Egg collection is a short procedure under sedation', 'Embryos grow in the lab for three to five days', 'The pregnancy test is about two weeks after transfer'],
      ta: ['ஒரு சுழற்சிக்கு சுமார் 4–6 வாரங்கள்', 'கருமுட்டை எடுப்பது மயக்கத்தில் செய்யப்படும் சிறிய செயல்முறை', 'கருக்கள் ஆய்வகத்தில் 3–5 நாட்கள் வளர்க்கப்படும்', 'கரு மாற்றத்திற்கு சுமார் 2 வாரங்கள் கழித்து கர்ப்ப பரிசோதனை'],
    },
    body: [
      { h: 'Who IVF is for', p: ['In vitro fertilisation means fertilisation “in glass”: the egg and sperm meet in the laboratory instead of inside the fallopian tube. It is recommended when the tubes are blocked or damaged, when sperm numbers are very low, when endometriosis or age has reduced the chances of natural conception, or when simpler treatments such as IUI have not worked after several cycles.', 'IVF is not the first step for most couples. A good evaluation of both partners often finds a cause that can be treated more simply.'] },
      { h: 'Stimulation: about ten to twelve days', p: ['Normally the ovary releases one egg a month. In IVF, daily hormone injections encourage several follicles to grow at once, so that more eggs can be collected. You will have transvaginal ultrasound scans and sometimes blood tests every two or three days so the doctor can adjust the dose.', 'When the follicles reach the right size, a “trigger” injection matures the eggs. Timing matters: collection is planned for about 34 to 36 hours later.'] },
      { h: 'Egg collection and fertilisation', p: ['Under light sedation, a fine needle guided by ultrasound passes through the vaginal wall into each follicle and draws out the fluid containing the egg. It takes 15 to 30 minutes and you go home the same day.', 'On the same morning the male partner gives a semen sample. In conventional IVF, eggs and prepared sperm are placed together in a dish. In ICSI, an embryologist injects a single sperm into each egg, which is the preferred method when sperm count or movement is low.'] },
      { h: 'Embryo transfer and the two-week wait', p: ['The fertilised eggs grow into embryos in an incubator for three to five days. One, or sometimes two, of the healthiest embryos are placed in the uterus with a soft, thin catheter. It feels similar to a Pap smear and needs no anaesthesia. Good-quality embryos that are not transferred can be frozen for a later attempt.', 'Progesterone support continues, and a blood pregnancy test (beta hCG) is done about two weeks later. The wait is hard; counselling and an honest conversation with your doctor about chances, based on age and your own results, help.'] },
    ],
  },
  {
    slug: 'iui-explained',
    cat: 'fertility',
    img: '/img/h/procedure-room.webp',
    minutes: 4,
    title: { en: 'IUI: the gentle first step', ta: 'IUI — மென்மையான முதல் படி' },
    summary: {
      en: 'Intrauterine insemination places prepared sperm close to the egg at the right moment. Who it helps and what to expect.',
      ta: 'சரியான நேரத்தில் சுத்திகரிக்கப்பட்ட விந்தணுக்களை கருமுட்டைக்கு அருகில் வைக்கும் முறை.',
    },
    points: {
      en: ['Needs at least one open fallopian tube', 'Timed with follicle-tracking scans', 'The procedure itself takes a few minutes', 'Usually tried for three to four cycles'],
      ta: ['குறைந்தது ஒரு கருக்குழாய் திறந்திருக்க வேண்டும்', 'ஃபாலிக்கிள் ஸ்கேன் மூலம் நேரம் கணக்கிடப்படும்', 'செயல்முறைக்கு சில நிமிடங்களே', 'பொதுவாக 3–4 சுழற்சிகள் முயற்சிக்கப்படும்'],
    },
    body: [
      { h: 'How it works', p: ['In IUI, a semen sample is washed and concentrated in the lab to select the most active sperm. Around the time of ovulation, these are placed directly into the uterus through a thin, soft tube. This shortens the sperm’s journey and puts more of them near the egg at the right moment.', 'It is often combined with tablets or low-dose injections that help one or two follicles mature, and a scan confirms the right day.'] },
      { h: 'Who it helps', p: ['IUI suits couples with mild sperm problems, irregular ovulation that responds to medicine, cervical factors, or unexplained infertility where both tubes are open. It is not suitable when both tubes are blocked or when sperm counts are very low; then IVF or ICSI is the better choice.'] },
      { h: 'What to expect', p: ['There is no anaesthesia and you can return to normal activity the same day. Some women feel mild cramps. A pregnancy test is done about two weeks later. If pregnancy has not happened after three or four well-timed cycles, it is usually time to discuss the next step.'] },
    ],
  },
  {
    slug: 'pcos',
    cat: 'fertility',
    img: '/img/h/scan-room.webp',
    minutes: 6,
    title: { en: 'PCOS, plainly explained', ta: 'PCOS — எளிய விளக்கம்' },
    summary: {
      en: 'Polycystic ovary syndrome is the most common cause of irregular periods. It is manageable, and most women with PCOS can conceive.',
      ta: 'ஒழுங்கற்ற மாதவிடாய்க்கு மிகப் பொதுவான காரணம். கட்டுப்படுத்தக்கூடியது; பெரும்பாலான பெண்கள் கருத்தரிக்க முடியும்.',
    },
    points: {
      en: ['Affects roughly one woman in ten', 'Irregular periods are the main sign', 'Losing 5–10% of body weight can restore ovulation', 'Ovulation induction works for most'],
      ta: ['சுமார் பத்தில் ஒரு பெண்ணைப் பாதிக்கிறது', 'ஒழுங்கற்ற மாதவிடாய் முக்கிய அறிகுறி', 'உடல் எடையில் 5–10% குறைத்தால் கருமுட்டை வெளியாதல் மீளலாம்', 'பெரும்பாலானோருக்கு மருந்து மூலம் கருமுட்டை தூண்டுதல் பலன் தரும்'],
    },
    body: [
      { h: 'What PCOS is', p: ['In polycystic ovary syndrome the ovaries do not release an egg every month. Many small follicles start to grow but stop before one becomes dominant, which is what the ultrasound shows as a “string of pearls”. Higher levels of male-type hormones and insulin resistance are often part of the picture.', 'Doctors diagnose it when two of three features are present: irregular or absent ovulation, signs of raised androgens (acne, extra facial hair, or a blood test), and polycystic-looking ovaries on scan, after other causes have been ruled out.'] },
      { h: 'Why it matters beyond fertility', p: ['PCOS raises the long-term risk of type 2 diabetes, high cholesterol and, if periods are very infrequent, thickening of the womb lining. Regular check-ups for sugar and blood pressure are part of good care, whether or not you are trying for a baby.'] },
      { h: 'Treatment', p: ['For many women, regular exercise and a balanced diet that cuts refined sugar make the biggest difference; even modest weight loss often brings periods back. For those trying to conceive, tablets such as letrozole help the ovary release an egg, with scans to track the follicle. If that does not work, low-dose injections, laparoscopic ovarian drilling, or IVF are options.'] },
    ],
  },
  {
    slug: 'endometriosis',
    cat: 'fertility',
    img: '/img/h/ot-tower.webp',
    minutes: 5,
    title: { en: 'When period pain is not normal', ta: 'மாதவிடாய் வலி சாதாரணமல்ல எனும்போது' },
    summary: {
      en: 'Endometriosis can take years to diagnose. Why a surgeon and a fertility specialist under one roof matters for it.',
      ta: 'எண்டோமெட்ரியோசிஸ் கண்டறிய பல ஆண்டுகள் ஆகலாம். அறுவை நிபுணரும் கருத்தரிப்பு நிபுணரும் ஒரே இடத்தில் இருப்பது ஏன் முக்கியம்.',
    },
    points: {
      en: ['Pain that stops daily life is a reason to see a doctor', 'Laparoscopy can both diagnose and treat it', 'It is a common cause of infertility', 'Treatment is planned around your wish to conceive'],
      ta: ['அன்றாட வாழ்க்கையை நிறுத்தும் வலி மருத்துவரைப் பார்க்க ஒரு காரணம்', 'லேப்ராஸ்கோபி மூலம் கண்டறியவும் சிகிச்சையளிக்கவும் முடியும்', 'கருவுறாமைக்கு ஒரு பொதுவான காரணம்', 'கருத்தரிக்கும் விருப்பத்தைப் பொறுத்து சிகிச்சை திட்டமிடப்படும்'],
    },
    body: [
      { h: 'What it is', p: ['In endometriosis, tissue similar to the lining of the womb grows outside it: on the ovaries, the tubes, or the lining of the pelvis. It bleeds with each cycle but cannot leave the body, causing inflammation, scarring and pain. Cysts on the ovary, called endometriomas or “chocolate cysts”, are one form.'] },
      { h: 'Signs to take seriously', p: ['Period pain that makes you miss school or work, pain during intercourse, pain on passing stools during periods, and difficulty conceiving. Many women are told this pain is normal; it is not.'] },
      { h: 'Why the two specialities work together', p: ['Ultrasound can show cysts, but small patches are seen only by laparoscopy, a keyhole operation with a camera. During the same procedure a skilled laparoscopic surgeon can remove the patches and cysts and check whether the tubes are open, while the fertility specialist plans the treatment that follows: trying naturally, IUI, or IVF. Having both under one roof means one plan, not two separate opinions.'] },
    ],
  },
  {
    slug: 'male-fertility',
    cat: 'fertility',
    img: '/img/h/ivf-microscope.webp',
    minutes: 4,
    title: { en: 'Fertility is a two-person test', ta: 'கருத்தரிப்பு — இருவருக்குமான பரிசோதனை' },
    summary: {
      en: 'Male factors are involved in about half of couples who struggle to conceive. A semen analysis is simple, private and essential.',
      ta: 'கருத்தரிக்க சிரமப்படும் தம்பதியரில் பாதியில் ஆண் காரணிகளும் உள்ளன. விந்து பரிசோதனை எளிமையானது, அவசியமானது.',
    },
    points: {
      en: ['Test both partners at the first visit', 'Abstain 2–5 days before a semen analysis', 'Smoking, heat and alcohol lower sperm quality', 'Sperm take about 74 days to form, so changes take three months'],
      ta: ['முதல் வருகையிலேயே இருவருக்கும் பரிசோதனை', 'விந்து பரிசோதனைக்கு முன் 2–5 நாட்கள் உறவைத் தவிர்க்கவும்', 'புகை, வெப்பம், மது விந்தணு தரத்தைக் குறைக்கும்', 'விந்தணு உருவாக சுமார் 74 நாட்கள் — மாற்றங்கள் தெரிய மூன்று மாதங்கள்'],
    },
    body: [
      { h: 'Why men should be tested early', p: ['It is common for a woman to go through many tests before her husband is asked for a single sample. That costs time. A semen analysis looks at the number of sperm, how well they move, and their shape, and it is the quickest test in the whole fertility work-up.'] },
      { h: 'What affects sperm', p: ['Smoking and tobacco chewing, alcohol, obesity, diabetes, long hours in hot environments, tight clothing, some medicines and a varicocele (swollen veins above the testis) can all lower sperm quality. Because new sperm take about two and a half months to develop, healthy changes show up in a repeat test after three months.'] },
      { h: 'Treatment options', p: ['Mild problems may respond to lifestyle change and treatment of the cause. When counts are lower, IUI concentrates the best sperm; when they are very low, ICSI needs only one healthy sperm for each egg.'] },
    ],
  },
  {
    slug: 'laparoscopy-keyhole-surgery',
    cat: 'surgery',
    img: '/img/h/ot-table.webp',
    minutes: 5,
    title: { en: 'Keyhole surgery, explained', ta: 'சாவித்துளை அறுவை சிகிச்சை — விளக்கம்' },
    summary: {
      en: 'How laparoscopic surgery works, why recovery is faster, and how to prepare for it.',
      ta: 'லேப்ராஸ்கோபிக் அறுவை சிகிச்சை எப்படி செய்யப்படுகிறது, ஏன் விரைவில் குணமாகிறது, எப்படி தயாராவது.',
    },
    points: {
      en: ['Three or four cuts of 5–10 mm instead of one long incision', 'Most patients walk the same day', 'Fast for 6–8 hours before surgery', 'Tell your doctor about blood thinners and diabetes medicine'],
      ta: ['ஒரு நீண்ட வெட்டுக்கு பதிலாக 5–10 மி.மீ. அளவில் 3–4 சிறு துளைகள்', 'பெரும்பாலானோர் அன்றே நடக்கலாம்', 'அறுவைக்கு முன் 6–8 மணி நேரம் உண்ணாமல் இருக்கவும்', 'இரத்தம் நீர்க்கும் மருந்து, சர்க்கரை மருந்து பற்றி மருத்துவரிடம் சொல்லவும்'],
    },
    body: [
      { h: 'How it is done', p: ['Under general anaesthesia, the abdomen is gently filled with carbon dioxide gas to create space. A thin telescope with a camera goes in through a small cut near the navel, and the surgeon watches a high-definition screen while working with long, slender instruments through two or three other small openings.'] },
      { h: 'Why recovery is quicker', p: ['Smaller wounds mean less pain, less blood loss, a lower risk of wound infection and hernia, and smaller scars. Most people who have their gallbladder or appendix removed this way go home within one or two days and return to desk work within a week or two. Some shoulder-tip pain from the gas is normal for a day or two.'] },
      { h: 'Preparing for surgery', p: ['Bring all your reports and a list of your medicines. You will meet the anaesthesiologist for a pre-operative check. Do not eat for six to eight hours before the operation, arrange for someone to take you home, and ask about which medicines to stop and when.'] },
    ],
  },
  {
    slug: 'pregnancy-trimester-guide',
    cat: 'pregnancy',
    img: '/img/h/scan-room.webp',
    minutes: 8,
    title: { en: 'Your pregnancy, trimester by trimester', ta: 'உங்கள் கர்ப்பம் — மூன்று பருவங்களாக' },
    summary: {
      en: 'The scans, tests and warning signs of each stage of pregnancy, on one page.',
      ta: 'கர்ப்பத்தின் ஒவ்வொரு பருவத்திலும் தேவையான ஸ்கேன், பரிசோதனை, எச்சரிக்கை அறிகுறிகள்.',
    },
    points: {
      en: ['Start folic acid before conception if you can', 'Key scans: dating (6–9 wk), NT (11–14 wk), anomaly (18–22 wk)', 'Screen for diabetes at 24–28 weeks', 'Count your baby’s movements from 28 weeks'],
      ta: ['முடிந்தால் கருத்தரிக்கும் முன்பே ஃபோலிக் அமிலம் தொடங்குங்கள்', 'முக்கிய ஸ்கேன்கள்: 6–9 வாரம், 11–14 வாரம் (NT), 18–22 வாரம் (அனாமலி)', '24–28 வாரங்களில் சர்க்கரை பரிசோதனை', '28 வாரங்களிலிருந்து குழந்தையின் அசைவுகளை எண்ணுங்கள்'],
    },
    body: [
      { h: 'First trimester: weeks 1 to 13', p: ['Book your first visit as soon as the test is positive. An early scan confirms that the pregnancy is in the womb, checks the heartbeat and sets your due date. Blood tests check haemoglobin, blood group, sugar, thyroid and infections. Folic acid continues until 12 weeks to protect the baby’s spine.', 'The nuchal translucency (NT) scan between 11 and 14 weeks, with a blood test, screens for chromosomal conditions. Nausea is common; small frequent meals help. Bleeding or severe one-sided pain needs prompt review.'] },
      { h: 'Second trimester: weeks 14 to 27', p: ['Energy usually returns. The anomaly scan at 18 to 22 weeks looks carefully at the baby’s organs. Iron and calcium supplements start, and tetanus-diphtheria vaccination is given. A glucose tolerance test between 24 and 28 weeks screens for gestational diabetes, which is common in South Asian women and very manageable when found.'] },
      { h: 'Third trimester: week 28 to birth', p: ['Visits become more frequent. Your blood pressure and urine are checked each time to catch pre-eclampsia, and growth scans may be done. Learn your baby’s pattern of movements and report any reduction the same day. Plan your route to the hospital and pack your bag by 36 weeks.'] },
      { h: 'Go to hospital straight away if', p: ['You have vaginal bleeding, fluid leaking, severe headache with blurred vision, swelling of the face and hands, reduced baby movements, fever, or regular painful contractions before 37 weeks.'] },
    ],
  },
  {
    slug: 'newborn-first-28-days',
    cat: 'children',
    img: '/img/h/newborn-warmer.webp',
    minutes: 6,
    title: { en: 'The first 28 days at home', ta: 'வீட்டில் முதல் 28 நாட்கள்' },
    summary: {
      en: 'Feeding, warmth, jaundice, cord care and the danger signs every new family should know.',
      ta: 'பாலூட்டுதல், கதகதப்பு, மஞ்சள் காமாலை, தொப்புள்கொடி பராமரிப்பு மற்றும் அபாய அறிகுறிகள்.',
    },
    points: {
      en: ['Breastfeed within the first hour, then on demand', 'Keep the cord stump clean and dry; apply nothing', 'Skin-to-skin contact keeps babies warm', 'BCG, OPV and Hepatitis B vaccines at birth'],
      ta: ['பிறந்த முதல் மணி நேரத்திற்குள் தாய்ப்பால், பின்னர் தேவைக்கேற்ப', 'தொப்புள்கொடியை சுத்தமாகவும் உலர்வாகவும் வையுங்கள்; எதையும் தடவ வேண்டாம்', 'தோலோடு தோல் தொடர்பு குழந்தையை கதகதப்பாக வைக்கும்', 'பிறந்தவுடன் BCG, OPV, ஹெபடைடிஸ் B தடுப்பூசிகள்'],
    },
    body: [
      { h: 'Feeding', p: ['Breast milk is all a baby needs for the first six months; not even water is required. The thick yellow first milk, colostrum, is rich in antibodies. Feed eight to twelve times a day. Six or more wet nappies a day after the first week and steady weight gain show that the baby is getting enough.'] },
      { h: 'Jaundice', p: ['Mild yellowing between days two and five is common and usually fades. Check in daylight by gently pressing the skin on the forehead and chest. Jaundice in the first 24 hours, yellow palms and soles, or a baby who is too sleepy to feed needs to be seen the same day; phototherapy is simple and effective.'] },
      { h: 'Cord, bath and warmth', p: ['The cord stump falls off in one to two weeks. Keep it dry and do not apply oil, powder or anything else. Sponge-bathe until it falls off. Dress the baby in one more layer than an adult, and keep the head covered in a cool room.'] },
      { h: 'Danger signs', p: ['Seek care immediately for fever or a cold body, fast or difficult breathing, convulsions, not feeding, vomiting everything, a red or smelly cord, or a baby who is unusually floppy or difficult to wake.'] },
    ],
  },
  {
    slug: 'kidney-stones',
    cat: 'adults',
    img: '/img/h/lab.webp',
    minutes: 4,
    title: { en: 'Kidney stones in a hot climate', ta: 'வெப்பமான காலநிலையில் சிறுநீரகக் கல்' },
    summary: {
      en: 'Why stones are common in Tamil Nadu, how to tell if you have one, and how to stop the next one.',
      ta: 'தமிழ்நாட்டில் கற்கள் ஏன் அதிகம், அதை எப்படி அறிவது, அடுத்ததைத் தடுப்பது எப்படி.',
    },
    points: {
      en: ['Drink enough to pass 2.5 litres of urine a day', 'Pale urine is the target', 'Cut down on salt; do not cut calcium', 'Fever with stone pain is an emergency'],
      ta: ['ஒரு நாளில் 2.5 லிட்டர் சிறுநீர் வெளியேறும் அளவு நீர் அருந்துங்கள்', 'வெளிர் நிற சிறுநீர் தான் இலக்கு', 'உப்பைக் குறையுங்கள்; கால்சியத்தை அல்ல', 'கல் வலியுடன் காய்ச்சல் இருந்தால் அவசரம்'],
    },
    body: [
      { h: 'Why they form', p: ['When we sweat a lot and drink too little, urine becomes concentrated and minerals crystallise into stones. A high-salt diet, too much animal protein and a family history all add to the risk.'] },
      { h: 'Recognising one', p: ['Stone pain, called renal colic, is sudden, severe and comes in waves, starting in the back or side and moving towards the groin. There may be blood in the urine, nausea and frequent urination. An ultrasound or CT scan confirms it.'] },
      { h: 'Treatment and prevention', p: ['Small stones often pass on their own with fluids and pain relief. Larger ones may need a procedure by the urologist. To prevent the next one, drink enough water to keep urine pale throughout the day, reduce salt and packaged food, and keep normal calcium intake from food, which actually lowers stone risk.'] },
    ],
  },
  {
    slug: 'fertility-myths',
    cat: 'fertility',
    img: '/img/h/consult-room.webp',
    minutes: 5,
    title: { en: 'Seven fertility myths, answered', ta: 'கருத்தரிப்பு பற்றிய ஏழு தவறான நம்பிக்கைகள்' },
    summary: {
      en: 'Beliefs that delay couples from getting help, and what the evidence says instead.',
      ta: 'தம்பதியர் உதவி பெறுவதைத் தாமதப்படுத்தும் நம்பிக்கைகள் — உண்மை என்ன.',
    },
    points: {
      en: ['Infertility is as often male as female', 'Age affects egg numbers from the early thirties', 'IVF babies are as healthy as other babies', 'Stress alone rarely causes infertility'],
      ta: ['கருவுறாமை ஆண், பெண் இருவரிடமும் சம அளவில்', '30 வயதின் தொடக்கத்திலிருந்தே வயது கருமுட்டை எண்ணிக்கையைப் பாதிக்கிறது', 'IVF குழந்தைகள் மற்ற குழந்தைகளைப் போலவே ஆரோக்கியமானவர்கள்', 'மன அழுத்தம் மட்டும் அரிதாகவே கருவுறாமைக்கு காரணம்'],
    },
    body: [
      { h: 'Myth: it is usually the woman’s problem', p: ['Fact: in about a third of couples the cause is in the man, in a third in the woman, and in the rest both or neither. Both partners should be tested together from the start.'] },
      { h: 'Myth: we are young, so there is no hurry', p: ['Fact: a woman is born with all the eggs she will ever have, and their number and quality decline steadily from the early thirties and faster after 35. If you are over 35 and have been trying for six months, see a specialist.'] },
      { h: 'Myth: IVF babies are weaker', p: ['Fact: millions of children have been born through IVF since 1978. They grow and develop like other children. The risks that do exist mostly relate to twins, which is why transferring a single embryo is increasingly preferred.'] },
      { h: 'Myth: just relax and it will happen', p: ['Fact: stress is real and deserves support, but it is rarely the cause on its own. Telling a couple to relax can delay a diagnosis that has a simple treatment.'] },
      { h: 'Myth: irregular periods will settle after marriage', p: ['Fact: irregular cycles usually mean irregular ovulation, often from PCOS or thyroid problems. Both are easy to test for and treat.'] },
      { h: 'Myth: fertility treatment always means IVF', p: ['Fact: many couples conceive after correcting ovulation, treating a thyroid problem, timed intercourse or IUI. IVF is one step on a ladder, not the starting point.'] },
      { h: 'Myth: if you have had one child, you cannot have trouble with the next', p: ['Fact: secondary infertility is common. Age, weight changes, infections or a previous caesarean can all play a part. The same evaluation applies.'] },
    ],
  },
]

export const articleCats = {
  fertility: { en: 'Fertility', ta: 'கருத்தரிப்பு' },
  pregnancy: { en: 'Pregnancy', ta: 'கர்ப்பம்' },
  children: { en: 'Newborns & children', ta: 'குழந்தைகள்' },
  surgery: { en: 'Surgery', ta: 'அறுவை சிகிச்சை' },
  adults: { en: 'Everyday health', ta: 'அன்றாட ஆரோக்கியம்' },
}
