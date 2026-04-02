export interface Product {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  price: number;
  image: string;
  category: string;
  hasMessageInput?: boolean;
  hasNameFields?: boolean;
  isFeatured?: boolean;
}

export const categories = ["All", "Rose Preservation", "Floral Jewellery", "Baby Keepsakes"] as const;

export const products: Product[] = []; // Products are now fetched from TinaCMS
