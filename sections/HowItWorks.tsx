import React from 'react';
import { Database, BrainCircuit, Lightbulb } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      id: "01",
      title: "The Engine",
      subtitle: "Generation & Listening",
      description: "We built a 'Prompt Cloud', a 4D map of consumer-AI interactions. Our system continuously queries major LLMs (ChatGPT, Gemini, Claude) at scale.",
      icon: Database
    },
    {
      id: "02",
      title: "The Brain",
      subtitle: "Understanding & Quantification",
      description: "Natural-language parsers analyze responses to identify sentiment, rank, and context. We calculate the normalized 0-100 SignalScore.",
      icon: BrainCircuit
    },
    {
      id: "03",
      title: "The Insight",
      subtitle: "Tracing & Action",
      description: "The tracing layer links metrics back to original sources. The Action Layer converts insights into prioritized content recommendations.",
      icon: Lightbulb
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-cyan-400 text-sm font-semibold uppercase tracking-wide mb-4 block">Technology</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">How It Works</h2>
          <p className="text-slate-400">From prompt generation to actionable optimization.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-cyan-900 via-cyan-500 to-cyan-900 opacity-30"></div>

          {steps.map((step) => (
            <div key={step.id} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-2xl bg-[#111d32] border border-cyan-500/30 flex items-center justify-center mb-8 shadow-lg shadow-cyan-500/10">
                <step.icon size={40} className="text-cyan-400" />
              </div>
              <div className="text-sm font-bold text-cyan-500 mb-2">STEP {step.id}</div>
              <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
              <div className="text-sm font-medium text-slate-400 mb-4 uppercase tracking-wider">{step.subtitle}</div>
              <p className="text-slate-400 leading-relaxed max-w-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
