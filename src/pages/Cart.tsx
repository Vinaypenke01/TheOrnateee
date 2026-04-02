import { useCart } from "@/context/CartContext";
import { Link } from "react-router-dom";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";

const Cart = () => {
  const { items, updateQuantity, removeFromCart, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-6">
        <ShoppingBag size={48} className="text-muted-foreground/30" />
        <p className="font-serif text-2xl text-foreground">Your cart is empty</p>
        <p className="font-body text-muted-foreground">Start filling it with memories</p>
        <Link to="/products" className="gradient-accent text-primary-foreground font-body text-sm tracking-widest uppercase px-8 py-3 rounded-full">
          Explore Collection
        </Link>
      </div>
    );
  }

  const buildWhatsAppMessage = () => {
    let msg = "Hello, I want to order:\n\n";
    items.forEach((item) => {
      msg += `Product: ${item.product.name}\n`;
      if (item.customization?.message) msg += `Message: ${item.customization.message}\n`;
      if (item.customization?.senderName) msg += `From: ${item.customization.senderName}\n`;
      if (item.customization?.receiverName) msg += `To: ${item.customization.receiverName}\n`;
      
      msg += `Quantity: ${item.quantity}\n`;
      msg += `Price: ₹${item.product.price * item.quantity}\n\n`;
    });
    msg += `Total Price: ₹${totalPrice}\n\nMy Name:\nMy Address:`;
    return encodeURIComponent(msg);
  };

  return (
    <div className="py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="font-serif text-3xl md:text-4xl text-foreground text-center mb-10">Your Cart</h1>

        <div className="space-y-6 mb-10">
          {items.map((item) => (
            <div key={item.product.id} className="bg-card rounded-2xl shadow-soft p-5 flex gap-5">
              <img src={item.product.image} alt={item.product.name} className="w-24 h-24 rounded-xl object-cover" loading="lazy" width={96} height={96} />
              <div className="flex-1 min-w-0">
                <h3 className="font-serif text-lg text-foreground">{item.product.name}</h3>
                {item.customization?.message && (
                  <p className="font-body text-xs text-muted-foreground truncate">"{item.customization.message}"</p>
                )}
                <p className="font-serif text-primary mt-1">₹{item.product.price * item.quantity}</p>
                <div className="flex items-center gap-3 mt-3">
                  <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors">
                    <Minus size={14} />
                  </button>
                  <span className="font-body text-sm">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors">
                    <Plus size={14} />
                  </button>
                  <button onClick={() => removeFromCart(item.product.id)} className="ml-auto text-destructive/60 hover:text-destructive transition-colors">
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-card rounded-2xl shadow-soft p-6">
          <div className="flex justify-between items-center mb-6">
            <span className="font-serif text-xl text-foreground">Total</span>
            <span className="font-serif text-2xl text-primary">₹{totalPrice}</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link to="/products" className="flex-1 text-center border-2 border-primary text-primary font-body text-sm tracking-widest uppercase px-6 py-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-all">
              Continue Shopping
            </Link>
            <a
              href={`https://wa.me/919059411010?text=${buildWhatsAppMessage()}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center gradient-accent text-primary-foreground font-body text-sm tracking-widest uppercase px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
            >
              Order via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
