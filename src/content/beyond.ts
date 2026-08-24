import type { BeyondTile } from "@/lib/types";

/**
 * The secondary, human half of the site.
 * Add photos by dropping files into /public/media/beyond/ and filling in `src`.
 * Any number of media items per tile works — the gallery grows to fit.
 */
export const beyond: BeyondTile[] = [
  {
    key: "fitness",
    title: "Training",
    kicker: "Strength & consistency",
    body: "Lifting is the closest thing I have to a control experiment on myself — one variable at a time, measured over months. It is also why building movement-assessment software never felt abstract: I have spent enough time under a bar to care whether the feedback is any good.",
    media: [
      {
        src: "/media/beyond/training-run.jpg",
        alt: "Apple Watch showing a finished 4 km outdoor run on an athletics track",
      },
    ],
  },
  {
    key: "travel",
    title: "Travel",
    kicker: "Bangladesh → Canada, and onward",
    body: "Moving from Dhaka to Edmonton reset what I think of as ordinary. I take every chance to get out into the Rockies, and I am slowly working through a list of places that look nothing like either home.",
    media: [
      {
        src: "/media/beyond/travel-lake-louise.jpg",
        alt: "Standing in front of snow-covered pines in the Canadian Rockies",
      },
      {
        src: "/media/beyond/travel-calgary-tower.jpg",
        alt: "Looking out over Calgary at sunset from the Calgary Tower observation deck",
      },
      {
        src: "/media/beyond/travel-calgary-skyline.jpg",
        alt: "Downtown Calgary from above on a clear winter evening",
      },
    ],
  },
  {
    key: "lifestyle",
    title: "Off the clock",
    kicker: "Cooking, cameras, long walks",
    body: "Cooking for people, taking more photos than I ever edit, and the kind of long unstructured walk where a problem I have been stuck on for a week quietly resolves itself.",
    media: [
      { src: "", alt: "Lifestyle photo" },
      { src: "", alt: "Lifestyle photo" },
    ],
  },
];
