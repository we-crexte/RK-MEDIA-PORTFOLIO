export function Footer() {
  return (
    <footer className="py-20 px-10 border-t border-white/5 mt-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
             <div className="w-8 h-8 bg-accent rounded-full" />
             <span className="text-lg font-bold tracking-tighter uppercase">RK MEDIA</span>
          </div>
          <p className="text-white/20 text-xs font-medium uppercase tracking-[0.2em]">
            © 2024 RK MEDIA — All Rights Reserved
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8">
          <a href="https://www.instagram.com/sniper.844?igsh=MXhzdmZvZ2l6aHcxNw%3D%3D&utm_source=qr" target="_blank" rel="noreferrer" className="text-xs uppercase font-bold tracking-widest opacity-40 hover:opacity-100 hover:text-accent transition-all">Instagram</a>
          <a href="https://x.com/roshan_editor53" target="_blank" rel="noreferrer" className="text-xs uppercase font-bold tracking-widest opacity-40 hover:opacity-100 hover:text-accent transition-all">Twitter</a>
          <a href="https://wa.me/916306087590" target="_blank" rel="noreferrer" className="text-xs uppercase font-bold tracking-widest opacity-40 hover:opacity-100 hover:text-accent transition-all">WhatsApp</a>
        </div>
        
        <div className="text-right">
           <div className="text-[10px] uppercase font-bold tracking-[0.3em] text-white/40 mb-2">
             Developed by <span className="text-accent underline underline-offset-4 decoration-accent/30 transition-colors hover:text-white">WE CREATE</span>
           </div>
           <div className="text-xs font-mono opacity-10 uppercase font-sans">127.0.0.1:0024</div>
        </div>
      </div>
      <div className="absolute -bottom-1/2 left-1/2 -translate-x-1/2 w-screen h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent blur-sm" />
    </footer>
  );
}
