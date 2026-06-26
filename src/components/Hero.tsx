import React, { useEffect, useRef, useState } from 'react';
import { Reveal } from '../utils/Reveal';
import { Icon } from './Icon';

export function Hero() {
  const links = [
    "AI Strategy",
    "Custom Agents",
    "Process Automation",
    "Data Intelligence"
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        setMousePos({ x, y });
        containerRef.current.style.setProperty('--mouse-x', `${x}`);
        containerRef.current.style.setProperty('--mouse-y', `${y}`);
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[90vh] flex items-center pt-32 pb-24 overflow-hidden">
      {/* Subtle depth gradient to match dark terrain feel */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_40%_50%,_var(--color-nocturnal)_0%,_transparent_60%)] opacity-20 pointer-events-none" />

      {/* Animated 3D Block Background */}
      <div className="absolute right-[-20%] top-[-20%] w-[120%] h-[140%] overflow-hidden pointer-events-none z-0 opacity-40 mix-blend-screen" 
           style={{ maskImage: 'radial-gradient(circle at 60% 50%, black 10%, transparent 60%)', WebkitMaskImage: 'radial-gradient(circle at 60% 50%, black 10%, transparent 60%)' }}>
        <div 
          className="w-full h-full transition-transform duration-1000 ease-out"
          style={{
            transform: `perspective(1200px) rotateX(${50 + mousePos.y * 20}deg) rotateZ(${-35 + mousePos.x * -20}deg) scale(1.5)`,
            transformStyle: 'preserve-3d',
            display: 'grid',
            gridTemplateColumns: 'repeat(20, 1fr)',
            gap: '1px'
          }}
        >
          {Array.from({ length: 400 }).map((_, i) => {
            const x = i % 20;
            const y = Math.floor(i / 20);
            const dist = Math.sqrt(Math.pow(x - 10, 2) + Math.pow(y - 10, 2));
            return (
              <div 
                key={i}
                className="relative bg-black"
                style={{
                  paddingBottom: '100%',
                  transformStyle: 'preserve-3d',
                  animation: `block-wave 6s ease-in-out infinite`,
                  animationDelay: `${dist * -0.4}s`
                }}
              >
                {/* top face */}
                <div className="absolute inset-0 bg-[#222] border border-[#444] transform translateZ(30px) group-hover:bg-white" />
                {/* front face */}
                <div className="absolute bottom-0 w-full h-[30px] bg-[#000] border-x border-b border-[#222] transform origin-bottom rotateX(-90deg)" />
                {/* right face */}
                <div className="absolute right-0 w-[30px] h-full bg-[#111] border-y border-r border-[#222] transform origin-right rotateY(90deg)" />
              </div>
            );
          })}
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto w-full px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center relative z-10">
        
        {/* Left Column - Core Proposition */}
        <div className="flex flex-col justify-center">
          <Reveal delay={100}>
            <h1 className="text-6xl md:text-[5.5rem] lg:text-[6.5rem] font-sans font-medium text-white tracking-tighter leading-[1.05] mb-6">
              Power your<br />future with AI
            </h1>
          </Reveal>

          <Reveal delay={250}>
            <p className="text-gray-300 text-lg max-w-md mb-12 leading-relaxed font-sans">
              Deploy custom enterprise agents and automate complex workflows.<br />
              Scale your intelligence with Armory today.
            </p>
          </Reveal>

          <Reveal delay={400}>
            <button className="flex items-center gap-4 bg-white text-black pl-1.5 pr-6 py-1.5 font-medium hover:bg-[var(--color-saffron)] transition-colors w-fit group">
              <div className="bg-black flex items-center justify-center w-8 h-8 rounded-sm group-hover:bg-black/90 transition-colors">
                <Icon name="squares-plus" className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-sans tracking-tight">Build A Workflow</span>
            </button>
          </Reveal>
        </div>

        {/* Right Column - Directory & Client Ribbon */}
        <div className="flex flex-col justify-center pl-0 lg:pl-12">
          <div className="flex flex-col gap-5 mb-16">
            {links.map((link, idx) => (
              <Reveal key={link} delay={500 + (idx * 100)}>
                <a href="#" className="text-3xl md:text-4xl font-sans font-medium text-white tracking-tight hover:text-[var(--color-forsythia)] transition-colors block w-fit">
                  {link}
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal delay={1000}>
            <div className="flex flex-wrap items-center gap-8 text-white/50">
               <div className="flex items-center gap-2 hover:text-white transition-colors cursor-default">
                 <Icon name="cloud" className="w-5 h-5" />
                 <span className="text-lg font-bold tracking-tight">Anthem</span>
               </div>
               <div className="flex items-center gap-2 hover:text-white transition-colors cursor-default">
                 <Icon name="star" className="w-5 h-5" />
                 <span className="text-lg font-bold tracking-tight">CVS pharmacy</span>
               </div>
               <div className="flex items-center gap-2 hover:text-white transition-colors cursor-default">
                 <Icon name="cube-16-solid" className="w-5 h-5" />
                 <span className="text-lg font-bold tracking-tight">United Healthcare</span>
               </div>
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
}
