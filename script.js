// Ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    const themeSelect = document.getElementById('theme-select');
    const body = document.body;

    // Retrieve the stored theme from localStorage, or default to 'light'
    const savedTheme = localStorage.getItem('theme') || 'light';

    // Apply the saved theme to the body
    body.classList.add(savedTheme);

    // Set the theme select dropdown to match the saved theme
    themeSelect.value = savedTheme;

    // Add event listener to the dropdown menu to switch themes
    themeSelect.addEventListener('change', (event) => {
        const selectedTheme = event.target.value;

        // Remove all previous theme classes
        body.classList.remove('light', 'dark', 'blue');

        // Apply the selected theme
        body.classList.add(selectedTheme);

        // Save the selected theme to localStorage for persistence across pages
        localStorage.setItem('theme', selectedTheme);
    });

    // Form validation logic
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (event) => {
        // Prevent form submission if validation fails
        if (!validateForm()) {
            event.preventDefault();
            alert("Please fill out all the fields before submitting.");
        }
    });

    function validateForm() {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Check if all fields are filled out
        if (name === '' || email === '' || message === '') {
            return false;
        }

        // Optional: Add additional validation for email format (basic regex)
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            return false;
        }

        return true;
    }
});



