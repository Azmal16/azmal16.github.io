import type { ResearchItem } from "@/lib/types";

export const research: ResearchItem[] = [
  {
    title: "Robust-EO: A Benchmark for Entity-Oriented Retrieval on Robust04",
    venue: "Short paper in preparation",
    status: "Unpublished — work in progress",
    summary:
      "Entity linkers over-annotate. Robust-EO measures how much document-side entity noise LLM centrality filtering removes, whether constrained expansion recovers genuinely missing entities, and whether any of it moves retrieval effectiveness.",
    points: [
      "Five annotation variants compared: raw WAT, rho-filtered, centrality-filtered, combined, and combined with constrained expansion.",
      "LLM-derived entity labels validated against direct human judgements.",
      "Retrieval evaluation on the standard TREC Robust04 topic set.",
    ],
    stack: ["Python", "PySerini", "OpenAI", "pytrec-eval"],
  },
  {
    title: "Local Autoregressive Models for Retinal Vessel Segmentation",
    status: "Course research project",
    summary:
      "A patch-based local autoregressive framework pairing a Vector Quantised Autoencoder with a causal convolutional sequence-to-sequence model, and an analysis of where the architecture stops generalising.",
    points: [
      "99.88% memorisation rate on DRIVE in controlled settings.",
      "Generalisation limits of LAR architectures under limited annotated data.",
    ],
    stack: ["PyTorch", "VQ-AE", "DRIVE", "CHASE_DB1", "STARE", "HRF"],
  },
  {
    title: "Local Autoregressive Model for Symbolic Music Generation",
    status: "Course research project",
    summary:
      "A local autoregressive latent transition framework with residual modelling and a gated drift mechanism for polyphonic generation on JSB Chorales.",
    points: [
      "Low memorisation with high diversity, verified by self-similarity analysis.",
      "Ablations against no-drift and no-gate variants isolate the gating contribution.",
    ],
    stack: ["PyTorch", "JSB Chorales"],
  },
  {
    title: "Traffic Light Detection using YOLOv3, YOLOv5 and YOLOv7",
    status: "Undergraduate thesis, RUET",
    summary:
      "A real-time small-object detection benchmark across three YOLO generations, trained on a weather-augmented Bosch Traffic Light Dataset.",
    points: ["YOLOv7 reached 98.3% mAP with the fastest inference of the three."],
    stack: ["PyTorch", "YOLO", "Bosch Traffic Light Dataset"],
  },
];
