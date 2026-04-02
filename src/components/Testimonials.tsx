import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya S.",
    text: "I sent my wedding bouquet to them and got back the most stunning resin block. It sits on our mantel and every guest asks about it. Absolutely magical!",
    rating: 5,
  },
  {
    name: "Rahul M.",
    text: "Ordered a Rose Dome for our anniversary. My wife couldn't stop staring at it — a single rose, frozen in time. Worth every rupee.",
    rating: 5,
  },
  {
    name: "Anjali K.",
    text: "The baby prints resin block for my newborn is something I'll cherish forever. Those tiny hands and feet, preserved so beautifully with gold flakes.",
    rating: 5,
  },
];

const Testimonials = () => (
  <section className="py-20 bg-warm-cream">
    <div className="container mx-auto px-4">
      <p className="font-script text-2xl text-rose-gold text-center mb-2">Words from the heart</p>
      <h2 className="font-serif text-3xl md:text-4xl text-center text-foreground mb-12">What Our Customers Say</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-card p-8 rounded-2xl shadow-soft">
            <div className="flex gap-1 mb-4">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} size={16} className="fill-rose-gold text-rose-gold" />
              ))}
            </div>
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4 italic">"{t.text}"</p>
            <p className="font-serif text-sm text-foreground">{t.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
