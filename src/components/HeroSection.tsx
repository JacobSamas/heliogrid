
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    // Set loaded after a short delay for entrance animations
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    
    // Mouse movement parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20; // -10 to 10
      const y = (e.clientY / window.innerHeight - 0.5) * 20; // -10 to 10
      setMousePosition({ x, y });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-[#05091c]">
      {/* Spline 3D Scene */}
      <iframe
        src="https://my.spline.design/sunny-8B3pOycjTeAmgSY0qOzy7NVx/"
        title="Sunny Spline Scene"
        frameBorder="0"
        width="100%"
        height="100%"
        className="absolute inset-0 w-full h-full object-cover z-0"
        allow="autoplay; fullscreen"
        style={{ minHeight: '500px', maxHeight: '100vh', background: 'transparent', display: 'block' }}
      />
      {/* Hero Content */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 
              className={`text-4xl md:text-6xl lg:text-7xl font-bold text-solar-white mb-6 glow-text 
                        transition-all duration-1000 ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              Power Your World <span className="text-solar-gold">with the Sun</span>
            </h1>
            <p 
              className={`text-xl md:text-2xl text-solar-white/90 mb-12 
                        transition-all duration-1000 ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} 
              style={{ transitionDelay: "0.2s" }}
            >
              Affordable, clean, and smart solar energy for your home or business.
            </p>
            <Button 
              className={`bg-solar-gold hover:bg-solar-gold/90 text-[#05091c] font-medium text-lg px-8 py-6
                        transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} 
              style={{ transitionDelay: "0.4s" }}
            >
              Get a Free Quote
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
