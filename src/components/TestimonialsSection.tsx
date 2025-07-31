import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      destination: "University of Melbourne, Australia",
      course: "Master's in Engineering",
      rating: 5,
      text: "Career Consult made my dream of studying in Australia a reality. Their guidance through every step, from university selection to visa application, was exceptional. I'm now pursuing my Master's at Melbourne University with a 50% scholarship!",
      achievement: "50% Scholarship Recipient"
    },
    {
      name: "Rajesh Thapa",
      destination: "Harvard University, USA",
      course: "MBA Program",
      rating: 5,
      text: "I never thought I could get into an Ivy League university. The team at Career Consult believed in me and helped me craft the perfect application. Their IELTS coaching was also top-notch - scored 8.0 bands!",
      achievement: "IELTS 8.0 Bands"
    },
    {
      name: "Sneha Gurung",
      destination: "University of Oxford, UK",
      course: "Master's in Psychology",
      rating: 5,
      text: "The personalized counseling approach at Career Consult is what sets them apart. They understood my goals and matched me with the perfect university. Now I'm studying at Oxford - it feels like a dream come true!",
      achievement: "Oxford Graduate Student"
    },
    {
      name: "Amit Rai",
      destination: "University of Auckland, New Zealand",
      course: "Computer Science",
      rating: 5,
      text: "From day one, Career Consult was professional, supportive, and incredibly knowledgeable. They handled all my documentation and visa process seamlessly. I'm now working part-time while studying in Auckland!",
      achievement: "Part-time Work Rights"
    },
    {
      name: "Binita Khadka",
      destination: "University of Sydney, Australia",
      course: "Master's in Business",
      rating: 5,
      text: "The team's expertise in scholarship applications is amazing. They helped me secure a full tuition waiver for my Master's program. I highly recommend Career Consult to anyone planning to study abroad.",
      achievement: "Full Tuition Waiver"
    },
    {
      name: "Deepak Maharjan",
      destination: "University of Toronto, Canada",
      course: "Master's in Data Science",
      rating: 5,
      text: "Career Consult's PTE coaching was excellent. I scored 85+ in my first attempt. Their university application guidance was thorough and professional. Now I'm living my dream in Toronto!",
      achievement: "PTE 85+ Score"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What Our <span className="text-primary">Students Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our successful students have to say about their journey with Career Consult.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative overflow-hidden hover:shadow-xl transition-all duration-300 hover:translate-y-[-4px] border-2 border-border">
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 text-primary/20">
                  <Quote className="w-8 h-8" />
                </div>
                
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                
                {/* Testimonial Text */}
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                
                {/* Student Info */}
                <div className="flex items-start gap-4">
                  <Avatar className="w-12 h-12">
                    <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1">
                    <h4 className="font-semibold text-card-foreground text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-primary font-medium text-sm">
                      {testimonial.destination}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {testimonial.course}
                    </p>
                    <div className="mt-2 inline-block bg-success/10 text-success px-2 py-1 rounded-full text-xs font-medium">
                      {testimonial.achievement}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-card-foreground mb-4">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-muted-foreground text-lg mb-6">
              Join thousands of successful students who achieved their dreams with our expert guidance. 
              Your journey to international education starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-lg">
                Start Your Journey Today
              </button>
              <button className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300">
                View More Success Stories
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;