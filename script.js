window.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('resumeForm');
    var getresumeDiv = document.getElementById('getresume');
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission
        // Capture form data
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var profilePictureInput = document.getElementById('profile');
        var profilePicture = profilePictureInput.files ? profilePictureInput.files[0] : null;
        var skills = document.getElementById('skills').value;
        var education = document.getElementById('education').value;
        var experience = document.getElementById('experience').value;
        // Create HTML structure for the resume
        var resumeHTML = "\n            <div style=\"text-align: center; padding: 20px; background-color: #f7f7f7; border-radius: 10px; border: 1px solid #ccc;\">\n                <h2><span contenteditable=\"true\">".concat(name, "</span></h2>\n                <p>Email: <span contenteditable=\"true\">").concat(email, "</span></p>\n                <p>Phone: <span contenteditable=\"true\">").concat(phone, "</span></p>\n        ");
        // Check if the profile picture is selected
        if (profilePicture) {
            resumeHTML += "\n                <div>\n                    <h3>Profile Picture:</h3>\n                    <img src=\"".concat(URL.createObjectURL(profilePicture), "\" alt=\"Profile Picture\" style=\"width: 150px; height: 150px; border-radius: 50%;\">\n                </div>\n            ");
        }
        // Add the rest of the sections to the resume
        resumeHTML += "\n            <h3>Skills:</h3>\n            <p contenteditable=\"true\">".concat(skills, "</p>\n\n            <h3>Education:</h3>\n            <p contenteditable=\"true\">").concat(education, "</p>\n\n            <h3>Experience:</h3>\n            <p contenteditable=\"true\">").concat(experience, "</p>\n        </div>\n        ");
        // Display the resume
        getresumeDiv.innerHTML = resumeHTML;
    });
});
