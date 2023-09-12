// Obter o ID da vaga de emprego da URL
const urlParams = new URLSearchParams(window.location.search);
const jobId = urlParams.get("jobId");

// Manipulador de evento para o envio do formulário
document.getElementById("applicationForm").addEventListener("submit", async function(event) {
  event.preventDefault(); // Evita o envio padrão do formulário
  
  // Coleta dos dados do formulário
  const fullName = document.getElementById("fullNameInput").value;
  const email = document.getElementById("emailInput").value;
  const jobInterest = document.getElementById("jobInterestInput").value;
  const hardSkills = document.getElementById("hardSkillsTextArea").value;
  const softSkills = document.getElementById("softSkillsTextArea").value;
  const resume = document.getElementById("resumeUpload").files[0];
  const coverLetter = document.getElementById("coverLetterTextArea").value;
  
  // Criação do objeto FormData para enviar os dados
  const formData = new FormData();
  formData.append("fullName", fullName);
  formData.append("email", email);
  formData.append("jobInterest", jobInterest);
  formData.append("hardSkills", hardSkills);
  formData.append("softSkills", softSkills);
  formData.append("resume", resume);
  formData.append("coverLetter", coverLetter);
  
  // Envio dos dados para o servidor usando a função fetch
  try {
    const response = await fetch("/api/submitApplication", {
      method: "POST",
      body: formData
    });
    
    if (response.ok) {
      // Dados enviados com sucesso
      window.location.href = "hrapplication.html?" + formData.toString();
    } else {
      // Ocorreu um erro no envio
      alert("An error occurred while submitting the application.");
    }
  } catch (error) {
    console.error("Error submitting application:", error);
  }
});

// Evento de clique para o botão de retorno
document.getElementById("returnButton").addEventListener("click", function() {
  window.location.href = "JobPositions.html"; 
});
