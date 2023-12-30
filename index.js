function encrypt() {
    const message = document.getElementById('message').value;
    const encryptedMessage = Array.from(message).map(char => char.charCodeAt(0)).join(',');
    document.getElementById('result').innerText = `🎉 Encrypt-o-ed: ${encryptedMessage}`;
}

function decrypt() {
    const unicodeString = document.getElementById('message').value;
    const unicodeArray = unicodeString.split(',').map(code => String.fromCharCode(code));
    const decryptedMessage = unicodeArray.join('');
    document.getElementById('result').innerText = `🎈 Decrypt-o-ed: ${decryptedMessage}`;
}
