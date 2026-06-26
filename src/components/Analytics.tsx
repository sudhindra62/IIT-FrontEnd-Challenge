import React from 'react';
import { Reveal } from '../utils/Reveal';
import { Icon } from './Icon';

export function Analytics() {
  return (
    <section className="py-32 px-6 max-w-[1400px] mx-auto border-t border-white/5 bg-dark-bg text-white">
      <Reveal>
        <div className="max-w-3xl mb-20">
          <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-6">000 PRODUCT STATISTICS</div>
          <h2 className="text-4xl md:text-5xl font-mono text-white tracking-tight mb-8 leading-tight">
            Optimized for<br/>performance
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
            Monitor every neural pulse in real-time. Armory provides deep telemetry into agent accuracy, server latency, and token efficiency.
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* System Load */}
        <div className="col-span-1 md:col-span-4 border border-white/5 bg-dark-card p-8 rounded-2xl flex flex-col justify-between h-[300px]">
          <div>
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-white text-sm font-mono flex items-center gap-2"><Icon name="search" className="w-4 h-4" /> System Load</h3>
              <span className="text-xs text-gray-500 font-mono">98.7%</span>
            </div>
            <p className="text-gray-500 text-xs">Active neural processing</p>
          </div>
          
          <div className="flex items-center justify-center flex-1 mt-4">
            {/* Fake Circular Gauge */}
            <div className="w-40 h-40 rounded-full border-4 border-white/10 border-t-white flex items-center justify-center relative">
              <div className="text-center">
                <div className="text-5xl font-mono text-white tracking-tighter">15</div>
                <div className="text-[10px] text-gray-500 font-mono mt-1">Core Systems</div>
              </div>
            </div>
          </div>
          <div className="flex justify-between text-xs text-gray-500 font-mono mt-4">
             <div><span className="text-white">99%</span> CACHE</div>
             <div><span className="text-white">4M</span> UPTIME</div>
          </div>
        </div>

        {/* SLA Response */}
        <div className="col-span-1 md:col-span-4 border border-white/5 bg-dark-card p-8 rounded-2xl flex flex-col justify-between h-[300px]">
          <div>
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-white text-sm font-mono flex items-center gap-2"><Icon name="arrow-trending-up" className="w-4 h-4" /> SLA Response</h3>
              <span className="text-xs text-gray-500 font-mono">99.99%</span>
            </div>
            <p className="text-gray-500 text-xs">Global uptime monitoring</p>
          </div>
          
          <div className="flex items-end gap-2 h-32 mt-6 relative overflow-hidden group">
            <div className="absolute top-0 left-0 bg-white text-black text-[10px] px-2 py-0.5 rounded-sm font-mono z-10">11.4ms</div>
            <div className="absolute top-2 w-full h-[1px] bg-white/20 border-t border-dashed border-white/50"></div>
            
            {/* Bars */}
            {[40, 60, 30, 80, 50, 90, 40, 70, 60, 85].map((h, i) => (
              <div key={i} className="flex-1 bg-white/10 rounded-t-sm relative transition-all duration-700 hover:bg-[var(--color-forsythia)] origin-bottom group-hover:scale-y-110" style={{ height: `${h}%`, transitionDelay: `${i * 50}ms` }}>
                {i === 5 && <div className="w-full h-full bg-white relative"><div className="absolute -top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white ring-4 ring-white/20 animate-pulse"></div></div>}
              </div>
            ))}
          </div>
        </div>

        {/* Token Usage */}
        <div className="col-span-1 md:col-span-4 border border-white/5 bg-dark-card p-8 rounded-2xl flex flex-col justify-between h-[300px]">
          <div>
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-white text-sm font-mono flex items-center gap-2"><Icon name="cube-16-solid" className="w-4 h-4" /> Token Usage</h3>
              <span className="text-xs text-gray-500 font-mono">0.4M</span>
            </div>
            <p className="text-gray-500 text-xs">Monthly volume throughput</p>
          </div>
          
          <div className="flex-1 flex flex-col items-center justify-center mt-6">
            <div className="text-7xl font-mono text-white tracking-tighter mb-4 animate-[pulse_4s_ease-in-out_infinite]">345</div>
            <div className="flex justify-between w-full mt-auto pt-4 border-t border-white/5">
              <div className="text-center group">
                <div className="text-white font-mono text-lg group-hover:text-[var(--color-forsythia)] transition-colors">162</div>
                <div className="text-[10px] text-gray-500 uppercase tracking-widest">TOTAL QUERIES</div>
              </div>
              <div className="text-center group">
                <div className="text-white font-mono text-lg group-hover:text-[var(--color-saffron)] transition-colors">135</div>
                <div className="text-[10px] text-gray-500 uppercase tracking-widest">ACTIVE NODES</div>
              </div>
            </div>
          </div>
        </div>

        {/* Growth Vector */}
        <div className="col-span-1 md:col-span-12 border border-white/5 bg-dark-card p-8 rounded-2xl flex flex-col md:flex-row h-auto md:h-[300px] overflow-hidden relative group">
           <div className="md:w-1/3 flex flex-col justify-between relative z-10">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-white text-sm font-mono flex items-center gap-2"><Icon name="arrow-trending-up" className="w-4 h-4" /> Growth Vector</h3>
                  <span className="text-xs text-gray-500 font-mono md:hidden">99.98%</span>
                </div>
                <p className="text-gray-500 text-xs">Efficiency gains over 30 days</p>
              </div>
              
              <div className="mt-8 mb-8 md:mb-0">
                <div className="text-7xl font-mono text-white tracking-tighter group-hover:text-[var(--color-mystic)] transition-colors">82%</div>
                <div className="text-[10px] text-gray-500 uppercase tracking-widest mt-2">NET GROWTH</div>
              </div>

              <p className="text-xs text-gray-400 max-w-[200px]">Optimizing neural weights for output.</p>
           </div>

           <div className="md:w-2/3 h-48 md:h-full relative flex items-end ml-4 md:ml-0 overflow-hidden">
              <div className="absolute top-0 right-0 text-xs text-gray-500 font-mono hidden md:block z-10">99.98%</div>
              {/* Fake SVG Line chart */}
              <svg className="w-full h-full drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] group-hover:scale-105 transition-transform duration-1000" preserveAspectRatio="none" viewBox="0 0 100 100">
                 <path d="M0,80 Q10,70 20,85 T40,60 T60,75 T80,30 T100,45 L100,100 L0,100 Z" fill="rgba(255,255,255,0.02)" />
                 <path className="animate-[dash_5s_linear_infinite]" strokeDasharray="200" strokeDashoffset="200" d="M0,80 Q10,70 20,85 T40,60 T60,75 T80,30 T100,45" fill="none" stroke="white" strokeWidth="1" />
                 {/* Dotted grid lines */}
                 <line x1="0" y1="20" x2="100" y2="20" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" strokeDasharray="2 2" />
                 <line x1="0" y1="50" x2="100" y2="50" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" strokeDasharray="2 2" />
                 <line x1="0" y1="80" x2="100" y2="80" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" strokeDasharray="2 2" />
              </svg>
           </div>
        </div>
      </div>
    </section>
  );
}
