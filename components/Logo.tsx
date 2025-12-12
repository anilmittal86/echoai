import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "h-8 w-8" }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="signalGradient" x1="50" y1="0" x2="50" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#00d4ff"/>
          <stop offset="100%" stopColor="#0066ff"/>
        </linearGradient>
      </defs>

      {/* Central dot */}
      <circle cx="50" cy="50" r="6" fill="url(#signalGradient)"/>

      {/* Inner signal waves - left side */}
      <path d="M 38 35 A 20 20 0 0 0 38 65" stroke="url(#signalGradient)" strokeWidth="4" strokeLinecap="round" fill="none"/>
      <path d="M 28 25 A 32 32 0 0 0 28 75" stroke="url(#signalGradient)" strokeWidth="4" strokeLinecap="round" fill="none"/>
      <path d="M 18 15 A 45 45 0 0 0 18 85" stroke="url(#signalGradient)" strokeWidth="4" strokeLinecap="round" fill="none"/>
      <path d="M 8 8 A 55 55 0 0 0 8 92" stroke="url(#signalGradient)" strokeWidth="4" strokeLinecap="round" fill="none"/>

      {/* Inner signal waves - right side */}
      <path d="M 62 35 A 20 20 0 0 1 62 65" stroke="url(#signalGradient)" strokeWidth="4" strokeLinecap="round" fill="none"/>
      <path d="M 72 25 A 32 32 0 0 1 72 75" stroke="url(#signalGradient)" strokeWidth="4" strokeLinecap="round" fill="none"/>
      <path d="M 82 15 A 45 45 0 0 1 82 85" stroke="url(#signalGradient)" strokeWidth="4" strokeLinecap="round" fill="none"/>
      <path d="M 92 8 A 55 55 0 0 1 92 92" stroke="url(#signalGradient)" strokeWidth="4" strokeLinecap="round" fill="none"/>
    </svg>
  );
};
