import type { MediaItem } from "@/lib/types";

export const profile = {
  name: "Azmal Awasaf",
  /** Cycled one at a time under the name in the hero. */
  roles: ["AI Engineer", "ML Researcher", "iOS Developer", "MSc Candidate"],
  headline:
    "I build intelligent systems at the intersection of machine learning, information retrieval and healthcare.",
  summary:
    "Graduate student at the University of Alberta and an AI engineer with three years of shipping production machine learning — on-device pose estimation in App Store apps, LLM pipelines that generate real patient content, and retrieval benchmarks that hold up to peer review.",
  location: "Edmonton, Alberta 🇨🇦",
  availability: "Open to New Grad & Internship roles",

  /** Drop a portrait at /public/media/profile/portrait.jpg and set src below. */
  portrait: {
    src: "",
    alt: "Azmal Awasaf",
  } satisfies MediaItem,

  email: "azmalawasaf@gmail.com",
  academicEmail: "awasaf@ualberta.ca",
  github: "https://github.com/Azmal16",
  linkedin: "https://www.linkedin.com/in/azmal-awasaf/",
  cv: "/Azmal_Awasaf_CV.pdf",
  siteUrl: "https://azmal16.github.io",

  /** Shown as a small band under the hero. */
  facts: [
    { label: "Now", value: "AI Engineer Intern @ Ameya Health" },
    { label: "Studying", value: "MSc Computing Science, UAlberta" },
    { label: "Shipped", value: "2 apps on the App Store & Play Store" },
    { label: "Writing", value: "CIKM 2026 short paper — Robust-EO" },
  ],

  /** Paragraphs for the About section. */
  about: [
    "I am a Master's student in Computing Science at the University of Alberta, specialising in multimedia and machine learning. Before Edmonton I spent nearly three years at MyMedicalHUB in Dhaka as a software engineer working across AI and iOS — the kind of role where you train the model on Monday and ship it to real users on Friday.",
    "That mix is still how I like to work. I am equally comfortable reading a retrieval paper and profiling a CoreML inference pipeline, and most of what I have built lives somewhere between the two: on-device pose estimation for musculoskeletal assessment, LLM pipelines that draft patient notification pathways for clinicians to review, and a benchmark for entity-oriented retrieval that is currently under way as a CIKM short paper.",
    "What I care about is the distance between a promising result and something a person can actually use. Healthcare is where I have spent most of that effort, but the instinct travels.",
  ],
};

export type Profile = typeof profile;
