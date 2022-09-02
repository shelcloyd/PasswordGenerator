// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
  if (!max) {
    max = min;
    min = 0;
  }
  var rand = Math.random()
  return Math.floor(min * (1 - rand) + rand * max);
}

function getRandomItem(list) {
  return list[randomInt(0, list.length - 1)];
}

function generatePassword() {

  // 1. prompt the user for the password criteria
  var userInput = window.prompt("How many characters would you like your password to contain?");

  var passwordLength = parseInt(userInput);

  if (isNaN(passwordLength)) {
    window.alert("Please enter a valid number.");
    return;
  }

  //    a. password length 8 < 128
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password must be between 8 and 128 characters.");
    return;
  }

  //    b. lowercase, uppercase, numbers, special characters
  var userWantsLowercase = window.confirm("Include lowercase?");
  var userWantsUppercase = window.confirm("Include uppercase?");
  var userWantsNumbers = window.confirm("Include numbers?");
  var userWantsSymbols = window.confirm("Include special characters?");

  var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercaseList = [];
  var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var symbolList = ["!", "@", "#", "$", "%", "^", "&", "*", "/", "."];

  var optionsCart = [];

  for (var i = 0; i < lowercaseList.length; i++) {
    uppercaseList[i] = lowercaseList[i].toUpperCase();
  }


  // 2. validate the input
  if (userWantsNumbers === true) {
    optionsCart.push(numberList);
  }
  if (userWantsUppercase === true) {
    optionsCart.push(uppercaseList);
  }
  if (userWantsLowercase === true) {
    optionsCart.push(lowercaseList);
  }
  if (userWantsSymbols === true) {
    optionsCart.push(symbolList);
  }
  if (optionsCart.length === 0) {
    optionsCart.push(lowercaseList);
  }
    // 3. generate password
    var generatedPassword = "";

    for (var i = 0; i < passwordLength; i++) {
      var randomList = getRandomItem(optionsCart);
      var randomCharacter = getRandomItem(randomList);
      generatedPassword += randomCharacter;
    }

    // 4. display password on the page
    return generatedPassword;

  }

  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

  }

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
