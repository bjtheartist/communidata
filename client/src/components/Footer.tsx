import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, BarChart3, Github, Twitter, Linkedin, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-white/10 pt-20 pb-10 relative overflow-hidden">
      
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>

      <div className="container relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
          
          {/* CTA / Contact Form */}
          <div className="space-y-8">
             <div>
               <h2 className="text-3xl font-bold mb-4 text-white">Let's build your data story.</h2>
               <p className="text-muted-foreground text-lg">Ready to unlock your community's full potential? Reach out to our team today for a tailored demo.</p>
             </div>
             
             <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <input 
                   type="text" 
                   placeholder="Name" 
                   className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-mono text-sm"
                 />
                 <input 
                   type="email" 
                   placeholder="Email Address" 
                   className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-mono text-sm"
                 />
               </div>
               <textarea 
                 rows={4}
                 placeholder="Tell us about your community needs..." 
                 className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none font-mono text-sm"
               />
               <Button className="w-full bg-primary hover:bg-primary/90 text-white border-none shadow-[0_0_20px_-5px_rgba(56,189,248,0.4)]">
                 Submit Request
                 <Send size={16} className="ml-2" />
               </Button>
             </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center lg:pl-12 space-y-10">
             
             <div className="group flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10">
               <div className="bg-white/5 p-3 rounded-lg text-primary group-hover:text-primary/80 border border-white/10 group-hover:border-primary/30 transition-all">
                 <Phone size={24} />
               </div>
               <div>
                 <h4 className="font-semibold text-lg text-white">Call Us</h4>
                 <p className="text-muted-foreground text-sm font-mono mt-1">Mon-Fri • 8am - 5pm EST</p>
                 <a href="tel:123-456-7890" className="text-primary hover:text-primary/80 transition-colors mt-1 block font-mono">123-456-7890</a>
               </div>
             </div>

             <div className="group flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10">
               <div className="bg-white/5 p-3 rounded-lg text-primary group-hover:text-primary/80 border border-white/10 group-hover:border-primary/30 transition-all">
                 <Mail size={24} />
               </div>
               <div>
                 <h4 className="font-semibold text-lg text-white">Email Us</h4>
                 <p className="text-muted-foreground text-sm font-mono mt-1">Sales & Support</p>
                 <a href="mailto:wesordonez1@gmail.com" className="text-primary hover:text-primary/80 transition-colors mt-1 block font-mono">wesordonez1@gmail.com</a>
               </div>
             </div>

             <div className="group flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10">
               <div className="bg-white/5 p-3 rounded-lg text-primary group-hover:text-primary/80 border border-white/10 group-hover:border-primary/30 transition-all">
                 <MapPin size={24} />
               </div>
               <div>
                 <h4 className="font-semibold text-lg text-white">Visit Us</h4>
                 <p className="text-muted-foreground text-sm font-mono mt-1">Global HQ</p>
                 <p className="text-slate-300 mt-1">Humboldt Park, Chicago, IL</p>
               </div>
             </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-10"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
            <BarChart3 className="text-primary" size={20} />
            <span className="font-bold text-lg text-white font-mono">CommuniData</span>
          </div>

          <p className="text-muted-foreground text-sm font-mono">
            &copy; 2024 CommuniData. All rights reserved.
          </p>

          <div className="flex gap-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter size={20} /></a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Github size={20} /></a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
