// Function to encode the input text to Base64
function encodeBase64() {
    const inputText = document.getElementById('base64InputText').value;
    const encodedText = btoa(inputText);
    document.getElementById('base64OutputText').value = 'Base64 Encoded Text: ' + encodedText;
}

// Function to decode the Base64 text
function decodeBase64() {
    const inputText = document.getElementById('base64InputText').value;
    let decodedText;

    try {
        decodedText = atob(inputText);
    } catch (error) {
        decodedText = 'Invalid Base64 input';
    }

    document.getElementById('base64OutputText').value = 'Base64 Decoded Text: ' + decodedText;
}

// Function to encode the input text to Base32
function encodeBase32() {
    const inputText = document.getElementById('base32InputText').value;
    const encodedText = customBase32Encode(inputText);
    document.getElementById('base32OutputText').value = 'Base32 Encoded Text: ' + encodedText;
}

// Function to decode the Base32 text
function decodeBase32() {
    const inputText = document.getElementById('base32InputText').value;
    let decodedText;

    try {
        decodedText = customBase32Decode(inputText);
    } catch (error) {
        decodedText = 'Invalid Base32 input';
    }

    document.getElementById('base32OutputText').value = 'Base32 Decoded Text: ' + decodedText;
}

// Custom function to encode text to Base32
function customBase32Encode(input) {
    // Define the Base32 alphabet
    const base32Alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';

    // Convert each character to its binary representation
    const binaryArray = input.split('').map(char => {
        const binaryChar = char.charCodeAt(0).toString(2).padStart(8, '0');
        return binaryChar;
    });

    // Concatenate the binary strings and pad to a multiple of 5
    const binaryString = binaryArray.join('').padEnd(Math.ceil(binaryArray.join('').length / 5) * 5, '0');

    // Split the binary string into 5-bit chunks
    const chunks = binaryString.match(/.{1,5}/g);

    // Map each chunk to its corresponding Base32 character
    const encodedText = chunks.map(chunk => {
        const index = parseInt(chunk, 2);
        return base32Alphabet[index];
    }).join('');

    return encodedText;
}

// Custom function to decode Base32 text
function customBase32Decode(input) {
    // Define the Base32 alphabet
    const base32Alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';

    // Map each Base32 character to its corresponding 5-bit binary representation
    const binaryArray = input.split('').map(char => {
        const index = base32Alphabet.indexOf(char);
        if (index === -1) {
            throw new Error('Invalid Base32 character');
        }
        return index.toString(2).padStart(5, '0');
    });

    // Concatenate the binary strings
    const binaryString = binaryArray.join('');

    // Split the binary string into 8-bit chunks
    const chunks = binaryString.match(/.{1,8}/g);

    // Map each chunk to its corresponding ASCII character
    const decodedText = chunks.map(chunk => String.fromCharCode(parseInt(chunk, 2))).join('');

    return decodedText;
}

