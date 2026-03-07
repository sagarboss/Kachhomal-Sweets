import { Link } from "wouter";
import { Facebook, Instagram, MapPin, Phone, Clock, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8 border-t-[6px] border-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <h3 className="font-display text-2xl font-bold text-secondary mb-4">
              Kachhomal
            </h3>
            <p className="text-primary-foreground/80 leading-relaxed text-sm mb-6 text-balance">
              Bringing You the Authentic Taste of Traditions Since 1952. An iconic brand in Ulhasnagar known for premium quality and authentic flavors.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/kachhomalsweets/?hl=en" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold text-secondary mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-1/2 after:h-0.5 after:bg-secondary/50">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-secondary"></span> Home
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-secondary"></span> Our Menu
                </Link>
              </li>
              <li>
                <a href="/#about" className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-secondary"></span> About Us
                </a>
              </li>
              <li>
                <a href="/#contact" className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-secondary"></span> Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1 lg:col-span-2">
            <h4 className="font-display text-lg font-semibold text-secondary mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-1/2 after:h-0.5 after:bg-secondary/50">
              Visit Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span className="text-sm text-primary-foreground/80 leading-relaxed">
                  Shop 3, Thadani Apartment, Near Sadhu Vaswani Statue,<br />
                  Goal Maidan, Ulhasnagar, Thane.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary shrink-0" />
                <span className="text-sm text-primary-foreground/80">
                  +91 251 2700606 / +91 93200 70815
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-secondary shrink-0" />
                <span className="text-sm text-primary-foreground/80">
                  Open Daily: 10:00 AM to 10:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/60 flex items-center gap-1">
            © {new Date().getFullYear()} Kachhomal Sweets & Namkeen. Made with <Heart className="w-3 h-3 text-secondary" /> in Ulhasnagar.
          </p>
          <div className="flex items-center gap-4 text-sm font-medium">
            <span className="text-primary-foreground/60">Order via:</span>
            <a href="https://www.zomato.com/mumbai/kachhomal-sweets-1-ulhasnagar/order" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary transition-colors border border-white/20 px-3 py-1.5 rounded-sm hover:border-secondary">Zomato</a>
            <a href="https://www.swiggy.com/city/mumbai/kachhomal-sweets-and-namkeen-ulhasnagar-rest1127727" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary transition-colors border border-white/20 px-3 py-1.5 rounded-sm hover:border-secondary">Swiggy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
