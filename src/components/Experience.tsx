import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-section-bg">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Work <span className="text-primary">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional journey and hands-on experience in web development
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Card className="p-6 sm:p-8 bg-card hover:shadow-lg transition-all relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-accent" />
            
            <div className="pl-6">
              <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">PHP Trainee</h3>
                  <p className="text-lg text-primary font-semibold">ARM Inotech, Madurai</p>
                </div>
                <Badge variant="secondary" className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  2025 - Present
                </Badge>
              </div>

              <div className="flex items-center gap-2 mb-4">
                <Briefcase className="w-5 h-5 text-muted-foreground" />
                <span className="text-muted-foreground">Full-time Position</span>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-4">
                Working with PHP, Laravel, and React.js on real-world applications and client projects. 
                Gaining hands-on experience in full-stack development, database management, and modern 
                web development practices.
              </p>

              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="border-primary text-primary">PHP</Badge>
                <Badge variant="outline" className="border-primary text-primary">Laravel</Badge>
                <Badge variant="outline" className="border-primary text-primary">React.js</Badge>
                <Badge variant="outline" className="border-primary text-primary">MySQL</Badge>
                <Badge variant="outline" className="border-primary text-primary">Client Projects</Badge>
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Card className="p-6 bg-primary/5 border-primary/20 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-foreground mb-2">Area of Interest</h3>
            <p className="text-muted-foreground">
              <strong className="text-primary">Frontend Development:</strong> Passionate about creating dynamic 
              user interfaces and enhancing user experience with React.js.
            </p>
            <p className="text-muted-foreground mt-2">
              <strong className="text-primary">Client-Facing Solutions:</strong> Eager to contribute to 
              client-facing applications that address real-world problems and enhance user engagement.
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
