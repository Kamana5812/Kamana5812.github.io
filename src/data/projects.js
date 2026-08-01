export const featuredProjects = [
  {
    id: "skopos",
    slug: "skopos",
    title: "Skopos — AI Career & Learning Advisor",
    number: "01",
    tagline: "Full-stack AI web application streaming personalized career and learning roadmaps in real time.",
    description: "Skopos is a full-stack AI web application that turns a short intake form into a personalized, AI-generated career and learning roadmap — streamed live, section by section, into a structured interface with phased timelines, skill-gap analysis, and curated resources. Built end-to-end with a FastAPI backend, Groq-powered LLM integration behind a swappable client architecture, Server-Sent Events for real-time streaming, and a fully containerized deployment on AWS EC2. Includes a 25-test automated suite and a custom-branded frontend built without any JS framework.",
    year: 2025,
    category: "Full-Stack AI Web App",
    role: "Full-Stack & AI Engineer",
    status: "Deployed on AWS EC2",
    layout: "editorial",
    technologies: ["Python", "FastAPI", "Groq API", "Docker", "AWS EC2", "SSE Streaming", "Pytest", "JavaScript"],
    heroImage: null,
    problem: "CS students and career switchers experience decision paralysis when trying to navigate vast software fields without structured, personalized learning benchmarks.",
    solution: "Engineered a high-performance FastAPI service integrating Groq LLMs behind an isolated swappable client contract, streaming section-by-section roadmaps via Server-Sent Events.",
    keyFeatures: [
      "Personalized, AI-generated learning roadmaps with phased timelines & skill-gap analysis",
      "Real-time Server-Sent Events (SSE) streaming output parsed into structured UI components",
      "Layered backend architecture (FastAPI, Pydantic validation, swappable AI client wrapper)",
      "Rate limiting, structured error handling, 25-test automated pytest suite, Docker & AWS EC2 deployment"
    ],
    contribution: "Designed end-to-end architecture: FastAPI backend, SSE client parser, pytest test suite, multi-stage Docker build, and AWS EC2 deployment.",
    learnings: "Mastered LLM structured prompt contracts, SSE streaming protocols, swappable provider abstraction layers, and containerized cloud deployment.",
    github: "https://github.com/Kamana5812/skopos",
    liveDemo: "https://skopos-career.vercel.app"
  },
  {
    id: "optivolt-ai",
    slug: "optivolt-ai",
    title: "OptiVolt AI — Solar Performance & Predictive Maintenance",
    number: "02",
    tagline: "IoT & AI-based solar monitoring system providing real-time environmental telemetry and local predictive maintenance alerts.",
    description: "OptiVolt AI is an IoT and AI-based solar monitoring system designed to identify environmental conditions that can reduce solar-panel performance and provide early maintenance alerts. The prototype uses an ESP32 with temperature, humidity, light-intensity, and particulate/dust sensing to collect real-time environmental data.\n\nA lightweight regression-based prediction model processes these sensor readings locally to estimate a solar-panel performance score and classify operating conditions as Optimal, Moderate, or Low. The system includes LED and buzzer alerts, night-mode logic to prevent false low-performance warnings when sunlight is unavailable, and an offline web dashboard hosted directly by the ESP32.\n\nThe ESP32 operates as its own Wi-Fi access point, allowing users to connect through a phone or laptop and monitor readings without an external router, cloud service, or internet connection. The project explores an offline-first, low-cost approach to predictive solar maintenance, particularly for remote and low-connectivity environments.",
    year: 2025,
    category: "IoT & Embedded ML System",
    role: "Embedded Systems & ML Engineer",
    status: "Completed Prototype",
    layout: "technical",
    technologies: ["ESP32", "C/C++", "Arduino Framework", "IoT", "Embedded Systems", "Regression Modeling", "HTML/CSS/JS", "DHT11", "LDR", "GP2Y1010AU0F"],
    heroImage: null,
    problem: "Solar panels frequently lose operational efficiency in remote areas due to dust accumulation and extreme thermal conditions, while lacking internet access for cloud-based monitoring.",
    solution: "Built an offline-first ESP32 access point hosting a local web dashboard that runs on-device regression modeling for real-time performance classification and maintenance alerts.",
    keyFeatures: [
      "Real-time environmental monitoring (Temperature, Humidity, Light Intensity, Particulate/Dust Sensing)",
      "Local AI/ML-based regression model estimating panel performance scores (Optimal, Moderate, Low)",
      "Dust-risk monitoring, LED/buzzer maintenance alerts, and night-mode detection",
      "Offline ESP32 Wi-Fi Access Point dashboard operating without routers or cloud dependency"
    ],
    plannedFeatures: [
      "Direct voltage/current measurement for true electrical efficiency calculation",
      "TinyML-based models & predictive cleaning triggers",
      "Automatic panel cleaning & solar tracking mechanism",
      "LoRa communication, historical data logging & hybrid offline/cloud analytics"
    ],
    contribution: "Programmed ESP32 C/C++ firmware, sensor drivers (DHT11, LDR, GP2Y1010AU0F), regression inference algorithm, and HTTP web server dashboard.",
    learnings: "Mastered embedded C/C++ firmware development, on-device machine learning inference, and offline access point web server architectures.",
    github: "https://github.com/Kamana5812/optivolt-ai",
    liveDemo: "https://optivolt-ai.streamlit.app"
  }
];
