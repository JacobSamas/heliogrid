
import { useState, useRef } from 'react';

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  tags: string[];
}

const ProjectCard = ({ image, title, description, tags }: ProjectCardProps) => {
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
    
    const rotateY = ((x - centerX) / centerX) * 5; // Max 5 degrees
    const rotateX = -((y - centerY) / centerY) * 5; // Max 5 degrees
    
    setRotation({ x: rotateX, y: rotateY });
  };
  
  const resetRotation = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div 
      ref={cardRef}
      className="relative overflow-hidden rounded-xl group transform transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        resetRotation();
      }}
      onMouseMove={handleMouseMove}
      style={{
        transform: isHovered ? `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(1.02)` : 'perspective(1000px)',
        boxShadow: isHovered ? '0 25px 50px -12px rgba(0, 0, 0, 0.5)' : '0 10px 15px -3px rgba(0, 0, 0, 0.3)'
      }}
    >
      {/* Image */}
      <div className="aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className={`w-full h-full object-cover transition-transform duration-700
                     ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
      </div>
      
      {/* Overlay Light Effect */}
      <div 
        className={`absolute inset-0 bg-gradient-to-br from-solar-gold/20 to-transparent 
                   opacity-0 transition-opacity duration-500 pointer-events-none
                   ${isHovered ? 'opacity-70' : 'opacity-0'}`}
      />
      
      {/* Content overlay */}
      <div 
        className={`absolute inset-0 flex flex-col justify-end p-6 transition-all duration-500
                   bg-gradient-to-t from-[#070d1f]/90 to-[#070d1f]/0
                   ${isHovered ? 'opacity-100' : 'opacity-80'}`}
      >
        <div className={`transition-all duration-500 transform
                       ${isHovered ? 'translate-y-0' : 'translate-y-2'}`}>
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag) => (
              <span 
                key={tag} 
                className={`text-xs py-1 px-3 rounded-full bg-solar-gold/20 text-solar-gold
                          transition-all duration-300 ${isHovered ? 'scale-105' : 'scale-100'}`}
              >
                {tag}
              </span>
            ))}
          </div>
          
          <h3 className={`text-xl font-bold text-solar-white mb-2 transition-all duration-300
                         ${isHovered ? 'text-solar-gold' : 'text-solar-white'}`}>
            {title}
          </h3>
          
          <p 
            className={`text-sm text-solar-white/80 transition-all duration-500
                       ${isHovered ? 'opacity-100 max-h-24 mb-2' : 'opacity-0 max-h-0 overflow-hidden'}`}
          >
            {description}
          </p>
          
          {/* View Project Button */}
          <button 
            className={`px-4 py-2 bg-solar-gold/20 text-solar-gold text-sm rounded-lg
                     border border-solar-gold/30 transition-all duration-500
                     ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            View Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
