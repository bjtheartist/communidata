import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-white min-h-[calc(100vh-80px)] flex items-center">
      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Content Side */}
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left relative z-20">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary leading-tight"
            >
              Empower Your <br/>
              <span className="relative inline-block">
                Communities
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-blue-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span> <br/>
              with Data
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-base md:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium"
            >
              Making economic data accessible and actionable for every community has never been easier. Discover insights into new businesses wealth distribution, and more to unlock your community's full potential.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="flex flex-row gap-4 justify-center lg:justify-start pt-4"
            >
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 font-bold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                Get started now!
              </Button>
              <Button size="lg" variant="outline" className="border-slate-300 text-slate-600 hover:bg-slate-50 rounded-full px-8 font-bold hover:-translate-y-1 transition-transform">
                Log in!
              </Button>
            </motion.div>
          </div>

          {/* Visual Side - Animated Isometric City */}
          <div className="lg:w-1/2 w-full relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 50 }}
              className="relative w-full aspect-square max-w-[650px] mx-auto lg:-mr-20"
            >
              {/* Main City Image */}
              <img 
                src="/images/isometric-city.png" 
                alt="Isometric city illustration showing community growth" 
                className="w-full h-full object-contain drop-shadow-2xl relative z-10"
              />
              
              {/* Animated Floating Elements */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[20%] right-[15%] w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center z-20 border border-slate-100"
              >
                <div className="text-center">
                  <div className="text-[10px] text-slate-400 font-bold uppercase">Growth</div>
                  <div className="text-emerald-500 font-bold text-lg">+12%</div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-[30%] left-[10%] w-auto px-4 py-2 bg-white rounded-full shadow-lg flex items-center gap-2 z-20 border border-slate-100"
              >
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <div className="text-xs font-bold text-slate-600">New Business Detected</div>
              </motion.div>
              
              {/* Background Glows */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-100/30 rounded-full blur-3xl -z-10"></div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
