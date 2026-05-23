"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background flex items-center">
      
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center pt-28">
        
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block bg-primary-light text-primary px-5 py-2 rounded-full font-medium mb-6">
            Empowering Children Through Education
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-text-dark">
            Every Child
            <span className="text-primary"> Deserves </span>
            Quality Education
          </h1>

          <p className="mt-8 text-lg text-text-light leading-8 max-w-xl">
            Radhika Jamuna Foundation is dedicated to providing free education,
            learning resources, and support to children so they can build a
            brighter future.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">
            <button className="bg-primary hover:bg-blue-700 transition text-white px-8 py-4 rounded-full text-lg font-medium shadow-xl">
              Donate Now
            </button>

            <button className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition px-8 py-4 rounded-full text-lg font-medium">
              Become Volunteer
            </button>
          </div>

          <div className="mt-14 flex gap-10 flex-wrap">
            <div>
              <h2 className="text-4xl font-bold text-primary">5K+</h2>
              <p className="text-text-light mt-2">Students Helped</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-primary">100+</h2>
              <p className="text-text-light mt-2">Volunteers</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-primary">20+</h2>
              <p className="text-text-light mt-2">Education Programs</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-primary/20 rounded-[40px] blur-3xl" />

          <img
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop"
            alt="children education"
            className="relative rounded-[40px] shadow-2xl object-cover h-[700px] w-full"
          />
        </motion.div>
      </div>
    </section>
  );
}