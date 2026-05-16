"use client";

import { motion, type Variants } from "framer-motion";

const STATS = [
  { value: "5+",  label: "Projects Completed" },
  { value: "3",   label: "Leadership Roles"   },
  { value: "10+", label: "Technologies"       },
  { value: "3",   label: "Years Programming"  },
] as const;

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-2">About Me</h2>
          <div className="h-1 w-12 rounded-full bg-[#0ea5e9]" />
        </motion.div>

        <div className="grid grid-cols-1 items-start gap-14 md:grid-cols-2">

          {/* ── Bio text ──────────────────────────────────────────────── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col gap-5 text-[#94a3b8] leading-relaxed"
          >
            <motion.p variants={itemVariants}>
              I&apos;m an Electrical Engineering student at UC Santa Cruz with a genuine
              obsession for the intersection of hardware and software. Whether I&apos;m
              writing bare-metal firmware on an STM32, routing a 4-layer PCB, or training
              a neural network on RF signal data, I&apos;m most at home building systems
              that have real physical impact.
            </motion.p>

            <motion.p variants={itemVariants}>
              My curiosity about how things{" "}
              <em className="text-white not-italic font-medium">actually</em> work — not
              just at the software abstraction level, but all the way down to the silicon —
              has led me through embedded systems, control theory, and the rapidly evolving
              space where AI meets hardware design. I find the most interesting problems
              live at those boundaries.
            </motion.p>

            <motion.p variants={itemVariants}>
              Outside of technical work, I&apos;ve led a 60-member engineering fraternity,
              directed competition hardware teams, and mentored peers in PCB layout and
              embedded programming. I believe the best engineers combine deep technical
              craft with the ability to communicate, lead, and ship — and that&apos;s the
              engineer I&apos;m working to become.
            </motion.p>

            {/* Quick-fact tags */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2 pt-2">
              {[
                "Embedded Systems",
                "PCB Design",
                "Machine Learning",
                "RTOS / Firmware",
                "Full-Stack Web",
                "Control Theory",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-white/5 bg-[#111118] px-3 py-1
                             text-xs font-medium text-[#64748b]"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Stat cards ────────────────────────────────────────────── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {STATS.map(({ value, label }) => (
              <motion.div
                key={label}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 350, damping: 22 }}
                className="flex flex-col items-center justify-center rounded-xl border border-white/5
                           bg-[#111118] p-8 text-center
                           hover:border-[#0284c7]/40 hover:shadow-[0_0_20px_rgba(14,165,233,0.06)]
                           transition-colors duration-200"
              >
                <span className="text-4xl font-bold text-[#38bdf8]">{value}</span>
                <span className="mt-2 text-sm text-[#64748b]">{label}</span>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
