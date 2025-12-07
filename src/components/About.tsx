import { Card } from "@/components/ui/card";
import { Code2, Lightbulb, Users, Zap } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable and efficient code following best practices",
    },
    {
      icon: Zap,
      title: "Fast Learner",
      description: "Quick to adapt to new technologies and development methodologies",
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Strong collaboration and communication skills in agile environments",
    },
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description: "Analytical thinking to solve complex technical challenges",
    },
  ];

  return (
    <section id="about" ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-section-bg">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Highly motivated developer with a strong foundation in frontend technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-6 sm:p-8 bg-card hover:shadow-lg transition-all h-auto">
              <h3 className="text-2xl font-bold text-foreground mb-4">Career Objective</h3>
              <p className="text-muted-foreground leading-relaxed">
                Highly motivated Junior Developer with a strong foundation in frontend technologies such as 
                React.js, HTML, CSS and JavaScript. Passionate about building intuitive, user-friendly web 
                applications. Eager to contribute my skills and grow as a part of a dynamic team, with a focus 
                on problem-solving, system optimization, and collaborative project development.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="p-6 sm:p-8 bg-card hover:shadow-lg transition-all h-">
              <h3 className="text-2xl font-bold text-foreground mb-4">Education</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground">Master of Computer Application</h4>
                  <p className="text-sm text-muted-foreground">Madurai Kamarajar College, Madurai</p>
                  <p className="text-sm text-muted-foreground">2025-2027 (Pursuing)</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">B.Sc Information Technology</h4>
                  <p className="text-sm text-muted-foreground">Thiagarajar College, Madurai</p>
                  <p className="text-sm text-muted-foreground">2022-2025 | Percentage: 74.7%</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
            >
              <Card className="p-6 bg-card hover:shadow-lg hover:border-primary transition-all group">
                <div className="mb-4">
                  <item.icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground h-11">{item.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
