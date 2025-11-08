import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Sections from './components/Sections.jsx';
import Footer from './components/Footer.jsx';
import useScrollReveal from './components/ScrollReveal.jsx';

export default function App() {
  useScrollReveal();
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <main>
        <Hero />
        <Sections />
      </main>
      <Footer />
    </div>
  );
}
