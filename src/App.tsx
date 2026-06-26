import React, { useEffect, useRef, Suspense } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';

const FeatureBento = React.lazy(() => import('./components/FeatureBento').then(m => ({ default: m.FeatureBento })));
const Stats = React.lazy(() => import('./components/Stats').then(m => ({ default: m.Stats })));
const CaseStudies = React.lazy(() => import('./components/CaseStudies').then(m => ({ default: m.CaseStudies })));
const WorkflowBuilder = React.lazy(() => import('./components/WorkflowBuilder').then(m => ({ default: m.WorkflowBuilder })));
const Analytics = React.lazy(() => import('./components/Analytics').then(m => ({ default: m.Analytics })));
const LongTerm = React.lazy(() => import('./components/LongTerm').then(m => ({ default: m.LongTerm })));
const Autonomy = React.lazy(() => import('./components/Autonomy').then(m => ({ default: m.Autonomy })));
const Integrations = React.lazy(() => import('./components/Integrations').then(m => ({ default: m.Integrations })));
const Testimonials = React.lazy(() => import('./components/Testimonials').then(m => ({ default: m.Testimonials })));
const Articles = React.lazy(() => import('./components/Articles').then(m => ({ default: m.Articles })));
const FAQ = React.lazy(() => import('./components/FAQ').then(m => ({ default: m.FAQ })));
const Footer = React.lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })));

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const { clientX, clientY } = e;
        containerRef.current.style.setProperty('--mouse-x', `${clientX}px`);
        containerRef.current.style.setProperty('--mouse-y', `${clientY}px`);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#0A0A0A] text-[#E5E5E5] font-sans selection:bg-white selection:text-black relative">
      {/* Global Interactive Spotlight */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-300"
        style={{
          background: 'radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.03), transparent 40%)'
        }}
      />

      {/* Global Grain/Noise Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIj4KICA8ZmlsdGVyIGlkPSJub2lzZSI+CiAgICA8ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC45IiBydW1PY3RhdmVzPSIzIiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+CiAgPC9maWx0ZXI+CiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI25vaXNlKSIgb3BhY2l0eT0iMC4wNSIvPgo8L3N2Zz4=')] mix-blend-overlay opacity-30"></div>
      
      {/* Global Grid Lines Overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 flex justify-center px-6">
        <div className="w-full max-w-[1400px] h-full flex">
          <div className="flex-1 border-r border-white/[0.02]"></div>
          <div className="flex-1 border-r border-white/[0.02]"></div>
          <div className="flex-1 border-r border-white/[0.02]"></div>
          <div className="flex-1"></div>
        </div>
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Suspense fallback={<div className="h-[50vh]" />}>
            <FeatureBento />
            <Stats />
            <CaseStudies />
            <WorkflowBuilder />
            <Analytics />
            <LongTerm />
            <Autonomy />
            <Integrations />
            <Testimonials />
            <Articles />
            <FAQ />
          </Suspense>
        </main>
        <Suspense fallback={<div className="h-40" />}>
          <Footer />
        </Suspense>
      </div>
    </div>
  );
}
