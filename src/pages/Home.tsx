import { motion } from 'framer-motion';
import { useState } from 'react';
import logo from '../assets/Logo.svg';
import ContactModal from '../components/ContactModal';
import VisionModal from '../components/VisionModal';
import FAQModal from '../components/FAQModal';
import SEO from '../components/SEO';

interface Domain {
  name: string;
  price: string;
  tier: string;
  link: string;
}

const domains: Domain[] = [
  { name: 'biginterview.ai', price: '$649', tier: 'Exclusive', link: 'https://www.godaddy.com/domainsearch/find?domainToCheck=biginterview.ai' },
  { name: 'biginterview.co', price: '$249', tier: 'Premium+', link: 'https://www.godaddy.com/domainsearch/find?domainToCheck=biginterview.co' },
  { name: 'biginterview.app', price: '$149', tier: 'Premium', link: 'https://www.godaddy.com/domainsearch/find?domainToCheck=biginterview.app' },
  { name: 'biginterview.info', price: '$49', tier: 'Premium', link: 'http://godaddy.com/domainsearch/find?domainToCheck=biginterview.info' },
];

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isVisionOpen, setIsVisionOpen] = useState(false);
  const [isFAQOpen, setIsFAQOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#030303] text-[#EAE7D6] font-sans overflow-x-hidden relative flex flex-col selection:bg-[#EAE7D6] selection:text-black">
      <SEO />
      
      {/* Modals */}
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <VisionModal isOpen={isVisionOpen} onClose={() => setIsVisionOpen(false)} daysLeft={0} />
      <FAQModal 
        isOpen={isFAQOpen} 
        onClose={() => setIsFAQOpen(false)} 
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Luxury Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-gradient-to-b from-white/[0.02] to-transparent blur-[100px] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.015] mix-blend-overlay"></div>
      </div>

      {/* Navbar */}
      <nav className="w-full flex justify-between items-center px-6 lg:px-12 py-10 z-30 relative max-w-[1400px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-10 lg:w-12 mix-blend-difference"
        >
          <img src={logo} alt="Logo" className="w-full h-auto opacity-100" />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.5, duration: 1 }}
          className="flex items-center space-x-3"
        >
          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
          <span className="text-[9px] tracking-[0.4em] uppercase text-[#969385] font-medium">
            Live Portfolio
          </span>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <main className="flex-grow flex flex-col items-center px-4 lg:px-8 w-full max-w-[1000px] mx-auto z-10 py-16 lg:py-24">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-24 lg:mb-32 w-full"
        >
          <h2 className="text-[10px] lg:text-xs tracking-[0.5em] uppercase text-[#6B7280] mb-8 font-semibold">
            The Digital Real Estate
          </h2>
          <h1 className="font-serif text-5xl lg:text-8xl tracking-tight leading-[1.1] text-[#EAE7D6]">
            Premium <span className="text-[#969385] italic font-light">Assets</span>
          </h1>
          <div className="mt-8 w-px h-16 bg-gradient-to-b from-white/20 to-transparent mx-auto"></div>
        </motion.div>

        {/* Domain List - Ledger Layout */}
        <div className="flex flex-col w-full mb-32">
          {/* Table Header */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="hidden md:flex justify-between items-center px-8 pb-4 border-b border-white/10 text-[9px] tracking-[0.3em] uppercase text-[#6B7280]"
          >
            <span className="w-1/2">Asset Name</span>
            <span className="w-1/4 text-center">Classification</span>
            <span className="w-1/4 text-right">Valuation</span>
          </motion.div>

          {/* List */}
          <div className="flex flex-col">
            {domains.map((domain, index) => (
              <DomainRow key={domain.name} domain={domain} index={index} />
            ))}
          </div>
        </div>
      </main>

      {/* Minimal Footer */}
      <footer className="w-full py-12 border-t border-white/[0.05] z-20 mt-auto bg-black/40 backdrop-blur-xl">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[9px] text-[#6B7280] tracking-[0.3em] uppercase">
            © 2026 Acquisition Portal
          </p>
          <div className="flex space-x-10 text-[9px] font-bold tracking-[0.2em] text-[#6B7280] uppercase">
            <button onClick={() => setIsContactOpen(true)} className="hover:text-[#EAE7D6] transition-colors duration-500">Contact</button>
            <button onClick={() => setIsVisionOpen(true)} className="hover:text-[#EAE7D6] transition-colors duration-500">Vision</button>
            <button onClick={() => setIsFAQOpen(true)} className="hover:text-[#EAE7D6] transition-colors duration-500">FAQ</button>
          </div>
        </div>
      </footer>
    </div>
  );
}

function DomainRow({ domain, index }: { domain: Domain; index: number }) {
  const isExclusive = domain.tier === 'Exclusive';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="group block relative"
    >
      <a 
        href={domain.link}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex flex-col md:flex-row items-start md:items-center justify-between p-6 md:p-8 border-b border-white/5 hover:border-white/20 transition-colors duration-500 cursor-pointer"
      >
        {/* Animated Background on Hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

        {/* 1. Asset Name */}
        <div className="w-full md:w-1/2 flex items-center space-x-6 mb-4 md:mb-0 z-10">
          <div className="w-8 flex justify-center">
            {isExclusive ? (
              <span className="w-1.5 h-1.5 bg-[#EAE7D6] rounded-full shadow-[0_0_10px_rgba(234,231,214,0.8)]"></span>
            ) : (
              <span className="w-1 h-1 bg-white/20 rounded-full"></span>
            )}
          </div>
          <h3 className={`font-serif text-2xl lg:text-4xl tracking-tight transition-all duration-500
            ${isExclusive ? 'text-[#EAE7D6] group-hover:translate-x-2' : 'text-[#D1D5DB] group-hover:text-[#EAE7D6] group-hover:translate-x-2'}
          `}>
            {domain.name}
          </h3>
        </div>

        {/* 2. Classification */}
        <div className="w-full md:w-1/4 md:text-center mb-4 md:mb-0 z-10 pl-14 md:pl-0">
          <span className={`inline-block px-3 py-1 text-[9px] tracking-[0.2em] uppercase rounded-sm border transition-colors duration-500
            ${isExclusive 
              ? 'border-[#EAE7D6]/30 text-[#EAE7D6] bg-white/[0.02] group-hover:border-[#EAE7D6]' 
              : 'border-white/10 text-[#969385] group-hover:border-white/30 group-hover:text-[#D1D5DB]'}
          `}>
            {domain.tier}
          </span>
        </div>

        {/* 3. Valuation & Action */}
        <div className="w-full md:w-1/4 flex items-center justify-between md:justify-end z-10 pl-14 md:pl-0">
          <div className="flex flex-col md:items-end mr-6 md:mr-8 transition-transform duration-500 group-hover:-translate-x-2">
            <span className="md:hidden text-[9px] tracking-widest uppercase text-[#6B7280] mb-1">Valuation</span>
            <p className="text-xl lg:text-2xl font-light text-[#EAE7D6] tracking-wide">{domain.price}</p>
          </div>
          
          {/* Hover Arrow Indicator */}
          <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center opacity-50 group-hover:opacity-100 group-hover:border-[#EAE7D6] group-hover:bg-[#EAE7D6] transition-all duration-500">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="14" 
              height="14" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="text-[#EAE7D6] group-hover:text-black transition-colors duration-500 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            >
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </div>
        </div>
      </a>
    </motion.div>
  );
}