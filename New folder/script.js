document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    alert('Thank you for your message!');
    this.reset(); // Reset the form fields
});
