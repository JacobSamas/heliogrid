
import { useState, useEffect } from 'react';
import { Battery, Home, BatteryCharging, SunMedium } from 'lucide-react';
import { Grid3X3 } from 'lucide-react';

import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeatureCard from '@/components/FeatureCard';
import SavingsCalculator from '@/components/SavingsCalculator';
import TestimonialCard from '@/components/TestimonialCard';
import ProjectCard from '@/components/ProjectCard';
import CTABanner from '@/components/CTABanner';
import Footer from '@/components/Footer';

const Index = () => {
  // Reveal animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Data for components
  const features = [
    {
      icon: SunMedium,
      title: 'Premium Solar Panels',
      description: 'High-efficiency panels with 25+ year warranty and advanced durability for maximum energy production.'
    },
    {
      icon: Battery,
      title: 'Energy Storage',
      description: 'Store excess energy with cutting-edge battery solutions to use during nighttime or power outages.'
    },
    {
      icon: Home,
      title: 'Custom Installation',
      description: 'Tailored solar solutions designed specifically for your home\'s architecture and energy needs.'
    },
    {
      icon: BatteryCharging,
      title: '24/7 Monitoring',
      description: 'Advanced monitoring systems to track performance and ensure your system is always operating optimally.'
    }
  ];

  const testimonials = [
    {
      name: 'Michael Johnson',
      location: 'San Diego, CA',
      quote: 'HelioGrid transformed my energy costs completely. I\'m now saving over $200 monthly and my home\'s value increased significantly.',
      rating: 5
    },
    {
      name: 'Sarah Williams',
      location: 'Austin, TX',
      quote: 'The installation process was seamless and their team was incredibly professional. My panels look great and perform even better.',
      rating: 5
    },
    {
      name: 'David Ramirez',
      location: 'Phoenix, AZ',
      quote: 'Best investment I\'ve made for my business. The system paid for itself in just over 4 years, and now we\'re saving thousands.',
      rating: 5
    }
  ];

  const projects = [
    {
      image: 'https://images.unsplash.com/photo-1560863185-a4f6199b3387?q=80&w=1470',
      title: 'Modern Residential Installation',
      description: 'Complete 8.5kW system providing 100% energy independence for this suburban home.',
      tags: ['Residential', 'Rooftop']
    },
    {
      image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1470',
      title: 'Commercial Office Complex',
      description: 'Large-scale installation providing sustainable energy for a corporate campus.',
      tags: ['Commercial', 'Rooftop']
    },
    {
      image: 'https://images.unsplash.com/photo-1631178659515-c391f8b84643?q=80&w=1470',
      title: 'Rural Farm Installation',
      description: 'Solar panel array combined with battery storage for off-grid operation.',
      tags: ['Agricultural', 'Ground Mount']
    },
    {
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1470',
      title: 'Community Solar Project',
      description: 'Shared solar installation providing clean energy for an entire neighborhood.',
      tags: ['Community', 'Ground Mount']
    }
  ];

  return (
    <div className="bg-[#0d1b42] min-h-screen">
      <Navbar />
      
      <HeroSection />
      
      {/* Why Choose HelioGrid Section */}
      <section id="why-solar" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-solar-white mb-4 glow-text reveal">
            Why Choose <span className="text-solar-gold">HelioGrid</span>
          </h2>
          <p className="text-xl text-solar-white/80 text-center max-w-3xl mx-auto mb-12 reveal">
            Experience the future of energy with our cutting-edge solar solutions designed for sustainability and savings.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 reveal">
            {features.map((feature, index) => (
              <FeatureCard 
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Solar Savings Calculator Section */}
      <section id="calculator" className="py-20 bg-[#0d1b42]/70">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-solar-white mb-4 glow-text reveal">
            Solar Savings <span className="text-solar-gold">Calculator</span>
          </h2>
          <p className="text-xl text-solar-white/80 text-center max-w-3xl mx-auto mb-12 reveal">
            Find out how much you can save by switching to clean solar energy.
          </p>
          
          <div className="max-w-4xl mx-auto reveal">
            <SavingsCalculator />
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-solar-white mb-4 glow-text reveal">
            Success <span className="text-solar-gold">Stories</span>
          </h2>
          <p className="text-xl text-solar-white/80 text-center max-w-3xl mx-auto mb-12 reveal">
            Hear from our satisfied customers who have transformed their energy experience.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 reveal">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                location={testimonial.location}
                quote={testimonial.quote}
                rating={testimonial.rating}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Projects Section with Gold Blur and Grid Lines */}
      <section id="projects" className="py-20 relative overflow-hidden">
        {/* Gold Blur Effect */}
        <div className="absolute inset-0 bg-[#0d1b42] overflow-hidden">
          {/* Radial gradient for gold blur */}
          <div className="absolute inset-0 opacity-20 bg-gradient-radial from-solar-gold via-transparent to-transparent"></div>
          
          {/* Grid Lines */}
          <div className="absolute inset-0 grid grid-cols-6 gap-4 opacity-10">
            {[...Array(6)].map((_, colIndex) => (
              <div key={`col-${colIndex}`} className="relative h-full">
                <div className="absolute inset-y-0 left-0 w-px bg-solar-gold/30"></div>
                <div className="absolute inset-y-0 right-0 w-px bg-solar-gold/30"></div>
              </div>
            ))}
          </div>
          
          <div className="absolute inset-0 grid grid-rows-6 gap-4 opacity-10">
            {[...Array(6)].map((_, rowIndex) => (
              <div key={`row-${rowIndex}`} className="relative w-full">
                <div className="absolute inset-x-0 top-0 h-px bg-solar-gold/30"></div>
                <div className="absolute inset-x-0 bottom-0 h-px bg-solar-gold/30"></div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center justify-center mb-12 reveal">
            <Grid3X3 className="text-solar-gold w-8 h-8 mr-4 animate-pulse" />
            <h2 className="text-3xl md:text-4xl font-bold text-center text-solar-white glow-text">
              Our <span className="text-solar-gold">Work</span>
            </h2>
          </div>
          
          <p className="text-xl text-solar-white/80 text-center max-w-3xl mx-auto mb-12 reveal">
            Explore our recent solar installations and transformations.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 reveal">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                image={project.image}
                title={project.title}
                description={project.description}
                tags={project.tags}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Banner */}
      <section className="py-16 container mx-auto px-4 reveal">
        <CTABanner />
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
