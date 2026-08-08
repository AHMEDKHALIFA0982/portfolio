const projects = [
  {
    title: "Smart Power System Using Microgrid and AI",
    category: "robotics embedded",
    icon: "⚡",
    description: "A smart energy management project using microgrid concepts, artificial intelligence, MATLAB and Simulink to improve power monitoring, analysis and control.",
    tags: ["AI", "MATLAB", "Simulink", "Microgrid"],
    link: "https://github.com/AHMEDKHALIFA0982"
  },
  {
    title: "Restaurant Website",
    category: "web",
    icon: "🍽️",
    description: "A modern responsive restaurant website designed to display menu items, restaurant information, contact details and a clean user experience.",
    tags: ["HTML", "CSS", "JavaScript", "Web Development"],
    link: "https://github.com/AHMEDKHALIFA0982"
  },
  {
    title: "Machine Vision Barcode and QR Code Reader",
    category: "embedded",
    icon: "📷",
    description: "A machine vision system designed to read barcodes and QR codes, save the scanned data into a database and count each barcode to support tracking, inventory and automation processes.",
    tags: ["Machine Vision", "Barcode", "QR Code", "Database"],
    link: "https://github.com/AHMEDKHALIFA0982"
  },
  {
    title: "Automatic Bottle Filling System",
    category: "embedded robotics",
    icon: "🧴",
    description: "An automation project designed to fill bottles automatically using sensors, control logic and actuators. The system helps improve production speed, reduce manual work and support industrial filling processes.",
    tags: ["Automation", "Sensors", "Control System", "Industrial Design"],
    link: "https://github.com/AHMEDKHALIFA0982"
  },
  {
    title: "ASP.NET Core Store Website",
    category: "dotnet web",
    icon: "🛒",
    description: "A full stack e-commerce store built with ASP.NET Core MVC, C#, Entity Framework Core, SQL Server and Identity. Includes products, cart, checkout, orders, admin dashboard, image upload, Excel import and email features.",
    tags: [".NET 8", "MVC", "EF Core", "SQL Server", "Identity"],
    link: "https://github.com/AHMEDKHALIFA0982"
  },
  {
    title: "Supermarket Cashier Desktop App",
    category: "dotnet",
    icon: "💻",
    description: "A C# desktop cashier system for product management, barcode workflow, sales, database integration, cancel button logic and report viewing using DevExpress.",
    tags: ["C#", "WinForms", "SQL Server", "DevExpress"],
    link: "https://github.com/AHMEDKHALIFA0982"
  },
  {
    title: "Habit Mood ESP32 Sensor Dashboard",
    category: "web embedded",
    icon: "⚡",
    description: "A real-time IoT health dashboard using ESP32 sensor data, React/Vite frontend, Node.js/Express backend and MongoDB. Displays temperature, heart rate, SpO2, steps, device status and charts.",
    tags: ["React", "Node.js", "MongoDB", "ESP32", "API"],
    link: "https://github.com/AHMEDKHALIFA0982/Habit-Mood-Project"
  },
  {
    title: "Smart Solar Grass-Cutting Robot",
    category: "robotics embedded",
    icon: "☀️",
    description: "An autonomous smart solar robot designed for grass cutting using ROS 1, mapping and navigation. The project combines robotics, mobile robot control, environment mapping, path planning, navigation, solar energy usage and embedded motor control.",
    tags: ["ROS 1", "Mapping", "Navigation", "Solar Robot", "Automation"],
    link: "https://github.com/AHMEDKHALIFA0982/GradRobot"
  },
  {
    title: "Quad magnetic stirrer",
    category: "embedded robotics",
    icon: "⚙️",
    description: "A hardware control system using Arduino Mega, 4 DC motors, 2 L298N drivers, LCD display, switches and potentiometers for speed/time control with countdown stopping logic.",
    tags: ["Arduino Mega", "L298N", "LCD", "Proteus", "PCB Design"],
    link: "https://github.com/AHMEDKHALIFA0982"
  },
  {
    title: "ROS 2 Jazzy Robotics Projects",
    category: "robotics",
    icon: "🤖",
    description: "ROS 2 C++ practice packages including publishers, subscribers, services, turtlesim motion, Arduino serial communication, sensor publishing and rqt_graph/rqt_plot debugging.",
    tags: ["ROS 2", "C++", "rclcpp", "Serial", "Turtlesim"],
    link: "https://github.com/AHMEDKHALIFA0982"
  },
  {
    title: "4-DOF Robotic Arm Simulation",
    category: "robotics",
    icon: "🦾",
    description: "A MATLAB/Simulink robotic arm project using DH parameters, forward/inverse kinematics, trajectory drawing and Simscape Multibody simulation concepts.",
    tags: ["MATLAB", "Simulink", "DH", "IK/FK"],
    link: "https://github.com/AHMEDKHALIFA0982"
  },
  {
    title: "Automation & PLC Training Projects",
    category: "embedded robotics",
    icon: "🏭",
    description: "Automation practice based on PLC, TIA Portal, CNC, production engineering and industrial troubleshooting experience.",
    tags: ["PLC", "TIA Portal", "CNC", "Automation"],
    link: "https://github.com/AHMEDKHALIFA0982"
  }
];

const grid = document.getElementById("projectsGrid");
const filterButtons = document.querySelectorAll(".filter-btn");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const year = document.getElementById("year");

year.textContent = new Date().getFullYear();

function renderProjects(filter = "all") {
  grid.innerHTML = "";

  const filteredProjects = projects.filter(project => {
    return filter === "all" || project.category.includes(filter);
  });

  filteredProjects.forEach(project => {
    const article = document.createElement("a");
    article.className = "project-card";
    article.href = project.link || "https://github.com/AHMEDKHALIFA0982";
    article.target = "_blank";
    article.rel = "noopener noreferrer";
    article.setAttribute("aria-label", `Open ${project.title} on GitHub`);
    article.innerHTML = `
      <div class="project-icon">${project.icon}</div>
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="project-tags">
        ${project.tags.map(tag => `<span>${tag}</span>`).join("")}
      </div>
    `;
    grid.appendChild(article);
  });
}

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    renderProjects(button.dataset.filter);
  });
});

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});

renderProjects();


const backToTopButton = document.getElementById("backToTop");

if (backToTopButton) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 350) {
      backToTopButton.classList.add("show");
    } else {
      backToTopButton.classList.remove("show");
    }
  });

  backToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}



// Certificate popup modal
const certificateModal = document.getElementById("certificateModal");
const certificateViewer = document.getElementById("certificateViewer");
const certificateTitle = document.getElementById("certificateModalTitle");
const certificateClose = document.getElementById("certificateClose");
const certificateOverlay = document.getElementById("certificateOverlay");
const certificateCards = document.querySelectorAll(".certificate-card");

function openCertificateModal(filePath, title) {
  if (!certificateModal || !certificateViewer) return;

  certificateTitle.textContent = title || "Certificate";
  certificateViewer.innerHTML = "";

  const lowerPath = filePath.toLowerCase();

  if (lowerPath.endsWith(".pdf")) {
    const iframe = document.createElement("iframe");
    iframe.src = filePath;
    iframe.title = title || "Certificate PDF";
    certificateViewer.appendChild(iframe);
  } else if (
    lowerPath.endsWith(".jpg") ||
    lowerPath.endsWith(".jpeg") ||
    lowerPath.endsWith(".png") ||
    lowerPath.endsWith(".webp")
  ) {
    const image = document.createElement("img");
    image.src = filePath;
    image.alt = title || "Certificate image";
    certificateViewer.appendChild(image);
  } else {
    certificateViewer.innerHTML = `
      <div class="certificate-error">
        <p>Please use a PDF, JPG, PNG, or WEBP certificate file.</p>
      </div>
    `;
  }

  certificateModal.classList.add("show");
  certificateModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeCertificateModal() {
  if (!certificateModal || !certificateViewer) return;

  certificateModal.classList.remove("show");
  certificateModal.setAttribute("aria-hidden", "true");
  certificateViewer.innerHTML = "";
  document.body.style.overflow = "";
}


function openMultipleCertificatesModal(filePaths, title) {
  if (!certificateModal || !certificateViewer) return;

  certificateTitle.textContent = title || "Certificates";
  certificateViewer.innerHTML = "";

  filePaths.forEach((filePath, index) => {
    const lowerPath = filePath.toLowerCase();

    const wrapper = document.createElement("div");
    wrapper.className = "certificate-file-box";

    const label = document.createElement("h4");
    label.textContent = `Certificate ${index + 1}`;
    wrapper.appendChild(label);

    if (lowerPath.endsWith(".pdf")) {
      const iframe = document.createElement("iframe");
      iframe.src = filePath;
      iframe.title = `${title} Certificate ${index + 1}`;
      wrapper.appendChild(iframe);
    } else if (
      lowerPath.endsWith(".jpg") ||
      lowerPath.endsWith(".jpeg") ||
      lowerPath.endsWith(".png") ||
      lowerPath.endsWith(".webp")
    ) {
      const image = document.createElement("img");
      image.src = filePath;
      image.alt = `${title} Certificate ${index + 1}`;
      wrapper.appendChild(image);
    } else {
      const error = document.createElement("div");
      error.className = "certificate-error";
      error.innerHTML = "<p>Please use a PDF, JPG, PNG, or WEBP certificate file.</p>";
      wrapper.appendChild(error);
    }

    certificateViewer.appendChild(wrapper);
  });

  certificateModal.classList.add("show");
  certificateModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

certificateCards.forEach(card => {
  card.addEventListener("click", event => {
    event.preventDefault();

    const title = card.querySelector("h3")?.textContent || "Certificate";

    if (card.dataset.certificates) {
      const files = card.dataset.certificates
        .split(",")
        .map(file => file.trim())
        .filter(Boolean);

      openMultipleCertificatesModal(files, title);
    } else {
      const filePath = card.getAttribute("href");
      openCertificateModal(filePath, title);
    }
  });
});

if (certificateClose) {
  certificateClose.addEventListener("click", closeCertificateModal);
}

if (certificateOverlay) {
  certificateOverlay.addEventListener("click", closeCertificateModal);
}

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeCertificateModal();
  }
});
