import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Coffee, Users, Heart, Award } from "lucide-react";
import { Link } from "react-router-dom";

const OurStory = () => {
  return (
    <div className="min-h-screen bg-gradient-warm">
      <header className="py-6 px-4">
        <div className="container mx-auto">
          <Link to="/">
            <Button 
              variant="ghost" 
              className="text-coffee-dark hover:text-coffee-medium"
              aria-label="Go back to home page"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      <main className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-coffee-dark mb-6">
              Our Story
            </h1>
            <p className="text-xl text-coffee-medium leading-relaxed">
              From a dream to Delhi's most beloved coffee sanctuary
            </p>
          </div>

          <div className="grid gap-12 mb-16">
            <Card className="bg-cream/90 backdrop-blur-sm border-coffee-light/30">
              <CardContent className="p-8">
                <h2 className="text-3xl font-serif font-bold text-coffee-dark mb-6">
                  The Beginning
                </h2>
                <p className="text-coffee-medium leading-relaxed mb-4">
                  In 2018, nestled in the vibrant streets of Delhi, Café Warmth was born from a simple yet profound vision: 
                  to create a space where exceptional coffee meets genuine human connection. What started as a small corner 
                  shop has blossomed into a beloved community hub.
                </p>
                <p className="text-coffee-medium leading-relaxed">
                  Our founders, passionate coffee enthusiasts and Delhi locals, recognized the need for a place that combined 
                  the rich traditions of Indian hospitality with the artistry of specialty coffee culture.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-cream/90 backdrop-blur-sm border-coffee-light/30">
              <CardContent className="p-8">
                <h2 className="text-3xl font-serif font-bold text-coffee-dark mb-6">
                  Our Philosophy
                </h2>
                <p className="text-coffee-medium leading-relaxed mb-4">
                  At Café Warmth, we believe that coffee is more than just a beverage – it's a catalyst for connection, 
                  creativity, and community. Every cup we serve is carefully crafted to bring people together and create 
                  moments of warmth in the bustling energy of Delhi.
                </p>
                <p className="text-coffee-medium leading-relaxed">
                  We source our beans directly from small farms across India and beyond, ensuring fair compensation for 
                  growers while delivering unparalleled quality to our customers.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-cream/90 backdrop-blur-sm border-coffee-light/30">
              <CardContent className="p-8">
                <h2 className="text-3xl font-serif font-bold text-coffee-dark mb-6">
                  Awards & Recognition
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-4">
                    <Award className="h-6 w-6 text-coffee-medium mt-1" />
                    <div>
                      <h3 className="font-semibold text-coffee-dark mb-2">Best Coffee Shop 2022</h3>
                      <p className="text-coffee-medium text-sm">Delhi Food & Beverage Awards</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Heart className="h-6 w-6 text-coffee-medium mt-1" />
                    <div>
                      <h3 className="font-semibold text-coffee-dark mb-2">Community Choice Award</h3>
                      <p className="text-coffee-medium text-sm">Delhi Local Business Excellence</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Coffee className="h-6 w-6 text-coffee-medium mt-1" />
                    <div>
                      <h3 className="font-semibold text-coffee-dark mb-2">Specialty Coffee Excellence</h3>
                      <p className="text-coffee-medium text-sm">India Coffee Association</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Users className="h-6 w-6 text-coffee-medium mt-1" />
                    <div>
                      <h3 className="font-semibold text-coffee-dark mb-2">Best Community Space</h3>
                      <p className="text-coffee-medium text-sm">Urban Delhi Magazine</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Link to="/">
              <Button 
                variant="warm" 
                size="lg"
                aria-label="Visit our coffee shop"
              >
                Visit Us Today
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OurStory;