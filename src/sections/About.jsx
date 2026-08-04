import {
  RefreshCw,
  Lightbulb,
  Code2,
  TrendingUp
} from "lucide-react";
const highlights = [
  {
    icon: RefreshCw,
    title: "CONSISTENCY",
    description:
      "Staying committed to learning, building, and moving forward.",
  },
  {
    icon:Lightbulb ,
    title: "CURIOSITY",
    description:
      "Exploring new technologies and finding better ways to solve problems.",
  },
  {
    icon: Code2,
    title: "LEARNING BY DOING",
    description: "Turning what I learn into real projects and practical experiences.",
  },
  {
    icon: TrendingUp,
    title: "GROWTH",
    description:
      "Using every challenge and experience as a step toward becoming better.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-20 sm:py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Column */}
          <div className="space-y-6">
            <div className="scroll-reveal-left">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>
 
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-secondary-foreground scroll-reveal">
              From Curiosity
              <span className="font-serif italic font-normal text-white">
                {" "}
                to Creation.
              </span>
            </h2>

            <div className="space-y-6 text-muted-foreground">
              <p className="scroll-reveal">
There are moments that pass quietly, only for us to realize years later that they changed our lives completely. Since 2021, I have been on a self-taught journey that started with a simple decision to learn programming.
              </p>
              <p className="scroll-reveal">
I started coding at the age of 12 with Scratch, then gradually moved into web development and explored HTML, CSS, JavaScript, and React. Along the way, I expanded my interests into Python, C++, n8n, and computer science through CS50.
              </p>
              <p className="scroll-reveal">
What started as curiosity has grown into a genuine passion for technology, problem-solving, and building ideas into real projects. I continue to explore, create, and turn what I learn into practical experiences.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-pulse scroll-reveal-scale">
              <p className="text-lg font-medium italic text-foreground">
                "Success is the sum of small efforts, repeated day in and day out."
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-5">
            {highlights.map((item, idx) => (
              <div key={idx} className="glass p-5 rounded-2xl hover-glow scroll-reveal-scale group transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4 group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-300">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-secondary-foreground group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};