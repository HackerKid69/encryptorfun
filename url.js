async function shortenUrl() {
    const originalUrl = document.getElementById('originalUrl').value;
    const shortenedUrl = await generateShortUrl(originalUrl);

    if (shortenedUrl) {
        document.getElementById('shortenedUrl').value = shortenedUrl;
        document.getElementById('error-message').innerText = '';
    } else {
        document.getElementById('shortenedUrl').value = '';
        document.getElementById('error-message').innerText = 'Invalid URL. Please enter a valid URL.';
    }
}

async function generateShortUrl(originalUrl) {
    if (isValidUrl(originalUrl)) {
        try {
            const response = await fetch('YOUR_SHORTENING_API_ENDPOINT', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    originalUrl: originalUrl,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                return data.shortenedUrl;
            } else {
                throw new Error('Failed to shorten URL');
            }
        } catch (error) {
            console.error('Error:', error);
            return null;
        }
    }

    return null;
}

function isValidUrl(url) {
    const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    return urlPattern.test(url);
}
