"use client";

import { motion } from "framer-motion";
import { HeartHandshake, BookOpen, Users } from "lucide-react";

const values = [
  {
    icon: <BookOpen size={40} />,
    title: "Free Education",
    desc: "Providing quality education and learning resources to children free of cost.",
  },
  {
    icon: <HeartHandshake size={40} />,
    title: "Community Support",
    desc: "Helping children overcome barriers that stop them from learning.",
  },
  {
    icon: <Users size={40} />,
    title: "Better Future",
    desc: "Empowering students with knowledge and opportunities for growth.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-background">
      
      <section className="relative py-36 overflow-hidden">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center relative z-10">
          <motion.h1
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-5xl lg:text-7xl font-bold text-text-dark leading-tight"
          >
            About Our
            <span className="text-primary"> Foundation</span>
          </motion.h1>

          <motion.p
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mt-8 text-lg text-text-light max-w-3xl mx-auto leading-9"
          >
            Radhika Jamuna Foundation works to provide free education,
            learning support, and opportunities to children so every child
            can build a brighter future.
          </motion.p>
        </div>
      </section>

      <section className="pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-3 gap-10">
          {values.map((item, index) => (
            <motion.div
              key={index}
              initial={{ y: 80, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-[30px] p-10 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition duration-500"
            >
              <div className="text-primary mb-6">
                {item.icon}
              </div>

              <h2 className="text-2xl font-bold text-text-dark">
                {item.title}
              </h2>

              <p className="mt-4 text-text-light leading-8">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1200&auto=format&fit=crop"
              alt="children"
              className="rounded-[40px] shadow-2xl hover:scale-[1.02] transition duration-500"
            />
          </motion.div>

          <motion.div
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-text-dark leading-tight">
              Education Changes
              <span className="text-primary"> Lives</span>
            </h2>

            <p className="mt-8 text-lg text-text-light leading-9">
              Our foundation believes every child deserves access to education,
              guidance, and opportunities. Through community support and
              educational initiatives, we aim to create long-term impact.
            </p>

            <button className="mt-10 bg-primary hover:bg-blue-700 transition text-white px-8 py-4 rounded-full shadow-xl">
              Join Our Mission
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}