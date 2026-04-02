import { Link } from "react-router-dom";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

const Navbar = () => {
  const { totalItems } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="font-script text-3xl text-primary tracking-wide">
          Gnyapakam
        </Link>

        <div className="hidden md:flex items-center gap-8 font-body text-sm tracking-wide">
          <Link to="/" className="text-foreground/70 hover:text-primary transition-colors">Home</Link>
          <Link to="/products" className="text-foreground/70 hover:text-primary transition-colors">Collection</Link>
          <Link to="/cart" className="relative text-foreground/70 hover:text-primary transition-colors flex items-center gap-1">
            <ShoppingBag size={18} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-3 w-5 h-5 rounded-full bg-accent text-accent-foreground text-xs flex items-center justify-center font-body">
                {totalItems}
              </span>
            )}
          </Link>
        </div>

        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-foreground">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-card border-b border-border px-4 pb-4 flex flex-col gap-3 font-body text-sm animate-fade-up">
          <Link to="/" onClick={() => setMobileOpen(false)} className="text-foreground/70 hover:text-primary py-2">Home</Link>
          <Link to="/products" onClick={() => setMobileOpen(false)} className="text-foreground/70 hover:text-primary py-2">Collection</Link>
          <Link to="/cart" onClick={() => setMobileOpen(false)} className="text-foreground/70 hover:text-primary py-2 flex items-center gap-2">
            <ShoppingBag size={18} /> Cart {totalItems > 0 && `(${totalItems})`}
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
