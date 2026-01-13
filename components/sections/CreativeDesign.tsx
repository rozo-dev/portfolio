"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export default function CreativeDesign() {
  return (
    <Section id="creative-design">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-12"
        >
          Creative Design
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto"
        >
          Beyond engineering, I actively work as a creative designer — handling branding, 
          visual communication, and digital content for organizations and businesses.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button 
            href="https://drive.google.com/drive/folders/1M_bxFDsV9CL3lDtlcDMQtqn4jisPsruv" 
            variant="primary"
          >
            View Design Portfolio
          </Button>
        </motion.div>
      </div>
    </Section>
  );
}
