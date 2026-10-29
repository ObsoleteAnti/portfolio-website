const hamburgerBtn = document.getElementById('hamburger-btn');
const navlinks = document.getElementById('nav-links');

hamburgerBtn.addEventListener('click', () => {
    const isOpen = navlinks.classList.toggle('active');

    hamburgerBtn.classList.toggle('active', isOpen);
    hamburgerBtn.setAttribute('aria-expanded', String(isOpen));
});