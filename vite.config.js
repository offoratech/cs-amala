import { copyFileSync } from 'node:fs'
import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// GitHub Pages serves this project from /cs-amala/. The workflow sets VITE_BASE;
// local dev and preview keep '/'.
const base = process.env.VITE_BASE || '/'

/** Prefix the site's absolute public paths ("/img/...") with the deploy base. */
function publicBase() {
  const fix = (code) => (base === '/' ? code : code.replace(/(["'`(])\/img\//g, `$1${base}img/`))
  let outDir = 'dist'
  return {
    name: 'public-base',
    configResolved(c) {
      outDir = resolve(c.root, c.build.outDir)
    },
    enforce: 'post',
    transform(code, id) {
      if (/\/src\/.*\.(jsx?|json)$/.test(id.split('\\').join('/'))) return { code: fix(code), map: null }
    },
    transformIndexHtml: (html) => fix(html),
    // SPA fallback: GitHub Pages serves 404.html for unknown paths, so deep links load the app.
    closeBundle() {
      const out = outDir
      try {
        copyFileSync(resolve(out, 'index.html'), resolve(out, '404.html'))
      } catch {
        /* not a production build */
      }
    },
  }
}

export default defineConfig({
  base,
  plugins: [react(), publicBase()],
})
