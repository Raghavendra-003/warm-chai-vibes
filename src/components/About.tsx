import { Card, CardContent } from "@/components/ui/card";
import { Heart, Coffee, Users, Award } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Heart className="h-8 w-8 text-coffee-medium" />,
      title: "Made with Love",
      description: "Every cup is crafted with passion and attention to detail, bringing you the warmth of home."
    },
    {
      icon: <Coffee className="h-8 w-8 text-coffee-medium" />,
      title: "Premium Beans",
      description: "We source the finest coffee beans from across India and the world, roasted to perfection."
    },
    {
      icon: <Users className="h-8 w-8 text-coffee-medium" />,
      title: "Community Hub",
      description: "A welcoming space where Delhi's coffee lovers gather to connect, work, and unwind."
    },
    {
      icon: <Award className="h-8 w-8 text-coffee-medium" />,
      title: "Award Winning",
      description: "Recognized as one of Delhi's best coffee shops for three consecutive years."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-coffee-dark mb-6">
            Our Story
          </h2>
          <p className="text-lg text-coffee-medium max-w-3xl mx-auto leading-relaxed">
            Born in the bustling streets of Delhi, Café Warmth began as a dream to create 
            a sanctuary where tradition meets innovation. Our cozy corner has become a beloved 
            gathering place for coffee enthusiasts, remote workers, and friends seeking 
            authentic connection over exceptional coffee.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-cream/80 backdrop-blur-sm border-coffee-light/30 hover:shadow-warm transition-all duration-300 hover:-translate-y-2 cursor-move"
            >
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-coffee-dark mb-3">
                  {feature.title}
                </h3>
                <p className="text-coffee-medium leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;