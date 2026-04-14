import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col relative overflow-hidden">
      {/* Decorative gradient orb */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] w-[30%] h-[50%] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Navbar */}
      <header className="fixed top-0 w-full border-b border-white/5 bg-zinc-950/50 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-bold text-xl tracking-tight text-white flex items-center gap-2">
            <img src="/logo_ca_embossed.png" alt="Commitapps Logo" className="w-8 h-8 rounded-sm object-cover" />
            COMMIT<span className="text-blue-500">APPS</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <a href="#services" className="hover:text-white transition-colors">Advisory Offerings</a>
            <a href="#about" className="hover:text-white transition-colors">The Architect</a>
          </nav>
          <a href="#contact" className="bg-white text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-zinc-200 transition-colors">
            Hire Me
          </a>
        </div>
      </header>

      <main className="flex-grow pt-32 pb-20 px-6 max-w-7xl mx-auto w-full relative z-10 flex flex-col items-center">
        {/* Hero Section */}
        <section className="text-center max-w-4xl mx-auto mb-32 mt-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-blue-400 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Taking on 2 new clients for Q4
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-8 leading-[1.1]">
            Your Startup's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Fractional CTO</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            I help startups and mid-sized companies design scalable architectures without the $250k/year full-time executive salary. Stop rebuilding your app every two years.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#services" className="w-full sm:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-medium transition-all shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)]">
              View Pricing & Services
            </a>
            <a href="mailto:sivakumar.tukanti@gmail.com?subject=Fractional%20Architecture%20Inquiry" className="w-full sm:w-auto px-8 py-3 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-full font-medium transition-all">
              Email Me Directly
            </a>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full mb-32 scroll-mt-24">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-white/10 pb-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Productized Consulting Offerings</h2>
              <p className="text-zinc-400 max-w-lg">Transparent pricing. High-impact architectural guidance. Zero long-term commitment required unless it makes sense for both of us.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Service 1 */}
            <div className="bg-zinc-900/50 border border-white/5 rounded-2xl p-8 hover:bg-zinc-900 transition-colors group flex flex-col">
              <div className="w-12 h-12 bg-blue-500/10 text-blue-400 rounded-xl flex items-center justify-center mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><line x1="12" y1="22" x2="12" y2="12"></line></svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">The Architecture Audit</h3>
              <div className="text-3xl font-bold text-white mb-4">$1,500 <span className="text-sm text-zinc-500 font-normal">/ flat fee</span></div>
              <p className="text-zinc-400 text-sm mb-6 leading-relaxed flex-grow">
                A weekend deep-dive into your codebase and cloud infrastructure. You receive a comprehensive PDF roadmap detailing exactly what to fix to improve scale and drastically cut your AWS costs.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="text-sm text-zinc-400 flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> Full AWS/Resource cost analysis</li>
                <li className="text-sm text-zinc-400 flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> Security & Performance bottleneck review</li>
                <li className="text-sm text-zinc-400 flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> Written scalability roadmap PDF</li>
              </ul>
              <a href="#contact" className="w-full text-center px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl text-sm font-medium transition-colors">
                Book Audit
              </a>
            </div>

            {/* Service 2 */}
            <div className="relative bg-zinc-900 border border-purple-500/30 rounded-2xl p-8 hover:bg-zinc-800 transition-colors group flex flex-col shadow-[0_0_30px_-15px_rgba(168,85,247,0.3)]">
              <div className="absolute top-0 right-0 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-xl">Most Popular</div>
              <div className="w-12 h-12 bg-purple-500/10 text-purple-400 rounded-xl flex items-center justify-center mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">Fractional CTO Retainer</h3>
              <div className="text-3xl font-bold text-white mb-4">$2,500 <span className="text-sm text-zinc-500 font-normal">/ mo (10 hrs)</span></div>
              <p className="text-zinc-400 text-sm mb-6 leading-relaxed flex-grow">
                I act as your senior technical leader. I review your junior developers' pull requests, handle high-level DevOps orchestration, and join weekly executive strategy calls. High impact, fractional cost.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="text-sm text-zinc-400 flex items-center gap-2"><div className="w-1.5 h-1.5 bg-purple-500 rounded-full" /> Weekly 1-hour strategy calls</li>
                <li className="text-sm text-zinc-400 flex items-center gap-2"><div className="w-1.5 h-1.5 bg-purple-500 rounded-full" /> Architectural design & PR reviews</li>
                <li className="text-sm text-zinc-400 flex items-center gap-2"><div className="w-1.5 h-1.5 bg-purple-500 rounded-full" /> Emergency DevOps guidance</li>
              </ul>
              <a href="#contact" className="w-full text-center px-4 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-xl text-sm font-medium transition-colors">
                Apply for Retainer
              </a>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section id="about" className="w-full mb-32 scroll-mt-24 bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <div className="inline-block px-3 py-1 bg-white/10 text-white rounded-full text-xs font-semibold mb-6">Expertise</div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">You're hiring an industry veteran.</h2>
              <p className="text-zinc-400 mb-6 leading-relaxed">
                Commitapps is spearheaded by Siva Kumar Tukanti, an Engineering Manager and Architect with over 14 years of experience delivering highly-scalable, fault-tolerant solutions for globally recognized enterprises like Seera Group and Emirates Group. I bring big-tech rigor to startup budgets.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="text-3xl font-bold text-white mb-1">14+</div>
                  <div className="text-sm text-zinc-500">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">40%</div>
                  <div className="text-sm text-zinc-500">Avg Release Cycle Reduction</div>
                </div>
              </div>
              <a href="/sivaProfile.html" target="_blank" className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center transition-colors">
                View Full Technical Resume
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </a>
            </div>
            <div className="bg-zinc-900 border border-white/10 p-6 rounded-2xl w-full max-w-sm">
              <h3 className="font-semibold text-white mb-4">Core Technology Stack</h3>
              <div className="flex flex-wrap gap-2">
                {['Java / Spring Boot', 'AWS & Cloud', 'Kubernetes', 'React / Next.js', 'PostgreSQL', 'Microservices', 'Kafka', 'Docker'].map((tech) => (
                  <span key={tech} className="px-3 py-1.5 bg-white/5 border border-white/10 text-zinc-300 text-xs rounded-lg">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact/Intake Section */}
        <section id="contact" className="w-full mb-20 scroll-mt-24">
          <div className="bg-gradient-to-b from-blue-900/20 to-transparent border border-blue-500/20 rounded-3xl p-8 md:p-16 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let's solve your architecture.</h2>
            <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
              If you are a startup needing strategic enterprise guidance, reach out directly. Due to active full-time commitments, I take on a maximum of two concurrent side engagements.
            </p>
            
            <div className="bg-zinc-950 border border-white/10 p-8 rounded-2xl max-w-md mx-auto shadow-2xl">
              <a href="mailto:sivakumar.tukanti@gmail.com?subject=Fractional%20Architecture%20Inquiry%20from%20Commitapps" className="w-full block bg-blue-600 hover:bg-blue-500 text-white px-6 py-4 rounded-xl text-center font-bold transition-all transform hover:scale-105 shadow-[0_0_20px_-5px_rgba(37,99,235,0.4)] mb-4">
                Email Me Directly
              </a>
              <p className="text-sm text-zinc-500">Usually replies within 12 hours.</p>
              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-xs text-zinc-600 font-mono">sivakumar.tukanti@gmail.com</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 py-12 bg-zinc-950 relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-zinc-400">
             <div className="w-4 h-4 bg-zinc-800 rounded-sm inline-block" />
             <span className="text-sm font-medium">© 2026 Commitapps. All rights reserved.</span>
          </div>
          <div className="flex gap-6 text-sm text-zinc-500">
            <a href="https://linkedin.com/in/sivakumartukanti" className="hover:text-zinc-300 transition-colors">LinkedIn</a>
            <a href="/sivaProfile.html" className="hover:text-zinc-300 transition-colors">Resume</a>
            <a href="mailto:sivakumar.tukanti@gmail.com" className="hover:text-zinc-300 transition-colors">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
