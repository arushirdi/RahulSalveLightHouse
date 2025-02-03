/* script.js */
document.addEventListener('DOMContentLoaded', function () {
    // Mobile Navigation Toggle
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.querySelector('.nav-links');

    navToggle.addEventListener('click', function () {
        navLinks.classList.toggle('active');
        this.classList.toggle('active');
    });

    // Smooth Scroll for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Service Cards Animation
    const serviceCards = document.querySelectorAll('.service-card');

    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    // For Mobile Navigation Toggle
    document.getElementById('navToggle').addEventListener('click', function () {
        document.querySelector('.nav-links').classList.toggle('active');
    });
    sss
    serviceCards.forEach(card => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });

    // CTA Button Animation
    const ctaButton = document.querySelector('.cta-button');
    ctaButton.addEventListener('mouseover', function () {
        this.style.transform = 'scale(1.05)';
    });
    ctaButton.addEventListener('mouseout', function () {
        this.style.transform = 'scale(1)';
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll('.hero-slider img');
    const video = document.querySelector('.hero-video');

    let currentIndex = 0;

    // Show the first image
    images[currentIndex].classList.add('active');

    // Function to cycle through images
    function changeImage() {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    }

    // Change images every 5 seconds
    setInterval(changeImage, 5000);

    // If no slider, show video
    if (images.length === 0) {
        video.style.display = 'block';
    }
});
