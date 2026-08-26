import type { MediaItem } from "@/lib/types";

export const profile = {
  name: "Azmal Awasaf",
  /** Cycled one at a time under the name in the hero. */
  roles: ["AI / ML Engineer", "Software Engineer", "Data Scientist", "MSc Candidate"],
  headline:
    "I build intelligent systems at the intersection of machine learning, information retrieval and healthcare.",
  summary:
    "Graduate student at the University of Alberta and an AI engineer with three years of shipping production machine learning — on-device pose estimation in App Store apps, LLM pipelines that generate real patient content, and retrieval benchmarks that hold up to peer review.",
  location: "Edmonton, Alberta 🇨🇦",
  availability: "Open to full-time roles",

  /** Rendered as chips in the Contact section. */
  seeking: [
    "Software Engineering",
    "AI / ML Engineering",
    "Data Science",
    "Data Analysis",
  ],

  /**
   * Rendered as a circle. Use a square, head-and-shoulders crop —
   * portrait-square.jpg is cropped from the full-length portrait.jpg, which is
   * kept alongside it as the source. To swap in a new photo, drop a square
   * image in /public/media/profile/ and point `src` at it; if the face sits
   * high or low in the frame, nudge the crop with `position` (e.g. "50% 35%").
   */
  portrait: {
    src: "/media/profile/portrait-square.jpg",
    alt: "Azmal Awasaf on the University of Alberta campus",
    position: "50% 50%",
  } satisfies MediaItem,

  email: "azmalawasaf@gmail.com",
  academicEmail: "awasaf@ualberta.ca",
  github: "https://github.com/Azmal16",
  linkedin: "https://www.linkedin.com/in/azmal-awasaf/",
  cv: "/Azmal_Awasaf_CV.pdf",
  siteUrl: "https://azmal16.github.io",

  /** Shown as a small band under the hero. */
  facts: [
    { label: "Now", value: "Intern Software Engineer (AI) @ Ameya Health" },
    { label: "Studying", value: "MSc Computing Science, UAlberta" },
    { label: "Shipped", value: "2 apps on the App Store & Play Store" },
    { label: "Looking for", value: "Full-time SWE, AI/ML, Data roles" },
  ],

  /** Paragraphs for the About section. */
  about: [
    "I am a Master's student in Computing Science at the University of Alberta, specialising in multimedia and machine learning. Before Edmonton I spent nearly three years at MyMedicalHUB in Dhaka as a software engineer working across AI and iOS — the kind of role where you train the model on Monday and ship it to real users on Friday.",
    "That mix is still how I like to work. I am equally comfortable reading a retrieval paper and profiling a CoreML inference pipeline, and most of what I have built lives somewhere between the two: on-device pose estimation for musculoskeletal assessment, LLM pipelines that draft patient notification pathways for clinicians to review, and a benchmark for entity-oriented retrieval that is currently being written up as a short paper.",
    "What I care about is the distance between a promising result and something a person can actually use. Healthcare is where I have spent most of that effort, but the instinct travels.",
  ],
};

export type Profile = typeof profile;
