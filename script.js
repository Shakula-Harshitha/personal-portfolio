// Project information

const projects = [

    {
        name: "AI Chatbot for Disease Awareness",
        type: "ai",
        icon: "bi-robot",
        description:
            "Built an AI-driven chatbot that answers user queries and raises awareness about common diseases using Natural Language Processing (NLP). Trained a Random Forest classification model to categorize user queries and generate accurate, relevant responses.",
        technologies:
            ["Python", "NLP", "Random Forest"]
    },


    {
        name: "Task Management System",
        type: "web",
        icon: "bi-list-check",
        description:
            "Developed a web-based application for creating, updating, deleting, and tracking tasks. Implemented task details such as task name, description, priority, and status. Used Java for application logic and MySQL for storing and managing task information.",
        technologies:
            ["HTML", "CSS", "JavaScript", "Java", "MySQL"]
    },


    {
        name: "AI-Based Brain Tumor Detection Using MRI Images",
        type: "ai",
        icon: "bi-heart-pulse",
        description:
            "Developed an AI-based approach for automated brain tumor detection from MRI images using image processing and Convolutional Neural Networks (CNNs). Designed the system to classify MRI scans as tumor or non-tumor.",
        technologies:
            ["Python", "TensorFlow", "CNN"]
    }

];


// Display projects

function displayProjects(projectArray) {

    const container = document.getElementById("projectContainer");

    container.innerHTML = "";

    projectArray.forEach(function(project) {

        let technologies = "";

        project.technologies.forEach(function(technology) {

            technologies +=
                "<span>" + technology + "</span>";

        });


        container.innerHTML += `

            <div class="col-md-6 col-lg-4">

                <div class="project-card">

                    <i class="bi ${project.icon}"></i>

                    <h4>${project.name}</h4>

                    <p>${project.description}</p>

                    <div class="project-tech">
                        ${technologies}
                    </div>

                </div>

            </div>

        `;
    });
}


// Display all projects initially

displayProjects(projects);


// Project filtering

const filterButtons =
    document.querySelectorAll(".filter-button");


filterButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        filterButtons.forEach(function(btn) {

            btn.classList.remove("active");

        });


        button.classList.add("active");


        const selectedType =
            button.getAttribute("data-type");


        if (selectedType === "all") {

            displayProjects(projects);

        } else {

            const filteredProjects =
                projects.filter(function(project) {

                    return project.type === selectedType;

                });


            displayProjects(filteredProjects);

        }

    });

});


// Dark mode

const themeButton =
    document.getElementById("themeButton");


themeButton.addEventListener("click", function() {

    document.body.classList.toggle("dark");


    if (document.body.classList.contains("dark")) {

        themeButton.innerText = "Light";

    } else {

        themeButton.innerText = "Dark";

    }

});


// Contact form validation

const contactForm =
    document.getElementById("contactForm");


contactForm.addEventListener("submit", function(event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const subject =
        document.getElementById("subject").value.trim();

    const message =
        document.getElementById("message").value.trim();


    const nameError =
        document.getElementById("nameError");

    const emailError =
        document.getElementById("emailError");

    const subjectError =
        document.getElementById("subjectError");

    const messageError =
        document.getElementById("messageError");


    nameError.innerText = "";
    emailError.innerText = "";
    subjectError.innerText = "";
    messageError.innerText = "";

    document.getElementById("formMessage").innerHTML = "";


    let valid = true;


    // Name validation

    if (name === "") {

        nameError.innerText =
            "Please enter your name.";

        valid = false;

    } else if (name.length < 3) {

        nameError.innerText =
            "Name should contain at least 3 characters.";

        valid = false;

    }


    // Email validation

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (email === "") {

        emailError.innerText =
            "Please enter your email.";

        valid = false;

    } else if (!emailPattern.test(email)) {

        emailError.innerText =
            "Please enter a valid email.";

        valid = false;

    }


    // Subject validation

    if (subject === "") {

        subjectError.innerText =
            "Please enter a subject.";

        valid = false;

    }


    // Message validation

    if (message === "") {

        messageError.innerText =
            "Please enter your message.";

        valid = false;

    } else if (message.length < 10) {

        messageError.innerText =
            "Message should contain at least 10 characters.";

        valid = false;

    }


    // Final result

    if (valid) {

        document.getElementById("formMessage").innerHTML =

            `<div class="alert alert-success">
                Message submitted successfully!
            </div>`;

        contactForm.reset();

    } else {

        document.getElementById("formMessage").innerHTML =

            `<div class="alert alert-danger">
                Please correct the errors above.
            </div>`;

    }

});