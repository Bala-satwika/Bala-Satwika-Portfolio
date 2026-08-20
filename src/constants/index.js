import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,powerapp,powerautomate,spring,sql,
  docker,azure,restapi,
  meta,
  starbucks,
  tesla,tvsmotor,tvsnhorse,horse,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id:"projects",
    title:"Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend React Developer",
    icon: web,
  },
  {
    title: "Power Platform Developer",
    icon: mobile,
  },
  {
    title: "Backend API Developer",
    icon: backend,
  },
  {
    title: "Process Automation Builder",
    icon: creator,
  },
];

const technologies = [
  {
    name: "azure",
    icon: azure,
  },
  {
    name: "restapi",
    icon: restapi,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "sql",
    icon: sql,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "spring",
    icon: spring,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "powerapp",
    icon: powerapp,
  },
  
  {
    name: "powerautomate",
    icon: powerautomate,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  
  {
    title: "Project Trainee",
    company_name: "TVS Motor Company",
    icon: horse,
    iconBg: "#E6DEDD",
    date: "June 2023 - Aug 2023",
     points: [
   
    "Contributed to the initial modernization of the TVS Motor Dealer Management System by developing Angular interfaces for legacy ASP.NET modules.",
    "Implemented frontend validation and supported backend API and SQL enhancements for migrated functionality.",
    "Worked with Git/GitHub, testing teams, and pull-request workflows throughout development and deployment."
  
    ],
  },
  {
    title: "SDE Intern",
    company_name: "TVS Motor Company",
    icon: horse,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - June 2024",
    points: [
    "Contributed to modernizing the TVS Motor Dealer Management System by migrating four legacy ASP.NET modules to Angular.",
    "Developed and enhanced backend APIs and SQL procedures while implementing frontend validation and integrating existing application services.",
    "Built a Dealer Onboarding platform from scratch using Power Apps, Power Automate, SQL Server, and SharePoint, automating a three-stage approval workflow.",
    "Enabled centralized tracking and automated notifications for 50+ users and 500+ dealer onboarding requests, replacing fragmented email-based coordination."
  ],
  },
  {
    title: "Digital Engineer",
    company_name: "TVS Motor Company",
    icon: horse,
    iconBg: "#E6DEDD",
    date: "July 2024 - Present",
    points: [
       "Built a full-stack voice-recording platform using React, Spring Boot, Azure, and Databricks for 50+ CRM users, 20+ projects, and 5,000+ recordings.",
  "Developed 10+ Spring Boot REST APIs integrating Databricks and Azure Blob Storage.",
  "Implemented MSAL SSO, RBAC, and 5-minute SAS URLs for secure recording access.",
  "Built a 20+ screen Land Acquisition platform used by 50+ users across 7 teams and 5 cities, managing 4,000+ leads.",
  "Automated approvals, reminders, document management, and dashboards using Power Apps, Power Automate, and SharePoint.",
  "Optimized a 49K+ record VOWD process, reducing report generation from 2+ hours to ~3 minutes.",
  "Delivered a quarterly performance-review platform in ~2 weeks for ~300 employees and managers."
],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "TuneMyHire AI",
    description:
      "An AI-powered resume analyzer that compares a candidate's resume against a job description and turns the result into an easy-to-understand match score, feedback and actionable suggestions.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Spring Boot",
        color: "green-text-gradient",
      },
      {
        name: "OpenAI API",
        color: "pink-text-gradient",
      },
    ],
   
    image: carrent,
    source_code_link: "https://resumechecker-1-075k.onrender.com/",
  },
  {
    name: "Spend Watch",
    description:
"Built a full-stack subscription and auto-pay tracker that identifies recurring expenses, tracks upcoming payments and visualizes monthly/yearly subscription spending, helping users monitor and manage forgotten recurring payments.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Smart Basket",
    description:
    "Where should I buy my groceries today? SmartBasket compares product prices across retailers, finds the best-value basket, and shows users how much they can save.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "OpenAI API",
        color: "green-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
