import type { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "ChainPilot",
    slug: "chainpilot",
    description:
      "A closed-loop testing framework for enterprise AI agents built in 24 hours at the Hack-a-Claw NVIDIA Hackathon at UCSC, pairing a live supply chain simulation with a multi-agent pipeline powered by NVIDIA Nemotron.",
    longDescription:
      "Designed and built ChainPilot, a closed-loop testing framework for enterprise AI agents, in 24 hours for the Hack-a-Claw NVIDIA Hackathon at UCSC. The system pairs a live supply chain simulation with a multi-agent pipeline powered by NVIDIA Nemotron and orchestrated via OpenClaw. A proposer agent, a critic agent, and an executor agent work together against a real backend with constrained APIs. Every decision gets evaluated on measurable downstream KPIs including service level, cost, emissions, and profit.",
    date: "2026-05",
    tags: ["NVIDIA Nemotron", "Multi-Agent AI", "Python", "OpenClaw", "Supply Chain", "Agentic AI"],
    image: "/projects/chainpilot.png",
    featured: true,
    category: "ai",
    problem:
      "Most AI agent frameworks only ask whether an agent completed a task. In enterprise environments, that is not enough. An agent might call the right API but still make a decision that makes the overall system worse. Existing evaluation tools focus on reasoning and tool use, but none of them measure what actually happens after the agent acts.",
    process:
      "Started by reading research on agentic AI topics like ReAct, Reflexion, and multi-agent critique to find the gap between task completion and decision quality. From there, designed a system where three specialized agents handle proposal, critique and revision, and constrained execution separately. Built the supply chain simulation with KPIs that intentionally conflict with each other, so agents have to reason through real tradeoffs instead of just solving a static prompt.",
    challenges:
      "Keeping multi-agent state consistent across all three agent turns was tricky within a 24-hour build window. Making sure agents could not silently change simulation state required careful constraint enforcement at the API layer, so all execution had to flow through validated backend calls. Getting the real-time KPI comparison working on the dashboard, so users could see before and after impact clearly, also took several rounds of iteration under time pressure.",
    results:
      "Delivered a fully deployed, working agent system within the 24-hour limit. The demo walked through a concrete supply chain scenario where Chicago had surplus inventory and the West Coast distribution center was at risk of stockout. The full propose, critique, and execute loop ran live, and the dashboard updated in real time showing measurable KPI changes after each agent decision.",
    lessons:
      "Separating the simulator from the optimizer early on was the right call. It kept the agents honest and made the evaluation meaningful rather than circular. Defining the execution constraint model before writing agent logic also helped avoid a whole category of hard-to-debug bugs where agents were silently mutating state. Running a critic agent on top of the proposer noticeably improved decision quality, which was a good real-world validation of the core idea behind the project.",
  },
  {
    title: "Electromagnetic Car",
    slug: "electromagnetic-car",
    description:
      "A battery-powered car built for AP Physics C that drives to a set of paper clips and picks them up using a hand-wound electromagnet, powered by a parallel circuit from two AA batteries.",
    longDescription:
      "Designed and built a small electromagnetic car for AP Physics C in high school. The car used two AA batteries wired in a parallel circuit to power both a set of drive wheels and a homemade electromagnet at the same time. The electromagnet was built by wrapping copper wire around a bolt to create a coil that could generate a magnetic field strong enough to pick up metal objects. The goal was to drive the car to a set of paper clips and pick up all 10 of them.",
    date: "2025-05",
    tags: ["Electromagnetics", "Circuit Design", "Parallel Circuit", "Physics", "AP Physics C"],
    image: "/projects/electromagnetic-car.png",
    demo: "https://youtube.com", // Replace with your Electromagnetic Car video URL
    demoLabel: "Watch Video",
    featured: true,
    category: "hardware",
    problem:
      "The main challenge was figuring out how to power two separate systems, the motors and the electromagnet, from the same low-voltage battery source without one system pulling too much current and weakening the other. A series circuit would have split the voltage and left both systems underpowered, so the wiring setup needed to be thought through carefully.",
    process:
      "Started by planning out the circuit on paper before building anything. Chose a parallel configuration so both the drive motors and the electromagnet would each receive the full 1.5 volts from the batteries rather than sharing it. The AP Physics C coursework on electromagnetism and Ampere's Law directly informed the decision to maximize the number of wire turns on the bolt, since more turns means a stronger magnetic field.",
    challenges:
      "Getting the electromagnet strong enough to reliably lift paper clips took several winding attempts. Too few turns and the magnet was too weak. The parallel circuit also needed to be wired cleanly to avoid shorts, which required careful attention during assembly. Balancing the car's weight distribution so it could drive straight while carrying the electromagnet on the front also took some adjustment.",
    results:
      "The car successfully picked up all 10 paper clips in the final test. The parallel circuit kept both systems running at full power throughout the run, and the hand-wound electromagnet held all 10 clips without dropping any.",
    lessons:
      "This project brought a lot of the AP Physics C curriculum to life in a hands-on way. Concepts like magnetic flux, current loops, and circuit analysis stopped being just formulas and became real design decisions with visible results. Planning the circuit layout before starting the physical build also saved a lot of time and prevented wiring mistakes during assembly.",
  },
  {
    title: "Thor Hammer Microphone Holder",
    slug: "thor-hammer-microphone-holder",
    description:
      "A scaled-up Thor Hammer microphone holder designed and fabricated in a PLTW Engineering Design and Development course, featuring a three-part snap assembly and custom Celtic and Greek detailing.",
    longDescription:
      "Designed and built a Thor Hammer microphone holder for Engineering Design and Development, a PLTW course in high school. The holder was scaled up from a toy Thor Hammer that belonged to our teacher and redesigned to fit a real microphone inside the handle. The final product was a three-part assembly that snaps together through a locking mechanism and lets the user speak into the microphone while it sits inside the hammer head.",
    date: "2024-11",
    tags: ["CAD", "Fusion 360", "Product Design", "Fabrication", "PLTW"],
    image: "/projects/thor-hammer.png",
    demo: "https://youtube.com", // Replace with your Thor Hammer video URL
    demoLabel: "Watch Video",
    featured: true,
    category: "hardware",
    problem:
      "This was an unnecessary invention, and we knew that going in. The goal was not to solve a practical problem but to practice the full engineering design process from constraints and research through modeling and fabrication, using a fun concept as the vehicle.",
    process:
      "Used our teacher's toy Thor Hammer as the reference model and scaled it up proportionally so the microphone could fit inside the handle without making the hammer look distorted. Broke the design into three separate parts to make it easier to manufacture and assemble. Added a locking snap mechanism so the pieces connect securely and the microphone can be loaded in through the top. Also incorporated a Celtic Star on the sides of the hammer to represent our classmate Geuss' heritage, and stamped the piece with \"Microphone Ethen and Aadi Co 2025\" written in Greek letters because it looked cool and gave the project some personality.",
    challenges:
      "The biggest constraint was keeping the hammer proportional to the original toy while also making it large enough to actually hold a microphone. Scaling up a model while preserving visual proportions required careful measurement and several design revisions. Getting the three-part locking mechanism to snap together cleanly and hold under normal use also took a few iterations to dial in.",
    results:
      "The final hammer holder fit the microphone correctly, maintained proportional dimensions relative to the original toy, and held together reliably through the locking mechanism. The top opening allowed the microphone to remain fully functional while seated inside the hammer head.",
    lessons:
      "Scaling an existing object into a functional product is harder than it looks. Small proportion errors that seem minor in a sketch become obvious in the physical model. Breaking the design into separate parts early on made the whole build more manageable and made it easier to fix individual sections without rebuilding the whole thing. Also learned that adding meaningful personal details, like the Celtic Star and the Greek text, makes a project feel like it actually belongs to the people who built it.",
  },
  {
    title: "Real-Time Lab Data Dashboard",
    slug: "lab-data-dashboard",
    description:
      "A web dashboard that streams live sensor readings from lab instruments over WebSocket and renders them as interactive charts.",
    longDescription:
      "Built a Next.js frontend that connects to a Node.js/WebSocket server, which itself polls lab instruments via VISA/GPIB using a Python bridge script. Readings are stored in a lightweight SQLite database and served via a REST API for historical queries. Charts are rendered with Recharts and update at 1 Hz without page refresh.",
    date: "2023-08",
    tags: ["Next.js", "Node.js", "WebSocket", "Python", "SQLite", "Recharts"],
    image: "/projects/lab-dashboard.png",
    github: "https://github.com",
    featured: false,
    category: "web",
    problem:
      "Lab members were manually copying multimeter and oscilloscope readings into spreadsheets during long-running experiments.",
    process:
      "Wrote a Python VISA wrapper for instrument communication, piped data to a Node.js server over stdin, and exposed it via WebSocket. The Next.js dashboard subscribes and renders live charts.",
    challenges:
      "GPIB polling latency varied by instrument model. Solved with a per-instrument configurable poll interval and a debounced update queue on the frontend.",
    results:
      "Eliminated manual transcription errors. Used in 3 ongoing research experiments; saved an estimated 2 hours of data-entry work per week.",
    lessons:
      "WebSocket backpressure handling matters at scale — a slow chart render loop initially caused dropped frames. Moving chart updates to a requestAnimationFrame queue fixed it.",
  },
  {
    title: "RTOS Task Scheduler Benchmarking Suite",
    slug: "rtos-scheduler-benchmark",
    description:
      "A benchmarking harness written in C that measures context-switch latency, jitter, and CPU utilization across FreeRTOS priority levels.",
    longDescription:
      "Wrote a suite of synthetic task workloads in C targeting the STM32F4 Nucleo board. Each test uses a hardware timer to timestamp context switches and logs results via SWO/ITM to a host-side Python parser that produces statistical reports. Benchmarked preemptive vs. cooperative scheduling and the effect of task count on worst-case interrupt latency.",
    date: "2023-04",
    tags: ["C", "FreeRTOS", "STM32", "Python", "RTOS", "Embedded Systems"],
    image: "/projects/rtos-benchmark.png",
    github: "https://github.com",
    featured: false,
    category: "embedded",
    problem:
      "The team had no quantitative baseline for FreeRTOS scheduler overhead before committing to it for a timing-critical project.",
    process:
      "Defined test cases for 2, 4, 8, and 16 tasks at mixed priorities, automated test execution with a Python host script, and visualized results with matplotlib histograms.",
    challenges:
      "SWO bandwidth was a bottleneck — logging every context switch saturated the 2 MHz SWO clock. Solved by logging only on threshold-crossing events.",
    results:
      "Measured median context-switch latency of 1.8 µs with <200 ns jitter at 168 MHz, giving the team confidence for a 5 ms hard deadline application.",
    lessons:
      "Measurement infrastructure needs to be as carefully designed as the system under test. A poorly placed timestamp invalidates your results.",
  },
];
