import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, BarChart3, Github, Twitter, Linkedin, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary pt-20 pb-10 relative overflow-hidden text-white">
      
      <div className="container relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
          
          {/* CTA / Contact Form */}
          <div className="space-y-8">
             <div>
               <h2 className="text-3xl font-bold mb-4 text-white">Let's build your data story.</h2>
               <p className="text-blue-100 text-lg">Ready to unlock your community's full potential? Reach out to our team today for a tailored demo.</p>
             </div>
             
             <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <input 
                   type="text" 
                   placeholder="Name" 
                   className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white transition-all font-medium text-sm"
                 />
                 <input 
                   type="email" 
                   placeholder="Email Address" 
                   className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white transition-all font-medium text-sm"
                 />
               </div>
               <textarea 
                 rows={4}
                 placeholder="Tell us about your community needs..." 
                 className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white transition-all resize-none font-medium text-sm"
               />
               <Button className="w-full bg-white text-primary hover:bg-blue-50 border-none font-bold shadow-lg">
                 Submit Request
                 <Send size={16} className="ml-2" />
               </Button>
             </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center lg:pl-12 space-y-10">
             
             <div className="group flex items-start gap-4 p-4 rounded-xl hover:bg-white/10 transition-colors border border-transparent hover:border-white/20">
               <div className="bg-white/10 p-3 rounded-lg text-white group-hover:text-blue-200 border border-white/20 transition-all">
                 <Phone size={24} />
               </div>
               <div>
                 <h4 className="font-semibold text-lg text-white">Call Us</h4>
                 <p className="text-blue-200 text-sm font-medium mt-1">Mon-Fri • 8am - 5pm EST</p>
                 <a href="tel:123-456-7890" className="text-white hover:text-blue-200 transition-colors mt-1 block font-bold">123-456-7890</a>
               </div>
             </div>

             <div className="group flex items-start gap-4 p-4 rounded-xl hover:bg-white/10 transition-colors border border-transparent hover:border-white/20">
               <div className="bg-white/10 p-3 rounded-lg text-white group-hover:text-blue-200 border border-white/20 transition-all">
                 <Mail size={24} />
               </div>
               <div>
                 <h4 className="font-semibold text-lg text-white">Email Us</h4>
                 <p className="text-blue-200 text-sm font-medium mt-1">Sales & Support</p>
                 <a href="mailto:wesordonez1@gmail.com" className="text-white hover:text-blue-200 transition-colors mt-1 block font-bold">wesordonez1@gmail.com</a>
               </div>
             </div>

             <div className="group flex items-start gap-4 p-4 rounded-xl hover:bg-white/10 transition-colors border border-transparent hover:border-white/20">
               <div className="bg-white/10 p-3 rounded-lg text-white group-hover:text-blue-200 border border-white/20 transition-all">
                 <MapPin size={24} />
               </div>
               <div>
                 <h4 className="font-semibold text-lg text-white">Visit Us</h4>
                 <p className="text-blue-200 text-sm font-medium mt-1">Global HQ</p>
                 <p className="text-white mt-1">Humboldt Park, Chicago, IL</p>
               </div>
             </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 my-10"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 opacity-90 hover:opacity-100 transition-opacity">
            <div className="bg-white p-1 rounded text-primary">
              <BarChart3 size={16} strokeWidth={3} />
            </div>
            <span className="font-bold text-lg text-white">CommuniData</span>
          </div>

          <p className="text-blue-200 text-sm font-medium">
            &copy; 2024 CommuniData. All rights reserved.
          </p>

          <div className="flex gap-4">
            <a href="#" className="text-blue-200 hover:text-white transition-colors"><Twitter size={20} /></a>
            <a href="#" className="text-blue-200 hover:text-white transition-colors"><Github size={20} /></a>
            <a href="#" className="text-blue-200 hover:text-white transition-colors"><Linkedin size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
