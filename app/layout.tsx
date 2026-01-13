import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";

const inter = Inter({ subsets: ["latin"], variable: '--font-geist-sans' });

export const metadata: Metadata = {
  title: "Amara A. Kamara — Engineer (IoT & Web) / Creative Designer",
  description: "Full-stack developer with IoT specialization and a strong creative design background. Building intelligent systems and designing clean, meaningful digital experiences.",
  keywords: ["IoT Engineer", "Full-Stack Developer", "Creative Designer", "Web Developer", "MERN Stack"],
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" }
    ],
    shortcut: ["/favicon.ico", "/icon.png", "/icon.svg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-white text-black`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
