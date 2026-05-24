"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function ContactSection() {
  return (
    <section className="relative py-32 overflow-hidden bg-background">

      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          <motion.div
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >

            <div className="inline-block bg-primary-light text-primary px-5 py-2 rounded-full font-medium mb-6">
              Contact Us
            </div>

            <h2 className="text-5xl lg:text-6xl font-bold text-text-dark leading-tight">
              Let’s Build A
              <span className="text-primary"> Better Future</span>
            </h2>

            <p className="mt-8 text-lg text-text-light leading-9">
              Reach out to us for volunteering, donations, partnerships,
              or educational support initiatives.
            </p>

            <div className="mt-12 space-y-6">

              <div className="flex items-start gap-5 bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition duration-500">
                <div className="w-16 h-16 rounded-2xl bg-primary-light flex items-center justify-center text-primary">
                  <Mail size={28} />
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-text-dark">
                    Email Us
                  </h3>

                  <p className="mt-2 text-text-light">
                    support@radhikajamunafoundation.org
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5 bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition duration-500">
                <div className="w-16 h-16 rounded-2xl bg-primary-light flex items-center justify-center text-primary">
                  <Phone size={28} />
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-text-dark">
                    Call Us
                  </h3>

                  <p className="mt-2 text-text-light">
                    +91 9876543210
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5 bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition duration-500">
                <div className="w-16 h-16 rounded-2xl bg-primary-light flex items-center justify-center text-primary">
                  <MapPin size={28} />
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-text-dark">
                    Location
                  </h3>

                  <p className="mt-2 text-text-light">
                    India
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white rounded-[40px] p-10 shadow-2xl"
          >

            <h3 className="text-4xl font-bold text-text-dark">
              Send Message
            </h3>

            <p className="mt-4 text-text-light">
              We would love to hear from you.
            </p>

            <div className="mt-10 space-y-6">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-5 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary transition"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-5 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary transition"
              />

              <textarea
                rows={6}
                placeholder="Your Message"
                className="w-full p-5 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary transition"
              />

              <button className="w-full bg-primary hover:bg-blue-700 transition duration-500 text-white py-5 rounded-2xl text-lg font-semibold shadow-xl hover:shadow-2xl">
                Send Message
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}