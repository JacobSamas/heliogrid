
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-solar-blue py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-solar-white mb-4">
              Helio<span className="text-solar-gold">Grid</span>
            </h3>
            <p className="text-solar-white/70 mb-4">
              Leading the way in sustainable solar energy solutions for homes and businesses across the nation.
            </p>
            <div className="flex space-x-4">
              {/* Social Media Icons */}
              <a href="#" className="w-10 h-10 rounded-full bg-solar-gold/20 flex items-center justify-center hover:bg-solar-gold/30 transition-colors">
                <span className="text-solar-gold">FB</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-solar-gold/20 flex items-center justify-center hover:bg-solar-gold/30 transition-colors">
                <span className="text-solar-gold">TW</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-solar-gold/20 flex items-center justify-center hover:bg-solar-gold/30 transition-colors">
                <span className="text-solar-gold">IG</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-solar-gold/20 flex items-center justify-center hover:bg-solar-gold/30 transition-colors">
                <span className="text-solar-gold">LI</span>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-solar-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-solar-white/70 hover:text-solar-gold transition-colors">Home</a></li>
              <li><a href="#why-solar" className="text-solar-white/70 hover:text-solar-gold transition-colors">Why Solar?</a></li>
              <li><a href="#calculator" className="text-solar-white/70 hover:text-solar-gold transition-colors">Savings Calculator</a></li>
              <li><a href="#testimonials" className="text-solar-white/70 hover:text-solar-gold transition-colors">Testimonials</a></li>
              <li><a href="#projects" className="text-solar-white/70 hover:text-solar-gold transition-colors">Our Projects</a></li>
              <li><a href="#contact" className="text-solar-white/70 hover:text-solar-gold transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-solar-white mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-solar-white/70 hover:text-solar-gold transition-colors">Residential Solar</a></li>
              <li><a href="#" className="text-solar-white/70 hover:text-solar-gold transition-colors">Commercial Solar</a></li>
              <li><a href="#" className="text-solar-white/70 hover:text-solar-gold transition-colors">Solar Battery Storage</a></li>
              <li><a href="#" className="text-solar-white/70 hover:text-solar-gold transition-colors">Solar Panel Maintenance</a></li>
              <li><a href="#" className="text-solar-white/70 hover:text-solar-gold transition-colors">Energy Efficiency Consulting</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-solar-white mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="text-solar-gold w-5 h-5 shrink-0 mt-0.5" />
                <span className="text-solar-white/70">123 Solar Street, Sunshine City, SC 98765</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-solar-gold w-5 h-5 shrink-0" />
                <span className="text-solar-white/70">(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-solar-gold w-5 h-5 shrink-0" />
                <span className="text-solar-white/70">info@heliogrid.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-solar-white/10 text-center text-solar-white/50">
          <p>&copy; {new Date().getFullYear()} HelioGrid. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
