"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  School,
  Laptop,
  HeartHandshake,
} from "lucide-react";

const works = [
  {
    icon: <BookOpen size={42} />,
    title: "Free Education",
    description:
      "Providing free classes, books, and learning support for children.",
  },

  {
    icon: <School size={42} />,
    title: "School Support",
    description:
      "Helping schools and students with educational resources and guidance.",
  },

  {
    icon: <Laptop size={42} />,
    title: "Digital Learning",
    description:
      "Encouraging modern learning through digital education initiatives.",
  },

  {
    icon: <HeartHandshake size={42} />,
    title: "Community Programs",
    description:
      "Organizing educational and awareness programs across communities.",
  },
];

export default function OurWorks() {
  return (
    <section className="relative py-32 overflow-hidden bg-white">

      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl" />

      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-accent/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">

        <motion.div
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-block bg-primary-light text-primary px-5 py-2 rounded-full font-medium mb-6">
            What We Do
          </div>

          <h2 className="text-5xl lg:text-6xl font-bold text-text-dark leading-tight">
            Our
            <span className="text-primary"> Works</span>
          </h2>

          <p className="mt-8 text-lg text-text-light leading-9">
            We work to ensure every child gets access to quality education,
            support, and opportunities for a brighter future.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 mt-24">

          {works.map((item, index) => (
            <motion.div
              key={index}
              initial={{ y: 80, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="group bg-background rounded-[32px] p-10 shadow-lg hover:shadow-2xl hover:-translate-y-4 transition duration-500 border border-primary/5"
            >

              <div className="w-20 h-20 rounded-3xl bg-primary-light flex items-center justify-center text-primary group-hover:scale-110 group-hover:rotate-3 transition duration-500">
                {item.icon}
              </div>

              <h3 className="mt-8 text-3xl font-bold text-text-dark">
                {item.title}
              </h3>

              <p className="mt-5 text-text-light leading-8 text-lg">
                {item.description}
              </p>

              <button className="mt-8 text-primary font-semibold hover:translate-x-2 transition duration-300">
                Learn More →
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}