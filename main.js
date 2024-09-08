// Function to show the form and hide the initial button
function showForm() {
    var formSection = document.getElementById("form-section");
    var generateButtonSection = document.getElementById("generateButtonSection");
    var resumeContainer = document.querySelector(".resume-container");
    formSection.style.display = "block";
    generateButtonSection.style.display = "none";
    resumeContainer.style.display = "none";
}
// Function to update the resume with the form data
function updateResume() {
    var name = document.getElementById('nameInput').value;
    var title = document.getElementById('titleInput').value;
    var education = document.getElementById('educationInput').value;
    var expertise = document.getElementById('expertiseInput').value;
    var hobbies = document.getElementById('hobbiesInput').value;
    var about = document.getElementById('aboutInput').value;
    var workExperience = document.getElementById('workExperienceInput').value;
    var projects = document.getElementById('projectsInput').value;
    var skills = document.getElementById('skillsInput').value;
    var email = document.getElementById('emailInput').value;
    var phone = document.getElementById('phoneInput').value;
    // Updating content
    document.getElementById('name').textContent = name;
    document.getElementById('title').textContent = title;
    document.getElementById('resume-education').textContent = education;
    document.getElementById('resume-expertise').textContent = expertise;
    document.getElementById('resume-hobbies').textContent = hobbies;
    document.getElementById('resume-about').textContent = about;
    document.getElementById('resume-work-experience').textContent = workExperience;
    document.getElementById('resume-projects').textContent = projects;
    document.getElementById('resume-skills').textContent = skills;
    document.getElementById('resume-email').innerHTML = "<strong>Email:</strong> ".concat(email);
    document.getElementById('resume-phone').innerHTML = "<strong>Phone:</strong> ".concat(phone);
    // Hiding form and showing resume
    var formSection = document.getElementById("form-section");
    var resumeContainer = document.querySelector(".resume-container");
    formSection.style.display = "none";
    resumeContainer.style.display = "block";
}
// Function to handle profile picture upload
function uploadProfilePicture() {
    var input = document.getElementById("profilePictureInput");
    var displayPicture = document.getElementById("displayPicture");
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            if (e.target) {
                displayPicture.src = e.target.result;
            }
        };
        reader.readAsDataURL(input.files[0]);
    }
}
// Function to toggle edit mode
function toggleEdit() {
    var formSection = document.getElementById("form-section");
    var resumeContainer = document.querySelector(".resume-container");
    if (formSection.style.display === "block") {
        formSection.style.display = "none";
        resumeContainer.style.display = "block";
    }
    else {
        formSection.style.display = "block";
        resumeContainer.style.display = "none";
    }
}
