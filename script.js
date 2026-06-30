 // ===========================
// Contact Form
// ===========================

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    alert("Your message has been sent successfully!");

    form.reset();

});


// ===========================
// Smooth Scroll
// ===========================

const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({

            behavior: "smooth"

        });

    });

});


// ===========================
// Hero Buttons Animation
// ===========================

const buttons = document.querySelectorAll(".btn, .btn2");

buttons.forEach(button => {

    button.addEventListener("mouseenter", function () {

        this.style.transform = "scale(1.05)";

    });

    button.addEventListener("mouseleave", function () {

        this.style.transform = "scale(1)";

    });

});


// ===========================
// Skills Hover
// ===========================

const skills = document.querySelectorAll(".skill-card");

skills.forEach(skill => {

    skill.addEventListener("mouseenter", function () {

        this.style.transform = "translateY(-10px)";

    });

    skill.addEventListener("mouseleave", function () {

        this.style.transform = "translateY(0)";

    });

});


// ===========================
// Projects Hover
// ===========================

const projects = document.querySelectorAll(".project-card");

projects.forEach(project => {

    project.addEventListener("mouseenter", function () {

        this.style.transform = "translateY(-10px)";

    });

    project.addEventListener("mouseleave", function () {

        this.style.transform = "translateY(0)";

    });

});