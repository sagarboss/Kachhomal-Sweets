import { Product } from "@shared/schema";

interface ProductCardProps {
  product: Product;
  delay?: number;
}

export function ProductCard({ product, delay = 0 }: ProductCardProps) {
  // Use provided image or a fallback based on name
  const fallbackImage = product.name.toLowerCase().includes('namkeen') 
    ? "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=800" 
    : "https://images.unsplash.com/photo-1541795014188-4663e26bbbb0?auto=format&fit=crop&q=80&w=800";

  const imageToUse = product.imageUrl || fallbackImage;

  return (
    <div className="group bg-card rounded-xl overflow-hidden shadow-md shadow-black/5 border border-border/50 hover:shadow-xl hover:border-secondary/50 transition-all duration-300 flex flex-col h-full">
      {/* Image container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={imageToUse}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {product.isSignature && (
          <div className="absolute top-4 right-4 bg-secondary text-primary text-xs font-bold px-3 py-1 rounded-sm shadow-lg uppercase tracking-wider">
            Signature
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start gap-4 mb-2">
          <h3 className="font-display text-xl font-bold text-foreground line-clamp-2">
            {product.name}
          </h3>
          {product.price && (
            <span className="font-bold text-primary shrink-0">
              ₹{product.price}
            </span>
          )}
        </div>
        
        <p className="text-sm text-muted-foreground line-clamp-2 flex-grow mb-4">
          {product.description || "Authentic traditional preparation using pure ingredients and heritage recipes."}
        </p>
      </div>
    </div>
  );
}
