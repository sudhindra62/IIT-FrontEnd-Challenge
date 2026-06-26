import React from 'react';
import { Icon } from './Icon';

export function Footer() {
  return (
    <footer className="bg-[#050505] text-white relative z-10 border-t border-white/5 font-sans overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 pt-32 pb-8">
        
        {/* Newsletter & Links Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 mb-32">
          {/* Left Column - Newsletter */}
          <div>
            <div className="text-[10px] font-mono text-[var(--color-forsythia)] uppercase tracking-widest mb-6">000 GET STARTED</div>
            <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-medium tracking-tight leading-[1.05] max-w-xl mb-4">
              Get smarter about<br />AI systems
            </h2>
            <p className="text-gray-400 text-sm mb-8 font-mono">
              Weekly insights on automation, AI workflows, and real builds. No fluff, just what works.
            </p>
            <div className="flex max-w-md bg-[#0A0A0A] border border-white/10 rounded-md p-1 focus-within:border-[var(--color-forsythia)] transition-colors duration-500 ease-premium">
              <input type="email" placeholder="jane@framer.com" className="bg-transparent flex-grow px-4 text-white outline-none text-sm font-mono placeholder:text-gray-600" />
              <button className="bg-white text-black px-4 py-2 flex items-center gap-2 hover:bg-[var(--color-saffron)] transition-colors duration-300 ease-premium rounded-sm group">
                <Icon name="chevron-double-right" className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                <span className="text-sm font-medium">Subscribe</span>
              </button>
            </div>
          </div>

          {/* Right Column - Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:pt-12">
            <div className="flex flex-col">
              <h4 className="text-gray-500 font-mono text-[10px] font-bold tracking-widest uppercase mb-6">QUICK LINKS</h4>
              <ul className="space-y-4 text-sm text-gray-400 font-mono">
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><Icon name="plus" className="w-3 h-3 text-[var(--color-forsythia)]" /> Projects</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Articles</a></li>
              </ul>
            </div>

            <div className="flex flex-col">
              <h4 className="text-gray-500 font-mono text-[10px] font-bold tracking-widest uppercase mb-6">COMPANY</h4>
              <ul className="space-y-4 text-sm text-gray-400 font-mono">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><Icon name="plus" className="w-3 h-3 text-[var(--color-forsythia)]" /> Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Book A Call</a></li>
                <li><a href="#" className="hover:text-white transition-colors">More Templates</a></li>
              </ul>
            </div>

            <div className="flex flex-col col-span-2 md:col-span-1 mt-8 md:mt-0">
              <h4 className="text-gray-500 font-mono text-[10px] font-bold tracking-widest uppercase mb-6">POLICIES</h4>
              <ul className="space-y-4 text-sm text-gray-400 font-mono mb-8">
                <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
              <div className="flex gap-4 items-center border border-white/10 rounded-md p-2 w-fit">
                <a href="#" className="w-8 h-8 flex items-center justify-center bg-white/5 hover:bg-[var(--color-forsythia)] hover:text-black rounded transition-colors text-white"><Icon name="star" className="w-4 h-4" /></a>
                <a href="#" className="w-8 h-8 flex items-center justify-center bg-white/5 hover:bg-[var(--color-forsythia)] hover:text-black rounded transition-colors text-white"><Icon name="cube" className="w-4 h-4" /></a>
                <a href="#" className="w-8 h-8 flex items-center justify-center bg-white/5 hover:bg-[var(--color-forsythia)] hover:text-black rounded transition-colors text-white"><Icon name="cpu-chip" className="w-4 h-4" /></a>
                <a href="#" className="w-8 h-8 flex items-center justify-center bg-white/5 hover:bg-[var(--color-forsythia)] hover:text-black rounded transition-colors text-white"><Icon name="cloud" className="w-4 h-4" /></a>
              </div>
            </div>
          </div>
        </div>

        {/* Huge Armory Text */}
        <div className="w-full relative flex flex-col items-center justify-center -mb-8">
          <div className="text-[18vw] font-black tracking-tighter leading-none text-white w-full text-center">
            armory
          </div>
          <div className="text-[10px] text-gray-500 font-mono mt-8 z-20">
            © 2026 Armory AI. All rights reserved.
          </div>
        </div>
        
      </div>
    </footer>
  );
}
