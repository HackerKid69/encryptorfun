function encrypt() {
    const message = document.getElementById('message').value;
    const encryptedMessage = Array.from(message).map(char => char.charCodeAt(0)).join(',');
    document.getElementById('result').innerText = `Encrypted: ${encryptedMessage}`;
}

function decrypt() {
    const unicodeString = document.getElementById('message').value;
    const unicodeArray = unicodeString.split(',').map(code => String.fromCharCode(code));
    const decryptedMessage = unicodeArray.join('');
    document.getElementById('result').innerText = `Decrypted: ${decryptedMessage}`;
}
