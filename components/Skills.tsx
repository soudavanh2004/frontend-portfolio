"use client";
import { motion } from "framer-motion";

const skills = {
  Frontend: ["HTML", "CSS", "Dart", "Flutter"],
  Backend: ["Node.js", "Firebase", "MySQL"],
  Tools: ["Git", "Android Studio", "VS Code", "Microsoft Office"],
  Language: ["Lao (Native)", "English (Basic)"]
};

export default function Skills() {
  return (
    <section className="bg-gray-50 px-6 py-20">
      <motion.h2
        className="text-3xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Skills
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <h3 className="text-xl font-semibold mb-2">{category}</h3>
            <ul className="list-disc list-inside text-gray-700">
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
