import type { AppItem } from "@/lib/types";

export const apps: AppItem[] = [
  {
    name: "EMMA Health",
    tagline: "Efficient Musculoskeletal Management Assistant",
    description:
      "Turns a phone camera into a movement assessment tool. Guided movements, on-device pose estimation, an NLP symptom triage bot, and a WebRTC channel for live sessions with a clinician.",
    role: "Software Engineer — ML pipeline, assessment flows, telemedicine",
    stack: ["Swift", "SwiftUI", "CoreML", "TensorFlow Lite", "WebRTC"],
    links: [
      { label: "App Store", href: "https://apps.apple.com/us/app/emma-health/id6477580332", icon: "appstore" },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.mmh.emmahealth",
        icon: "playstore",
      },
    ],
    media: [
      {
        src: "/media/apps/emma-health.jpg",
        alt: "Three EMMA Health screens — the assessment dashboard, prescribed home exercises, and a generated clinical report",
      },
    ],
  },
  {
    name: "Atlas Athlete",
    tagline: "AI-powered fitness and performance assistant",
    description:
      "A full-body movement screen that runs from a phone — no wearables — surfacing asymmetry and movement inefficiency, with injury-risk classification driving personalised exercise recommendations.",
    role: "Software Engineer — pose estimation, injury-risk models, live feedback",
    stack: ["Swift", "SwiftUI", "CoreML", "NLP"],
    links: [
      { label: "App Store", href: "https://apps.apple.com/us/app/atlas-athlete/id6745940992", icon: "appstore" },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.mmh.atlasathlete",
        icon: "playstore",
      },
    ],
    media: [
      {
        src: "/media/apps/atlas-athlete.jpg",
        alt: "Three Atlas Athlete screens — the athlete dashboard, the Ask EMMA assistant, and a movement assessment report",
      },
    ],
  },
];
