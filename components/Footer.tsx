import React from 'react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050d1a] border-t border-cyan-500/10 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <Logo className="w-8 h-8" />
            <span className="text-xl font-bold text-white">SignalAI</span>
          </div>
          <div className="text-slate-400 text-sm">
            contact@signalai.com | www.signalai.com
          </div>
        </div>

        <div className="border-t border-cyan-500/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} SignalAI. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-cyan-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Terms</a>
            <a href="https://calendly.com/anilmittal" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
