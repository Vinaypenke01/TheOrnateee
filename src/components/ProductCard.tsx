import { Product } from "@/data/products";
import { Link } from "react-router-dom";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => (
  <Link
    to={`/product/${product.id}`}
    className="group block bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-1"
  >
    <div className="aspect-square overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        loading="lazy"
        width={800}
        height={800}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
      />
    </div>
    <div className="p-5">
      <p className="font-body text-xs text-muted-foreground tracking-widest uppercase mb-1">{product.category}</p>
      <h3 className="font-serif text-lg text-foreground mb-1">{product.name}</h3>
      <p className="font-body text-sm text-muted-foreground leading-relaxed mb-3 line-clamp-2">{product.description}</p>
      <div className="flex items-center justify-between">
        <span className="font-serif text-lg text-primary">₹{product.price}</span>
        <span className="font-body text-xs text-primary/70 tracking-wide group-hover:text-primary transition-colors">View Details →</span>
      </div>
    </div>
  </Link>
);

export default ProductCard;
