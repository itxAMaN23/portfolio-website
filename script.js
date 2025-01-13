

// Fade Effect on load -------
document.addEventListener("DOMContentLoaded", () => {
    const fadeIns = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    });

    fadeIns.forEach((fadeIn) => {
        observer.observe(fadeIn);
    });
});

// Back to top -------
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

// Badge Colors --------
const badges = document.getElementsByClassName('badge');

Array.from(badges).forEach((badge) => {
    const val = badge.innerText.toLowerCase();

    switch (val) {
        case 'html':
            badge.style.backgroundColor = '#E34F26';
            badge.style.boxShadow = '0px 0px 5px 1px #E34F26'
            break;
        case 'css':
            badge.style.backgroundColor = '#1572B6';
            badge.style.boxShadow = '0px 0px 5px 2px #1572B6'
            break;
        case 'javascript':
            badge.style.backgroundColor = '#ffdc00';
            badge.style.boxShadow = '0px 0px 5px 2px rgb(242, 219, 75)'
            break;
        case 'reactjs':
            badge.style.backgroundColor = '#61DAFB';
            badge.style.boxShadow = '0px 0px 5px 2px #61DAFB'
            break;
        case 'nodejs':
            badge.style.backgroundColor = '#36ff00';
            badge.style.boxShadow = '0px 0px 5px 2px #36ff00'
            break;

        default:
            badge.style.backgroundColor = '#333';
            break;
    }
})

// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});
