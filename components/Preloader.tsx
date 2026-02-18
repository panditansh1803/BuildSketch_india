import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';

export const Preloader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [percent, setPercent] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {


    let current = 0;
    const interval = setInterval(() => {
      current += Math.random() * 12;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);

        // Final preloader fade out sequence
        gsap.to(containerRef.current, {
          yPercent: -100,
          duration: 1.2,
          ease: "power4.inOut",
          delay: 0.5,
          onComplete: onComplete
        });
      }
      setPercent(Math.floor(current));
    }, 120);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div ref={containerRef} className="fixed inset-0 z-[10000] bg-obsidian flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 blueprint-overlay opacity-5 animate-[pulse_10s_infinite]"></div>

      <div className="mb-12 relative z-10">
        <svg viewBox="0 0 200 200" className="w-48 h-48 drop-shadow-[0_0_20px_rgba(243,156,18,0.4)]">
          <rect x="40" y="40" width="120" height="120" stroke="#F39C12" strokeWidth="2" fill="none"
            style={{ strokeDasharray: 480, strokeDashoffset: 480, animation: 'draw 2s ease forwards' }} />
          <path d="M75,75 L75,125 L100,125 Q115,125 115,112 Q115,100 100,100 L85,100 L100,100 Q115,100 115,87 Q115,75 100,75 Z"
            fill="none" stroke="#F39C12" strokeWidth="2"
            style={{ strokeDasharray: 300, strokeDashoffset: 300, animation: 'draw 1.5s ease 0.8s forwards' }} />
        </svg>
      </div>

      <div className="text-center relative z-10">
        <div className="flex gap-4 mb-4 overflow-hidden">
          <span className="font-montserrat font-black text-4xl text-safety-orange tracking-[0.2em] opacity-0 animate-[slideUp_0.8s_ease_1.2s_forwards]">BUILD</span>
          <span className="font-montserrat font-black text-4xl text-safety-orange tracking-[0.2em] opacity-0 animate-[slideUp_0.8s_ease_1.4s_forwards]">SKETCH</span>
        </div>

        <div className="w-64 h-[2px] bg-white/10 rounded-full overflow-hidden mb-4 mx-auto relative">
          <div
            className="h-full bg-safety-orange transition-all duration-300 ease-out shadow-[0_0_15px_#F39C12]"
            style={{ width: `${percent}%` }}
          ></div>
        </div>

        <p className="font-roboto font-bold text-steel-grey text-xs tracking-[0.4em] uppercase opacity-0 animate-[fadeIn_0.6s_ease_1.8s_forwards]">
          Precision Structural Engineering {percent}%
        </p>
      </div>

      <style>{`
        @keyframes draw { to { stroke-dashoffset: 0; } }
        @keyframes slideUp { 
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes fadeIn { to { opacity: 1; } }
      `}</style>
    </div>
  );
};