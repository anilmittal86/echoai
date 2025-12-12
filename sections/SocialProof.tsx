import React from 'react';
import { ArrowUp, Quote } from 'lucide-react';

interface CaseStudy {
  company: string;
  logo: string;
  beforeScore: number;
  afterScore: number;
  timeframe: string;
  quote: string;
  result: string;
}

export const SocialProof: React.FC = () => {
  const caseStudies: CaseStudy[] = [
    {
      company: "Dell Technologies",
      logo: "DELL",
      beforeScore: 68,
      afterScore: 90,
      timeframe: "8 weeks",
      quote: "SignalAI helped us understand exactly why our enterprise solutions weren't being recommended by AI assistants. The action recommendations were specific and delivered measurable ROI.",
      result: "+22 SignalScore improvement"
    },
    {
      company: "Anker",
      logo: "ANKER",
      beforeScore: 79.1,
      afterScore: 92.5,
      timeframe: "12 weeks",
      quote: "We moved from #3 to #1 in Bluetooth speaker visibility after implementing SignalAI's recommendations. The source tracing feature was game-changing for our content strategy.",
      result: "Became #1 in category"
    },
    {
      company: "Geoship",
      logo: "GEOSHIP",
      beforeScore: 20,
      afterScore: 75,
      timeframe: "16 weeks",
      quote: "SignalAI identified exactly why our sustainable homes weren't appearing in AI recommendations. Clear, actionable roadmap transformed our AI visibility.",
      result: "+275% visibility increase"
    }
  ];

  return (
    <section id="proof" className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-cyan-400 text-sm font-semibold uppercase tracking-wide mb-4 block">Social Proof</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Leading Brands</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            See how companies are transforming their AI visibility with SignalAI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="glass-card rounded-3xl p-8 flex flex-col hover:border-cyan-500/30 transition-all">
              {/* Company Logo */}
              <div className="mb-6">
                <div className="text-2xl font-bold text-white tracking-wider">{study.logo}</div>
                <div className="text-sm text-slate-500">{study.company}</div>
              </div>

              {/* Score Comparison */}
              <div className="bg-[#0a1628] rounded-2xl p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-center">
                    <div className="text-sm text-slate-500 mb-1">Before</div>
                    <div className="text-2xl font-bold text-slate-400">{study.beforeScore}</div>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-400">
                    <ArrowUp className="w-5 h-5" />
                    <span className="font-bold">+{(study.afterScore - study.beforeScore).toFixed(1)}</span>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-slate-500 mb-1">After</div>
                    <div className="text-2xl font-bold text-cyan-400">{study.afterScore}</div>
                  </div>
                </div>
                <div className="text-center text-sm text-slate-500">
                  SignalScore improvement in {study.timeframe}
                </div>
              </div>

              {/* Quote */}
              <div className="flex-1 mb-6">
                <Quote className="w-6 h-6 text-cyan-500/50 mb-3" />
                <p className="text-slate-300 text-sm leading-relaxed italic">
                  "{study.quote}"
                </p>
              </div>

              {/* Result Badge */}
              <div className="pt-4 border-t border-white/5">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                  <span className="text-emerald-400 font-semibold text-sm">{study.result}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
