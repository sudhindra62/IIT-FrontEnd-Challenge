import React from 'react';
import { Reveal } from '../utils/Reveal';
import { Icon } from './Icon';

export function Integrations() {
  const logos = [
    { name: "AI", icon: "cube-16-solid" },
    { name: "AWS", icon: "cloud" },
    { name: "Windows", icon: "squares-plus" },
    { name: "Bolt", icon: "bolt" },
    { name: "Sparkle", icon: "sparkles" },
    { name: "Figma", icon: "paint-brush" },
    { name: "Star", icon: "star" },
    { name: "Layers", icon: "square-3-stack-3d" },
    { name: "Infinity", icon: "arrow-path" },
    { name: "Tree", icon: "share" },
    { name: "Hashnode", icon: "hashtag" },
    { name: "VQ", icon: "view-columns" }
  ];

  return (
    <section className="py-32 px-6 border-t border-white/5 bg-dark-bg text-white relative">
      <div className="max-w-[1400px] mx-auto">
        <Reveal>
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-6">000 INTEGRATIONS</div>
              <h2 className="text-4xl md:text-5xl font-mono text-white tracking-tight mb-8 leading-tight">
                Armory bridges the gap between your data and your tools.
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                Deploy agents that live where you work, from Slack to GitHub and beyond.
              </p>
            </div>
          </div>
        </Reveal>
        
        <Reveal delay={200}>
          <div className="grid grid-cols-2 md:grid-cols-4 border-t border-l border-white/5">
            {logos.map((logo, i) => (
              <div key={i} className="aspect-video sm:aspect-square md:aspect-video lg:aspect-[2/1] border-b border-r border-white/5 flex items-center justify-center hover:bg-white/5 transition-colors duration-500 ease-premium cursor-pointer group relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.1)_0%,_transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-premium" />
                <Icon name={logo.icon as any} className="w-8 h-8 text-gray-500 group-hover:text-white transition-all duration-500 ease-premium group-hover:scale-110 relative z-10" />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
