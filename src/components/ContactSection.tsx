import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, MessageCircle, Calendar } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get Your <span className="text-primary">Free Consultation</span> Today
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Take the first step towards your international education journey. 
            Our expert counselors are ready to guide you towards your dream university.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-2 border-border shadow-xl">
            <CardHeader className="bg-gradient-primary text-primary-foreground">
              <CardTitle className="text-2xl font-bold flex items-center gap-3">
                <MessageCircle className="w-6 h-6" />
                Book Your Free Consultation
              </CardTitle>
              <p className="text-primary-foreground/90">
                Fill out the form below and our expert counselor will contact you within 24 hours.
              </p>
            </CardHeader>
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Full Name *
                    </label>
                    <Input 
                      placeholder="Enter your full name"
                      className="border-2 border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Phone Number *
                    </label>
                    <Input 
                      placeholder="+977 9812345678"
                      className="border-2 border-border focus:border-primary"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">
                    Email Address *
                  </label>
                  <Input 
                    type="email"
                    placeholder="your.email@example.com"
                    className="border-2 border-border focus:border-primary"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Preferred Destination
                    </label>
                    <select className="w-full p-3 border-2 border-border rounded-md focus:border-primary focus:outline-none">
                      <option>Select destination</option>
                      <option>Australia</option>
                      <option>USA</option>
                      <option>UK</option>
                      <option>New Zealand</option>
                      <option>Not sure yet</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-card-foreground mb-2">
                      Study Level
                    </label>
                    <select className="w-full p-3 border-2 border-border rounded-md focus:border-primary focus:outline-none">
                      <option>Select level</option>
                      <option>Bachelor's Degree</option>
                      <option>Master's Degree</option>
                      <option>PhD</option>
                      <option>Diploma</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">
                    Message (Optional)
                  </label>
                  <Textarea 
                    placeholder="Tell us about your academic background, interests, or any specific questions..."
                    rows={4}
                    className="border-2 border-border focus:border-primary"
                  />
                </div>
                
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg font-semibold">
                  Get Free Consultation
                </Button>
                
                <p className="text-center text-muted-foreground text-sm">
                  By submitting this form, you agree to our Terms & Conditions and Privacy Policy.
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Office Information */}
            <Card className="border-2 border-border shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-card-foreground flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  Visit Our Office
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-semibold text-card-foreground">Career Consult Education</p>
                    <p className="text-muted-foreground">New Baneshwor, Kathmandu</p>
                    <p className="text-muted-foreground">Near Cosmos Bank, 2nd Floor</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-semibold text-card-foreground">+977-1-4782010</p>
                    <p className="text-muted-foreground">+977-9851234567</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-semibold text-card-foreground">info@careerconsult.com.np</p>
                    <p className="text-muted-foreground">counseling@careerconsult.com.np</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-semibold text-card-foreground">Office Hours</p>
                    <p className="text-muted-foreground">Sunday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-muted-foreground">Saturday: 9:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="border-2 border-border shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-card-foreground">
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full bg-success hover:bg-success/90 text-success-foreground justify-start" size="lg">
                  <Phone className="w-5 h-5 mr-3" />
                  Call Now for Immediate Assistance
                </Button>
                
                <Button variant="outline" className="w-full justify-start border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground" size="lg">
                  <Calendar className="w-5 h-5 mr-3" />
                  Schedule an Appointment
                </Button>
                
                <Button variant="outline" className="w-full justify-start border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground" size="lg">
                  <MessageCircle className="w-5 h-5 mr-3" />
                  Live Chat Support
                </Button>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <div className="bg-gradient-accent rounded-lg p-6 text-accent-foreground">
              <h3 className="text-lg font-bold mb-2">Emergency Student Support</h3>
              <p className="mb-3 text-accent-foreground/90">
                Need urgent assistance? Our emergency helpline is available 24/7 for current students.
              </p>
              <p className="font-semibold">Emergency Hotline: +977-9801234567</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;