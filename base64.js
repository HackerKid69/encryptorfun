// Function to encode the input text to Base64
function encode() {
    // Step 1: Get the input text from the 'inputText' textarea
    const inputText = document.getElementById('inputText').value;

    // Step 2: Encode the input text to Base64 using the btoa function
    const encodedText = btoa(inputText);

    // Step 3: Display the encoded text in the output textarea
    document.getElementById('outputText').value = 'Encoded Text: ' + encodedText;
}

// Function to decode the Base64 text
function decode() {
    // Step 1: Get the input text from the 'inputText' textarea
    const inputText = document.getElementById('inputText').value;

    let decodedText;

    // Step 2: Try to decode the Base64 text using the atob function
    try {
        decodedText = atob(inputText);
    } catch (error) {
        // Step 3: Handle an error if the input is not valid Base64
        decodedText = 'Invalid Base64 input';
    }

    // Step 4: Display the decoded text in the output textarea
    document.getElementById('outputText').value = 'Decoded Text: ' + decodedText;
}
