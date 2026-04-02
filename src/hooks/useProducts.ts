import { useState, useEffect } from "react";
import client from "../../tina/__generated__/client";
import { Product } from "../data/products";

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await client.queries.categoryConnection();
        const allProducts = data.categoryConnection.edges?.flatMap((edge) => {
          const category = edge?.node;
          if (!category || !category.products) return [];
          return category.products.map((p) => ({
            ...p,
            category: category.name,
            longDescription: (p?.longDescription as any)?.children?.[0]?.children?.[0]?.text || "",
          }));
        }) || [];
        setProducts(allProducts as Product[]);
      } catch (err) {
        console.error("Error fetching products from Tina:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading };
};

export const useProduct = (id: string) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await client.queries.categoryConnection();
        const allProducts = data.categoryConnection.edges?.flatMap((edge) => {
          const category = edge?.node;
          if (!category || !category.products) return [];
          return category.products.map((p) => ({
            ...p,
            category: category.name,
            longDescription: (p?.longDescription as any)?.children?.[0]?.children?.[0]?.text || "",
          }));
        }) || [];
        
        const found = allProducts.find((p) => p.id === id);
        setProduct(found || null);
      } catch (err) {
        console.error("Error fetching product from Tina:", err);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchProduct();
  }, [id]);

  return { product, loading };
};
