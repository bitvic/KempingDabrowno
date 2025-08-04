import React from 'react';
import { useLanguage } from './hooks/useLanguage';
import { Hero } from './components/Hero';
import { Navigation } from './components/Navigation';
import { About } from './components/About';
import { Offer } from './components/Offer';
import { Gallery } from './components/Gallery';
import { Reviews } from './components/Reviews';
import { Contact } from './components/Contact';

function App() {
  const { currentLanguage, switchLanguage, t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <Navigation 
        currentLanguage={currentLanguage}
        switchLanguage={switchLanguage}
        t={t}
      />
      <Hero t={t} />
      <About t={t} />
      <Offer t={t} />
      <Gallery t={t} />
      <Reviews t={t} />
      <Contact t={t} />
    </div>
  );
}

export default App;