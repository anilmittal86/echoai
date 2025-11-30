import React from 'react';

export const Mission: React.FC = () => {
  return (
    <section id="mission" className="py-24 bg-[#0F1623]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Mission Card */}
          <div className="bg-gradient-to-br from-blue-900/20 to-transparent border border-blue-500/20 p-10 rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />
            <h3 className="text-2xl font-bold text-blue-400 mb-4">Our Mission</h3>
            <p className="text-xl text-slate-200 leading-relaxed">
              Help every brand understand, measure, and optimize how it is represented across all AI platforms.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-gradient-to-br from-purple-900/20 to-transparent border border-purple-500/20 p-10 rounded-3xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl" />
            <h3 className="text-2xl font-bold text-purple-400 mb-4">Our Vision</h3>
            <p className="text-xl text-slate-200 leading-relaxed">
              In a world where AI answers drive decisions, EchoAI ensures a brand’s voice is clear, accurate, and influential.
            </p>
          </div>

        </div>

        <div className="mt-24 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">The EchoAI Loop</h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            A reliable, actionable system that turns AI-era ambiguity into a measurable advantage. 
            We measure, trace, and optimize your brand's "AI share of voice."
          </p>
        </div>
      </div>
    </section>
  );
};