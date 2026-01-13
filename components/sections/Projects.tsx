"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import ProjectCard from "@/components/ui/ProjectCard";

const projects = [
  {
    name: "WaterWatch",
    description:
      "Intelligent IoT-based water management system for real-time monitoring and control of household water usage. Features live sensor data, leak detection, water quality monitoring, and pump control via a web dashboard.",
    tech: ["React", "Redux Toolkit", "Tailwind", "Socket.IO", "FusionCharts", "Node.js", "Express", "MongoDB", "MQTT", "JWT"],
    liveUrl: "https://waterwatch-murex.vercel.app/",
    imagePath: "waterwatch.png",
  },
  {
    name: "Recap",
    description:
      "A full-stack MERN note-taking application focused on simplicity, organization, and visual clarity. Supports authentication, categorized notes, and dynamic backgrounds.",
    tech: ["React", "Context API", "Tailwind", "Node.js", "Express", "MongoDB", "Passport.js"],
    liveUrl: "https://recap-note-puce.vercel.app/",
    imagePath: "recap.png",
  },
  {
    name: "HMonitor",
    description:
      "Real-time health monitoring system for tracking patient temperature and heart rate with live charts, secure authentication, patient management, and email reporting.",
    tech: ["React", "Vite", "Tailwind", "Chart.js", "Socket.IO", "Node.js", "MongoDB", "JWT"],
    liveUrl: "https://hmonitor.vercel.app/",
    imagePath: "hmonitor.png",
  },
  {
    name: "Qubic",
    description:
      "A clean, modern marketing website for an AI automation agency. Designed to communicate innovation, clarity, and trust through motion-driven UI and minimalist layouts.",
    tech: ["React", "Tailwind", "Sass", "Framer Motion"],
    liveUrl: "https://qubic-psi.vercel.app",
    imagePath: "qubic.png",
  },
];

export default function Projects() {
  return (
    <Section id="projects" className="bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-20"
        >
          Featured Projects
        </motion.h2>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} {...project} index={index} />
          ))}
        </div>
      </div>
    </Section>
  );
}
