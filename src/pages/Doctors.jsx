import { useLang, useT } from '../i18n.jsx'
import { doctors, waLink } from '../data/site.js'
import Icon from '../components/Icon.jsx'
import { Split, PageHero } from '../components/Kit.jsx'

export default function Doctors() {
  const t = useT()
  const { lang } = useLang()
  const ta = lang === 'ta'
  return (
    <>
      <PageHero
        img="/img/h/consult-desk.webp"
        alt="Dr. C. Stalin Raja’s consultation room"
        meta={ta ? 'மருத்துவர்கள்' : 'The doctors'}
        title={ta ? 'இரண்டு நிபுணர்கள்,|*ஒரே திட்டம்.*' : 'Two specialists,|*one* plan.'}
        lead={ta ? 'ஒரு லேப்ராஸ்கோபிக் அறுவை நிபுணரும் ஒரு இனப்பெருக்க மருத்துவ நிபுணரும் — கணவன் மனைவி.' : 'A laparoscopic surgeon and a reproductive-medicine gynaecologist, husband and wife, leading one hospital together.'}
      />
      {doctors.map((d, i) => (
        <section key={d.id} className={`section ${i ? 'on-paper' : 'on-light'}`} aria-labelledby={`dr-${d.id}`}>
          <div className={`wrap split ${i ? 'split--flip' : ''}`}>
            <figure className="doc-photo sticky" style={{ order: i ? 2 : 0, maxWidth: 520 }} data-reveal-img>
              <img src={d.photo} alt={d.name.en} width="560" height="560" loading="lazy" />
              <figcaption className="t-meta">{t(d.field)}</figcaption>
            </figure>
            <div style={{ display: 'grid', gap: 'clamp(28px, 3vw, 44px)' }}>
              <div>
                <p className="chap-meta t-meta" data-fade>
                  <b>0{i + 1}</b> {t(d.role)}
                </p>
                <Split as="h2" id={`dr-${d.id}`} className="t-title" text={t(d.name)} />
              </div>
              <div>
                <h3 className="t-meta" style={{ marginBottom: 16, color: 'var(--rose)' }}>
                  {ta ? 'பட்டங்களின் பொருள்' : 'What the letters mean'}
                </h3>
                <dl className="ledger" data-stagger>
                  {d.quals.map(([k, v]) => (
                    <div key={k}>
                      <dt>{k}</dt>
                      <dd>{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div>
                <h3 className="t-meta" style={{ marginBottom: 16, color: 'var(--rose)' }}>
                  {ta ? 'சிகிச்சைப் பகுதிகள்' : 'Areas of care'}
                </h3>
                <ul className="bullets" data-stagger>
                  {t(d.focus).map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
              <div data-fade>
                <a className="btn btn--ink" href={waLink(`Hello, I would like an appointment with ${d.name.en}.`)} target="_blank" rel="noreferrer">
                  <Icon name="chat" /> {ta ? 'முன்பதிவு: ' : 'Book with '}
                  {t(d.name)}
                </a>
              </div>
            </div>
          </div>
        </section>
      ))}
      <section className="section on-ink" aria-labelledby="dr-team">
        <div className="wrap split">
          <Split as="h2" id="dr-team" className="t-title" text={ta ? 'பதினான்கு பிரிவுகளில்|*நிபுணர்கள்.*' : 'Specialists across|*fourteen* departments.'} />
          <p className="t-lead" data-fade>
            {ta
              ? 'குழந்தைகள் நலம் முதல் உளவியல் வரை — ஆலோசக நிபுணர்கள். நீங்கள் வர விரும்பும் நாளில் எந்த நிபுணர் இருப்பார் என அழைத்து உறுதிசெய்யவும்.'
              : 'Paediatrics, neonatology, general medicine, orthopaedics, ENT, dental and maxillofacial surgery, dermatology, nephrology, urology, oncology, neurosurgery, anaesthesiology and psychology are covered by consultant specialists. Call to check who is available on the day you want to come.'}
          </p>
        </div>
      </section>
    </>
  )
}
