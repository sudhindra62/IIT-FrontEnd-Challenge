import React, { useState, useEffect, useCallback, memo } from 'react';
import { Reveal } from '../utils/Reveal';
import { Icon } from './Icon';
import { features } from '../data/features';

const MobileFeatureItem = memo(({ feat, index, activeIndex, onClick }: any) => {
  const isActive = activeIndex === index;
  return (
    <div
      className={`border-b border-white/5 transition-all duration-500 ease-premium ${isActive ? 'bg-[#111] border-l-2 border-l-[var(--color-forsythia)]' : 'bg-[#0A0A0A] border-l-2 border-l-transparent'}`}
    >
      <button 
        className="w-full flex justify-between items-center cursor-pointer p-6"
        onClick={() => onClick(isActive ? null : index)}
        aria-expanded={isActive}
      >
        <span className="flex items-center gap-4">
          <Icon name={feat.icon} className={`w-6 h-6 transition-colors duration-500 ease-premium ${isActive ? 'text-[var(--color-forsythia)]' : 'text-gray-500'}`} />
          <span className={`font-mono text-sm tracking-tight ${isActive ? 'text-white' : 'text-gray-400'}`}>{feat.title}</span>
        </span>
        <Icon name="chevron-down" className={`w-5 h-5 transition-transform duration-500 ease-premium ${isActive ? 'rotate-180 text-[var(--color-forsythia)]' : 'text-gray-500'}`} />
      </button>
      <div 
        className={`grid transition-all duration-500 ease-premium overflow-hidden px-6 ${isActive ? 'grid-rows-[1fr] opacity-100 pb-6' : 'grid-rows-[0fr] opacity-0 pb-0'}`}
        aria-hidden={!isActive}
      >
        <div className="min-h-0">
          <p className="text-gray-400 text-xs leading-relaxed pl-10">{feat.desc}</p>
        </div>
      </div>
    </div>
  );
});

const DesktopFeatureItem = memo(({ feat, index, activeIndex, onMouseEnter, isLast }: any) => {
  const isActive = activeIndex === index;
  return (
    <div
      onMouseEnter={() => onMouseEnter(index)}
      className={`group p-10 flex flex-col justify-between min-h-[420px] relative border-b border-white/5 lg:border-b-0 cursor-default transition-colors duration-500 ease-premium ${!isLast ? 'lg:border-r border-white/5' : ''} ${isActive ? 'bg-[#111] before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-[var(--color-forsythia)]' : ''}`}
    >
      <div className="absolute inset-0 pointer-events-none opacity-[0.15] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiNmZmYiLz48L3N2Zz4=')] mix-blend-screen mask-image-linear-gradient"></div>
      
      <div className="flex-1 flex items-center justify-center relative z-10 mb-12">
        <Icon name={feat.icon} className={`w-24 h-24 stroke-[0.5] transition-all duration-500 ease-premium ${isActive ? 'text-[var(--color-forsythia)] opacity-100 scale-110' : 'text-white opacity-40'}`} />
      </div>

      <div className="relative z-10 mt-auto">
        <h3 className={`font-mono mb-4 text-sm font-bold tracking-tight transition-colors duration-500 ease-premium ${isActive ? 'text-white' : 'text-gray-400'}`}>{feat.title}</h3>
        <p className={`text-xs leading-relaxed max-w-[280px] transition-colors duration-500 ease-premium ${isActive ? 'text-gray-300' : 'text-gray-600'}`}>
          {feat.desc}
        </p>
      </div>
    </div>
  );
});

export function FeatureBento() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile(); // Initial check
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMobileClick = useCallback((idx: number | null) => {
    setActiveIndex(idx);
  }, []);

  const handleDesktopEnter = useCallback((idx: number) => {
    setActiveIndex(idx);
  }, []);

  return (
    <section className="pt-24 pb-0 max-w-[1400px] mx-auto border-t border-white/5 relative z-10" aria-label="Features">
      <Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 px-6 mb-24">
          <div>
            <div className="flex gap-4 mb-8">
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-transparent">
                <Icon name="arrow-path" className="w-5 h-5 text-gray-400" />
              </div>
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-transparent">
                <Icon name="sparkles" className="w-5 h-5 text-[var(--color-forsythia)]" />
              </div>
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-transparent">
                <Icon name="cpu-chip" className="w-5 h-5 text-gray-400" />
              </div>
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-transparent">
                <Icon name="bolt" className="w-5 h-5 text-gray-400" />
              </div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-sans font-medium text-white tracking-tight mb-8 leading-[1.1]">
              Integrate with the world's most powerful neural engines. Seamlessly connect your custom data to GPT-4, Claude 3, and Perplexity for unmatched precision. <span className="text-gray-600">Build agents that don't just process, they understand.</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-lg">
              Unlock the full potential of LLM-native workflows. Our infrastructure ensures low latency and high-fidelity output for every request.
            </p>
          </div>
        </div>
      </Reveal>

      {isMobile ? (
        <div className="flex flex-col border-t border-white/5">
          {features.map((feat, idx) => (
            <MobileFeatureItem 
              key={feat.id} 
              feat={feat} 
              index={idx} 
              activeIndex={activeIndex} 
              onClick={handleMobileClick} 
            />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-white/5 bg-[#0A0A0A]">
          {features.map((feat, idx) => (
            <DesktopFeatureItem 
              key={feat.id} 
              feat={feat} 
              index={idx} 
              activeIndex={activeIndex} 
              onMouseEnter={handleDesktopEnter} 
              isLast={idx === features.length - 1}
            />
          ))}
        </div>
      )}
    </section>
  );
}
