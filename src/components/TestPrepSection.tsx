import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Users, Trophy, BookOpen, CheckCircle, Star } from "lucide-react";

const TestPrepSection = () => {
  const features = [
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "Expert Instructors",
      description: "Learn from certified trainers with 8+ band scores and years of teaching experience"
    },
    {
      icon: <Clock className="w-6 h-6 text-accent" />,
      title: "Flexible Timings",
      description: "Morning, evening, and weekend batches to fit your schedule perfectly"
    },
    {
      icon: <Trophy className="w-6 h-6 text-success" />,
      title: "High Success Rates",
      description: "92% students achieve their target scores in first attempt"
    },
    {
      icon: <BookOpen className="w-6 h-6 text-primary" />,
      title: "Personal Coaching",
      description: "Individual attention with customized study plans and one-on-one sessions"
    }
  ];

  const courses = [
    {
      name: "IELTS Preparation",
      description: "Comprehensive training for all four modules with proven strategies",
      duration: "6-8 weeks",
      batchSize: "8-12 students",
      features: [
        "Speaking practice with native speakers",
        "Weekly mock tests with detailed feedback",
        "Writing task correction and improvement",
        "Listening and reading technique mastery"
      ],
      price: "NPR 5,000",
      popular: true
    },
    {
      name: "PTE Academic",
      description: "Computer-based test preparation with AI-powered practice tools",
      duration: "4-6 weeks",
      batchSize: "6-10 students",
      features: [
        "AI-powered speaking practice",
        "Computer-based mock tests",
        "Integrated skills training",
        "Score prediction and analysis"
      ],
      price: "NPR 5,000",
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Master <span className="text-primary">IELTS & PTE</span> with Confidence
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Achieve your target scores with our proven test preparation programs. 
            Expert instructors, flexible schedules, and personalized coaching for guaranteed success.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-card rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-border">
              <div className="mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {courses.map((course, index) => (
            <Card key={index} className={`relative overflow-hidden ${course.popular ? 'ring-2 ring-primary' : ''} hover:shadow-xl transition-all duration-300 border-2 border-border`}>
              {course.popular && (
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}
              
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-card-foreground mb-2">
                  {course.name}
                </CardTitle>
                <p className="text-muted-foreground">
                  {course.description}
                </p>
              </CardHeader>
              
              <CardContent>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="text-sm text-muted-foreground">Duration</div>
                    <div className="font-semibold text-card-foreground">{course.duration}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Batch Size</div>
                    <div className="font-semibold text-card-foreground">{course.batchSize}</div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-card-foreground mb-3">What's Included:</h4>
                  <ul className="space-y-2">
                    {course.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-primary">{course.price}</div>
                    <div className="text-sm text-muted-foreground">Complete course</div>
                  </div>
                  <Button className={course.popular ? "bg-primary hover:bg-primary/90" : "bg-accent hover:bg-accent/90"}>
                    Enroll Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Success Stats */}
        <div className="bg-gradient-primary rounded-2xl p-8 text-primary-foreground text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Proven Track Record in Test Preparation
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-bold text-accent mb-2">92%</div>
              <div className="text-primary-foreground/90">First Attempt Success</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">7.5+</div>
              <div className="text-primary-foreground/90">Average IELTS Score</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">75+</div>
              <div className="text-primary-foreground/90">Average PTE Score</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">500+</div>
              <div className="text-primary-foreground/90">Students Trained</div>
            </div>
          </div>
          
          <div className="mt-8">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg font-semibold rounded-full">
              Book Free Demo Class
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestPrepSection;