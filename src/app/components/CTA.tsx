"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-28">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto bg-primary rounded-[40px] px-10 py-20 text-center text-white"
      >
        <h2 className="text-5xl font-bold leading-tight">
          Together We Can Build
          <br />
          A Better Future
        </h2>

        <p className="mt-6 text-lg text-blue-100 max-w-2xl mx-auto">
          Join our mission to provide education and opportunities
          to children who deserve a brighter tomorrow.
        </p>

        <div className="mt-10 flex justify-center gap-5 flex-wrap">
          <button className="bg-white text-primary px-8 py-4 rounded-full font-bold">
            Donate Today
          </button>

          <button className="border border-white px-8 py-4 rounded-full font-bold">
            Become Volunteer
          </button>
        </div>
      </motion.div>
    </section>
  );
}