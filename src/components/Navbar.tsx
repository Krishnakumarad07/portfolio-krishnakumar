import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-xl sm:text-2xl font-bold text-foreground hover:text-primary transition-colors"
          >
            Portfolio<span className="text-primary">.</span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Contact
            </button>
            <a href="/KRISHNAKUMAR_RESUME.pdf" download>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                <Download className="w-4 h-4" />
                Resume
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground hover:text-primary transition-colors p-2"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                Contact
              </button>
              <a href="/KRISHNAKUMAR_RESUME.pdf" download className="block">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                  <Download className="w-4 h-4" />
                  Download Resume
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
