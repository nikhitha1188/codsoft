document.addEventListener("DOMContentLoaded", () => {
    const learnMoreBtn = document.getElementById('learnMoreBtn');
    const contactForm = document.getElementById('contactForm');

    learnMoreBtn.addEventListener('click', () => {
        window.scrollTo({
            top: document.getElementById('about').offsetTop,
            behavior: 'smooth'
        });
    });

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Your message has been sent!');
        contactForm.reset();
    });
});
