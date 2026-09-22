export const portfolioData = {
  personal: {
    name: "Akanksha",
    fullName: "Akanksha",
    title: "Computer Science Student · Full-Stack Software Developer",
    subtitle: "Building resilient distributed architectures, scalable web applications, and thoughtful digital products.",
    bioShort: "Computer Science student focused on building scalable web applications, backend systems, and intelligent digital products.",
    location: "India",
    status: "Available for Software Engineering Roles & Internships",
    email: "deviakanksha16@gmail.com",
    github: "https://github.com/Akanksha-916",
    linkedin: "https://linkedin.com",
    resumeUrl: "#",
    statement: "Engineering thoughtful software solutions from robust backend APIs to performant, responsive interfaces.",
    aboutStory: [
      "I am a Computer Science student with a deep passion for understanding how distributed systems scale and how intuitive interfaces empower users.",
      "My core focus spans Full-Stack Engineering, backend REST API design, efficient Database modeling, and applying Data Structures & Algorithms to solve challenging real-world problems.",
      "Whether designing an automated smart parking ecosystem with Spring Boot or engineering an AI-assisted healthcare diagnostics analyzer, I prioritize clean code architecture, performance, and reliability."
    ],
    meta: {
      location: "India",
      focus: "Full-Stack Development & Backend Systems",
      education: "B.Tech in Computer Science & Engineering",
      current: "Computer Science Student",
      goal: "Software Engineer / Systems Developer"
    }
  },

  metrics: [
    { label: "Selected Projects", value: "05+", detail: "Full-stack & AI applications" },
    { label: "Core Technologies", value: "15+", detail: "Languages, frameworks & tools" },
    { label: "Hackathon Highlights", value: "01+", detail: "Smart India Hackathon (SIH)" },
    { label: "Problem Solving", value: "300+", detail: "DSA problems solved" }
  ],

  skills: {
    categories: [
      { id: "all", name: "All Technologies" },
      { id: "languages", name: "Languages" },
      { id: "frontend", name: "Frontend" },
      { id: "backend", name: "Backend & APIs" },
      { id: "database", name: "Database" },
      { id: "tools", name: "Tools & Cloud" }
    ],
    items: [
      // Languages
      {
        name: "Java",
        category: "languages",
        level: "Advanced",
        description: "Core OOP, Collections framework, Multi-threading, and enterprise backend engineering.",
        useCase: "Primary language for Spring Boot microservices and robust data structures implementation."
      },
      {
        name: "JavaScript (ES6+)",
        category: "languages",
        level: "Advanced",
        description: "Asynchronous programming, closures, event-loop handling, and modern functional patterns.",
        useCase: "Powering interactive React components, dynamic state management, and Node.js APIs."
      },
      {
        name: "Python",
        category: "languages",
        level: "Proficient",
        description: "Scripting, REST endpoints, data preprocessing, and AI model orchestration.",
        useCase: "Used in AI trip planners, healthcare document analytics, and automated data scripts."
      },
      {
        name: "SQL",
        category: "languages",
        level: "Proficient",
        description: "Complex relational queries, indexing strategies, normalization, and ACID transactions.",
        useCase: "Designing structured schemas and high-throughput query optimization in PostgreSQL & MySQL."
      },
      {
        name: "C / C++",
        category: "languages",
        level: "Proficient",
        description: "Memory management, algorithmic optimization, and computational foundations.",
        useCase: "Core Data Structures & Algorithms problem solving and low-level system understanding."
      },

      // Frontend
      {
        name: "React.js",
        category: "frontend",
        level: "Advanced",
        description: "Component lifecycle, custom hooks, virtual DOM optimization, and modular UI design.",
        useCase: "Building responsive single-page applications with smooth state synchronization."
      },
      {
        name: "Tailwind CSS",
        category: "frontend",
        level: "Advanced",
        description: "Utility-first design systems, responsive grid/flexbox layouts, and custom design tokens.",
        useCase: "Crafting bespoke editorial interfaces with minimal CSS bundle footprint."
      },
      {
        name: "HTML5 & Modern CSS",
        category: "frontend",
        level: "Advanced",
        description: "Semantic web architecture, accessible ARIA roles, CSS Grid, and custom animations.",
        useCase: "Ensuring accessible, SEO-optimized, cross-browser web standard compliance."
      },
      {
        name: "Next.js",
        category: "frontend",
        level: "Intermediate",
        description: "Server-side rendering (SSR), static site generation (SSG), and routing optimization.",
        useCase: "High-performance web applications with built-in API routes and image caching."
      },

      // Backend
      {
        name: "Spring Boot",
        category: "backend",
        level: "Advanced",
        description: "Dependency Injection, Spring MVC, Spring Data JPA, and secure RESTful services.",
        useCase: "Enterprise-grade microservice backends, role-based JWT auth, and database persistence."
      },
      {
        name: "Node.js & Express.js",
        category: "backend",
        level: "Proficient",
        description: "Event-driven asynchronous I/O, middleware pipelines, and scalable JSON REST APIs.",
        useCase: "Lightweight microservices, WebSocket communication, and rapid backend prototyping."
      },
      {
        name: "REST APIs & Architecture",
        category: "backend",
        level: "Advanced",
        description: "Stateless API design, HTTP semantics, rate limiting, and structured JSON contracts.",
        useCase: "Decoupled client-server interaction across all full-stack applications."
      },
      {
        name: "JWT Authentication",
        category: "backend",
        level: "Proficient",
        description: "Stateless bearer token authentication, refresh token rotation, and RBAC authorization.",
        useCase: "Securing user authentication and API endpoints across multi-tier applications."
      },

      // Database
      {
        name: "PostgreSQL",
        category: "database",
        level: "Proficient",
        description: "Relational modeling, foreign key constraints, JSONB storage, and performant indexes.",
        useCase: "Primary relational database for transaction-heavy platforms like ParkEase."
      },
      {
        name: "MySQL",
        category: "database",
        level: "Proficient",
        description: "Structured table schemas, stored procedures, joins, and relational integrity.",
        useCase: "Enterprise application databases and academic research platforms."
      },
      {
        name: "MongoDB",
        category: "database",
        level: "Intermediate",
        description: "Document-oriented NoSQL schemas, aggregation pipelines, and flexible document models.",
        useCase: "Unstructured analytics data, chat histories, and AI output caching."
      },

      // Tools & Cloud
      {
        name: "Git & GitHub",
        category: "tools",
        level: "Advanced",
        description: "Version control, branching workflows, PR reviews, merge conflict resolution, and CI/CD.",
        useCase: "Collaborative codebases, open-source development, and deployment pipelines."
      },
      {
        name: "Docker",
        category: "tools",
        level: "Intermediate",
        description: "Containerization, multi-stage Dockerfiles, and reproducible local development environments.",
        useCase: "Isolating backend microservices and database containers for uniform deployments."
      },
      {
        name: "Cloud Platforms (AWS / Vercel)",
        category: "tools",
        level: "Intermediate",
        description: "Cloud deployment, serverless functions, object storage (S3), and environment management.",
        useCase: "Hosting live applications, managing production DNS, and automated CI deployments."
      },
      {
        name: "Postman",
        category: "tools",
        level: "Advanced",
        description: "API contract testing, automated test collections, environment variables, and mock servers.",
        useCase: "Validating API payloads, status codes, and edge-case error responses."
      }
    ]
  },

  projects: [
    {
      id: "parkease",
      number: "01",
      title: "ParkEase",
      tagline: "Smart Parking Management & Real-Time Slot Reservation Platform",
      category: "Full-Stack System",
      year: "2024",
      description: "An automated full-stack parking management solution addressing urban congestion through real-time slot occupancy tracking, dynamic reservation workflows, and secure digital payments.",
      techStack: ["Spring Boot", "React.js", "PostgreSQL", "Tailwind CSS", "JWT Auth", "REST API"],
      role: "Lead Full-Stack Developer",
      githubUrl: "https://github.com/Akanksha-916/portfolio",
      liveUrl: "https://github.com/Akanksha-916/portfolio",
      previewGradient: "from-amber-950/40 via-stone-900 to-black",
      accentColor: "#E58A4E",
      highlights: [
        "Real-time slot availability matrix with dynamic floor & zone filtering",
        "Stateless token-based authentication with role-based access for drivers and parking admins",
        "Automated QR code pass generation and simulated checkout flow",
        "Concurrency-safe slot reservation mechanism preventing race conditions"
      ],
      caseStudy: {
        problem: "Urban motorists waste significant time and fuel searching for parking spaces, causing traffic buildup and parking lot mismanagement.",
        solution: "ParkEase offers a synchronized digital platform where drivers view live slot availability, pre-book specific parking spaces, and navigate directly with zero friction.",
        architecture: "React SPA frontend communicates via secure REST endpoints with a Spring Boot application server backed by PostgreSQL, using JPA transactions to lock slots atomically during booking.",
        contribution: "Engineered the complete Spring Boot backend API suite, designed relational database schemas, and built the interactive slot booking grid with live status feedback.",
        challenges: "Managing simultaneous reservation attempts on the last available spot. Solved by implementing database-level row locking and optimistic concurrency checks.",
        outcome: "Delivered a fully responsive prototype with sub-100ms API response times and comprehensive unit test coverage."
      }
    },
    {
      id: "health-analyzer",
      number: "02",
      title: "Cloud Health Report Analyzer",
      tagline: "Intelligent Diagnostic Document Extraction & AI-Assisted Clinical Insights",
      category: "AI & Cloud Platform",
      year: "2024",
      description: "A cloud-integrated medical report analysis platform that parses complex lab results (blood work, pathology, lipid panels) into structured, easily digestible visual health summaries.",
      techStack: ["Python", "FastAPI", "React.js", "Cloud Storage", "Tailwind CSS", "OCR & NLP"],
      role: "Backend & Cloud Integration",
      githubUrl: "https://github.com/Akanksha-916/portfolio",
      liveUrl: "https://github.com/Akanksha-916/portfolio",
      previewGradient: "from-emerald-950/40 via-zinc-900 to-black",
      accentColor: "#10B981",
      highlights: [
        "Automated OCR extraction from PDF and scanned lab images",
        "Contextual vital biomarker highlighting (e.g., normal range vs elevated indicators)",
        "Secure encrypted medical document storage with temporary signed download URLs",
        "Clean interactive health timeline displaying biomarker trends over time"
      ],
      caseStudy: {
        problem: "Patients often struggle to comprehend dense medical lab reports, leading to anxiety and delays in seeking appropriate medical counsel.",
        solution: "A streamlined web platform where users upload PDF or image reports and receive an intuitive breakdown of key indicators with clear reference range comparisons.",
        architecture: "React client with drag-and-drop file uploader connects to a FastAPI Python backend utilizing document parsing libraries and secure cloud object storage.",
        contribution: "Developed the file processing pipeline, structured regex extraction for lab parameters, and designed the interactive metrics comparison cards.",
        challenges: "Handling varied, non-standardized lab report layouts across different diagnostic providers. Overcame this with fuzzy parameter matching and fallback OCR parsers.",
        outcome: "Significantly improved document comprehension speed in user testing with zero diagnostic distortion."
      }
    },
    {
      id: "study-assistant",
      number: "03",
      title: "Study Assistant",
      tagline: "AI-Powered Adaptive Learning & Note Synthesis Workspace",
      category: "Full-Stack EdTech",
      year: "2024",
      description: "An intelligent study companion that transforms unstructured lecture transcripts, PDFs, and notes into interactive revision flashcards, concept mind-maps, and practice quizzes.",
      techStack: ["React.js", "Node.js", "Express", "MongoDB", "AI APIs", "Tailwind CSS"],
      role: "Full-Stack Developer",
      githubUrl: "https://github.com/Akanksha-916/portfolio",
      liveUrl: "https://github.com/Akanksha-916/portfolio",
      previewGradient: "from-indigo-950/40 via-slate-900 to-black",
      accentColor: "#818CF8",
      highlights: [
        "Automated summarization with adjustable depth (Executive summary vs deep dive)",
        "Instant interactive quiz generator with spaced repetition scoring",
        "Markdown note editor with live preview and syntax-highlighted code blocks",
        "Offline-capable local storage synchronization"
      ],
      caseStudy: {
        problem: "Students spend inordinate amounts of study time organizing and formatting raw study materials rather than actively testing their comprehension.",
        solution: "An all-in-one workspace that synthesizes lengthy study documents into structured bulleted highlights, key term definitions, and self-assessment quizzes in seconds.",
        architecture: "React frontend with rich text editing, Node.js/Express backend managing user workspaces in MongoDB and streaming AI prompt completions.",
        contribution: "Built the modular UI components, prompt engineering workflows, and quiz state management engine with instant feedback.",
        challenges: "Maintaining responsive UI during long text generation. Implemented streaming chunk updates and optimistic UI states.",
        outcome: "Enhanced revision efficiency and received positive feedback from peer engineering study groups."
      }
    },
    {
      id: "mapmypsit",
      number: "04",
      title: "MapmyPSIT",
      tagline: "Interactive Campus Navigation & Spatial Routing System",
      category: "Spatial Web App",
      year: "2023",
      description: "A tailored campus navigation system built for students, faculty, and campus visitors to locate academic blocks, lecture halls, administrative offices, and amenities with optimal route calculation.",
      techStack: ["React.js", "Graph Algorithms", "Leaflet.js", "Tailwind CSS", "JavaScript"],
      role: "Frontend & Algorithm Developer",
      githubUrl: "https://github.com/Akanksha-916/portfolio",
      liveUrl: "https://github.com/Akanksha-916/portfolio",
      previewGradient: "from-cyan-950/40 via-zinc-900 to-black",
      accentColor: "#06B6D4",
      highlights: [
        "Interactive campus map with multi-floor building floorplans",
        "Shortest path calculation using Dijkstra's graph traversal algorithm",
        "Search-by-room and department directory with instant pin focus",
        "Optimized for low-bandwidth mobile devices"
      ],
      caseStudy: {
        problem: "Sprawling university campuses are difficult for freshmen, parents, and visiting guests to navigate, leading to missed sessions and orientation delays.",
        solution: "A lightweight spatial web app providing turn-by-turn indoor and outdoor directional pathfinding across campus nodes.",
        architecture: "Leaflet vector tile layer overlaid with custom GeoJSON campus building polygons and a weighted graph network evaluated client-side via Dijkstra's algorithm.",
        contribution: "Mapped campus coordinates, constructed the graph adjacency list, and engineered the route calculation algorithm with responsive step-by-step guidance.",
        challenges: "Accurately representing multi-floor transitions (stairs, elevators). Solved by creating 3D node layers with floor-switch waypoints.",
        outcome: "Adopted by student orientation teams during campus events and admissions."
      }
    },
    {
      id: "ai-trip-planner",
      number: "05",
      title: "AI Trip Planner",
      tagline: "Intelligent Multi-Day Travel Itinerary & Budget Optimizer",
      category: "Web Application",
      year: "2023",
      description: "A smart travel planning application that curates customized multi-day vacation itineraries tailored to traveler preferences, budget constraints, group size, and destination attractions.",
      techStack: ["React.js", "Tailwind CSS", "AI Engine", "Google Places API", "Vite"],
      role: "Frontend & API Integration",
      githubUrl: "https://github.com/Akanksha-916/portfolio",
      liveUrl: "https://github.com/Akanksha-916/portfolio",
      previewGradient: "from-rose-950/40 via-neutral-900 to-black",
      accentColor: "#FB7185",
      highlights: [
        "Day-by-day structured activity schedule with time estimates and travel distances",
        "Interactive hotel & attraction cards with rating and pricing estimates",
        "Dynamic budget breakdown (Lodging, Food, Travel, Activities)",
        "One-click PDF / shareable link export"
      ],
      caseStudy: {
        problem: "Planning travel itineraries across multiple websites and spreadsheets is fragmented, time-consuming, and prone to budget overruns.",
        solution: "A single-screen interactive planner generating day-by-day itineraries with lodging suggestions, local cuisine recommendations, and realistic timing.",
        architecture: "React frontend with Vite, communicating with generative AI APIs for itinerary structuring and places integration for location imagery.",
        contribution: "Designed the aesthetic itinerary timeline UI, state persistence, and responsive mobile-friendly travel card layouts.",
        challenges: "Formatting complex unstructured travel recommendations into a structured schedule schema. Resolved via prompt schema enforcement and JSON parser validation.",
        outcome: "Seamless user experience with instant travel blueprint generation."
      }
    }
  ],

  journey: [
    {
      id: "sih-2024",
      period: "2024",
      title: "Smart India Hackathon (SIH 2024)",
      role: "Hackathon Participant & Core Full-Stack Developer",
      organization: "Ministry of Education / AICTE",
      description: "Collaborated in an intensive competitive hackathon solving complex real-world problem statements. Architected the core application workflow, integrated REST APIs, and pitched prototype demonstrations to evaluation juries.",
      tags: ["Hackathon", "Rapid Prototyping", "Full-Stack", "Team Leadership"]
    },
    {
      id: "infosys-internship",
      period: "2024",
      title: "Software Engineering Virtual Internship",
      role: "Software Engineering Intern",
      organization: "Infosys Springboard",
      description: "Underwent rigorous software engineering industry training covering Object-Oriented Design in Java, Database Management, Spring Framework architectures, and modern software development lifecycle (SDLC) best practices.",
      tags: ["Java", "Spring Boot", "OOP Design", "DBMS", "SDLC"]
    },
    {
      id: "academic-projects",
      period: "2023 - Present",
      title: "Full-Stack Projects & Academic Technical Growth",
      role: "Independent & Collaborative Developer",
      organization: "Computer Science Department",
      description: "Engineered scalable web applications including ParkEase, MapmyPSIT, and AI Cloud Health Analyzer. Maintained rigorous version control practices on GitHub and continuous learning in Distributed Systems.",
      tags: ["System Design", "Git/GitHub", "Web Engineering", "DSA"]
    }
  ],

  education: {
    degree: "Bachelor of Technology (B.Tech)",
    major: "Computer Science & Engineering",
    institution: "PSIT / Computer Science Engineering",
    duration: "2022 — 2026",
    status: "Final Year Student",
    highlights: [
      "Consistent academic performance in core Computer Science fundamentals",
      "Active participant in technical coding hackathons and engineering workshops",
      "Strong foundation in algorithmic problem solving and software architecture"
    ],
    coursework: [
      "Data Structures & Algorithms (DSA)",
      "Database Management Systems (DBMS)",
      "Operating Systems (OS)",
      "Computer Networks (CN)",
      "Object-Oriented Programming (OOP)",
      "Software Engineering & System Design"
    ]
  },

  codeLab: [
    {
      title: "Concurrency-Safe Reservation Handler",
      language: "java",
      snippet: `@Transactional
public BookingResponse reserveSlot(Long slotId, User user) {
    ParkingSlot slot = slotRepository.findByIdWithLock(slotId)
        .orElseThrow(() -> new SlotNotFoundException("Slot not found"));
        
    if (slot.getStatus() != SlotStatus.AVAILABLE) {
        throw new SlotUnavailableException("Slot already reserved");
    }
    
    slot.setStatus(SlotStatus.RESERVED);
    slot.setReservedBy(user);
    return new BookingResponse(slotRepository.save(slot), "Confirmed");
}`
    },
    {
      title: "Dijkstra Spatial Shortest Path",
      language: "javascript",
      snippet: `function findShortestRoute(graph, startNode, targetNode) {
  const distances = {}, previous = {}, pq = new PriorityQueue();
  distances[startNode] = 0;
  pq.enqueue(startNode, 0);

  while (!pq.isEmpty()) {
    const { element: current } = pq.dequeue();
    if (current === targetNode) break;

    graph[current]?.forEach(({ node: neighbor, weight }) => {
      const alt = distances[current] + weight;
      if (alt < (distances[neighbor] ?? Infinity)) {
        distances[neighbor] = alt;
        previous[neighbor] = current;
        pq.enqueue(neighbor, alt);
      }
    });
  }
  return reconstructPath(previous, targetNode);
}`
    }
  ]
};
