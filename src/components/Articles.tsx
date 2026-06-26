import React from 'react';
import { Reveal } from '../utils/Reveal';
import { Icon } from './Icon';
import { articles } from '../data/articles';

export function Articles() {
  return (
    <section className="bg-[#EBEBEB] text-black border-t border-black/10 relative z-10 font-sans" aria-label="Articles">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Header Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-32 pb-24 border-b border-black/10">
          <div className="hidden lg:block border-r border-black/10"></div>
          <div className="lg:col-span-2 px-0 lg:px-12 flex flex-col justify-center border-r border-black/10">
            <Reveal>
              <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-6">000 ARTICLES</div>
              <h2 className="text-4xl md:text-5xl font-sans font-medium text-black tracking-tight mb-8 leading-[1.1]">
                Insights on neural<br/>logic
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed max-w-md">
                Deep dives into AI architecture, agent automation, and the future of enterprise intelligence. Stay ahead of the neural curve.
              </p>
            </Reveal>
          </div>
          <div className="hidden lg:block"></div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 border-b border-black/10">
          
          {/* Featured Article - Left Side */}
          <article className="p-0 lg:p-12 lg:border-r border-black/10 flex flex-col group cursor-pointer border-b lg:border-b-0">
            <Reveal className="h-full flex flex-col">
              <div className="w-full aspect-video bg-[#0A0A0A] overflow-hidden relative mb-8" aria-hidden="true">
                 <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-screen opacity-80 group-hover:scale-105 transition-transform duration-700"></div>
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                 
                 <div className="absolute bottom-8 left-8 text-white z-10">
                   <h3 className="text-2xl font-sans font-medium tracking-tight mb-2">What It Takes to Turn AI Into a<br/>Business Asset</h3>
                 </div>
              </div>
              
              <div className="flex flex-col gap-4 mt-auto">
                <div className="flex flex-col gap-1 text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                  <time dateTime="2026-04-29">APR 29, 2026</time>
                  <span>2 MINS READ</span>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  Using AI tools is easy. Turning them into something that drives real outcomes across your business requires structure.
                </p>
              </div>
            </Reveal>
          </article>

          {/* Secondary Articles - Right Side */}
          <div className="flex flex-col">
             {articles.map((art, idx) => (
               <article key={idx} className={`p-0 lg:p-12 flex flex-col sm:flex-row gap-8 group cursor-pointer ${idx === 0 ? 'border-b border-black/10' : ''}`}>
                 <Reveal delay={100 + (idx * 100)} className="flex flex-col sm:flex-row gap-8 w-full">
                   <div className="w-full sm:w-[240px] aspect-video bg-[#0A0A0A] overflow-hidden relative flex-shrink-0" aria-hidden="true">
                      <div className="absolute inset-0 bg-cover bg-center mix-blend-screen opacity-60 group-hover:scale-105 transition-transform duration-700" style={{ backgroundImage: `url(${art.image})` }}></div>
                   </div>
                   <div className="flex flex-col justify-between py-2">
                     <h3 className="text-xl font-sans font-medium text-black tracking-tight whitespace-pre-line">{art.title}</h3>
                     <div className="flex flex-col gap-1 text-[10px] font-mono text-gray-500 uppercase tracking-widest mt-4">
                       <time dateTime="2026-04-29">{art.date}</time>
                       <span>{art.read}</span>
                     </div>
                   </div>
                 </Reveal>
               </article>
             ))}

             {/* View Articles Box */}
             <div className="p-0 lg:p-12 border-t border-black/10 flex items-center justify-between">
               <Reveal delay={300} className="w-full flex items-center justify-between">
                 <p className="text-xs font-mono text-gray-600">Access all our articles in one place.</p>
                 <button className="group flex items-center justify-center bg-black text-white px-6 py-3 font-mono text-[10px] font-bold tracking-widest uppercase hover:bg-[var(--color-saffron)] hover:text-black transition-colors" aria-label="View All Articles">
                    <div className="w-4 h-4 mr-3 flex items-center justify-center border border-current" aria-hidden="true">
                       <Icon name="arrow-right" className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                    View Articles
                  </button>
               </Reveal>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
