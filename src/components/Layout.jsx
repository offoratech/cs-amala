import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { useLang, useT } from '../i18n.jsx'
import { site, waLink } from '../data/site.js'
import Icon from './Icon.jsx'
import { initPage, initSmooth, runLoader } from '../scroll.js'

const nav = [
  ['/fertility', 'navFertility'],
  ['/departments', 'navDepartments'],
  ['/doctors', 'navDoctors'],
  ['/learn', 'navLearn'],
  ['/contact', 'navContact'],
]

function LangSwitch() {
  const { lang, setLang } = useLang()
  return (
    <div className="lang" role="group" aria-label="Language / மொழி">
      <button type="button" aria-pressed={lang === 'en'} onClick={() => setLang('en')}>
        <span>EN</span>
      </button>
      <button type="button" aria-pressed={lang === 'ta'} onClick={() => setLang('ta')} lang="ta">
        <span>தமிழ்</span>
      </button>
    </div>
  )
}

// Pages whose first screen is a dark photograph keep a light nav until scrolled.
const darkTop = ['/', '/fertility', '/departments', '/doctors', '/learn', '/contact']

function Nav() {
  const t = useT()
  const { lang } = useLang()
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : ''
    window.__lenis?.[open ? 'stop' : 'start']()
  }, [open])
  const light = !darkTop.includes(pathname) && !/^\/(departments|learn)\//.test(pathname)
  return (
    <>
      <header className={`nav ${light ? 'is-light-page' : ''}`} id="nav">
        <div className="nav-in wrap">
          <Link to="/" className="brand" aria-label="CS Multispeciality Hospital & Amala Fertility Centre — home">
            <img src="/img/logo-cs-mark.png" alt="" width="34" height="38" />
            <span className="brand-name">
              CS <i>&amp;</i> Amala
            </span>
            <img className="brand-amala" src="/img/logo-amala-mark.png" alt="" width="40" height="37" />
          </Link>
          <nav className="nav-links" aria-label="Main">
            {nav.map(([to, key]) => (
              <NavLink key={to} to={to}>
                {t(key)}
              </NavLink>
            ))}
          </nav>
          <div className="nav-end">
            <LangSwitch />
            <a className="btn btn--sm" href={waLink('Hello, I would like to book an appointment.')} target="_blank" rel="noreferrer">
              {lang === 'ta' ? 'முன்பதிவு' : 'Book a visit'}
            </a>
            <button type="button" className="burger" aria-expanded={open} aria-controls="menu" aria-label={t(open ? 'close' : 'menu')} onClick={() => setOpen(!open)}>
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>
      <div id="menu" className={`menu-panel ${open ? 'is-open' : ''}`} aria-hidden={!open}>
        <ul className="menu-links">
          {[['/', 'navHome'], ...nav].map(([to, key], i) => (
            <li key={to}>
              <NavLink to={to} end={to === '/'} tabIndex={open ? 0 : -1}>
                <span>0{i + 1}</span>
                {t(key)}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="menu-foot">
          <LangSwitch />
          <a className="btn" href={waLink('Hello, I would like to book an appointment.')} target="_blank" rel="noreferrer" tabIndex={open ? 0 : -1}>
            <Icon name="chat" /> {t('book')}
          </a>
          <a href={site.phoneHref} className="t-meta" tabIndex={open ? 0 : -1}>
            {site.phone}
          </a>
          <p className="t-muted" style={{ color: 'var(--on-ink-muted)' }}>
            {t(site.address)}
          </p>
        </div>
      </div>
    </>
  )
}

function Footer() {
  const t = useT()
  const { lang } = useLang()
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot-top">
          <div>
            <p className="t-meta" style={{ color: 'var(--gold)' }}>
              {lang === 'ta' ? 'காரைக்குடி · தமிழ்நாடு' : 'Karaikudi · Tamil Nadu'}
            </p>
            <h2 className="t-title" style={{ marginTop: 20, maxWidth: '12ch' }}>
              {lang === 'ta' ? 'உங்கள் அடுத்த அத்தியாயம் இங்கே தொடங்குகிறது.' : 'Your next chapter starts here.'}
            </h2>
            <div className="foot-logos">
              <img src="/img/logo-cs-full.png" alt="CS Multispeciality Hospital" width="72" height="84" loading="lazy" />
              <img src="/img/logo-amala.png" alt="Amala Fertility Centre" width="66" height="84" loading="lazy" />
            </div>
          </div>
          <div className="foot-cols">
            <div>
              <h4 className="t-meta">{lang === 'ta' ? 'பக்கங்கள்' : 'Explore'}</h4>
              <ul>
                {nav.map(([to, key]) => (
                  <li key={to}>
                    <Link to={to}>{t(key)}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="t-meta">{lang === 'ta' ? 'தொடர்பு' : 'Contact'}</h4>
              <ul>
                <li>
                  <a href={site.phoneHref}>
                    <Icon name="phone" size={16} /> <span className="tnum">{site.phone}</span>
                  </a>
                </li>
                <li>
                  <a href={waLink('Hello')} target="_blank" rel="noreferrer">
                    <Icon name="chat" size={16} /> WhatsApp
                  </a>
                </li>
                <li>
                  <a href={`mailto:${site.email}`}>
                    <Icon name="mail" size={16} /> {site.email}
                  </a>
                </li>
                <li>
                  <a href={site.mapLink} target="_blank" rel="noreferrer">
                    <Icon name="pin" size={16} /> {lang === 'ta' ? 'வழிகாட்டல்' : 'Directions'}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="t-meta">{lang === 'ta' ? 'சமூக' : 'Follow'}</h4>
              <ul>
                <li>
                  <a href={site.instagram} target="_blank" rel="noreferrer">
                    <Icon name="insta" size={16} /> Instagram
                  </a>
                </li>
                <li>
                  <a href={site.facebook} target="_blank" rel="noreferrer">
                    <Icon name="fb" size={16} /> Facebook
                  </a>
                </li>
                <li>
                  <a href={site.reviewLink} target="_blank" rel="noreferrer">
                    <Icon name="star" size={16} /> Google reviews
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="foot-word" aria-hidden="true" data-foot-word>
          CS <i>&amp;</i> Amala
        </p>
        <p className="credits">
          {lang === 'ta'
            ? 'அனைத்துப் புகைப்படங்களும் சி.எஸ். மல்டிஸ்பெஷாலிட்டி மருத்துவமனை & அமலா கருத்தரிப்பு மையத்தினுடையவை.'
            : 'All photographs show CS Multispeciality Hospital & Amala Fertility Centre.'}
        </p>
        <div className="foot-base">
          <span>
            © {new Date().getFullYear()} {t(site.name)} · {t(site.fertility)}
          </span>
          <span>{t(site.address)}</span>
          <span>{t('footerNote')}</span>
        </div>
      </div>
    </footer>
  )
}

const railItems = [
  ['ch-hope', { en: 'Hope', ta: 'நம்பிக்கை' }],
  ['ch-birth', { en: 'Birth', ta: 'பிறப்பு' }],
  ['ch-heal', { en: 'Healing', ta: 'குணம்' }],
  ['ch-all', { en: 'Specialities', ta: 'பிரிவுகள்' }],
  ['ch-docs', { en: 'Doctors', ta: 'மருத்துவர்கள்' }],
  ['ch-place', { en: 'Hospital', ta: 'மருத்துவமனை' }],
  ['ch-visit', { en: 'Your visit', ta: 'வருகை' }],
]

function Rail() {
  const t = useT()
  return (
    <nav className="rail" id="rail" aria-label="Chapters">
      {railItems.map(([id, label], i) => (
        <a key={id} href={`#${id}`} data-rail={id}>
          <span>
            {['I', 'II', 'III', 'IV', 'V', 'VI', 'VII'][i]} · {t(label)}
          </span>
          <i />
        </a>
      ))}
    </nav>
  )
}

export default function Layout() {
  const { pathname } = useLocation()
  const { lang } = useLang()
  useEffect(() => {
    runLoader()
    return initSmooth()
  }, [])
  useEffect(() => {
    let cleanup = () => {}
    const id = requestAnimationFrame(() => {
      cleanup = initPage(pathname)
    })
    return () => {
      cancelAnimationFrame(id)
      cleanup()
    }
  }, [pathname, lang])
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <div className="loader" id="loader" aria-hidden="true">
        <div className="loader-mark">
          <span className="loader-logos">
            <img src="/img/logo-cs-mark.png" alt="" width="64" height="72" />
            <img src="/img/logo-amala-mark.png" alt="" width="78" height="72" />
          </span>
          <p className="loader-name">
            CS <i style={{ color: 'var(--gold)' }}>&amp;</i> Amala
          </p>
        </div>
        <p className="loader-cap t-meta">Multispeciality · Fertility · Karaikudi</p>
        <p className="loader-count tnum" id="loader-count">
          00
        </p>
      </div>
      <div className="wipe" id="wipe" aria-hidden="true" />
      <div className="progress" id="progress" aria-hidden="true" />
      <Nav />
      {pathname === '/' && <Rail />}
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      <a className="wa" href={waLink('Hello, I would like to book an appointment.')} target="_blank" rel="noreferrer" aria-label="WhatsApp the hospital">
        <Icon name="chat" size={26} />
      </a>
    </>
  )
}
