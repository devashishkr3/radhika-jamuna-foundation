"use client";

import { motion } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1497486751825-1233686d5d80?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=1200&auto=format&fit=crop",
];

export default function GalleryPage() {
  return (
    <main className="bg-background min-h-screen py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl lg:text-6xl font-bold text-text-dark">
            Our
            <span className="text-primary"> Gallery</span>
          </h1>

          <p className="mt-6 text-lg text-text-light leading-8">
            Moments from our educational programs, community support,
            and student activities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-[30px] shadow-xl group"
            >
              <img
                src={image}
                alt="gallery"
                className="h-[350px] w-full object-cover group-hover:scale-110 transition duration-700"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}