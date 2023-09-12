async function searchCandidates() {
    const skillsInput = document.getElementById('skillsInput').value;
    const skillsArray = skillsInput.split(',').map(skill => skill.trim());

    // Send the skills list to the OData service
    const candidates = await fetchCandidatesBySkills(skillsArray);

    // Display the found candidates on the page
    displayCandidates(candidates);
}

async function fetchCandidatesBySkills(skills) {
    // Build the OData query URL
    const skillsQueryString = skills.map(skill => `hardSkills eq '${skill}'`).join(' or ');
    const url = `http://localhost:4004/odata/v4/recruitment/EmployeeProfiles?$filter=${skillsQueryString}`;

    // Send an HTTP GET request to the OData service
    const response = await fetch(url);

    if (response.ok) {
        const data = await response.json();
        return data.value; // The list of candidates is in data.value
    } else {
        console.error('Error fetching candidates by skills.');
        return [];
    }
}

function displayCandidates(candidates) {
    const candidatesList = document.getElementById('candidatesList');
    candidatesList.innerHTML = '';

    if (candidates.length === 0) {
        candidatesList.innerHTML = '<p>No candidates found.</p>';
    } else {
        candidates.forEach(candidate => {
            const listItem = document.createElement('li');
            listItem.textContent = `${candidate.firstName} ${candidate.lastName} - Area: ${candidate.appliedArea}, Hard Skills: ${candidate.hardSkills.join(', ')}`;
            candidatesList.appendChild(listItem);
        });
    }
}

function refreshResults() {
    // Clear the input field and search results
    document.getElementById('skillsInput').value = '';
    document.getElementById('candidatesList').innerHTML = '';
}
