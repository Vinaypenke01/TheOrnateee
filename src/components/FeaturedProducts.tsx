import { products } from "@/data/products";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

const FeaturedProducts = () => (
  <section className="py-20">
    <div className="container mx-auto px-4">
      <p className="font-script text-2xl text-rose-gold text-center mb-2">Crafted with love</p>
      <h2 className="font-serif text-3xl md:text-4xl text-center text-foreground mb-12">Featured Keepsakes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.slice(0, 6).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="text-center mt-12">
        <Link
          to="/products"
          className="inline-block border-2 border-primary text-primary font-body text-sm tracking-widest uppercase px-8 py-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        >
          View Full Collection
        </Link>
      </div>
    </div>
  </section>
);

export default FeaturedProducts;
