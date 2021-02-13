// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

//Function call to generate password based on user input selections
function generatePassword() {
  var passwordString = '';
  //function to take length input and validate  its length, non number and null values.
  var length = window.prompt("Please enter the length of your password. It should be atleast 8 characters.");
  while (length < 8 || length > 128 || isNaN(length)) {
    length = window.prompt("Please enter length between 8 to 128 characters");
  }

  //asking user to choose lower character
  var lowerChar = confirm("Do you want to include lowercase characters?");
  //prompt to let user choose to include upper character
  var upperChar = confirm("Do you want to include an uppercase character?");
  //prompt to let user choose to include lower character
  var specialChar = confirm("Do you want to include a special character?");
  //prompt to let user choose to include a number
  var numInput = confirm("Do you want to include a number character?");

  //Ensurin user chooses one of the options
  while (lowerChar === false && upperChar === false && specialChar === false && numInput === false) {
    lowerChar = confirm("Do you want to include lowercase characters?");
    upperChar = confirm("Do you want to include an uppercase character?");
    specialChar = confirm("Do you want to include a special character?");
    numInput = confirm("Do you want to include a number character?");
  }

  //Loop iterating over the password length entered by user and calling generateRandom function
  for (var i = 0; i < length; i++) {
    const x = generateRandom();
    passwordString += x;
  }
  return passwordString;

  //funtion to store the user choices in an array and make the function call respectively.  
  function generateRandom() {
    var choices = [];
    lowerChar === true && choices.push(getRandomLower());
    upperChar === true && choices.push(getRandomUpper());
    specialChar === true && choices.push(getRandomSpecial());
    numInput === true && choices.push(getRandomNumber());

    return choices[Math.floor(Math.random() * choices.length)];
  }
}

//function to generate a random lower case character
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
//function to generate a random upper case character
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
//function to generate a random special character
function getRandomSpecial() {
  var specialCharacters = " !@#$%^&*(){}[]=<>/,.|~?+-:;_~`'";
  return specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
}
//function to generate a random number
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}