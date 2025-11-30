import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { Stats } from './sections/Stats';
import { Mission } from './sections/Mission';
import { ProductPillars } from './sections/ProductPillars';
import { HowItWorks } from './sections/HowItWorks';
import { DashboardDemo } from './sections/DashboardDemo';
import { Audience } from './sections/Audience';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="bg-brand-dark min-h-screen text-slate-50 font-sans selection:bg-blue-500/30">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Mission />
        <ProductPillars />
        <HowItWorks />
        <DashboardDemo />
        <Audience />
      </main>
      <Footer />
    </div>
  );
}

export default App;