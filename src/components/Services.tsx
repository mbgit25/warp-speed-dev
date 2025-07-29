import { HoverCard, CardContent } from "@/components/ui/card";
import { Code, Palette, Search, ShoppingCart, Settings, Smartphone } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Web Design",
    description: "Beautiful, user-centered designs that captivate and convert your visitors into customers.",
    features: ["UI/UX Design", "Responsive Design", "Brand Identity", "Prototyping"]
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Custom websites built with modern technologies for optimal performance and scalability.",
    features: ["Frontend Development", "Backend Development", "API Integration", "Database Design"]
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: "Complete online store solutions that drive sales and provide seamless shopping experiences.",
    features: ["Online Stores", "Payment Gateway", "Inventory Management", "Order Processing"]
  },
  {
    icon: Smartphone,
    title: "Mobile Optimization",
    description: "Ensure your website works perfectly across all devices and screen sizes.",
    features: ["Responsive Design", "Mobile-First", "Touch Optimization", "Performance Tuning"]
  },
  {
    icon: Search,
    title: "SEO & Performance",
    description: "Boost your search rankings and site speed for maximum visibility and user satisfaction.",
    features: ["Technical SEO", "Speed Optimization", "Analytics Setup", "Content Strategy"]
  },
  {
    icon: Settings,
    title: "Maintenance & Support",
    description: "Ongoing support to keep your website secure, updated, and running smoothly.",
    features: ["Regular Updates", "Security Monitoring", "Backup Solutions", "24/7 Support"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer comprehensive web development services to bring your digital vision to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <HoverCard 
              key={index} 
              className="p-8 bg-card/50 backdrop-blur-sm border-border/50"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </HoverCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;