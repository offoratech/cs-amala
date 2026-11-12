import { Link } from 'react-router-dom'
import { useLang, useT } from '../i18n.jsx'
import { site, waLink, doctors } from '../data/site.js'
import { departments } from '../data/departments.js'
import { articles, articleCats } from '../data/articles.js'
import Icon from '../components/Icon.jsx'
import FertileWindow from '../components/FertileWindow.jsx'
import { Split, Chap, BookForm, Finder, Faq, faqs } from '../components/Kit.jsx'

const L = (en, ta) => ({ en, ta })

export const stages = [
  {
    img: '/img/h/scan-room.webp',
    meta: L('Stage I · Both partners', 'நிலை I · இருவருக்கும்'),
    title: L('Evaluation', 'பரிசோதனை'),
    text: L(
      'History and examination for both of you, a pelvic scan, hormone tests and a semen analysis. Many couples find their answer at this first step.',
      'இருவருக்கும் வரலாறு, பரிசோதனை, இடுப்பு ஸ்கேன், ஹார்மோன் பரிசோதனைகள், விந்து பரிசோதனை. பல தம்பதியருக்கு இந்த முதல் படியிலேயே பதில் கிடைக்கிறது.',
    ),
    chips: L(['Couple consultation', 'Pelvic scan', 'Semen analysis'], ['தம்பதியர் ஆலோசனை', 'இடுப்பு ஸ்கேன்', 'விந்து பரிசோதனை']),
  },
  {
    img: '/img/h/consult-room.webp',
    meta: L('Stage II · Timing', 'நிலை II · நேரம்'),
    title: L('Ovulation & timing', 'கருமுட்டை & நேரம்'),
    text: L(
      'Treating thyroid or PCOS, tablets that help an egg mature, and follicle-tracking scans that show the exact days to try.',
      'தைராய்டு அல்லது PCOS சிகிச்சை, கருமுட்டை முதிர மாத்திரைகள், சரியான நாட்களைக் காட்டும் ஃபாலிக்கிள் ஸ்கேன்.',
    ),
    chips: L(['Follicle tracking', 'PCOS care'], ['ஃபாலிக்கிள் ஸ்கேன்', 'PCOS சிகிச்சை']),
  },
  {
    img: '/img/h/procedure-room.webp',
    meta: L('Stage III · Gentle first treatment', 'நிலை III · மென்மையான சிகிச்சை'),
    title: L('IUI', 'IUI'),
    text: L(
      'Washed, concentrated sperm placed in the uterus on the day of ovulation. A few minutes, no anaesthesia, home the same hour.',
      'சுத்திகரிக்கப்பட்ட விந்தணுக்கள் கருமுட்டை வெளியாகும் நாளில் கருப்பையில் வைக்கப்படும். சில நிமிடங்கள், மயக்கம் தேவையில்லை.',
    ),
    chips: L(['No anaesthesia', 'A few minutes'], ['மயக்கம் இல்லை', 'சில நிமிடங்கள்']),
  },
  {
    img: '/img/h/ivf-lab.webp',
    meta: L('Stage IV · In the laboratory', 'நிலை IV · ஆய்வகத்தில்'),
    title: L('IVF', 'IVF'),
    text: L(
      'Eggs collected after stimulation are fertilised in the laboratory; the healthiest embryo is placed in the uterus three to five days later.',
      'தூண்டுதலுக்குப் பின் எடுக்கப்பட்ட கருமுட்டைகள் ஆய்வகத்தில் கருவுறச் செய்யப்படும்; 3–5 நாட்களில் கரு கருப்பையில் வைக்கப்படும்.',
    ),
    chips: L(['4–6 week cycle', 'Embryo culture'], ['4–6 வார சுழற்சி', 'கரு வளர்ப்பு']),
  },
  {
    img: '/img/h/ivf-microscope.webp',
    meta: L('Stage V · One sperm, one egg', 'நிலை V · ஒரு விந்தணு, ஒரு கருமுட்டை'),
    title: L('ICSI & frozen transfer', 'ICSI & உறைந்த கரு மாற்றம்'),
    text: L(
      'When counts are very low, a single sperm is injected into each egg. Good embryos can be frozen for a later, gentler attempt.',
      'விந்தணு மிகக் குறைவாக இருந்தால் ஒவ்வொரு கருமுட்டையிலும் ஒரே விந்தணு செலுத்தப்படும். நல்ல கருக்கள் உறையவைக்கப்படும்.',
    ),
    chips: L(['Male factor', 'Embryo freezing'], ['ஆண் காரணி', 'கரு உறைவு']),
  },
]

const procedures = [
  {
    img: '/img/h/ot-table.webp',
    meta: L('Procedure 01', 'செயல்முறை 01'),
    title: L('Gallbladder removal', 'பித்தப்பை அகற்றல்'),
    text: L('Laparoscopic cholecystectomy for painful gallstones, usually with one or two nights in hospital.', 'வலி தரும் பித்தப்பைக் கற்களுக்கு லேப்ராஸ்கோபிக் அறுவை; பொதுவாக ஒன்று அல்லது இரண்டு இரவுகள்.'),
  },
  {
    img: '/img/h/ot-tower.webp',
    meta: L('Procedure 02', 'செயல்முறை 02'),
    title: L('Appendix', 'குடல்வால்'),
    text: L('Keyhole appendicectomy through three small cuts, for faster recovery and smaller scars.', 'மூன்று சிறு துளைகள் வழியே குடல்வால் அகற்றல்; விரைவான குணம், சிறிய தழும்பு.'),
  },
  {
    img: '/img/h/ot-carm.webp',
    meta: L('Procedure 03', 'செயல்முறை 03'),
    title: L('Hernia repair', 'குடலிறக்க சீரமைப்பு'),
    text: L('Open and laparoscopic repair of groin and umbilical hernias, with mesh where it helps.', 'இடுப்பு மற்றும் தொப்புள் குடலிறக்கத்திற்கு திறந்த / லேப்ராஸ்கோபிக் சீரமைப்பு.'),
  },
  {
    img: '/img/h/ot-prep.webp',
    meta: L('Procedure 04', 'செயல்முறை 04'),
    title: L('Fertility laparoscopy', 'கருத்தரிப்பு லேப்ராஸ்கோபி'),
    text: L('Checking the tubes and treating endometriosis or cysts, planned together with the fertility centre.', 'குழாய்களைப் பரிசோதித்தல், எண்டோமெட்ரியோசிஸ் / நீர்க்கட்டி சிகிச்சை — கருத்தரிப்பு மையத்துடன் சேர்ந்து.'),
  },
]

const visit = [
  {
    meta: L('Stage I', 'நிலை I'),
    title: L('Message or call', 'செய்தி அல்லது அழைப்பு'),
    text: L('WhatsApp or call +91 84382 37232. Tell us the department and a day that suits you; we confirm a time.', '+91 84382 37232 எண்ணுக்கு வாட்ஸ்அப் அல்லது அழைப்பு. பிரிவையும் வசதியான நாளையும் சொல்லுங்கள்.'),
    chips: L(['No referral letter', 'WhatsApp or call'], ['பரிந்துரைக் கடிதம் தேவையில்லை', 'வாட்ஸ்அப் / அழைப்பு']),
  },
  {
    meta: L('Stage II', 'நிலை II'),
    title: L('Meet the doctor', 'மருத்துவரைச் சந்தியுங்கள்'),
    text: L('Bring earlier reports, scans and your medicines. The doctor takes a full history and examines you.', 'முந்தைய அறிக்கைகள், ஸ்கேன்கள், மருந்துகளைக் கொண்டு வாருங்கள். மருத்துவர் முழுமையாகப் பரிசோதிப்பார்.'),
    chips: L(['Bring your reports'], ['அறிக்கைகளைக் கொண்டு வாருங்கள்']),
  },
  {
    meta: L('Stage III', 'நிலை III'),
    title: L('Tests and scans', 'பரிசோதனைகள் & ஸ்கேன்'),
    text: L('Only the tests that change a decision, each one explained before it is done.', 'முடிவை மாற்றக்கூடிய பரிசோதனைகள் மட்டும் — ஒவ்வொன்றும் முன்கூட்டியே விளக்கப்படும்.'),
    chips: L(['Explained first'], ['முன்கூட்டியே விளக்கம்']),
  },
  {
    meta: L('Stage IV', 'நிலை IV'),
    title: L('Your plan, explained', 'உங்கள் திட்டம், விளக்கமாக'),
    text: L('Options, chances and costs, in Tamil or English, with time for your family’s questions.', 'வழிகள், வாய்ப்புகள், செலவுகள் — தமிழிலோ ஆங்கிலத்திலோ, குடும்பத்தின் கேள்விகளுக்கு நேரத்துடன்.'),
    chips: L(['Tamil or English', 'Family welcome'], ['தமிழ் / ஆங்கிலம்', 'குடும்பத்தினர் வரலாம்']),
  },
  {
    meta: L('Stage V', 'நிலை V'),
    title: L('Treatment & follow-up', 'சிகிச்சை & தொடர் கவனிப்பு'),
    text: L('Medicine, a day-care procedure or surgery, then review visits until you are well.', 'மருந்து, ஒரு நாள் சிகிச்சை அல்லது அறுவை — பின்னர் குணமாகும் வரை தொடர் வருகைகள்.'),
    chips: L(['Review visits'], ['தொடர் வருகைகள்']),
  },
]

export function Stages({ items }) {
  const t = useT()
  return (
    <div className="stages" data-stages>
      <div className="stages-media" aria-hidden="true">
        {items.map((s, i) => (
          <img key={i} src={s.img} alt="" width="1200" height="1500" className={i === 0 ? 'is-on' : ''} loading={i ? 'lazy' : undefined} />
        ))}
        <span className="stages-count tnum" data-stage-count>
          01
        </span>
      </div>
      <div className="stages-list">
        {items.map((s, i) => (
          <article className={`stage ${i === 0 ? 'is-on' : ''}`} key={i} data-stage={i}>
            <img className="stage-img" src={s.img} alt="" width="1200" height="750" loading="lazy" />
            <p className="t-meta">{t(s.meta)}</p>
            <h3 className="t-title">{t(s.title)}</h3>
            <p className="t-lead">{t(s.text)}</p>
            {s.chips && (
              <ul className="chips">
                {t(s.chips).map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </div>
  )
}

export function DeptIndex({ list }) {
  const t = useT()
  return (
    <>
      <div className="index" data-index>
        {list.map((d, i) => (
          <Link key={d.slug} to={`/departments/${d.slug}`} className="index-row" data-img={d.img}>
            <span className="index-num tnum">{String(i + 1).padStart(2, '0')}</span>
            <span className="index-name">{t(d.name)}</span>
            <span className="index-desc">{t(d.short)}</span>
            <Icon name="arrow" size={22} />
          </Link>
        ))}
      </div>
      <div className="index-preview" aria-hidden="true" data-index-preview>
        <img src={list[0]?.img} alt="" width="300" height="225" />
      </div>
    </>
  )
}

export default function Home() {
  const t = useT()
  const { lang } = useLang()
  const ta = lang === 'ta'
  // *starred* phrases are highlighted as the words fill in on scroll
  const statement = ta
    ? 'முதல் *இதயத்துடிப்பின் நம்பிக்கை* முதல் பாதுகாப்பான *குணமடைதலின் நிம்மதி* வரை — நவீன மருத்துவம், காரைக்குடியில் உங்கள் அருகிலேயே.'
    : 'From the hope of a *first heartbeat* to the relief of a *safe recovery*, advanced care is now close to home in Karaikudi.'
  const picks = ['ivf-step-by-step', 'pregnancy-trimester-guide', 'laparoscopy-keyhole-surgery'].map((s) => articles.find((a) => a.slug === s))
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="hero" aria-labelledby="hero-h">
        <div className="hero-media" data-hero-media>
          <img src="/img/h/facade.webp" alt="CS Multispeciality Hospital building on Mahathma Gandhi Road, Karaikudi" width="1296" height="1728" fetchpriority="high" style={{ objectPosition: '50% 38%' }} />
        </div>
        <div className="hero-in wrap">
          <div className="hero-top t-meta" data-fade>
            <span>{ta ? 'சி.எஸ். மல்டிஸ்பெஷாலிட்டி மருத்துவமனை · அமலா கருத்தரிப்பு மையம்' : 'CS Multispeciality Hospital · Amala Fertility Centre'}</span>
            <span>10.07° N · 78.78° E · {ta ? 'காரைக்குடி' : 'Karaikudi'}</span>
          </div>
          <Split as="h1" id="hero-h" className="t-hero hero-title" text={ta ? 'வாழ்வின் ஒவ்வொரு|*அத்தியாயத்திற்கும்*|பராமரிப்பு.' : 'Care for every|chapter of *life.*'} />
          <div className="hero-bottom">
            <div data-fade>
              <p className="t-lead">
                {ta
                  ? 'கருத்தரிப்பு முதல் பிரசவம், சாவித்துளை அறுவை, பதினான்கு சிறப்புப் பிரிவுகள் வரை — காரைக்குடியில் ஒரே கூரையின் கீழ்.'
                  : 'Fertility care, pregnancy and birth, keyhole surgery and fourteen specialities, under one roof in Karaikudi.'}
              </p>
              <div className="hero-actions">
                <a className="btn" href={waLink('Hello, I would like to book an appointment.')} target="_blank" rel="noreferrer">
                  <Icon name="chat" /> {t('book')}
                </a>
                <Link className="btn btn--ghost" to="/fertility">
                  {ta ? 'கருத்தரிப்பு சிகிச்சை' : 'Explore fertility care'}
                </Link>
              </div>
            </div>
            <div className="hero-side t-meta" data-fade>
              <a href={site.phoneHref} className="tnum" style={{ color: 'var(--on-ink)', textDecoration: 'none' }}>
                {site.phone}
              </a>
              <span className="scroll-cue">
                {ta ? 'கீழே உருட்டுங்கள்' : 'Scroll to begin'} <i />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Statement (scroll-fill) ---------- */}
      <section className="statement on-light" aria-label={ta ? 'அறிமுகம்' : 'Introduction'}>
        <div className="wrap">
          <p data-fill>
            {(() => {
              let hl = false
              return statement.split(' ').map((raw, i) => {
                if (raw.startsWith('*')) hl = true
                const on = hl
                if (/\*[.,]?$/.test(raw)) hl = false
                return (
                  <span className={`fw-word ${on ? 'fw-hl' : ''}`} key={i}>
                    {raw.replace(/\*/g, '')}{' '}
                  </span>
                )
              })
            })()}
          </p>
          <div className="statement-meta t-meta" data-fade>
            <span>{ta ? 'லேப்ராஸ்கோபிக் அறுவை' : 'Laparoscopic surgery'}</span>
            <span>{ta ? 'இனப்பெருக்க மருத்துவம்' : 'Reproductive medicine'}</span>
            <span>{ta ? '14 சிறப்புப் பிரிவுகள்' : '14 specialities'}</span>
          </div>
        </div>
      </section>

      {/* ---------- I · Hope ---------- */}
      <section className="section on-light" id="ch-hope" aria-labelledby="h-hope" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Chap
            num={ta ? 'அத்தியாயம் I' : 'Chapter I'}
            label={L('Hope', 'நம்பிக்கை')}
            id="h-hope"
            title={L('Amala Fertility|*Centre.*', 'அமலா கருத்தரிப்பு|*மையம்.*')}
            lead={L(
              'Led by Dr. S. Amala Stalin Raja, MD (OG), FRM, DRM (Germany). Both partners are evaluated together, and treatment climbs one gentle step at a time.',
              'டாக்டர் எஸ். அமலா ஸ்டாலின் ராஜா, MD (OG), FRM, DRM (ஜெர்மனி) தலைமையில். தம்பதியர் இருவருக்கும் சேர்ந்த பரிசோதனை; சிகிச்சை ஒவ்வொரு படியாக.',
            )}
          >
            <p style={{ marginTop: 28 }}>
              <Link className="link" to="/fertility">
                {ta ? 'கருத்தரிப்பு மையம் பற்றி' : 'Inside the fertility centre'} <Icon name="arrow" size={16} />
              </Link>
            </p>
          </Chap>
          <Stages items={stages} />
          <div className="calc-panel on-ink" style={{ marginTop: 'clamp(64px, 8vw, 120px)' }} data-fade>
            <div className="split" style={{ alignItems: 'center' }}>
              <div>
                <p className="t-meta" style={{ color: 'var(--gold)' }}>
                  {ta ? 'உங்கள் கருவி' : 'A tool for you'}
                </p>
                <h3 className="t-title" style={{ marginTop: 18 }}>
                  {ta ? 'உங்கள் கருத்தரிப்பு நாட்கள்' : 'Your fertile window'}
                </h3>
                <p className="t-muted" style={{ marginTop: 18, maxWidth: '40ch' }}>
                  {ta
                    ? 'கருமுட்டை சுமார் ஒரு நாள் உயிர்வாழும்; விந்தணு ஐந்து நாட்கள் வரை. உங்கள் தேதிகளை உள்ளிடுங்கள்.'
                    : 'An egg lives for about a day; sperm can wait up to five. Put in your own dates to see your most fertile days.'}
                </p>
              </div>
              <FertileWindow />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- II · Birth ---------- */}
      <section className="band" id="ch-birth" aria-labelledby="h-birth">
        <div className="band-media" data-parallax-bg>
          <img src="/img/h/newborn-warmer.webp" alt="Newborn warmer in the delivery suite at CS Multispeciality Hospital" width="1400" height="900" loading="lazy" />
        </div>
        <div className="band-in wrap">
          <p className="chap-meta t-meta" style={{ color: 'var(--on-ink-muted)', marginBottom: 0 }} data-fade>
            <b>{ta ? 'அத்தியாயம் II' : 'Chapter II'}</b> {ta ? 'பிறப்பு' : 'Birth'}
          </p>
          <Split as="h2" id="h-birth" className="t-display" text={ta ? 'முதல் ஸ்கேன் முதல்|முதல் *அழுகை* வரை.' : 'From the first scan|to the first *cry.*'} style={{ maxWidth: '14ch' }} />
          <nav className="cards4" aria-label={ta ? 'பிறப்பு சேவைகள்' : 'Pregnancy and children'} data-stagger>
            {['obstetrics-gynaecology', 'neonatology', 'paediatrics'].map((slug) => {
              const d = departments.find((x) => x.slug === slug)
              return (
                <Link key={slug} to={`/departments/${slug}`}>
                  <strong>{t(d.name)}</strong>
                  <span>{t(d.short)}</span>
                </Link>
              )
            })}
            <Link to="/learn/pregnancy-trimester-guide">
              <strong>{ta ? 'கர்ப்ப வழிகாட்டி' : 'Pregnancy guide'}</strong>
              <span>{ta ? 'மூன்று பருவங்களின் ஸ்கேன், பரிசோதனைகள், எச்சரிக்கைகள்.' : 'Scans, tests and warning signs, trimester by trimester.'}</span>
            </Link>
          </nav>
        </div>
      </section>

      {/* ---------- III · Healing ---------- */}
      <section className="section on-ink" id="ch-heal" aria-labelledby="h-heal" data-hscroll-section>
        <div data-hpin>
        <div className="wrap">
          <Chap
            num={ta ? 'அத்தியாயம் III' : 'Chapter III'}
            label={L('Healing', 'குணம்')}
            id="h-heal"
            title={L('Keyhole|*surgery.*', 'சாவித்துளை|*அறுவை.*')}
            lead={L(
              'Dr. C. Stalin Raja, MS, FIAGES, FALS, FAIS, operates through cuts of 5–10 mm instead of one long incision: less pain, smaller scars, home sooner.',
              'டாக்டர் சி. ஸ்டாலின் ராஜா, MS, FIAGES, FALS, FAIS — ஒரு நீண்ட வெட்டுக்கு பதிலாக 5–10 மி.மீ. துளைகள்: குறைந்த வலி, சிறிய தழும்பு, விரைவில் வீடு.',
            )}
          />
        </div>
        <div className="hscroll" data-hscroll>
          <div className="hscroll-track">
            <div className="hcard hcard--intro">
              <p className="t-meta">{ta ? '4 செயல்முறைகள்' : 'Four procedures'}</p>
              <div>
                <p className="t-display tnum" style={{ fontSize: 'clamp(4rem, 3rem + 5vw, 9rem)', lineHeight: 0.9 }}>
                  5–10
                </p>
                <p className="t-sub" style={{ marginTop: 8 }}>
                  {ta ? 'மி.மீ. துளைகள்' : 'mm incisions'}
                </p>
                <p style={{ marginTop: 18, maxWidth: '30ch' }}>
                  {ta ? 'கேமரா மற்றும் மெல்லிய கருவிகள் வழியே — பெரும்பாலானோர் அன்றே நடக்கலாம்.' : 'A camera and slender instruments do the work. Most patients walk the same day.'}
                </p>
              </div>
              <Link className="link" to="/departments/general-laparoscopic-surgery">
                {ta ? 'அறுவை பிரிவு' : 'Surgery department'} <Icon name="arrow" size={16} />
              </Link>
            </div>
            {procedures.map((p) => (
              <article className="hcard" key={p.img}>
                <img src={p.img} alt="" width="900" height="1125" loading="lazy" />
                <div className="hcard-body">
                  <p className="t-meta">{t(p.meta)}</p>
                  <h3 className="t-sub">{t(p.title)}</h3>
                  <p>{t(p.text)}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
        </div>
      </section>

      {/* ---------- IV · Specialities ---------- */}
      <section className="section on-light" id="ch-all" aria-labelledby="h-all">
        <div className="wrap">
          <Chap
            num={ta ? 'அத்தியாயம் IV' : 'Chapter IV'}
            label={L('Specialities', 'பிரிவுகள்')}
            id="h-all"
            title={L('Every speciality,|one *address.*', 'அனைத்துப் பிரிவுகளும்,|ஒரே *முகவரி.*')}
            lead={L('From a child’s fever to a kidney stone, choose a department to read what it treats and when to come in.', 'குழந்தையின் காய்ச்சல் முதல் சிறுநீரகக் கல் வரை — ஒரு பிரிவைத் தேர்ந்தெடுத்து அறியுங்கள்.')}
          />
          <DeptIndex list={departments} />
        </div>
      </section>

      {/* ---------- V · Doctors ---------- */}
      <section className="section on-ink-2" id="ch-docs" aria-labelledby="h-docs">
        <div className="wrap">
          <Chap
            num={ta ? 'அத்தியாயம் V' : 'Chapter V'}
            label={L('Doctors', 'மருத்துவர்கள்')}
            id="h-docs"
            title={L('Two doctors,|one *plan.*', 'இரண்டு மருத்துவர்கள்,|ஒரே *திட்டம்.*')}
            lead={L(
              'Endometriosis, fibroids and blocked tubes often need both a surgeon and a fertility specialist. Here they are husband and wife, and they plan your care together.',
              'எண்டோமெட்ரியோசிஸ், நார்த்திசுக் கட்டி, அடைபட்ட குழாய்கள் — இவற்றுக்கு அறுவை நிபுணரும் கருத்தரிப்பு நிபுணரும் தேவை. இங்கே அவர்கள் கணவன் மனைவி.',
            )}
          />
          <div className="docs">
            {doctors.map((d) => (
              <article className="doc-card" key={d.id}>
                <figure className="doc-photo" data-reveal-img>
                  <img src={d.photo} alt={d.name.en} width="560" height="560" loading="lazy" />
                  <figcaption className="t-meta">{t(d.field)}</figcaption>
                </figure>
                <div className="doc-name" data-fade>
                  <h3 className="t-sub">{t(d.name)}</h3>
                  <p className="t-muted">{t(d.role)}</p>
                </div>
                <dl className="ledger" data-stagger>
                  {d.quals.map(([k, v]) => (
                    <div key={k}>
                      <dt>{k}</dt>
                      <dd>{v}</dd>
                    </div>
                  ))}
                </dl>
                <div data-fade>
                  <a className="btn btn--ghost" href={waLink(`Hello, I would like an appointment with ${d.name.en}.`)} target="_blank" rel="noreferrer">
                    {ta ? 'முன்பதிவு: ' : 'Book with '}
                    {t(d.name)}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- VI · The hospital ---------- */}
      <section className="section on-light" id="ch-place" aria-labelledby="h-place">
        <div className="wrap">
          <Chap
            num={ta ? 'அத்தியாயம் VI' : 'Chapter VI'}
            label={L('The hospital', 'மருத்துவமனை')}
            id="h-place"
            title={L('Mahathma Gandhi|Road, *Karaikudi.*', 'மகாத்மா காந்தி சாலை,|*காரைக்குடி.*')}
            lead={L('Inside the hospital: reception, consultation, pharmacy, laboratory, X-ray and wards, all on one site.', 'மருத்துவமனையின் உள்ளே: வரவேற்பு, ஆலோசனை, மருந்தகம், ஆய்வகம், எக்ஸ்-ரே, வார்டுகள்.')}
          />
          <div className="collage">
            <figure className="c1" data-reveal-img>
              <img src="/img/h/reception.webp" alt="Reception at CS Multispeciality Hospital" width="1400" height="900" loading="lazy" data-parallax />
              <figcaption className="t-meta">{ta ? 'வரவேற்பு' : 'Reception'}</figcaption>
            </figure>
            <figure className="c2" data-reveal-img>
              <img src="/img/h/consult-desk.webp" alt="Dr. C. Stalin Raja’s consultation room" width="2400" height="1500" loading="lazy" data-parallax />
              <figcaption className="t-meta">{ta ? 'ஆலோசனை அறை' : 'Consultation room'}</figcaption>
            </figure>
            {[
              ['pharmacy', ta ? 'மருந்தகம்' : 'Pharmacy'],
              ['lab', ta ? 'ஆய்வகம்' : 'Laboratory'],
              ['xray', ta ? 'எக்ஸ்-ரே' : 'X-ray'],
              ['ward', ta ? 'வார்டு' : 'Ward'],
            ].map(([f, cap]) => (
              <figure className="c3" key={f} data-reveal-img>
                <img src={`/img/h/${f}.webp`} alt={cap} width="1400" height="900" loading="lazy" />
                <figcaption className="t-meta">{cap}</figcaption>
              </figure>
            ))}
            <div className="collage-note" data-fade>
              <p className="t-lead">
                {ta
                  ? 'மேற்கூரை அறுவை விளக்குகள், ஒவ்வொரு அறுவையின் போதும் மயக்க மருந்து கண்காணிப்பு நிலையம், சுத்தமான மூடிய அரங்கம்.'
                  : 'Ceiling-mounted surgical lights, an anaesthesia workstation beside every operation, and a clean, closed theatre.'}
              </p>
              <dl className="ledger">
                <div>
                  <dt>{ta ? 'முகவரி' : 'Address'}</dt>
                  <dd>{t(site.address)}</dd>
                </div>
                <div>
                  <dt>{ta ? 'தொலைபேசி' : 'Phone'}</dt>
                  <dd className="tnum">{site.phone}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- VII · Your visit ---------- */}
      <section className="section on-paper" id="ch-visit" aria-labelledby="h-visit">
        <div className="wrap">
          <Chap
            num={ta ? 'அத்தியாயம் VII' : 'Chapter VII'}
            label={L('Your visit', 'உங்கள் வருகை')}
            id="h-visit"
            title={L('Your first visit,|step by *step.*', 'உங்கள் முதல் வருகை,|படிப்படியாக.')}
            lead={L('No referral letter is needed. Most questions are answered at the first consultation.', 'பரிந்துரைக் கடிதம் தேவையில்லை. பெரும்பாலான கேள்விகளுக்கு முதல் ஆலோசனையிலேயே பதில்.')}
          />
          <div className="timeline" data-timeline>
            <div className="timeline-line" aria-hidden="true">
              <i />
            </div>
            {visit.map((v, i) => (
              <div className="tl-item" key={i} data-fade>
                <span className="tl-dot">{i + 1}</span>
                <div>
                  <p className="t-meta">{t(v.meta)}</p>
                  <h3 className="t-sub">{t(v.title)}</h3>
                </div>
                <div>
                  <p>{t(v.text)}</p>
                  <ul className="chips">
                    {t(v.chips).map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Care finder ---------- */}
      <section className="section on-light" aria-labelledby="h-find">
        <div className="wrap">
          <Chap
            num={ta ? 'உதவி' : 'Help'}
            label={L('Find your department', 'உங்கள் பிரிவு')}
            id="h-find"
            title={L('Not sure where|to *go?*', 'எங்கு செல்வது என்று|*தெரியவில்லையா?*')}
            lead={L('Choose what you need help with and we will point you to the right department.', 'உங்களுக்கு என்ன உதவி தேவை என்பதைத் தேர்ந்தெடுங்கள்.')}
          />
          <Finder />
        </div>
      </section>

      {/* ---------- Library ---------- */}
      <section className="section on-paper" aria-labelledby="h-lib">
        <div className="wrap">
          <Chap
            num={ta ? 'நூலகம்' : 'Library'}
            label={L('Read before you visit', 'வருகைக்கு முன்')}
            id="h-lib"
            title={L('Plain-language|*guides.*', 'எளிய மொழி|*வழிகாட்டிகள்.*')}
            lead={L('Written for patients in Karaikudi, with Tamil summaries.', 'காரைக்குடி நோயாளிகளுக்காக எழுதப்பட்டவை, தமிழ் சுருக்கத்துடன்.')}
          >
            <p style={{ marginTop: 24 }}>
              <Link className="link" to="/learn">
                {ta ? 'அனைத்து வழிகாட்டிகளும்' : 'All guides and tools'} <Icon name="arrow" size={16} />
              </Link>
            </p>
          </Chap>
          <div className="library" data-stagger>
            {picks.map((a) => (
              <Link key={a.slug} to={`/learn/${a.slug}`} className="lib-card">
                <figure>
                  <img src={a.img} alt="" width="800" height="600" loading="lazy" />
                </figure>
                <p className="t-meta">
                  {t(articleCats[a.cat])} · {a.minutes} {t('minRead')}
                </p>
                <h3>{t(a.title)}</h3>
                <p>{t(a.summary)}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="section on-light" aria-labelledby="h-faq">
        <div className="wrap faq">
          <div>
            <p className="chap-meta t-meta" data-fade>
              <b>FAQ</b> {ta ? 'கேள்விகள்' : 'Questions'}
            </p>
            <Split as="h2" id="h-faq" className="t-title" text={ta ? 'அடிக்கடி|*கேட்கப்படுபவை.*' : 'Questions people|*ask.*'} />
          </div>
          <Faq items={faqs} />
        </div>
      </section>

      {/* ---------- Finale ---------- */}
      <section className="finale on-ink" data-finale aria-labelledby="h-fin" id="book">
        <div className="wrap finale-in">
          <div>
            <p className="t-meta" data-fade>
              {ta ? 'முன்பதிவு' : 'Appointments'}
            </p>
            <Split as="h2" id="h-fin" className="t-display" text={ta ? 'உங்கள்|*அத்தியாயத்தை*|இன்றே தொடங்குங்கள்.' : 'Begin your|*chapter*|today.'} style={{ marginTop: 20 }} />
            <p className="t-lead" style={{ marginTop: 28 }} data-fade>
              {ta ? 'ஒரு செய்தி போதும். உங்களுக்கு வசதியான நேரத்தை உறுதிசெய்வோம்.' : 'One message is all it takes. We will confirm a time that suits you.'}
            </p>
          </div>
          <BookForm />
        </div>
      </section>
    </>
  )
}
