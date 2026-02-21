import { motion, AnimatePresence } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';
import { useState, useEffect } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [state, handleSubmit] = useForm("xaqdyply");
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
    // Honeypot field - should remain empty
    role_title: '' 
  });

  // Handle successful submission
  useEffect(() => {
    if (state.succeeded) {
      setTimeout(() => {
        setFormData({ fullName: '', email: '', subject: '', message: '', role_title: '' });
        onClose();
      }, 3000);
    }
  }, [state.succeeded, onClose]);

  const subjects = [
    "Business Inquiry",
    "Strategic Partnerships",
    "Media & Press",
    "Technical Support",
    "General Inquiry"
  ];

  const handleCustomSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Honeypot check
    if (formData.role_title) {
      // Silently fail or log bot attempt
      console.log("Bot detected");
      onClose();
      return;
    }
    
    handleSubmit(e);
  };

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
            className="fixed inset-0 m-auto z-50 w-full max-w-[500px] h-fit max-h-[90vh] overflow-y-auto bg-[#1a1a1a] border border-[#333] shadow-2xl p-8 lg:p-10 rounded-none flex flex-col"
          >
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 text-[#6B7280] hover:text-[#EAE7D6] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {/* Header */}
            <div className="mb-8">
              <h2 className="font-serif text-[#EAE7D6] text-3xl mb-2">Contact Us</h2>
              <p className="text-[#9CA3AF] text-xs font-light tracking-wide">
                We'd love to hear from you. Please fill out the form below.
              </p>
            </div>

            {/* Notification */}
            {state.succeeded && (
              <div className="mb-6 p-3 text-xs font-medium tracking-wide flex items-center space-x-2 bg-green-900/20 text-green-400 border border-green-900/50">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                <span>Thanks for reaching out! We'll get back to you soon.</span>
              </div>
            )}
            
            {state.errors && (
               <div className="mb-6 p-3 text-xs font-medium tracking-wide flex items-center space-x-2 bg-red-900/20 text-red-400 border border-red-900/50">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                <span>Please fix the errors below.</span>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleCustomSubmit} className="space-y-6">
              
              {/* Honeypot Field (Hidden) */}
              <div className="absolute opacity-0 -z-10 w-0 h-0 overflow-hidden">
                <input
                  type="text"
                  name="role_title"
                  value={formData.role_title}
                  onChange={(e) => setFormData({ ...formData, role_title: e.target.value })}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              {/* Full Name */}
              <div className="space-y-1">
                <label htmlFor="fullName" className="text-[10px] uppercase tracking-widest text-[#6B7280] font-bold">Full Name</label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full bg-transparent border-b border-[#333] py-2 text-[#EAE7D6] text-sm focus:border-[#EAE7D6] focus:outline-none transition-colors placeholder-[#444] font-light"
                  placeholder="John Doe"
                  required
                />
                <ValidationError prefix="Name" field="fullName" errors={state.errors} className="text-red-500 text-[10px] mt-1" />
              </div>

              {/* Email */}
              <div className="space-y-1">
                <label htmlFor="email" className="text-[10px] uppercase tracking-widest text-[#6B7280] font-bold">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-transparent border-b border-[#333] py-2 text-[#EAE7D6] text-sm focus:border-[#EAE7D6] focus:outline-none transition-colors placeholder-[#444] font-light"
                  placeholder="Professional Email"
                  required
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-[10px] mt-1" />
              </div>

              {/* Subject */}
              <div className="space-y-1">
                <label htmlFor="subject" className="text-[10px] uppercase tracking-widest text-[#6B7280] font-bold">Subject</label>
                <div className="relative">
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-transparent border-b border-[#333] py-2 text-[#EAE7D6] text-sm focus:border-[#EAE7D6] focus:outline-none transition-colors appearance-none font-light cursor-pointer"
                    required
                  >
                    <option value="" disabled className="text-[#444] bg-[#1a1a1a]">Select a subject</option>
                    {subjects.map((subject) => (
                      <option key={subject} value={subject} className="bg-[#1a1a1a] text-[#EAE7D6]">
                        {subject}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-[#6B7280]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>
                 <ValidationError prefix="Subject" field="subject" errors={state.errors} className="text-red-500 text-[10px] mt-1" />
              </div>

              {/* Message */}
              <div className="space-y-1">
                <label htmlFor="message" className="text-[10px] uppercase tracking-widest text-[#6B7280] font-bold">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full bg-transparent border-b border-[#333] py-2 text-[#EAE7D6] text-sm focus:border-[#EAE7D6] focus:outline-none transition-colors placeholder-[#444] font-light resize-none"
                  placeholder="Your message here..."
                  required
                />
                 <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-[10px] mt-1" />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={state.submitting}
                className="w-full bg-[#EAE7D6] text-[#1a1a1a] py-3 text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {state.submitting ? 'Sending...' : 'Send Message'}
              </button>

              {/* Disclaimer */}
              <p className="text-[10px] text-[#4B5563] leading-relaxed font-light mt-4 pt-4 border-t border-[#222]">
                Big Interview AI is currently in Phase 3 of its development roadmap. We are open to strategic partnerships and professional inquiries as we finalize our AI-driven media architecture. Please allow 24-48 hours for our team to review your message.
              </p>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}