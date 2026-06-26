import React from 'react';
import { Reveal } from '../utils/Reveal';
import { Icon } from './Icon';
import { approachFeatures } from '../data/approach';

export function LongTerm() {
  return (
    <section className="py-32 px-6 border-t border-black/5 bg-white text-black relative z-10 font-sans" aria-label="Our Approach">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Left Media Area */}
        <div className="lg:w-1/2 flex flex-col relative min-h-[600px] rounded-[2rem] overflow-hidden bg-[#111]" aria-hidden="true">
           {/* Armory Logo in top left */}
           <div className="absolute top-8 left-8 z-30 flex items-center gap-2">
             <div className="w-5 h-5 flex items-center justify-center">
               <svg viewBox="0 0 24 24" className="w-full h-full text-white" fill="currentColor">
                 <path d="m21.6 7.2-12 1.2 2.4-7.2L2.4 12l10.8-1.2-2.4 8.4z" />
               </svg>
             </div>
             <span 
                className="text-white mt-1 lowercase text-xl"
                style={{ 
                  fontFamily: '"Arial Black", Impact, sans-serif', 
                  fontWeight: 900, 
                  letterSpacing: '-0.05em',
                  transform: 'scaleX(1.1)',
                  transformOrigin: 'left center'
                }}
              >
                armory
              </span>
           </div>

           {/* Eye Image with ASCII/Digital overlay */}
           <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542204637-e67bc7d41e48?auto=format&fit=crop&q=80')] bg-cover bg-center grayscale opacity-60"></div>
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-40 mix-blend-overlay"></div>
           
           {/* Animated scanning line */}
           <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent h-[10%] animate-[scan_4s_linear_infinite] z-10 pointer-events-none"></div>

           {/* Concept of the glowing mesh from video */}
           <div className="absolute inset-0 flex items-center justify-center mix-blend-screen pointer-events-none z-20">
              <div className="w-[150%] h-[150%] bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.05)_0%,_transparent_60%)] animate-pulse"></div>
           </div>
           
           {/* Floating elements inside media */}
           <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end z-20">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-3 rounded-xl">
                 <div className="text-xs text-white/70 font-mono mb-1">Optics Active</div>
                 <div className="text-sm text-white font-medium flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
                   Scanning Parameters
                 </div>
              </div>
              <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:scale-105 transition-transform shadow-xl" tabIndex={-1}>
                <Icon name="arrow-trending-up" className="w-5 h-5 text-black ml-1" />
              </button>
           </div>
        </div>

        {/* Right Content Area */}
        <div className="lg:w-1/2 flex flex-col justify-center">
          <Reveal>
            <div className="mb-16">
              <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-6">000 OUR APPROACH</div>
              <h2 className="text-4xl md:text-5xl font-mono text-black tracking-tight mb-8 leading-tight">
                Built for the long<br/>term
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
                We don't just ship code; we architect neural ecosystems. Our approach combines rigorous testing with rapid deployment cycles.
              </p>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
              {approachFeatures.map((feat, idx) => (
                <article key={idx}>
                  <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center mb-6" aria-hidden="true">
                    <Icon name={feat.icon as any} className="w-5 h-5 text-black" />
                  </div>
                  <h3 className="text-black font-mono text-lg mb-3">{feat.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feat.desc}
                  </p>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
