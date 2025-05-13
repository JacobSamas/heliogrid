
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  accentIndex?: number;
}

const accentStyles = [
  'from-solar-gold/60 to-solar-gold/20',
  'from-blue-400/60 to-blue-400/20',
  'from-green-400/60 to-green-400/20',
  'from-pink-400/60 to-pink-400/20',
];

const FeatureCard = ({ icon: Icon, title, description, accentIndex = 0 }: FeatureCardProps) => { 
  return (
    <div 
      className="relative p-7 rounded-2xl bg-white/10 backdrop-blur-md border border-solar-gold/30 shadow-xl hover:shadow-2xl transition-shadow duration-300 group"
      style={{ minHeight: 220 }}
    >
      <div className="mb-5 flex items-center justify-center">
        <span className={`inline-flex items-center justify-center w-16 h-16 rounded-full shadow-lg border-2 border-solar-gold/40 bg-gradient-to-br ${accentStyles[accentIndex % accentStyles.length]}`}>
          <Icon className="w-8 h-8 text-solar-gold drop-shadow-md" />
        </span>
      </div>
      <h3 className="text-xl font-extrabold mb-2 text-solar-white text-center tracking-tight">
        {title}
      </h3>
      <p className="text-solar-white/80 text-center text-base">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
