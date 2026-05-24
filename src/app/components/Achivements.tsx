"use client";

import { motion } from "framer-motion";
import {
  Users,
  GraduationCap,
  BookOpen,
  HeartHandshake,
} from "lucide-react";

const achievements = [
  {
    icon: <Users size={45} />,
    number: "5,000+",
    title: "Students Helped",
    description:
      "Thousands of children received educational support and guidance.",
  },

  {
    icon: <GraduationCap size={45} />,
    number: "120+",
    title: "Volunteers",
    description:
      "Dedicated volunteers helping students learn and grow every day.",
  },

  {
    icon: <BookOpen size={45} />,
    number: "20+",
    title: "Education Programs",
    description:
      "Running impactful educational and awareness programs for children.",
  },

  {
    icon: <HeartHandshake size={45} />,
    number: "15+",
    title: "Communities Reached",
    description:
      "Expanding access to education across multiple communities.",
  },
];

export default function Achievements() {
  return (
    <section className="relative py-32 overflow-hidden bg-background">
      
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl" />

      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-accent/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">

        <motion.div
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-block bg-primary-light text-primary px-5 py-2 rounded-full font-medium mb-6">
            Our Achievements
          </div>

          <h2 className="text-5xl lg:text-6xl font-bold text-text-dark leading-tight">
            Creating Real
            <span className="text-primary"> Impact</span>
          </h2>

          <p className="mt-8 text-lg text-text-light leading-9">
            Through education, support, and community efforts,
            we continue transforming children's lives and helping
            them achieve a brighter future.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-24">

          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ y: 80, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="group bg-white rounded-[32px] p-10 shadow-lg hover:shadow-2xl hover:-translate-y-4 transition duration-500 border border-primary/5"
            >
              
              <div className="w-20 h-20 rounded-3xl bg-primary-light flex items-center justify-center text-primary group-hover:scale-110 group-hover:rotate-3 transition duration-500">
                {item.icon}
              </div>

              <h3 className="mt-8 text-5xl font-bold text-primary">
                {item.number}
              </h3>

              <h4 className="mt-4 text-2xl font-semibold text-text-dark">
                {item.title}
              </h4>

              <p className="mt-5 text-text-light leading-8">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}