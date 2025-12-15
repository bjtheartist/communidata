import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, Activity, DollarSign, Users, Database } from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const INITIAL_DATA = [
  { name: 'Jan', value: 2400 },
  { name: 'Feb', value: 1398 },
  { name: 'Mar', value: 3800 },
  { name: 'Apr', value: 3908 },
  { name: 'May', value: 4800 },
  { name: 'Jun', value: 3800 },
  { name: 'Jul', value: 4300 },
];

const Hero = () => {
  const [data, setData] = useState(INITIAL_DATA);
  const [activeValue, setActiveValue] = useState(4300);

  // Simulate live data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setData(prevData => {
        const newData = [...prevData];
        // Shift data
        const lastValue = newData[newData.length - 1].value;
        const change = (Math.random() - 0.5) * 800;
        const newValue = Math.max(2000, Math.min(6000, lastValue + change));
        
        // Remove first, add new
        const newEntry = { name: 'Live', value: Math.round(newValue) };
        const shifted = [...newData.slice(1), newEntry];
        
        setActiveValue(Math.round(newValue));
        return shifted;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 overflow-hidden min-h-screen flex items-center">
      
      {/* Dynamic Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[100px] -z-10"></div>
      
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-[-2] opacity-40 mix-blend-screen pointer-events-none">
         <img src="/images/hero-bg.png" alt="" className="w-full h-full object-cover" />
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Content */}
          <div className="lg:w-1/2 space-y-8 text-center lg:text-left animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-background/80 border border-white/10 text-primary text-xs font-mono backdrop-blur-sm shadow-[0_0_15px_rgba(56,189,248,0.3)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              LIVE DATA STREAM ACTIVE
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
              Data that drives <br />
              <span className="text-gradient">community impact</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Transform raw economic figures into actionable narratives. Our AI-driven platform empowers municipalities to track growth, secure funding, and visualize success in real-time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="shadow-[0_0_20px_-5px_rgba(56,189,248,0.5)] group hover:shadow-[0_0_25px_-5px_rgba(56,189,248,0.7)]">
                Start Analyzing
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white/10 hover:bg-white/5">
                View Live Demo
              </Button>
            </div>

            <div className="pt-8 flex items-center justify-center lg:justify-start gap-8 text-muted-foreground text-sm font-mono border-t border-white/5 mt-8">
              <div className="flex items-center gap-2">
                <Database size={16} className="text-primary" />
                <span>REAL-TIME SYNC</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={16} className="text-indigo-500" />
                <span>MULTI-USER ACCESS</span>
              </div>
            </div>
          </div>

          {/* Visual / Dashboard Mockup */}
          <div className="lg:w-1/2 w-full animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <div className="relative glass-panel rounded-2xl p-1 shadow-2xl transition-all duration-700 bg-gradient-to-b from-white/5 to-transparent">
              <div className="absolute inset-0 bg-primary/5 rounded-2xl pointer-events-none"></div>
              
              <div className="relative bg-background/80 rounded-xl p-5 border border-white/5 backdrop-blur-sm">
                {/* App Toolbar */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                  </div>
                  <div className="flex gap-6 text-xs font-mono text-muted-foreground">
                    <span className="text-primary border-b border-primary pb-0.5">Overview</span>
                    <span className="hover:text-white cursor-pointer transition-colors">Reports</span>
                    <span className="hover:text-white cursor-pointer transition-colors">Settings</span>
                  </div>
                </div>

                {/* Main Chart Area */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="glass-card p-5 rounded-xl col-span-3 bg-gradient-to-br from-white/5 to-transparent">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground">Economic Velocity</h3>
                        <div className="flex items-baseline gap-3 mt-1">
                          <p className="text-3xl font-bold text-white tracking-tight font-mono">
                            ${(activeValue / 1000).toFixed(2)}M
                          </p>
                          <span className="text-sm font-medium text-emerald-400 flex items-center gap-1 bg-emerald-500/10 px-2 py-0.5 rounded">
                            <TrendingUp size={12} />
                            +12.5%
                          </span>
                        </div>
                      </div>
                      <div className="p-2 bg-primary/10 rounded-lg text-primary ring-1 ring-primary/20">
                        <Activity size={20} />
                      </div>
                    </div>
                    <div className="h-[220px] w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={data}>
                          <defs>
                            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="var(--color-primary)" stopOpacity={0.4}/>
                              <stop offset="95%" stopColor="var(--color-primary)" stopOpacity={0}/>
                            </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                          <XAxis 
                            dataKey="name" 
                            axisLine={false} 
                            tickLine={false} 
                            tick={{fill: '#94a3b8', fontSize: 10, fontFamily: 'JetBrains Mono'}} 
                            dy={10} 
                          />
                          <YAxis hide domain={[1000, 7000]} />
                          <Tooltip 
                            contentStyle={{backgroundColor: '#020617', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '8px', color: '#f8fafc', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.5)'}}
                            itemStyle={{color: '#38bdf8', fontFamily: 'JetBrains Mono'}}
                            formatter={(value: number) => [`$${value}`, 'Value']}
                          />
                          <Area 
                            type="monotone" 
                            dataKey="value" 
                            stroke="var(--color-primary)" 
                            strokeWidth={3} 
                            fillOpacity={1} 
                            fill="url(#colorValue)" 
                            isAnimationActive={true}
                            animationDuration={1000}
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>

                {/* Secondary Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="glass-card p-4 rounded-xl flex items-center gap-4 hover:bg-white/5 transition-colors cursor-default">
                    <div className="h-10 w-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 ring-1 ring-emerald-500/20">
                      <DollarSign size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-bold">Grants Secured</p>
                      <p className="text-lg font-bold text-white font-mono">$850k</p>
                    </div>
                  </div>
                  <div className="glass-card p-4 rounded-xl flex items-center gap-4 hover:bg-white/5 transition-colors cursor-default">
                    <div className="h-10 w-10 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400 ring-1 ring-indigo-500/20">
                      <Users size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-bold">New Jobs</p>
                      <p className="text-lg font-bold text-white font-mono">1,240</p>
                    </div>
                  </div>
                </div>

                {/* Floating Element */}
                <div className="absolute -right-12 top-24 bg-background border border-white/10 p-4 rounded-xl shadow-2xl max-w-[200px] hidden lg:block backdrop-blur-md">
                  <div className="text-[10px] font-bold text-primary mb-2 uppercase tracking-wider flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
                    AI Insight
                  </div>
                  <div className="text-sm text-white mb-3 leading-snug">Retail growth projected to hit <span className="text-emerald-400 font-bold">15%</span> next quarter.</div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 w-[85%]"></div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
