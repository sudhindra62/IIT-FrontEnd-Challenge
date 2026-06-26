import React from 'react';
import { Reveal } from '../utils/Reveal';
import { Icon } from './Icon';
import { stats } from '../data/stats';

export function Stats() {
  return (
    <section className="border-t border-white/5 bg-[#0A0A0A] relative z-10" aria-label="Statistics">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Top half: Text content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-32 pb-24 border-b border-white/5">
          <div className="hidden lg:block border-r border-white/5"></div>
          <div className="lg:col-span-2 px-0 lg:px-12 flex flex-col justify-center border-r border-white/5">
            <Reveal>
              <div className="flex items-center gap-2 text-xs font-mono text-[var(--color-mystic)] uppercase tracking-widest mb-6" aria-hidden="true">
                <Icon name="bars-3-bottom-left" className="w-4 h-4 transform rotate-90" />
                <span>STATISTICS</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-3xl xl:text-4xl font-sans text-white font-medium leading-[1.2] mb-10 tracking-tight max-w-md">
                Quantifiable impact across every deployment. We measure success by the speed and scale of your neural ops.
              </h2>
              <button className="flex items-center gap-4 bg-white text-black pl-1.5 pr-6 py-1.5 font-medium hover:bg-[var(--color-saffron)] transition-colors w-fit group" aria-label="View Report">
                <div className="bg-black flex items-center justify-center w-8 h-8 rounded-sm group-hover:bg-black/90 transition-colors" aria-hidden="true">
                  <Icon name="squares-plus" className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-sans tracking-tight">View Report</span>
              </button>
            </Reveal>
          </div>
          <div className="hidden lg:block"></div>
        </div>

        {/* Middle half: 3 Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 border-b border-white/5">
          <div className="hidden lg:block border-r border-white/5"></div>
          {stats.map((stat, idx) => (
            <div key={idx} className={`p-12 ${idx < 2 ? 'border-b lg:border-b-0 lg:border-r border-white/5' : ''} relative group`}>
              <Reveal delay={idx * 100}>
                <div className="absolute top-8 right-8 w-4 h-4 border-t border-r border-white/20 group-hover:border-[var(--color-forsythia)] transition-colors" aria-hidden="true"></div>
                <div className="text-6xl font-sans font-light text-white tracking-tighter mb-4 group-hover:text-[var(--color-forsythia)] transition-colors">{stat.value}</div>
                <div className="text-sm text-gray-400 font-mono max-w-[200px] leading-relaxed">{stat.desc}</div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
      
      {/* Bottom half: Video section */}
      <Reveal delay={300}>
        <div className="max-w-[1400px] mx-auto px-6 h-[600px]">
          <div className="grid grid-cols-1 lg:grid-cols-4 h-full">
            <div className="hidden lg:block border-r border-white/5"></div>
            <div className="lg:col-span-3 h-[600px] relative border-r border-white/5 overflow-hidden bg-black" aria-label="Video presentation">
              {/* Glowing blobs */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center pointer-events-none z-0" aria-hidden="true">
                 <div className="absolute w-[400px] h-[400px] bg-white/20 blur-[80px] rounded-full mix-blend-screen animate-[glow-blob_8s_ease-in-out_infinite]" />
                 <div className="absolute w-[300px] h-[300px] bg-white/10 blur-[60px] rounded-full mix-blend-screen animate-[glow-blob_6s_ease-in-out_infinite_reverse]" style={{ animationDelay: '1s' }} />
                 <div className="absolute w-[200px] h-[200px] bg-white/30 blur-[40px] rounded-full mix-blend-screen animate-[glow-blob_4s_ease-in-out_infinite]" style={{ animationDelay: '2s' }} />
                 <div className="absolute w-[150px] h-[150px] bg-white/40 blur-[30px] rounded-full mix-blend-screen animate-[glow-blob_7s_ease-in-out_infinite_reverse]" style={{ animationDelay: '3s' }} />
              </div>
              
              <div className="absolute top-8 right-8 flex items-center gap-2 text-white/70 font-mono text-sm z-20">
                <Icon name="clock" className="w-4 h-4" aria-hidden="true" />
                <span>2 Minutes Watch</span>
              </div>
              
              <div className="absolute inset-x-0 bottom-24 flex justify-center z-20">
                <button className="group flex items-center justify-center bg-transparent text-white border border-transparent px-6 py-2 text-xs font-mono font-bold tracking-widest uppercase transition-colors relative hover:text-white/80" aria-label="Play video">
                  <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-white/50 group-hover:border-white" aria-hidden="true"></div>
                  <div className="absolute -top-1 -right-1 w-2 h-2 border-t border-r border-white/50 group-hover:border-white" aria-hidden="true"></div>
                  <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b border-l border-white/50 group-hover:border-white" aria-hidden="true"></div>
                  <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-white/50 group-hover:border-white" aria-hidden="true"></div>
                  PLAY VIDEO
                </button>
              </div>

              {/* Central stylized Armory logo overlay */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10" aria-hidden="true">
                 <svg viewBox="0 0 24 24" className="w-24 h-24 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]" fill="currentColor">
                   <path d="m21.6 7.2-12 1.2 2.4-7.2L2.4 12l10.8-1.2-2.4 8.4z" />
                 </svg>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
