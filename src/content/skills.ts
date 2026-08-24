import type { SkillGroup } from "@/lib/types";

export const skills: SkillGroup[] = [
  { name: "Languages", items: ["Python", "Swift", "TypeScript", "C/C++", "SQL", "LaTeX"] },
  {
    name: "Machine Learning",
    items: ["PyTorch", "TensorFlow", "scikit-learn", "Model training", "Hyperparameter tuning", "Evaluation"],
  },
  {
    name: "Computer Vision",
    items: ["OpenCV", "YOLO", "SAM", "CoreML", "TensorFlow Lite", "Pose estimation", "3D reconstruction"],
  },
  {
    name: "NLP & LLMs",
    items: ["Hugging Face", "spaCy", "OpenAI", "Anthropic", "Gemini", "RAG", "Prompt engineering", "Fine-tuning"],
  },
  { name: "iOS", items: ["SwiftUI", "UIKit", "AVFoundation", "WebRTC", "Xcode", "App Store releases"] },
  {
    name: "Backend & Data",
    items: ["Django", "FastAPI", "Fastify", "PostgreSQL", "ChromaDB", "REST APIs", "pandas", "NumPy"],
  },
  { name: "Tools", items: ["Git", "Docker", "Linux", "AWS", "VTK", "Jupyter", "Agile / Scrum"] },
];
