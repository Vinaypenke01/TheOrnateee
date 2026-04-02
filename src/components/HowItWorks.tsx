import { Search, Palette, MessageCircle } from "lucide-react";

const steps = [
  { icon: Search, title: "Browse", desc: "Explore our handcrafted collection of memory gifts" },
  { icon: Palette, title: "Customize", desc: "Add your personal touch — messages, names, and more" },
  { icon: MessageCircle, title: "Order on WhatsApp", desc: "Place your order directly via WhatsApp — simple and personal" },
];

const HowItWorks = () => (
  <section className="py-20">
    <div className="container mx-auto px-4">
      <p className="font-script text-2xl text-rose-gold text-center mb-2">Simple & personal</p>
      <h2 className="font-serif text-3xl md:text-4xl text-center text-foreground mb-12">How It Works</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, i) => (
          <div key={i} className="text-center group">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-blush flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <step.icon size={28} className="text-primary" />
            </div>
            <h3 className="font-serif text-xl text-foreground mb-2">{step.title}</h3>
            <p className="font-body text-sm text-muted-foreground">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
