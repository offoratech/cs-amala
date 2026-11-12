import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LangProvider } from './i18n.jsx'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Fertility from './pages/Fertility.jsx'
import { Departments, DepartmentDetail } from './pages/Departments.jsx'
import { Learn, Article } from './pages/Learn.jsx'
import Doctors from './pages/Doctors.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <LangProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '')}>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="fertility" element={<Fertility />} />
            <Route path="departments" element={<Departments />} />
            <Route path="departments/:slug" element={<DepartmentDetail />} />
            <Route path="learn" element={<Learn />} />
            <Route path="learn/:slug" element={<Article />} />
            <Route path="doctors" element={<Doctors />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LangProvider>
  )
}
