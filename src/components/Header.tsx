import { Coffee, MapPin, Phone } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Coffee className="h-8 w-8 text-coffee-medium" />
            <span className="text-2xl font-serif font-bold text-coffee-dark">
              Café Warmth
            </span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-coffee-medium hover:text-coffee-dark transition-colors">
              Home
            </a>
            <a href="#about" className="text-coffee-medium hover:text-coffee-dark transition-colors">
              About
            </a>
            <a href="#menu" className="text-coffee-medium hover:text-coffee-dark transition-colors">
              Menu
            </a>
            <a href="#contact" className="text-coffee-medium hover:text-coffee-dark transition-colors">
              Contact
            </a>
          </nav>
          
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-2 text-sm text-coffee-medium">
              <MapPin className="h-4 w-4" />
              <span>Delhi, India</span>
            </div>
            <div className="hidden lg:flex items-center gap-2 text-sm text-coffee-medium">
              <Phone className="h-4 w-4" />
              <span>+91 98765 43210</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;