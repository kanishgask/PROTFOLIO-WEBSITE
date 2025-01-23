document.addEventListener("DOMContentLoaded", function () {
    // AOS initialization
    AOS.init({ offset: 0 });

    // Hamburger Menu functionality
    function hamburg() {
        const navbar = document.querySelector(".dropdown");
        navbar.style.transform = "translateY(0px)";
    }

    function cancel() {
        const navbar = document.querySelector(".dropdown");
        navbar.style.transform = "translateY(-500px)";
    }

    // Typewriter Effect
    const texts = ["DEVELOPER", "DESIGNER", "YOUTUBER"];
    let speed = 100;
    const textElements = document.querySelector(".typewriter-text");
    let textIndex = 0;
    let charcterIndex = 0;

    function typeWriter() {
        if (charcterIndex < texts[textIndex].length) {
            textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
            charcterIndex++;
            setTimeout(typeWriter, speed);
        } else {
            setTimeout(eraseText, 1000);
        }
    }

    function eraseText() {
        if (textElements.innerHTML.length > 0) {
            textElements.innerHTML = textElements.innerHTML.slice(0, -1);
            setTimeout(eraseText, 50);
        } else {
            textIndex = (textIndex + 1) % texts.length;
            charcterIndex = 0;
            setTimeout(typeWriter, 500);
        }
    }

    window.onload = typeWriter;

    // Smooth Scroll for navigation
    const links = document.querySelectorAll(".nav-container .links a");
    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute("href"));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Smooth scroll across the entire page
    // For scrolling between sections using links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animate the skills bars when the page is loaded
    const progressElements = document.querySelectorAll('.progress');

    progressElements.forEach(element => {
        const progressValue = element.getAttribute('data-progress');
        element.style.width = progressValue + "%";
    });
});

// Form validation and smooth submission (optional enhancement)
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();  // Prevent the default form submission

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Example: Simple validation
    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields!");
    } else {
        // Optional: Send data to a backend API, or just display a success message
        alert("Thank you for reaching out, " + name + ". We will get back to you soon!");

        // Reset the form after submission
        document.getElementById("contact-form").reset();
    }
});

// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1200, // Controls the animation duration (in milliseconds)
    easing: 'ease-in-out', // Smooth easing effect
    once: true, // Animation only triggers once when scrolled into view
    offset: 100 // Set the offset for when the animation starts (in pixels)
});

// Optional: If you want to add a smooth scroll effect when clicking the "View Project" button
const projectBtns = document.querySelectorAll('.project-btn');

projectBtns.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault(); // Prevents the default behavior (if it's a link)

        // Assuming you want to redirect to the project details page
        window.location.href = e.target.closest('.project-card').querySelector('a').getAttribute('href');
    });
});

// Add some smooth scrolling effect for the "Let's Work Together" button
document.querySelector('.cta-button').addEventListener('click', function () {
    alert('Looking forward to collaborating! Reach out to me!');
    // You can add code here to scroll to another section or show a form, etc.
});
const links = document.querySelectorAll(".nav-container .links a");
links.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 50, // Adjust offset as needed
                behavior: "smooth"
            });
        }
    });
});
