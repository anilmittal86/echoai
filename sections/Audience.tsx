import React from 'react';
import { Megaphone, Package, Rocket } from 'lucide-react';

export const Audience: React.FC = () => {
  const audience = [
    {
      title: "Marketers & CMOs",
      desc: "Get clarity on brand portrayal and recommendations across ChatGPT, Gemini, Claude, and others.",
      icon: Megaphone
    },
    {
      title: "Product Owners",
      desc: "Gain visibility into product mentions, comparisons, and AI-driven perception.",
      icon: Package
    },
    {
      title: "Entrepreneurs",
      desc: "Build a competitive edge by shaping how AI assistants understand and recommend their business.",
      icon: Rocket
    }
  ];

  return (
    <section className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-cyan-400 text-sm font-semibold uppercase tracking-wide mb-4 block">Audience</span>
          <h2 className="text-3xl md:text-4xl font-bold">Who We Serve</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {audience.map((item, i) => (
            <div key={i} className="glass-card p-10 rounded-3xl text-center hover:border-cyan-500/30 transition-colors cursor-default">
              <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-cyan-400">
                <item.icon size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
