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
    title: "ML-Based Signal Classifier",
    slug: "ml-signal-classifier",
    description:
      "A Python pipeline that classifies modulation schemes (AM, FM, BPSK, QPSK) from raw IQ samples using a 1D CNN.",
    longDescription:
      "Collected synthetic IQ datasets using GNU Radio with channel impairments (AWGN, Rayleigh fading). Preprocessed samples into fixed-length tensors and trained a 1D convolutional neural network in PyTorch. Exported the model to ONNX and deployed an inference endpoint with FastAPI so other tools can query classification results in real time.",
    date: "2024-02",
    tags: ["Python", "PyTorch", "GNU Radio", "FastAPI", "ONNX", "Signal Processing"],
    image: "/projects/signal-classifier.png",
    github: "https://github.com",
    demo: "https://example.com",
    featured: true,
    category: "ai",
    problem:
      "Manual modulation identification in lab RF captures was slow and inconsistent across team members.",
    process:
      "Generated a balanced 50k-sample dataset across 4 modulation classes at SNR levels from -10 to 20 dB. Designed a 4-layer 1D CNN with batch normalization, trained for 30 epochs with Adam and a cosine LR schedule.",
    challenges:
      "Class imbalance at low SNR caused the model to default to AM. Addressed with class-weighted loss and data augmentation via random phase rotations.",
    results:
      "Achieved 94.2% accuracy at SNR ≥ 0 dB and 81% at -5 dB. Inference latency via the FastAPI endpoint averaged 8 ms per 1024-sample frame.",
    lessons:
      "SNR-stratified evaluation is essential — aggregate accuracy hides poor low-SNR performance. ONNX export revealed a subtle shape mismatch in the batch dimension that was invisible during PyTorch training.",
  },
  {
    title: "Wireless Sensor Network PCB",
    slug: "wireless-sensor-network-pcb",
    description:
      "A 4-layer PCB for a battery-powered environmental sensor node with LoRa radio and an onboard ARM Cortex-M0+ MCU.",
    longDescription:
      "Designed a complete sensor node from schematic to manufactured board in Altium Designer. The board integrates an ATSAMD21 MCU, RFM95W LoRa module, BME680 environmental sensor, and a MAX17048 fuel gauge for battery monitoring. RF trace routing followed 50Ω microstrip guidelines and the board passed FCC Part 15 pre-scan at the campus EMC lab.",
    date: "2023-11",
    tags: ["Altium Designer", "ARM Cortex-M0+", "LoRa", "4-Layer PCB", "RF", "C"],
    image: "/projects/wsn-pcb.png",
    github: "https://github.com",
    featured: true,
    category: "hardware",
    problem:
      "Off-the-shelf development boards were too large and power-hungry for a long-term outdoor deployment requiring 6-month battery life.",
    process:
      "Started with system-level power budget in Excel, selected components to hit <50 µA average draw, routed the 4-layer stackup with signal integrity constraints, and iterated through two board spins.",
    challenges:
      "First spin had a LoRa TX spur at the MCU clock harmonic causing adjacent-channel interference. Fixed by adding π-filter on the RF supply and increasing keep-out around the crystal.",
    results:
      "Board achieved 7-month battery life in field testing. LoRa link budget provided 3 km range in light urban environment.",
    lessons:
      "Simulation (HyperLynx) and physical EMC pre-scan together caught issues that schematic review alone would have missed. Document every stackup assumption before sending Gerbers.",
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
