import { useProducts } from "@/hooks/use-products";
import { ProductCard } from "@/components/ProductCard";
import { motion } from "framer-motion";
import { Link } from "wouter";

// Fallback data in case API fails or is empty initially
const FALLBACK_SIGNATURES = [
  { id: 1, name: "Sev Mithai (Kesar & Plain)", description: "Our iconic specialty, melt-in-mouth texture.", isSignature: true },
  { id: 2, name: "Kaju Katli & Mix Kaju Sweets", description: "Premium cashew fudge, perfectly balanced sweetness.", isSignature: true },
  { id: 3, name: "Mawa Gulab Jamun & Rasgulla", description: "Soft, spongy, dripping with fragrant syrup.", isSignature: true },
  { id: 4, name: "Motichoor Ladoo", description: "Tiny besan pearls bound with pure desi ghee.", isSignature: true },
  { id: 5, name: "Special Kesar Peda", description: "Rich milk solids infused with pure saffron.", isSignature: true },
  { id: 6, name: "Assorted Namkeens", description: "Crispy daily snacks and premium farsan.", isSignature: true },
];

export function SignatureProducts() {
  const { data: products, isLoading } = useProducts();

  // Filter for signature products, fallback to static list if none exist
  const signatureItems = products?.filter(p => p.isSignature) || [];
  const displayItems = signatureItems.length > 0 ? signatureItems : FALLBACK_SIGNATURES;

  return (
    <section className="py-24 bg-hero-pattern bg-fixed relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-12 h-px bg-secondary"></span>
            <span className="text-secondary font-bold tracking-widest uppercase text-sm">Our Pride</span>
            <span className="w-12 h-px bg-secondary"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Signature <span className="text-primary italic">Delicacies</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            The legendary sweets that made Kachhomal a household name in Ulhasnagar. Each bite is a piece of our history.
          </p>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="animate-pulse bg-muted rounded-xl h-80"></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayItems.slice(0, 6).map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* @ts-ignore - handling fallback data gracefully */}
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        )}

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
