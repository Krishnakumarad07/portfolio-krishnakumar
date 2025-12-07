import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-12 items-center">
          {/* ✅ LEFT CONTENT */}
          <div className="text-center lg:text-left ml-3">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight"
            >
              Hi, I'm <span className="text-primary text-3xl sm:text-4xl md:text-6xl">Krishna Kumar A D</span>
            </motion.h1>

            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Web Developer & Frontend Expertise
            </span>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground mb-8 leading-relaxed"
            >
              Passionate about building intuitive, user-friendly web
              applications with modern frontend technologies. Currently working
              as a PHP Trainee at ARM Inotech, specializing in React.js,
              Laravel, and full-stack development.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <Button
                onClick={() => scrollToSection("projects")}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                View Projects
              </Button>

              <a href="/KRISHNAKUMAR_RESUME.pdf" download>
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <Download className="w-5 h-5" />
                  Download Resume
                </Button>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex gap-6"
            >
              <a
                href="https://github.com/krishnakumarad07"
                target="_blank"
                className="text-muted-foreground hover:text-primary transition hover:scale-110"
              >
                <Github />
              </a>
              <a
                href="https://www.linkedin.com/in/krishna-kumar-a-d-a94744316/"
                target="_blank"
                className="text-muted-foreground hover:text-primary transition hover:scale-110"
              >
                <Linkedin />
              </a>
              <a
                href="mailto:krishnakumarad7@gmail.com"
                className="text-muted-foreground hover:text-primary transition hover:scale-110"
              >
                <Mail />
              </a>
            </motion.div>
          </div>

          {/* ✅ RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center lg:justify-end mr-3"
          >
            <img
              src="/profile.png"
              alt="Krishna Kumar"
              className="w-full max-w-md lg:max-w-95 h-65 object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
