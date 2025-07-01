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
    location: "Birmingham, AL",
    description:
      "Working here I focused on developing the frontend of the website. Utilized a lot of JavaScript and React here in order to build out a responsive, dynamic website. Mostly built out webpages, such as the information page, login page, and a few others, as well as fixing the occasional UI bug",
  },
];

function createExperienceCard(experience) {
  return `
    <div class="experience-card">
      <h3>${experience.company}</h3>
      <p class="experience-role">${experience.role}</p>
      <p class="experience-date">${experience.date}</p>
      <p class="experience-location">${experience.location}</p>
      <p class="experience-description">${experience.description}</p>
    </div>
  `;
}

function renderExperiences() {
  const container = document.getElementById("experience-cards");
  container.innerHTML = experiences.map(createExperienceCard).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  renderExperiences();
});

const projects = [
  {
    name: "Portfolio Website",
    image: "https://via.placeholder.com/300x200",
    link: "https://github.com/EIIis/portfolio",
    date: "June 2025",
    description:
      "A personal portfolio site built using HTML, CSS, and JavaScript to showcase my work and experience.",
    technologies: "HTML, CSS, JavaScript",
  },
  {
    name: "LingoMate",
    image: "https://via.placeholder.com/300x200",
    link: "https://github.com/EIIis/LingoMate",
    date: "June 2025",
    description:
      "A real-time web-game application using WebSockets for instant between users.",
    technologies: "Node.js, Express, Socket.IO, React",
  },
  {
    name: "Weather Dashboard",
    image: "https://via.placeholder.com/300x200",
    link: "https://github.com/EIIis/",
    date: "June 2025",
    description:
      "A web application that fetches weather data from an API and displays current conditions and forecasts.",
    technologies: "JavaScript, HTML, CSS, OpenWeatherMap API",
  },
  {
    name: "Blog Platform",
    image: "https://via.placeholder.com/300x200",
    link: "https://github.com/EIIis/",
    date: "June 2024",
    description:
      "Simple blogging platform built with Node.js and Express. Implemented user authentication and CRUD operations for posts.",
    technologies: "Node.js, Express, MongoDB",
  },
  {
    name: "RuneLite Plugin Development",
    image: "https://via.placeholder.com/300x200",
    link: "https://github.com/EIIis/afk",
    date: "August 2024",
    description:
      "Programmed custom RuneLite plugins in Java to automate in-game tasks in Old School RuneScape. This involved interfacing with the RuneLite API, event-driven programming, and applying reverse engineering techniques to optimize performance and usability.",
    technologies: "Java, RuneLite API",
  },
  {
    name: "AutoHotKey Script Development",
    image: "https://via.placeholder.com/300x200",
    link: "https://eiiis.github.io/ahk/",
    date: "Feb 2024",
    description:
      "Developed AHK scripts to automate tasks in Old School RuneScape, demonstrating proficiency in scripting and process automation. Built and deployed a personal website using React, hosted via GitHub Pages, to showcase projects and technical skills.",
    technologies: "AHK, React, GitHub Pages",
  },
];

function createProjectCard(project) {
  return `
    <div class="card">
      <h3>${project.name}</h3>
      <img src="${project.image}" alt="${project.name} screenshot" />
      <p class="date">${project.date}</p>
      <p class="description">${project.description}</p>
      <p class="date">${project.technologies}</p>
      ${
        project.link
          ? `<a class="project-link" href="${project.link}" target="_blank" rel="noopener noreferrer">View Project</a>`
          : ""
      }
    </div>
  `;
}

function renderProjects() {
  const container = document.getElementById("project-cards");
  container.innerHTML = projects.map(createProjectCard).join("");
}

document.addEventListener("DOMContentLoaded", renderProjects);
