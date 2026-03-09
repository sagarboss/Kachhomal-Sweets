import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-primary">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* elegant dark food photography, indian sweets, rich colors */}
        <img
          src="https://pixabay.com/get/g53a95d80c68225003a4b53b119fee49b8efbe3f0f09087393e18c78b96ef16fd042a4abef8624b445460e9278fed5ad569e294422c38ffdbd4530584170b1cd3_1280.jpg"
          alt="Traditional Indian Sweets Background"
          className="w-full h-full object-cover object-center opacity-40 scale-105 transform hover:scale-100 transition-transform duration-[20s] ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/50 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-12 h-px bg-secondary"></span>
            <span className="text-secondary font-medium tracking-[0.2em] uppercase text-sm">Since 1952</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-5xl sm:text-6xl md:text-7xl font-display font-bold text-white leading-[1.1] mb-6 text-balance"
          >
            Bringing You the <span className="text-secondary italic">Authentic Taste</span> of Traditions.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-xl leading-relaxed text-balance"
          >
            Discover the legacy of Ulhasnagar's finest sweets and namkeens. Crafted with pure ingredients, love, and seventy years of perfection.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link
              href="/menu"
              className="bg-secondary text-primary font-bold px-8 py-4 rounded-sm hover:bg-white hover:text-primary hover:-translate-y-1 transition-all duration-300 shadow-[0_0_40px_rgba(212,175,55,0.3)] flex items-center gap-2 group"
            >
              View Menu
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
      
    </div>
  );
}
