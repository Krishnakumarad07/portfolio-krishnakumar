import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-8 px-4 sm:px-6 lg:px-7">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold mb-1">Krishna Kumar A D</p>
            <p className="text-sm text-background/80">Web Developer & Frontend Expertise</p>
          </div>

          <div className="flex gap-6">
            <a
              href="https://github.com/krishnakumarad07"
              target="_blank"
              rel="noopener noreferrer"
              className="text-background/80 hover:text-background transition-colors hover:scale-110 transition-transform"
              aria-label="GitHub Profile"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/krishna-kumar-a-d-a94744316"
              target="_blank"
              rel="noopener noreferrer"
              className="text-background/80 hover:text-background transition-colors hover:scale-110 transition-transform"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:krishnakumarad7@gmail.com"
              className="text-background/80 hover:text-background transition-colors hover:scale-110 transition-transform"
              aria-label="Email Contact"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-background/20 text-center">
          <p className="text-sm text-background/80">
            © {currentYear} Krishna Kumar A D. Built with React & TypeScript.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
