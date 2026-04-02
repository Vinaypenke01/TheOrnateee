import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { ArrowLeft, ShoppingBag, Check } from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);
  const [message, setMessage] = useState("");
  const [senderName, setSenderName] = useState("");
  const [receiverName, setReceiverName] = useState("");
  

  if (!product) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <p className="font-body text-muted-foreground">Product not found.</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      product,
      quantity: 1,
      customization: {
        message: message || undefined,
        senderName: senderName || undefined,
        receiverName: receiverName || undefined,
        
      },
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <Link to="/products" className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
          <ArrowLeft size={16} /> Back to Collection
        </Link>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="rounded-2xl overflow-hidden shadow-card">
            <img src={product.image} alt={product.name} className="w-full aspect-square object-cover" width={800} height={800} />
          </div>

          <div className="flex flex-col justify-center">
            <p className="font-body text-xs text-muted-foreground tracking-widest uppercase mb-2">{product.category}</p>
            <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-3">{product.name}</h1>
            <p className="font-serif text-2xl text-primary mb-6">₹{product.price}</p>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">{product.longDescription}</p>

            <div className="space-y-5 mb-8">


              {product.hasMessageInput && (
                <div>
                  <label className="font-body text-sm text-foreground block mb-1">Your Message</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write your heartfelt message here..."
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-card font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow resize-none"
                  />
                </div>
              )}

              {product.hasNameFields && (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="font-body text-sm text-foreground block mb-1">From</label>
                    <input
                      type="text"
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      placeholder="Sender's name"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-card font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
                    />
                  </div>
                  <div>
                    <label className="font-body text-sm text-foreground block mb-1">To</label>
                    <input
                      type="text"
                      value={receiverName}
                      onChange={(e) => setReceiverName(e.target.value)}
                      placeholder="Receiver's name"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-card font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
                    />
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={handleAddToCart}
              className="gradient-accent text-primary-foreground font-body text-sm tracking-widest uppercase px-8 py-4 rounded-full hover:opacity-90 transition-opacity shadow-elevated flex items-center justify-center gap-2"
            >
              {added ? <><Check size={18} /> Added to Cart</> : <><ShoppingBag size={18} /> Add to Cart</>}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
