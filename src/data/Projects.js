export default [
  {
    id: 1,
    title: "Playbt Platform",
    company: "Playbt",
    date: "Aug 2025 - Mar 2026",
    role: "Full Stack Developer",
    description: `Led the delivery of a real-time full-stack web platform and mobile application.
- Built on a monorepo architecture with Phoenix and PostgreSQL.
- Focused on scalable backend design, real-time features, and team code quality.
- Worked across architecture, testing, and code review workflows.`,
    challenges:
      "Maintaining reliability and quality across multiple modules while supporting real-time platform behaviour and concurrent usage.",
    solutions:
      "Applied TDD with ExUnit and Mox, introduced clear testing standards for unit, integration, and end-to-end coverage, and enforced consistency through structured pull request reviews.",
    image: require("@/assets/playbt_logo.png"),
    project_image: require("@/assets/playbt.png"),
    stack: ["Phoenix", "Elixir", "PostgreSQL", "ExUnit", "Mox"],
  },
  {
    id: 2,
    title: "Conchie Assessment Platform",
    company: "Conchie Assessment Platform",
    date: "Apr 2025 - Nov 2025",
    role: "Full Stack Developer",
    description: `Contributed to a professional assessment platform built on a microservices architecture.
- Developed features across frontend and backend services.
- Supported backend quality through unit and integration testing.
- Improved developer workflow through CI optimization on GitHub Actions.`,
    challenges:
      "Keeping backend services stable under concurrent load while maintaining efficient CI feedback cycles for multiple branches.",
    solutions:
      "Designed service-level ExUnit test coverage and optimized GitHub Actions by parallelizing jobs and filtering irrelevant paths from workflow triggers.",
    image: require("@/assets/conchie_logo.png"),
    project_image: require("@/assets/conchie_assessment.png"),
    stack: ["Nest.js", "Elixir", "Phoenix", "GitHub Actions", "Microservices"],
  },
  {
    id: 3,
    title: "Evaluation Association Platform",
    company: "Evaluation Association of Bhutan",
    date: "Nov 2024 - Apr 2025",
    role: "Full Stack Developer",
    description: `Delivered a full-stack association management platform for evaluation workflows.
- Gathered requirements and modeled organizational processes.
- Designed a normalized PostgreSQL database schema.
- Built responsive member features, reporting, and dashboards with Vue.js and Django REST Framework.`,
    challenges:
      "Translating evaluation processes into a maintainable relational data model while supporting accurate reporting and historical tracking.",
    solutions:
      "Structured the database around normalized workflow entities, implemented responsive dashboard features, and deployed the production system to Hostinger with stable hosting configuration.",
    image: require("@/assets/eab_log.png"),
    project_image: require("@/assets/eab.png"),
    stack: ["Vue", "Django REST Framework", "PostgreSQL", "Hostinger"],
  },
  {
    id: 4,
    title: "BQPCA Qualification Platform",
    company: "Bhutan Qualification and Professional Certification Authority",
    date: "Nov 2024 - Feb 2025",
    role: "Full Stack Developer",
    description: `Worked on a government qualification and certification management platform.
- Owned the ECPF and Accreditation modules from design to delivery.
- Built frontend interfaces and backend API integrations.
- Added dashboards for institutional performance and accreditation insights.`,
    challenges:
      "Delivering two critical modules independently while aligning with requirements from multiple government stakeholders.",
    solutions:
      "Defined module-specific data models and API endpoints, built responsive Vue components, and validated the system with unit testing, integration testing, and end-to-end debugging.",
    image: require("@/assets/bqpca_logo.png"),
    project_image: require("@/assets/bqpca.png"),
    stack: ["Vue", "Django REST Framework", "Dashboards", "Testing"],
  },
  {
    id: 5,
    title: "PrEP Platform",
    company: "Druk Prep",
    date: "Sept 2024 - Nov 2024",
    role: "Programmer",
    description: `Built a form-driven student preparation platform with dashboard reporting.
- Used Vue.js for the frontend and Google Sheets as a lightweight backend.
- Designed data flows, API contracts, and Apps Script automations.
- Delivered analytics dashboards and handled Firebase deployment.`,
    challenges:
      "Keeping consolidated records accurate while updating results and syncing data for reporting without a traditional database backend.",
    solutions:
      "Separated update tables by workflow, tracked records through unique IDs, and automated consolidation logic with Google Apps Script to keep dashboards consistent.",
    image: require("@/assets/preplogo.png"),
    project_image: require("@/assets/Prep.png"),
    stack: ["Vue", "Google Sheets", "Google Apps Script", "Firebase"],
  },
  {
    id: 6,
    title: "DrukCLM",
    company: "Save The Children",
    date: "June 2024 - Aug 2024",
    role: "Frontend Developer",
    description: `Developed interactive programme dashboards and structured data tables.
- Implemented data passing and multi-dimensional filtering.
- Built KPI cards and charts for programme analysis.
- Supported technical handover with clear documentation.`,
    challenges:
      "Passing filtered data reliably across multiple dashboard components and keeping visualizations in sync with selected dimensions.",
    solutions:
      "Used reactive state flow, shared store patterns, and component-level props handling to keep all widgets aligned with the same filtered dataset.",
    image: require("@/assets/savethechildern.png"),
    project_image: require("@/assets/savethechildern.png"),
    stack: ["Vue", "JavaScript", "Tailwind", "Dashboards"],
  },
  {
    id: 7,
    title: "The Pema Secretariat Dashboard",
    company: "The Pema Secretariat",
    date: "Aug 2023 - Oct 2024",
    role: "Frontend Developer",
    description: `Built role-specific dashboards for programme officers and analysts.
- Gathered and translated data requirements into usable interfaces.
- Visualized end-to-end data flows across multiple services.
- Supported quality through unit, integration, and end-to-end testing.`,
    challenges:
      "Making complex programme indicators understandable for decision-makers while preserving data consistency across a microservices environment.",
    solutions:
      "Designed clear dashboard structures, verified service data flow between components, and added Jest-based test coverage to improve reliability.",
    image: require("@/assets/ThePema.jpg"),
    project_image: require("@/assets/ThePema.jpg"),
    stack: ["Vue", "JavaScript", "Jest", "Microservices"],
  },
  {
    id: 8,
    title: "Odoo ERP for Tshongkhang Kuenjom",
    company: "Tshongkhang Kuenjom",
    date: "Dec 2022 - July 2023",
    role: "Programmer",
    description: `Implemented and customized Odoo ERP for business operations.
- Covered inventory, sales, procurement, and accounting workflows.
- Managed documentation, workshops, user manuals, and UAT.
- Configured Chart of Accounts and financial mappings.`,
    challenges:
      "Mapping the client's business and financial processes into a working ERP configuration without breaking operational flow.",
    solutions:
      "Worked through process mapping with stakeholders, configured Odoo modules to match daily operations, and aligned accounting structures with Bhutan reporting requirements.",
    image: require("@/assets/Kuenjom.jpg"),
    project_image: require("@/assets/Kuenjom2.jpeg"),
    stack: ["Python", "Odoo ERP", "Accounting", "UAT"],
  },
  {
    id: 9,
    title: "Smart Parking App",
    company: "Desuung Skilling Programme",
    date: "June 2022 - Feb 2023",
    role: "Developer",
    description: `Contributed to a smart parking management application.
- Led sprint planning and project tracking with Jira.
- Supported UI/UX implementation from wireframes and user journeys.
- Worked on ANPR model training and QR-based payment and identity flows.`,
    challenges:
      "Number plate recognition accuracy was limited by data quality and resource constraints, affecting the viability of the ANPR pipeline.",
    solutions:
      "Validated the ML approach, then implemented QR-based workflows for payment and identity verification to provide a practical production path.",
    image: require("@/assets/DSP.jpeg"),
    project_image: require("@/assets/smart_parking.png"),
    stack: ["React", "JavaScript", "Jira", "Machine Learning", "QR"],
  },
  {
    id: 10,
    title: "Data Analytics Projects",
    company: "Desuung Skilling Programme",
    date: "Sept 2021 - Mar 2022",
    role: "Data Analytics Project Lead / Contributor",
    description: `Completed multiple applied analytics and machine learning projects.
- Used car price prediction with supervised learning.
- Stock market time-series analysis and forecasting.
- Thimphu rental price regression modelling.
- Dzi Selra job market web scraping and an NLP chatbot prototype.`,
    challenges:
      "Each project required different data cleaning, feature engineering, and modelling approaches while working with limited local datasets.",
    solutions:
      "Built project-specific preprocessing pipelines, validated models iteratively, and combined Python-based analysis with visualization and automation workflows to produce useful outputs.",
    image: require("@/assets/Desung.jpeg"),
    project_image: require("@/assets/Desung.jpeg"),
    stack: ["Python", "Pandas", "Machine Learning", "Web Scraping", "NLP"],
  },
];
