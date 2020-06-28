// Arrays Being Used to Generate Password

var number = "1234567890".split("")
var lowercase = "abcdefghijklmnopqrstuvwxyz".split("")
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
var symbol = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~".split("")


// Parseint converts string to number

// The below function has all info for pass options

function getPasswordOptions() {

  var passwordLength = parseInt(prompt("How many characters would you like your password to be?"));

  // This if statement makes sure the password length is between 8-128 characters 

  if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt(" How many characters would you like your password to be? Must be 8-128 characters");
  }
 
  // Checks for type of inputs user would like to include in password. Used new conditional variables

  var conNumber = confirm("Would you like to include numbers?");
  var conLowercase = confirm("Would you like to include lowercase letters?");
  var conUppercase = confirm("Would you like to include uppercase letters?");
  var conSymbol = confirm("Include symbols?");

  // If  user decides to answer "no" on all the questions, we send this alert, then ask again

  if (!(conNumber || conLowercase || conUppercase || conSymbol)) {
    alert("You must select at least one input type!");

  }

  // Object w/ key value pairs

  var passwordOptions = {

    passwordLength: passwordLength,
    conNumber: conNumber,
    conLowercase: conLowercase,
    conUppercase: conUppercase,
    conSymbol: conSymbol

  }

  return passwordOptions //the return makes this object accessible later 

}

//Generates random array using Math.random() function

function getRandom(Array) {

  var randomIndex = Math.floor(Math.random() * Array.length)
  var randomElement = Array[randomIndex]
  return randomElement

}

function generatePassword() {

  var options = getPasswordOptions()
  var result = []
  var possibleChars = []
  var gauaranteedChars = []

  //these if statement are checking what parameters users chose and then randomizing them as needed

  if (options.conSymbol) {

    possibleChars = possibleChars.concat(symbol)
    gauaranteedChars.push(getRandom(symbol)) //push takes symbol and pushes it into empty array above

  }

  if (options.conNumber) {

    possibleChars = possibleChars.concat(number)
    gauaranteedChars.push(getRandom(number))

  }

  if (options.conUppercase) {

    possibleChars = possibleChars.concat(uppercase)
    gauaranteedChars.push(getRandom(uppercase))

  }

  if (options.conLowercase) {

    possibleChars = possibleChars.concat(lowercase)
    gauaranteedChars.push(getRandom(lowercase)) //push takes that symbol and pushes it into empty array

  }

  for (i = 0; i < options.passwordLength; i++) { //looking at options object and getting key value pair password length

    var possibleChar = getRandom(possibleChars)

    result.push(possibleChar)

  }

  for (i = 0; i < gauaranteedChars.length; i++) { //looking at array of gauaranteed chars and counting how long it is

    result[i] = gauaranteedChars[i]

  }

  return result.join("") //join is the opposite of split 

}

// Assignment Code

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);