import { motion, AnimatePresence } from 'framer-motion';

interface VisionModalProps {
  isOpen: boolean;
  onClose: () => void;
  daysLeft: number;
}

export default function VisionModal({ isOpen, onClose }: VisionModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 m-auto z-50 w-full max-w-[800px] h-[90vh] bg-[#1a1a1a] border border-[#333] shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header - Fixed */}
            <div className="flex-none p-8 lg:p-10 border-b border-[#333] relative bg-[#1a1a1a] z-10">
              <button 
                onClick={onClose}
                className="absolute top-6 right-6 text-[#6B7280] hover:text-[#EAE7D6] transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>

              <h2 className="font-serif text-[#EAE7D6] text-3xl lg:text-4xl leading-tight uppercase tracking-tight">
                The Vision:<br />
                <span className="text-[#969385] text-xl lg:text-2xl normal-case tracking-normal block mt-2">
                  Defining the Future of Recruitment & Media
                </span>
              </h2>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-8 lg:p-10 space-y-12 text-[#D1D5DB] font-light leading-relaxed scrollbar-thin scrollbar-thumb-[#333] scrollbar-track-transparent">
              
              {/* Intro */}
              <p className="text-sm lg:text-base max-w-2xl">
                "Big Interview" is not just a name; it is a category-defining brand. In an era where AI is revolutionizing recruitment, media, and professional development, owning the definitive digital assets for "Big Interview" positions you as the instant leader in this multi-billion dollar industry.
              </p>

              {/* Section I */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <span className="text-[#EAE7D6] font-serif text-xl">I.</span>
                  <h3 className="text-[#EAE7D6] text-lg font-medium tracking-wide uppercase">Brand Authority & SEO Dominance</h3>
                </div>
                <div className="w-full h-px bg-gradient-to-r from-[#969385]/30 to-transparent"></div>
                <p className="text-sm">
                  The term "Big Interview" carries immense organic weight. It is the natural search query for millions of job seekers, journalists, and media professionals.
                </p>
                <ul className="space-y-4 pl-4 border-l border-[#333]">
                  <li>
                    <strong className="text-[#EAE7D6] block text-xs uppercase tracking-wider mb-1">Instant Credibility</strong>
                    <span className="text-sm text-[#9CA3AF]">A premium exact-match domain establishes immediate trust and authority.</span>
                  </li>
                  <li>
                    <strong className="text-[#EAE7D6] block text-xs uppercase tracking-wider mb-1">Global Recognition</strong>
                    <span className="text-sm text-[#9CA3AF]">A brand name that is easy to remember, spell, and market across borders.</span>
                  </li>
                </ul>
              </div>

              {/* Section II */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <span className="text-[#EAE7D6] font-serif text-xl">II.</span>
                  <h3 className="text-[#EAE7D6] text-lg font-medium tracking-wide uppercase">The AI Revolution</h3>
                </div>
                <div className="w-full h-px bg-gradient-to-r from-[#969385]/30 to-transparent"></div>
                <p className="text-sm">
                  With the .ai TLD, you are signalling a forward-thinking, tech-centric approach. This is the gold standard for Artificial Intelligence companies.
                </p>
                <ul className="space-y-4 pl-4 border-l border-[#333]">
                  <li>
                    <strong className="text-[#EAE7D6] block text-xs uppercase tracking-wider mb-1">Tech-Native Identity</strong>
                    <span className="text-sm text-[#9CA3AF]">Perfect for AI-powered interview coaching, automated recruitment platforms, or media intelligence.</span>
                  </li>
                  <li>
                    <strong className="text-[#EAE7D6] block text-xs uppercase tracking-wider mb-1">Future-Proof Investment</strong>
                    <span className="text-sm text-[#9CA3AF]">As AI integration deepens, the value of premium .ai domains continues to skyrocket.</span>
                  </li>
                </ul>
              </div>

              {/* Section III */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <span className="text-[#EAE7D6] font-serif text-xl">III.</span>
                  <h3 className="text-[#EAE7D6] text-lg font-medium tracking-wide uppercase">Complete Digital Ecosystem</h3>
                </div>
                <div className="w-full h-px bg-gradient-to-r from-[#969385]/30 to-transparent"></div>
                <p className="text-sm">
                  We are offering a comprehensive suite of assets to secure your digital territory from all angles:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-[#151515] p-4 border border-[#222]">
                    <strong className="text-[#EAE7D6] block text-xs uppercase tracking-wider mb-1">biginterview.ai</strong>
                    <span className="text-xs text-[#9CA3AF]">The Flagship. For the AI-driven future.</span>
                  </div>
                  <div className="bg-[#151515] p-4 border border-[#222]">
                    <strong className="text-[#EAE7D6] block text-xs uppercase tracking-wider mb-1">biginterview.co</strong>
                    <span className="text-xs text-[#9CA3AF]">The Corporate Standard. For global business operations.</span>
                  </div>
                  <div className="bg-[#151515] p-4 border border-[#222]">
                    <strong className="text-[#EAE7D6] block text-xs uppercase tracking-wider mb-1">biginterview.app</strong>
                    <span className="text-xs text-[#9CA3AF]">The Application. Perfect for mobile or web apps.</span>
                  </div>
                  <div className="bg-[#151515] p-4 border border-[#222]">
                    <strong className="text-[#EAE7D6] block text-xs uppercase tracking-wider mb-1">biginterview.info</strong>
                    <span className="text-xs text-[#9CA3AF]">The Information Hub. For resources and guides.</span>
                  </div>
                </div>
              </div>

              {/* Section IV */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <span className="text-[#EAE7D6] font-serif text-xl">IV.</span>
                  <h3 className="text-[#EAE7D6] text-lg font-medium tracking-wide uppercase">Secure Acquisition</h3>
                </div>
                <div className="w-full h-px bg-gradient-to-r from-[#969385]/30 to-transparent"></div>
                <p className="text-sm">
                  This acquisition is designed for serious investors and enterprises.
                </p>
                <ul className="space-y-4 pl-4 border-l border-[#333]">
                  <li>
                    <strong className="text-[#EAE7D6] block text-xs uppercase tracking-wider mb-1">Escrow Protection</strong>
                    <span className="text-sm text-[#9CA3AF]">All funds are held securely until domain control is fully transferred.</span>
                  </li>
                  <li>
                    <strong className="text-[#EAE7D6] block text-xs uppercase tracking-wider mb-1">Seamless Transfer</strong>
                    <span className="text-sm text-[#9CA3AF]">Assisted migration to your registrar of choice via Afternic.</span>
                  </li>
                </ul>
              </div>

              {/* Footer Note */}
              <div className="pt-8 border-t border-[#333] text-center">
                <p className="text-xs text-[#6B7280]">
                  To discuss acquisition, please contact us at <a href="mailto:sales@biginterview.ai" className="text-[#EAE7D6] hover:underline">sales@biginterview.ai</a>
                </p>
              </div>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}