import { useMemo, useState } from 'react'
import { useLang } from '../i18n.jsx'
import { waLink } from '../data/site.js'

const DAY = 86400000
const iso = (d) => d.toISOString().slice(0, 10)

function fmt(d, lang) {
  return d.toLocaleDateString(lang === 'ta' ? 'ta-IN' : 'en-IN', { day: 'numeric', month: 'short' })
}

const L = {
  en: {
    last: 'First day of your last period',
    cycle: 'Usual cycle length',
    days: 'days',
    window: 'Most fertile days',
    ovu: 'Likely ovulation',
    next: 'Next period expected',
    due: 'If you conceive this cycle, due date around',
    irregular:
      'Cycles shorter than 21 or longer than 35 days often mean ovulation is irregular. That is worth a simple check-up.',
    note: 'An estimate from the calendar method. Follicle-tracking scans show the exact day.',
    ask: 'Ask Dr. Amala about my cycle',
  },
  ta: {
    last: 'கடைசி மாதவிடாயின் முதல் நாள்',
    cycle: 'வழக்கமான சுழற்சி நாட்கள்',
    days: 'நாட்கள்',
    window: 'கருத்தரிக்க அதிக வாய்ப்புள்ள நாட்கள்',
    ovu: 'கருமுட்டை வெளியாகும் நாள் (தோராயமாக)',
    next: 'அடுத்த மாதவிடாய் எதிர்பார்ப்பு',
    due: 'இந்தச் சுழற்சியில் கருத்தரித்தால், பிரசவ தேதி சுமார்',
    irregular:
      '21 நாட்களுக்குக் குறைவான அல்லது 35 நாட்களுக்கு மேலான சுழற்சி, ஒழுங்கற்ற கருமுட்டை வெளியாதலைக் குறிக்கலாம். ஒரு எளிய பரிசோதனை நல்லது.',
    note: 'நாட்காட்டி முறையிலான மதிப்பீடு. ஃபாலிக்கிள் ஸ்கேன் சரியான நாளைக் காட்டும்.',
    ask: 'என் சுழற்சி பற்றி டாக்டர் அமலாவிடம் கேட்க',
  },
}

/** The live thing: the calendar method made visible, in the reader's own dates. */
export default function FertileWindow({ compact = false }) {
  const { lang } = useLang()
  const s = L[lang]
  const [last, setLast] = useState(() => iso(new Date(Date.now() - 10 * DAY)))
  const [cycle, setCycle] = useState(28)

  const r = useMemo(() => {
    const start = new Date(last + 'T00:00:00Z')
    if (Number.isNaN(start.getTime())) return null
    const ovu = new Date(start.getTime() + (cycle - 14) * DAY)
    return {
      from: new Date(ovu.getTime() - 5 * DAY),
      to: new Date(ovu.getTime() + 1 * DAY),
      ovu,
      next: new Date(start.getTime() + cycle * DAY),
      due: new Date(start.getTime() + (280 + (cycle - 28)) * DAY),
      start,
    }
  }, [last, cycle])

  // A strip of the cycle: one cell per day, the fertile days filled.
  const cells = r
    ? Array.from({ length: cycle }, (_, i) => {
        const d = new Date(r.start.getTime() + i * DAY)
        const fertile = d >= r.from && d <= r.to
        const isOvu = iso(d) === iso(r.ovu)
        const period = i < 5
        return { i, fertile, isOvu, period, d }
      })
    : []

  const msg =
    lang === 'ta'
      ? `வணக்கம், என் கடைசி மாதவிடாய் ${last}, சுழற்சி ${cycle} நாட்கள். கருத்தரிப்பு ஆலோசனைக்கு நேரம் வேண்டும்.`
      : `Hello, my last period started on ${last} and my cycle is about ${cycle} days. I would like a fertility consultation.`

  return (
    <div className={`fw ${compact ? 'fw--compact' : ''}`}>
      <div className="fw-inputs">
        <label className="fw-field">
          <span>{s.last}</span>
          <input type="date" value={last} max={iso(new Date())} onChange={(e) => setLast(e.target.value)} />
        </label>
        <label className="fw-field">
          <span>
            {s.cycle}: <strong className="tnum">{cycle}</strong> {s.days}
          </span>
          <input
            type="range"
            min="21"
            max="40"
            value={cycle}
            onChange={(e) => setCycle(Number(e.target.value))}
            aria-valuetext={`${cycle} ${s.days}`}
          />
        </label>
      </div>

      {r && (
        <>
          <ol className="fw-strip" aria-hidden="true" style={{ '--n': cycle }}>
            {cells.map((c) => (
              <li
                key={c.i}
                className={`${c.fertile ? 'is-fertile' : ''} ${c.isOvu ? 'is-ovu' : ''} ${c.period ? 'is-period' : ''}`}
              />
            ))}
          </ol>
          <dl className="fw-out" aria-live="polite">
            <div className="fw-main">
              <dt>{s.window}</dt>
              <dd className="tnum">
                {fmt(r.from, lang)} – {fmt(r.to, lang)}
              </dd>
            </div>
            <div>
              <dt>{s.ovu}</dt>
              <dd className="tnum">{fmt(r.ovu, lang)}</dd>
            </div>
            <div>
              <dt>{s.next}</dt>
              <dd className="tnum">{fmt(r.next, lang)}</dd>
            </div>
            {!compact && (
              <div>
                <dt>{s.due}</dt>
                <dd className="tnum">{r.due.toLocaleDateString(lang === 'ta' ? 'ta-IN' : 'en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</dd>
              </div>
            )}
          </dl>
          {(cycle < 21 || cycle > 35) && <p className="fw-warn">{s.irregular}</p>}
          <p className="fw-note">{s.note}</p>
          {!compact && (
            <a className="btn" href={waLink(msg)} target="_blank" rel="noreferrer">
              {s.ask}
            </a>
          )}
        </>
      )}
    </div>
  )
}
