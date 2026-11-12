import { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLang, useT } from '../i18n.jsx'
import { departments } from '../data/departments.js'
import { site, waLink } from '../data/site.js'
import Icon from './Icon.jsx'

/**
 * Text split into masked words for the GSAP reveal (src/scroll.js).
 * Lines are separated with "|"; words wrapped in *asterisks* render italic.
 * Splitting happens in React, so language switches re-render cleanly.
 */
export function Split({ as: Tag = 'h2', text, className = '', ...rest }) {
  const lines = String(text).split('|')
  return (
    <Tag className={className} data-split {...rest}>
      {lines.map((line, li) => {
        const words = line.trim().split(/\s+/)
        let italic = false
        return (
          <span key={li} style={{ display: 'block' }}>
            {words.map((raw, wi) => {
              const opens = raw.startsWith('*')
              if (opens) italic = true
              const it = italic
              if (/\*[.,!?]?$/.test(raw)) italic = false
              const word = raw.replace(/\*/g, '')
              return (
                <Fragment key={wi}>
                  <span className="sw">
                    <span>{it ? <em>{word}</em> : word}</span>
                  </span>
                  {wi === words.length - 1 ? null : ' '}
                </Fragment>
              )
            })}
          </span>
        )
      })}
    </Tag>
  )
}

/** Chapter heading, Everest style: "Chapter I · Hope" meta, title, lead. */
export function Chap({ num, label, title, lead, id, children }) {
  const t = useT()
  return (
    <div className="chap">
      <div>
        <p className="chap-meta t-meta" data-fade>
          <b>{num}</b> {t(label)}
        </p>
        <Split as="h2" className="t-title" text={t(title)} id={id} />
      </div>
      <div data-fade>
        {lead && <p className="t-lead">{t(lead)}</p>}
        {children}
      </div>
    </div>
  )
}

const BL = {
  en: {
    h: 'Request an appointment',
    name: 'Full name',
    phone: 'Mobile number',
    dept: 'Department',
    any: 'Not sure, please advise',
    day: 'Preferred date',
    send: 'Send on WhatsApp',
    note: 'Opens WhatsApp with your request written. We reply to confirm a time.',
    errName: 'Please enter your name.',
    errPhone: 'Please enter a 10-digit mobile number.',
  },
  ta: {
    h: 'முன்பதிவு கோரிக்கை',
    name: 'முழுப் பெயர்',
    phone: 'கைப்பேசி எண்',
    dept: 'பிரிவு',
    any: 'தெரியவில்லை, ஆலோசனை தேவை',
    day: 'விருப்பமான தேதி',
    send: 'வாட்ஸ்அப்பில் அனுப்பு',
    note: 'உங்கள் கோரிக்கையுடன் வாட்ஸ்அப் திறக்கும். நேரத்தை உறுதிசெய்து பதில் அனுப்புவோம்.',
    errName: 'உங்கள் பெயரை உள்ளிடுங்கள்.',
    errPhone: '10 இலக்க கைப்பேசி எண்ணை உள்ளிடுங்கள்.',
  },
}

export function BookForm({ preset = '' }) {
  const { lang } = useLang()
  const t = useT()
  const s = BL[lang]
  const [f, setF] = useState({ name: '', phone: '', dept: preset, day: '' })
  const [err, setErr] = useState({})
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })
  const submit = (e) => {
    e.preventDefault()
    const digits = f.phone.replace(/\D/g, '').replace(/^91(?=\d{10}$)/, '')
    const next = {}
    if (!f.name.trim()) next.name = s.errName
    if (digits.length !== 10) next.phone = s.errPhone
    setErr(next)
    if (Object.keys(next).length) return
    const d = departments.find((x) => x.slug === f.dept)
    const msg = [
      'Hello, I would like to book an appointment.',
      `Name: ${f.name.trim()}`,
      `Mobile: ${digits}`,
      `Department: ${d ? d.name.en : 'Not sure, please advise'}`,
      f.day ? `Preferred date: ${f.day}` : '',
    ]
      .filter(Boolean)
      .join('\n')
    window.open(waLink(msg), '_blank', 'noopener')
  }
  return (
    <form className="book" onSubmit={submit} noValidate data-fade>
      <h3>{s.h}</h3>
      <label className="field">
        <span>{s.name}</span>
        <input value={f.name} onChange={set('name')} autoComplete="name" aria-invalid={!!err.name} aria-describedby={err.name ? 'b-en' : undefined} />
      </label>
      {err.name && (
        <p className="err" id="b-en">
          {err.name}
        </p>
      )}
      <div className="book-row">
        <label className="field">
          <span>{s.phone}</span>
          <input value={f.phone} onChange={set('phone')} inputMode="tel" autoComplete="tel" aria-invalid={!!err.phone} aria-describedby={err.phone ? 'b-ep' : undefined} />
        </label>
        <label className="field">
          <span>{s.day}</span>
          <input type="date" value={f.day} onChange={set('day')} />
        </label>
      </div>
      {err.phone && (
        <p className="err" id="b-ep">
          {err.phone}
        </p>
      )}
      <label className="field">
        <span>{s.dept}</span>
        <select value={f.dept} onChange={set('dept')}>
          <option value="">{s.any}</option>
          {departments.map((d) => (
            <option key={d.slug} value={d.slug}>
              {t(d.name)}
            </option>
          ))}
        </select>
      </label>
      <button className="btn btn--ink" type="submit">
        <Icon name="chat" /> {s.send}
      </button>
      <p className="book-note">
        {s.note}{' '}
        <a href={site.phoneHref} className="tnum">
          {site.phone}
        </a>
      </p>
    </form>
  )
}

const needs = [
  { en: 'Trying for a baby', ta: 'குழந்தைக்காக முயற்சி', dept: 'fertility' },
  { en: 'Pregnant, or might be', ta: 'கர்ப்பம் / இருக்கலாம்', dept: 'obstetrics-gynaecology' },
  { en: 'Irregular or painful periods', ta: 'ஒழுங்கற்ற / வலிமிகுந்த மாதவிடாய்', dept: 'obstetrics-gynaecology' },
  { en: 'Newborn check', ta: 'பிறந்த குழந்தை பரிசோதனை', dept: 'neonatology' },
  { en: 'My child is unwell', ta: 'குழந்தைக்கு உடல்நலக் குறைவு', dept: 'paediatrics' },
  { en: 'Gallstones, hernia, stomach pain', ta: 'பித்தப்பைக் கல், குடலிறக்கம், வயிற்று வலி', dept: 'general-laparoscopic-surgery' },
  { en: 'Fever, diabetes, blood pressure', ta: 'காய்ச்சல், சர்க்கரை, இரத்த அழுத்தம்', dept: 'general-medicine' },
  { en: 'Bone, joint or back pain', ta: 'எலும்பு, மூட்டு, முதுகு வலி', dept: 'orthopaedics' },
  { en: 'Kidney stones, urine problems', ta: 'சிறுநீரகக் கல், சிறுநீர் பிரச்சனை', dept: 'urology' },
  { en: 'Ear, nose or throat', ta: 'காது, மூக்கு, தொண்டை', dept: 'ent' },
  { en: 'Teeth or jaw', ta: 'பல் அல்லது தாடை', dept: 'dental-maxillofacial' },
  { en: 'Skin, hair or nails', ta: 'தோல், முடி, நகம்', dept: 'dermatology' },
  { en: 'Stress, anxiety, low mood', ta: 'மன அழுத்தம், பதற்றம்', dept: 'psychology' },
  { en: 'A lump that worries me', ta: 'கவலை தரும் கட்டி', dept: 'oncology' },
]

export function Finder() {
  const t = useT()
  const { lang } = useLang()
  const [i, setI] = useState(0)
  const d = departments.find((x) => x.slug === needs[i].dept)
  return (
    <div className="finder">
      <ul className="needs" role="listbox" aria-label={lang === 'ta' ? 'உங்கள் தேவை' : 'What you need help with'} data-stagger>
        {needs.map((n, k) => (
          <li key={k}>
            <button type="button" role="option" aria-selected={i === k} onClick={() => setI(k)}>
              {n[lang]}
            </button>
          </li>
        ))}
      </ul>
      <div className="answer" aria-live="polite" data-fade>
        <img src={d.img} alt="" width="800" height="500" loading="lazy" />
        <div className="answer-body">
          <p className="t-meta" style={{ color: 'var(--gold)' }}>
            {lang === 'ta' ? 'பரிந்துரைக்கப்படும் பிரிவு' : 'We suggest'}
          </p>
          <h3 className="t-sub">{t(d.name)}</h3>
          <p>{t(d.short)}</p>
          <div className="answer-actions">
            <a className="btn" href={waLink(`Hello, I need help with: ${needs[i].en}. Can I book in ${d.name.en}?`)} target="_blank" rel="noreferrer">
              <Icon name="chat" /> {t('book')}
            </a>
            <Link className="link" to={`/departments/${d.slug}`}>
              {lang === 'ta' ? 'மேலும் அறிய' : 'About this department'} <Icon name="arrow" size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Faq({ items }) {
  const t = useT()
  const [open, setOpen] = useState(0)
  return (
    <div className="faq-list" data-stagger>
      {items.map((f, i) => (
        <div key={i} className={`faq-item ${open === i ? 'is-open' : ''}`}>
          <button type="button" className="faq-q" aria-expanded={open === i} aria-controls={`fa-${i}`} onClick={() => setOpen(open === i ? -1 : i)}>
            <span>{t(f.q)}</span>
            <i aria-hidden="true" />
          </button>
          <div className="faq-a" id={`fa-${i}`} role="region">
            <div>
              <p>{t(f.a)}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

/** Inner-page hero: full-bleed photograph, crumbs, split title, lead. */
export function PageHero({ img, alt = '', meta, title, lead, crumbs, short = false, children }) {
  return (
    <section className={`phero ${short ? 'phero--short' : ''}`}>
      <div className="phero-media" data-hero-media>
        <img src={img} alt={alt} width="1600" height="1000" fetchpriority="high" />
      </div>
      <div className="phero-in wrap">
        {crumbs && (
          <nav className="crumbs t-meta" aria-label="Breadcrumb" data-fade>
            {crumbs}
          </nav>
        )}
        {meta && (
          <p className="t-meta" data-fade>
            {meta}
          </p>
        )}
        <Split as="h1" className="t-display" text={title} style={{ maxWidth: '16ch' }} />
        {lead && (
          <p className="t-lead" data-fade>
            {lead}
          </p>
        )}
        {children}
      </div>
    </section>
  )
}

export const faqs = [
  {
    q: { en: 'How do I book an appointment?', ta: 'எப்படி முன்பதிவு செய்வது?' },
    a: {
      en: 'WhatsApp or call +91 84382 37232 with your name, the department you need and a day that suits you. The form on this page writes the message for you.',
      ta: 'உங்கள் பெயர், தேவையான பிரிவு, வசதியான நாள் ஆகியவற்றுடன் +91 84382 37232 எண்ணுக்கு வாட்ஸ்அப் அல்லது அழைப்பு செய்யுங்கள்.',
    },
  },
  {
    q: { en: 'Should both partners come to the first fertility visit?', ta: 'முதல் கருத்தரிப்பு வருகைக்கு இருவரும் வர வேண்டுமா?' },
    a: {
      en: 'Yes. Causes are found in men as often as in women, and testing both partners together saves months. A semen analysis is simple and private.',
      ta: 'ஆம். காரணங்கள் ஆண், பெண் இருவரிடமும் சம அளவில் உள்ளன. இருவரையும் சேர்த்துப் பரிசோதிப்பது பல மாதங்களை மிச்சப்படுத்தும்.',
    },
  },
  {
    q: { en: 'What should I bring to my first visit?', ta: 'முதல் வருகைக்கு என்ன கொண்டு வர வேண்டும்?' },
    a: {
      en: 'Earlier prescriptions, scan and lab reports, discharge summaries, the medicines you take (or photos of their labels) and an ID card.',
      ta: 'முந்தைய மருந்துச் சீட்டுகள், ஸ்கேன் & ஆய்வக அறிக்கைகள், டிஸ்சார்ஜ் சுருக்கங்கள், நீங்கள் எடுக்கும் மருந்துகள், அடையாள அட்டை.',
    },
  },
  {
    q: { en: 'How long is the stay after keyhole surgery?', ta: 'சாவித்துளை அறுவைக்குப் பின் எத்தனை நாள் தங்க வேண்டும்?' },
    a: {
      en: 'For a laparoscopic gallbladder or appendix operation, usually one to two days. Your surgeon will explain what to expect for your own procedure.',
      ta: 'லேப்ராஸ்கோபிக் பித்தப்பை அல்லது குடல்வால் அறுவைக்கு பொதுவாக ஒன்று முதல் இரண்டு நாட்கள்.',
    },
  },
  {
    q: { en: 'When is the out-patient clinic open?', ta: 'வெளிநோயாளர் பிரிவு எப்போது திறந்திருக்கும்?' },
    a: {
      en: 'Please call +91 84382 37232 to confirm today’s consultation hours for the doctor you want to see.',
      ta: 'நீங்கள் பார்க்க விரும்பும் மருத்துவரின் இன்றைய ஆலோசனை நேரத்தை +91 84382 37232 எண்ணில் உறுதிசெய்யவும்.',
    },
  },
  {
    q: { en: 'Where is the hospital?', ta: 'மருத்துவமனை எங்கே உள்ளது?' },
    a: {
      en: 'Mahathma Gandhi Road, Soodamanipuram, Ananda Nagar, Karaikudi 630003. The contact page has a map and directions.',
      ta: 'மகாத்மா காந்தி சாலை, சூடாமணிபுரம், ஆனந்த நகர், காரைக்குடி 630003.',
    },
  },
]
