import { motion } from 'framer-motion';
import { Mail, Instagram, MessageSquare, Send } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6 md:px-10 relative">
      <div className="max-w-7xl mx-auto mb-10 sm:mb-16">
        <span className="section-label">/ Contact</span>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-20">
          <div>
            <div className="section-subheading">Let's Connect</div>
            <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter leading-[0.85] mb-6 sm:mb-10">
              Ready to <br />
              <span className="text-accent glow-text">Level Up?</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/40 font-light leading-relaxed mb-8 sm:mb-12">
              Whether you're a high-octane automotive brand or a digital creator pushing limits, let's build something unforgettable.
            </p>
            
            <div className="flex flex-col gap-4 sm:gap-6">
              <ContactLink icon={<Mail />} label="Email" value="roshan@rkmedia.studio" href="mailto:roshan@rkmedia.studio" />
              <ContactLink icon={<Instagram />} label="Instagram" value="@sniper.844" href="https://www.instagram.com/sniper.844?igsh=MXhzdmZvZ2l6aHcxNw%3D%3D&utm_source=qr" />
              <ContactLink icon={<MessageSquare />} label="WhatsApp" value="+91 63060 87590" href="https://wa.me/916306087590" />
            </div>
          </div>

          <div className="p-5 sm:p-8 md:p-10 glass rounded-2xl sm:rounded-[2rem] md:rounded-[2.5rem] border-white/5 relative">
            <form className="flex flex-col gap-6 sm:gap-8" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-1.5 sm:gap-2">
                <label className="text-[9px] sm:text-[10px] uppercase font-bold tracking-widest opacity-40 ml-1">Your Name</label>
                <input 
                  type="text" 
                  className="bg-transparent border-b border-white/10 pb-3 sm:pb-4 focus:border-accent outline-none transition-colors text-base sm:text-lg"
                  placeholder="John Doe"
                />
              </div>
              <div className="flex flex-col gap-1.5 sm:gap-2">
                <label className="text-[9px] sm:text-[10px] uppercase font-bold tracking-widest opacity-40 ml-1">Your Email</label>
                <input 
                  type="email" 
                  className="bg-transparent border-b border-white/10 pb-3 sm:pb-4 focus:border-accent outline-none transition-colors text-base sm:text-lg"
                  placeholder="john@example.com"
                />
              </div>
              <div className="flex flex-col gap-1.5 sm:gap-2">
                <label className="text-[9px] sm:text-[10px] uppercase font-bold tracking-widest opacity-40 ml-1">Project Vision</label>
                <textarea 
                  className="bg-transparent border-b border-white/10 pb-3 sm:pb-4 focus:border-accent outline-none transition-colors text-base sm:text-lg resize-none h-24 sm:h-32"
                  placeholder="Tell me about your amazing project..."
                />
              </div>
              
              <button 
                type="button"
                onClick={() => window.open('https://wa.me/916306087590', '_blank')}
                className="w-full py-4 sm:py-6 bg-accent text-white font-bold uppercase tracking-widest text-xs sm:text-sm rounded-2xl sm:rounded-3xl hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2.5 sm:gap-3 active:scale-[0.97]"
              >
                Send Enquiry <Send size={16} className="sm:w-[18px] sm:h-[18px]" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactLink({ icon, label, value, href }: { icon: any, label: string, value: string, href: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 sm:gap-6 group">
      <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl glass flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all flex-shrink-0 [&>svg]:w-4 [&>svg]:h-4 sm:[&>svg]:w-5 sm:[&>svg]:h-5">
        {icon}
      </div>
      <div className="min-w-0">
        <div className="text-[9px] sm:text-[10px] uppercase font-bold tracking-widest opacity-30 mb-0.5 sm:mb-1">{label}</div>
        <div className="text-sm sm:text-base md:text-xl font-medium tracking-tight group-hover:text-accent transition-colors truncate">{value}</div>
      </div>
    </a>
  );
}
