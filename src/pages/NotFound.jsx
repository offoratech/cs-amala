import { Link } from 'react-router-dom'
import { PageHero } from '../components/Kit.jsx'

export default function NotFound() {
  return (
    <PageHero img="/img/h/corridor.webp" meta="404" title="This page has|*moved on.*" lead="The address does not exist on this site." short>
      <div className="hero-actions">
        <Link className="btn" to="/">
          Go to the home page
        </Link>
      </div>
    </PageHero>
  )
}
