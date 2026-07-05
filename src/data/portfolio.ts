export const personalInfo = {
  name: "Maneesha Prasanna",
  location: "Bengaluru, India",
  email: "maneeshaprasanna@gmail.com",
  phone: "+91 8971005593",
  linkedin: "https://www.linkedin.com/in/maneesha-prasanna-1b45b31a4/",
  github: "https://github.com/maneesha58",
  tagline:
    "AI/ML Engineer · MS Computer Science (4.0/4.0 GPA) · Deep Learning · LLMs · Full-Stack",
};

export const about =
  "AI/ML engineer with an MS in Computer Science (4.0/4.0 GPA) from Santa Clara University and 3+ years of industry experience building production-grade data-driven and ML-adjacent systems at ICICI Lombard. Skilled in deep learning, NLP, LLM fine-tuning (LoRA/PEFT), RAG pipelines, and full-stack application development. Experienced with HuggingFace Transformers, PyTorch, TensorFlow, and enterprise DevOps tooling. Passionate about building next-generation AI systems — from CNN classifiers and NLP pipelines to real-time intelligent applications.";

export const education = [
  {
    degree: "MS, Computer Science & Engineering",
    school: "Santa Clara University, California, USA",
    detail: "GPA: 4.0/4.0 · June 2026",
    coursework:
      "Machine Learning, Deep Learning, NLP, Neural Networks, Algorithms, Data Structures, Statistics, Operating Systems, DBMS",
  },
  {
    degree: "B.Tech, Computer Science",
    school: "Manipal Institute of Technology, India",
    detail: "CGPA: 9.3/10 · Departmental Rank 2 · June 2021",
    coursework: null,
  },
];

export const skillCategories = [
  {
    category: "Languages",
    skills: [
      "C",
      "Python",
      "Java",
      "JavaScript",
      "C++ concepts (via C/OOP coursework)",
    ],
  },
  {
    category: "Systems & Platforms",
    skills: [
      "Linux development",
      "POSIX Pthreads",
      "UDP sockets",
      "CPU scheduling & virtual-memory simulation",
      "GCC/Make",
      "Shared-library concepts",
      "Debugging & performance profiling",
    ],
  },
  {
    category: "ML & Inference",
    skills: [
      "PyTorch",
      "TensorFlow",
      "Keras",
      "Scikit-learn",
      "HuggingFace Transformers",
      "LLM fine-tuning (LoRA/PEFT)",
      "CNNs",
      "Model evaluation (F1, precision, recall)",
      "Inference latency/energy optimization",
      "Grad-CAM",
    ],
  },
  {
    category: "Generative AI",
    skills: [
      "RAG pipelines",
      "LangChain",
      "ChromaDB",
      "Vector embeddings",
      "Prompt engineering",
      "OpenAI GPT",
      "Google Gemini",
      "LLaMA (Groq API)",
      "AI evaluations & adversarial benchmarking",
    ],
  },
  {
    category: "DevOps & Tooling",
    skills: [
      "Git",
      "GitHub Actions (CI/CD)",
      "JFrog Artifactory",
      "Jira",
      "Postman",
      "SoapUI",
      "REST & SOAP APIs",
      "Load/performance testing",
      "Flask",
      "AWS (EC2, S3)",
      "MySQL",
      "MongoDB",
      "Firebase",
      "Streamlit",
      "Jupyter",
    ],
  },
];

export const experience = [
  {
    title: "Software Engineer",
    company: "ICICI Lombard General Insurance",
    period: "Sept 2021 – Dec 2024",
    bullets: [
      "Designed and deployed data-driven rule-based decision pipelines using Blaze Rule Engine — functionally analogous to ML inference systems — processing millions of insurance decisions per second on production data.",
      "Performed data analysis and performance profiling on large-scale datasets, driving ~80% improvement in system efficiency and 40–50% reduction in API latency through data-driven optimization.",
      "Built high-throughput Java backend services for motor and health insurance at enterprise scale — maintained 99.9%+ uptime, enabling reliable data collection for downstream analytical models.",
      "Developed and maintained REST and SOAP API integrations across internal and partner systems; used Postman and SoapUI for contract validation, regression testing, and debugging of API behavior.",
      "Conducted load and performance testing on high-traffic services to validate throughput and latency targets ahead of production releases.",
      "Used Git/GitHub for version control, GitHub Actions for CI/CD automation, and JFrog Artifactory for build artifact management across release pipelines.",
      "Tracked and managed work using Jira, collaborating with cross-functional teams across sprints to deliver features and production fixes.",
      "Received Technical Excellence Award for high-impact contributions and cross-functional project ownership.",
    ],
  },
];

export const projects = [
  {
    title: "Beyond Flesch-Kincaid: Prompt-based Text Difficulty Classification",
    github: "https://github.com/SCU-CSEN346/Beyond-Flesch",
    stack: [
      "Python",
      "HuggingFace",
      "PyTorch",
      "PEFT/LoRA",
      "ELECTRA",
      "Phi-3.5-mini",
      "Scikit-learn",
    ],
    description:
      "Reproduced and extended ACL BEA 2024 research on prompt-based text difficulty classification. Built Domain-Adversarial ELECTRA classifier and LoRA-fine-tuned Phi-3.5-mini achieving 127× faster inference and out-of-domain generalization.",
    highlights: ["127× faster inference", "0.84 Macro-F1", "0.89 in-distribution F1"],
  },
  {
    title: "Document Q&A RAG System — End-to-End GenAI Pipeline",
    github: "https://github.com/maneesha58/rag-document-qa",
    stack: [
      "Python",
      "LangChain",
      "ChromaDB",
      "HuggingFace Sentence Transformers",
      "LLaMA 3.3 70B (Groq)",
      "Streamlit",
    ],
    description:
      "Built a RAG system from scratch with multi-format ingestion (PDF, Word, CSV), sliding-window chunking, vector embeddings, and ChromaDB HNSW retrieval grounding LLaMA 3.3 70B answers strictly in uploaded content — with multi-turn memory via Streamlit.",
    highlights: ["Multi-format RAG", "ChromaDB HNSW", "Groq LLaMA 3.3"],
  },
  {
    title: "Brain Tumor Detection – CNN Medical Imaging Classifier",
    github: "https://github.com/maneesha58/BrainDetect",
    stack: ["Python", "CNN", "TensorFlow", "Keras", "OpenCV", "Grad-CAM", "REST API"],
    description:
      "AI-powered medical imaging app detecting and classifying brain tumors from MRI scans with Grad-CAM explainability and REST API deployment.",
    highlights: null,
  },
  {
    title: "Twige Learn – AI-Powered English Learning App",
    github: "https://github.com/maneeshaPrasanna/CSEN269_TwigeLearn",
    stack: [
      "Flutter",
      "Dart",
      "Firebase",
      "OpenAI GPT",
      "Google Gemini",
      "BLoC/Cubit",
    ],
    description:
      "Cross-platform Flutter app teaching English to children aged 5–12 with AI-generated quizzes, real-time 1v1 competitions, and gamified learning.",
    highlights: null,
  },
  {
    title: "CampusRide – University Carpooling Platform",
    github: "https://github.com/maneeshaPrasanna/SCUCarpool",
    stack: ["Flutter", "Dart", "Firebase Firestore", "Google Places API", "Cubit"],
    description:
      "Full-stack ride-sharing app for university students with Google Places search, real-time Firestore coordination, and SCU email authentication.",
    highlights: null,
  },
  {
    title: "Smart Garden Simulation – JavaFX OOD Project",
    github: "https://github.com/thisispriyajain/csen275-gardeningproject",
    stack: ["Java", "JavaFX", "OOD", "Multithreading", "Sensor-Driven Simulation"],
    description:
      "Computerized gardening system simulating plant growth, climate control, and automated watering with sensor-driven multithreaded decision making.",
    highlights: null,
  },
  {
    title: "IEEE 802.11 Wireless Communication Simulator",
    github: "https://github.com/maneesha58/IEEE80211-Wireless-Simulator",
    stack: ["C", "UDP Sockets", "Network Programming"],
    description:
      "Client-server C application simulating IEEE 802.11 wireless protocols over UDP — frame construction, FCS validation, fragmentation, and retransmission logic with ACK/retry behavior.",
    highlights: null,
  },
  {
    title: "Federated Learning Framework – Distributed ML",
    github: "https://github.com/maneesha58/Federated-Learning-Framework",
    stack: ["Python", "PyTorch", "FedAvg", "FashionMNIST", "CIFAR-10"],
    description:
      "Privacy-preserving federated learning framework with FedAvg aggregation across five clients, evaluated on FashionMNIST and CIFAR-10 under non-IID data distributions.",
    highlights: null,
  },
  {
    title: "Advanced OS Simulations – Scheduling, Memory & Concurrency",
    github: null,
    stack: ["C", "POSIX Pthreads", "Virtual Memory", "CPU Scheduling"],
    description:
      "Suite of OS simulations covering FCFS, SJF, Priority, Round Robin scheduling, multithreaded ticket reservation, and page replacement algorithms.",
    highlights: null,
  },
];

export const achievements = [
  {
    title: "Technical Excellence Award — ICICI Lombard",
    description:
      "Recognized for high-impact data-driven system contributions and strong cross-functional project ownership.",
  },
  {
    title: "4.0/4.0 GPA — Santa Clara University",
    description:
      "MS in Computer Science (Machine Learning, Deep Learning, Operating Systems), California, USA.",
  },
  {
    title: "Departmental Rank 2 — Manipal Institute of Technology",
    description:
      "Graduated 2nd in Computer Science, Batch of 2021.",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
