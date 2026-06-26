import React from 'react';
import { Reveal } from '../utils/Reveal';
import { Icon } from './Icon';
import { reviews } from '../data/testimonials';

export function Testimonials() {
  return (
    <section className="py-32 px-0 border-t border-gray-100 bg-gray-50 text-black overflow-hidden" aria-label="Testimonials">
      <div className="max-w-[1400px] mx-auto px-6">
        <Reveal>
          <div className="mb-20">
            <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-6">000 TESTIMONIALS</div>
            <h2 className="text-4xl md:text-5xl font-mono text-black mb-6 tracking-tight">Trusted by the pioneers</h2>
            <p className="text-gray-600 max-w-xl text-lg leading-relaxed">From high-growth startups to enterprise research labs, Armory is the chosen infrastructure for teams building the next era of AI.</p>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {reviews.map((rev, idx) => (
            <Reveal key={idx} delay={idx * 150} className="h-full">
              <article className="group relative border border-gray-200 bg-white p-8 rounded-2xl h-full flex flex-col justify-between transition-all duration-500 ease-premium hover:border-[var(--color-forsythia)] hover:-translate-y-1 hover:shadow-lg">
                <div className="relative z-10">
                  <h3 className="text-lg md:text-xl text-black font-mono mb-6 leading-tight">{rev.title}</h3>
                  
                  <div className="text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-2" aria-hidden="true">RATING</div>
                  <div className="flex gap-1 mb-8 text-black" aria-label="5 out of 5 stars">
                    {[1,2,3,4,5].map(i => <span key={i} className="text-sm" aria-hidden="true">★</span>)}
                  </div>

                  <div className="text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-4" aria-hidden="true">COMMENT</div>
                  <blockquote className="text-gray-600 text-sm leading-relaxed mb-8">
                    <p>{rev.desc}</p>
                  </blockquote>
                </div>
                
                <footer className="flex items-center gap-4 border-t border-gray-100 pt-6 relative z-10">
                  <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center border border-gray-200" aria-hidden="true">
                    <Icon name="cube-16-solid" className="w-5 h-5 text-gray-400" />
                  </div>
                  <cite className="not-italic">
                    <div className="text-sm text-black font-medium">{rev.author}</div>
                    <div className="text-xs text-gray-500 font-mono">Neural Ops</div>
                  </cite>
                </footer>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Marquee */}
      <div className="w-full flex overflow-hidden border-y border-gray-200 bg-white py-8" aria-hidden="true">
        <div className="flex w-max animate-marquee text-gray-400">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-16 px-8">
               <div className="flex items-center gap-2">
                 <Icon name="cloud" className="w-6 h-6" />
                 <span className="text-xl font-bold tracking-tight text-black">Anthem</span>
               </div>
               <div className="flex items-center gap-2">
                 <Icon name="star" className="w-6 h-6" />
                 <span className="text-xl font-bold tracking-tight text-black">CVS pharmacy</span>
               </div>
               <div className="flex items-center gap-2">
                 <Icon name="cube-16-solid" className="w-6 h-6" />
                 <span className="text-xl font-bold tracking-tight text-black">United Healthcare</span>
               </div>
               <div className="flex items-center gap-2">
                 <Icon name="cpu-chip" className="w-6 h-6" />
                 <span className="text-xl font-bold tracking-tight text-black">aetna</span>
               </div>
               <div className="flex items-center gap-2">
                 <Icon name="sparkles" className="w-6 h-6" />
                 <span className="text-xl font-bold tracking-tight text-black">Cigna</span>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
