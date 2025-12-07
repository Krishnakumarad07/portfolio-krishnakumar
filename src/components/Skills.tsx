import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Wrench } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend Technologies",
      skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js"],
      color: "text-primary",
    },
    {
      icon: Database,
      title: "Programming & Databases",
      skills: ["PHP (Laravel)", "Java Programming", "MySQL (Basic)"],
      color: "text-accent",
    },
    {
      icon: Wrench,
      title: "Tools & Version Control",
      skills: ["Git", "GitHub", "Visual Studio Code"],
      color: "text-primary",
    },
  ];

  const softSkills = ["Teamwork", "Punctuality", "Communication", "Leadership"];

  return (
    <section id="skills" ref={ref} className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to build modern web applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <Card className="p-6 bg-card hover:shadow-lg hover:border-primary transition-all group">
                <div className="mb-4">
                  <category.icon className={`w-10 h-10 ${category.color} group-hover:scale-110 transition-transform`} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <Badge
                      key={idx}
                      variant="secondary"
                      className="bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Card className="p-6 sm:p-8 bg-card">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Soft Skills</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {softSkills.map((skill, idx) => (
                <Badge
                  key={idx}
                  variant="outline"
                  className="text-base px-4 py-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
