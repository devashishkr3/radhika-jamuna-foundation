"use client";

import { motion } from "framer-motion";
import { BookOpen, HeartHandshake, GraduationCap } from "lucide-react";

const data = [
  {
    icon: <BookOpen size={40} />,
    title: "Free Education",
    desc: "Providing quality learning resources free of cost.",
  },
  {
    icon: <HeartHandshake size={40} />,
    title: "Community Support",
    desc: "Helping children overcome educational challenges.",
  },
  {
    icon: <GraduationCap size={40} />,
    title: "Future Growth",
    desc: "Empowering children for a brighter tomorrow.",
  },
];

export default function Mission() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-5xl font-bold text-text-dark">
            Our Mission
          </h2>

          <p className="mt-6 text-text-light text-lg leading-8">
            We aim to make education accessible for every child,
            regardless of their background or financial condition.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 mt-20">
          {data.map((item, index) => (
            <motion.div
              key={index}
              initial={{ y: 80, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-background rounded-[30px] p-10 shadow-lg hover:-translate-y-3 transition"
            >
              <div className="text-primary mb-6">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold text-text-dark">
                {item.title}
              </h3>

              <p className="mt-4 text-text-light leading-7">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}