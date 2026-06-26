import React, { useState, useCallback, memo } from 'react';
import { Reveal } from '../utils/Reveal';
import { Icon } from './Icon';
import { tabs, faqs } from '../data/faq';

const FaqItem = memo(({ faq, isOpen, onClick }: { faq: { q: string, a: string }, isOpen: boolean, onClick: () => void }) => {
  return (
    <div className="border-b border-gray-200">
      <button 
        className="w-full text-left py-8 flex justify-between items-center group cursor-pointer"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span className="flex items-center gap-4">
          <Icon name="cube-16-solid" className="w-4 h-4 text-gray-400 group-hover:text-black transition-colors" />
          <span className={`text-base md:text-lg font-medium transition-colors duration-300 ease-premium ${isOpen ? 'text-black' : 'text-gray-600 group-hover:text-black'}`}>{faq.q}</span>
        </span>
        <span className={`p-1.5 rounded-md transition-all duration-500 ease-premium border border-gray-200 ${isOpen ? 'bg-black text-white rotate-180' : 'bg-gray-50 text-gray-500'}`}>
          <Icon name="plus" className="w-4 h-4" />
        </span>
      </button>
      <div 
        className={`grid transition-all duration-500 ease-premium ${isOpen ? 'grid-rows-[1fr] opacity-100 pb-8' : 'grid-rows-[0fr] opacity-0 pb-0'}`}
        aria-hidden={!isOpen}
      >
        <div className="overflow-hidden">
          <p className="text-gray-600 text-sm leading-relaxed max-w-2xl pl-8">{faq.a}</p>
        </div>
      </div>
    </div>
  );
});

const TabButton = memo(({ tab, isActive, onClick }: { tab: string, isActive: boolean, onClick: () => void }) => {
  return (
    <button 
      onClick={onClick}
      aria-selected={isActive}
      role="tab"
      className={`py-4 px-6 text-sm font-mono tracking-widest border-b-2 transition-colors ${isActive ? 'border-black text-black' : 'border-transparent text-gray-500 hover:text-black'}`}
    >
      {tab}
    </button>
  );
});

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState('Overview');

  const handleFaqClick = useCallback((idx: number) => {
    setOpenIdx(prev => prev === idx ? null : idx);
  }, []);

  const handleTabClick = useCallback((tab: string) => {
    setActiveTab(tab);
  }, []);

  return (
    <section className="py-32 px-6 border-t border-gray-100 bg-gray-50 text-black">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="lg:w-1/3 flex flex-col justify-between">
            <Reveal>
              <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-6">000 FAQ</div>
              <h2 className="text-4xl md:text-5xl font-mono text-black tracking-tight mb-6 leading-tight">Common<br/>inquiries</h2>
              <p className="text-gray-600 text-sm mb-10 leading-relaxed max-w-sm">Everything you need to know about deploying, scaling, and securing your neural agents with Armory. Can't find an answer?</p>
              <button className="group flex items-center gap-3 border border-gray-300 px-6 py-3 rounded-md text-sm font-medium text-black hover:bg-black hover:text-white transition-all duration-300 ease-premium w-fit" aria-label="Contact Us">
                Contact Us
                <Icon name="chevron-right" className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-300 ease-premium" />
              </button>
            </Reveal>
          </div>

          <div className="lg:w-2/3">
            <Reveal delay={200}>
              <div className="flex flex-wrap border-b border-gray-200 mb-8" role="tablist">
                {tabs.map((tab) => (
                  <TabButton 
                    key={tab} 
                    tab={tab} 
                    isActive={activeTab === tab} 
                    onClick={() => handleTabClick(tab)} 
                  />
                ))}
              </div>

              <div className="border-t border-gray-200">
                {faqs.map((faq, idx) => (
                  <FaqItem 
                    key={idx} 
                    faq={faq} 
                    isOpen={openIdx === idx} 
                    onClick={() => handleFaqClick(idx)} 
                  />
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
