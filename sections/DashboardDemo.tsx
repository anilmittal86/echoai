import React from 'react';
import { ResponsiveContainer, AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const data = [
  { name: 'Jan', visibility: 400, sentiment: 240 },
  { name: 'Feb', visibility: 300, sentiment: 139 },
  { name: 'Mar', visibility: 500, sentiment: 380 },
  { name: 'Apr', visibility: 480, sentiment: 390 },
  { name: 'May', visibility: 600, sentiment: 480 },
  { name: 'Jun', visibility: 750, sentiment: 550 },
];

export const DashboardDemo: React.FC = () => {
  return (
    <section id="product" className="py-24 bg-[#0a1628] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/10 via-brand-dark to-brand-dark pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Text Content */}
          <div>
            <span className="text-cyan-400 text-sm font-semibold uppercase tracking-wide mb-4 block">Dashboard</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">The Insight Layer</h2>
            <p className="text-xl text-slate-400 mb-8">Move from data to decision in 60 seconds.</p>

            <ul className="space-y-4">
              {[
                "SignalScore tracking across all AI platforms",
                "Top Personas & Context Themes",
                "Model & Region Trends Over Time",
                "Opportunity Map & Competitive Gaps",
                "Source Tracing & Action Queue"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300">
                  <div className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Dashboard Mockup */}
          <div className="bg-[#111d32] border border-cyan-500/20 rounded-xl p-6 shadow-2xl shadow-cyan-900/20">
            {/* Header Mockup */}
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-cyan-500/10">
              <div>
                <h4 className="font-bold text-white">SignalScore</h4>
                <div className="text-xs text-slate-500">Global - Last 30 Days</div>
              </div>
              <div className="text-3xl font-bold gradient-text">84.2</div>
            </div>

            {/* Charts Grid */}
            <div className="grid grid-cols-1 gap-6">

              {/* Main Chart */}
              <div className="bg-[#0a1628] p-4 rounded-lg border border-cyan-500/10">
                <div className="flex justify-between mb-4">
                   <h5 className="text-sm font-medium text-slate-400">Visibility Trend</h5>
                   <span className="text-emerald-400 text-xs font-bold">+12%</span>
                </div>
                <div className="h-48 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                      <defs>
                        <linearGradient id="colorVis" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#00d4ff" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#00d4ff" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#1e3a5f" />
                      <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                      <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                      <Tooltip
                        contentStyle={{ backgroundColor: '#111d32', borderColor: '#00d4ff33', color: '#f8fafc' }}
                        itemStyle={{ color: '#f8fafc' }}
                      />
                      <Area type="monotone" dataKey="visibility" stroke="#00d4ff" fillOpacity={1} fill="url(#colorVis)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Secondary Metrics */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#0a1628] p-4 rounded-lg border border-cyan-500/10">
                   <h5 className="text-xs text-slate-500 mb-1">Sentiment</h5>
                   <div className="text-xl font-bold text-white mb-2">Positive</div>
                   <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                     <div className="bg-emerald-500 h-full w-[75%]"></div>
                   </div>
                </div>
                <div className="bg-[#0a1628] p-4 rounded-lg border border-cyan-500/10">
                   <h5 className="text-xs text-slate-500 mb-1">Top Model</h5>
                   <div className="text-xl font-bold text-white mb-2">Gemini 1.5</div>
                   <div className="text-xs text-cyan-400">Strongest Performance</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
