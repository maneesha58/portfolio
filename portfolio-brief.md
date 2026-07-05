# Portfolio Website – Maneesha Prasanna
## Brief for Cursor AI

Build a modern, responsive personal portfolio website for an AI/ML engineer.


---

## Personal Info

- **Name:** Maneesha Prasanna
- **Location:** Bengaluru, India
- **Email:** maneeshaprasanna@gmail.com
- **Phone:** +91 8971005593
- **LinkedIn:** https://www.linkedin.com/in/maneesha-prasanna-1b45b31a4/
- **GitHub:** https://github.com/maneesha58

---

## Tagline / Hero

> AI/ML Engineer · MS Computer Science (GPA 4.0) · Deep Learning · LLMs · Full-Stack

---

## About / Summary

AI/ML engineer with an MS in Computer Science (GPA 4.0) from Santa Clara University and 3+ years of industry experience building production-grade data-driven and ML-adjacent systems at ICICI Lombard. Skilled in deep learning, NLP, LLM fine-tuning (LoRA/PEFT), and full-stack application development. Experienced with HuggingFace Transformers, PyTorch, TensorFlow, Flutter, and Firebase. Passionate about building next-generation AI systems — from CNN classifiers and NLP pipelines to real-time intelligent applications.

---

## Education

### MS, Computer Science & Engineering
**Santa Clara University, CA** · GPA: 4.0 ·  June 2026
Coursework: Machine Learning, Deep Learning, NLP, Neural Networks, Algorithms, Data Structures, Statistics, Operating Systems, DBMS

### B.Tech, Computer Science
**Manipal Institute of Technology, India** · CGPA: 9.3/10 · June 2021

---

## Technical Skills

| Category | Skills |
|---|---|
| ML & AI | TensorFlow, Keras, PyTorch, Scikit-learn, CNNs, HuggingFace Transformers, PEFT/LoRA, Supervised/Unsupervised Learning, Feature Engineering, Cross-Validation |
| Generative AI & LLMs | LLM Fine-tuning (LoRA), Prompt Engineering, Domain-Adversarial Training, OpenAI GPT, Google Gemini, NLP APIs, AI Evaluations |
| Languages | Python, Java, Dart (Flutter), C, JavaScript |
| Frameworks & Tools | Flask, Spring Boot, REST APIs, Firebase (Auth/Firestore), Google Maps/Places API, OpenCV, Jupyter, Git, GitHub Actions |
| Data & Cloud | Pandas, NumPy, Matplotlib, AWS (EC2, S3), MySQL, MongoDB, Statistical Analysis, A/B Testing |

---

## Work Experience

### Software Engineer — ML-Adjacent Systems
**ICICI Lombard General Insurance** · Sept 2021 – Dec 2024

- Designed and deployed data-driven rule-based decision pipelines using Blaze Rule Engine — functionally analogous to ML inference systems — processing millions of insurance decisions per second on production data.
- Performed data analysis and performance profiling on large-scale datasets, driving ~80% improvement in system efficiency and 40–50% reduction in API latency through data-driven optimization.
- Built high-throughput Java backend services for motor and health insurance at enterprise scale — maintained 99.9%+ uptime, enabling reliable data collection for downstream analytical models.
- Received **Technical Excellence Award** for high-impact contributions and cross-functional project ownership.

---

## Projects

### 1. Beyond Flesch-Kincaid: Prompt-based Text Difficulty Classification
**GitHub:** https://github.com/SCU-CSEN346/Beyond-Flesch
**Stack:** Python · HuggingFace · PyTorch · PEFT/LoRA · ELECTRA · Phi-3.5-mini · Scikit-learn

Reproduced and extended Rooein et al. (ACL BEA 2024) on prompt-based text difficulty classification entirely from scratch, with no original code available. Computed 46 static readability features and used 5 open-source LLMs (Gemma-7B, LLaMA-2-7B/13B, Mistral-7B, Qwen2.5-7B) as binary prompt-feature extractors feeding a Logistic Regression classifier, achieving a best result of 0.84 Macro-F1 with Mistral-7B. Discovered a 55–65% out-of-domain generalization failure not reported in the original paper, which became the central research contribution. Built a Domain-Adversarial ELECTRA-large classifier with a Gradient Reversal Layer (GRL) and ScalarMix pooling, achieving 0.89 in-distribution Macro-F1. Fine-tuned Phi-3.5-mini (3.8B) with LoRA (r=32) on 17K examples — achieving 127× faster inference, 83× lower training energy, and the only model to generalize out-of-domain. Designed AdvConcept-50, an adversarial benchmark decoupling surface readability from conceptual difficulty, improving F1 from 0.60 to 0.76.

**Highlights:**
- 127× faster inference (5000ms → 40ms)
- 83× lower training energy (2.29 → 0.39 kWh)
- 0.84 Macro-F1 (best LLM prompt-feature result)
- 0.89 in-distribution F1 (ELECTRA adversarial)

---

### 2. Brain Tumor Detection – CNN Medical Imaging Classifier
**GitHub:** https://github.com/maneesha58/BrainDetect
**Stack:** Python · CNN · TensorFlow · Keras · OpenCV · NumPy · Grad-CAM · REST API

Built an AI-powered medical imaging application that leverages CNNs to detect and classify brain tumors from MRI scans. Developed scalable data preprocessing, normalization, and augmentation pipelines using OpenCV and NumPy to improve model generalization on limited medical datasets. Systematically tuned hyperparameters and evaluated using accuracy, precision, recall, F1-score, and confusion matrix, iterating on classification boundaries through failure analysis. Incorporated Grad-CAM for visual explainability — enabling model decisions to be traced back to specific MRI regions — and deployed real-world inference via REST API.

---

### 3. Twige Learn – AI-Powered Cross-Platform English Learning App
**GitHub:** https://github.com/maneeshaPrasanna/CSEN269_TwigeLearn
**Stack:** Flutter · Dart · Firebase · OpenAI GPT · Google Gemini · BLoC/Cubit · Android · iOS · Web · Desktop

Developed Twige Learn, a cross-platform Flutter application to teach English to children aged 5–12 through interactive, gamified learning across Android, iOS, Web, and Desktop from a single codebase. Integrated Firebase Authentication and Firestore for secure login and real-time data synchronization, and implemented AI-generated quizzes using OpenAI GPT and Google Gemini APIs with fallback mechanisms and offline caching. Built a real-time 1v1 competition system with Firestore-based matchmaking, bot opponents, XP gamification, streak tracking, and global leaderboards. Applied BLoC/Cubit state management and layered architecture for scalability and cross-platform support.

---

### 4. CampusRide – University Carpooling Platform
**GitHub:** https://github.com/maneeshaPrasanna/SCUCarpool
**Stack:** Flutter · Dart · Firebase Firestore · Google Places Autocomplete API · Cubit

Developed CampusRide, a full-stack mobile ride-sharing application for university students to find, offer, and schedule shared rides with real-time coordination. Integrated Google Places Autocomplete API for intelligent location search and prediction, and used Firebase Firestore for real-time ride data storage, seat availability tracking, and live ride status updates. Implemented SCU email-based authentication to restrict access to verified university community members, and built the app using Cubit state management for a modular, scalable architecture.

---

### 5. Smart Garden Simulation – JavaFX OOD Project
**GitHub:** https://github.com/thisispriyajain/csen275-gardeningproject
**Stack:** Java · JavaFX · OOD · Multithreading · Sensor-Driven Simulation

Developed a Computerized Gardening System, a Java/JavaFX-based simulation designed to replicate real-world garden operations digitally. Built modular components for plant growth, insect activity, nutrient management, climate regulation, and lighting control, supported by sensor integration and comprehensive logging. Implemented automated subsystems for watering, heating, and pest control using sensor-driven decision making and multithreading to monitor and maintain the health of diverse plant species concurrently. Applied core OOP principles including inheritance, encapsulation, polymorphism, and abstraction, and documented system design through UML diagrams.

---

### 6. IEEE 802.11 Wireless Communication Simulator
**GitHub:** https://github.com/maneeshaPrasanna/IEEE80211-Wireless-Simulator
**Stack:** C · UDP Sockets · Network Programming

Developed a client-server application in C simulating IEEE 802.11 wireless communication protocols over UDP sockets, implementing the full data transmission stack from the ground up. Built frame construction, fragmentation, and FCS checksum validation for error detection, alongside acknowledgment and retransmission logic to simulate reliable delivery over an unreliable channel. Incorporated timeout-based packet recovery mechanisms and comprehensive error handling to replicate real-world wireless reliability challenges.

---

### 7. Federated Learning Framework – Distributed ML
**GitHub:** https://github.com/maneeshaPrasanna/Federated-Learning-Framework
**Stack:** Python · PyTorch · FedAvg · FashionMNIST · CIFAR-10

Designed and implemented a Federated Learning framework in Python with PyTorch, simulating privacy-preserving distributed model training across five independent clients without sharing raw data. Applied the FedAvg algorithm to aggregate local model updates into a global model, and built image classification pipelines for FashionMNIST and CIFAR-10. Conducted centralized versus federated performance comparisons and evaluated convergence behavior under non-IID data distributions, reflecting real-world challenges in federated systems.

---

### 8. Advanced OS Simulations – Scheduling, Memory & Concurrency
**Stack:** C · POSIX Pthreads · Virtual Memory · CPU Scheduling

Developed a suite of operating system simulations in C spanning CPU scheduling, multithreaded process management, and virtual memory management. Implemented FCFS, SJF, Priority, and Round Robin scheduling algorithms with comparative performance analysis, and built multithreaded simulations using POSIX Pthreads including a concurrent ticket reservation system with synchronization primitives for thread safety. Simulated virtual memory management with paging, swapping, and page replacement algorithms including FIFO, LRU, LFU, MFU, and Random.

---

## Achievements

- **Technical Excellence Award — ICICI Lombard:** Recognized for high-impact data-driven system contributions and strong cross-functional project ownership.
- **4.0 GPA** — Santa Clara University MS in Computer Science (Machine Learning, Deep Learning, NLP).
- **9.3/10 CGPA** — Manipal Institute of Technology B.Tech in Computer Science.

---

## Website Design Notes for Cursor


- **Sections to include (in order):**
  1. Hero / Landing (name, tagline, CTA buttons → GitHub, LinkedIn, Resume)
  2. About
  3. Skills (grouped by category, maybe tag-style pills)
  4. Experience (timeline style)
  5. Projects (card grid — each card: title, stack tags, description, GitHub link button)
  6. Education
  7. Achievements
  8. Contact (email, LinkedIn, GitHub)
- **Each project card should show:** Title · Tech stack tags · 2-line description · GitHub button
- **Resume download button** in the hero and/or navbar
- **Mobile responsive**

