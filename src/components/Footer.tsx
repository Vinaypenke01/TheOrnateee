import { Heart, Instagram, MessageCircle } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground py-16">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-10 mb-10">
        <div>
          <h3 className="font-script text-3xl mb-3">Gnyapakam</h3>
          <p className="font-body text-primary-foreground/70 text-sm leading-relaxed">
            Preserving your most precious memories through handcrafted gifts made with love and intention.
          </p>
        </div>
        <div>
          <h4 className="font-serif text-lg mb-3">Quick Links</h4>
          <ul className="space-y-2 font-body text-sm text-primary-foreground/70">
            <li><a href="/" className="hover:text-primary-foreground transition-colors">Home</a></li>
            <li><a href="/products" className="hover:text-primary-foreground transition-colors">Collection</a></li>
            <li><a href="/cart" className="hover:text-primary-foreground transition-colors">Cart</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-serif text-lg mb-3">Connect With Us</h4>
          <div className="flex gap-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
              <Instagram size={18} />
            </a>
            <a href="https://wa.me/919059411010" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
              <MessageCircle size={18} />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 pt-6 text-center font-body text-sm text-primary-foreground/50">
        <p className="flex items-center justify-center gap-1">Made with <Heart size={14} className="text-accent" /> by Gnyapakam</p>
      </div>
    </div>
  </footer>
);

export default Footer;
