import emoji from "react-easy-emoji";

import tprofile from "./assets/img/icons/common/splash1.jpg";
import github from "./assets/img/icons/common/crio.jpg";
import airbnb from "./assets/img/icons/common/ideal.jpg";

export const greetings = {
  name: "Gaurav Jaiswal",
  title: "Hi all, I'm Gaurav",
  description:
    "A passionate Full Stack Web Developer and Mobile App Developer having inquisitiveness of building Web applications with JavaScript / Reactjs / Nodejs  and some other cool libraries and frameworks and Cross Platform Mobile Apps.",
  resumeLink:
    "https://drive.google.com/file/d/1L55e5kvQEHpbWmXFWjWWV2IIzhxH4eoQ/view?usp=sharing",
};

export const openSource = {
  githubUserName: "Gauravl404",
};

export const contact = {};

export const socialLinks = {
  facebook: "https://www.facebook.com/gaurav.jaiswal.562329/",
  instagram: "https://www.instagram.com/gaurav_kj",
  twitter: "https://twitter.com/Gaurav55558",
  github: "https://github.com/Gauravl404",
  linkedin: "https://www.linkedin.com/in/kumar-gj",
};

export const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ Azure / Digital Ocean"
    ),
  ],

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "vscode-icons:file-type-html",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "vscode-icons:file-type-css",
    },

    {
      skillName: "JavaScript",
      fontAwesomeClassname: "logos:javascript",
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "logos:typescript-icon",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "vscode-icons:file-type-reactjs",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "logos:nodejs-icon",
    },

    {
      skillName: "npm",
      fontAwesomeClassname: "vscode-icons:file-type-npm",
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "vscode-icons:file-type-sql",
    },
    {
      skillName: "mongoDB",
      fontAwesomeClassname: "vscode-icons:file-type-mongo",
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "logos:aws",
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "logos:firebase",
    },

    {
      skillName: "git",
      fontAwesomeClassname: "logos:git-icon",
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "logos:docker-icon",
    },
  ],
};

export const SkillBars = [
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "70", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "80",
  },
  {
    Stack: "Programming",
    progressPercentage: "60",
  },
];

export const educationInfo = [
  {
    schoolName: "BM Institute Of Engineering and technology",
    subHeader: "Bachelor of Technology in CSE",
    duration: "August 2017 - July 2021",
  },
  {
    schoolName: "Kendriya Vidyalaya Meghahatuburu",
    subHeader: "Higher secondary in Science",
    duration: "September 2014 - April 2016",
  },
  {
    schoolName: "Project central school",
    subHeader: "secondary education",
    duration: "march 2004 march 2014",
  },
];

export const experience = [
  {
    role: "SDE - Intern",
    company: "Vamdev Technology",
    companylogo: tprofile,
    date: "march 2020 – nov 2020",
    descBullets: [
      "Worked on TProfile based on .NET C# in conjuction with external electrical device DATALOGGER",
      "Added features for reducing error rate in the data for accurate visualisation and operations",
      "Added Features for new Device using SDK",
      "Collaborated with other developers to identify and alleviate number of bugs and errors in software.",
    ],
  },
  {
    role: "Backend Trainee",
    company: "Crio.do",
    companylogo: github,
    date: "January 2020 – April 2020",
    descBullets: [
      "Created scripts to run system checks, install and configure file-sharing service. Also, developed tools to analyze performance and functionality issues in software.",
      "Added support for multiple stock quote services in the visual stock portfolio analyzer. ",
      "Added editor features to QCharm IDE - IO, navigation, search/replace, cut/copy/paste, and redo/undo.",
    ],
  },
  {
    role: "Web Developer Intern",
    company: "Ideal Village",
    companylogo: airbnb,
    date: "April 2019 – May 2019",
    descBullets: [
      " Conceived and built optimized landing pages in HTML and CSS, including JavaScript integration and cross-browser compatibility,.",
      "Pulled from PHP, SQL, JavaScript and other back-end library knowledge to bolster programming resources.",
    ],
  },
];

export const projects = [
  {
    name: "Crio.do",
    descBullets: ["QMoney", "Qbox", "QCharm"],
    link: {
      name: "Crio.DO -> portfolio",
      url: "https://criodo.github.io/Crio-Launch-Feb-2020-gaurav55558/",
    },
  },

  {
    name: "DevHub",
    descBullets: [
      "A social platform for developers from the world getting task from companies directly to them There could be individuals as well as teams of developers biding for a project.",
      "Technologies used React.js and material ui for client side application and Node.js along with Express.js for server side application and Postgres for database",
    ],
    link: {
      name: "Gauravl404->Devhub",
      url: "https://github.com/Gauravl404/DevHub",
    },
  },

  {
    name: "TProfile",
    desc: "Software to control electronic datalogger devices ",
  },
];
