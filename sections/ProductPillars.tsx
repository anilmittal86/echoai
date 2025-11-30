import React from 'react';
import { BarChart3, Star, GitMerge, Zap } from 'lucide-react';

export const ProductPillars: React.FC = () => {
  const pillars = [
    {
      title: "AI Visibility Dashboard",
      description: "See where your brand appears across major AI models, with mentions, sentiment, and rank vs. competitors.",
      icon: BarChart3,
      color: "text-blue-400"
    },
    {
      title: "EchoScore™",
      description: "A single metric for your 'AI share of voice' within a category, benchmarked against competitors to expose gaps.",
      icon: Star,
      color: "text-yellow-400"
    },
    {
      title: "Tracing Layer",
      description: "Traces every answer to its sources to explain *why* your visibility rises or falls.",
      icon: GitMerge,
      color: "text-purple-400"
    },
    {
      title: "Action Layer",
      description: "Converts insights into prioritized content and PR moves with predicted impact on your score.",
      icon: Zap,
      color: "text-cyan-400"
    }
  ];

  return (
    <section id="solution" className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Core Product Pillars</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => (
            <div key={index} className="bg-brand-card p-8 rounded-2xl border border-white/5 hover:border-white/20 transition-all hover:-translate-y-1">
              <div className={`w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 ${pillar.color}`}>
                <pillar.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{pillar.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};