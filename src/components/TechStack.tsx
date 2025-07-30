import { GlassCard } from "@/components/ui/card";
import { 
  ReactIcon, 
  NextIcon, 
  TypeScriptIcon, 
  TailwindIcon, 
  NodeIcon, 
  MongoIcon, 
  FirebaseIcon, 
  VercelIcon 
} from "@/components/TechIcons";

const technologies = [
  { name: "React", icon: ReactIcon, description: "Frontend Library", color: "text-blue-400" },
  { name: "Next.js", icon: NextIcon, description: "React Framework", color: "text-white" },
  { name: "TypeScript", icon: TypeScriptIcon, description: "Type Safety", color: "text-blue-600" },
  { name: "Tailwind CSS", icon: TailwindIcon, description: "Styling", color: "text-teal-400" },
  { name: "Node.js", icon: NodeIcon, description: "Backend Runtime", color: "text-green-500" },
  { name: "MongoDB", icon: MongoIcon, description: "Database", color: "text-green-600" },
  { name: "Firebase", icon: FirebaseIcon, description: "Cloud Platform", color: "text-orange-500" },
  { name: "Vercel", icon: VercelIcon, description: "Deployment", color: "text-white" }
];

const TechStack = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We use cutting-edge technologies to build fast, scalable, and maintainable solutions
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {technologies.map((tech, index) => {
            const IconComponent = tech.icon;
            return (
              <GlassCard 
                key={index}
                className="p-6 text-center hover:bg-white/10 transition-all duration-300 cursor-pointer group"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className={`w-12 h-12 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 ${tech.color}`}>
                  <IconComponent />
                </div>
                <h3 className="font-semibold text-sm mb-1">{tech.name}</h3>
                <p className="text-xs text-muted-foreground">{tech.description}</p>
              </GlassCard>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center p-1 bg-gradient-primary rounded-full">
            <div className="bg-background rounded-full px-6 py-3">
              <span className="text-sm font-medium">
                Always exploring new technologies to deliver the best solutions
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;