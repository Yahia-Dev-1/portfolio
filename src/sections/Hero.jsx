import { Button } from "@/components/Button";
import { asset } from "@/lib/assets";

import {
  ArrowRight,
  ChevronDown,
  Download,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const skills = [
  "Html",
  "Css",
   "Tailwindcss",
    "Bootstrap5",
  "JavaScript",
  "React",
  "python",
  "c++",
   "Automation",
    "N8N",
  "problem solving",
  "Datasdata structures",
      "Algorithms",
  "cyber security fundamentals",
  "mechatronics fundamentals",

];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
       
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 pt-24 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">

          {/* Left */}
          <div className="space-y-6 animate-fade-up scroll-reveal">

            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary animate-bounce-in scroll-reveal">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
SELF-TAUGHT DEVELOPER

              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-text-slide scroll-reveal scroll-text">
                BUILDING <span className="text-primary glow-text">IDEAS</span>
                <br />
             
                <span className="font-serif italic font-normal text-white">
                    INTO REAL PROJECTS.
                </span>
              </h1>

              <p className="text-lg text-muted-foreground max-w-lg animate-text-slide animation-delay-200 scroll-reveal scroll-text">
 Hi I’m Yahia khaled, a developer passionate about technology, problem-solving, and learning by building.              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button size="lg" className="hover-lift">
                Contact Me
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>

              <AnimatedBorderButton className="animate-scale-in animation-delay-400">
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </AnimatedBorderButton>
            </div>

            {/* Social */}
            <div className="flex items-center gap-4 scroll-reveal">
              <span className="text-sm text-muted-foreground">
                Follow me:
              </span>

              {[
                {
                  icon: FaGithub,
                  href: "https://github.com/Yahia-Dev-1",
                },
                {
                  icon: FaLinkedin,
                  href: "https://linkedin.com",
                },
                {
                  icon: FaTwitter,
                  href: "https://twitter.com",
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300 hover-lift"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

          </div>

          {/* Right */}
          <div className="relative animate-fade-in animation-delay-200 scroll-reveal-right">
            <div className="relative max-w-md mx-auto">

              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse" />

              <div className="relative glass rounded-3xl p-2 glow-border hover-lift">

                <img
                  src={asset("portofolio.jpeg")}
                  alt="Pedro Machado"
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                  style={{ objectFit: 'cover' }}
                />

                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>

                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3">
                  <div className="text-2xl font-bold text-primary">
                    SINCE 2021
                  </div>
                  <div className="text-xs color-muted-foreground">
                    Learning & Building
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
    {/* Skills Section */}
        <div className="mt-12 animate-fade-in animation-delay-600 scroll-reveal">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>
          <div className="relative overflow-hidden">
            <div
              className="absolute left-0 top-0 bottom-0 w-32
             bg-gradient-to-r from-background to-transparent z-10"
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-32
             bg-gradient-to-l from-background to-transparent z-10"
            />
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="flex-shrink-0 px-6 py-3">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};