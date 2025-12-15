import { useState, useEffect } from 'react';
import { BarChart3, Menu, X, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'What are they saying?', href: '#features' },
    { name: "How's it work?", href: '#how-it-works' },
    { name: 'Who are we?', href: '#about' },
  ];

  return (
    <header className="bg-secondary w-full py-4">
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer select-none">
          <div className="bg-white p-1.5 rounded shadow-sm text-primary">
            <BarChart3 size={24} strokeWidth={2.5} />
          </div>
          <span className="text-sm font-bold tracking-tight text-primary font-sans leading-tight">
            CommuniData
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-bold text-primary hover:opacity-80 transition-opacity"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-2">
          <Star size={16} className="text-red-500 fill-red-500" />
          <Button variant="secondary" size="sm" className="bg-white text-primary hover:bg-white/90 font-bold shadow-sm rounded-full px-6">
            Log in!
          </Button>
          <Star size={16} className="text-red-500 fill-red-500" />
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-primary p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 p-6 flex flex-col gap-4 shadow-xl z-50">
           {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-base font-bold text-primary py-3 border-b border-slate-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="flex flex-col gap-3 mt-4">
            <Button className="w-full rounded-full font-bold">Log in!</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
