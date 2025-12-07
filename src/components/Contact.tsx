import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "krishnakumarad7@gmail.com",
      link: "mailto:krishnakumarad7@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 96290 77794",
      link: "tel:+919629077794",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Madurai, Tamil Nadu",
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      link: "https://github.com/krishnakumarad07",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/krishna-kumar-a-d-a94744316",
    },
  ];

  return (
    <section id="contact" ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-section-bg">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Feel free to reach out for opportunities, collaborations, or just to say hello!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 place-items-center md:place-items-stretch">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="p-8 bg-card hover:shadow-lg transition-all">
                <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                        {item.link ? (
                          <a
                            href={item.link}
                            className="text-foreground hover:text-primary transition-colors font-medium"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-foreground font-medium">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="p-8 bg-card hover:shadow-lg transition-all">
                <h3 className="text-2xl font-bold text-foreground mb-6">Connect With Me</h3>
                <p className="text-muted-foreground mb-6">
                  Let's connect on social media or check out my code repositories!
                </p>
                <div className="space-y-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button
                        variant="outline"
                        className="w-full justify-start gap-3 border-primary/50 hover:bg-primary hover:text-primary-foreground hover:border-primary"
                      >
                        <social.icon className="w-5 h-5" />
                        {social.label}
                      </Button>
                    </a>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Card className="p-8 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">Looking for a Developer?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                I'm currently seeking opportunities as a Technical Support Engineer or Developer. 
                Let's discuss how I can contribute to your team!
              </p>
              <a href="mailto:krishnakumarad7@gmail.com">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                  <Mail className="w-5 h-5" />
                  Send Me an Email
                </Button>
              </a>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
