import React from 'react';
import { Search, DollarSign, EyeOff } from 'lucide-react';

export const Stats: React.FC = () => {
  const stats = [
    {
      value: "47%",
      label: "of search queries now go through AI assistants like ChatGPT, Gemini, and Claude.",
      source: "Gartner 2024",
      icon: Search,
      color: "text-cyan-400"
    },
    {
      value: "$2.3B",
      label: "Lost annually by brands due to AI invisibility and missed recommendations.",
      source: "Forrester Research",
      icon: DollarSign,
      color: "text-red-400"
    },
    {
      value: "0%",
      label: "Visibility into how AI represents your brand without proper monitoring tools.",
      source: "Industry Average",
      icon: EyeOff,
      color: "text-amber-400"
    }
  ];

  return (
    <section id="problem" className="py-24 bg-brand-dark relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <span className="text-cyan-400 text-sm font-semibold uppercase tracking-wide mb-4 block">The Problem</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Brand Is Invisible to AI</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            AI assistants are replacing traditional search. If your brand isn't visible to LLMs, you're losing customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="glass-card p-8 rounded-2xl hover:border-cyan-500/30 transition-colors group">
              <div className="flex items-start justify-between mb-6">
                <span className={`text-5xl font-bold ${stat.color}`}>{stat.value}</span>
                <stat.icon className={`w-8 h-8 ${stat.color} opacity-50 group-hover:opacity-100 transition-opacity`} />
              </div>
              <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                {stat.label}
              </p>
              <div className="text-sm text-slate-500 border-t border-white/5 pt-4">
                Source: {stat.source}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
