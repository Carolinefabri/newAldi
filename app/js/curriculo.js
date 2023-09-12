// Função para criar um perfil de funcionário
function createEmployeeProfile(imgSrc, name, appliedArea, hardSkills, softSkills, resumeLink) {
    const profile = document.createElement("div");
    profile.classList.add("employee-profile");
  
    const img = document.createElement("img");
    img.src = imgSrc;
    img.alt = name;
    img.style.width = "200px";
    img.style.height = "auto";
  
    const h2 = document.createElement("h2");
    h2.textContent = name;
  
    const p1 = document.createElement("p");
    p1.textContent = "Applied Area: " + appliedArea;
  
    const p2 = document.createElement("p");
    p2.textContent = "Hard Skills: " + hardSkills;
  
    const p3 = document.createElement("p");
    p3.textContent = "Soft Skills: " + softSkills;
  
    const resumeLinkElement = document.createElement("a");
    resumeLinkElement.href = resumeLink;
    resumeLinkElement.target = "_blank";
    resumeLinkElement.textContent = "View Resume";
  
    profile.appendChild(img);
    profile.appendChild(h2);
    profile.appendChild(p1);
    profile.appendChild(p2);
    profile.appendChild(p3);
    profile.appendChild(resumeLinkElement);
  
    return profile;
  }
  
  // Adicione perfis de funcionários à página
  const employeeProfiles = document.querySelector(".employee-profiles");
  
  employeeProfiles.appendChild(createEmployeeProfile(
    "https://img.freepik.com/vetores-premium/icones-do-centro-de-chamadas-icone-do-homem-desenho-animado-ilustracao-plana_8333-18.jpg?w=2000",
    "John Doe",
    "Marketing",
    "Digital Marketing, SEO, Social Media",
    "Communication, Teamwork, Creativity",
    "resume1.pdf"
  ));
  
  employeeProfiles.appendChild(createEmployeeProfile(
    "https://img.freepik.com/vetores-premium/perfil-de-personagem-de-desenho-animado-de-avatar-de-mulher-de-negocios_18591-50580.jpg?w=2000",
    "Jane Smith",
    "Sales",
    "Sales Strategy, Negotiation, CRM",
    "Persuasion, Leadership, Problem Solving",
    "resume2.pdf"
  ));
  
 
  
  