import type { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: "internship-2024",
    company: "Apex Semiconductor",
    role: "Embedded Software Engineering Intern",
    type: "professional",
    startDate: "2024-05",
    endDate: "2024-08",
    description:
      "Developed firmware and validation tooling for mixed-signal ICs on the power management team. Worked across the full bring-up cycle from schematic review to production validation.",
    responsibilities: [
      "Wrote C firmware for an STM32-based test fixture that automated I²C register configuration and ADC readback for 6 power-management IC variants.",
      "Reduced bench validation time by 40% by scripting Python instrument control (VISA) and integrating results into a shared SQLite database.",
      "Collaborated with hardware engineers to debug SPI communication failures on a prototype board, identifying a trace impedance mismatch with a VNA.",
      "Authored internal documentation for the bring-up checklist and register map tooling, adopted by two other teams.",
    ],
    skills: ["C", "Python", "STM32", "I²C", "SPI", "VISA", "Git"],
  },
  {
    id: "president-2023",
    company: "Theta Tau Engineering Fraternity",
    role: "President",
    type: "leadership",
    startDate: "2023-05",
    endDate: "2024-05",
    description:
      "Led a 60-member co-ed professional engineering fraternity, overseeing chapter operations, member development, and alumni relations.",
    responsibilities: [
      "Chaired weekly executive board meetings and set semester-level strategic goals aligned with national chapter standards.",
      "Grew chapter membership by 25% over two semesters by restructuring the recruitment and onboarding process.",
      "Managed a $12,000 annual budget across professional development, philanthropy, and social programming.",
      "Organized a regional networking event with 4 corporate sponsors and 120+ student attendees.",
      "Served as primary point of contact for the university dean's office and national headquarters.",
    ],
    skills: ["Leadership", "Public Speaking", "Budget Management", "Event Planning", "Conflict Resolution"],
  },
  {
    id: "ieee-2022",
    company: "IEEE Student Branch — ECE Department",
    role: "Technical Project Lead",
    type: "technical",
    startDate: "2022-09",
    endDate: "2023-05",
    description:
      "Led a 10-person interdisciplinary team designing and building an autonomous line-following robot for the regional IEEE hardware competition.",
    responsibilities: [
      "Designed the robot's sensor fusion architecture combining IR line sensors and an MPU-6050 IMU for reliable track detection.",
      "Delegated subsystem ownership (power, control, mechanical) and ran weekly design-review meetings.",
      "Wrote the embedded C firmware for the motor control loop running on an Arduino Mega.",
      "Placed 2nd out of 18 teams at the regional IEEE hardware competition.",
      "Mentored 3 junior members in PCB design fundamentals using KiCad.",
    ],
    skills: ["C", "Arduino", "KiCad", "Sensor Fusion", "Team Leadership", "Project Management"],
  },
];
