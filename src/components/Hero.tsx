
import { ArrowDownIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

const Hero = () => {
  return (
    <div className="min-h-[90vh] relative flex items-center overflow-hidden bg-coffee-cream/20">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1770&auto=format&fit=crop")',
          filter: 'brightness(0.7)'
        }}
      />
      
      <div className="container relative z-10">
        <div className="max-w-2xl animate-fade-in">
          <h3 className="text-white/90 font-sans text-lg mb-2 font-medium">Welcome to</h3>
          <h1 className="heading text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
            Bean Bliss <span className="block text-coffee-accent">Coffee</span>
          </h1>
          <p className="text-white/80 text-lg max-w-md mb-8">
            Experience the perfect balance of flavor and ambiance in our artisanal coffee shop.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#menu" className={cn(
              "coffee-btn bg-coffee-accent border-coffee-accent",
              "hover:bg-coffee-accent/90"
            )}>
              Explore Menu
            </a>
            <a href="#location" className="coffee-btn-outline border-white text-white hover:bg-white hover:text-coffee-dark">
              Find Us
            </a>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 hover:text-white animate-bounce"
      >
        <ArrowDownIcon size={30} />
      </a>
    </div>
  );
};

export default Hero;
