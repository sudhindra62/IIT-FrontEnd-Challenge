import React from 'react';
import { Reveal } from '../utils/Reveal';
import { Icon } from './Icon';
import { caseStudies } from '../data/caseStudies';

export function CaseStudies() {
  return (
    <section className="bg-[#F5F5F5] text-black border-t border-black/5 relative z-10 font-sans" aria-label="Case Studies">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Top Header Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-32 pb-24 border-b border-black/10">
          <div className="hidden lg:block border-r border-black/10"></div>
          <div className="lg:col-span-2 px-0 lg:px-12 flex flex-col justify-center border-r border-black/10">
            <Reveal>
              <h2 className="text-5xl font-sans font-medium text-black mb-6 tracking-tight leading-[1.1]">
                Proven neural<br/>solutions
              </h2>
              <p className="text-gray-600 max-w-sm text-sm leading-relaxed">
                We partner with industry leaders to deploy bespoke AI agents that solve complex operational hurdles and drive measurable growth.
              </p>
            </Reveal>
          </div>
          <div className="hidden lg:block"></div>
        </div>

        {/* Study Rows */}
        <div className="flex flex-col">
          {caseStudies.map((study, idx) => (
            <article key={idx} className="group grid grid-cols-1 lg:grid-cols-4 border-b border-black/10 transition-colors hover:bg-black/[0.02] cursor-pointer">
              {/* Logo Column */}
              <div className="p-12 border-b lg:border-b-0 lg:border-r border-black/10 flex items-center justify-center lg:justify-start">
                <span className="text-3xl font-serif font-bold tracking-tighter text-black transition-colors">{study.logo}</span>
              </div>
              
              {/* Year Column */}
              <div className="p-12 border-b lg:border-b-0 lg:border-r border-black/10 flex items-start">
                <span className="text-xs font-mono text-gray-500 tracking-widest">{study.year}</span>
              </div>
              
              {/* Content Column */}
              <div className="p-12 border-b lg:border-b-0 lg:border-r border-black/10 flex flex-col justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                <h3 className="text-xl font-sans font-medium text-black mb-6 tracking-tight">{study.title}</h3>
                <p className="text-xs font-mono text-gray-600 leading-relaxed max-w-sm">{study.desc}</p>
              </div>

              {/* Arrow Column */}
              <div className="p-12 flex items-center justify-end lg:justify-end">
                <div className="w-10 h-10 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-2" aria-hidden="true">
                  <Icon name="chevron-double-right" className="w-5 h-5 text-black" />
                </div>
              </div>
            </article>
          ))}
        </div>
        
      </div>
    </section>
  );
}
