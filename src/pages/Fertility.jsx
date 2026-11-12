import { Link } from 'react-router-dom'
import { useLang, useT } from '../i18n.jsx'
import { waLink } from '../data/site.js'
import { articles } from '../data/articles.js'
import Icon from '../components/Icon.jsx'
import FertileWindow from '../components/FertileWindow.jsx'
import { Split, Chap, BookForm, PageHero } from '../components/Kit.jsx'
import { Stages, stages } from './Home.jsx'

const L = (en, ta) => ({ en, ta })

const when = [
  [L('Under 35', '35 வயதுக்குக் கீழ்'), L('After 12 months of regular, unprotected intercourse.', '12 மாதங்கள் முயன்ற பின்.')],
  [L('35 and over', '35 மற்றும் அதற்கு மேல்'), L('After 6 months of trying.', '6 மாதங்களுக்குப் பின்.')],
  [L('Over 40', '40-க்கு மேல்'), L('Straight away.', 'உடனடியாக.')],
  [
    L('Any age', 'எந்த வயதிலும்'),
    L(
      'With irregular or absent periods, severe period pain, two or more miscarriages, past pelvic infection or surgery, or a known sperm problem.',
      'ஒழுங்கற்ற மாதவிடாய், கடும் வலி, இரண்டு அல்லது அதற்கு மேற்பட்ட கருச்சிதைவுகள், முந்தைய இடுப்புத் தொற்று / அறுவை, அல்லது தெரிந்த விந்தணு பிரச்சனை இருந்தால்.',
    ),
  ],
]

const her = [
  ['Day 2–3 hormone tests', 'FSH, LH, AMH, thyroid and prolactin show how the ovaries are working and how many eggs remain.'],
  ['Pelvic ultrasound', 'Looks at the uterus and ovaries, counts resting follicles and finds fibroids or cysts.'],
  ['Follicle tracking', 'A series of scans that watches an egg grow and confirms ovulation.'],
  ['Tubal test', 'An HSG or laparoscopy checks that at least one fallopian tube is open.'],
]
const him = [
  ['Semen analysis', 'Count, movement and shape of sperm. Abstain for two to five days before the test.'],
  ['Repeat if abnormal', 'Sperm counts vary; one low result is repeated after a few weeks.'],
  ['Hormones & scrotal scan', 'Only when needed, to look for a varicocele or a hormonal cause.'],
]

export default function Fertility() {
  const t = useT()
  const { lang } = useLang()
  const ta = lang === 'ta'
  const reads = articles.filter((a) => a.cat === 'fertility')
  return (
    <>
      <PageHero
        img="/img/h/scan-room.webp"
        alt="The scan room at Amala Fertility Centre"
        meta={ta ? 'அமலா கருத்தரிப்பு மையம் · காரைக்குடி' : 'Amala Fertility Centre · Karaikudi'}
        title={ta ? 'நம்பிக்கை, ஒவ்வொரு|*படியாக.*' : 'Hope, one gentle|*step* at a time.'}
        lead={t(
          L(
            'Fertility care led by Dr. S. Amala Stalin Raja, MD (OG), FRM, DRM (Germany): both partners evaluated together, and the simplest treatment that can work, first.',
            'டாக்டர் எஸ். அமலா ஸ்டாலின் ராஜா தலைமையில்: தம்பதியர் இருவருக்கும் சேர்ந்த பரிசோதனை, பலன் தரக்கூடிய எளிய சிகிச்சை முதலில்.',
          ),
        )}
      >
        <div className="hero-actions" data-fade>
          <a className="btn" href={waLink('Hello, we would like a fertility consultation at Amala Fertility Centre.')} target="_blank" rel="noreferrer">
            <Icon name="chat" /> {t('book')}
          </a>
          <a className="btn btn--ghost" href="#window">
            {ta ? 'கருத்தரிப்பு நாட்கள்' : 'Find your fertile window'}
          </a>
        </div>
      </PageHero>

      <section className="section on-light" aria-labelledby="f-when">
        <div className="wrap split">
          <div className="sticky">
            <p className="chap-meta t-meta" data-fade>
              <b>01</b> {ta ? 'எப்போது' : 'When'}
            </p>
            <Split as="h2" id="f-when" className="t-title" text={ta ? 'எப்போது உதவி|*பெற வேண்டும்.*' : 'When to seek|*help.*'} />
            <p className="t-lead" style={{ marginTop: 24 }} data-fade>
              {ta ? 'கருவுறாமை ஒரு மருத்துவ நிலை; இருவரிடமும் சம அளவில் காணப்படுகிறது.' : 'Infertility is a medical condition, shared by both partners equally often. Early evaluation usually means simpler treatment.'}
            </p>
          </div>
          <dl className="ledger" data-stagger>
            {when.map(([k, v]) => (
              <div key={k.en}>
                <dt className="t-sub" style={{ fontWeight: 400 }}>
                  {t(k)}
                </dt>
                <dd style={{ fontSize: 'var(--fs-md)' }}>{t(v)}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section on-ink" aria-labelledby="f-ladder">
        <div className="wrap">
          <Chap num="02" label={L('The treatment ladder', 'சிகிச்சையின் படிகள்')} id="f-ladder" title={L('Five steps,|chosen *for you.*', 'ஐந்து படிகள்,|*உங்களுக்காக.*')} lead={L('Most couples never need the top of the ladder. Each step is chosen from your own results, age and wishes.', 'பெரும்பாலான தம்பதியருக்கு மேல் படிகள் தேவைப்படுவதில்லை.')} />
          <Stages items={stages} />
        </div>
      </section>

      <section className="section on-light" aria-labelledby="f-tests">
        <div className="wrap">
          <Chap num="03" label={L('The tests', 'பரிசோதனைகள்')} id="f-tests" title={L('Tests, for *both*|of you.', '*இருவருக்குமான*|பரிசோதனைகள்.')} lead={L('Testing together saves months. Each test is explained before it is done.', 'சேர்ந்து பரிசோதிப்பது பல மாதங்களை மிச்சப்படுத்தும்.')} />
          <div className="two">
            {[
              [ta ? 'பெண்ணுக்கு' : 'For her', her],
              [ta ? 'ஆணுக்கு' : 'For him', him],
            ].map(([h, list]) => (
              <div key={h}>
                <h3 className="t-sub" style={{ marginBottom: 24 }} data-fade>
                  {h}
                </h3>
                <dl className="ledger" data-stagger>
                  {list.map(([a, b]) => (
                    <div key={a}>
                      <dt>{a}</dt>
                      <dd>{b}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section on-paper" id="window" aria-labelledby="f-calc">
        <div className="wrap">
          <div className="calc-panel on-ink" data-fade>
            <div className="split" style={{ alignItems: 'center' }}>
              <div>
                <p className="t-meta" style={{ color: 'var(--gold)' }}>
                  04 · {ta ? 'கருவி' : 'Tool'}
                </p>
                <h2 id="f-calc" className="t-title" style={{ marginTop: 18 }}>
                  {ta ? 'உங்கள் கருத்தரிப்பு நாட்கள்' : 'Your fertile window'}
                </h2>
                <p className="t-muted" style={{ marginTop: 18, maxWidth: '40ch' }}>
                  {ta ? 'கருமுட்டை வெளியாவதற்கு முந்தைய ஐந்து நாட்களும் அந்த நாளும்.' : 'The five days before ovulation and the day itself. Follicle-tracking scans show the exact day.'}
                </p>
              </div>
              <FertileWindow />
            </div>
          </div>
        </div>
      </section>

      <section className="band" aria-labelledby="f-surg">
        <div className="band-media" data-parallax-bg>
          <img src="/img/h/ot-tower.webp" alt="Laparoscopy tower in the operating theatre" width="2400" height="1500" loading="lazy" />
        </div>
        <div className="band-in wrap">
          <p className="chap-meta t-meta" style={{ color: 'var(--on-ink-muted)', marginBottom: 0 }} data-fade>
            <b>05</b> {ta ? 'அறுவை' : 'Surgery'}
          </p>
          <Split as="h2" id="f-surg" className="t-display" text={ta ? 'தீர்வு அறுவையாக|இருந்தால், *ஒரே குழு.*' : 'When the answer is|surgical, *one team.*'} style={{ maxWidth: '16ch' }} />
          <p className="t-lead" data-fade>
            {ta
              ? 'அடைபட்ட குழாய்கள், எண்டோமெட்ரியோசிஸ், நார்த்திசுக் கட்டிகள் — கருத்தரிப்பு திட்டமும் அறுவையும் ஒரே குழுவால் முடிவு செய்யப்படுகின்றன.'
              : 'Blocked tubes, endometriosis and fibroids are found and treated by laparoscopy. Here the fertility plan and the operation are decided by the same small team.'}
          </p>
          <p data-fade>
            <Link className="link" to="/learn/endometriosis">
              {t(articles.find((a) => a.slug === 'endometriosis').title)} <Icon name="arrow" size={16} />
            </Link>
          </p>
        </div>
      </section>

      <section className="section on-paper" aria-labelledby="f-reads">
        <div className="wrap">
          <Chap num="06" label={L('Guides for couples', 'தம்பதியருக்கான வழிகாட்டிகள்')} id="f-reads" title={L('Read, then|*ask us.*', 'படியுங்கள்,|*கேளுங்கள்.*')} />
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

      <section className="finale on-ink" data-finale aria-labelledby="f-book">
        <div className="wrap finale-in">
          <Split as="h2" id="f-book" className="t-display" text={ta ? 'தம்பதியர்|*ஆலோசனை.*' : 'Book a couple|*consultation.*'} />
          <BookForm preset="fertility" />
        </div>
      </section>
    </>
  )
}
