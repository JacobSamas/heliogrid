
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  location: string;
  quote: string;
  rating: number;
  image?: string;
}

const TestimonialCard = ({ name, location, quote, rating, image }: TestimonialCardProps) => {
  return (
    <div className="glassmorphism rounded-xl p-6 h-full flex flex-col">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden bg-solar-gold/30">
          {image ? (
            <img 
              src={image} 
              alt={name} 
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-solar-gold">
              {name.charAt(0)}
            </div>
          )}
        </div>
        
        <div>
          <h4 className="font-semibold text-solar-white">{name}</h4>
          <p className="text-sm text-solar-white/70">{location}</p>
        </div>
      </div>
      
      <div className="flex mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star 
            key={i}
            className={`w-4 h-4 ${i < rating ? 'text-solar-gold fill-solar-gold' : 'text-solar-white/30'}`}
          />
        ))}
      </div>
      
      <p className="text-solar-white/90 italic flex-grow">"{quote}"</p>
    </div>
  );
};

export default TestimonialCard;
