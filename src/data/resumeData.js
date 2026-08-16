export const profile = {
  name: "Dilip Kumar",
  title: "Senior Backend Engineer",
  location: "Pune - 411014",
  phone: "9370675459",
  email: "smartworkdilip@gmail.com",
  github: "https://github.com/smartworkdilip",
  linkedin: "https://linkedin.com/in/smartworkdilip",
  summary:
    "Senior Backend Engineer with 6 years of experience designing scalable distributed systems using Java, Spring Boot, AWS, PostgreSQL and microservices architectures. Proven track record of improving latency, reliability, and throughput for high-scale platforms at GoDaddy, Atlassian, and Credit Suisse. Experienced in cloud-native systems, event-driven architectures, API optimization, and platform engineering serving millions of users.",
};

export const experience = [
  {
    role: "Senior Software Engineer",
    company: "GoDaddy",
    duration: "Oct'25 - Present",
    location: "Pune, India",
    points: [
      "Architected and executed the migration of a critical Transaction Assurance service, migrating from on-premises to AWS to support 30% higher transaction throughput using Java, Spring Boot, Kafka, AWS CDK and GitHub Actions.",
      "Designed and optimized high-concurrency backend services for transaction processing workflows, reducing API latency by 40% and improving system throughput under peak load.",
      "Improved payout processing efficiency and operational stability by reducing blocked payout incidents by 90% and ensuring timely progression of seller transactions to the “payout scheduled” state.",
      "Implemented IAM-based JWT authentication for the Transaction Assurance (TA) service using Java and AWS IAM roles, enabling secure service-to-service communication and restricting access exclusively to whitelisted backend services.",
      "Led the development of an Agentic AI security validation agent using TypeScript, AWS Bedrock and LangChain with parallel Step Function and RAG-based evaluation that reduced regression vulnerabilities by 40%.",
    ],
  },
  {
    role: "Software Engineer 2",
    company: "Atlassian",
    duration: "May'23 - Oct'25",
    location: "Pune, India",
    points: [
      "Optimized core Jira service REST APIs serving 1M+ users, reducing response times by 30% using Java, Protobuf and gRPC protocol.",
      "Implemented a robust permissions module integrated with Atlassian Identity, securing user-specific data access for 100k+ users.",
      "Automated Log4j report creation work by using a Python script which captures raw data from server and generates vulnerability report.",
      "Refactored legacy frontend logic to reactive React patterns using RxJS, improving code maintainability and performance by 20%.",
      "Conducted bi-weekly code reviews and mentored junior developers on clean code practices and system design.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Credit Suisse",
    duration: "Jul'20 - May'23",
    location: "Pune, India",
    points: [
      "Implemented a data pipeline which performs data validation task and store data into Hadoop.",
      "Designed and developed rates portal application using Java, Spring Boot, ElasticSearch which provides hedge fund data and qualitative information to end users.",
      "Developed a data storage tool to store user data into Impala using RESTful API and Python.",
    ],
  },
];

export const projects = [
  {
    title: "Transaction Assurance AWS Migration",
    context: "GoDaddy",
    description:
      "Architected and executed the migration of a critical Transaction Assurance service from on-premises to AWS, supporting 30% higher transaction throughput and improving payout processing stability.",
    tags: ["Java", "Spring Boot", "Kafka", "AWS CDK", "GitHub Actions"],
  },
  {
    title: "Agentic AI Security Validation Agent",
    context: "GoDaddy",
    description:
      "Led development of an Agentic AI security validation agent with parallel Step Function orchestration and RAG-based evaluation, reducing regression vulnerabilities by 40%.",
    tags: ["TypeScript", "AWS Bedrock", "LangChain", "RAG", "Step Functions"],
  },
  {
    title: "IAM-based JWT Authentication",
    context: "GoDaddy",
    description:
      "Implemented IAM-based JWT authentication for the Transaction Assurance service, enabling secure service-to-service communication restricted to whitelisted backend services.",
    tags: ["Java", "AWS IAM", "JWT", "Security"],
  },
  {
    title: "Jira REST API Optimization",
    context: "Atlassian",
    description:
      "Optimized core Jira service REST APIs serving 1M+ users, reducing response times by 30% using Protobuf and gRPC protocol.",
    tags: ["Java", "Protobuf", "gRPC", "REST APIs"],
  },
  {
    title: "Atlassian Identity Permissions Module",
    context: "Atlassian",
    description:
      "Built a robust permissions module integrated with Atlassian Identity, securing user-specific data access for 100k+ users.",
    tags: ["Java", "Spring Boot", "Atlassian Identity"],
  },
  {
    title: "Log4j Vulnerability Report Automation",
    context: "Atlassian",
    description:
      "Automated Log4j report creation with a Python script that captures raw server data and generates vulnerability reports.",
    tags: ["Python", "Automation", "Security"],
  },
  {
    title: "Rates Portal Application",
    context: "Credit Suisse",
    description:
      "Designed and developed a rates portal application providing hedge fund data and qualitative information to end users.",
    tags: ["Java", "Spring Boot", "ElasticSearch"],
  },
  {
    title: "Hadoop Data Validation Pipeline",
    context: "Credit Suisse",
    description:
      "Implemented a data pipeline that performs data validation tasks and stores data into Hadoop.",
    tags: ["Hadoop", "Data Pipeline", "Java"],
  },
  {
    title: "Impala Data Storage Tool",
    context: "Credit Suisse",
    description:
      "Developed a data storage tool to store user data into Impala using a RESTful API and Python.",
    tags: ["Python", "RESTful API", "Impala"],
  },
  {
    title: "Thirty Minutes Workout Application",
    context: "Personal Project",
    description:
      "Built an Android application that guides users through different exercises with structured workout routines.",
    tags: ["Kotlin", "SQLite", "Android"],
  },
  {
    title: "Sentiment Analysis of Tweets",
    context: "Personal Project",
    description:
      "Implemented a Python script to predict racist sentiment in tweets using the LightGBM algorithm. Received 50K+ views on the related Kaggle kernel.",
    tags: ["Python", "LightGBM", "Machine Learning"],
  },
];

export const skills = {
  "Programming Languages": ["Java", "Go", "Python", "TypeScript"],
  "Backend & API": [
    "Spring Boot",
    "Hibernate",
    "JPA",
    "REST APIs",
    "GraphQL",
    "gRPC",
    "JWT",
    "API Design",
    "AWS",
  ],
  Database: ["PostgreSQL", "DynamoDB", "MySQL"],
  "Cloud & DevOps": [
    "AWS CDK",
    "Docker",
    "Kubernetes",
    "GitHub Actions",
    "CI/CD Pipeline",
  ],
  "Distributed Systems": [
    "Redis",
    "Kafka",
    "ElasticSearch",
    "Flink",
    "Zookeeper",
    "Event-Driven Architecture",
    "Microservices",
    "Asynchronous Processing",
  ],
  "Artificial Intelligence": [
    "LangChain",
    "AWS Bedrock",
    "RAG",
    "Agentic AI",
    "Cursor",
    "GitHub Copilot",
    "Codex",
  ],
};

export const education = [
  {
    degree: "Bachelor of Engineering (Information Technology)",
    school: "Army Institute Of Technology, Pune",
  },
  {
    degree: "Higher Secondary School (PCM)",
    school: "DAV Public School, Bariatu",
  },
];

export const courses = [
  "AWS Certified Generative AI Developer - Professional",
  "Atlassian Jira Software using Scrum and Kanban Board",
  "Data Structure and Algorithm (NPTEL)",
];

export const achievements = [
  "3rd position on Alibaba Cloud Hackathon",
  "Received Rave Gold from director at Credit Suisse",
  "Winner of GoDaddy Internal Hackathon",
  "Best technical performer at AIT Pune",
  "50K+ views on spam/ham Kaggle kernel",
];

export const links = [
  { label: "LeetCode", url: "https://leetcode.com/smartworkdilip" },
];
