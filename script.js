document.addEventListener('DOMContentLoaded', function () {
    const urlForm = document.getElementById('url-form');
    const urlInput = document.getElementById('url');
    const shortenedUrlElement = document.getElementById('shortened-url');

    // Function to generate a random short code
    function generateShortCode() {
        return Math.random().toString(36).substr(2, 6); // Generate a 6-character alphanumeric code
    }

    // Function to shorten the URL
    function shortenUrl(url) {
        const shortCode = generateShortCode();
        const shortenedUrl = `https://example.com/${shortCode}`; // Replace example.com with your domain
        return shortenedUrl;
    }

    // Event listener for form submission
    urlForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const originalUrl = urlInput.value.trim();
        if (originalUrl === '') {
            alert('Please enter a URL.');
            return;
        }
        const shortenedUrl = shortenUrl(originalUrl);
        shortenedUrlElement.innerHTML = `
            Shortened URL: <a href="${shortenedUrl}" target="_blank">${shortenedUrl}</a>
        `;
        urlForm.reset(); // Clear the form
    });
});
