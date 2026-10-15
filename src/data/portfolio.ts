import projNeural from "@/assets/proj-neural.png";
import projGuard from "@/assets/proj-guard.png";
import projAgents from "@/assets/proj-agents.png";
import projVit from "@/assets/proj-vit.png";
import projVGG from "@/assets/proj-vgg.png";
import projLime from "@/assets/proj-lime.png";
import projRun from "@/assets/proj-run.png";
import projJisur from "@/assets/proj-jisur.png";

export type Project = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  projectUrl?: string;
  repoUrl?: string;
};

/**
 * Add a new project by appending an object here — no JSX changes required.
 */
export const projectsData: Project[] = [
  {
    title: "QARAI Agent Guard",
    description:
      "A Python safety toolkit using ML and pattern-based detection to catch prompt injection, jailbreaks and PII leaks in AI agents, with severity-based policies (block, redact, warn, quarantine) and LangChain/CrewAI middleware.",
    tags: ["AI Safety", "Agentic AI", "LangChain","CrewAI", "Python" ],
    image: projGuard,
    repoUrl: "https://github.com/qarai-labs/qarai-agent-guard/",
  },
  {
    title: "JISUR Agent OBS",
    description:
      "jisur-agent-obs is an open-source platform built around a simple vision : Make software completely observable.",
    tags: ["AI Safety","System Design" ,"Agentic AI", "LangChain", "Observability"],
    image: projJisur,
    repoUrl: "https://github.com/Jisur-dev/agent-obs",
  },
  {
    title: "Durable Agent Runtime",
    description:
      "Crash-safe, replayable multi-step agent orchestration runtime.Runs are created through an HTTP API and executed by a worker from an append-only MySQL event log. All workflow state is derived by replaying that log, so any worker can resume a run after a crash without repeating committed side effects or LLM calls.",
    tags: ["AI Safety", "Agentic AI", "LangChain", "Event Sourcing", "MySQL"],
    image: projRun,
    repoUrl: "https://github.com/ZiadiSafouene/Durable_Agent_Runtime",
  },
  {
    title: "P-SPINE Architecture",
    description:
      "A novel neural architecture improving the interpretability of word embeddings while preserving semantic representation quality. Independent research exploring how latent embedding dimensions can be made human-explainable.",
    tags: ["PyTorch", "NLP", "Interpretability", "Research"],
    image: projNeural,
    repoUrl: "https://zenodo.org/records/18130036",
  },
  {
    title: "Doctor Copilot",
    description:
      "A multi-agent system assisting mental health professionals by analyzing patient digital behavior patterns, with collaborative agents that process, summarize and generate behavioral insights.",
    tags: ["CrewAI", "Multi-Agent AI", "Python", "Healthcare"],
    image: projAgents,
    repoUrl: "https://github.com/OussamaBenSlama/Doctor-Copilot",
  },
  {
    title: "Vision Transformer from Scratch",
    description:
      "A full ViT implementation built from zero in PyTorch — patch embeddings, positional encoding, multi-head self-attention and encoder blocks — trained on MNIST with over 90% accuracy.",
    tags: ["PyTorch", "Deep Learning", "Transformers"],
    image: projVit,
    repoUrl:
      "https://github.com/ZiadiSafouene/Vision_Transformers_Vit_From_Scratch",
  },
  {
    title: "LIME from Scratch for Skin Cancer Detection",
    description:
      "This project implements LIME (Local Interpretable Model-agnostic Explanations) from scratch and applies it to a skin cancer detection model based on ResNet18.",
    tags: ["PyTorch", "Deep Learning", "XAI","Computer Vision"],
    image: projLime,
    repoUrl:
      "https://github.com/ZiadiSafouene/LIME_From_Scratch",
  },
  {
    title: "VGG11 and AlexNet from Scratch",
    description:
      "This project implements two classic convolutional neural network architectures—VGG11 and AlexNet—from scratch using PyTorch. The models are trained and evaluated on MNIST and CIFAR-10 datasets to demonstrate their performance on grayscale and RGB image classification tasks.",
    tags: ["PyTorch", "Deep Learning", "Transformers","Computer Vision"],
    image: projVGG,
    repoUrl:
      "https://github.com/ZiadiSafouene/LVGG11-AlexNet_From_Scratch",
  },
];

export type TimelineItem = {
  org: string;
  role: string;
  location: string;
  period: string;
  points: string[];
};

export const experienceData: TimelineItem[] = [
  {
    org: "Nachd-IT",
    role: "AI Engineer",
    location: "Sousse",
    period: "2025 — 2026",
    points: [
      "Developing an AI-powered chatbot that interacts with databases through natural language and performs secure SQL operations dynamically.",
    ],
  },
  {
    org: "Nachd-IT",
    role: "AI Research Intern",
    location: "Sousse",
    period: "2025",
    points: [
     "Researched the integration of AI within educational platforms to enhance learning experiences and student support systems.",
    ],
  },

  {
    org: "We Are Technology Center",
    role: "ML & Deep Learning Instructor · C/C++ Instructor",
    location: "Monastir",
    period: "2025 ",
    points: [
      "Delivered 50+ hands-on training sessions on machine learning and deep learning using Python and PyTorch.",
      "Taught programming fundamentals, problem solving and algorithmic thinking in C/C++.",
    ],
  },
];

export const educationData: TimelineItem[] = [
  {
    org: "Higher Institute of Informatics and Mathematics",
    role: "Diploma in Software Engineering",
    location: "Monastir",
    period: "2024 — 2027",
    points: [
      "Backend Systems Fundamentals , Devops , Machine learning and Cloud Infrastructure.",
    ],
  },
  {
    org: "Higher Institute of Informatics and Mathematics",
    role: "Software Pre-Engineering Program",
    location: "Monastir",
    period: "2022 — 2024",
    points: [
      "Foundations in algorithms, data structures, mathematics and systems programming.",
    ],
  },
];

export const skillGroups: { label: string; items: string[] }[] = [
  {
    label: "Languages",
    items: ["Python", "C", "C++", "Java", "JavaScript", "SQL", "PHP"],
  },
  {
    label: "Frameworks & Libraries",
    items: [
      "PyTorch",
      "LangChain",
      "Keras / TensorFlow",
      "CrewAI",
      "FastAPI",
      "Laravel",
      "React",
    ],
  },
  {
    label: "Tools",
    items: ["Docker", "Git / GitHub", "DBeaver", "MySQL", "Postman"],
  },
];

export type BlogPost = {
  title: string;
  date: string;
  readingTime: string;
  excerpt: string;
  url: string;
};

export const blogPosts: BlogPost[] = [
  {
    title: "Securing Your AI Agents with Qarai Agent Guard: A Practical Tutorial",
    date: "Jul 24, 2026",
    readingTime: "5 min read",
    excerpt:
      "A practical guide to protecting AI agents from prompt injection and other malicious inputs using Qarai Agent Guard, with policy-based detection and security controls at the middleware layer.",
    url: "https://medium.com/@ziadisafouene/securing-your-ai-agents-with-qarai-agent-guard-a-practical-tutorial-897e4ac9121d",
  },
  {
    title: "AI Problem Framing : Bridging the Gap Between Business Needs and Technical AI Solutions",
    date: "Mar 5, 2026",
    readingTime: "5 min read",
    excerpt:
      "Learn how to translate business challenges into well-defined AI problems by identifying real needs, clarifying objectives, evaluating feasibility, and aligning technical solutions with measurable business outcomes.",
    url: "https://medium.com/@ziadisafouene/ai-problem-framing-bridging-the-gap-between-business-needs-and-technical-ai-solutions-0bf4ca25c509/",
  },
  {
    title: "Grad-CAM in Explainable AI",
    date: "Jul 26, 2025",
    readingTime: "4 min read",
    excerpt:
      "An introduction to Grad-CAM, a visual explanation technique that highlights the image regions influencing a convolutional neural network's predictions and helps make image classification models more interpretable.",
    url: "https://medium.com/@ziadisafouene/grad-cam-in-explainable-ai-c367358b5f5d",
  },
  {
    title: "A Simple Neural Network Module for Relational Reasoning",
    date: "Apr 17, 2025",
    readingTime: "4 min read",
    excerpt:
      "Explore how a neural network module can reason about relationships between objects or entities, moving beyond isolated feature representations to capture interactions that matter for complex tasks.",
    url: "https://medium.com/@ziadisafouene/a-simple-neural-network-module-for-relational-reasoning-200303a30109",
  },
  {
    title: "Content-Based-Addressing VS Location-Based-Addressing in NTMs",
    date: "Apr 5, 2025",
    readingTime: "4 min read",
    excerpt:
      "Compare content-based and location-based addressing in Neural Turing Machines, examining how memory can be accessed either by matching information or by following positional relationships.",
    url: "https://medium.com/@ziadisafouene/content-based-addressing-vs-location-based-addressing-in-ntms-dbc199bbea27",
  },
  {
    title: "Understanding the Idea Behind Pointer Networks",
    date: "Mar 4, 2025",
    readingTime: "4 min read",
    excerpt:
      "Understand how Pointer Networks use attention to select elements directly from an input sequence, making them useful for structured prediction tasks such as routing, ordering, and combinatorial optimization.",
    url: "https://medium.com/@ziadisafouene/understanding-the-idea-behind-pointer-networks-ab47fa5703ea",
  },
];

export const contact = {
  email: "ziadisafouene@gmail.com",
  phone: "+216 95405734",
  location: "Monastir, Tunisia",
  linkedin: "https://www.linkedin.com/in/safouene-ziadi-14186026a/",
  github: "https://github.com/ZiadiSafouene",
  x: "https://x.com/SafoueneZiadi",
  medium: "https://medium.com/@ziadisafouene",
};
