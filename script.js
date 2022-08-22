// Assignment code here

let letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let numbers = ['0','1','2','3','4','5','6','7','8','9'];
let specialCharacters = ['!','@','#','$','%','?',';','*'];
let generatedPassword = "";

function generatePassword() {
  var passwordlength = getPasswordLength()
  var uppercase = window.confirm("Would you like the password to have uppercase?");
  var numeric = window.confirm("Would you like the password to have numeric values?");
  var specialChar = window.confirm("Would you like the password to have special characters?");
  generatedPassword = "";

  for (let i = 0; i <= passwordlength; i++) {
    if (uppercase && generatedPassword.length < passwordlength) {
      var index = Math.floor(Math.random() * letters.length);
      generatedPassword += letters[index].toUpperCase();
      i++;
    }
    if (numeric && generatedPassword.length < passwordlength) {
      var index = Math.floor(Math.random() * numbers.length);
      generatedPassword += numbers[index];
      i++;
    }

    if (specialChar && generatedPassword.length < passwordlength) {
      var index = Math.floor(Math.random() * specialCharacters.length);
      generatedPassword += specialCharacters[index];
      i++;
    }

    if (generatedPassword.length < passwordlength) {
      var index = Math.floor(Math.random() * letters.length);
      generatedPassword += letters[index];
      i = generatedPassword.length;
    }
  }

  return generatedPassword;
}

function getPasswordLength() {
  let passlength = prompt("Please choose the password length betwen 8 and 128 characters");
  if (!passlength || isNaN(passlength) || passlength < 8 || passlength > 128 ) {
    window.alert("Must input numbers between 8 and 128");
    generatePassword();
  }
  return passlength;
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
