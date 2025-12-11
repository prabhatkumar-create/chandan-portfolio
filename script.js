
// navbar js code 
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');
const navbar = document.getElementById('navbar');

// Toggle mobile menu
menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Change navbar style on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});