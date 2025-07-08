"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="px-6 py-20 max-w-3xl mx-auto">
      <motion.h2
        className="text-3xl font-bold mb-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>
      <p className="text-gray-700 leading-7">
        I’m a 4th-year Information Technology student at the National University of Laos.
        Currently the team leader at CEIT Support Club. Passionate about front-end development
        and team collaboration. I love building clean and functional web interfaces.
      </p>

      <div className="mt-6">
        <h3 className="font-semibold">📍 Location</h3>
        <p>Thongkang Village, Sisattanak District, Vientiane</p>

        <h3 className="font-semibold mt-4">📧 Email</h3>
        <p>soudavanhlstp@gmail.com</p>

        <h3 className="font-semibold mt-4">📞 Phone</h3>
        <p>020 99252207</p>
      </div>
    </section>
  );
}
