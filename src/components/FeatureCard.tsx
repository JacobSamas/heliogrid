
import { useState, useRef } from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  
  // 3D tilt effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateY = ((x - centerX) / centerX) * 10; // Max 10 degrees
    const rotateX = -((y - centerY) / centerY) * 10; // Max 10 degrees
    
    setRotation({ x: rotateX, y: rotateY });
  };
  
  const resetRotation = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div 
      ref={cardRef}
      className={`relative p-6 rounded-xl glassmorphism transition-all duration-500 card-3d
                  ${isHovered ? 'z-10' : 'z-0'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        resetRotation();
      }}
      onMouseMove={handleMouseMove}
      style={{
        transform: isHovered ? `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)` : 'perspective(1000px) rotateX(0) rotateY(0)',
      }}
    >
      <div className={`mb-4 p-3 rounded-full bg-solar-gold/20 w-16 h-16 flex items-center justify-center
                      transition-all duration-300 ${isHovered ? 'animate-pulse' : ''}`}>
        <Icon className={`w-8 h-8 text-solar-gold ${isHovered ? 'scale-110' : ''} transition-transform duration-300`} />
      </div>
      
      <h3 className="text-xl font-bold mb-2 text-solar-white">{title}</h3>
      <p className="text-solar-white/80">{description}</p>
      
      {/* Glow effect on hover */}
      <div className={`absolute inset-0 rounded-xl transition-opacity duration-500 pointer-events-none
                      bg-gradient-radial from-solar-gold/20 to-transparent
                      ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
                      
      {/* Shine effect line */}
      <div 
        className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
                   transition-all duration-1000 transform -translate-x-full pointer-events-none
                   ${isHovered ? 'translate-x-full' : '-translate-x-full'}`}
        style={{ width: '100%', height: '2px', top: 'calc(50% - 1px)' }}
      />
    </div>
  );
};

export default FeatureCard;
