function shortenUrl() {
    const originalUrl = document.getElementById('originalUrl').value;
    const shortenedUrl = generateShortUrl(originalUrl);

    if (shortenedUrl) {
        document.getElementById('shortenedUrl').value = shortenedUrl;
        document.getElementById('error-message').innerText = '';
    } else {
        document.getElementById('shortenedUrl').value = '';
        document.getElementById('error-message').innerText = 'Invalid URL. Please enter a valid URL.';
    }
}

function generateShortUrl(originalUrl) {
    // Simplified URL shortening logic (you may replace this with your own logic)
    if (isValidUrl(originalUrl)) {
        // Here, you can implement your own URL shortening algorithm or use a service/API
        // For simplicity, let's use a simple hash for demonstration purposes
        const hashCode = hashString(originalUrl);
        return 'https://short.url/' + hashCode;
    }

    return null;
}

function isValidUrl(url) {
    // Simple URL validation (you may replace this with a more robust solution)
    const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    return urlPattern.test(url);
}

function hashString(str) {
    // Simple hash function (you may replace this with a more secure hash function)
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash &= hash; // Convert to 32bit integer
    }
    return Math.abs(hash).toString(36);
}
