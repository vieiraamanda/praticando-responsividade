const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.links-menu');
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });