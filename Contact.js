document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const status = document.getElementById('form-status');
    if (!form) return;

    form.addEventListener('submit', event => {
        event.preventDefault();
        // No backend yet: swap this for a fetch() to a form service when ready.
        status.textContent = 'Thanks! Your message has been received. I will reply within 24-72 hours.';
        form.reset();
    });
});
