import React from 'react';
import { ChevronRight, FileText } from 'lucide-react';
import { Logo } from '../components/Logo';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 text-center z-10">
        {/* SignalAI Logo */}
        <div className="flex justify-center mb-8">
          <Logo className="h-24 w-24 md:h-32 md:w-32 signal-glow rounded-full" />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
          Better <span className="gradient-text">signals</span>.<br />
          Better visibility.
        </h1>

        <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          Measure, understand, and improve how AI assistants represent your brand across ChatGPT, Gemini, and Claude.
        </p>

        {/* Answer Capsule - "What is SignalAI?" */}
        <div className="max-w-3xl mx-auto mb-10 p-6 rounded-2xl bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border border-cyan-500/20 backdrop-blur-sm">
          <p className="text-sm font-semibold text-cyan-400 mb-2 uppercase tracking-wide">What is SignalAI?</p>
          <p className="text-base text-slate-200 leading-relaxed">
            SignalAI is an AI visibility intelligence platform that measures how brands
            appear in AI assistant recommendations. Unlike monitoring-only tools, SignalAI
            provides actionable recommendations with predicted ROI—telling you exactly
            which actions will improve your SignalScore and by how much.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-lg font-semibold transition-all flex items-center justify-center gap-2 group shadow-lg shadow-cyan-500/25">
            Check Your AI Visibility
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-cyan-500/30 text-white rounded-lg font-semibold transition-all backdrop-blur-sm flex items-center justify-center gap-2">
            <FileText className="w-4 h-4" />
            See a Sample Report
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-500">
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};
