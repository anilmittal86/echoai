import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "h-8 w-8" }) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      <circle cx="50" cy="50" r="45" stroke="url(#paint0_linear)" strokeWidth="8"/>
      <circle cx="50" cy="50" r="25" stroke="url(#paint1_linear)" strokeWidth="8"/>
      <circle cx="50" cy="50" r="10" fill="#60a5fa"/>
      <defs>
        <linearGradient id="paint0_linear" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3B82F6"/>
          <stop offset="1" stopColor="#6366f1"/>
        </linearGradient>
        <linearGradient id="paint1_linear" x1="25" y1="25" x2="75" y2="75" gradientUnits="userSpaceOnUse">
          <stop stopColor="#60a5fa"/>
          <stop offset="1" stopColor="#818cf8"/>
        </linearGradient>
      </defs>
    </svg>
  );
};