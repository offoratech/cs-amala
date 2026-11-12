import { useLang, useT } from '../i18n.jsx'
import { site, waLink } from '../data/site.js'
import Icon from '../components/Icon.jsx'
import { Split, BookForm, Faq, faqs, PageHero } from '../components/Kit.jsx'

export default function Contact() {
  const t = useT()
  const { lang } = useLang()
  const ta = lang === 'ta'
  const rows = [
    [ta ? 'தொலைபேசி' : 'Phone', <a href={site.phoneHref} className="tnum" key="p">{site.phone}</a>],
    [
      'WhatsApp',
      <a href={waLink('Hello, I would like to book an appointment.')} target="_blank" rel="noreferrer" key="w">
        {ta ? 'செய்தி அனுப்ப' : 'Send a message'}
      </a>,
    ],
    [ta ? 'மின்னஞ்சல்' : 'Email', <a href={`mailto:${site.email}`} key="e">{site.email}</a>],
    [ta ? 'முகவரி' : 'Address', <span key="a">{t(site.address)}</span>],
    [
      ta ? 'வழி' : 'Directions',
      <a href={site.mapLink} target="_blank" rel="noreferrer" key="m">
        Google Maps
      </a>,
    ],
  ]
  return (
    <>
      <PageHero
        img="/img/h/facade-amala.webp"
        alt="The hospital building with the Amala Fertility Centre sign"
        meta={ta ? 'தொடர்பு' : 'Contact'}
        title={ta ? 'நாங்கள் இங்கே|*இருக்கிறோம்.*' : 'Find us on|*MG Road.*'}
        lead={ta ? 'காரைக்குடி, சூடாமணிபுரம், மகாத்மா காந்தி சாலையில். முன்பதிவுக்கு வாட்ஸ்அப் விரைவான வழி.' : 'Mahathma Gandhi Road, Soodamanipuram, Karaikudi. WhatsApp is the quickest way to book.'}
        short
      />
      <section className="section on-light" aria-labelledby="c-h">
        <div className="wrap split">
          <div>
            <p className="chap-meta t-meta" data-fade>
              <b>01</b> {ta ? 'விவரங்கள்' : 'Details'}
            </p>
            <Split as="h2" id="c-h" className="t-title" text={ta ? 'தொடர்பு|*விவரங்கள்.*' : 'Get in|*touch.*'} />
            <dl className="ledger" style={{ marginTop: 40 }} data-stagger>
              {rows.map(([k, v]) => (
                <div key={k}>
                  <dt>{k}</dt>
                  <dd style={{ color: 'var(--text)', overflowWrap: 'anywhere' }}>{v}</dd>
                </div>
              ))}
            </dl>
            <p style={{ marginTop: 28 }} data-fade>
              <a className="link" href={site.reviewLink} target="_blank" rel="noreferrer">
                <Icon name="star" size={16} /> {ta ? 'Google-ல் மதிப்பாய்வு' : 'Review us on Google'}
              </a>
            </p>
          </div>
          <div className="map" data-reveal-img>
            <iframe title="Map: CS Multispeciality Hospital, Karaikudi" src={site.mapEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </section>
      <section className="section on-paper" aria-labelledby="c-faq">
        <div className="wrap faq">
          <Split as="h2" id="c-faq" className="t-title" text={ta ? 'அடிக்கடி|*கேட்கப்படுபவை.*' : 'Questions people|*ask.*'} />
          <Faq items={faqs} />
        </div>
      </section>
      <section className="finale on-ink" data-finale aria-labelledby="c-book">
        <div className="wrap finale-in">
          <Split as="h2" id="c-book" className="t-display" text={ta ? 'உங்கள் வருகையை|*முன்பதிவு செய்யுங்கள்.*' : 'Book your|*visit.*'} />
          <BookForm />
        </div>
      </section>
    </>
  )
}
