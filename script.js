// ----- Card Creators -----

function createExperienceCard({ company, role, date, location, description }) {
  return `
    <div class="experience-card">
      <h3>${company}</h3>
      <p class="experience-role">${role}</p>
      <p class="experience-date">${date}</p>
      <p class="experience-location">${location}</p>
      <p class="experience-description">${description}</p>
    </div>
  `;
}

function createProjectCard({ name, image, link, description, technologies }) {
  return `
    <div class="card">
      <h3>${name}</h3>
      <img src="${image}" alt="${name} screenshot" />
      <p class="description">${description}</p>
      <p class="technologies">${technologies}</p>
      ${
        link
          ? `<a class="project-link" href="${link}" target="_blank" rel="noopener noreferrer">View Project</a>`
          : ""
      }
    </div>
  `;
}

// ----- Data -----

const experiences = [
  {
    company: "Workday",
    role: "Program Manager Intern",
    date: "May 2024 – August 2024",
    location: "Atlanta, GA",
    description:
      "As a Program Manager Intern, collaborated with public cloud infrastructure teams. Built technical dashboards, implemented Agile best practices, and supported cross-functional initiatives.",
  },
  {
    company: "University of Alabama at Birmingham",
    role: "Data Analyst Intern",
    date: "January 2024 – April 2024",
    location: "Birmingham, AL",
    description:
      "I partnered with a local company to create a data visualization of utility services across Alabama. Collected and cleaned data with Excel. Then used to create a visualization with PowerBI.",
  },
  {
    company: "Expedia Group",
    role: "Technical Program Manager Intern",
    date: "May 2023 – July 2023",
    location: "Seattle, WA",
    description:
      "Worked as a Technical Program Manager Intern. Apart of strategic programs, streamlined engineering team workflows, and built dashboards using Jira and Confluence.",
  },
  {
    company: "Amazon Lab126",
    role: "Software Quality Assurance Engineer Intern",
    date: "May 2022 – August 2022",
    location: "Sunnyvale, CA",
    description:
      "Worked as a Software QA Engineer Intern on Amazon Astro. Developed Python-based test automation frameworks and ensured product reliability through integration tests.",
  },
  {
    company: "HiveRnD",
    role: "Software Engineer Intern",
    date: "May 2021 – July 2021",
    location: "Remote",
    description:
      "Working here I focused on developing the frontend of the website. Utilized a lot of JavaScript and React here in order to build out a responsive, dynamic website. Mostly built out webpages, such as the information page, login page, and a few others, as well as fixing the occasional UI bug",
  },
];

const projects = [
  {
    name: "Portfolio Website",
    image: "assets/brands/github.svg",
    link: "https://github.com/EIIis/portfolio",
    description:
      "Developed and deployed a personal portfolio website utilizing vanilla JavaScript, HTML, and CSS to showcase technical exerpiences and projects. Hosted via GitHub Pages with automated deployement, while using Git for version control",
    technologies: "HTML, CSS, JavaScript, GitHub Pages",
  },
  {
    name: "LingoMate",
    image: "assets/brands/github.svg",
    link: "https://github.com/EIIis/LingoMate",
    description:
      "A real-time web-based multiplayer game app using WebSockets for instant between users. Utilizing Firebase for user authentication and data storage, the app allows users to create and join games, enhancing social interaction through a shared gaming experience.",
    technologies: "React.js, Express, Socket.IO, Firebase",
  },
  {
    name: "Blog Website",
    image: "assets/brands/github.svg",
    link: "https://blog-liart-psi-39.vercel.app/",
    description:
      "Developed a fast, SEO-friendly blog using modern web tools such as Next.js and React. Deployed via Vercel with CI from GitHub.",
    technologies: "JavaScript, CSS, Next.js, Node.js, React, Vercel",
  },
  {
    name: "ootd",
    image: "assets/brands/github.svg",
    link: "https://github.com/EIIis/ootd",
    description:
      "Fullstack web-app landing page, utlizing React with MaterialUI library for styling. Custom built email form with Express backend and MongoDB to handle and store user submissions.",
    technologies: "React.js, MaterialUI, Express, MongoDB, Postman",
  },
  {
    name: "RuneLite Plugin Development",
    image: "assets/brands/github.svg",
    link: "https://github.com/EIIis/afk",
    description:
      "Programmed custom RuneLite plugins in Java to increase player QOL in Old School RuneScape. This involved interfacing with the RuneLite API, event-driven programming, and applying reverse engineering techniques to optimize performance and usability.",
    technologies: "Java, RuneLite API",
  },
  {
    name: "AutoHotKey Script Development",
    image: "assets/brands/github.svg",
    link: "https://eiiis.github.io/ahk/",
    description:
      "Developed AHK scripts to automate tasks in Old School RuneScape, demonstrating proficiency in scripting and process automation. Built and deployed a personal website using React, hosted via GitHub Pages, to showcase projects and technical skills.",
    technologies: "AutoHotKey, React, GitHub Pages",
  },
];

// ----- Render Functions -----

function renderExperiences() {
  const container = document.getElementById("experience-cards");
  container.innerHTML = experiences.map(createExperienceCard).join("");
}

function renderProjects() {
  const container = document.getElementById("project-cards");
  container.innerHTML = projects.map(createProjectCard).join("");
}

// ----- DOMContentLoaded -----

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  renderExperiences();

  // ----- Hamburger Menu Logic -----

  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const navOverlay = document.querySelector(".nav-overlay");

  function toggleMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    navOverlay.classList.toggle("active");

    // Lock scroll when menu is open
    document.body.style.overflow = navMenu.classList.contains("active")
      ? "hidden"
      : "";
  }

  function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    navOverlay.classList.remove("active");
    document.body.style.overflow = "";
  }

  hamburger.addEventListener("click", toggleMenu);
  navOverlay.addEventListener("click", closeMenu);

  const navLinks = document.querySelectorAll(".nav-menu a");
  navLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 480) {
      closeMenu();
    }
  });
});
