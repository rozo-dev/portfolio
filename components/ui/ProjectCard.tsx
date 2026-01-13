"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "./Button";
import { useState } from "react";

interface ProjectCardProps {
  name: string;
  description: string;
  tech: string[];
  liveUrl: string;
  githubUrl?: string;
  imagePath: string;
  index: number;
}

export default function ProjectCard({
  name,
  description,
  tech,
  liveUrl,
  githubUrl,
  imagePath,
  index,
}: ProjectCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="grid md:grid-cols-2 gap-8 md:gap-12 items-center border-t border-gray-200 pt-12"
    >
      {/* Text Content */}
      <div className="order-2 md:order-1">
        <h3 className="text-3xl md:text-4xl font-semibold mb-4">{name}</h3>
        <p className="text-gray-600 text-lg mb-6 leading-relaxed">{description}</p>
        
        <div className="mb-8">
          <p className="text-sm uppercase tracking-wider text-gray-500 mb-3">Tech Stack</p>
          <div className="flex flex-wrap gap-2">
            {tech.map((item, i) => (
              <span
                key={i}
                className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <Button href={liveUrl} variant="primary">
            Live Demo
          </Button>
          {githubUrl && (
            <Button href={githubUrl} variant="secondary">
              GitHub
            </Button>
          )}
        </div>
      </div>

      {/* Image */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="order-1 md:order-2 relative h-64 md:h-80 bg-gray-100 rounded-none overflow-hidden group"
      >
        {!imageError ? (
          <Image
            src={`/projects/${imagePath}`}
            alt={`${name} screenshot`}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover object-top"
            onError={() => setImageError(true)}
            priority={index === 0}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm">
            <div className="text-center">
              <p className="mb-2">Image not found</p>
              <p className="text-xs opacity-60">/public/projects/{imagePath}</p>
            </div>
          </div>
        )}
        <motion.div
          className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-300"
        />
      </motion.div>
    </motion.div>
  );
}
