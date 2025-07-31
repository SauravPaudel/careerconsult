import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, DollarSign, Clock, Trophy, Users, BookOpen } from "lucide-react";

const CountrySection = () => {
  const countries = [
    {
      name: "Australia",
      flag: "🇦🇺",
      title: "Study in the Land Down Under",
      description: "World-class education with excellent post-study work opportunities and a welcoming multicultural environment.",
      benefits: [
        "Post-Study Work Rights: 2-4 years",
        "World's top 8 universities (Group of Eight)",
        "Strong job market with $50,000+ starting salaries",
        "Beautiful cities: Sydney, Melbourne, Brisbane"
      ],
      highlights: [
        { icon: <Clock className="w-5 h-5" />, text: "2-4 Years Work Rights" },
        { icon: <DollarSign className="w-5 h-5" />, text: "High Earning Potential" },
        { icon: <Users className="w-5 h-5" />, text: "Multicultural Society" },
        { icon: <MapPin className="w-5 h-5" />, text: "Quality of Life #1" }
      ],
      color: "from-green-500 to-yellow-500"
    },
    {
      name: "USA",
      flag: "🇺🇸",
      title: "Pursue Excellence in America",
      description: "Home to the world's top universities with cutting-edge research facilities and unlimited career opportunities.",
      benefits: [
        "OPT: 1-3 years work authorization",
        "Ivy League and top-ranked universities",
        "Silicon Valley tech opportunities",
        "Diverse cities: New York, California, Boston"
      ],
      highlights: [
        { icon: <Trophy className="w-5 h-5" />, text: "World's Best Universities" },
        { icon: <BookOpen className="w-5 h-5" />, text: "Research Excellence" },
        { icon: <DollarSign className="w-5 h-5" />, text: "High Salaries" },
        { icon: <Users className="w-5 h-5" />, text: "Global Network" }
      ],
      color: "from-blue-600 to-red-500"
    },
    {
      name: "United Kingdom",
      flag: "🇬🇧",
      title: "Excellence with British Heritage",
      description: "Historic universities with world-renowned education quality and gateway to Europe.",
      benefits: [
        "Graduate Route: 2-3 years work visa",
        "Oxford, Cambridge & Russell Group unis",
        "Strong finance & business sectors",
        "Historic cities: London, Edinburgh, Manchester"
      ],
      highlights: [
        { icon: <Clock className="w-5 h-5" />, text: "Shorter Degree Duration" },
        { icon: <Trophy className="w-5 h-5" />, text: "Prestigious Universities" },
        { icon: <MapPin className="w-5 h-5" />, text: "Gateway to Europe" },
        { icon: <DollarSign className="w-5 h-5" />, text: "Strong Economy" }
      ],
      color: "from-blue-800 to-purple-600"
    },
    {
      name: "New Zealand",
      flag: "🇳🇿",
      title: "Innovation in Paradise",
      description: "High-quality education in a safe, beautiful country with excellent work-life balance.",
      benefits: [
        "Post-Study Work Visa: 1-3 years",
        "World-class universities with small class sizes",
        "Safe and peaceful environment",
        "Stunning cities: Auckland, Wellington, Christchurch"
      ],
      highlights: [
        { icon: <Users className="w-5 h-5" />, text: "Small Class Sizes" },
        { icon: <MapPin className="w-5 h-5" />, text: "Safe Environment" },
        { icon: <Clock className="w-5 h-5" />, text: "Work-Life Balance" },
        { icon: <BookOpen className="w-5 h-5" />, text: "Quality Education" }
      ],
      color: "from-green-600 to-blue-500"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Choose Your <span className="text-primary">Study Destination</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore world-class education opportunities across four premium destinations. 
            Each country offers unique advantages for your academic and career growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {countries.map((country, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:translate-y-[-4px] border-2 border-border">
              <CardHeader className={`bg-gradient-to-r ${country.color} text-white p-8`}>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">{country.flag}</span>
                  <CardTitle className="text-3xl font-bold">{country.name}</CardTitle>
                </div>
                <h3 className="text-xl font-semibold text-white/90">{country.title}</h3>
              </CardHeader>
              
              <CardContent className="p-8">
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                  {country.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-foreground mb-4">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {country.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {country.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-primary">
                      {highlight.icon}
                      <span className="text-sm font-medium">{highlight.text}</span>
                    </div>
                  ))}
                </div>
                
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Learn More About {country.name}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-card-foreground mb-4">
              Not Sure Which Country is Right for You?
            </h3>
            <p className="text-muted-foreground text-lg mb-6">
              Our expert counselors will help you choose the perfect destination based on your goals, budget, and preferences.
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg font-semibold rounded-full">
              Get Personalized Country Recommendation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountrySection;