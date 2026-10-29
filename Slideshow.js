document.addEventListener('DOMContentLoaded', () => {
    const INTERVAL_MS = 3500;

    document.querySelectorAll('.slideshow').forEach(show => {
        const slides = show.querySelectorAll('.slide');
        if (slides.length < 2) return;

        let current = 0;
        let timer = setInterval(next, INTERVAL_MS);

        function next() {
            slides[current].classList.remove('active');
            current = (current + 1) % slides.length;
            slides[current].classList.add('active');
        }

        // Pause while hovering or focused so people can look properly
        show.addEventListener('mouseenter', () => clearInterval(timer));
        show.addEventListener('mouseleave', () => { timer = setInterval(next, INTERVAL_MS); });
    });
});
