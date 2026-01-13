"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";

const experiences = [
  {
    role: "Full-Stack Web Development Intern",
    organization: "Zidio",
    location: "India",
  },
  {
    role: "Co-Founder / Creative Director",
    organization: "The Islamic Voices",
  },
  {
    role: "Co-Founder / Graphic Designer",
    organization: "Wize Global",
  },
  {
    role: "Office Assistant & Graphic Designer",
    organization: "Tamma Corporation",
  },
];

export default function Experience() {
  return (
    <Section id="experience" className="bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-16"
        >
          Experience
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-l-2 border-gray-300 pl-8 py-2 hover:border-black transition-colors duration-300"
            >
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-2">
                {exp.role}
              </h3>
              <p className="text-lg text-gray-600">
                {exp.organization}
                {exp.location && ` • ${exp.location}`}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
