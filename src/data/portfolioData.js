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
      tagline: "Smart Parking Management System",
      category: "Full-Stack Web Application",
      year: "2024",
      description: "A full-stack parking platform for finding and reserving available parking spaces, with separate user and owner workflows.",
      techStack: ["React", "Java", "Spring Boot", "PostgreSQL", "Groq API"],
      role: "Full-Stack Development",
      githubUrl: "https://github.com/Akanksha-916/ParkEase1",
      liveUrl: "https://park-ease1-eight.vercel.app/",
      highlights: [
        "Real-time parking space search and slot reservation workflow",
        "Separate user and parking lot owner dashboards",
        "Integrated Groq API for intelligent space assistance",
        "PostgreSQL database backing secure reservation transactions"
      ]
    },
    {
      id: "mediscan-ai",
      number: "02",
      title: "MediScan AI",
      tagline: "AI-Assisted Healthcare & Report Analysis",
      category: "Healthcare Platform",
      year: "2024",
      description: "A secure healthcare platform for medical report uploads, AI-assisted analysis, doctor appointments, and role-based patient and doctor workflows.",
      techStack: ["React", "TypeScript", "Spring Boot", "Spring Security", "PostgreSQL", "Gemini", "Cloudinary"],
      role: "Full-Stack & Cloud Integration",
      githubUrl: "https://github.com/Akanksha-916/MediScanAi",
      liveUrl: "https://healthcarereport.vercel.app/",
      highlights: [
        "Secure medical report document upload with Cloudinary storage",
        "AI-assisted diagnostic and lab report summarization using Gemini",
        "Doctor appointment scheduling with patient and doctor dashboards",
        "Role-based authentication & authorization with Spring Security"
      ]
    },
    {
      id: "logitrack",
      number: "03",
      title: "LogiTrack",
      tagline: "Last-Mile Logistics Tracking System",
      category: "Logistics Platform",
      year: "2024",
      description: "An end-to-end logistics platform supporting parcel management, dynamic shipping-rate calculation, live tracking, payments, and real-time status updates.",
      techStack: ["Java", "Spring Boot", "MySQL / TiDB", "REST APIs", "WebSockets", "Razorpay"],
      role: "Backend & Systems Development",
      githubUrl: "https://github.com/Akanksha-916/last_mile_delivery",
      liveUrl: "https://logitrack-pi-five.vercel.app/",
      highlights: [
        "End-to-end parcel lifecycle management and dynamic shipping-rate calculator",
        "Live tracking and real-time shipment status updates via WebSockets",
        "Secure checkout and online payment processing with Razorpay integration",
        "Robust relational data modeling on MySQL / TiDB"
      ]
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
