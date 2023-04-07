var characterLength = 12;
var choiceArr = [];

var upperCaseArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerCaseArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var specialCharArr = ['!','@','#','$','%','&','*'];
var numberArr =['0','1','2','3','4','5','6','7','8','9'];



function getResponse() {
  choiceArr = [];

  characterLength = parseInt(prompt("How many characters do you want for your password? (8-128 characters"));

  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
      alert("Character length must be a number, between 8-128 digits. Please try again.");
      return false;
    }

if(confirm("Do you want uppercase letters in your password?")) {
   choiceArr = choiceArr.concat(upperCaseArr);
}
if(confirm("Do you want lowercase letters in your password?")) {
  choiceArr = choiceArr.concat(lowerCaseArr);
}
if(confirm("Do you want special characters in your password?")) {
  choiceArr = choiceArr.concat(specialCharArr);
}
if(confirm("Do you want numbers in your password?")) {
  choiceArr = choiceArr.concat(numberArr);
}
return true;
}
function generatePassword() {
  var password = "";
  for(var i = 0; i < characterLength; i++) {
      var randomLetter = Math.floor(Math.random() * choiceArr.length);
      password = password + choiceArr[randomLetter];
  }
  return password;
}

var generateBtn = document.querySelector("#generate");


function writePassword() {
   var correctResponse = getResponse();
   var passwordText = document.querySelector("#password");

   if(correctResponse) {
   var newPassword = generatePassword();
   passwordText.value = newPassword;
} else {
    passwordText.value = "";

  }
}

generateBtn.addEventListener("click", writePassword);