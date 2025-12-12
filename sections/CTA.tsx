import React from 'react';
import { ChevronRight, Calendar } from 'lucide-react';

export const CTA: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-brand-dark to-[#0c1a2e]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 border border-cyan-500/20 rounded-3xl p-12 relative overflow-hidden">
          {/* Background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/20 rounded-full blur-[128px] pointer-events-none" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get Your Free AI Visibility Report
            </h2>
            <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
              Discover how AI assistants see your brand. Get a comprehensive SignalScore analysis across ChatGPT, Gemini, and Claude.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-lg font-semibold transition-all flex items-center justify-center gap-2 group shadow-lg shadow-cyan-500/25"
              >
                Get Free Report
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://calendly.com/anilmittal"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-cyan-500/30 text-white rounded-lg font-semibold transition-all backdrop-blur-sm flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                Schedule a Demo
              </a>
            </div>

            <p className="mt-6 text-sm text-slate-500">
              No credit card required. Free analysis for qualified brands.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
