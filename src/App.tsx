import ParticleBg from './components/layout/ParticleBg.tsx';
import Header from './components/layout/Header.tsx';
import Home from './components/pages/Home.tsx';
import About from './components/pages/About.tsx';
import Projects from './components/pages/Projects.tsx';
import Footer from './components/layout/Footer.tsx';

export default function App() {
  return (
    <div className='flex flex-col gap-20'>
      <title>Dylan Bullock | Software Developer</title>

      <ParticleBg />
      <Header />
      <Home />
      <About />
      <Projects />
      <Footer />
    </div>
  );
};