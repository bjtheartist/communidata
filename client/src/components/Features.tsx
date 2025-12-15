import { useState } from 'react';
import { LayoutDashboard, FileUp, Sparkles, Users, PieChart, ArrowUpRight, MessageSquare, Download } from 'lucide-react';

const Features = () => {
  const [activeTab, setActiveTab] = useState('dashboards');

  const tabs = [
    { id: 'dashboards', label: 'Dashboards', icon: LayoutDashboard },
    { id: 'reporting', label: 'Reporting', icon: FileUp },
    { id: 'insights', label: 'AI Insights', icon: Sparkles },
    { id: 'advising', label: 'Advising', icon: Users },
  ];

  const content: any = {
    dashboards: {
      title: "Real-time Community Pulse",
      desc: "Visualize economic health instantly. Track new business registrations, employment rates, and industry shifts on a unified canvas.",
      points: ["Customizable widgets", "Cross-referencing datasets", "Mobile-responsive views"],
      visual: (
        <div className="h-full w-full p-6 flex flex-col gap-4">
           <div className="flex gap-4">
             <div className="flex-1 bg-white rounded-xl h-32 border border-slate-100 p-4 relative overflow-hidden group shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start">
                   <div className="text-slate-400 text-xs font-bold tracking-wider">REVENUE</div>
                   <ArrowUpRight className="text-emerald-500" size={16} />
                </div>
                <div className="text-2xl font-bold text-primary mt-2">$2.4M</div>
                <div className="w-full h-10 mt-4 flex items-end gap-1">
                   {[40, 60, 45, 70, 85, 65, 80].map((h, i) => (
                      <div key={i} style={{height: `${h}%`}} className="flex-1 bg-blue-100 rounded-sm group-hover:bg-blue-500 transition-colors"></div>
                   ))}
                </div>
             </div>
             <div className="flex-1 bg-white rounded-xl h-32 border border-slate-100 p-4 relative overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <PieChart className="text-blue-100 absolute bottom-4 right-4 opacity-50" size={64} />
                <div className="text-slate-400 text-xs font-bold tracking-wider">SECTORS</div>
                <div className="mt-4 space-y-2">
                   <div className="flex items-center gap-2 text-xs text-slate-600 font-medium"><div className="w-2 h-2 rounded-full bg-blue-500"></div> Tech (45%)</div>
                   <div className="flex items-center gap-2 text-xs text-slate-600 font-medium"><div className="w-2 h-2 rounded-full bg-orange-400"></div> Retail (30%)</div>
                </div>
             </div>
           </div>
           <div className="flex-1 bg-white rounded-xl border border-slate-100 p-4 shadow-sm">
              <div className="h-4 w-32 bg-slate-100 rounded mb-4"></div>
              <div className="space-y-2">
                 <div className="h-2 w-full bg-slate-50 rounded"></div>
                 <div className="h-2 w-3/4 bg-slate-50 rounded"></div>
                 <div className="h-2 w-5/6 bg-slate-50 rounded"></div>
              </div>
           </div>
        </div>
      )
    },
    reporting: {
      title: "Automated Impact Reports",
      desc: "Turn data into documents. Generate grant-ready PDFs and shareholder presentations with a single click, populated with your latest metrics.",
      points: ["One-click PDF export", "Grant proposal templates", "Scheduled email delivery"],
      visual: (
        <div className="h-full w-full p-8 flex items-center justify-center">
           <div className="w-48 aspect-[1/1.4] bg-white rounded shadow-xl border border-slate-100 relative transform rotate-[-5deg] transition-transform hover:rotate-0 duration-500 group">
              <div className="p-4 space-y-3">
                 <div className="h-2 w-16 bg-slate-200 rounded"></div>
                 <div className="h-20 bg-slate-50 rounded"></div>
                 <div className="space-y-1">
                    <div className="h-1 w-full bg-slate-100 rounded"></div>
                    <div className="h-1 w-full bg-slate-100 rounded"></div>
                    <div className="h-1 w-2/3 bg-slate-100 rounded"></div>
                 </div>
                 <div className="flex gap-2 mt-4">
                    <div className="flex-1 h-16 bg-blue-50 rounded border border-blue-100"></div>
                    <div className="flex-1 h-16 bg-blue-50 rounded border border-blue-100"></div>
                 </div>
              </div>
              
              {/* Floating Download Button */}
              <div className="absolute -right-6 bottom-8 bg-primary text-white p-3 rounded-full shadow-lg scale-0 group-hover:scale-100 transition-transform">
                 <Download size={20} />
              </div>
           </div>
        </div>
      )
    },
    insights: {
      title: "AI Narrative Engine",
      desc: "Don't just show charts—tell the story. Our AI analyzes trends to write compelling summaries and identifies opportunities you might miss.",
      points: ["Trend explanations", "Anomaly detection", "Success storytelling"],
      visual: (
        <div className="h-full w-full p-6 flex flex-col justify-center space-y-4">
           <div className="bg-white border border-slate-100 rounded-2xl p-4 max-w-[85%] self-start rounded-tl-none shadow-sm">
              <p className="text-slate-600 text-sm font-medium">Why did retail revenue drop in March?</p>
           </div>
           
           <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 max-w-[90%] self-end rounded-tr-none relative shadow-sm">
              <div className="absolute -top-3 -left-3 bg-primary text-white p-1.5 rounded-lg shadow-md">
                 <Sparkles size={14} fill="white" />
              </div>
              <p className="text-slate-700 text-sm leading-relaxed">
                 <span className="text-primary font-bold">Analysis:</span> Major road construction on Main St reduced foot traffic by 40%. However, online sales for local merchants increased by 15%, suggesting a pivot opportunity.
              </p>
           </div>
        </div>
      )
    },
    advising: {
      title: "Advisory Session CRM",
      desc: "Track every interaction. Organize session notes, set goals for local businesses, and monitor their progress over time in a unified interface.",
      points: ["Session logging", "Outcome tracking", "Business health scores"],
      visual: (
         <div className="h-full w-full p-6">
            <div className="space-y-3">
               {[1, 2, 3].map((i) => (
                 <div key={i} className="flex items-center gap-4 p-3 bg-white rounded-xl border border-slate-100 hover:shadow-md transition-all cursor-pointer">
                    <div className={`w-2 h-2 rounded-full ${i === 1 ? 'bg-green-500' : i === 2 ? 'bg-yellow-500' : 'bg-red-500'}`}></div>
                    <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-500">BM</div>
                    <div className="flex-1">
                       <div className="h-2 w-24 bg-slate-200 rounded mb-1.5"></div>
                       <div className="h-1.5 w-16 bg-slate-100 rounded"></div>
                    </div>
                    <div className="text-slate-400"><MessageSquare size={14} /></div>
                 </div>
               ))}
            </div>
         </div>
      )
    }
  };

  return (
    <section id="features" className="py-24 bg-slate-50/50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-primary tracking-[0.2em] uppercase mb-4">The Toolkit</h2>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Powerful modules for <br/>modern governance</h2>
          <p className="text-lg text-slate-600">
            CommuniData abstracts the complexity of economic data into a sleek, manageable interface.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:h-[500px]">
          
          {/* Tabs Navigation */}
          <div className="lg:w-1/3 flex flex-col gap-3">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`text-left px-6 py-5 rounded-2xl transition-all duration-300 flex items-center gap-4 group ${
                    isActive 
                      ? 'bg-white shadow-lg scale-105 border border-slate-100' 
                      : 'bg-transparent hover:bg-white/50'
                  }`}
                >
                  <div className={`p-2.5 rounded-xl transition-colors ${isActive ? 'bg-primary text-white shadow-md' : 'bg-slate-100 text-slate-500 group-hover:text-primary'}`}>
                    <Icon size={20} />
                  </div>
                  <div>
                    <span className={`block font-bold text-lg ${isActive ? 'text-primary' : 'text-slate-500 group-hover:text-slate-700'}`}>
                      {tab.label}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Feature Display Area */}
          <div className="lg:w-2/3 bg-white rounded-3xl p-1 border border-slate-100 shadow-xl overflow-hidden flex flex-col md:flex-row">
             
             {/* Text Side */}
             <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center space-y-6">
                <h3 className="text-2xl font-bold text-primary">{content[activeTab].title}</h3>
                <p className="text-slate-600 leading-relaxed text-lg">{content[activeTab].desc}</p>
                
                <ul className="space-y-4 pt-4">
                   {content[activeTab].points.map((point: string, idx: number) => (
                     <li key={idx} className="flex items-center gap-3 text-slate-700 font-medium text-sm">
                       <div className="h-2 w-2 bg-blue-400 rounded-full" />
                       {point}
                     </li>
                   ))}
                </ul>
                
                <div className="pt-6">
                   <button className="text-primary hover:text-primary/80 font-bold flex items-center gap-2 group transition-colors">
                      Learn more <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                   </button>
                </div>
             </div>

             {/* Visual Side */}
             <div className="md:w-1/2 bg-slate-50 border-l border-slate-100 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>
                <div className="relative z-10 w-full h-full">
                  {content[activeTab].visual}
                </div>
             </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
