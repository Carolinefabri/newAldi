// Load Career Management functionality when the page loads
window.onload = loadCareerManagement;

// Function to load Career Management functionality
async function loadCareerManagement() {
  // Load Skills Needed data
  const response = await fetch('/odata/v4/recruitment/SkillsNeeded');
  const skillsNeededData = await response.json();
  
  // Create UI5 List control
  const list = new sap.m.List({
    items: skillsNeededData.value.map(skill => {
      return new sap.m.StandardListItem({
        title: skill.skill,
        description: skill.description
      });
    })
  });

  // Place the List control into the designated HTML element
  const skillsNeededList = document.getElementById('skillsNeededList');
  list.placeAt(skillsNeededList);
}

// Event listener for the return button
document.getElementById("returnButton").addEventListener("click", function() {
  window.location.href = "JobPositions.html"; // Replace with the correct path
});

// Event listener for the view courses button
document.getElementById("viewCoursesButton").addEventListener("click", function() {
  window.location.href = "SkillCourses.html"; // Replace with the correct path
});
