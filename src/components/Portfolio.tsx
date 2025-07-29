import { HoverCard, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import ecommerceProject from "@/assets/project-ecommerce.jpg";
import corporateProject from "@/assets/project-corporate.jpg";
import portfolioProject from "@/assets/project-portfolio.jpg";

const projects = [
  {
    title: "E-commerce Platform",
    category: "E-commerce",
    description: "A modern online store with advanced features including inventory management, payment processing, and analytics dashboard.",
    image: ecommerceProject,
    tech: ["React", "Node.js", "Stripe", "MongoDB"],
    features: ["Payment Gateway", "Admin Dashboard", "Real-time Analytics", "Mobile Responsive"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Corporate Website",
    category: "Business",
    description: "Professional corporate website with CMS integration, SEO optimization, and lead generation features.",
    image: corporateProject,
    tech: ["Next.js", "TypeScript", "Tailwind", "Sanity CMS"],
    features: ["CMS Integration", "SEO Optimized", "Contact Forms", "Multi-language"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Creative Portfolio",
    category: "Portfolio",
    description: "Stunning portfolio website for a creative agency featuring interactive galleries and smooth animations.",
    image: portfolioProject,
    tech: ["React", "Three.js", "GSAP", "Firebase"],
    features: ["3D Animations", "Interactive Gallery", "Contact Integration", "Performance Optimized"],
    liveUrl: "#",
    githubUrl: "#"
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our recent projects and see how we transform ideas into exceptional digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <HoverCard 
              key={index} 
              className="overflow-hidden bg-card/80 backdrop-blur-sm"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <ul className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button variant="glow" size="sm" className="flex-1">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button variant="outline" size="sm">
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </HoverCard>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;