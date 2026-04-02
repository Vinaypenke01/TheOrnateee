import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section className="relative min-h-[85vh] flex items-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroBg} alt="Handcrafted resin gifts" className="w-full h-full object-cover" width={1920} height={1024} />
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/40" />
    </div>
    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-2xl animate-fade-up">
        <p className="font-script text-2xl md:text-3xl text-rose-gold mb-4">Preserved in resin, forever in heart</p>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-foreground leading-tight mb-6">
          Preserving Your Memories, Beautifully 💌
        </h1>
        <p className="font-body text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
          Real flowers, baby keepsakes & floral jewellery — handcrafted in crystal-clear resin
        </p>
        <Link
          to="/products"
          className="inline-block gradient-accent text-primary-foreground font-body text-sm tracking-widest uppercase px-8 py-4 rounded-full hover:opacity-90 transition-opacity shadow-elevated"
        >
          Explore Collection
        </Link>
      </div>
    </div>
  </section>
);

export default HeroSection;
