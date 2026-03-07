import { ProductCard } from "@/components/ProductCard";
import { motion } from "framer-motion";
import { Link } from "wouter";
import type { Product } from "@shared/schema";

// Static signature products data
const SIGNATURE_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Sev Mithai (Kesar)",
    description: "Our iconic specialty, melt-in-mouth texture with saffron.",
    price: 450,
    categoryId: 1,
    imageUrl: "Sev Mithai.jpg",
    isSignature: true,
  },
  {
    id: 2,
    name: "Kaju Katli",
    description: "Premium cashew fudge, perfectly balanced sweetness.",
    price: 900,
    categoryId: 2,
    imageUrl: "Kaju Katli.webp",
    isSignature: true,
  },
  {
    id: 3,
    name: "Mawa Gulab Jamun",
    description: "Soft, spongy, dripping with fragrant syrup.",
    price: 350,
    categoryId: 1,
    imageUrl: "Mawa Gulab Jamun.jpg",
    isSignature: true,
  },
  {
    id: 4,
    name: "Motichoor Ladoo",
    description: "Tiny besan pearls bound with pure desi ghee.",
    price: 400,
    categoryId: 3,
    imageUrl: "Motichoor Ladoo.jpg",
    isSignature: true,
  },
  {
    id: 5,
    name: "Special Kesar Peda",
    description: "Rich milk solids infused with pure saffron.",
    price: 500,
    categoryId: 1,
    imageUrl: "Special Kesar Peda.webp",
    isSignature: true,
  },
  {
    id: 7,
    name: "Plain Sev Mithai",
    description: "Crispy daily snacks and premium farsan.",
    price: 400,
    categoryId: 1,
    imageUrl: "Plain Sev Mithai.jpg",
    isSignature: true,
  },
];

export function SignatureProducts() {
  return (
    <section className="py-24 bg-hero-pattern bg-fixed relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-12 h-px bg-secondary"></span>
            <span className="text-secondary font-bold tracking-widest uppercase text-sm">
              Our Pride
            </span>
            <span className="w-12 h-px bg-secondary"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Signature <span className="text-primary italic">Delicacies</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            The legendary sweets that made Kachhomal a household name in
            Ulhasnagar. Each bite is a piece of our history.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SIGNATURE_PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/menu"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all duration-300 rounded-sm"
          >
            Explore Full Menu
          </Link>
        </div>
      </div>
    </section>
  );
}
