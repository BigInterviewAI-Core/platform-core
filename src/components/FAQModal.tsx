import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface FAQModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
}

export default function FAQModal({ isOpen, onClose, onOpenContact }: FAQModalProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "1. What assets are included in this sale?",
      answer: "The sale includes the premium domain 'biginterview.ai', along with the supporting portfolio: 'biginterview.co', 'biginterview.app', and 'biginterview.info'. This bundle ensures complete brand protection and digital territory control."
    },
    {
      question: "2. How does the transfer process work?",
      answer: "We use Afternic (a GoDaddy brand) as our secure escrow partner. Once payment is verified, we unlock the domains and provide you with the authorization codes (EPP codes) to transfer them to your preferred registrar (e.g., GoDaddy, Namecheap, Google Domains)."
    },
    {
      question: "3. Is the transaction secure?",
      answer: "Yes. All transactions are handled through a licensed third-party escrow service. We do not receive funds until you have confirmed full control and ownership of the domains. This guarantees safety for both buyer and seller."
    },
    {
      question: "4. Can I buy just one domain?",
      answer: "Our priority is to sell the complete portfolio to a single entity to maintain brand integrity. However, we are open to discussing individual offers for the premium .ai domain. Please contact us for specific inquiries."
    },
    {
      question: "5. How long does the transfer take?",
      answer: "Typically, transfers are completed within 1 to 5 business days, depending on the receiving registrar. Our team provides 24/7 support to expedite this process and ensure a smooth transition."
    },
    {
      question: "6. Are there any hidden fees?",
      answer: (
        <>
          No. The listed price is the final acquisition cost. Once transferred, you will only be responsible for standard annual renewal fees with your registrar. For further questions, please use our{" "}
          <button 
            onClick={() => {
              onClose();
              onOpenContact();
            }}
            className="text-[#EAE7D6] underline hover:text-white transition-colors cursor-pointer font-medium"
          >
            Contact portal
          </button>.
        </>
      )
    }
  ];

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
                FAQ:<br />
                <span className="text-[#969385] text-xl lg:text-2xl normal-case tracking-normal block mt-2">
                  Acquisition & Transfer Process
                </span>
              </h2>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-8 lg:p-10 scrollbar-thin scrollbar-thumb-[#333] scrollbar-track-transparent">
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-[#333] pb-4 last:border-0 last:pb-0">
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full text-left flex justify-between items-center group py-2"
                    >
                      <h3 className={`text-sm lg:text-base font-medium tracking-wide transition-colors ${expandedIndex === index ? 'text-[#EAE7D6]' : 'text-[#9CA3AF] group-hover:text-[#EAE7D6]'}`}>
                        {faq.question}
                      </h3>
                      <span className={`ml-4 text-[#9CA3AF] transition-transform duration-300 ${expandedIndex === index ? 'rotate-180' : ''}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </span>
                    </button>
                    <AnimatePresence>
                      {expandedIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="pt-2 pb-2 text-sm text-[#D1D5DB] font-light leading-relaxed">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}