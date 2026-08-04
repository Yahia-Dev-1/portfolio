import { ArrowUpRight } from "lucide-react";
import { asset } from "@/lib/assets";

const projects = [
  {
    title: "HTML Mastery Path",
    description:
      "An interactive learning platform designed to help beginners learn HTML through structured lessons, practical challenges, and interactive quizzes.",
    image: asset("html.jpeg"),
    tags: ["HTML5", "CSS3", "Education", "Responsive Design"],
    link: "https://html-amber-pi.vercel.app",
  },
  {
    title: "Yahia Store",
    description:
      "A modern e-commerce platform built with React and Supabase, featuring product browsing, search, authentication, and a practical shopping experience.",
    image: asset("e-commer.jpeg"),
    tags: ["React", "Supabase", "E-commerce", "Shopping Cart"],
    link: "https://e-commer-react-supabase.vercel.app",
  },
  {
    title: "Climate Change Awareness",
    description:
      "An educational platform focused on climate change, exploring its causes, global impact, and practical solutions through engaging content and interactive tools.",
    image: asset("Climate change.jpeg"),
    tags: ["Climate Action", "Education", "Interactive Tools", "Carbon Footprint"],
    link: "https://yahia-dev-1.github.io/Climate-change",
  },
  {
    title: "Calories Tracker",
    description:
      "A practical nutrition tracking application that helps users explore food, monitor daily calories and macronutrients, and save their favorite choices.",
    image: asset("caloris.jpeg"),
    tags: ["Web Development", "Nutrition", "Dark Mode", "Data Tracking"],
    link: "https://yahia-dev-1.github.io/Calories",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 sm:py-24 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mx-auto max-w-3xl mb-10 sm:mb-12 scroll-reveal">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
            Selected Projects
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground scroll-reveal">
            Things I've
            <span className="font-serif italic font-normal text-white">
              {" "}
              Built.
            </span>
          </h2>

          <p className="text-muted-foreground scroll-reveal">
            A collection of projects where I turned ideas into practical digital experiences while exploring different technologies and approaches.
          </p>
        </div>

        {/* Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, idx) => (
            <a
              key={idx}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group glass rounded-xl overflow-hidden hover-glow cursor-pointer block scroll-reveal ${idx % 2 === 0 ? 'scroll-reveal-left' : 'scroll-reveal-right'}`}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />

                {/* Hover Icons */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="p-3 rounded-full glass bg-primary/20">
                    <ArrowUpRight className="w-6 h-6 text-primary" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 space-y-2">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>

                <p className="text-muted-foreground text-xs line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-2.5 py-1 rounded-full bg-surface text-[10px] font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};