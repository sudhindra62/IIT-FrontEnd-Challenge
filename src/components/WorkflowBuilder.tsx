import React from 'react';
import { Reveal } from '../utils/Reveal';
import { Icon } from './Icon';
import { workflowFeatures } from '../data/workflows';

export function WorkflowBuilder() {
  return (
    <section className="bg-[#0A0A0A] text-white relative z-10 border-t border-white/5" aria-label="Workflow Builder">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Top text area */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-32 pb-24 border-b border-white/5">
          <div className="hidden lg:block border-r border-white/5"></div>
          <div className="lg:col-span-2 px-0 lg:px-12 flex flex-col justify-center border-r border-white/5">
            <Reveal>
              <div className="flex items-center gap-2 text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-6">
                <Icon name="bars-3-bottom-left" className="w-4 h-4 transform rotate-90" aria-hidden="true" />
                <span>OUR PRODUCT</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-sans font-medium text-white tracking-tight mb-8 leading-[1.1]">
                Build logic at<br/>scale
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                Design, deploy, and manage sophisticated AI workflows through an intuitive visual interface. No complex coding—just pure logic.
              </p>
            </Reveal>
          </div>
          <div className="hidden lg:block"></div>
        </div>

        {/* Workflow UI Mockup */}
        <Reveal delay={200}>
          <div className="w-full h-[600px] border-b border-white/5 relative overflow-hidden flex bg-[#0A0A0A]" aria-hidden="true">
            <div className="absolute inset-0 opacity-[0.15] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiNmZmYiLz48L3N2Zz4=')]"></div>
            
            {/* Sidebar */}
            <div className="w-32 border-r border-white/5 relative z-10 flex flex-col pt-8">
              <div className="px-6 mb-8 flex flex-col gap-2">
                <button className="bg-white text-black font-mono text-[10px] py-2 px-4 text-center font-bold" tabIndex={-1}>AI AGENT</button>
                <button className="bg-transparent border border-white/10 text-white font-mono text-[10px] py-2 px-4 text-center" tabIndex={-1}>AI CHAT</button>
              </div>
              
              <div className="px-6 flex flex-col gap-4">
                <div className="text-[10px] font-mono text-gray-500 tracking-widest">STACK</div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="w-10 h-10 border border-white/10 flex items-center justify-center"><Icon name="sparkles" className="w-4 h-4 text-white" /></div>
                  <div className="w-10 h-10 border border-white/10 flex items-center justify-center"><Icon name="cube" className="w-4 h-4 text-white" /></div>
                  <div className="w-10 h-10 border border-white/10 flex items-center justify-center"><Icon name="bolt" className="w-4 h-4 text-white" /></div>
                  <div className="w-10 h-10 border border-white/10 flex items-center justify-center"><Icon name="plus" className="w-4 h-4 text-white" /></div>
                </div>
              </div>
              
              <div className="mt-auto px-6 pb-8 flex items-center justify-between">
                <span className="text-[10px] font-mono text-gray-500">AUTO</span>
                <div className="w-10 h-2 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNCIgaGVpZ2h0PSI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0wIDRMNCDBMMCAwWCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIi8+PC9zdmc+')] opacity-20"></div>
              </div>
            </div>

            {/* Nodes Area */}
            <div className="flex-1 relative">
              <div className="absolute top-8 left-8 flex gap-4 z-10">
                <div className="flex bg-[#0A0A0A] border border-white/10 rounded-sm overflow-hidden">
                  <button className="px-3 py-1.5 border-r border-white/10 hover:bg-white/5" tabIndex={-1}><Icon name="arrow-uturn-left" className="w-3 h-3 text-gray-400" /></button>
                  <button className="px-3 py-1.5 hover:bg-white/5" tabIndex={-1}><Icon name="arrow-uturn-right" className="w-3 h-3 text-gray-400" /></button>
                </div>
                <div className="bg-[#0A0A0A] border border-white/10 rounded-sm px-4 py-1.5 flex items-center gap-2">
                  <span className="text-[10px] font-mono text-white tracking-widest">AGENT MODE</span>
                  <Icon name="sparkles" className="w-3 h-3 text-white" />
                </div>
                <div className="bg-[#0A0A0A] border border-white/10 rounded-sm px-4 py-1.5 flex items-center gap-2">
                  <span className="text-[10px] font-mono text-white tracking-widest">UNTITLED</span>
                  <Icon name="pencil" className="w-3 h-3 text-gray-500" />
                </div>
              </div>

              {/* Node graph mockup */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none scale-75 md:scale-100">
                <div className="relative">
                  {/* Top Row Nodes */}
                  <div className="flex items-center gap-8 relative z-10">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-[#0A0A0A] border border-white/20 rounded-lg flex items-center justify-center relative">
                        <Icon name="envelope" className="w-5 h-5 text-white" />
                        <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full"></div>
                      </div>
                      <div className="mt-2 text-center">
                        <div className="text-xs font-mono text-white">Email Trigger</div>
                        <div className="text-[10px] text-gray-500 font-mono">(IMAP)</div>
                      </div>
                    </div>
                    
                    <div className="w-12 border-t border-white/30 border-dashed relative">
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-[9px] text-gray-500 font-mono">1 item</div>
                    </div>

                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-[#0A0A0A] border border-white/20 rounded-lg flex items-center justify-center relative">
                        <div className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#0A0A0A] border border-white/30 rounded-full"></div>
                        <Icon name="pencil-square" className="w-5 h-5 text-white" />
                        <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full"></div>
                      </div>
                      <div className="mt-2 text-center">
                        <div className="text-xs font-mono text-white">Edit Fields</div>
                        <div className="text-[10px] text-gray-500 font-mono">Manual</div>
                      </div>
                    </div>

                    <div className="w-12 border-t border-white/30 border-dashed relative">
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-[9px] text-gray-500 font-mono">1 item</div>
                    </div>

                    <div className="flex flex-col items-center">
                      <div className="w-32 h-12 bg-black text-white border border-white rounded-lg flex items-center justify-center relative gap-3 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                        <div className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-black border border-white rounded-full"></div>
                        
                        <div className="w-5 h-5 flex items-center justify-center">
                          <svg viewBox="0 0 24 24" className="w-full h-full text-white" fill="currentColor">
                            <path d="m21.6 7.2-12 1.2 2.4-7.2L2.4 12l10.8-1.2-2.4 8.4z" />
                          </svg>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs font-bold font-sans tracking-tight">AI Agent</span>
                          <span className="text-[8px] font-mono opacity-60">Tools Agent</span>
                        </div>
                        
                        <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-black border border-white rounded-full"></div>
                        <div className="absolute -bottom-1.5 left-6 w-3 h-3 bg-black border border-white rounded-full"></div>
                      </div>
                    </div>

                    <div className="w-12 border-t border-white/30 border-dashed relative">
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-[9px] text-gray-500 font-mono">1 item</div>
                    </div>
                    
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-[#0A0A0A] border border-white/20 rounded-lg flex items-center justify-center relative">
                        <div className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#0A0A0A] border border-white/30 rounded-full"></div>
                        <Icon name="code-bracket" className="w-5 h-5 text-white" />
                        <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full"></div>
                      </div>
                      <div className="mt-2 text-center">
                        <div className="text-xs font-mono text-white">Code</div>
                      </div>
                    </div>

                    <div className="w-12 border-t border-white/30 border-dashed relative">
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-[9px] text-gray-500 font-mono">1 item</div>
                    </div>

                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-[#0A0A0A] border border-white/20 rounded-lg flex items-center justify-center relative">
                        <div className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#0A0A0A] border border-white/30 rounded-full"></div>
                        <Icon name="pencil-square" className="w-5 h-5 text-white" />
                        <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full"></div>
                      </div>
                      <div className="mt-2 text-center">
                        <div className="text-xs font-mono text-white">Edit Fields1</div>
                        <div className="text-[10px] text-gray-500 font-mono">Manual</div>
                      </div>
                    </div>
                  </div>

                  {/* Connection from AI Agent to Telegram */}
                  <div className="absolute top-[48px] left-[260px] w-[85px] h-[60px] border-b border-r border-white/30 border-dashed rounded-br-xl -z-10"></div>
                  <div className="absolute top-[108px] left-[260px] w-[20px] h-[40px] border-b border-l border-white/30 border-dashed rounded-bl-xl -z-10"></div>
                  
                  {/* Bottom Row Nodes */}
                  <div className="flex items-center gap-8 mt-[100px] relative z-10 ml-[280px]">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-[#0A0A0A] border border-white/20 rounded-lg flex items-center justify-center relative">
                        <div className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#0A0A0A] border border-white/30 rounded-full"></div>
                        <Icon name="paper-airplane" className="w-5 h-5 text-white" />
                        <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full"></div>
                      </div>
                      <div className="mt-2 text-center">
                        <div className="text-xs font-mono text-white">Telegram</div>
                        <div className="text-[10px] text-gray-500 font-mono">sendAndWait message</div>
                      </div>
                    </div>

                    <div className="w-8 border-t border-white/30 border-dashed"></div>

                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-[#0A0A0A] border border-white/20 rounded-lg flex items-center justify-center relative">
                        <div className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#0A0A0A] border border-white/30 rounded-full"></div>
                        <Icon name="arrows-right-left" className="w-5 h-5 text-white" />
                        <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full"></div>
                      </div>
                      <div className="mt-2 text-center">
                        <div className="text-xs font-mono text-white">If</div>
                      </div>
                    </div>

                    <div className="w-8 border-t border-white/30 border-dashed"></div>

                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-[#0A0A0A] border border-white/20 rounded-lg flex items-center justify-center relative">
                        <div className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#0A0A0A] border border-white/30 rounded-full"></div>
                        <Icon name="paper-airplane" className="w-5 h-5 text-white" />
                        <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full"></div>
                      </div>
                      <div className="mt-2 text-center">
                        <div className="text-xs font-mono text-white">Send Email</div>
                        <div className="text-[10px] text-gray-500 font-mono">Send</div>
                      </div>
                    </div>

                    <div className="w-8 border-t border-white/30 border-dashed"></div>
                    <div className="w-6 h-6 border border-white/30 rounded-full flex items-center justify-center text-white/50 bg-[#0A0A0A]"><Icon name="plus" className="w-3 h-3" /></div>
                  </div>
                </div>
              </div>
              
              {/* Cursor */}
              <div className="absolute bottom-16 left-32 z-20 flex flex-col items-center">
                <Icon name="cursor-arrow-rays" className="w-6 h-6 text-white transform -rotate-45 drop-shadow-md" />
                <div className="bg-white/20 backdrop-blur text-white text-[10px] px-3 py-1 rounded-full mt-1 border border-white/10">You</div>
              </div>

              {/* AI Prompt Input */}
              <div className="absolute bottom-8 left-8 w-[400px] max-w-[calc(100%-2rem)] z-20">
                <div className="bg-[#111] border border-white/10 rounded-lg p-2 flex items-center gap-3">
                  <div className="bg-white text-black p-1.5 rounded-md">
                    <Icon name="sparkles" className="w-4 h-4" />
                  </div>
                  <input type="text" placeholder="Ask Gumbo AI anything..." className="bg-transparent border-none outline-none text-sm text-white flex-1 font-sans placeholder:text-gray-600" tabIndex={-1} aria-label="Mock AI Prompt Input" readOnly />
                  <div className="flex items-center gap-2 text-gray-500 font-mono text-[10px] pr-2">
                    <div className="flex items-center justify-center w-5 h-5 border border-white/10 rounded">⌘</div>
                    <div className="flex items-center justify-center w-5 h-5 border border-white/10 rounded">K</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Feature grid */}
        <Reveal delay={400}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {workflowFeatures.map((feat, idx) => (
              <article key={idx} className={`p-12 ${idx < 3 ? 'lg:border-r border-white/5' : ''} flex flex-col border-b lg:border-b-0`}>
                <Icon name={feat.icon as any} className="w-8 h-8 text-white mb-6 opacity-80" aria-hidden="true" />
                <h3 className="text-white font-mono text-sm font-bold tracking-tight mb-4 whitespace-pre-line">{feat.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed max-w-[200px]">{feat.desc}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
