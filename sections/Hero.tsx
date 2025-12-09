import React from 'react';
import { ChevronRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 text-center z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          <span className="text-slate-300 text-sm font-medium">The standard for AI Brand Visibility</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight">
          How your brand <span className="gradient-text">echoes</span> <br />
          in the AI world.
        </h1>

        <p className="text-xl text-slate-400 mb-6 max-w-2xl mx-auto leading-relaxed">
          LLMs are the new gatekeepers. EchoAI helps you measure, trace, and optimize
          how your brand is represented across ChatGPT, Gemini, and Claude.
        </p>

        {/* Answer Capsule - "What is EchoAI?" */}
        <div className="max-w-3xl mx-auto mb-10 p-6 rounded-2xl bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-500/20 backdrop-blur-sm">
          <p className="text-sm font-semibold text-blue-400 mb-2 uppercase tracking-wide">What is EchoAI?</p>
          <p className="text-base text-slate-200 leading-relaxed">
            EchoAI is an AI visibility intelligence platform that measures how brands
            appear in AI assistant recommendations across ChatGPT, Gemini, and Claude.
            Unlike monitoring-only tools, EchoAI provides actionable recommendations
            with predicted ROI—telling you exactly which actions will improve your
            EchoScore and by how much.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold transition-all flex items-center justify-center gap-2 group">
            Analyze Your Brand
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-lg font-semibold transition-all backdrop-blur-sm">
            View the Data
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