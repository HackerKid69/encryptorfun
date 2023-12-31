// Function to encode the input text to Base64
function encode() {
    const inputText = document.getElementById('inputText').value;
    const encodedText = btoa(inputText);
    document.getElementById('result').innerText = 'Encoded Text: ' + encodedText;
}

// Function to decode the Base64 text
function decode() {
    const inputText = document.getElementById('inputText').value;
    let decodedText;

    try {
        decodedText = atob(inputText);
    } catch (error) {
        decodedText = 'Invalid Base64 input';
    }

    document.getElementById('result').innerText = 'Decoded Text: ' + decodedText;
}
