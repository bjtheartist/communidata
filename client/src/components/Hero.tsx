import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-white min-h-[calc(100vh-80px)] flex items-center">
      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Content Side */}
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary leading-tight">
              Empower Your Communities with Data
            </h1>
            
            <p className="text-base md:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Making economic data accessible and actionable for every community has never been easier. Discover insights into new businesses wealth distribution, and more to unlock your community's full potential.
            </p>

            <div className="flex flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 font-bold shadow-lg hover:shadow-xl transition-all">
                Get started now!
              </Button>
              <Button size="lg" variant="outline" className="border-slate-300 text-slate-600 hover:bg-slate-50 rounded-full px-8 font-bold">
                Log in!
              </Button>
            </div>
          </div>

          {/* Visual Side - Isometric City */}
          <div className="lg:w-1/2 w-full animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <div className="relative w-full aspect-square max-w-[600px] mx-auto">
              <img 
                src="/images/isometric-city.png" 
                alt="Isometric city illustration showing community growth" 
                className="w-full h-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700 ease-in-out"
              />
              
              {/* Floating Elements (Optional decorative touches) */}
              <div className="absolute top-10 right-10 w-12 h-12 bg-orange-400 rounded-full opacity-20 blur-xl animate-pulse"></div>
              <div className="absolute bottom-20 left-10 w-16 h-16 bg-blue-400 rounded-full opacity-20 blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
