"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";

const badges = [
  "Full-Stack Web",
  "IoT Systems",
  "Creative Design",
  "UI/UX",
];

export default function About() {
  return (
    <Section id="about" className="bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-12"
        >
          About
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed"
        >
          <p>
            I'm Amara A. Kamara — a Computer Science & Engineering (IoT) graduate, 
            full-stack web developer, and creative designer.
          </p>

          <p>
            I work at the intersection of <strong className="text-black">engineering and visual communication</strong>, 
            building scalable web applications, real-time systems, and IoT-driven platforms , while also 
            crafting clean, intentional designs for brands and digital products.
          </p>

          <p>
            My background spans MERN stack development, embedded systems, and creative direction, 
            allowing me to think both structurally and visually.
          </p>
        </motion.div>

        {/* Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap gap-3 mt-12"
        >
          {badges.map((badge, index) => (
            <motion.span
              key={badge}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              className="px-5 py-2 border border-gray-300 text-sm font-medium text-gray-700 hover:border-black hover:text-black transition-colors duration-300"
            >
              {badge}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
