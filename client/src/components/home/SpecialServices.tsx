import { motion } from "framer-motion";
import { Gift, Users } from "lucide-react";

export function SpecialServices() {
  return (
    <section id="services" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative SVG pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="motif" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M50,0 L100,50 L50,100 L0,50 Z" fill="none" stroke="currentColor" strokeWidth="1" />
              <circle cx="50" cy="50" r="10" fill="currentColor" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#motif)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Make Every Occasion <span className="text-secondary italic">Special</span>
          </h2>
          <p className="text-primary-foreground/80 text-lg">
            Beyond our daily offerings, we provide specialized services to add sweetness to your grandest celebrations and intimate moments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 border border-white/10 backdrop-blur-md p-10 rounded-2xl hover:bg-white/10 transition-colors duration-300 group"
          >
            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(212,175,55,0.4)]">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-display text-3xl font-bold text-white mb-4">Bulk Orders for Weddings & Festivals</h3>
            <p className="text-primary-foreground/80 leading-relaxed mb-8">
              Trust the experts to cater to your large gatherings. We handle monumental orders for weddings, Diwali, and corporate events with the same care and quality as our daily batches.
            </p>
            <a href="#contact" className="text-secondary font-bold inline-flex items-center gap-2 hover:gap-3 transition-all">
              Inquire Now <span className="text-xl">→</span>
            </a>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 border border-white/10 backdrop-blur-md p-10 rounded-2xl hover:bg-white/10 transition-colors duration-300 group"
          >
            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(212,175,55,0.4)]">
              <Gift className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-display text-3xl font-bold text-white mb-4">Customized Gifting Boxes</h3>
            <p className="text-primary-foreground/80 leading-relaxed mb-8">
              Beautifully crafted premium boxes for corporate gifting or personal presents. Curate your own selection of our finest sweets and dry fruits to leave a lasting impression.
            </p>
            <a href="#contact" className="text-secondary font-bold inline-flex items-center gap-2 hover:gap-3 transition-all">
              View Box Options <span className="text-xl">→</span>
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
