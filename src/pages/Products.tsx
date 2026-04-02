import { useState, useMemo } from "react";
import { useProducts } from "@/hooks/useProducts";
import { categories } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { Search } from "lucide-react";

const Products = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const { products, loading } = useProducts();

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchesCategory = activeCategory === "All" || p.category === activeCategory;
      const matchesSearch =
        !search ||
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory, products]);

  if (loading) {
    return (
      <div className="py-24 text-center">
        <p className="font-body text-muted-foreground animate-pulse">Loading our collection...</p>
      </div>
    );
  }

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <p className="font-script text-2xl text-rose-gold text-center mb-2">Explore</p>
        <h1 className="font-serif text-3xl md:text-5xl text-center text-foreground mb-4">Our Collection</h1>
        <p className="font-body text-center text-muted-foreground mb-10 max-w-xl mx-auto">
          Real flowers, real memories — preserved forever in crystal-clear resin.
        </p>

        {/* Search */}
        <div className="max-w-md mx-auto mb-8 relative">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search our collection..."
            className="w-full pl-11 pr-4 py-3 rounded-full border border-border bg-card font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 shadow-soft transition-shadow"
          />
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full font-body text-sm tracking-wide transition-all duration-300 ${
                activeCategory === cat
                  ? "gradient-accent text-primary-foreground shadow-soft"
                  : "bg-card border border-border text-muted-foreground hover:border-primary/30 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="font-serif text-xl text-foreground mb-2">No products found</p>
            <p className="font-body text-sm text-muted-foreground">Try a different search or category</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
