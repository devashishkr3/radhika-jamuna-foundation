"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="bg-background min-h-screen py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-20 items-center">
        
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-5xl lg:text-6xl font-bold text-text-dark leading-tight">
            Get In
            <span className="text-primary"> Touch</span>
          </h1>

          <p className="mt-8 text-lg text-text-light leading-9">
            Join us in creating better educational opportunities
            for children and building a brighter future together.
          </p>

          <div className="mt-10 space-y-5">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition">
              <h3 className="font-bold text-xl text-text-dark">
                Email
              </h3>

              <p className="mt-2 text-text-light">
                support@foundation.org
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition">
              <h3 className="font-bold text-xl text-text-dark">
                Phone
              </h3>

              <p className="mt-2 text-text-light">
                +91 9876543210
              </p>
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-[40px] p-10 shadow-2xl"
        >
          <div className="space-y-6">
            
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-5 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-5 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
            />

            <textarea
              rows={6}
              placeholder="Your Message"
              className="w-full p-5 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
            />

            <button className="w-full bg-primary hover:bg-blue-700 transition text-white py-5 rounded-2xl text-lg font-semibold shadow-xl">
              Send Message
            </button>
          </div>
        </motion.form>
      </div>
    </main>
  );
}