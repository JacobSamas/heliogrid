
interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  tags: string[];
}

const ProjectCard = ({ image, title, description, tags }: ProjectCardProps) => {
  return (
    <div
      className="relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-md border border-solar-gold/30 shadow-xl hover:shadow-2xl transition-all duration-400 group cursor-pointer"
      style={{ minHeight: 320 }}
    >
      {/* Image + overlay */}
      <div className="aspect-video overflow-hidden relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = 'https://placehold.co/600x338/222/fff?text=Solar+Project';
          }}
        />
        {/* Bottom gradient overlay for text readability */}
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />
      </div>
      
      {/* Content overlay */}
      <div className="absolute bottom-0 left-0 w-full p-6 pb-4 flex flex-col justify-end z-10">
        <h3 className="text-xl font-extrabold text-solar-white mb-1 drop-shadow-lg">
          {title}
        </h3>
        <p className="text-solar-white/80 text-sm mb-3 drop-shadow">
          {description}
        </p>
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span key={i} className="px-3 py-1 rounded-full bg-solar-gold/10 text-solar-gold text-xs font-semibold border border-solar-gold/20">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
