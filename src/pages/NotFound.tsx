import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen h-screen flex flex-col items-center justify-center text-dark-black font-sans relative overflow-hidden bg-[#1a1a1a]">
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] pointer-events-none" />

      {/* Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="z-10 flex flex-col items-center text-center px-4"
      >
        <h1 className="font-serif text-[#EAE7D6] text-8xl lg:text-[10rem] leading-none tracking-tight">
          404
        </h1>
        
        <div className="w-24 h-px bg-[#333] my-8"></div>
        
        <h2 className="text-[#969385] font-sans text-xl lg:text-2xl font-light tracking-wide uppercase mb-4">
          Page Not Found
        </h2>
        
        <p className="text-[#62615B] text-sm lg:text-base font-light max-w-md leading-relaxed mb-10">
          The page you are looking for does not exist or has been moved. 
          Please check the URL or return to the main site.
        </p>

        <Link to="/">
          <button className="bg-[#262626] text-[#EAE7D6] px-8 py-4 text-xs font-medium tracking-[0.15em] uppercase hover:bg-[#333] hover:text-white transition-all border border-[#333] shadow-lg">
            Return Home
          </button>
        </Link>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#EAE7D6] rounded-full blur-[150px] mix-blend-overlay"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#62615B] rounded-full blur-[100px] mix-blend-overlay"></div>
      </div>
    </div>
  );
}
