// Facts taken from the hospital's current NFC profile page.
// Anything marked CONFIRM is a reasonable reading that the client must check before launch.
export const site = {
  name: { en: 'CS Multispeciality Hospital', ta: 'சி.எஸ். மல்டிஸ்பெஷாலிட்டி மருத்துவமனை' },
  fertility: { en: 'Amala Fertility Centre', ta: 'அமலா கருத்தரிப்பு மையம்' },
  city: { en: 'Karaikudi, Tamil Nadu', ta: 'காரைக்குடி, தமிழ்நாடு' },
  phone: '+91 84382 37232',
  phoneHref: 'tel:+918438237232',
  whatsapp: '918438237232',
  email: 'stalinthangs2@gmail.com',
  address: {
    en: 'Mahathma Gandhi Road, Soodamanipuram, Ananda Nagar, Karaikudi, Tamil Nadu 630003',
    ta: 'மகாத்மா காந்தி சாலை, சூடாமணிபுரம், ஆனந்த நகர், காரைக்குடி, தமிழ்நாடு 630003',
  },
  mapLink: 'https://maps.app.goo.gl/Eif5RKcWmUKjekWM7',
  mapEmbed:
    'https://www.google.com/maps?q=CS+Multispeciality+Hospital,+Mahathma+Gandhi+Road,+Soodamanipuram,+Karaikudi+630003&output=embed',
  reviewLink:
    'https://www.google.com/search?q=CS+Multispeciality+Hospital+Karaikudi+reviews',
  website: 'http://csmultispecialityhospital.com',
  instagram: 'https://www.instagram.com/csmultispeciality',
  facebook: 'https://www.facebook.com/profile.php?id=61553024150570',
}

export function waLink(text) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`
}

export const doctors = [
  {
    id: 'stalin',
    name: { en: 'Dr. C. Stalin Raja', ta: 'டாக்டர் சி. ஸ்டாலின் ராஜா' },
    role: {
      en: 'Managing Director, CS Multispeciality Hospital',
      ta: 'நிர்வாக இயக்குநர், சி.எஸ். மல்டிஸ்பெஷாலிட்டி மருத்துவமனை',
    },
    field: { en: 'General & laparoscopic surgery', ta: 'பொது மற்றும் லேப்ராஸ்கோபிக் அறுவை சிகிச்சை' },
    photo: '/img/dr-stalin.webp',
    quals: [
      ['MBBS', 'Bachelor of Medicine and Bachelor of Surgery'],
      ['MS', 'Master of Surgery (General Surgery)'],
      ['FIAGES', 'Fellow, Indian Association of Gastrointestinal Endo-Surgeons'],
      ['FALS', 'Fellowship in Advanced Laparoscopic Surgery'],
      ['FAIS', 'Fellow, Association of Surgeons of India'],
    ],
    focus: {
      en: [
        'Keyhole (laparoscopic) removal of the gallbladder and appendix',
        'Hernia repair, open and laparoscopic',
        'Diagnostic laparoscopy, including for women referred by the fertility centre',
        'Abdominal and emergency surgery',
      ],
      ta: [
        'பித்தப்பை, குடல்வால் — லேப்ராஸ்கோபிக் (சாவித்துளை) அறுவை சிகிச்சை',
        'குடலிறக்கம் (ஹெர்னியா) சீரமைப்பு',
        'கருத்தரிப்பு மையத்திலிருந்து பரிந்துரைக்கப்படும் பெண்களுக்கான நோயறி லேப்ராஸ்கோபி',
        'வயிற்று மற்றும் அவசர அறுவை சிகிச்சைகள்',
      ],
    },
  },
  {
    id: 'amala',
    name: { en: 'Dr. S. Amala Stalin Raja', ta: 'டாக்டர் எஸ். அமலா ஸ்டாலின் ராஜா' },
    role: { en: 'Amala Fertility Centre', ta: 'அமலா கருத்தரிப்பு மையம்' },
    field: {
      en: 'Obstetrics, gynaecology & reproductive medicine',
      ta: 'மகப்பேறு, மகளிர் நலம் மற்றும் இனப்பெருக்க மருத்துவம்',
    },
    photo: '/img/dr-amala.webp',
    quals: [
      ['MBBS', 'Bachelor of Medicine and Bachelor of Surgery'],
      ['MD (OG)', 'Doctor of Medicine in Obstetrics & Gynaecology'],
      ['FRM', 'Fellowship in Reproductive Medicine'],
      ['DRM (Germany)', 'Diploma in Reproductive Medicine, Germany'],
    ],
    focus: {
      en: [
        'Fertility evaluation for couples, both partners together',
        'Ovulation induction, follicle tracking and IUI',
        'IVF and ICSI planning and counselling',
        'Pregnancy care from the first scan to delivery',
      ],
      ta: [
        'தம்பதியருக்கான கருத்தரிப்பு பரிசோதனை — இருவருக்கும் சேர்த்து',
        'கருமுட்டை தூண்டுதல், ஃபாலிக்கிள் கண்காணிப்பு மற்றும் IUI',
        'IVF, ICSI திட்டமிடல் மற்றும் ஆலோசனை',
        'முதல் ஸ்கேன் முதல் பிரசவம் வரை கர்ப்பகால பராமரிப்பு',
      ],
    },
  },
]
