import roseDome from "@/assets/rose-dome.jpg";
import roseHeartBlock from "@/assets/rose-heart-block.jpg";
import roseBouquetResin from "@/assets/rose-bouquet-resin.jpg";
import resinPendant from "@/assets/resin-pendant.jpg";
import resinEarrings from "@/assets/resin-earrings.jpg";
import resinBangle from "@/assets/resin-bangle.jpg";
import babyPrintResin from "@/assets/baby-print-resin.jpg";
import babyCurlKeepsake from "@/assets/baby-curl-keepsake.jpg";
import resinKeepsake from "@/assets/resin-keepsake.jpg";

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
}

export const categories = ["All", "Rose Preservation", "Floral Jewellery", "Baby Keepsakes"] as const;

export const products: Product[] = [
  // Rose Preservation
  {
    id: "rose-dome",
    name: "Rose Dome",
    description: "A single preserved rose encased in a crystal-clear resin dome on a walnut base.",
    longDescription: "A real rose, carefully preserved at the peak of its bloom and encased forever in crystal-clear epoxy resin atop a hand-turned walnut wood base. This enchanting dome captures the beauty of a moment — perfect for anniversaries, proposals, or as a timeless display piece that never wilts.",
    price: 1299,
    image: roseDome,
    category: "Rose Preservation",
    hasMessageInput: true,
  },
  {
    id: "rose-heart-block",
    name: "Rose Heart Block",
    description: "Preserved roses arranged in a heart-shaped resin block — love made eternal.",
    longDescription: "Multiple preserved roses in soft pink hues are delicately arranged inside a heart-shaped resin block. Every petal is frozen in time, creating a breathtaking symbol of love that you can hold in your hands. A stunning anniversary or Valentine's Day gift.",
    price: 1599,
    image: roseHeartBlock,
    category: "Rose Preservation",
    hasMessageInput: true,
    hasNameFields: true,
  },
  {
    id: "rose-bouquet-resin",
    name: "Bouquet Preservation Block",
    description: "Your wedding or special bouquet preserved forever in a stunning resin block.",
    longDescription: "Send us your wedding bouquet, anniversary roses, or any meaningful flowers — and we'll preserve them forever in a large rectangular resin block. Every bloom, every petal, every memory crystallized in time. The ultimate keepsake for life's most meaningful moments.",
    price: 2499,
    image: roseBouquetResin,
    category: "Rose Preservation",
    hasMessageInput: true,
    hasNameFields: true,
  },

  // Floral Jewellery
  {
    id: "resin-pendant",
    name: "Floral Resin Pendant",
    description: "A real pressed flower captured in a gold-framed resin pendant necklace.",
    longDescription: "Wear nature's beauty close to your heart. A carefully pressed real flower is encased in crystal-clear resin and set in an elegant gold-plated pendant frame with a delicate chain. Each piece is unique — no two flowers are alike, making this a truly one-of-a-kind accessory.",
    price: 699,
    image: resinPendant,
    category: "Floral Jewellery",
    hasMessageInput: true,
  },
  {
    id: "resin-earrings",
    name: "Floral Resin Earrings",
    description: "Handcrafted earrings with real dried flowers preserved in resin and gold.",
    longDescription: "A pair of stunning drop earrings featuring real dried wildflowers suspended in crystal-clear resin, framed in elegant gold settings. Lightweight, hypoallergenic, and absolutely mesmerizing — these are conversation starters that carry the beauty of nature wherever you go.",
    price: 599,
    image: resinEarrings,
    category: "Floral Jewellery",
    hasMessageInput: true,
  },
  {
    id: "resin-bangle",
    name: "Floral Resin Bangle",
    description: "A statement bangle with pressed flowers and gold leaf sealed in resin.",
    longDescription: "This breathtaking bangle bracelet features real pressed pansies and violets intertwined with genuine gold leaf flakes, all preserved in crystal-clear resin. It's a wearable garden — bold, beautiful, and completely unique to you.",
    price: 899,
    image: resinBangle,
    category: "Floral Jewellery",
    hasMessageInput: true,
  },

  // Baby Keepsakes
  {
    id: "baby-print-resin",
    name: "Baby Prints Resin Block",
    description: "Your baby's tiny handprint and footprint preserved forever in resin with gold flakes.",
    longDescription: "Capture the tiniest details of your newborn's hands and feet in a stunning resin block embedded with delicate gold flakes. We take your baby's prints and cast them into a crystal-clear keepsake that you'll treasure for a lifetime. A beautiful way to freeze time.",
    price: 1499,
    image: babyPrintResin,
    category: "Baby Keepsakes",
    hasNameFields: true,
    hasMessageInput: true,
  },
  {
    id: "baby-curl-keepsake",
    name: "First Curl Heart Keepsake",
    description: "Baby's first curl preserved with dried flowers inside a heart-shaped resin piece.",
    longDescription: "Your baby's precious first curl, delicately preserved alongside tiny dried flowers inside a heart-shaped resin keepsake. This intimate piece holds the essence of those fleeting early days — a gift for parents who want to hold onto every tiny moment.",
    price: 999,
    image: babyCurlKeepsake,
    category: "Baby Keepsakes",
    hasNameFields: true,
    hasMessageInput: true,
  },
  {
    id: "floral-sphere-keepsake",
    name: "Floral Sphere Keepsake",
    description: "A crystal-clear resin sphere with real preserved flowers — nature captured in art.",
    longDescription: "Real flowers — daisies, violets, and wildflowers — are carefully arranged and preserved inside a perfectly smooth resin sphere. It catches the light beautifully and makes an enchanting home décor piece or a meaningful gift for someone who loves nature's beauty.",
    price: 899,
    image: resinKeepsake,
    category: "Baby Keepsakes",
    hasMessageInput: true,
  },
];
