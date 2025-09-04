import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Menu = () => {
  const coffeeItems = [
    {
      name: "Delhi Masala Chai Latte",
      price: "₹180",
      description: "Our signature blend with traditional spices, steamed milk, and a touch of sweetness",
      popular: true
    },
    {
      name: "Ethiopian Single Origin",
      price: "₹220",
      description: "Bright, fruity notes with hints of chocolate, direct trade from Ethiopian highlands"
    },
    {
      name: "Cold Brew Tonic",
      price: "₹200",
      description: "Refreshing cold brew coffee with tonic water, perfect for Delhi's warm weather"
    },
    {
      name: "Café Warmth Special",
      price: "₹250",
      description: "Double shot espresso with cardamom-infused milk and jaggery",
      popular: true
    }
  ];

  const foodItems = [
    {
      name: "Croissant & Jam",
      price: "₹120",
      description: "Buttery, flaky croissant served with house-made seasonal jam"
    },
    {
      name: "Avocado Toast",
      price: "₹280",
      description: "Fresh avocado on sourdough with cherry tomatoes and microgreens"
    },
    {
      name: "Breakfast Sandwich",
      price: "₹320",
      description: "Scrambled eggs, cheese, and herbs on artisanal bread"
    },
    {
      name: "Chocolate Muffin",
      price: "₹150",
      description: "Rich, moist chocolate muffin with Belgian chocolate chips"
    }
  ];

  return (
    <section id="menu" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-coffee-dark mb-6">
            Our Menu
          </h2>
          <p className="text-lg text-coffee-medium max-w-2xl mx-auto">
            Discover our carefully curated selection of premium coffees and fresh food, 
            crafted to warm your heart and fuel your day.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Coffee Section */}
          <div>
            <h3 className="text-3xl font-serif font-semibold text-coffee-dark mb-8 text-center">
              Coffee & Beverages
            </h3>
            <div className="space-y-6">
              {coffeeItems.map((item, index) => (
                <Card key={index} className="bg-card border-coffee-light/30 hover:shadow-soft transition-all duration-300">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-coffee-dark flex items-center gap-2">
                        {item.name}
                        {item.popular && (
                          <Badge className="bg-coffee-medium text-cream">Popular</Badge>
                        )}
                      </CardTitle>
                      <span className="text-xl font-semibold text-coffee-medium">
                        {item.price}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-coffee-medium leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Food Section */}
          <div>
            <h3 className="text-3xl font-serif font-semibold text-coffee-dark mb-8 text-center">
              Fresh Food
            </h3>
            <div className="space-y-6">
              {foodItems.map((item, index) => (
                <Card key={index} className="bg-card border-coffee-light/30 hover:shadow-soft transition-all duration-300">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-coffee-dark">
                        {item.name}
                      </CardTitle>
                      <span className="text-xl font-semibold text-coffee-medium">
                        {item.price}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-coffee-medium leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;