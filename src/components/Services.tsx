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
            <div
              key={index}
              className="service-card glare-effect p-8 rounded-xl border border-border/20 backdrop-blur-sm animate-fade-in"
              style={{
                animationDelay: `${index * 0.15}s`,
                animationFillMode: 'both'
              }}
            >
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="service-icon w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mr-4 shadow-lg">
                    <service.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-foreground/90">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;