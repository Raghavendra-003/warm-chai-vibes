import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Compass, Target, Sparkles, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import roastingImage from "@/assets/story-coffee-roasting.jpg";
import farmImage from "@/assets/story-coffee-farm.jpg";

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
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-coffee-dark mb-6">
              Our Journey
            </h1>
            <p className="text-xl text-coffee-medium leading-relaxed max-w-2xl mx-auto">
              A tale of passion, perseverance, and the perfect cup that transformed a small vision into Hyderabad's beloved coffee destination
            </p>
          </div>

          <div className="grid gap-16 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <Card className="bg-cream/90 backdrop-blur-sm border-coffee-light/30">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Compass className="h-8 w-8 text-coffee-medium" />
                    <h2 className="text-3xl font-serif font-bold text-coffee-dark">
                      The Genesis
                    </h2>
                  </div>
                  <p className="text-coffee-medium leading-relaxed mb-4">
                    It all began in 2019 when three coffee enthusiasts from different corners of India converged in Hyderabad 
                    with a shared dream. Frustrated by the lack of authentic specialty coffee experiences in the city, we 
                    decided to change the narrative.
                  </p>
                  <p className="text-coffee-medium leading-relaxed">
                    Our founders traveled extensively through coffee regions of Karnataka, Kerala, and Tamil Nadu, learning 
                    from local farmers and understanding the intricate art of coffee cultivation. This journey laid the 
                    foundation for what would become Café Warmth.
                  </p>
                </CardContent>
              </Card>
              <div>
                <img 
                  src={farmImage} 
                  alt="Coffee farm with lush green coffee plants and mountains"
                  className="rounded-2xl shadow-warm w-full h-auto object-cover"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-last lg:order-first">
                <img 
                  src={roastingImage} 
                  alt="Artisan coffee roasting process with golden coffee beans"
                  className="rounded-2xl shadow-warm w-full h-auto object-cover"
                />
              </div>
              <Card className="bg-cream/90 backdrop-blur-sm border-coffee-light/30">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Target className="h-8 w-8 text-coffee-medium" />
                    <h2 className="text-3xl font-serif font-bold text-coffee-dark">
                      Our Mission
                    </h2>
                  </div>
                  <p className="text-coffee-medium leading-relaxed mb-4">
                    We believe coffee is a bridge between cultures, a catalyst for conversations, and a daily ritual that 
                    deserves reverence. Our mission extends beyond serving exceptional coffee – we're creating a movement 
                    that celebrates the craft, supports farmers, and builds community.
                  </p>
                  <p className="text-coffee-medium leading-relaxed">
                    Every cup tells a story of sustainable practices, fair compensation to farmers, and our commitment to 
                    environmental stewardship. We're not just brewing coffee; we're brewing a better future.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-cream/90 backdrop-blur-sm border-coffee-light/30">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Sparkles className="h-8 w-8 text-coffee-medium" />
                  <h2 className="text-3xl font-serif font-bold text-coffee-dark">
                    Innovation & Tradition
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-coffee-dark mb-3">Artisan Techniques</h3>
                    <p className="text-coffee-medium leading-relaxed">
                      We blend time-honored brewing methods with cutting-edge equipment. Our baristas are trained in 
                      both traditional South Indian filter coffee techniques and modern specialty coffee preparation.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-coffee-dark mb-3">Signature Blends</h3>
                    <p className="text-coffee-medium leading-relaxed">
                      Our master roaster has created unique blends that capture the essence of Indian coffee heritage 
                      while appealing to contemporary palates. Each blend is a carefully orchestrated symphony of flavors.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-cream/90 backdrop-blur-sm border-coffee-light/30">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Trophy className="h-8 w-8 text-coffee-medium" />
                  <h2 className="text-3xl font-serif font-bold text-coffee-dark">
                    Milestones & Recognition
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <h3 className="font-bold text-2xl text-coffee-dark mb-2">2020</h3>
                    <p className="text-coffee-medium">First café opened in RK Nagar</p>
                  </div>
                  <div className="text-center">
                    <h3 className="font-bold text-2xl text-coffee-dark mb-2">2022</h3>
                    <p className="text-coffee-medium">Awarded "Best Specialty Coffee" by Hyderabad Food Awards</p>
                  </div>
                  <div className="text-center">
                    <h3 className="font-bold text-2xl text-coffee-dark mb-2">2024</h3>
                    <p className="text-coffee-medium">Launched direct-trade partnerships with 15 coffee farms</p>
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
                Experience Our Story
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OurStory;