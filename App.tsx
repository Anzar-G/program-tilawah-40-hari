import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import HowItWorks from './components/HowItWorks';
import SocialProof from './components/SocialProof';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <main className="w-full min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <ProblemSolution />
      <HowItWorks />
      <SocialProof />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}

export default App;