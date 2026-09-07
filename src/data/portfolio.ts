/**
 * Central configuration for the portfolio.
 * Replace every value marked PLACEHOLDER with real data.
 */

export const PLACEHOLDER_URL = "#" as const;

export const personal = {
  name: "MUCHHU SAI BHARATH",
  shortName: "SAI BHARATH",
  role: "Cybersecurity Student",
  location: "Rajkot, Gujarat, India",
  email: "muchhusaibharath@gmail.com",
  resumePath: "/resume.pdf",
  tagline: "Cybersecurity • Cloud Security • Network Security",
  summary:
    "Computer Science undergraduate specializing in Cybersecurity, with a focus on Cloud Security and Network Security. Hands-on exposure to penetration testing fundamentals through TryHackMe and Hack The Box labs. Strong foundation in networking, Linux, and scripting, with growing knowledge of cloud platform security, particularly AWS.",
  heroDescription:
    "Computer Science undergraduate specializing in Cybersecurity, focused on Cloud Security, Network Security, and practical security engineering.",
  goal: "Cybersecurity / Cloud Security Intern",
} as const;

export type SocialLink = {
  label: string;
  /** Set to a real profile URL. While null, the UI shows "Profile link coming soon". */
  url: string | null;
  /** PLACEHOLDER — replace with your real username. */
  username: string | null;
};

export const socials: Record<
  "linkedin" | "github" | "tryhackme" | "hackthebox" | "leetcode",
  SocialLink
> = {
  linkedin: { label: "LinkedIn", url: null, username: null },
  github: { label: "GitHub", url: null, username: null },
  tryhackme: { label: "TryHackMe", url: null, username: null },
  hackthebox: { label: "Hack The Box", url: null, username: null },
  leetcode: { label: "LeetCode", url: null, username: null },
};

export const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Labs", id: "labs" },
  { label: "Certifications", id: "certifications" },
  { label: "Education", id: "education" },
  { label: "Contact", id: "contact" },
] as const;

export const currentlyLearning = [
  "AWS Security",
  "Linux",
  "Python",
  "Networking",
  "Web Security",
  "SIEM Fundamentals",
] as const;

export const focusAreas = [
  {
    title: "Cloud Security",
    icon: "cloud",
    description:
      "Learning how identity, storage, and network controls protect cloud workloads, with a focus on AWS fundamentals such as IAM, S3, VPC, and security groups.",
  },
  {
    title: "Network Security",
    icon: "network",
    description:
      "Building a foundation in TCP/IP, DNS, firewalls, VPNs, segmentation, and traffic analysis through home-lab exercises and packet inspection.",
  },
  {
    title: "Penetration Testing",
    icon: "shield",
    description:
      "Practising reconnaissance, enumeration, and vulnerability assessment fundamentals in guided TryHackMe and Hack The Box lab environments.",
  },
] as const;

export const skillCategories = [
  { title: "Languages", icon: "code", skills: ["Java", "Python", "JavaScript", "SQL", "Bash"] },
  {
    title: "Networking & Security",
    icon: "network",
    skills: ["TCP/IP", "DNS", "Firewalls", "VPNs", "OWASP Top 10", "Vulnerability Assessment"],
  },
  {
    title: "Penetration Testing",
    icon: "bug",
    skills: ["Nmap", "Wireshark", "Burp Suite", "Metasploit", "Kali Linux"],
  },
  {
    title: "Cloud Security",
    icon: "cloud",
    skills: ["AWS", "EC2", "IAM", "S3", "VPC", "Security Groups", "Cloud Security Fundamentals"],
  },
  {
    title: "Operating Systems",
    icon: "terminal",
    skills: ["Linux", "Ubuntu", "Kali Linux", "Windows Server Basics"],
  },
  {
    title: "Security Concepts",
    icon: "radar",
    skills: ["SIEM Basics", "Incident Response", "Threat Detection"],
  },
  {
    title: "Developer Tools",
    icon: "wrench",
    skills: ["Git", "GitHub", "VS Code", "Postman"],
  },
] as const;

export const projectFilters = [
  "All",
  "Cloud Security",
  "Network Security",
  "Web Security",
  "Tools",
] as const;
export type ProjectCategory = (typeof projectFilters)[number];

export type Project = {
  title: string;
  category: Exclude<ProjectCategory, "All">;
  status: "In Progress" | "Planned / In Progress";
  description: string;
  tech: string[];
  /** PLACEHOLDER — add real URLs to enable these buttons. */
  links: { github: string | null; demo: string | null; caseStudy: string | null };
};

export const projects: Project[] = [
  {
    title: "Home Lab Network Security Setup",
    category: "Network Security",
    status: "In Progress",
    description:
      "A practical cybersecurity home lab focused on network segmentation, firewall configuration, traffic monitoring, and intrusion detection concepts.",
    tech: ["pfSense", "Snort / Suricata", "VirtualBox"],
    links: { github: null, demo: null, caseStudy: null },
  },
  {
    title: "AWS Cloud Security Audit Tool",
    category: "Cloud Security",
    status: "In Progress",
    description:
      "A security auditing project designed to identify common cloud configuration weaknesses such as exposed S3 resources, overly permissive security groups, and weak IAM configurations.",
    tech: ["Python", "Boto3", "AWS"],
    links: { github: null, demo: null, caseStudy: null },
  },
  {
    title: "Web Application Penetration Testing Report",
    category: "Web Security",
    status: "In Progress",
    description:
      "A structured web application security testing project covering reconnaissance, vulnerability identification, validation, and professional security reporting.",
    tech: ["Burp Suite", "OWASP ZAP", "DVWA", "OWASP Juice Shop"],
    links: { github: null, demo: null, caseStudy: null },
  },
  {
    title: "Vulnerability Scanner",
    category: "Tools",
    status: "Planned / In Progress",
    description:
      "A Python-based security utility concept for automating network scanning and organizing discovered services and potential vulnerabilities.",
    tech: ["Python", "Nmap"],
    links: { github: null, demo: null, caseStudy: null },
  },
];

export type PracticeProfile = {
  platform: string;
  key: keyof typeof socials;
  description: string;
  /** Add real values later, e.g. [{ label: "Rooms completed", value: "42" }]. */
  stats: { label: string; value: string }[];
};

export const practiceProfiles: PracticeProfile[] = [
  {
    platform: "TryHackMe",
    key: "tryhackme",
    description: "Guided rooms and learning paths covering security fundamentals and offensive basics.",
    stats: [],
  },
  {
    platform: "Hack The Box",
    key: "hackthebox",
    description: "Hands-on lab machines used to practise enumeration and exploitation fundamentals.",
    stats: [],
  },
  {
    platform: "LeetCode",
    key: "leetcode",
    description: "Data structures and algorithms practice to strengthen programming fundamentals.",
    stats: [],
  },
  {
    platform: "GitHub",
    key: "github",
    description: "Scripts, lab notes, and security tooling experiments as they take shape.",
    stats: [],
  },
];

export type Certification = {
  name: string;
  issuer: string;
  status: "Pursuing" | "Planned";
  /** Update once started/completed, e.g. "2026". */
  date: string | null;
};

export const certifications: Certification[] = [
  { name: "Google Cybersecurity Certificate", issuer: "Google", status: "Pursuing", date: null },
  { name: "Introduction to Cybersecurity", issuer: "Cisco Networking Academy", status: "Pursuing", date: null },
  { name: "CCNA: Introduction to Networks", issuer: "Cisco Networking Academy", status: "Planned", date: null },
  { name: "AWS Cloud Practitioner Essentials", issuer: "Amazon Web Services", status: "Planned", date: null },
  { name: "Pre Security Path", issuer: "TryHackMe", status: "Pursuing", date: null },
  { name: "Cybersecurity Fundamentals", issuer: "IBM", status: "Planned", date: null },
];

export const education = [
  {
    institution: "Marwadi University",
    qualification: "B.Tech - Computer Science and Engineering (Cyber Security)",
    duration: "2025 – 2029",
    score: "CGPA: 8.06",
    location: "Rajkot, Gujarat",
  },
  {
    institution: "Sri Junior College",
    qualification: "Intermediate (11th & 12th) - MPC",
    duration: "2023 – 2025",
    score: "Percentage: 86.3%",
    location: "Vijayawada, Andhra Pradesh",
  },
  {
    institution: "Ravindra Bharathi Green School",
    qualification: "Class X - State Board",
    duration: "2023",
    score: "Percentage: 71%",
    location: "Vijayawada, Andhra Pradesh",
  },
] as const;

export const learningJourney = [
  "Cybersecurity",
  "Cloud Security",
  "Networking",
  "Linux",
  "Python",
  "Web Security",
] as const;
