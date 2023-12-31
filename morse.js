// Function to encode text to Morse code
function textToMorse(text) {
    const morseCodeMap = {
        'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....',
        'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.',
        'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
        'Y': '-.--', 'Z': '--..',
        '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....', '6': '-....',
        '7': '--...', '8': '---..', '9': '----.',
        ' ': '/'
    };

    const uppercasedText = text.toUpperCase();
    return uppercasedText.split('').map(char => morseCodeMap[char] || '').join(' ');
}

// Function to decode Morse code to text
function morseToText(morseCode) {
    const morseCodeMap = {
        '.-': 'A', '-...': 'B', '-.-.': 'C', '-..': 'D', '.': 'E', '..-.': 'F', '--.': 'G', '....': 'H',
        '..': 'I', '.---': 'J', '-.-': 'K', '.-..': 'L', '--': 'M', '-.': 'N', '---': 'O', '.--.': 'P',
        '--.-': 'Q', '.-.': 'R', '...': 'S', '-': 'T', '..-': 'U', '...-': 'V', '.--': 'W', '-..-': 'X',
        '-.--': 'Y', '--..': 'Z',
        '-----': '0', '.----': '1', '..---': '2', '...--': '3', '....-': '4', '.....': '5', '-....': '6',
        '--...': '7', '---..': '8', '----.': '9',
        '/': ' '  // Space
    };

    const morseWords = morseCode.split('   ');  // Three spaces represent a word separator
    const decodedText = morseWords.map(word => {
        const morseChars = word.split(' ');
        return morseChars.map(char => morseCodeMap[char] || '').join('');
    }).join(' ');

    return decodedText;
}

// Function to encode text to Morse code and update output textarea
function encodeMorse() {
    const inputText = document.getElementById('morseInputText').value;
    const encodedText = textToMorse(inputText);
    document.getElementById('morseOutputText').value = 'Morse Code: ' + encodedText;
}

// Function to decode Morse code to text and update output textarea
function decodeMorse() {
    const inputText = document.getElementById('morseInputText').value;
    const decodedText = morseToText(inputText);
    document.getElementById('morseOutputText').value = 'Decoded Text: ' + decodedText;
}
