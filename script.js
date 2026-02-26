/**
 * Intersection Observer for scroll animations
 * This adds the 'show' class to sections when they enter the viewport.
 */
const sections = document.querySelectorAll("section");

const observerOptions = {
    root: null, // use the viewport
    threshold: 0.2 // trigger when 20% of the section is visible
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});

// Optional: Form submission feedback
const contactForm = document.getElementById('contactForm');
if(contactForm) {
    contactForm.addEventListener('submit', () => {
        console.log("Form is being submitted...");
        // You can add a 'Thank you' message logic here if you want!
    });
}