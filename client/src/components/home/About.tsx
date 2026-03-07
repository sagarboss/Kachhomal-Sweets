import { motion } from "framer-motion";
import { Award, ShieldCheck, Heart } from "lucide-react";

export function About() {
  return (
    <section
      id="about"
      className="py-24 bg-background overflow-hidden relative"
    >
      {/* Decorative pattern */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative z-10 rounded-tl-[60px] rounded-br-[60px] overflow-hidden shadow-2xl border-4 border-white">
              {/* traditional indian sweets box, premium aesthetic */}
              <img
                src="kachomal sweets.webp"
                alt="Premium Indian Sweets"
                className="w-full h-auto object-cover aspect-[4/5]"
              />
            </div>
            {/* Decorative background box */}
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-secondary rounded-tl-[60px] rounded-br-[60px] -z-10"></div>

            {/* Badge */}
            <div
              className="absolute top-8 -right-8 md:-right-12 bg-white p-4 rounded-full shadow-xl animate-[bounce_4s_infinite]"
              style={{ zIndex: 999 }}
            >
              <div className="w-24 h-24 rounded-full border border-dashed border-secondary flex flex-col items-center justify-center text-center">
                <span className="font-display font-bold text-3xl text-primary">
                  70+
                </span>
                <span className="text-[0.6rem] font-bold uppercase text-muted-foreground tracking-wider">
                  Years of
                  <br />
                  Legacy
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-px bg-secondary"></span>
              <span className="text-secondary font-bold tracking-widest uppercase text-sm">
                About Our Heritage
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 leading-tight">
              An Iconic Brand in{" "}
              <span className="text-primary italic">Ulhasnagar</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Established in 1952, Kachhomal Sweets & Namkeen has been the
              cornerstone of celebrations and daily joys for generations. We
              take immense pride in preserving the authentic taste of North
              Indian and Sindhi flavors.
            </p>

            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Every piece of sweet and savory snack that leaves our kitchen is a
              testament to our unwavering commitment to premium quality,
              absolute hygiene, and recipes passed down through decades.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xl text-foreground mb-1">
                    Premium Quality
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Only the finest ingredients sourced directly.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xl text-foreground mb-1">
                    100% Hygienic
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Prepared in state-of-the-art clean facilities.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 sm:col-span-2">
                <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center shrink-0">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xl text-foreground mb-1">
                    Authentic Flavors
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Specializing in traditional Sindhi & North Indian
                    delicacies.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
