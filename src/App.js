import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Header, Footer } from './components';
import { AboutMe, Contact, Home, Portfolio, Resume } from './pages';

import './App.css'

export default function App() {
  return (
    <div className='home'>
      <BrowserRouter>
        <Header />
        <Routes >
          <Route path='/' element={<AboutMe />} />
          <Route path='/about-me' element={<AboutMe />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/resume' element={<Resume />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
