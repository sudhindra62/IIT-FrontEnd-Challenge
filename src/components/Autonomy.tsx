import React, { useState } from 'react';
import { Reveal } from '../utils/Reveal';
import { Icon } from './Icon';
import { tabs } from '../data/autonomy';

export function Autonomy() {
  const [activeTab, setActiveTab] = useState('Analysis');

  return (
    <section className="py-32 px-6 border-t border-white/5 bg-[#050505] text-white relative" aria-label="Engineered for Autonomy">
      <div className="max-w-[1400px] mx-auto">
        <Reveal>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <div className="text-[10px] font-mono text-[var(--color-forsythia)] uppercase tracking-widest mb-6" aria-hidden="true">000 PRODUCT FEATURES</div>
              <h2 className="text-4xl md:text-5xl font-mono text-white tracking-tight mb-8 leading-tight">
                Engineered for<br/>autonomy
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Go beyond simple chat interfaces. Armory provides the underlying architecture to build, test, and scale enterprise-grade agents.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="border border-white/10 rounded-2xl overflow-hidden bg-dark-bg">
            
            {/* Desktop Tabs */}
            <div className="hidden md:grid grid-cols-4 border-b border-white/10 bg-[#0A0A0A]" role="tablist" aria-label="Autonomy Features">
              {tabs.map(tab => (
                <button 
                  key={tab.id}
                  role="tab"
                  aria-selected={activeTab === tab.id}
                  aria-controls={`panel-${tab.id}`}
                  id={`tab-${tab.id}`}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-6 px-4 text-center border-b-2 text-xs font-mono tracking-widest uppercase flex items-center justify-center gap-2 transition-colors duration-300 ${activeTab === tab.id ? 'border-[var(--color-forsythia)] text-[var(--color-forsythia)] bg-white/5' : 'border-transparent text-gray-500 hover:text-white'}`}
                >
                  <Icon name={tab.icon as any} className="w-4 h-4" aria-hidden="true" /> {tab.id}
                </button>
              ))}
            </div>

            {/* Content Area */}
            <div className="flex flex-col lg:flex-row min-h-[500px]">
              
              {/* Left visual area (Desktop Only or Top on Mobile) */}
              <div className="lg:w-1/2 p-8 md:p-12 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-white/10 relative overflow-hidden bg-[#050505] min-h-[400px]" aria-hidden="true">
                 <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.05)_0%,_transparent_70%)] pointer-events-none"></div>
                 
                 {activeTab === 'Analysis' && (
                   <div className="relative z-10 w-full max-w-sm bg-[#111] border border-white/10 rounded-xl shadow-2xl p-6 animate-fade-in">
                      <div className="flex justify-between items-center mb-6">
                         <div className="flex gap-1.5">
                           <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                           <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                           <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                         </div>
                         <Icon name="search" className="w-4 h-4 text-gray-500" />
                      </div>

                      <div className="mb-6">
                        <h4 className="text-sm font-mono text-white mb-2">Your score</h4>
                        <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                          <div className="bg-[var(--color-forsythia)] w-3/4 h-full rounded-full"></div>
                        </div>
                      </div>

                      <div className="grid grid-cols-4 gap-4">
                         <div className="bg-[#1A1A1A] rounded p-3 text-center border border-white/5">
                           <div className="text-white font-mono text-sm mb-1">9/10</div>
                           <div className="w-full h-1 bg-white/20 rounded-full"><div className="bg-[var(--color-saffron)] w-[90%] h-full rounded-full"></div></div>
                         </div>
                         <div className="bg-[#1A1A1A] rounded p-3 text-center border border-white/5">
                           <div className="text-white font-mono text-sm mb-1">8/10</div>
                           <div className="w-full h-1 bg-white/20 rounded-full"><div className="bg-[var(--color-saffron)] w-[80%] h-full rounded-full"></div></div>
                         </div>
                         <div className="bg-[#1A1A1A] rounded p-3 text-center border border-white/5">
                           <div className="text-white font-mono text-sm mb-1">100%</div>
                           <div className="w-full h-1 bg-white/20 rounded-full"><div className="bg-[var(--color-saffron)] w-[100%] h-full rounded-full"></div></div>
                         </div>
                         <div className="bg-[#1A1A1A] rounded p-3 text-center border border-white/5">
                           <div className="text-white font-mono text-sm mb-1">8.5</div>
                           <div className="w-full h-1 bg-white/20 rounded-full"><div className="bg-[var(--color-saffron)] w-[85%] h-full rounded-full"></div></div>
                         </div>
                      </div>
                   </div>
                 )}

                 {activeTab !== 'Analysis' && (
                   <div className="relative z-10 w-full max-w-sm text-center animate-fade-in">
                     <Icon name={tabs.find(t => t.id === activeTab)?.icon as any || 'cube'} className="w-24 h-24 mx-auto text-[var(--color-forsythia)] opacity-20 mb-6" />
                     <p className="text-[var(--color-forsythia)] opacity-50 font-mono text-sm uppercase tracking-widest">{activeTab} Interface</p>
                   </div>
                 )}
              </div>

              {/* Right text area (Desktop) / Mobile Accordion */}
              <div className="lg:w-1/2 flex flex-col bg-[#0A0A0A]">
                
                {/* Mobile Accordion View */}
                <div className="md:hidden flex flex-col">
                  {tabs.map((tab) => (
                    <div key={`mob-${tab.id}`} className="border-b border-white/10 last:border-0">
                      <button 
                        onClick={() => setActiveTab(tab.id)}
                        aria-expanded={activeTab === tab.id}
                        aria-controls={`panel-mob-${tab.id}`}
                        id={`tab-mob-${tab.id}`}
                        className={`w-full flex items-center justify-between p-6 text-left transition-colors ${activeTab === tab.id ? 'bg-white/5' : ''}`}
                      >
                        <span className={`text-sm font-mono tracking-widest uppercase flex items-center gap-3 ${activeTab === tab.id ? 'text-[var(--color-forsythia)]' : 'text-gray-400'}`}>
                          <Icon name={tab.icon as any} className="w-4 h-4" aria-hidden="true" />
                          {tab.id}
                        </span>
                        <Icon name="chevron-right" className={`w-4 h-4 text-gray-500 transition-transform ${activeTab === tab.id ? 'rotate-90 text-[var(--color-forsythia)]' : ''}`} aria-hidden="true" />
                      </button>
                      
                      {/* Accordion Content */}
                      <div 
                        id={`panel-mob-${tab.id}`}
                        role="region"
                        aria-labelledby={`tab-mob-${tab.id}`}
                        className={`grid transition-all duration-300 ease-in-out ${activeTab === tab.id ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                      >
                        <div className="overflow-hidden">
                          <div className="p-6 pt-0">
                            <h3 className="text-xl font-mono text-white tracking-tight mb-4 leading-tight">
                              {tab.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6">
                              {tab.subtitle}
                            </p>
                            <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-5 py-2.5 w-fit">
                              <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center" aria-hidden="true">
                                <Icon name="check" className="w-3 h-3 text-black" />
                              </div>
                              <span className="text-xs font-mono text-white tracking-widest uppercase">{tab.id} METRICS</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Desktop Text View */}
                <div 
                  className="hidden md:flex flex-col justify-center h-full p-12 lg:p-20"
                  role="tabpanel"
                  id={`panel-${activeTab}`}
                  aria-labelledby={`tab-${activeTab}`}
                >
                  <h3 className="text-2xl md:text-3xl font-mono text-white tracking-tight mb-6 leading-tight transition-all duration-300">
                    {tabs.find(t => t.id === activeTab)?.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-10 max-w-md">
                    {tabs.find(t => t.id === activeTab)?.subtitle}
                  </p>

                  <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-5 py-2.5 w-fit group hover:bg-white/10 transition-colors cursor-default">
                    <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center" aria-hidden="true">
                      <Icon name="check" className="w-3 h-3 text-black" />
                    </div>
                    <span className="text-xs font-mono text-white tracking-widest uppercase">{activeTab} METRICS</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
