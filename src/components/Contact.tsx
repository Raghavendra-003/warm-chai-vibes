import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Clock, Mail, Instagram, Facebook } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-coffee text-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Visit Us Today
          </h2>
          <p className="text-lg text-cream/90 max-w-2xl mx-auto">
            Find us in the heart of Delhi, where every visit promises warmth, 
            exceptional coffee, and genuine hospitality.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-cream/10 backdrop-blur-sm border-cream/20">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-cream mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Location</h3>
                    <p className="text-cream/90 leading-relaxed">
                      Road No: 2 coffee street, RK Nagar, Nagole<br />
                      Hyderabad Telangana 500068<br />
                      Near By Thattianaram, bandlaguda depo
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-cream/10 backdrop-blur-sm border-cream/20">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-cream mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Opening Hours</h3>
                    <div className="text-cream/90 space-y-1">
                      <p>Monday - Friday: 7:00 AM - 11:00 PM</p>
                      <p>Saturday - Sunday: 8:00 AM - 12:00 AM</p>
                      <p className="text-sm text-cream/70 mt-2">
                        Extended hours on weekends
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-cream/10 backdrop-blur-sm border-cream/20">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-cream" />
                    <span>+91 98765 43210</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-cream" />
                    <span>hello@cafewarmth.com</span>
                  </div>
                  <div className="flex items-center gap-4 mt-6">
                    <Instagram className="h-5 w-5 text-cream hover:text-warm-beige cursor-pointer transition-colors" />
                    <Facebook className="h-5 w-5 text-cream hover:text-warm-beige cursor-pointer transition-colors" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map Placeholder and CTA */}
          <div className="space-y-8">
            <Card className="bg-cream/10 backdrop-blur-sm border-cream/20 overflow-hidden">
              <CardContent className="p-0">
                <div className="h-64 bg-coffee-medium/30 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-cream mx-auto mb-4" />
                    <p className="text-cream/90">
                      Interactive map coming soon
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-cream/10 backdrop-blur-sm border-cream/20">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-serif font-semibold mb-4">
                  Ready for Warmth?
                </h3>
                <p className="text-cream/90 mb-6 leading-relaxed">
                  Join us for an unforgettable coffee experience. Whether you're 
                  looking for your morning fuel, a cozy workspace, or a perfect 
                  meeting spot, we're here to welcome you.
                </p>
                <Button variant="cream" size="lg" className="w-full">
                  Book a Table
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;