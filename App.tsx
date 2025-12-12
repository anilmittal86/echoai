import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { Stats } from './sections/Stats';
import { Mission } from './sections/Mission';
import { ProductPillars } from './sections/ProductPillars';
import { HowItWorks } from './sections/HowItWorks';
import { DashboardDemo } from './sections/DashboardDemo';
import { SocialProof } from './sections/SocialProof';
import { Audience } from './sections/Audience';
import { CTA } from './sections/CTA';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="bg-brand-dark min-h-screen text-slate-50 font-sans selection:bg-cyan-500/30">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Mission />
        <ProductPillars />
        <HowItWorks />
        <DashboardDemo />
        <SocialProof />
        <Audience />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
