import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-px bg-secondary"></span>
              <span className="text-secondary font-bold tracking-widest uppercase text-sm">Visit Us</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-8">
              Come Experience the <span className="text-primary italic">Magic</span>
            </h2>
            
            <p className="text-muted-foreground text-lg mb-12">
              We'd love to welcome you to our shop. Whether you're looking for your daily namkeen or planning a major celebration, our doors are open.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-full bg-primary/5 flex items-center justify-center shrink-0 border border-primary/10">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-2xl text-foreground mb-2">Our Location</h4>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Shop 3, Thadani Apartment,<br />
                    Near Sadhu Vaswani Statue,<br />
                    Goal Maidan, Ulhasnagar, Thane.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-full bg-primary/5 flex items-center justify-center shrink-0 border border-primary/10">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-2xl text-foreground mb-2">Call Us</h4>
                  <p className="text-muted-foreground text-lg">
                    <a href="tel:+912512700606" className="hover:text-primary transition-colors">+91 251 2700606</a><br/>
                    <a href="tel:+919320070815" className="hover:text-primary transition-colors">+91 93200 70815</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-full bg-primary/5 flex items-center justify-center shrink-0 border border-primary/10">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-2xl text-foreground mb-2">Store Hours</h4>
                  <p className="text-muted-foreground text-lg">
                    Monday to Sunday<br/>
                    10:00 AM - 10:00 PM
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map/Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-full min-h-[400px]"
          >
            <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-muted">
              {/* Using a placeholder aesthetic image instead of a complex map iframe for visual beauty, 
                  but in a real app this could be a Google Maps iframe */}
              {/* elegant indian sweet shop interior or building exterior */}
              <img 
                src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=1000" 
                alt="Shop Ambiance" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
              
              {/* Floating info card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white">
                <h4 className="font-display font-bold text-xl text-primary mb-2">Ready to Order?</h4>
                <p className="text-sm text-muted-foreground mb-4">We are also available on major food delivery platforms.</p>
                <div className="flex gap-4">
                  <a href="https://www.zomato.com/mumbai/kachhomal-sweets-1-ulhasnagar/order" target="_blank" rel="noopener noreferrer" className="flex-1 bg-red-500 text-white font-bold py-2 rounded-sm hover:bg-red-600 transition-colors text-center block">
                    Zomato
                  </a>
                  <a href="https://www.swiggy.com/city/mumbai/kachhomal-sweets-and-namkeen-ulhasnagar-rest1127727" target="_blank" rel="noopener noreferrer" className="flex-1 bg-orange-500 text-white font-bold py-2 rounded-sm hover:bg-orange-600 transition-colors text-center block">
                    Swiggy
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
