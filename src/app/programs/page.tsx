"use client";

import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Laptop, School } from "lucide-react";

const programs = [
  {
    icon: <BookOpen size={45} />,
    title: "Free Classes",
    desc: "Providing free academic classes for children.",
  },
  {
    icon: <GraduationCap size={45} />,
    title: "Scholarships",
    desc: "Helping talented students continue their studies.",
  },
  {
    icon: <Laptop size={45} />,
    title: "Digital Learning",
    desc: "Providing digital resources and online learning.",
  },
  {
    icon: <School size={45} />,
    title: "School Support",
    desc: "Helping schools and students with educational needs.",
  },
];

export default function ProgramsPage() {
  return (
    <main className="bg-background min-h-screen py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl lg:text-6xl font-bold text-text-dark">
            Our
            <span className="text-primary"> Programs</span>
          </h1>

          <p className="mt-6 text-lg text-text-light leading-8">
            We run educational initiatives and support programs
            to help children access quality learning opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-20">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ y: 80, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-[30px] p-10 shadow-lg hover:shadow-2xl hover:-translate-y-4 transition duration-500 group"
            >
              <div className="text-primary group-hover:scale-110 transition duration-500">
                {program.icon}
              </div>

              <h2 className="text-2xl font-bold mt-6 text-text-dark">
                {program.title}
              </h2>

              <p className="mt-4 text-text-light leading-8">
                {program.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}