import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useLang, useT } from '../i18n.jsx'
import { articles, articleCats } from '../data/articles.js'
import { waLink } from '../data/site.js'
import Icon from '../components/Icon.jsx'
import FertileWindow from '../components/FertileWindow.jsx'
import { Split, Chap, PageHero } from '../components/Kit.jsx'
import NotFound from './NotFound.jsx'

const L = (en, ta) => ({ en, ta })
const DAY = 86400000

function DueDate() {
  const { lang } = useLang()
  const ta = lang === 'ta'
  const [lmp, setLmp] = useState(() => new Date(Date.now() - 70 * DAY).toISOString().slice(0, 10))
  const start = new Date(lmp + 'T00:00:00Z')
  const ok = !Number.isNaN(start.getTime())
  const due = ok ? new Date(start.getTime() + 280 * DAY) : null
  const wk = ok ? Math.floor((Date.now() - start.getTime()) / DAY / 7) : 0
  return (
    <div className="fw">
      <label className="fw-field">
        <span>{ta ? 'கடைசி மாதவிடாயின் முதல் நாள்' : 'First day of last period'}</span>
        <input type="date" value={lmp} onChange={(e) => setLmp(e.target.value)} />
      </label>
      {due && (
        <dl className="fw-out" aria-live="polite">
          <div className="fw-main">
            <dt>{ta ? 'பிரசவ தேதி' : 'Estimated due date'}</dt>
            <dd className="tnum">{due.toLocaleDateString(ta ? 'ta-IN' : 'en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</dd>
          </div>
          {wk >= 0 && wk <= 42 && (
            <div>
              <dt>{ta ? 'தற்போது' : 'Now'}</dt>
              <dd className="tnum">
                {wk} {ta ? 'வாரம்' : 'weeks'}
              </dd>
            </div>
          )}
        </dl>
      )}
      <p className="fw-note">{ta ? '280 நாள் விதி. ஸ்கேன் மிகத் துல்லியமான தேதியைத் தரும்.' : 'Naegele’s rule: 280 days from the last period. Your dating scan gives the most reliable date.'}</p>
    </div>
  )
}

function Bmi() {
  const { lang } = useLang()
  const ta = lang === 'ta'
  const [h, setH] = useState(160)
  const [w, setW] = useState(60)
  const bmi = h > 0 ? w / (h / 100) ** 2 : 0
  const band = bmi < 18.5 ? ['Underweight', 'குறைந்த எடை'] : bmi < 23 ? ['Healthy', 'ஆரோக்கியம்'] : bmi < 27.5 ? ['Overweight', 'அதிக எடை'] : ['Obesity', 'உடல் பருமன்']
  return (
    <div className="fw">
      <div className="fw-inputs">
        <label className="fw-field">
          <span>{ta ? 'உயரம் (செ.மீ.)' : 'Height (cm)'}</span>
          <input type="number" inputMode="decimal" min="100" max="220" value={h} onChange={(e) => setH(Number(e.target.value))} />
        </label>
        <label className="fw-field">
          <span>{ta ? 'எடை (கி.கி.)' : 'Weight (kg)'}</span>
          <input type="number" inputMode="decimal" min="20" max="250" value={w} onChange={(e) => setW(Number(e.target.value))} />
        </label>
      </div>
      <dl className="fw-out" aria-live="polite">
        <div className="fw-main">
          <dt>BMI</dt>
          <dd className="tnum">
            {bmi ? bmi.toFixed(1) : '–'} · {band[ta ? 1 : 0]}
          </dd>
        </div>
      </dl>
      <p className="fw-note">{ta ? 'தெற்காசியர்களுக்கான அளவுகோல் (18.5–22.9 ஆரோக்கியம்).' : 'Uses the cut-offs recommended for South Asian adults (healthy 18.5–22.9).'}</p>
    </div>
  )
}

export function Learn() {
  const t = useT()
  const { lang } = useLang()
  const ta = lang === 'ta'
  const [cat, setCat] = useState('all')
  const list = useMemo(() => (cat === 'all' ? articles : articles.filter((a) => a.cat === cat)), [cat])
  return (
    <>
      <PageHero
        img="/img/h/lab.webp"
        alt="The laboratory at CS Multispeciality Hospital"
        meta={ta ? 'நோயாளர் நூலகம்' : 'Patient library'}
        title={ta ? 'அறிவோம்,|*பின் முடிவெடுப்போம்.*' : 'Understand first,|then *decide.*'}
        lead={ta ? 'நாங்கள் தினமும் பார்க்கும் நோய்கள் மற்றும் சிகிச்சைகள் பற்றிய எளிய வழிகாட்டிகள், மற்றும் மூன்று கருவிகள்.' : 'Plain-language guides to the conditions and treatments we see every day, and three tools you can use at home.'}
      />
      <section className="section on-light" aria-label={ta ? 'வழிகாட்டிகள்' : 'Guides'}>
        <div className="wrap">
          <div className="filters" role="group" aria-label="Filter" data-fade>
            {['all', ...Object.keys(articleCats)].map((k) => (
              <button key={k} type="button" aria-pressed={cat === k} onClick={() => setCat(k)}>
                {k === 'all' ? (ta ? 'அனைத்தும்' : 'All') : t(articleCats[k])}
              </button>
            ))}
          </div>
          <div className="library" key={cat} data-stagger>
            {list.map((a) => (
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
      <section className="section on-ink" aria-labelledby="l-tools">
        <div className="wrap">
          <Chap num="Tools" label={L('At home', 'வீட்டில்')} id="l-tools" title={L('Three small|*tools.*', 'மூன்று சிறிய|*கருவிகள்.*')} />
          <div className="tools" data-stagger>
            <div className="tool">
              <h3>{ta ? 'கருத்தரிப்பு நாட்கள்' : 'Fertile window'}</h3>
              <FertileWindow compact />
            </div>
            <div className="tool">
              <h3>{ta ? 'பிரசவ தேதி' : 'Due date'}</h3>
              <DueDate />
            </div>
            <div className="tool">
              <h3>BMI</h3>
              <Bmi />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export function Article() {
  const t = useT()
  const { lang } = useLang()
  const { slug } = useParams()
  const a = articles.find((x) => x.slug === slug)
  if (!a) return <NotFound />
  const more = articles.filter((x) => x.cat === a.cat && x.slug !== a.slug).slice(0, 3)
  return (
    <>
      <PageHero
        img={a.img}
        short
        meta={`${t(articleCats[a.cat])} · ${a.minutes} ${t('minRead')}`}
        title={t(a.title)}
        lead={t(a.summary)}
        crumbs={
          <>
            <Link to="/learn">{t('navLearn')}</Link> <span>/</span> <span>{t(articleCats[a.cat])}</span>
          </>
        }
      />
      <section className="section on-light">
        <div className="wrap article">
          <aside className="article-aside" data-fade>
            <p className="t-meta" style={{ color: 'var(--rose)' }}>
              {t('keyPoints')}
            </p>
            <ul className="bullets">
              {t(a.points).map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            {lang === 'ta' && <p className="fw-note">{t('englishOnly')}</p>}
            <a className="btn btn--ink" href={waLink(`Hello, I read "${a.title.en}" and would like to see a doctor.`)} target="_blank" rel="noreferrer">
              <Icon name="chat" /> {t('book')}
            </a>
          </aside>
          <div className="article-body" lang="en">
            {a.body.map((s) => (
              <section key={s.h} data-fade>
                <h2>{s.h}</h2>
                {s.p.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </section>
            ))}
            <p className="disclaimer">{t('disclaimer')}</p>
          </div>
        </div>
      </section>
      {more.length > 0 && (
        <section className="section on-paper" aria-labelledby="a-more">
          <div className="wrap">
            <Chap num="Next" label={L('Keep reading', 'தொடர்ந்து படிக்க')} id="a-more" title={L('Read *next.*', 'அடுத்து *படிக்க.*')} />
            <div className="library" data-stagger>
              {more.map((x) => (
                <Link key={x.slug} to={`/learn/${x.slug}`} className="lib-card">
                  <figure>
                    <img src={x.img} alt="" width="800" height="600" loading="lazy" />
                  </figure>
                  <p className="t-meta">
                    {x.minutes} {t('minRead')}
                  </p>
                  <h3>{t(x.title)}</h3>
                  <p>{t(x.summary)}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
