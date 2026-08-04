import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "yahia1khaled2@gmail.com",
    href: "mailto:yahia1khaled2@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+20 127 344 5173",
    href: "tel:+201273445173",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Egypt",
    href: "#contact",
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-20 sm:py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 scroll-reveal">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
            Let's Connect
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground scroll-reveal">
            Have an idea?{" "}
            <span className="font-serif italic font-normal text-white">
              Let's build it.
            </span>
          </h2>
          <p className="text-muted-foreground scroll-reveal">
            Whether you have a project in mind, an opportunity, or simply want to connect, I'd be happy to hear from you.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Info */}
          <div className="scroll-reveal-scale">
            <div className="glass rounded-3xl p-7 hover-glow glow-pulse">
              <h3 className="text-xl font-semibold mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className={`flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors group scroll-reveal ${i % 2 === 0 ? 'scroll-reveal-left' : 'scroll-reveal-right'}`}
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">
                        {item.label}
                      </div>
                      <div className="font-medium">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};