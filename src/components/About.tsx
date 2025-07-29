import { HoverCard, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Award, Clock, Target } from "lucide-react";

const stats = [
  { icon: Users, value: "50+", label: "Happy Clients" },
  { icon: Award, value: "150+", label: "Projects Completed" },
  { icon: Clock, value: "5+", label: "Years Experience" },
  { icon: Target, value: "98%", label: "Success Rate" }
];

const teamValues = [
  {
    title: "Innovation First",
    description: "We stay ahead of trends and use cutting-edge technologies to deliver future-ready solutions."
  },
  {
    title: "Client-Centric",
    description: "Your success is our success. We work closely with you throughout the entire development process."
  },
  {
    title: "Quality Assurance",
    description: "Every line of code is crafted with precision, tested thoroughly, and optimized for performance."
  },
  {
    title: "Continuous Support",
    description: "Our relationship doesn't end at launch. We provide ongoing support and maintenance."
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose <span className="gradient-text">DevCraft Studio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're a passionate team of designers and developers committed to creating exceptional digital experiences
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center group"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Team Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {teamValues.map((value, index) => (
            <HoverCard 
              key={index} 
              className="p-8 bg-card/50 backdrop-blur-sm"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold mb-4 gradient-text">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </CardContent>
            </HoverCard>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-primary rounded-2xl p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-accent opacity-10"></div>
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h3>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss your ideas and turn them into a stunning digital reality. 
              Get a free consultation and project quote today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="glass" size="lg">
                Schedule Free Call
              </Button>
              <Button 
                variant="ghost" 
                size="lg" 
                className="text-white border-white hover:bg-white/20"
              >
                View Our Process
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;