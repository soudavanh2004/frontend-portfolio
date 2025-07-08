"use client";
import { motion } from "framer-motion";

const experiences = [
  { role: "Frontend Intern", company: "IQURI Tech", date: "May – Aug 2023" },
  { role: "Digital Marketing Intern", company: "Unitel Lao", date: "Aug 2024" },
  { role: "Intern", company: "KOMERI", date: "Dec 2023 – Jan 2024" },
  { role: "Leader", company: "CEIT Support Club", date: "2024 – Present" }
];

const education = [
  { degree: "BSc. Information Technology", place: "National University of Laos", date: "2020 – Now" },
  { degree: "High School", place: "Xaiyabouly Province", date: "2013 – 2020" }
];

export default function Experience() {
  return (
    <section className="px-6 py-20 max-w-4xl mx-auto">
      <motion.h2
        className="text-3xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Experience & Education
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-xl font-semibold mb-4">Experience</h3>
          {experiences.map((exp) => (
            <div key={exp.role} className="mb-4">
              <p className="font-medium">{exp.role} - {exp.company}</p>
              <p className="text-sm text-gray-600">{exp.date}</p>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Education</h3>
          {education.map((edu) => (
            <div key={edu.degree} className="mb-4">
              <p className="font-medium">{edu.degree}</p>
              <p className="text-sm text-gray-600">{edu.place} ({edu.date})</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
