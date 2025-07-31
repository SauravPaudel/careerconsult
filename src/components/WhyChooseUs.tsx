import { CheckCircle, Users, Award, HeartHandshake, Globe, BookOpen } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <CheckCircle className="w-8 h-8 text-success" />,
      title: "100% Visa Success Rate",
      description: "Our proven track record speaks for itself. Every student we guide gets their visa approved."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Personalized Counseling",
      description: "One-on-one guidance tailored to your academic background, interests, and career goals."
    },
    {
      icon: <Award className="w-8 h-8 text-accent" />,
      title: "Premium University Partnerships",
      description: "Direct partnerships with top-ranked universities ensuring faster admissions and scholarships."
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-primary" />,
      title: "End-to-End Support",
      description: "From course selection to visa approval to post-arrival assistance - we're with you every step."
    },
    {
      icon: <Globe className="w-8 h-8 text-success" />,
      title: "Multi-Country Expertise",
      description: "Specialized knowledge of education systems in Australia, USA, UK, and New Zealand."
    },
    {
      icon: <BookOpen className="w-8 h-8 text-accent" />,
      title: "Test Prep Excellence",
      description: "Expert IELTS & PTE coaching with proven strategies and high success rates."
    }
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose <span className="text-primary">Career Consult</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            With 9+ years of experience and a 100% success rate, we're Nepal's most trusted education consultancy. 
            Here's what makes us different:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-4px] border border-border"
            >
              <div className="mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-gradient-primary rounded-2xl p-8 text-primary-foreground max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Trusted by 1000+ Students Since 2015
            </h3>
            <p className="text-lg text-primary-foreground/90 mb-6">
              Join thousands of successful students who achieved their dreams with our expert guidance.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-accent">98%</div>
                <div className="text-sm text-primary-foreground/80">Student Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">2-4 weeks</div>
                <div className="text-sm text-primary-foreground/80">Average Processing</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">$2M+</div>
                <div className="text-sm text-primary-foreground/80">Scholarships Secured</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;