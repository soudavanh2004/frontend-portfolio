"use client";
import { motion } from "framer-motion";

const certificates = [
  "Application Development Crash Course using Flutter (Mar 2023)",
  "G-DORM Hybrid-type Program FY2023",
  "SDGs-ICT Ideathon for Sustainable Development in Lao PDR (Nov 2024)",
  "Startup Pre-incubation Ideathon 6 (Jun 2025)",
  "Build with AI Vientiane 2025",
  "FEN JobFair and Education Event 2024"
];

export default function Certificates() {
  return (
    <section className="px-6 py-20 bg-gray-50">
      <motion.h2
        className="text-3xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Certificates & Events
      </motion.h2>

      <ul className="list-disc list-inside max-w-3xl mx-auto text-gray-700 space-y-2">
        {certificates.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
