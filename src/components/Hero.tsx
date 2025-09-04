import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Star } from "lucide-react";
import heroImage from "@/assets/coffee-shop-hero.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-coffee-dark/60"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center text-cream">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
            Welcome to 
            <span className="block text-transparent bg-gradient-to-r from-cream to-warm-beige bg-clip-text">
              Café Warmth
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-cream/90 max-w-2xl mx-auto leading-relaxed">
            Experience the perfect blend of authentic Indian hospitality and premium coffee 
            in the heart of Delhi. Every cup tells a story of warmth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="warm" size="lg" className="group">
              Explore Our Menu
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="cream" size="lg">
              Visit Our Café
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-cream/80">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span>Open 7 AM - 11 PM</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-yellow-400" />
              <span>4.8/5 Rating</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cream/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cream/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;