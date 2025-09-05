import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Leaf, Zap, Globe, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import aboutImage from "@/assets/about-coffee-interior.jpg";

const About = () => {
  const values = [
    {
      icon: <Leaf className="h-8 w-8 text-coffee-medium" />,
      title: "Sustainable Sourcing",
      description: "Direct partnerships with ethical coffee farmers ensure fair trade and environmental responsibility."
    },
    {
      icon: <Zap className="h-8 w-8 text-coffee-medium" />,
      title: "Artisan Craftsmanship",
      description: "Master baristas with decades of experience create each cup with precision and artistic flair."
    },
    {
      icon: <Globe className="h-8 w-8 text-coffee-medium" />,
      title: "Global Flavors",
      description: "Curated coffee experiences from Ethiopian highlands to Colombian mountains, all in Hyderabad."
    },
    {
      icon: <Shield className="h-8 w-8 text-coffee-medium" />,
      title: "Quality Promise",
      description: "Every bean is carefully selected, roasted fresh daily, and served with unwavering quality standards."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-coffee-dark mb-6">
              Where Coffee Dreams Come True
            </h2>
            <p className="text-lg text-coffee-medium leading-relaxed mb-6">
              Nestled in the heart of Hyderabad, our café is more than just a coffee shop – 
              it's a cultural melting pot where innovation meets tradition. Since opening our doors, 
              we've been committed to creating an extraordinary coffee experience that awakens 
              your senses and nourishes your soul.
            </p>
            <p className="text-lg text-coffee-medium leading-relaxed">
              From our signature blends to handcrafted pastries, every element is designed to 
              transport you to a world of comfort, creativity, and connection. Welcome to your 
              new favorite escape.
            </p>
          </div>
          <div className="order-first lg:order-last">
            <img 
              src={aboutImage} 
              alt="Cozy coffee shop interior with warm lighting and comfortable seating"
              className="rounded-2xl shadow-warm w-full h-auto object-cover"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card 
              key={index} 
              className="bg-cream/80 backdrop-blur-sm border-coffee-light/30 hover:shadow-warm transition-all duration-300 hover:-translate-y-2 cursor-move"
            >
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-coffee-dark mb-3">
                  {value.title}
                </h3>
                <p className="text-coffee-medium leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/our-story">
            <Button 
              variant="warm" 
              size="lg"
              aria-label="Read our complete story"
            >
              Discover Our Journey
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;