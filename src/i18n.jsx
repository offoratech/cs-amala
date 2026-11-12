import { createContext, useContext, useEffect, useState } from 'react'

const LangContext = createContext({ lang: 'en', setLang: () => {} })

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem('lang') || 'en'
    } catch {
      return 'en'
    }
  })
  useEffect(() => {
    document.documentElement.lang = lang
    try {
      localStorage.setItem('lang', lang)
    } catch {
      /* private mode */
    }
  }, [lang])
  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>
}

/** useT() returns t(value): picks the current language from {en, ta} objects or a UI key. */
export function useT() {
  const { lang } = useContext(LangContext)
  return (v) => {
    if (v == null) return ''
    if (typeof v === 'string') return ui[v]?.[lang] ?? ui[v]?.en ?? v
    return v[lang] ?? v.en
  }
}

export function useLang() {
  return useContext(LangContext)
}

export const ui = {
  navHome: { en: 'Home', ta: 'முகப்பு' },
  navFertility: { en: 'Fertility', ta: 'கருத்தரிப்பு' },
  navDepartments: { en: 'Departments', ta: 'சிகிச்சைப் பிரிவுகள்' },
  navLearn: { en: 'Learn', ta: 'அறிவோம்' },
  navDoctors: { en: 'Doctors', ta: 'மருத்துவர்கள்' },
  navContact: { en: 'Contact', ta: 'தொடர்பு' },
  book: { en: 'Book on WhatsApp', ta: 'வாட்ஸ்அப்பில் முன்பதிவு' },
  bookShort: { en: 'Book', ta: 'முன்பதிவு' },
  call: { en: 'Call', ta: 'அழைக்க' },
  menu: { en: 'Menu', ta: 'பட்டியல்' },
  close: { en: 'Close', ta: 'மூடு' },
  readMore: { en: 'Read', ta: 'படிக்க' },
  minRead: { en: 'min read', ta: 'நிமிட வாசிப்பு' },
  conditions: { en: 'Conditions we see', ta: 'நாங்கள் பார்க்கும் நிலைகள்' },
  treatments: { en: 'Care and procedures', ta: 'சிகிச்சைகள் & செயல்முறைகள்' },
  whenToSee: { en: 'When to see a doctor', ta: 'எப்போது மருத்துவரைப் பார்க்க வேண்டும்' },
  bookDept: { en: 'Ask about this department', ta: 'இந்தப் பிரிவு பற்றி கேட்க' },
  allDepts: { en: 'All departments', ta: 'அனைத்துப் பிரிவுகளும்' },
  related: { en: 'Read next', ta: 'அடுத்து படிக்க' },
  keyPoints: { en: 'In short', ta: 'சுருக்கமாக' },
  englishOnly: {
    en: '',
    ta: 'முழுக் கட்டுரை தற்போது ஆங்கிலத்தில் மட்டும் உள்ளது.',
  },
  disclaimer: {
    en: 'This page is general health information, not a diagnosis. Please consult a doctor about your own situation.',
    ta: 'இது பொதுவான சுகாதாரத் தகவல், நோயறிதல் அல்ல. உங்கள் நிலை பற்றி மருத்துவரை அணுகவும்.',
  },
  footerNote: {
    en: 'Concept website prepared by OFFORA Tech for CS Multispeciality Hospital & Amala Fertility Centre.',
    ta: 'சி.எஸ். மல்டிஸ்பெஷாலிட்டி மருத்துவமனை & அமலா கருத்தரிப்பு மையத்திற்காக OFFORA Tech தயாரித்த மாதிரி இணையதளம்.',
  },
}
