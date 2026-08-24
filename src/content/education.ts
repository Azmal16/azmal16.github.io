import type { EducationItem } from "@/lib/types";

export const education: EducationItem[] = [
  {
    school: "University of Alberta",
    credential: "MSc in Computing Science (Course-based), Multimedia",
    location: "Edmonton, Alberta",
    period: "Sep 2025 — Present",
    notes: [
      "Multimedia communications, computer vision and 3D imaging, graphics and visualisation, AI in multimedia.",
    ],
  },
  {
    school: "Rajshahi University of Engineering & Technology",
    credential: "BSc in Computer Science & Engineering",
    location: "Rajshahi, Bangladesh",
    period: "2017 — 2022",
    notes: ["Thesis: real-time traffic light detection benchmarking YOLOv3, YOLOv5 and YOLOv7."],
  },
];

export const certifications = [
  { title: "Structuring Machine Learning Projects", issuer: "Coursera", year: "2021" },
  { title: "Improving Deep Neural Networks", issuer: "Coursera", year: "2021" },
  { title: "Neural Networks and Deep Learning", issuer: "Coursera", year: "2021" },
  { title: "Digital Skills: Artificial Intelligence", issuer: "Accenture", year: "2020" },
];
