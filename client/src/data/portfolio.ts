export const siteConfig = {
  name: "Joseph Ziro Ngowwa",
  role: "Software Developer & AI Automation Builder",
  availability: "AVAILABLE FOR NEW PROJECTS",
  description:
    "Joseph Ziro Ngowwa builds practical digital systems for businesses — from websites and web applications to APIs, business systems and AI-powered automation.",
  email: "hello@josephziro.dev",
  linkedin: "LinkedIn",
  github: "GitHub",
};

export const navItems = [
  ["About", "about"],
  ["Services", "services"],
  ["Work", "work"],
  ["Automation", "automation"],
  ["Skills", "skills"],
  ["Process", "process"],
  ["Contact", "contact"],
] as const;

export const services = [
  {
    eyebrow: "01",
    title: "Web Development",
    description:
      "Modern, responsive websites and web applications designed around real business needs.",
    solves:
      "Outdated websites, poor user experience and digital products that do not communicate value clearly.",
    builds:
      "Business websites, landing pages, dashboards, booking platforms and custom web applications.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "Laravel", "Tailwind CSS"],
  },
  {
    eyebrow: "02",
    title: "Business Systems",
    description:
      "Custom software that helps businesses manage their operations in one connected system.",
    solves:
      "Manual processes, disconnected information and repetitive administrative work.",
    builds:
      "HR systems, recruitment platforms, booking systems, finance tools, logistics systems and management portals.",
    technologies: ["PHP", "Laravel", "SQL", "JavaScript", "REST APIs"],
  },
  {
    eyebrow: "03",
    title: "API Integration",
    description:
      "Connect different platforms and services so information can move between systems automatically.",
    solves:
      "Disconnected platforms, duplicate data entry and manual information transfer.",
    builds:
      "REST API integrations, payment integrations, booking APIs, third-party services and internal system connections.",
    technologies: ["REST APIs", "PHP", "Laravel", "JavaScript", "Postman"],
  },
  {
    eyebrow: "04",
    title: "AI Automation",
    description:
      "AI-powered workflows that reduce repetitive work and improve how information moves through a business.",
    solves:
      "Repetitive tasks, slow information processing and manual decision-support workflows.",
    builds:
      "AI agents, automated email workflows, document processing, support triage and business intelligence workflows.",
    technologies: ["n8n", "AI Agents", "LLM APIs", "OpenRouter", "Mistral"],
  },
];

export const projects = [
  {
    number: "01",
    name: "Prosper HR",
    category: "HR / RECRUITMENT",
    description:
      "A recruitment and HR platform connecting job seekers, employers and internal business processes.",
    problem:
      "Recruitment information and business processes need to be managed through a structured digital platform.",
    solution:
      "A Laravel-based platform with recruitment workflows, services, job adverts and API-driven data.",
    technologies: ["Laravel", "PHP", "SQL", "JavaScript", "REST APIs"],
    externalUrl: "https://prosperhr.co.ke",
    accent: "red",
  },
  {
    number: "02",
    name: "Angani Resort",
    category: "HOSPITALITY / BOOKING",
    description:
      "A modern resort website and booking experience designed around rooms, activities, events and reservations.",
    problem:
      "Guests need a simple way to discover the property, explore experiences and begin a reservation.",
    solution:
      "A responsive hospitality platform connected to reservation and payment APIs.",
    technologies: ["Laravel", "PHP", "JavaScript", "REST APIs", "CSS"],
    externalUrl: "https://anganiresorts.com",
    accent: "blue",
  },
  {
    number: "03",
    name: "Courier System",
    category: "LOGISTICS / BUSINESS SYSTEM",
    description:
      "A digital system designed to manage courier operations, deliveries and business workflows.",
    problem:
      "Manual logistics processes make it difficult to track information and coordinate operations.",
    solution:
      "A structured web application designed around courier management and operational workflows.",
    technologies: ["PHP", "Laravel", "SQL", "JavaScript", "APIs"],
    externalUrl: "",
    accent: "green",
    note: "Selected development project",
  },
  {
    number: "04",
    name: "Internet Banking",
    category: "FINANCE / WEB APPLICATION",
    description:
      "A web-based banking experience focused on structured financial workflows and secure information handling.",
    problem:
      "Financial services require clear interfaces and reliable connections between users and backend systems.",
    solution:
      "A web application architecture combining frontend interfaces, business logic and API communication.",
    technologies: ["PHP", "Laravel", "SQL", "JavaScript", "REST APIs"],
    externalUrl: "",
    accent: "purple",
    note: "Selected development project",
  },
  {
    number: "05",
    name: "Hazina Mazingira",
    category: "ORGANIZATION / MANAGEMENT",
    description:
      "A management platform supporting member records, savings, loans and reporting workflows.",
    problem:
      "Organizations need reliable ways to manage member information and financial activities.",
    solution:
      "A centralized management platform with administrative workflows, reporting and USSD integration.",
    technologies: ["Laravel", "PHP", "SQL", "USSD", "JavaScript"],
    externalUrl: "",
    accent: "gold",
    note: "Selected development project",
  },
  {
    number: "06",
    name: "Africanature",
    category: "ECOMMERCE / DIGITAL PLATFORM",
    description:
      "A modern digital platform combining content, ecommerce functionality and online payments.",
    problem:
      "Organizations need a stronger digital presence while making it easy for customers to browse and purchase.",
    solution:
      "A Laravel-based ecommerce experience with cart, quotation and payment workflows.",
    technologies: ["Laravel", "PHP", "JavaScript", "M-Pesa", "PayPal"],
    externalUrl: "",
    accent: "orange",
    note: "Selected development project",
  },
];

export const automations = [
  {
    title: "Customer Support Triage",
    tag: "AI / SUPPORT",
    detail:
      "Automatically analyze incoming customer tickets, categorize them, identify urgency and notify the team when immediate attention is required.",
    input: "Customer support ticket",
    flow: [
      "Read ticket",
      "Clean data",
      "AI classification",
      "Detect urgency",
      "Notify team",
    ],
  },
  {
    title: "Incident Response",
    tag: "AI / OPERATIONS",
    detail:
      "Turn raw system incidents into structured reports and post-mortems while escalating high-severity incidents automatically.",
    input: "Raw incident logs",
    flow: [
      "Receive incident",
      "Analyze logs",
      "AI assessment",
      "Generate report",
      "Escalate",
    ],
  },
  {
    title: "Market Intelligence",
    tag: "AI / RESEARCH",
    detail:
      "Process market information, identify important findings and deliver structured intelligence to the right people.",
    input: "Market information",
    flow: [
      "Collect data",
      "Analyze evidence",
      "AI summary",
      "Score urgency",
      "Send insight",
    ],
  },
  {
    title: "Expense Processing",
    tag: "AI / FINANCE",
    detail:
      "Automate expense claim processing by receiving submissions, extracting information and routing results to the appropriate team.",
    input: "Expense claim",
    flow: [
      "Receive claim",
      "Extract data",
      "Validate",
      "Process",
      "Notify",
    ],
  },
];

export const processSteps = [
  [
    "01",
    "Understand",
    "Start with the business problem, users and outcome before choosing the technology.",
  ],
  [
    "02",
    "Plan",
    "Break the requirement into clear features, workflows and technical components.",
  ],
  [
    "03",
    "Design",
    "Create an interface and system structure that makes the intended workflow easy to understand.",
  ],
  [
    "04",
    "Build",
    "Develop the core functionality using the right tools for the problem.",
  ],
  [
    "05",
    "Connect",
    "Integrate APIs, databases, external services and automation where they add real value.",
  ],
  [
    "06",
    "Test",
    "Test the workflow, identify failures and improve the experience before delivery.",
  ],
  [
    "07",
    "Improve",
    "Keep refining the system based on actual usage, feedback and changing business needs.",
  ],
] as const;

export const skillGroups = [
  {
    label: "Frontend",
    color: "blue",
    items: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Tailwind CSS", "jQuery"],
  },
  {
    label: "Backend",
    color: "red",
    items: ["PHP", "Laravel", "REST APIs"],
  },
  {
    label: "Database",
    color: "green",
    items: ["SQL", "MySQL", "SQL Server"],
  },
  {
    label: "Tools",
    color: "purple",
    items: ["Git", "GitHub", "Postman", "Linux"],
  },
  {
    label: "Automation",
    color: "orange",
    items: ["n8n", "Workflow Automation", "AI Agents"],
  },
  {
    label: "AI",
    color: "gold",
    items: ["OpenRouter", "Mistral", "LLM APIs", "Prompt Engineering"],
  },
];