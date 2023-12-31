function encodeUnicode() {
    const inputText = document.getElementById('unicodeInputText').value;
    const encodedText = textToUnicode(inputText);
    document.getElementById('unicodeOutputText').value = 'Encoded Unicode: ' + encodedText;
}

function decodeUnicode() {
    const inputText = document.getElementById('unicodeInputText').value;
    const decodedText = unicodeToText(inputText);
    document.getElementById('unicodeOutputText').value = 'Decoded Text: ' + decodedText;
}

function textToUnicode(text) {
    return Array.from(text).map(char => '\\u' + char.charCodeAt(0).toString(16).padStart(4, '0')).join('');
}

function unicodeToText(unicodeText) {
    return unicodeText.replace(/\\u[\dA-Fa-f]{4}/g, match =>
        String.fromCharCode(parseInt(match.substr(2), 16))
    );
}
