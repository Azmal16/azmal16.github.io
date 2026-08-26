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
    body: "Lifting is the closest thing I have to a control experiment on myself — one variable at a time, measured over months. It is also why movement-assessment software never felt abstract to me.",
    media: [
      {
        src: "/media/beyond/training-mirror.jpg",
        alt: "Mirror shot at the gym, mid-session in a training tee",
        // square source in a 4:3 frame — anchor the crop to the top so the
        // cap, beard and shoulders stay in, and the trim comes off the bottom
        position: "50% 0%",
        // training-run.jpg (an Apple Watch run summary) is still in
        // /public/media/beyond/ if you'd rather show that instead.
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
