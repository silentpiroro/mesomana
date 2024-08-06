document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const heroSection = document.getElementById('hero');
    const hamburger = document.getElementById('hamburger');
    const navUl = document.getElementById('nav-ul');
    const dropdowns = document.querySelectorAll('.dropdown');

    // Header background change on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > heroSection.offsetHeight - 100) {
            header.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        } else {
            header.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
        }
    });

    // Hamburger menu toggle
    hamburger.addEventListener('click', () => {
        navUl.classList.toggle('show');
    });

    // Dropdown menu toggle for mobile
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                dropdown.classList.toggle('active');
            }
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            navUl.classList.remove('show');
            dropdowns.forEach(dropdown => dropdown.classList.remove('active'));

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
