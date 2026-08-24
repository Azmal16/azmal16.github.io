import type { Role } from "@/lib/types";

export const experience: Role[] = [
  {
    title: "Intern Software Engineer (AI)",
    org: "Ameya Health",
    location: "Edmonton, Alberta",
    period: "May 2026 — Present",
    current: true,
    points: [
      "Built an LLM-powered pathway automation system that generates patient notification pathways (push, email, SMS) directly from program content, using Gemini, GPT and Claude.",
      "Ported the Streamlit prototype to a production TypeScript stack (Fastify, React) with live database integration, few-shot prompting and video-transcript-augmented generation.",
      "Shipped an AI exercise routine agent that generates and conversationally edits clinician-reviewed programs — deterministic risk scoring pre-filters the exercise catalog and re-validates every model selection, so unsafe exercises cannot reach a patient.",
      "Developed a Gemini TTS voiceover studio — CLI and web app — that turns health-program scripts into production audio with style-controlled synthesis.",
    ],
    stack: ["Python", "TypeScript", "Fastify", "React", "Gemini", "GPT", "Claude", "PostgreSQL"],
  },
  {
    title: "Data Science Intern",
    org: "Ameya Health",
    location: "Edmonton, Alberta",
    period: "Nov 2025 — Dec 2025",
    points: [
      "Built a machine learning pipeline for personalised exercise routine generation, training on clinical datasets to produce age-appropriate patient programs.",
      "Engineered domain-specific features and risk-stratification thresholds for exercise selection under monotonic progression constraints.",
      "Evaluated model output through statistical analysis of risk distributions, physician-routine overlap and program-level performance metrics.",
    ],
    stack: ["Python", "scikit-learn", "pandas", "NumPy", "Jupyter"],
  },
  {
    title: "Software Engineer (AI & iOS)",
    org: "MyMedicalHUB International Ltd.",
    location: "Dhaka, Bangladesh",
    period: "Nov 2022 — Aug 2025",
    points: [
      "Deployed on-device pose estimation models (MoveNet, YOLO) with CoreML and TFLite for real-time human pose inference in production iOS applications.",
      "Developed an end-to-end NLP chatbot using spaCy and Hugging Face Transformers for intent classification and entity extraction, serving real-time user interactions.",
      "Optimised ML inference pipelines and worked across teams to improve latency, accuracy and user experience over multiple product modules.",
    ],
    stack: ["Swift", "SwiftUI", "CoreML", "TensorFlow Lite", "Python", "spaCy", "Transformers", "WebRTC"],
  },
];
