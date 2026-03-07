import { useState, useMemo } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProductCard } from "@/components/ProductCard";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import type { Product } from "@shared/schema";

// Static categories
const CATEGORIES = [
  {
    id: 1,
    name: "Traditional Sweets",
    description: "Authentic traditional sweets made with pure ghee.",
  },
  {
    id: 2,
    name: "Specialty Barfis",
    description: "Rich and creamy barfis with premium ingredients.",
  },
  {
    id: 3,
    name: "Ladoos",
    description: "Perfectly round and delicious ladoos for all occasions.",
  },
  {
    id: 4,
    name: "Savory Namkeens",
    description: "Crispy and savory snackss for your daily cravings.",
  },
];

// Static products data
const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Sev Mithai (Kesar)",
    price: 450,
    categoryId: 1,
    imageUrl: "Sev Mithai.jpg",
    isSignature: true,
    description: "Our iconic specialty with saffron.",
  },
  {
    id: 2,
    name: "Kaju Katli",
    price: 900,
    categoryId: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1599599811452-9dae2da9bc76?q=80&w=600&auto=format&fit=crop",
    isSignature: true,
    description: "Premium cashew fudge.",
  },
  {
    id: 3,
    name: "Mawa Gulab Jamun",
    price: 350,
    categoryId: 1,
    imageUrl:
      "https://images.unsplash.com/photo-1610411330366-234220b22da9?q=80&w=600&auto=format&fit=crop",
    isSignature: true,
    description: "Soft and spongy in fragrant syrup.",
  },
  {
    id: 4,
    name: "Motichoor Ladoo",
    price: 400,
    categoryId: 3,
    imageUrl:
      "https://images.unsplash.com/photo-1605807646983-377bc5a76493?q=80&w=600&auto=format&fit=crop",
    isSignature: true,
    description: "Tiny besan pearls with ghee.",
  },
  {
    id: 5,
    name: "Special Kesar Peda",
    price: 500,
    categoryId: 1,
    imageUrl:
      "https://images.unsplash.com/photo-1589131651877-621535728a50?q=80&w=600&auto=format&fit=crop",
    isSignature: true,
    description: "Rich milk solids with saffron.",
  },
  {
    id: 6,
    name: "Assorted Farsan",
    price: 250,
    categoryId: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1606822295697-3f30a91f582f?q=80&w=600&auto=format&fit=crop",
    isSignature: true,
    description: "Crispy daily snacks.",
  },
  {
    id: 7,
    name: "Plain Sev Mithai",
    price: 400,
    categoryId: 1,
    imageUrl: null,
    isSignature: false,
    description: null,
  },
  {
    id: 8,
    name: "Mix Kaju Sweets",
    price: 1000,
    categoryId: 2,
    imageUrl: null,
    isSignature: true,
    description: null,
  },
  {
    id: 9,
    name: "Rasgulla",
    price: 300,
    categoryId: 1,
    imageUrl: null,
    isSignature: true,
    description: null,
  },
  {
    id: 10,
    name: "Dry Fruit Atta Ladoo",
    price: 600,
    categoryId: 3,
    imageUrl: null,
    isSignature: true,
    description: null,
  },
  {
    id: 11,
    name: "Kandi Peda",
    price: 480,
    categoryId: 1,
    imageUrl: null,
    isSignature: true,
    description: null,
  },
  {
    id: 12,
    name: "Daily Snacks",
    price: 200,
    categoryId: 4,
    imageUrl: null,
    isSignature: false,
    description: null,
  },
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<number | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory =
        activeCategory === "all" || product.categoryId === activeCategory;
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (product.description &&
          product.description
            .toLowerCase()
            .includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      {/* Page Header */}
      <div className="pt-32 pb-16 bg-primary text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://pixabay.com/get/ge67d2ab1ef1d0ae0451be0784b4db878866751a891ef4e6642f8c84f9848983078b1053410501a1e219ef56ad51c3e50fa6487cb5d116a3231f5cb75c7f99c6f_1280.jpg')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
            Our <span className="text-secondary italic">Menu</span>
          </h1>
          <p className="text-primary-foreground/80 text-lg">
            Explore our extensive range of premium sweets and namkeens, made
            fresh daily.
          </p>
        </div>
      </div>

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        {/* Controls: Search & Filter */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          {/* Category Pills */}
          <div className="flex flex-wrap gap-3 justify-center md:justify-start hide-scrollbar overflow-x-auto">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                activeCategory === "all"
                  ? "bg-secondary text-primary shadow-md"
                  : "bg-white text-muted-foreground border border-border hover:border-secondary"
              }`}
            >
              All Items
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 whitespace-nowrap ${
                  activeCategory === cat.id
                    ? "bg-secondary text-primary shadow-md"
                    : "bg-white text-muted-foreground border border-border hover:border-secondary"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72 shrink-0">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-muted-foreground" />
            </div>
            <input
              type="text"
              placeholder="Search items..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-11 pr-4 py-3 border-2 border-border rounded-full bg-white focus:outline-none focus:ring-0 focus:border-secondary transition-colors"
            />
          </div>
        </div>

        {/* Content Area */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-white rounded-2xl border border-dashed border-border">
            <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="h-10 w-10 text-muted-foreground/50" />
            </div>
            <h3 className="text-2xl font-display font-bold text-foreground mb-2">
              No items found
            </h3>
            <p className="text-muted-foreground">
              Try adjusting your search or category filter.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("all");
              }}
              className="mt-6 text-secondary font-bold hover:underline"
            >
              Clear Filters
            </button>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
