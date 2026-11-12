// Scroll choreography for the v2 design.
// Patterns: everest.suraj.work (Lenis, chapter rail), thewatch.60fps.fr
// (loader, pinned subject), prathamfolio.com (scroll fill, horizontal gallery,
// colour takeover). Content is always visible without JavaScript; GSAP sets the
// start states itself and every effect is skipped for reduced motion.
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger)

const reduced = () => matchMedia('(prefers-reduced-motion: reduce)').matches
const q = (sel, root = document) => Array.from(root.querySelectorAll(sel))
let lenis = null
let loaderDone = false
let firstPage = true
let lastPath = null

export function initSmooth() {
  if (reduced() || lenis) return () => {}
  lenis = new Lenis({ lerp: 0.1, wheelMultiplier: 1 })
  window.__lenis = lenis
  lenis.on('scroll', ScrollTrigger.update)
  const raf = (time) => lenis.raf(time * 1000)
  gsap.ticker.add(raf)
  gsap.ticker.lagSmoothing(0)
  return () => {
    gsap.ticker.remove(raf)
    lenis.destroy()
    lenis = null
    window.__lenis = null
  }
}

/** Preloader with a counter (thewatch.60fps.fr). Once per browser session. */
export function runLoader() {
  const el = document.getElementById('loader')
  if (!el) return
  let seen = false
  try {
    seen = sessionStorage.getItem('cs-loaded') === '1'
    sessionStorage.setItem('cs-loaded', '1')
  } catch {
    /* private mode */
  }
  const finish = () => {
    loaderDone = true
    window.dispatchEvent(new Event('loader:done'))
  }
  if (seen || reduced()) {
    el.style.display = 'none'
    finish()
    return
  }
  lenis?.stop()
  const count = document.getElementById('loader-count')
  const o = { v: 0 }
  gsap
    .timeline({
      onComplete: () => {
        el.style.display = 'none'
        lenis?.start()
      },
    })
    .from('.loader-mark', { y: 24, opacity: 0, duration: 0.8, ease: 'power3.out' })
    .to(o, { v: 100, duration: 1.3, ease: 'power2.inOut', onUpdate: () => (count.textContent = String(Math.round(o.v)).padStart(2, '0')) }, 0)
    .to(el, { yPercent: -100, duration: 1, ease: 'expo.inOut', onStart: finish }, '+=0.15')
}

function whenLoaded(fn) {
  if (loaderDone) return fn()
  window.addEventListener('loader:done', fn, { once: true })
}

export function initPage(pathname) {
  const root = document.getElementById('main')
  const nav = document.getElementById('nav')
  const rail = document.getElementById('rail')
  const newPage = pathname !== lastPath
  lastPath = pathname
  if (newPage) {
    lenis?.scrollTo(0, { immediate: true, force: true })
    window.scrollTo(0, 0)
  }

  const ctx = gsap.context(() => {
    /* ---- Always on: progress bar and nav state ---- */
    gsap.fromTo('#progress', { scaleX: 0 }, { scaleX: 1, ease: 'none', scrollTrigger: { start: 0, end: 'max', scrub: 0.3 } })
    ScrollTrigger.create({
      start: 0,
      end: 'max',
      onUpdate: (self) => {
        const y = self.scroll()
        nav?.classList.toggle('is-solid', y > 60)
        if (!document.getElementById('menu')?.classList.contains('is-open')) nav?.classList.toggle('is-hidden', y > 500 && self.direction === 1)
        rail?.classList.toggle('is-on', y > window.innerHeight * 0.8)
      },
    })
    if (rail) {
      q('[data-rail]', rail).forEach((a) => {
        const sec = document.getElementById(a.dataset.rail)
        if (!sec) return
        ScrollTrigger.create({
          trigger: sec,
          start: 'top 50%',
          end: 'bottom 50%',
          onToggle: (self) => a.classList.toggle('is-active', self.isActive),
        })
        a.onclick = (e) => {
          e.preventDefault()
          lenis ? lenis.scrollTo(sec, { offset: -40 }) : sec.scrollIntoView()
        }
      })
    }

    if (reduced()) return

    /* ---- Page transition (Barba-style wipe) ---- */
    if (!firstPage && newPage) {
      // Explicit y:0 so GSAP does not add the CSS offset to the yPercent move.
      gsap.fromTo(
        '#wipe',
        { y: 0, yPercent: 0, autoAlpha: 1 },
        { yPercent: -101, duration: 0.85, ease: 'expo.inOut', onComplete: () => gsap.set('#wipe', { autoAlpha: 0 }) },
      )
    }
    firstPage = false

    /* ---- Hero ---- */
    const heroImg = root.querySelector('[data-hero-media] img')
    if (heroImg) {
      gsap.set(heroImg, { scale: 1.18 })
      whenLoaded(() => gsap.to(heroImg, { scale: 1, duration: 2.2, ease: 'expo.out' }))
      gsap.to(heroImg.parentElement, {
        yPercent: 18,
        ease: 'none',
        scrollTrigger: { trigger: heroImg.closest('section'), start: 'top top', end: 'bottom top', scrub: true },
      })
    }

    /* ---- Split-word headings ---- */
    q('[data-split]', root).forEach((h) => {
      const words = q('.sw > span', h)
      const inHero = h.closest('.hero, .phero')
      gsap.set(words, { yPercent: 115 })
      const play = () => gsap.to(words, { yPercent: 0, duration: 1.1, ease: 'expo.out', stagger: 0.045, delay: inHero ? 0.15 : 0 })
      if (inHero) whenLoaded(play)
      else ScrollTrigger.create({ trigger: h, start: 'top 88%', once: true, onEnter: play })
    })

    /* ---- Fades and staggers ---- */
    const fades = q('[data-fade]', root)
    gsap.set(fades, { y: 36, opacity: 0 })
    ScrollTrigger.batch(fades, {
      start: 'top 90%',
      once: true,
      onEnter: (els) => gsap.to(els, { y: 0, opacity: 1, duration: 1.1, ease: 'expo.out', stagger: 0.08, delay: els.some((e) => e.closest('.hero, .phero')) && !loaderDone ? 1.6 : 0 }),
    })
    q('[data-stagger]', root).forEach((list) => {
      const kids = Array.from(list.children)
      gsap.set(kids, { y: 30, opacity: 0 })
      ScrollTrigger.create({
        trigger: list,
        start: 'top 88%',
        once: true,
        onEnter: () => gsap.to(kids, { y: 0, opacity: 1, duration: 0.9, ease: 'expo.out', stagger: 0.06 }),
      })
    })

    /* ---- Statement: words fill in as you read (prathamfolio scroll-fill) ---- */
    q('[data-fill]', root).forEach((p) => {
      gsap.fromTo(
        q('.fw-word', p),
        { opacity: 0.14 },
        { opacity: 1, ease: 'none', stagger: 0.05, scrollTrigger: { trigger: p, start: 'top 78%', end: 'bottom 42%', scrub: true } },
      )
    })

    /* ---- Image reveals and parallax ---- */
    q('[data-reveal-img]', root).forEach((fig) => {
      const img = fig.querySelector('img, iframe')
      gsap.fromTo(fig, { clipPath: 'inset(100% 0% 0% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.4, ease: 'expo.inOut', scrollTrigger: { trigger: fig, start: 'top 85%', once: true } })
      if (img && img.tagName === 'IMG') gsap.fromTo(img, { scale: 1.25 }, { scale: 1, duration: 1.8, ease: 'expo.out', scrollTrigger: { trigger: fig, start: 'top 85%', once: true } })
    })
    q('[data-parallax]', root).forEach((img) => {
      gsap.fromTo(img, { yPercent: -7 }, { yPercent: 7, ease: 'none', scrollTrigger: { trigger: img.parentElement, start: 'top bottom', end: 'bottom top', scrub: true } })
    })
    q('[data-parallax-bg]', root).forEach((wrap) => {
      gsap.fromTo(wrap, { yPercent: -6 }, { yPercent: 6, ease: 'none', scrollTrigger: { trigger: wrap.parentElement, start: 'top bottom', end: 'bottom top', scrub: true } })
    })
    q('.lib-card img, .hcard img, .answer img', root).forEach((img) => {
      gsap.fromTo(img, { scale: 1.12 }, { scale: 1, ease: 'none', scrollTrigger: { trigger: img, start: 'top bottom', end: 'bottom 60%', scrub: true } })
    })

    const mm = gsap.matchMedia()
    mm.add('(min-width: 1025px)', () => {
      /* ---- Pinned subject with changing image (thewatch) ---- */
      q('[data-stages]', root).forEach((wrap) => {
        const imgs = q('.stages-media img', wrap)
        const count = wrap.querySelector('[data-stage-count]')
        q('[data-stage]', wrap).forEach((st, i) => {
          ScrollTrigger.create({
            trigger: st,
            start: 'top 55%',
            end: 'bottom 55%',
            onToggle: (self) => {
              if (!self.isActive) return
              q('[data-stage]', wrap).forEach((s) => s.classList.toggle('is-on', s === st))
              imgs.forEach((im, k) => im.classList.toggle('is-on', k === i))
              if (count) count.textContent = String(i + 1).padStart(2, '0')
            },
          })
        })
      })

      /* ---- Horizontal gallery, pinned (prathamfolio) ----
         Pin an inner wrapper, never a node React mounts directly under <main>:
         GSAP's pin-spacer would re-parent it and React's unmount would crash. */
      q('[data-hscroll]', root).forEach((box) => {
        const track = box.querySelector('.hscroll-track')
        const dist = () => Math.max(0, track.scrollWidth - window.innerWidth)
        gsap.to(track, {
          x: () => -dist(),
          ease: 'none',
          scrollTrigger: { trigger: box, start: 'center center', end: () => '+=' + dist(), pin: box.closest('[data-hpin]') || box, scrub: 0.6, invalidateOnRefresh: true, anticipatePin: 1 },
        })
      })

      /* ---- Index hover preview ---- */
      q('[data-index]', root).forEach((list) => {
        const prev = list.parentElement.querySelector('[data-index-preview]')
        if (!prev) return
        const img = prev.querySelector('img')
        const xTo = gsap.quickTo(prev, 'x', { duration: 0.6, ease: 'power3' })
        const yTo = gsap.quickTo(prev, 'y', { duration: 0.6, ease: 'power3' })
        const move = (e) => {
          xTo(e.clientX + 24)
          yTo(e.clientY - 110)
        }
        q('.index-row', list).forEach((row) => {
          row.addEventListener('mouseenter', () => {
            img.src = row.dataset.img
            prev.classList.add('is-on')
          })
          row.addEventListener('mouseleave', () => prev.classList.remove('is-on'))
        })
        list.addEventListener('mousemove', move)
      })
    })

    /* ---- Timeline fill ---- */
    q('[data-timeline]', root).forEach((tl) => {
      gsap.to(tl.querySelector('.timeline-line i'), { scaleY: 1, ease: 'none', scrollTrigger: { trigger: tl, start: 'top 65%', end: 'bottom 65%', scrub: true } })
    })

    /* ---- Colour takeover at the close (prathamfolio) ---- */
    q('[data-finale]', root).forEach((sec) => {
      gsap.fromTo(
        sec,
        { backgroundColor: '#0e1626' },
        {
          backgroundColor: '#d9a93a',
          ease: 'none',
          scrollTrigger: {
            trigger: sec,
            start: 'top 75%',
            end: 'top 25%',
            scrub: true,
            onUpdate: (self) => sec.classList.toggle('is-gold', self.progress > 0.5),
          },
        },
      )
    })

    /* ---- Footer wordmark rises ---- */
    const fw = document.querySelector('[data-foot-word]')
    if (fw) gsap.fromTo(fw, { yPercent: 45 }, { yPercent: 0, ease: 'none', scrollTrigger: { trigger: '.foot', start: 'top bottom', end: 'bottom bottom', scrub: true } })
  }, document.body)

  // Re-measure once images settle.
  const imgs = q('img', root).filter((i) => !i.complete)
  let left = imgs.length
  imgs.forEach((i) => i.addEventListener('load', () => --left === 0 && ScrollTrigger.refresh(), { once: true }))
  const t = setTimeout(() => ScrollTrigger.refresh(), 500)

  return () => {
    clearTimeout(t)
    ctx.revert()
  }
}
