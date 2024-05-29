document.addEventListener('DOMContentLoaded', () => {
    // Existing JS code

    // Contact form submission handling
    const contactForm = document.getElementById('contactForm');
    const formResponse = document.getElementById('formResponse');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        // Simple form validation
        if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
            formResponse.textContent = 'All fields are required.';
            formResponse.style.color = 'red';
            return;
        }

        // Here you would typically send the form data to your server using fetch or AJAX
        // For demonstration, we'll just simulate a successful submission
        setTimeout(() => {
            formResponse.textContent = 'Thank you for contacting us, ' + name + '. We will get back to you shortly!';
            formResponse.style.color = 'green';
            contactForm.reset();
        }, 1000);
    });
});
