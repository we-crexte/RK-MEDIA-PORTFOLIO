import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Zap, MessageCircle, Send, ArrowRight, X } from 'lucide-react';

const plans = [
  {
    name: 'Starter Vibe',
    price: '₹5,999',
    desc: 'Perfect for reels and quick edits.',
    features: ['1 Short-form Video', 'Advanced Color Grading', 'Motion Text', '2 Revision rounds', '48h Delivery'],
    accent: 'blue'
  },
  {
    name: 'Pro Narrative',
    price: '₹14,999',
    desc: 'The best value for professional creators.',
    features: ['3 Short-form OR 1 YouTube Video', 'Sound Design & Mixing', 'Custom Transitions', 'Unlimited Revisions', 'Priority Support'],
    accent: 'purple',
    popular: true
  },
  {
    name: 'Cinematic Story',
    price: '₹29,999',
    desc: 'High-end production for brands.',
    features: ['High-concept Trailer/Ad', 'SFX & VFX Essentials', 'Commercial Licensing', 'Raw Footage Storage', 'Dedicated Creative Lead'],
    accent: 'pink'
  }
];

export function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState<typeof plans[0] | null>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const handleSelectPlan = (plan: typeof plans[0]) => {
    setSelectedPlan(plan);
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  return (
    <section id="pricing" className="py-16 sm:py-24 px-4 sm:px-6 md:px-10 relative">
      <div className="max-w-7xl mx-auto mb-10 sm:mb-16">
        <span className="section-label">/ Pricing</span>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-20">
          <div className="section-subheading">Pricing Plans</div>
          <h2 className="section-heading mb-4 sm:mb-6">
            Invest in <span className="text-gradient">Greatness.</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto text-sm sm:text-base px-2">Flexible investment plans designed to scale your vision to the next dimension.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-6 sm:p-8 md:p-10 glass rounded-2xl sm:rounded-[2.5rem] relative group border-white/5 flex flex-col transition-all duration-500 ${
                selectedPlan?.name === plan.name 
                  ? 'ring-2 ring-accent bg-accent/5' 
                  : plan.popular 
                    ? 'border-accent/40 lg:scale-105 z-10' 
                    : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 px-3 sm:px-4 py-1 bg-accent text-[8px] sm:text-[10px] font-bold uppercase tracking-widest rounded-full whitespace-nowrap">
                  Most Popular
                </div>
              )}
              <div className="mb-6 sm:mb-8">
                <h3 className="text-lg sm:text-2xl font-bold uppercase mb-2">{plan.name}</h3>
                <div className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">{plan.price}</div>
                <p className="text-[10px] sm:text-xs text-white/40 uppercase tracking-widest">{plan.desc}</p>
              </div>
              <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-10 flex-grow">
                {plan.features.map((feature, j) => (
                  <div key={j} className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-white/70">
                    <Check size={14} className="text-accent mt-0.5 flex-shrink-0 sm:w-4 sm:h-4" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <button 
                onClick={() => handleSelectPlan(plan)}
                className={`w-full py-3.5 sm:py-4 text-center rounded-xl sm:rounded-2xl font-bold uppercase tracking-widest text-[10px] sm:text-xs transition-all active:scale-[0.97] ${
                  selectedPlan?.name === plan.name
                    ? 'bg-accent text-white'
                    : plan.popular 
                      ? 'bg-white text-black hover:bg-accent hover:text-white' 
                      : 'glass hover:bg-white hover:text-black'
                }`}
              >
                {selectedPlan?.name === plan.name ? 'Selected ✓' : 'Select Plan'}
              </button>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedPlan && (
            <motion.div
              ref={formRef}
              initial={{ opacity: 0, y: 50, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: -50, height: 0 }}
              className="overflow-hidden mb-8 sm:mb-12"
            >
              <div className="p-6 sm:p-8 lg:p-20 glass rounded-2xl sm:rounded-[2rem] lg:rounded-[3.5rem] border border-accent/30 relative">
                <button 
                  onClick={() => setSelectedPlan(null)}
                  className="absolute top-4 right-4 sm:top-6 sm:right-6 lg:top-10 lg:right-10 p-2.5 sm:p-3 lg:p-4 rounded-full glass hover:bg-white/10 transition-colors active:scale-90"
                  aria-label="Close form"
                >
                  <X size={16} className="sm:w-[18px] sm:h-[18px]" />
                </button>

                <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-20">
                  <div>
                    <div className="px-3 py-1 bg-accent/20 border border-accent/30 rounded-full text-[9px] sm:text-[10px] font-bold uppercase tracking-widest mb-4 sm:mb-6 inline-block text-accent">
                      Step 2: Project Details
                    </div>
                    <h3 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tighter mb-4 sm:mb-6 leading-none">
                      Fine-tuning your <br className="hidden sm:block" />
                      <span className="text-accent">{selectedPlan.name}</span>
                    </h3>
                    <p className="text-white/40 mb-6 sm:mb-10 max-w-md uppercase tracking-widest text-[9px] sm:text-[10px] font-bold">
                      Please provide the specific details of your project below so I can deliver the best possible result.
                    </p>

                    <div className="space-y-4 sm:space-y-6">
                      <div className="p-4 sm:p-6 glass rounded-xl sm:rounded-2xl border-white/5 space-y-3 sm:space-y-4">
                        <div className="text-[9px] sm:text-xs font-bold uppercase tracking-widest text-accent flex items-center gap-2">
                          <Zap size={12} className="sm:w-3.5 sm:h-3.5" /> Plan Specifications
                        </div>
                        <ul className="space-y-2">
                          {selectedPlan.features.map((f, i) => (
                            <li key={i} className="text-[9px] sm:text-[10px] uppercase tracking-widest text-white/60 flex items-center gap-2">
                              <div className="w-1 h-1 bg-accent rounded-full flex-shrink-0" /> {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <form className="space-y-4 sm:space-y-6">
                    <div className="space-y-1.5 sm:space-y-2">
                      <label className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest ml-3 sm:ml-4 text-white/40">Project Name</label>
                      <input 
                        type="text" 
                        placeholder="e.g. Summer Automotive Reel"
                        className="w-full bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 focus:border-accent outline-none transition-colors font-bold tracking-tight text-sm sm:text-base"
                      />
                    </div>
                    
                    <div className="space-y-1.5 sm:space-y-2">
                      <label className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest ml-3 sm:ml-4 text-white/40">Footage Link (Google Drive / DropBox)</label>
                      <input 
                        type="url" 
                        placeholder="https://..."
                        className="w-full bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 focus:border-accent outline-none transition-colors font-bold tracking-tight text-sm sm:text-base"
                      />
                    </div>

                    <div className="space-y-1.5 sm:space-y-2">
                      <label className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest ml-3 sm:ml-4 text-white/40">Desired Mood / Vibe</label>
                      <select className="w-full bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 focus:border-accent outline-none transition-colors font-bold tracking-tight appearance-none text-sm sm:text-base">
                        <option className="bg-black">High Octane / Energetic</option>
                        <option className="bg-black">Cinematic / Emotional</option>
                        <option className="bg-black">Clean / Minimalist</option>
                        <option className="bg-black">Gritty / Raw</option>
                      </select>
                    </div>

                    <div className="space-y-1.5 sm:space-y-2">
                      <label className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest ml-3 sm:ml-4 text-white/40">Additional Instructions</label>
                      <textarea 
                        rows={3}
                        placeholder="Any specific transitions, music preferences, or references..."
                        className="w-full bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 focus:border-accent outline-none transition-colors font-bold tracking-tight resize-none text-sm sm:text-base"
                      />
                    </div>

                    <button 
                      type="button"
                      onClick={() => window.open('https://wa.me/916306087590', '_blank')}
                      className="w-full py-4 sm:py-6 bg-accent text-white font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-xs sm:text-sm rounded-xl sm:rounded-2xl hover:bg-white hover:text-black transition-all flex items-center justify-center gap-3 sm:gap-4 group active:scale-[0.97]"
                    >
                      Confirm & Send <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform sm:w-[18px] sm:h-[18px]" />
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Customizable Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-6 sm:p-10 lg:p-16 glass rounded-2xl sm:rounded-[3rem] border border-accent/20 flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-10"
        >
          <div className="max-w-xl text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold uppercase tracking-tighter mb-3 sm:mb-4">Need something <span className="text-accent">Custom?</span></h3>
            <p className="text-white/40 leading-relaxed text-sm sm:text-base">
              We specialize in custom enterprise solutions, long-term partnerships, and specialized visual effects. Let's discuss your unique project scope.
            </p>
          </div>
          <a 
            href="#contact" 
            className="w-full sm:w-auto flex items-center justify-center gap-3 sm:gap-4 px-8 sm:px-10 py-4 sm:py-6 bg-accent text-white font-bold uppercase tracking-widest text-xs sm:text-sm rounded-full hover:bg-white hover:text-black transition-all group shrink-0 active:scale-95"
          >
            Get a Quote <MessageCircle size={18} className="group-hover:translate-x-1 transition-transform sm:w-5 sm:h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
