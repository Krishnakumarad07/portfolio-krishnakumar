import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const mainProjects = [
    {
      title: "Recruit - Job Portal Platform",
      description:
        "A recruitment platform designed to simplify the hiring process by seamlessly connecting employers with qualified candidates through an intuitive, user-friendly interface.",
      technologies: ["React.js", "node.js", "MongoDB", "Express.js"],
      github: "https://github.com/krishnakumarad07/recruit",
      featured: true,
    },
    {
      title: "MLM Platform (Multi-Model)",
      description:
        "Designed and developed a multi-level marketing system supporting three commission structures (Unilevel/Binary/Matrix). ",
      technologies: ["Laravel", "Blade", "MySQL", "Complex Logic"],
      github: "https://github.com/krishnakumarad07/Unilevel_mlm",
      featured: true,
    },
    {
      title: "To-Do List Application",
      description:
        "A dynamic task manager with user authentication, task CRUD operations, and real-time updates. Full-stack application demonstrating complete development workflow.",
      technologies: ["React.js", "Laravel API", "MySQL", "REST API"],
      github: "https://github.com/krishnakumarad07/todo_list-react-laravel",
      featured: false,
    },
    {
      title: "Weather App",
      description:
        "Simple weather dashboard fetching real-time data via API. Fully responsive with clean UI demonstrating API integration and async JavaScript.",
      technologies: ["HTML", "CSS", "JavaScript", "Fetch API"],
      github: "https://github.com/krishnakumarad07/Weather_app",
      featured: false,
    },
  ];

  const miniProjects = [
    {
      title: "Text-to-Voice Converter",
      description: "Reads typed text aloud using JavaScript Speech API",
    },
    {
      title: "Photo Gallery",
      description: "Responsive gallery with hover effects for easy browsing",
    },
    {
      title: "Interactive To-Do App",
      description: "Add, delete, complete tasks with responsive design",
    },
  ];

  return (
    <section id="projects" ref={ref} className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my development work and practical implementations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {mainProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <Card
                className={`p-6 sm:p-8 bg-card hover:shadow-lg transition-all group ${
                  project.featured ? "border-primary/50" : ""
                }`}
              >
                {project.featured && (
                  <Badge className="mb-4 bg-primary text-primary-foreground">
                    Featured Project
                  </Badge>
                )}

                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <Badge
                      key={idx}
                      variant="secondary"
                      className="bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button
                      variant="outline"
                      className="w-full gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </Button>
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12"
        >
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Mini Projects
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {miniProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.9 }
                }
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
              >
                <Card className="p-6 bg-card hover:shadow-lg hover:border-primary transition-all">
                  <h4 className="font-semibold text-foreground mb-2">
                    {project.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {project.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
