"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ExperienceCard from "@/components/ui/ExperienceCard";
import { experiences } from "@/data/experience";

export default function Experience() {
  const [openId, setOpenId] = useState<string | null>(experiences[0]?.id ?? null);

  function handleToggle(id: string) {
    setOpenId((prev) => (prev === id ? null : id));
  }

  return (
    <section id="experience" className="py-24 px-6 bg-[#111118]">
      <div className="max-w-4xl mx-auto">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-2">Experience</h2>
          <div className="h-1 w-12 rounded-full bg-[#0ea5e9]" />
        </motion.div>

        {/* Accordion list */}
        <div className="flex flex-col gap-3">
          {experiences.map((exp, i) => (
            <ExperienceCard
              key={exp.id}
              experience={exp}
              index={i}
              isOpen={openId === exp.id}
              onToggle={() => handleToggle(exp.id)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
