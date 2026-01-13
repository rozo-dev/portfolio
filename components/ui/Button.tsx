"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
}

export default function Button({ 
  children, 
  href, 
  variant = "primary", 
  className = "",
  onClick 
}: ButtonProps) {
  const baseClasses = "inline-block px-8 py-4 rounded-none font-medium transition-all duration-300 text-sm tracking-wide uppercase";
  
  const variants = {
    primary: "bg-black text-white hover:bg-gray-800",
    secondary: "border-2 border-black text-black hover:bg-black hover:text-white",
  };

  const buttonClasses = `${baseClasses} ${variants[variant]} ${className}`;

  const MotionComponent = href ? motion.a : motion.button;

  return (
    <MotionComponent
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={buttonClasses}
    >
      {children}
    </MotionComponent>
  );
}
