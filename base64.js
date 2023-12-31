// Function to encode the input text to Base64
function encode() {
    // 1. Get the input text from the 'inputText' textarea
    const inputText = document.getElementById('inputText').value;

    // 2. Encode the input text to Base64 using the btoa function
    const encodedText = btoa(inputText);

    // 3. Update the result paragraph with the encoded text
    document.getElementById('result').innerText = 'Encoded Text: ' + encodedText;
}

// Function to decode the Base64 text
function decode() {
    // 1. Get the input text from the 'inputText' textarea
    const inputText = document.getElementById('inputText').value;

    let decodedText;

    // 2. Try to decode the Base64 text using the atob function
    try {
        decodedText = atob(inputText);
    } catch (error) {
        // 3. Handle an error if the input is not valid Base64
        decodedText = 'Invalid Base64 input';
    }

    // 4. Update the result paragraph with the decoded text
    document.getElementById('result').innerText = 'Decoded Text: ' + decodedText;
}
