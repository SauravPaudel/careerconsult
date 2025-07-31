import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <img 
                src="/lovable-uploads/6beed274-06b4-4359-b9e3-6fac6ae518b0.png" 
                alt="Career Consult - Dedicate to Excellence" 
                className="h-16 w-auto mb-4 filter brightness-0 invert"
              />
              <p className="text-background/80 mb-4">
                Nepal's most trusted education consultancy with 100% visa success rate. 
                Transforming dreams into reality since 2015.
              </p>
              <div className="bg-accent/20 rounded-lg p-4">
                <p className="font-semibold text-accent mb-1">Trusted by 1000+ Students</p>
                <p className="text-background/80 text-sm">Since 2015</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-accent">Study Destinations</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-background/80 hover:text-accent transition-colors">Study in Australia</a></li>
              <li><a href="#" className="text-background/80 hover:text-accent transition-colors">Study in USA</a></li>
              <li><a href="#" className="text-background/80 hover:text-accent transition-colors">Study in UK</a></li>
              <li><a href="#" className="text-background/80 hover:text-accent transition-colors">Study in New Zealand</a></li>
              <li><a href="#" className="text-background/80 hover:text-accent transition-colors">IELTS Preparation</a></li>
              <li><a href="#" className="text-background/80 hover:text-accent transition-colors">PTE Preparation</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-accent">Our Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-background/80 hover:text-accent transition-colors">University Selection</a></li>
              <li><a href="#" className="text-background/80 hover:text-accent transition-colors">Application Assistance</a></li>
              <li><a href="#" className="text-background/80 hover:text-accent transition-colors">Visa Guidance</a></li>
              <li><a href="#" className="text-background/80 hover:text-accent transition-colors">Scholarship Assistance</a></li>
              <li><a href="#" className="text-background/80 hover:text-accent transition-colors">Pre-departure Briefing</a></li>
              <li><a href="#" className="text-background/80 hover:text-accent transition-colors">Post-arrival Support</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-accent">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="text-background/90">New Baneshwor, Kathmandu</p>
                  <p className="text-background/70 text-sm">Opposite of N.B Center</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <div>
                  <p className="text-background/90">015913936</p>
                  <p className="text-background/70 text-sm">9867905743</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <div>
                  <p className="text-background/90">info@careerconsult.com.np</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="text-background/90">Sun-Fri: 9:00 AM - 6:00 PM</p>
                  <p className="text-background/70 text-sm">Saturday: 9:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Bottom Section */}
        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Media */}
            <div>
              <h5 className="text-accent font-semibold mb-4">Follow Us</h5>
              <div className="flex gap-4">
                <a href="#" className="bg-background/10 hover:bg-accent hover:text-accent-foreground p-3 rounded-full transition-all duration-300">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="bg-background/10 hover:bg-accent hover:text-accent-foreground p-3 rounded-full transition-all duration-300">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="bg-background/10 hover:bg-accent hover:text-accent-foreground p-3 rounded-full transition-all duration-300">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="bg-background/10 hover:bg-accent hover:text-accent-foreground p-3 rounded-full transition-all duration-300">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Certifications & Badges */}
            <div className="text-center md:text-right">
              <div className="flex flex-wrap gap-4 justify-center md:justify-end mb-4">
                <div className="bg-accent/20 rounded-lg px-4 py-2">
                  <p className="text-accent font-semibold text-sm">100% Visa Success</p>
                </div>
                <div className="bg-accent/20 rounded-lg px-4 py-2">
                  <p className="text-accent font-semibold text-sm">ISO Certified</p>
                </div>
                <div className="bg-accent/20 rounded-lg px-4 py-2">
                  <p className="text-accent font-semibold text-sm">Government Registered</p>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center mt-8 pt-8 border-t border-background/20">
            <p className="text-background/70 text-sm">
              © 2024 Career Consult Education Pvt. Ltd. All rights reserved. 
              <span className="block md:inline md:ml-4 mt-2 md:mt-0">
                Trusted by 1000+ students since 2015 • Your pathway to global education
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;