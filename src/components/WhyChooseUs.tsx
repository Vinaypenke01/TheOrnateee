import { HandHeart, Sparkles, Award } from "lucide-react";

const reasons = [
  { icon: HandHeart, title: "Handcrafted in Resin", desc: "Every piece is poured and polished by hand with premium epoxy resin" },
  { icon: Sparkles, title: "Real Flowers & Memories", desc: "We preserve real flowers, baby keepsakes, and meaningful tokens" },
  { icon: Award, title: "Lasts a Lifetime", desc: "Crystal-clear resin that never yellows — your memories stay perfect forever" },
];

const WhyChooseUs = () => (
  <section className="py-20 bg-soft-sage">
    <div className="container mx-auto px-4">
      <p className="font-script text-2xl text-rose-gold text-center mb-2">A gift beyond words</p>
      <h2 className="font-serif text-3xl md:text-4xl text-center text-foreground mb-12">Why Choose Us</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {reasons.map((r, i) => (
          <div key={i} className="bg-card p-8 rounded-2xl shadow-soft text-center">
            <r.icon size={36} className="mx-auto mb-4 text-primary" />
            <h3 className="font-serif text-xl text-foreground mb-2">{r.title}</h3>
            <p className="font-body text-sm text-muted-foreground">{r.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
