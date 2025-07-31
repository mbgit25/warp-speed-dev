import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechStart Inc.",
    content: "DevCraft Studio delivered an exceptional website that perfectly captures our brand. The team's attention to detail and technical expertise exceeded our expectations.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616c79e6bbc?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Founder",
    company: "GreenEco Solutions",
    content: "Working with DevCraft was a game-changer for our business. They transformed our outdated website into a modern, responsive platform.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Marketing Director",
    company: "Fashion Forward",
    content: "The DevCraft team understood our vision perfectly and brought it to life with stunning design and flawless functionality.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Product Manager",
    company: "FinTech Pro",
    content: "Impressive work from start to finish. The team's expertise in modern web technologies resulted in a platform we absolutely love.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 5,
    name: "Lisa Wang",
    role: "Operations Director",
    company: "HealthCare Plus",
    content: "DevCraft Studio doesn't just build websites, they create digital experiences. Their strategic approach helped us reach new customers.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 6,
    name: "Alex Kim",
    role: "CTO",
    company: "StartupFlow",
    content: "The technical excellence and innovative solutions provided by DevCraft exceeded all our expectations for our web platform.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face"
  }
];

// Split testimonials into 3 rows
const row1 = testimonials.slice(0, 2);
const row2 = testimonials.slice(2, 4);
const row3 = testimonials.slice(4, 6);

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
  <Card className="flex-shrink-0 w-80 p-6 mx-4 bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 group">
    <div className="flex flex-col h-full">
      {/* Rating */}
      <div className="flex mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>

      {/* Content */}
      <blockquote className="text-muted-foreground leading-relaxed mb-6 flex-grow text-sm">
        "{testimonial.content}"
      </blockquote>

      {/* Client Info */}
      <div className="flex items-center">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-10 h-10 rounded-full object-cover mr-3 ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300"
        />
        <div>
          <div className="font-semibold text-foreground text-sm">{testimonial.name}</div>
          <div className="text-xs text-muted-foreground">
            {testimonial.role} at {testimonial.company}
          </div>
        </div>
      </div>
    </div>
  </Card>
);

const TestimonialRow = ({ 
  testimonials, 
  direction, 
  speed 
}: { 
  testimonials: typeof row1, 
  direction: 'left' | 'right', 
  speed: number 
}) => {
  // Create duplicated array for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];
  
  return (
    <div className="relative overflow-hidden py-4">
      <div 
        className={`flex ${direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right'}`}
        style={{
          animationDuration: `${speed}s`,
          width: `${duplicatedTestimonials.length * 320}px`
        }}
      >
        {duplicatedTestimonials.map((testimonial, index) => (
          <TestimonialCard key={`${testimonial.id}-${index}`} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="py-20 bg-background/50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        <div className="space-y-8">
          {/* Row 1 - Moving Right */}
          <TestimonialRow testimonials={row1} direction="right" speed={20} />
          
          {/* Row 2 - Moving Left (Faster) */}
          <TestimonialRow testimonials={row2} direction="left" speed={15} />
          
          {/* Row 3 - Moving Right */}
          <TestimonialRow testimonials={row3} direction="right" speed={18} />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">500+</div>
            <div className="text-muted-foreground">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">4.9★</div>
            <div className="text-muted-foreground">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">99%</div>
            <div className="text-muted-foreground">Project Success</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">24h</div>
            <div className="text-muted-foreground">Response Time</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;