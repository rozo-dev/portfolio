"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";

const techGroups = [
  {
    title: "Engineering & Web",
    skills: [
      "JavaScript / TypeScript",
      "React / Next.js",
      "Node.js / Express",
      "MongoDB / PostgreSQL",
      "Socket.IO",
      "MQTT",
      "REST APIs",
      "CI/CD",
      "Git & GitHub",
    ],
  },
  {
    title: "IoT",
    skills: [
      "Arduino / ESP32",
      "Embedded Programming",
      "Sensor Integration",
      "Real-time Data Systems",
    ],
  },
  {
    title: "Design",
    skills: [
      "Figma",
      "Adobe Illustrator",
      "Photoshop",
      "After Effects",
      "UI/UX Design",
      "Branding",
    ],
  },
];

export default function TechStack() {
  return (
    <Section id="tech-stack">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-16"
        >
          Tech Stack
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          {techGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-6 text-gray-900">
                {group.title}
              </h3>
              <ul className="space-y-3">
                {group.skills.map((skill, skillIndex) => (
                  <motion.li
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: groupIndex * 0.1 + skillIndex * 0.05,
                    }}
                    className="text-gray-600 text-base"
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
