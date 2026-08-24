import type { Project } from "@/lib/types";

/**
 * To add a project: copy any object below, change the fields, done.
 * To add screenshots: drop files into /public/media/projects/ and add
 * entries to `media` with a real `src` and honest `alt` text.
 */
export const projects: Project[] = [
  {
    slug: "robust-eo",
    title: "Robust-EO",
    context: "University of Alberta",
    blurb:
      "A benchmark for entity-oriented retrieval on TREC Robust04, built around LLM centrality filtering.",
    year: "2026",
    categories: ["Research", "AI & ML"],
    featured: true,
    stack: ["Python", "PySerini", "OpenAI", "pytrec-eval", "TREC Robust04"],
    body: [
      "Entity annotations on retrieval corpora are noisy. Off-the-shelf entity linkers such as WAT will happily tag every proper noun in a document, which leaves a retrieval system reasoning about entities that are merely mentioned rather than actually what the document is about. Robust-EO is a diagnostic benchmark that asks how much of that noise can be removed, and whether removing it helps.",
      "The core idea is centrality filtering: use an LLM to judge whether each linked entity is central, secondary or incidental to the document, then measure what happens downstream. We build five annotation variants — raw WAT, rho-filtered, centrality-filtered, both, and both plus constrained expansion — and evaluate each against human judgements and against retrieval effectiveness on Robust04.",
      "The work is currently being written up as a short paper — unpublished as of now. My contribution spans the annotation pipeline, the LLM-as-annotator agreement analysis, and the retrieval-side evaluation.",
    ],
    highlights: [
      "Six research questions covering noise reduction, constrained expansion, label reliability, entity discriminativeness, and query-dependent vs query-independent centrality.",
      "LLM-as-annotator agreement measured against direct human entity judgements with Cohen's κ, precision and recall.",
      "Full annotation guidelines authored so that a second annotator can reproduce the labels.",
      "Retrieval evaluation with pytrec-eval over the standard Robust04 topic set.",
    ],
    media: [{ src: "", alt: "Robust-EO benchmark pipeline diagram", caption: "Annotation pipeline" }],
  },
  {
    slug: "pathway-automation",
    title: "Pathway Automation",
    context: "Ameya Health",
    blurb:
      "LLM-driven generation of complete patient notification pathways — push, email and SMS — from program content.",
    year: "2026",
    categories: ["AI & ML", "Full-stack"],
    featured: true,
    stack: ["Python", "TypeScript", "Fastify", "React", "Gemini", "GPT", "Claude", "PostgreSQL", "Streamlit"],
    body: [
      "Health programs need a steady drip of notifications — a push message on day three, an email in week two, an SMS nudge when someone falls behind. Writing them by hand for every program is slow, and consistency slips. This system generates the whole pathway from the program's own content.",
      "The pipeline loads a program's weekly articles, videos and recipes, assembles a prompt with a set of existing notifications as style references, calls an LLM, and parses a structured response into the exact shape the production database expects — all three channels, correctly scheduled, ready for a human to review and approve.",
      "It started as a Streamlit prototype reading from CSV exports to prove the concept end-to-end. I then ported it to the production TypeScript stack with live database access, few-shot prompting and video-transcript-augmented generation so the copy reflects what the participant will actually watch.",
    ],
    highlights: [
      "Generates push, email and SMS variants in one pass, matching an existing schema so output can be inserted directly.",
      "Few-shot prompting against real approved notifications keeps tone consistent with what clinicians already sign off on.",
      "Video-transcript augmentation grounds the copy in the actual program content rather than the title alone.",
      "Exports to JSON, SQL and CSV so reviewers can work in whichever tool they prefer.",
    ],
    media: [{ src: "", alt: "Pathway automation interface", caption: "Generation and review flow" }],
  },
  {
    slug: "exercise-routine-agent",
    title: "Exercise Routine Agent",
    context: "Ameya Health",
    blurb:
      "A conversational AI that builds and edits clinical exercise programs, with deterministic safety rules the model cannot override.",
    year: "2026",
    categories: ["AI & ML", "Full-stack"],
    stack: ["TypeScript", "Fastify", "React", "Drizzle", "PostgreSQL", "LLM tool use", "Zod"],
    body: [
      "Prescribing exercise for a patient recovering from surgery is not a content problem, it is a safety problem. A floor exercise that is fine for one participant is a fall risk for another, and the difference is not something you want a language model deciding on its own.",
      "So the agent is built the other way around. Every exercise in the catalog is scored by a deterministic risk model — complexity, orientation and fitness type, weighted from the evidence review behind the original research notebook. The catalog is pre-filtered to the patient's adjusted risk threshold before the model ever sees it, the model only selects, phases and orders what remains, and the assembler re-validates every pick against the same numbers afterwards. Rest breaks are inserted by rule, not by the model.",
      "On top of generation sits a chat editor: a clinician can ask for changes in plain language — swap this out, make week three easier, this participant had a fall — and the agent proposes an edited routine that goes through the same validation before anything is saved.",
    ],
    highlights: [
      "Deterministic risk scoring gates the catalog before generation and re-validates after, so unsafe exercises cannot reach a patient even if the model asks for them.",
      "Conversational editing with structured proposals merged onto the existing routine rather than regenerated from scratch.",
      "Adverse-event handling that adjusts the program in response to a reported fall or injury.",
      "Ported from a research notebook into the production TypeScript monorepo, sharing safety rules with the pathway generator.",
    ],
    media: [{ src: "", alt: "Exercise routine agent interface" }],
  },
  {
    slug: "emma-health",
    title: "EMMA Health",
    context: "MyMedicalHUB",
    blurb:
      "AI-assisted musculoskeletal health iOS app with on-device pose estimation, symptom triage and telemedicine.",
    year: "2022 — 2025",
    categories: ["iOS", "AI & ML"],
    featured: true,
    stack: ["Swift", "SwiftUI", "CoreML", "TensorFlow Lite", "MoveNet", "WebRTC", "AVFoundation"],
    links: [
      { label: "App Store", href: "https://apps.apple.com/us/app/emma-health/id6477580332", icon: "appstore" },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.mmh.emmahealth",
        icon: "playstore",
      },
    ],
    body: [
      "EMMA — Efficient Musculoskeletal Management Assistant — turns a phone camera into a movement assessment tool. The patient performs a guided set of movements, the app estimates their pose in real time entirely on-device, and the resulting measurements feed a clinical assessment their provider can act on.",
      "I worked across the ML and the app. On the model side that meant deploying MoveNet and YOLO through CoreML and TFLite, and tuning the inference pipeline until pose estimation held frame rate on mid-range devices without draining the battery. On the app side it meant the assessment flows, the virtual therapist module, video recording and playback, and a WebRTC telemedicine channel for live sessions with a clinician.",
      "I also built an end-to-end NLP chatbot for symptom triage using spaCy and Hugging Face Transformers, handling intent classification and entity extraction against live user input.",
    ],
    highlights: [
      "Real-time on-device pose inference — no video leaves the phone during an assessment.",
      "WebRTC telemedicine so a therapist can review movement live.",
      "NLP triage chatbot for intent classification and symptom entity extraction.",
      "Shipped and maintained on both the App Store and Google Play.",
    ],
    media: [
      {
        src: "/media/projects/emma-health.jpg",
        alt: "Three EMMA Health screens — the assessment dashboard, prescribed home exercises, and a generated clinical report",
        caption: "Assessment flow",
      },
    ],
  },
  {
    slug: "atlas-athlete",
    title: "Atlas Athlete",
    context: "MyMedicalHUB",
    blurb:
      "AI fitness assistant using on-device pose estimation and NLP injury-risk classification for personalised training.",
    year: "2024 — 2025",
    categories: ["iOS", "AI & ML"],
    stack: ["Swift", "SwiftUI", "CoreML", "Pose estimation", "NLP"],
    links: [
      { label: "App Store", href: "https://apps.apple.com/us/app/atlas-athlete/id6745940992", icon: "appstore" },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.mmh.atlasathlete",
        icon: "playstore",
      },
    ],
    body: [
      "Atlas Athlete takes the same musculoskeletal assessment engine behind EMMA and points it at athletic performance rather than clinical rehabilitation. A full-body movement screen runs from the phone — no wearables, no sensors — and produces a picture of asymmetry, imbalance and movement inefficiency.",
      "My work covered the on-device pose estimation pipeline and the NLP models used for injury-risk classification, plus the real-time movement feedback that turns a raw pose stream into something an athlete can act on mid-set.",
    ],
    highlights: [
      "Full-body screen covering 350+ joints and motion patterns from a phone camera.",
      "Injury-risk classification driving personalised exercise recommendation.",
      "Real-time movement feedback during exercise.",
    ],
    media: [
      {
        src: "/media/projects/atlas-athlete.jpg",
        alt: "Three Atlas Athlete screens — the athlete dashboard, the Ask EMMA assistant, and a movement assessment report",
        caption: "Dashboard, assistant and report",
      },
    ],
  },
  {
    slug: "voiceover-studio",
    title: "Voiceover Studio",
    context: "Ameya Health",
    blurb:
      "Gemini TTS production tool that turns health-program scripts into styled audio, as both a CLI and a multi-user web app.",
    year: "2026",
    categories: ["AI & ML", "Full-stack"],
    stack: ["Python", "FastAPI", "Gemini TTS", "AWS Cognito", "pydub", "ffmpeg"],
    body: [
      "Health programs ship with a lot of narrated audio, and recording it is the bottleneck. Voiceover Studio converts a script — a .docx or .txt file — into finished audio in the voice and pacing the program calls for.",
      "Because Gemini TTS is LLM-based, style is controlled through natural language rather than SSML: you describe the delivery you want and the model produces it. That turned out to matter more than voice selection, and it is why the tool exposes prompt controls per segment rather than a fixed set of voice presets.",
      "It ships as two entry points from one codebase — a CLI for batch conversion and a multi-user web app with per-session encrypted API keys behind AWS Cognito, so a content team can use it without anyone sharing credentials.",
    ],
    highlights: [
      "Natural-language style control per segment instead of SSML markup.",
      "Batch conversion of multi-section scripts to MP3 and WAV with per-segment prompt records.",
      "Multi-user web app with Cognito auth and per-session encrypted API keys.",
      "Handles multilingual scripts — the production output includes full French program sets.",
    ],
    media: [{ src: "", alt: "Voiceover Studio web interface" }],
  },
  {
    slug: "lar-retinal-segmentation",
    title: "Local Autoregressive Retinal Vessel Segmentation",
    context: "Graduate research",
    blurb:
      "A patch-based local autoregressive framework for medical image segmentation — and an honest look at where it breaks.",
    year: "2025",
    categories: ["Research", "AI & ML"],
    stack: ["Python", "PyTorch", "VQ-AE", "DRIVE", "CHASE_DB1", "STARE", "HRF"],
    body: [
      "Autoregressive models generate images token by token. This project asks whether that framing helps for segmentation, by pairing a Vector Quantised Autoencoder with a causal convolutional sequence-to-sequence model over image patches, and training it to produce retinal vessel masks.",
      "In controlled settings the framework reached a 99.88% memorisation rate on the DRIVE dataset. That number is the interesting part, not the impressive part: it is a memorisation result, and the analysis that followed is about the generalisation limits of local autoregressive architectures when training data is scarce — which, for annotated retinal fundus imagery, it always is.",
    ],
    highlights: [
      "VQ-AE latent space with a causal convolutional seq2seq decoder over patches.",
      "99.88% memorisation rate on DRIVE under controlled conditions.",
      "Analysis of generalisation limits of LAR architectures in the low-data regime.",
      "Evaluated across DRIVE, CHASE_DB1, STARE and HRF.",
    ],
    media: [{ src: "", alt: "Retinal vessel segmentation results" }],
  },
  {
    slug: "lar-symbolic-music",
    title: "Local Autoregressive Symbolic Music Generation",
    context: "Graduate research",
    blurb:
      "A local autoregressive latent transition framework with residual modelling and a gated drift mechanism, on JSB Chorales.",
    year: "2026",
    categories: ["Research", "AI & ML"],
    stack: ["Python", "PyTorch", "JSB Chorales"],
    body: [
      "A companion to the retinal segmentation work, applying the same local autoregressive idea to a domain where structure is explicit: polyphonic chorale generation. The framework models latent transitions locally, adds residual modelling, and introduces a gated drift mechanism to stop the generation wandering away from the harmonic context.",
      "Where the imaging version memorised, this one did not — the model showed low memorisation, high diversity, and stable generation across random seeds. Self-similarity analysis and ablations against no-drift and no-gate variants isolate what the gating mechanism is actually contributing.",
    ],
    highlights: [
      "Gated drift mechanism to keep local transitions harmonically anchored.",
      "Low memorisation with high output diversity, verified by self-similarity analysis.",
      "Ablation studies against no-drift and no-gate variants.",
      "Stable generation across seeds.",
    ],
    media: [{ src: "", alt: "Generated chorale piano roll" }],
  },
  {
    slug: "multiview-3d-reconstruction",
    title: "Multi-View 3D Reconstruction",
    context: "University of Alberta",
    blurb:
      "Benchmarking 3D-R2N2, Pix2Vox and TripoSR on sparse-view reconstruction, with an adaptive method-selection strategy.",
    year: "2026",
    categories: ["AI & ML", "Research"],
    stack: ["Python", "PyTorch", "TripoSR", "ShapeNet"],
    links: [
      { label: "Source", href: "https://github.com/Azmal16/multiview-3d-reconstruction", icon: "github" },
    ],
    body: [
      "Reconstructing 3D geometry from a handful of 2D views is ill-posed — depth is ambiguous and parts of the object are simply never seen. This project measures how reconstruction quality actually evolves as views are added, from one to five, and compares two different answers to the fusion problem.",
      "3D-R2N2 fuses recurrently: a 3D-GRU refines a voxel grid as each view arrives. Pix2Vox is context-aware: a scoring network weights each view's contribution adaptively. We implemented both in PyTorch, evaluated on ShapeNet across airplane, car and chair categories with IoU and F-score, and added TripoSR as a modern single-image baseline.",
      "The comparison motivates an adaptive selection strategy — the right method depends on how many views you have and how much they overlap, and the crossover point is measurable.",
    ],
    highlights: [
      "Full PyTorch implementations of 3D-R2N2 and Pix2Vox evaluated on 32³ voxel grids.",
      "IoU and F-score across 1–5 input views on three ShapeNet categories.",
      "Synthetic procedural data generator so the pipeline runs without large downloads.",
      "Adaptive method-selection strategy derived from the view-count crossover.",
    ],
    media: [
      {
        src: "/media/projects/multiview-3d-reconstruction.jpg",
        alt: "Reconstruction comparison — 3D-R2N2 and Pix2Vox against ground truth at two and three input views",
        caption: "Qualitative results, ShapeNet airplane",
      },
    ],
  },
  {
    slug: "neighbourhood-finder",
    title: "AI Neighbourhood Finder",
    context: "University of Alberta",
    blurb:
      "RAG-powered Edmonton neighbourhood explorer with semantic search over civic data and an interactive map.",
    year: "2026",
    categories: ["Full-stack", "AI & ML"],
    stack: ["Django", "OpenAI", "ChromaDB", "Google Maps", "D3.js", "PostgreSQL"],
    body: [
      "Choosing where to live in a city you just moved to means cross-referencing parks, transit, schools and community data that live in a dozen unconnected open-data portals. This tool puts them behind one conversational interface.",
      "Neighbourhood profiles are embedded into a Chroma vector store; a retrieval-augmented pipeline answers free-text questions — 'quiet, walkable, close to an LRT stop' — by grounding the model's answer in the retrieved civic data rather than letting it guess. Results render on an interactive map, and clicking any neighbourhood starts a conversation about it.",
      "Built for MM 802 (Multimedia Communications) and deployed on Cybera Rapid Access Cloud.",
    ],
    highlights: [
      "RAG over Edmonton open civic data with ChromaDB embeddings.",
      "Conversational advisor grounded in retrieved neighbourhood profiles.",
      "Interactive Google Maps interface with click-to-query neighbourhoods.",
      "Deployed to an OpenStack instance on Cybera Rapid Access Cloud.",
    ],
    media: [{ src: "", alt: "Neighbourhood finder map interface" }],
  },
  {
    slug: "perception-dvr",
    title: "Perception-Oriented Volume Rendering",
    context: "University of Alberta",
    blurb:
      "How transfer functions, sampling density and shading change what a reader can actually see in subsurface seismic volumes.",
    year: "2026",
    categories: ["AI & ML", "Research"],
    stack: ["Python", "VTK", "NumPy", "USGS Cascadia v1.7"],
    body: [
      "Direct volume rendering has a lot of knobs and very little guidance on which ones matter for interpretation. This project treats that as an empirical question: build a VTK pipeline over a real 3D seismic velocity model, then generate 27 controlled render conditions varying transfer function, sampling density and shading, and compare them side by side.",
      "The output is an atlas for structured comparison plus an interactive prototype that switches between presets live, so a domain reader can find the configuration that reveals the structure they care about rather than accepting a default.",
    ],
    highlights: [
      "27-condition controlled sweep over transfer function, sampling and shading.",
      "Comparison atlas for side-by-side perceptual evaluation.",
      "Interactive VTK prototype for live preset switching.",
      "Built on the USGS Cascadia v1.7 seismic velocity model.",
    ],
    media: [
      {
        src: "/media/projects/perception-dvr.jpg",
        alt: "Two direct volume renderings of the same seismic volume under different transfer functions",
        caption: "Baseline vs. chimney-highlighting transfer function",
      },
    ],
  },
  {
    slug: "video-segmentation-tracking",
    title: "Prompt-Based Video Segmentation & Tracking",
    context: "University of Alberta",
    blurb: "A video pipeline combining SAM prompt segmentation with YOLOv8 detection and tracking.",
    year: "2025",
    categories: ["AI & ML"],
    stack: ["Python", "PyTorch", "Segment Anything", "YOLOv8", "OpenCV"],
    body: [
      "A pipeline that takes a point or box prompt on the first frame and carries the resulting mask through a video. SAM handles the segmentation, YOLOv8 provides detection and identity across frames, and the two are reconciled so a mask survives occlusion and re-entry.",
      "Includes a comparison report on where each component fails — SAM's prompt sensitivity, YOLO's identity switches — and how the combination covers for both.",
    ],
    media: [{ src: "", alt: "Segmentation and tracking output frames" }],
  },
  {
    slug: "image-stitching-far",
    title: "Feature-Augmented Image Stitching",
    context: "University of Alberta",
    blurb:
      "Panorama stitching that replaces SIFT/ORB keypoints with learned neural features for homography estimation.",
    year: "2025",
    categories: ["AI & ML"],
    stack: ["Python", "PyTorch", "OpenCV", "NumPy"],
    body: [
      "Classical stitching pipelines depend on hand-designed keypoint detectors, which degrade under low texture, repeated patterns and large viewpoint change. This implementation swaps in learned feature extraction — the Feature-Augmented Registration approach — to compute the homography, then blends into a seamless panorama.",
      "The comparison against SIFT and ORB baselines is the point: it shows where learned features win and where the classical detectors are still perfectly adequate and considerably cheaper.",
    ],
    media: [
      {
        src: "/media/projects/image-stitching-far.jpg",
        alt: "Panorama stitched from two overlapping campus photographs using learned features",
        caption: "Stitched output",
      },
    ],
  },
  {
    slug: "traffic-light-detection",
    title: "Traffic Light Detection with YOLOv3 / v5 / v7",
    context: "Undergraduate thesis",
    blurb:
      "Benchmarking three YOLO generations for real-time traffic light detection under simulated adverse weather.",
    year: "2022",
    categories: ["AI & ML", "Research"],
    stack: ["Python", "PyTorch", "YOLOv3", "YOLOv5", "YOLOv7", "Bosch Traffic Light Dataset"],
    body: [
      "My undergraduate thesis at RUET. Traffic light detection is a small-object problem at speed — the target is a few dozen pixels, the latency budget is tight, and the failure mode is not academic.",
      "I trained YOLOv3, YOLOv5 and YOLOv7 on the Bosch Traffic Light Dataset augmented to simulate rain, fog and low light, then benchmarked all three on both detection accuracy and inference speed. YOLOv7 reached the highest mAP at 98.3% while also being the fastest of the three — the accuracy/speed tradeoff people usually assume did not hold across generations.",
    ],
    highlights: [
      "98.3% mAP with YOLOv7, the best accuracy and the best inference speed in the comparison.",
      "Augmented Bosch dataset simulating diverse weather conditions.",
      "Direct accuracy-versus-latency benchmark across three YOLO generations.",
    ],
    media: [{ src: "", alt: "Traffic light detection results" }],
  },
  {
    slug: "drivemate",
    title: "DriveMate",
    context: "Personal project",
    blurb: "A smart driving assistant for iOS built around real-time on-device inference.",
    year: "2026",
    categories: ["iOS"],
    stack: ["Swift", "SwiftUI", "CoreML", "AVFoundation"],
    links: [
      {
        label: "Source",
        href: "https://github.com/Azmal16/DriveMate-Smart-Driving-Assistant",
        icon: "github",
      },
    ],
    body: [
      "A side project exploring what a driving assistant can do with nothing but the phone already mounted on the windshield — camera in, inference on-device, feedback out, no network round trip.",
    ],
    media: [{ src: "", alt: "DriveMate app screenshots" }],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export const categories = ["All", "AI & ML", "iOS", "Research", "Full-stack"] as const;
