const button = document.querySelector("#generate");
const textField = document.querySelector("#password");

let lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
let uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",];
let symbol = ["!", "@", "#", "$", "%", "^", "&", "*", ",", "/",];

let param = []

function randomize(min, max) {
    let random = Math.random()
    return Math.floor(min * (1 - random) + random * max);
}

function randomItem(list) {
    return list[randomize(0, list.length)];
}

function createPassword() {
    let passwordLength = window.prompt("How many characters would you like your password to be?");
    let desiredLength = parseInt(passwordLength);
    console.log(desiredLength);
    if (isNaN(desiredLength)) {
        window.alert("Please enter a valid number.");
        return;
    }
    if (desiredLength < 8 || desiredLength > 128) {
        window.alert("Password must be between 8 and 128 characters.");
        return;
    }
    let yesLowercase = window.confirm("Would you like to include lowercase letters?");
    let yesUppercase = window.confirm("Would you like to include uppercase letters?");
    let yesNumbers = window.confirm("Would you like to include numbers?");
    let yesSpecial = window.confirm("Would you like to include special characters?");

    if (yesLowercase === true) {
        param.push(lowercase)
    }
    if (yesUppercase === true) {
        param.push(uppercase)
    }
    if (yesNumbers === true) {
        param.push(numbers)
    }
    if (yesSpecial === true) {
        param.push(symbol)
    }
    if(param.length === 0){
        param.push(lowercase)
    }
console.log(param);

    let password = ""

    for (let i = 0; i < desiredLength; i++) {
        let randomParam = randomItem(param);
        let finalParam = randomItem(randomParam);
        password += finalParam;
    }

return password;

}

function renderPassword () {
    let finalPassword = createPassword();
    textField.value = finalPassword;
}

button.addEventListener("click", renderPassword);