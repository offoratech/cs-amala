import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useLang, useT } from '../i18n.jsx'
import { departments, groups } from '../data/departments.js'
import { articles } from '../data/articles.js'
import { waLink } from '../data/site.js'
import Icon from '../components/Icon.jsx'
import { Split, Chap, BookForm, PageHero } from '../components/Kit.jsx'
import { DeptIndex } from './Home.jsx'
import NotFound from './NotFound.jsx'

const L = (en, ta) => ({ en, ta })

export function Departments() {
  const t = useT()
  const { lang } = useLang()
  const [g, setG] = useState('all')
  const list = g === 'all' ? departments : departments.filter((d) => d.group === g)
  return (
    <>
      <PageHero
        img="/img/h/reception.webp"
        alt="Reception at CS Multispeciality Hospital"
        meta={lang === 'ta' ? `${departments.length} சிகிச்சைப் பிரிவுகள்` : `${departments.length} departments`}
        title={lang === 'ta' ? 'அனைத்துப் பிரிவுகளும்,|ஒரே *முகவரி.*' : 'Every speciality,|one *address.*'}
        lead={lang === 'ta' ? 'ஒவ்வொரு பிரிவும் எதற்கு சிகிச்சை அளிக்கிறது, எப்போது வர வேண்டும்.' : 'What each department treats, and when to come in. Choose one to read more.'}
      />
      <section className="section on-light" aria-label={t('navDepartments')}>
        <div className="wrap">
          <div className="filters" role="group" aria-label="Filter" data-fade>
            {['all', ...Object.keys(groups)].map((k) => (
              <button key={k} type="button" aria-pressed={g === k} onClick={() => setG(k)}>
                {k === 'all' ? (lang === 'ta' ? 'அனைத்தும்' : 'All') : t(groups[k])}
              </button>
            ))}
          </div>
          <DeptIndex list={list} key={g} />
        </div>
      </section>
      <section className="finale on-ink" data-finale aria-labelledby="d-book">
        <div className="wrap finale-in">
          <Split as="h2" id="d-book" className="t-display" text={lang === 'ta' ? 'சரியான பிரிவில்|*முன்பதிவு.*' : 'Book the right|*department.*'} />
          <BookForm />
        </div>
      </section>
    </>
  )
}

const related = {
  fertility: ['ivf-step-by-step', 'iui-explained', 'male-fertility'],
  'obstetrics-gynaecology': ['pregnancy-trimester-guide', 'pcos', 'endometriosis'],
  neonatology: ['newborn-first-28-days'],
  paediatrics: ['newborn-first-28-days'],
  'general-laparoscopic-surgery': ['laparoscopy-keyhole-surgery', 'endometriosis'],
  urology: ['kidney-stones', 'male-fertility'],
  nephrology: ['kidney-stones'],
  anaesthesiology: ['laparoscopy-keyhole-surgery'],
  psychology: ['fertility-myths'],
}

export function DepartmentDetail() {
  const t = useT()
  const { lang } = useLang()
  const ta = lang === 'ta'
  const { slug } = useParams()
  const d = departments.find((x) => x.slug === slug)
  if (!d) return <NotFound />
  const reads = (related[slug] || []).map((s) => articles.find((a) => a.slug === s))
  const idx = departments.indexOf(d)
  const next = departments[(idx + 1) % departments.length]
  return (
    <>
      <PageHero
        img={d.img}
        meta={t(groups[d.group])}
        title={t(d.name)}
        lead={t(d.short)}
        short
        crumbs={
          <>
            <Link to="/departments">{t('navDepartments')}</Link> <span>/</span> <span>{String(idx + 1).padStart(2, '0')}</span>
          </>
        }
      >
        <div className="hero-actions" data-fade>
          <a className="btn" href={waLink(`Hello, I would like an appointment in ${d.name.en}.`)} target="_blank" rel="noreferrer">
            <Icon name="chat" /> {t('bookDept')}
          </a>
        </div>
      </PageHero>

      <section className="section on-light" aria-labelledby="dd-about">
        <div className="wrap split">
          <div className="sticky">
            <p className="chap-meta t-meta" data-fade>
              <b>01</b> {ta ? 'அறிமுகம்' : 'Overview'}
            </p>
            <Split as="h2" id="dd-about" className="t-title" text={ta ? 'இந்தப் பிரிவு|*பற்றி.*' : 'About this|*department.*'} />
          </div>
          <div>
            <p className="t-lead" style={{ maxWidth: '58ch' }} data-fade lang="en">
              {d.intro}
            </p>
            <div className="two" style={{ marginTop: 'clamp(48px, 6vw, 88px)' }}>
              <div>
                <h3 className="t-meta" style={{ marginBottom: 20, color: 'var(--rose)' }}>
                  {t('conditions')}
                </h3>
                <ul className="bullets" data-stagger>
                  {d.conditions.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="t-meta" style={{ marginBottom: 20, color: 'var(--rose)' }}>
                  {t('treatments')}
                </h3>
                <ul className="bullets" data-stagger>
                  {d.treatments.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section on-ink" aria-labelledby="dd-when">
        <div className="wrap split">
          <div>
            <p className="chap-meta t-meta" data-fade>
              <b>02</b> {ta ? 'எப்போது' : 'When'}
            </p>
            <Split as="h2" id="dd-when" className="t-title" text={ta ? 'எப்போது|*வர வேண்டும்.*' : 'When to see|a *doctor.*'} />
          </div>
          <ul className="bullets" style={{ fontSize: 'var(--fs-md)', gap: 22 }} data-stagger>
            {t(d.when).map((w) => (
              <li key={w}>{w}</li>
            ))}
          </ul>
        </div>
      </section>

      {reads.length > 0 && (
        <section className="section on-paper" aria-labelledby="dd-read">
          <div className="wrap">
            <Chap num="03" label={L('Guides', 'வழிகாட்டிகள்')} id="dd-read" title={L('Read *next.*', 'அடுத்து *படிக்க.*')} />
            <div className="library" data-stagger>
              {reads.map((a) => (
                <Link key={a.slug} to={`/learn/${a.slug}`} className="lib-card">
                  <figure>
                    <img src={a.img} alt="" width="800" height="600" loading="lazy" />
                  </figure>
                  <p className="t-meta">
                    {a.minutes} {t('minRead')}
                  </p>
                  <h3>{t(a.title)}</h3>
                  <p>{t(a.summary)}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section on-light" style={{ paddingBlock: 'clamp(56px, 7vw, 96px)' }}>
        <div className="wrap">
          <Link to={`/departments/${next.slug}`} className="index-row" style={{ borderTop: '1px solid var(--line)' }}>
            <span className="index-num t-meta">{ta ? 'அடுத்து' : 'Next'}</span>
            <span className="index-name">{t(next.name)}</span>
            <span className="index-desc">{t(next.short)}</span>
            <Icon name="arrow" size={22} />
          </Link>
          <p className="disclaimer">{t('disclaimer')}</p>
        </div>
      </section>

      <section className="finale on-ink" data-finale aria-labelledby="dd-book">
        <div className="wrap finale-in">
          <Split as="h2" id="dd-book" className="t-display" text={ta ? 'இந்தப் பிரிவில்|*முன்பதிவு.*' : 'Book with this|*department.*'} />
          <BookForm preset={d.slug} />
        </div>
      </section>
    </>
  )
}
