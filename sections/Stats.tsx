import React from 'react';
import { TrendingDown, AlertCircle, DollarSign } from 'lucide-react';

export const Stats: React.FC = () => {
  const stats = [
    {
      value: "$750B",
      label: "Consumer spend projected to be influenced by AI-powered search by 2028.",
      source: "McKinsey",
      icon: DollarSign,
      color: "text-green-400"
    },
    {
      value: "2-3%",
      label: "Revenue drop correlated to a 5-point drop in AI assistant visibility.",
      source: "AIVO Journal",
      icon: TrendingDown,
      color: "text-red-400"
    },
    {
      value: "75.5%",
      label: "Of businesses now prioritize brand visibility in AI-generated answers.",
      source: "Search Engine Land",
      icon: AlertCircle,
      color: "text-blue-400"
    }
  ];

  return (
    <section className="py-24 bg-brand-dark relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">The Stakes Are High</h2>
          <p className="text-slate-400 text-lg">As traditional SEO fades, AI visibility becomes the primary revenue driver.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="glass-card p-8 rounded-2xl hover:border-blue-500/30 transition-colors group">
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