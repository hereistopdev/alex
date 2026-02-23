import aauMin from "@/assets/icons/aau.min.webp";
import universityTexas from "@/assets/icons/UT.png";
import booktix from "@/assets/icons/booktix.jpg";
import mave from "@/assets/icons/Mave1.jpg";
import accenture from "@/assets/icons/Acenture.webp"

const details = {
  name: {
    first: "Alexandr",
    last: "Malasinschii",
    nickname: "Alex",
  },
  title: "Software Engineer",
  biography: "Senior Software Engineer with **13+ years** of experience designing and delivering scalable web and cloud-native applications. Strong expertise in **React, Vue.js, TypeScript, Node.js, and Python**, with hands-on experience building distributed systems on **AWS**. Proven ability to **own architecture decisions**, deliver **production-ready systems**, and work directly with **stakeholders**. **Passionate** about mentoring and fostering inclusive engineering cultures. **Seeking** to leverage my **full-stack expertise and leadership skills** to drive impactful projects in a collaborative environment.",
  education: [
    {
      school: "University of Ludwig-Maximilians in Munich",
      url: "https://www.lmu.de/en/",
      icon: universityTexas,
      iconMin: aauMin,
      location: "Munich, Germany",
      degree: "Bachelor's in Computer Science",
      major: "Recommendation Systems and Information retrieval",
      start: "August 2013",
      end: "May 2017",
    },
  ],
  experience: [
    {
      company: "Devon Energy",
      url: "https://www.devonenergy.com/",
      icon: booktix,
      iconMin: booktix,
      location: "Remote",
      contract: "Full-time",
      position: "Senior Front-End Developer",
      start: "Jun 2024",
      end: "Present",
      description: [
        "Architected and maintained large-scale Angular.js (1.x) applications with modular component structure and strict separation of concerns.",
        "Designed reusable, versioned UI component libraries to standardize design patterns across multiple internal applications.",
        "Implemented advanced geospatial mapping and 3D visualization solutions (WebGL-based libraries) to support well trajectory and drilling data rendering.",
        "Integrated RESTful APIs and real-time data streams for live drilling metrics, ensuring low-latency UI updates.",
        "Improved performance through digest cycle optimization, lazy loading, memoization strategies, and bundle size reduction.",
        "Collaborated with backend (Node.js / .NET) teams to define API contracts and optimize payload structures for high-volume engineering datasets.",
        "Applied enterprise-grade error handling, logging, and environment configuration strategies across staging and production systems."
      ],
      skills: [],
    },
    {
      company: "Corva",
      url: "https://www.corva.ai/",
      icon: mave,
      iconMin: mave,
      location: "Remote",
      contract: "Contract",
      position: "Senior Front-End Developer",
      start: "Jan 2021",
      end: "Jun 2024",
      description: [
        "Developed enterprise-grade React.js + TypeScript applications for Corva’s Oil & Gas App Store platform serving real-time drilling analytics.",
        "Designed and maintained a scalable shared UI component library with strict typing, reusable hooks, and design system alignment.",
        "Implemented high-frequency real-time data visualization using WebSockets and optimized rendering strategies for large datasets.",
        "Built advanced analytics dashboards with complex state management (Redux / Context API) and normalized data flows.",
        "Integrated charting and data visualization libraries for operational KPIs, telemetry streams, and drilling performance metrics.",
        "Improved rendering performance through memoization, virtualization (for large tables), and controlled re-render strategies.",
        "Worked closely with data engineering teams to structure APIs for efficient aggregation and frontend-friendly transformations.",
        "Contributed to CI/CD workflows, code reviews, and frontend architectural decisions across multiple production applications."
      ],
      skills: [],
    },
    {
      company: "CuratedForYou",
      url: "https://www.curatedforyou.io/",
      icon: accenture,
      iconMin: accenture,
      location: "Remote",
      contract: "Full-time",
      position: "Middle Full-Stack Developer",
      start: "Feb 2020",
      end: "Dec 2020",
      description: [
        "Led frontend architecture development using React.js, designing scalable SPA structure and reusable component abstractions.",
        "Implemented modern state management patterns and performance optimizations (code-splitting, lazy loading, memoization).",
        "Developed AI-powered features integrating backend ML services via REST APIs, enabling personalized user workflows.",
        "Built and maintained backend services (Node.js) supporting AI-driven recommendation logic and user data processing.",
        "Designed secure authentication and role-based access flows.",
        "Implemented responsive UI systems with maintainable CSS architecture.",
        "Ensured production stability through structured error handling, logging, and deployment workflows.",
      ],
      skills: [],
    },
    {
      company: "Self-Employed",
      url: "#",
      icon: accenture,
      iconMin: accenture,
      location: "Remote",
      contract: "Full-time",
      position: "Senior Frontend Developer / Senior Web & Mobile Developer ",
      start: "Feb 2019",
      end: "Feb 2020",
      description: [
        "Delivered dozens of web applications for customers across Europe as senior frontend and full-stack consultant.",
        "Designed and implemented scalable SPA and SSR applications using React and Vue.js.",
        "Built backend APIs with Node.js (Express) and Python (Django/Flask).",
        "Designed event-driven serverless systems using AWS Lambda, Kinesis, API Gateway, and DynamoDB.",
        "Architected cloud-native deployments using Docker and containerized environments.",
        "Integrated relational and NoSQL databases including PostgreSQL, MySQL, and Redis.",
        "Collaborated directly with stakeholders on technical design and feature planning."
      ],
      skills: [],
    },
    {
      company: "FotoProfici.cz",
      url: "https://www.fotoprofici.cz/",
      icon: accenture,
      iconMin: accenture,
      location: "Remote",
      contract: "Full-time",
      position: "Frontend Developer",
      start: "Feb 2017",
      end: "Jan 2019",
      description: [
        "Led frontend architecture using Vue.js and Vuex.",
        "Integrated GraphQL APIs with Django backend and managed AWS S3 storage integrations.",
        "Worked in Docker-based environments.",
        "Supported mobile development integration using Flutter.",
      ],
      skills: [],
    },
    {
      company: "ZOOM International",
      url: "#",
      icon: accenture,
      iconMin: accenture,
      location: "Remote",
      contract: "Contract",
      position: "Full-Stack Web Developer",
      start: "Feb 2015",
      end: "Sep 2017",
      description: [
        "Developed frontend interfaces using Vue.js and React.",
        "Built REST APIs using Node.js and Flask.",
        "Worked with PostgreSQL and Elasticsearch.",
        "Participated in cloud-based deployments.",
      ],
      skills: [],
    },
    {
      company: "AllPrint Ltd.",
      url: "#",
      icon: accenture,
      iconMin: accenture,
      location: "Remote",
      contract: "Full-time",
      position: "Full-Stack Web Developer",
      start: "Aug 2014",
      end: "Aug 2015",
      description: [
        "Developed and maintained secure e-commerce platforms.",
        "Maintained Linux (Debian) servers.",
        "Provided IT consulting and system optimization.",
      ],
      skills: [],
    },    
    {
      company: "Cartel Studio Ltd.",
      url: "#",
      icon: accenture,
      iconMin: accenture,
      location: "Remote",
      contract: "Full-time",
      position: "Full-Stack Web Developer",
      start: "Oct 2013",
      end: "Apr 2014",
      description: [
        "Developed custom web applications.",
        "Handled testing, maintenance, and CMS integrations.",
      ],
      skills: [],
    },
  ],
  languages: [
    {
      name: "React| React Native| Vue.js| Vuex| Next.js| TypeScript| JavaScript (ES6+)| HTML5| CSS3| SCSS| Tailwind CSS | Material-UI | Ant Design",
      level: "Frontend",
    },
    {
      name: "Node.js (Express) | Python (Django/Flask) | GraphQL (Apollo Server) | Serverless Framework | AWS Lambda | API Gateway | Kinesis | DynamoDB",
      level: "Backend & Architecture",
    },
    {
      name: "AWS (Lambda/Kinesis/DynamoDB/API Gateway/S3/CloudFormation) | Docker | Docker Compose | Kubernetes | Terraform | Serverless Framework",
      level: "Cloud & DevOps"
    },
    {
      name: "PostgreSQL | MySQL | Redis | Elasticsearch | DynamoDB",
      level: "Data & Patterns"
    },
    {
      name: " REST APIs | Microservices | Event-Driven Systems | Cloud-Native Applications",
      level: "Architecture"
    },
  ],
  contact: {
    location: "Berlin, Germany",
    email: "dustlee.dev@gmail.com",
    phone: "+1 (430) 901-5970",
    website: "https://dustinlee.online/",
    linkedin: "https://www.linkedin.com/in/dustin-daniel-lee-1b20803b0/",
    github: "https://www.github.com/hereistopdev",
    researchgate: "dustinlee",
    gitlab: "https://www.gitlab.com/hereistopdev",
    deviantart: "https://dustinlee.online/",
  },
};

export default details;
