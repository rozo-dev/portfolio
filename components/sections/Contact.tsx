"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

const contactLinks = [
  {
    label: "Email",
    value: "akamar5050@gmail.com",
    href: "mailto:akamar5050@gmail.com",
  },
  {
    label: "GitHub",
    value: "rozo-dev",
    href: "https://github.com/rozo-dev",
  },
  {
    label: "LinkedIn",
    value: "Amara A. Kamara",
    href: "https://www.linkedin.com/in/amara-a-kamara-219563301/",
  },
  {
    label: "Repositories",
    value: "View All Projects",
    href: "https://github.com/rozo-dev?tab=repositories",
  },
];

export default function Contact() {
  return (
    <Section id="contact" className="pb-16">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl lg:text-7xl font-semibold mb-8"
        >
          Let&apos;s build something meaningful.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <Button href="/Amara_Kamara_CV.pdf" variant="primary">
            Download CV
          </Button>
        </motion.div>

        {/* Contact Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-6 mb-16"
        >
          {contactLinks.map((link, index) => (
            <motion.div
              key={link.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              className="flex flex-col md:flex-row md:justify-center md:items-center gap-2 md:gap-4"
            >
              <span className="text-sm uppercase tracking-wider text-gray-500">
                {link.label}
              </span>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg md:text-xl text-black hover:text-gray-600 transition-colors duration-300 underline-offset-4 hover:underline"
              >
                {link.value}
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="border-t border-gray-200 pt-8"
        >
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Amara A. Kamara. All rights reserved.
          </p>
        </motion.div>
      </div>
    </Section>
  );
}
