"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { Experience } from "@/types";

// ─── Type config ──────────────────────────────────────────────────────────────

type TypeConfig = {
  badge: string;
  circleBg: string;
  circleText: string;
  skillPill: string;
  label: string;
};

const TYPE_CONFIG: Record<Experience["type"], TypeConfig> = {
  professional: {
    badge:       "bg-[#0ea5e9]/10 text-[#38bdf8] border border-[#0284c7]/30",
    circleBg:    "bg-[#0ea5e9]/15 border-[#0ea5e9]/30",
    circleText:  "text-[#38bdf8]",
    skillPill:   "bg-[#0ea5e9]/10 text-[#38bdf8] border-[#0284c7]/20",
    label:       "Internship",
  },
  leadership: {
    badge:       "bg-violet-500/10 text-violet-300 border border-violet-500/30",
    circleBg:    "bg-violet-500/15 border-violet-500/30",
    circleText:  "text-violet-300",
    skillPill:   "bg-violet-500/10 text-violet-300 border-violet-500/20",
    label:       "Leadership",
  },
  technical: {
    badge:       "bg-emerald-500/10 text-emerald-300 border border-emerald-500/30",
    circleBg:    "bg-emerald-500/15 border-emerald-500/30",
    circleText:  "text-emerald-300",
    skillPill:   "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
    label:       "Technical",
  },
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

function getInitials(company: string): string {
  return company
    .split(/[\s—–-]+/)
    .filter((w) => /^[A-Za-z]/.test(w))
    .map((w) => w[0].toUpperCase())
    .join("")
    .slice(0, 2);
}

function formatDate(d: string): string {
  if (d === "Present") return "Present";
  const [y, m] = d.split("-");
  return new Date(+y, +m - 1).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}

// ─── Component ───────────────────────────────────────────────────────────────

interface Props {
  experience: Experience;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}

export default function ExperienceCard({
  experience,
  index,
  isOpen,
  onToggle,
}: Props) {
  const cfg = TYPE_CONFIG[experience.type];
  const initials = getInitials(experience.company);
  const period = `${formatDate(experience.startDate)} – ${formatDate(experience.endDate)}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className={`overflow-hidden rounded-xl border bg-[#0a0a0f] transition-colors duration-200
                  ${isOpen ? "border-[#0284c7]/40" : "border-white/5 hover:border-white/10"}`}
    >
      {/* ── Collapsed header (always visible) ─────────────────────── */}
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center gap-4 px-6 py-5 text-left"
      >
        {/* Company initials circle */}
        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border
                      text-sm font-bold font-mono ${cfg.circleBg} ${cfg.circleText}`}
        >
          {initials}
        </div>

        {/* Main text block */}
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-base font-semibold text-white truncate">
              {experience.role}
            </span>
            <span className={`shrink-0 rounded-md px-2 py-0.5 text-[11px] font-medium ${cfg.badge}`}>
              {cfg.label}
            </span>
          </div>
          <div className="mt-0.5 flex flex-wrap items-center gap-x-3 gap-y-0.5">
            <span className="text-sm text-[#94a3b8]">{experience.company}</span>
            <span className="text-xs text-[#64748b]">{period}</span>
          </div>
        </div>

        {/* Chevron */}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0 text-[#64748b]"
        >
          <ChevronDown size={18} />
        </motion.div>
      </button>

      {/* ── Expanded content ──────────────────────────────────────── */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <div className="border-t border-white/5 px-6 pb-6 pt-5">

              {/* Description */}
              <p className="mb-5 text-sm leading-relaxed text-[#94a3b8]">
                {experience.description}
              </p>

              {/* Responsibilities */}
              <ul className="mb-5 flex flex-col gap-2">
                {experience.responsibilities.map((r, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-[#94a3b8]">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0ea5e9]/60" />
                    {r}
                  </li>
                ))}
              </ul>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {experience.skills.map((s) => (
                  <span
                    key={s}
                    className={`rounded-md border px-2.5 py-1 text-xs font-medium ${cfg.skillPill}`}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
