import { motion } from 'framer-motion';
import { Mail, Instagram, MessageSquare, Send } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 px-10 relative">
      <div className="max-w-7xl mx-auto mb-16">
        <span className="text-xs font-black uppercase tracking-[0.6em] text-white/60 border-l-2 border-accent pl-4">/ Contact</span>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.4em] text-accent mb-6">Let's Connect</div>
            <h2 className="text-6xl md:text-8xl font-bold uppercase tracking-tighter leading-[0.85] mb-10">
              Ready to <br />
              <span className="text-accent glow-text">Level Up?</span>
            </h2>
            <p className="text-xl text-white/40 font-light leading-relaxed mb-12">
              Whether you're a high-octane automotive brand or a digital creator pushing limits, let's build something unforgettable.
            </p>
            
            <div className="flex flex-col gap-6">
              <ContactLink icon={<Mail />} label="Email" value="roshan@rkmedia.studio" href="mailto:roshan@rkmedia.studio" />
              <ContactLink icon={<Instagram />} label="Instagram" value="@sniper.844" href="https://www.instagram.com/sniper.844?igsh=MXhzdmZvZ2l6aHcxNw%3D%3D&utm_source=qr" />
              <ContactLink icon={<MessageSquare />} label="WhatsApp" value="+91 63060 87590" href="https://wa.me/916306087590" />
            </div>
          </div>

          <div className="p-10 glass rounded-[2.5rem] border-white/5 relative">
            <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase font-bold tracking-widest opacity-40">Your Name</label>
                <input 
                  type="text" 
                  className="bg-transparent border-b border-white/10 pb-4 focus:border-accent outline-none transition-colors text-lg"
                  placeholder="John Doe"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase font-bold tracking-widest opacity-40">Your Email</label>
                <input 
                  type="email" 
                  className="bg-transparent border-b border-white/10 pb-4 focus:border-accent outline-none transition-colors text-lg"
                  placeholder="john@example.com"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase font-bold tracking-widest opacity-40">Project Vision</label>
                <textarea 
                  className="bg-transparent border-b border-white/10 pb-4 focus:border-accent outline-none transition-colors text-lg resize-none h-32"
                  placeholder="Tell me about your amazing project..."
                />
              </div>
              
              <button 
                type="button"
                onClick={() => window.open('https://wa.me/916306087590', '_blank')}
                className="w-full py-6 bg-accent text-white font-bold uppercase tracking-widest rounded-3xl hover:bg-white hover:text-black transition-all flex items-center justify-center gap-3"
              >
                Send Enquiry <Send size={18} />
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
    <a href={href} className="flex items-center gap-6 group">
      <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all">
        {icon}
      </div>
      <div>
        <div className="text-[10px] uppercase font-bold tracking-widest opacity-30 mb-1">{label}</div>
        <div className="text-xl font-medium tracking-tight group-hover:text-accent transition-colors">{value}</div>
      </div>
    </a>
  );
}
