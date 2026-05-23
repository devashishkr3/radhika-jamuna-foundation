"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-primary">
          Radhika Jamuna Foundation
        </h1>

        <div className="hidden md:flex items-center gap-8 text-text-dark font-medium">
          <Link href="/" className=" hover:text-blue-700">Home</Link>
          <Link href="/about" className=" hover:text-blue-700">About</Link>
          <Link href="/programs" className=" hover:text-blue-700">Programs</Link>
          <Link href="/gallery" className=" hover:text-blue-700">Gallery</Link>
          <Link href="/contact" className=" hover:text-blue-700">Contact</Link>
        </div>

        <button className="bg-primary hover:bg-blue-700 transition text-white px-6 py-3 rounded-full font-medium shadow-lg">
          Donate Now
        </button>
      </div>
    </motion.nav>
  );
}