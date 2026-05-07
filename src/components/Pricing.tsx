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
    <section id="pricing" className="py-24 px-6 md:px-10 relative">
      <div className="max-w-7xl mx-auto mb-16">
        <span className="text-xs font-black uppercase tracking-[0.6em] text-white/60 border-l-2 border-accent pl-4">/ Pricing</span>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="text-xs font-bold uppercase tracking-[0.4em] text-accent mb-4">Pricing Plans</div>
          <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-none mb-6">
            Invest in <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-purple">Greatness.</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto">Flexible investment plans designed to scale your vision to the next dimension.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-10 glass rounded-[2.5rem] relative group border-white/5 flex flex-col transition-all duration-500 ${
                selectedPlan?.name === plan.name 
                  ? 'ring-2 ring-accent bg-accent/5' 
                  : plan.popular 
                    ? 'border-accent/40 lg:scale-105 z-10' 
                    : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-[10px] font-bold uppercase tracking-widest rounded-full">
                  Most Popular
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-2xl font-bold uppercase mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold mb-4">{plan.price}</div>
                <p className="text-xs text-white/40 uppercase tracking-widest">{plan.desc}</p>
              </div>
              <div className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, j) => (
                  <div key={j} className="flex items-center gap-3 text-sm text-white/70">
                    <Check size={16} className="text-accent" />
                    {feature}
                  </div>
                ))}
              </div>
              <button 
                onClick={() => handleSelectPlan(plan)}
                className={`w-full py-4 text-center rounded-2xl font-bold uppercase tracking-widest text-xs transition-all ${
                  selectedPlan?.name === plan.name
                    ? 'bg-accent text-white'
                    : plan.popular 
                      ? 'bg-white text-black hover:bg-accent hover:text-white' 
                      : 'glass hover:bg-white hover:text-black'
                }`}
              >
                {selectedPlan?.name === plan.name ? 'Selected' : 'Select Plan'}
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
              className="overflow-hidden mb-12"
            >
              <div className="p-8 lg:p-20 glass rounded-[2rem] lg:rounded-[3.5rem] border border-accent/30 relative">
                <button 
                  onClick={() => setSelectedPlan(null)}
                  className="absolute top-6 right-6 lg:top-10 lg:right-10 p-3 lg:p-4 rounded-full glass hover:bg-white/10 transition-colors"
                >
                  <X size={18} />
                </button>

                <div className="grid lg:grid-cols-2 gap-10 lg:gap-20">
                  <div>
                    <div className="px-4 py-1 bg-accent/20 border border-accent/30 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 inline-block text-accent">
                      Step 2: Project Details
                    </div>
                    <h3 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-6 leading-none">
                      Fine-tuning your <br />
                      <span className="text-accent">{selectedPlan.name}</span>
                    </h3>
                    <p className="text-white/40 mb-10 max-w-md uppercase tracking-widest text-[10px] font-bold">
                      Please provide the specific details of your project below so I can deliver the best possible result.
                    </p>

                    <div className="space-y-6">
                      <div className="p-6 glass rounded-2xl border-white/5 space-y-4">
                        <div className="text-xs font-bold uppercase tracking-widest text-accent flex items-center gap-2">
                          <Zap size={14} /> Plan Specifications
                        </div>
                        <ul className="space-y-2">
                          {selectedPlan.features.map((f, i) => (
                            <li key={i} className="text-[10px] uppercase tracking-widest text-white/60 flex items-center gap-2">
                              <div className="w-1 h-1 bg-accent rounded-full" /> {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <form className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest ml-4 text-white/40">Project Name</label>
                      <input 
                        type="text" 
                        placeholder="e.g. Summer Automotive Reel"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 focus:border-accent outline-none transition-colors font-bold tracking-tight"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest ml-4 text-white/40">Footage Link (Google Drive / DropBox)</label>
                      <input 
                        type="url" 
                        placeholder="https://..."
                        className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 focus:border-accent outline-none transition-colors font-bold tracking-tight"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest ml-4 text-white/40">Desired Mood / Vibe</label>
                      <select className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 focus:border-accent outline-none transition-colors font-bold tracking-tight appearance-none">
                        <option className="bg-black">High Octane / Energetic</option>
                        <option className="bg-black">Cinematic / Emotional</option>
                        <option className="bg-black">Clean / Minimalist</option>
                        <option className="bg-black">Gritty / Raw</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest ml-4 text-white/40">Additional Instructions</label>
                      <textarea 
                        rows={4}
                        placeholder="Any specific transitions, music preferences, or references..."
                        className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 focus:border-accent outline-none transition-colors font-bold tracking-tight resize-none"
                      />
                    </div>

                    <button 
                      type="button"
                      onClick={() => window.open('https://wa.me/916306087590', '_blank')}
                      className="w-full py-6 bg-accent text-white font-bold uppercase tracking-[0.2em] rounded-2xl hover:bg-white hover:text-black transition-all flex items-center justify-center gap-4 group"
                    >
                      Confirm & Send Details <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
          className="p-10 lg:p-16 glass rounded-[3rem] border border-accent/20 flex flex-col lg:flex-row items-center justify-between gap-10"
        >
          <div className="max-w-xl text-center lg:text-left">
            <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter mb-4">Need something <span className="text-accent">Custom?</span></h3>
            <p className="text-white/40 leading-relaxed">
              We specialize in custom enterprise solutions, long-term partnerships, and specialized visual effects. Let's discuss your unique project scope.
            </p>
          </div>
          <a 
            href="#contact" 
            className="flex items-center gap-4 px-10 py-6 bg-accent text-white font-bold uppercase tracking-widest rounded-full hover:bg-white hover:text-black transition-all group shrink-0"
          >
            Get a Quote <MessageCircle size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
