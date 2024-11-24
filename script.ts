window.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resumeForm') as HTMLFormElement;
    const getresumeDiv = document.getElementById('getresume') as HTMLDivElement;

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form submission

        // Capture form data
        const name = (document.getElementById('name') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const phone = (document.getElementById('phone') as HTMLInputElement).value;
        const profilePictureInput = document.getElementById('profile') as HTMLInputElement;
        const profilePicture = profilePictureInput.files ? profilePictureInput.files[0] : null;
        const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
        const education = (document.getElementById('education') as HTMLTextAreaElement).value;
        const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;

        // Create HTML structure for the resume
        let resumeHTML = `
            <div style="text-align: center; padding: 20px; background-color: #f7f7f7; border-radius: 10px; border: 1px solid #ccc;">
                <h2><span contenteditable="true">${name}</span></h2>
                <p>Email: <span contenteditable="true">${email}</span></p>
                <p>Phone: <span contenteditable="true">${phone}</span></p>
        `;

        // Check if the profile picture is selected
        if (profilePicture) {
            resumeHTML += `
                <div>
                    <h3>Profile Picture:</h3>
                    <img src="${URL.createObjectURL(profilePicture)}" alt="Profile Picture" style="width: 150px; height: 150px; border-radius: 50%;">
                </div>
            `;
        }

        // Add the rest of the sections to the resume
        resumeHTML += `
            <h3>Skills:</h3>
            <p contenteditable="true">${skills}</p>

            <h3>Education:</h3>
            <p contenteditable="true">${education}</p>

            <h3>Experience:</h3>
            <p contenteditable="true">${experience}</p>
        </div>
        `;

        // Display the resume
        getresumeDiv.innerHTML = resumeHTML;
    });
});