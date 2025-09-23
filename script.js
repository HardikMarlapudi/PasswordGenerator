document.getElementById("copyBtn");
document.getElementById("passwordSlider");
document.getElementById("uppercaseLetters");
document.getElementById("lowercaseLetters");
document.getElementById("numbers");
document.getElementById("symbols");

function generatePassword() {
    const length = 10; // Fixed length of 10 characters
    const includeuppercaseletters = document.getElementById("uppercaseLetters").checked;
    const includelowercaseletters = document.getElementById("lowecaseLetters").checked;
    const includeNumbers = document.getElementById("numbers").checked;
    const includeSymbols = document.getElementById("symbols").checked;

    const uppercaseletters = "ABCDEFGHIJKLMNOPQUSTUVWXYZ";
    const lowercaseletters = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let allChars = "";
    if (includeuppercaseletters) allChars += uppercaseletters;
    if (includelowercaseletters) allChars += lowercaseletters;
    if (includeNumbers) allChars += numbers;
    if (includeSymbols) allChars += symbols;

    if (allChars === "") {
        alert("Please select at least one character type.");
        return;
    }

    let password = "";
    
    for (let i = 0; i < length; i++) {
        password += allChars.charAt(Math.floor(Math.random() * allChars.length));
    }

    document.getElementById("copyBtn").innerText = password;
}

function copy() {
    const password = document.getElementById("copyBtn").innerText;
    if (document.getElementById("copyBtn").innerText == "") {
        alert("Please update your password");
        return;
    } else {
        navigator.clipboard.writeText(password).then(() => {
            alert("Password copied");
            return;
        })
    }
}

function updateLengthValue(val) {
    document.getElementById("lengthValue").innerText = val;
}
