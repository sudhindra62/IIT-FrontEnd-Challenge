import React, { useState, useEffect } from 'react';
import { Icon } from './Icon';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ease-premium ${scrolled ? 'pt-4 pb-4 bg-[#0A0A0A]/80 backdrop-blur-xl border-b border-white/5' : 'pt-8 pb-4 bg-transparent'}`}>
      <nav className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
        
        {/* Brand */}
        <div className="flex items-center gap-2 text-white font-sans cursor-pointer">
          <div className="w-8 h-8 flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-full h-full text-white" fill="currentColor">
              <path d="m21.6 7.2-12 1.2 2.4-7.2L2.4 12l10.8-1.2-2.4 8.4z" />
            </svg>
          </div>
          <span 
            className="mt-1 lowercase text-3xl"
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

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors font-sans font-medium">Features</a>
          <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors font-sans font-medium">Workflows</a>
          <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors font-sans font-medium">Solutions</a>
          <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors font-sans font-medium">Resources</a>
        </div>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#" className="text-sm text-white hover:text-gray-300 transition-colors font-sans font-medium">Log In</a>
          <button className="text-sm text-white font-medium px-4 py-2 border border-white/20 rounded hover:bg-white/5 hover:border-[var(--color-saffron)] transition-colors font-sans group">
            <span className="group-hover:text-[var(--color-saffron)] transition-colors">Get Started</span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden flex flex-col gap-1.5 p-2 group cursor-pointer" aria-label="Toggle Menu">
          <div className="w-5 h-[1px] bg-white transition-all duration-300"></div>
          <div className="w-5 h-[1px] bg-white transition-all duration-300"></div>
        </button>

      </nav>
    </header>
  );
}
