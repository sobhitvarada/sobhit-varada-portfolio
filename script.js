// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    }
});

// Form submission handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(this);
        const formObject = {};
        formData.forEach((value, key) => {
            formObject[key] = value;
        });

        // Temporary success message
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
    });
}

// Add animation to project cards on scroll
const observerOptions = { threshold: 0.1 };

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.project-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});

// ===============================
// 🌙 Dark Mode Toggle
// ===============================
const toggleBtn = document.getElementById("darkToggle");

// Add event listener if toggle exists
if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        
        if (document.body.classList.contains("dark")) {
            toggleBtn.textContent = "☀️ Light Mode";
            localStorage.setItem("theme", "dark");
        } else {
            toggleBtn.textContent = "🌙 Dark Mode";
            localStorage.setItem("theme", "light");
        }
    });

    // Load saved theme preference
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
        toggleBtn.textContent = "☀️ Light Mode";
    }
}
