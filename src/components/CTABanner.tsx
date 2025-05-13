
import { Button } from '@/components/ui/button';

const CTABanner = () => {
  return (
    <div className="glassmorphism rounded-xl p-6 sm:p-8 relative overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-solar-gold/20 blur-3xl"></div>
      <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-solar-orange/10 blur-3xl"></div>
      
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-solar-white mb-2">
            Get Your Free Solar Consultation Today
          </h2>
          <p className="text-solar-white/80">
            Take the first step towards energy independence and savings.
          </p>
        </div>
        
        <Button className="glow-button text-solar-white px-8 py-6 text-lg whitespace-nowrap">
          Start Your Solar Journey
        </Button>
      </div>
    </div>
  );
};

export default CTABanner;
