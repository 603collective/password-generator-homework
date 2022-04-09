var generateBtn = document.querySelector("#generate");

var passwordLength;
var confirmUpper;
var confirmLower;
var confirmSpecial;
var confirmNumber;
var userCriteria;


var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var blankLower = [];
var toLower = function (x){
  return x.toLowerCase();
};
lowerCase = upperCase.map(toLower);


var special = ['~','!','@','$','%','^','&','*','(',')','_','+','=','<','>','[',']','{','}',',','.','?','/',';',':'];
var numbers = [0,1,2,3,4,5,6,7,8,9];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){

  passwordLength = prompt("Please enter desired password length, must be between 8 and 128 characters");
  console.log ("The length of your password is "+ passwordLength + "characters");

  if(!passwordLength){
    alert("Please enter value");

  } else if (passwordLength < 8 || passwordLength > 128){
    passwordLength = prompt ( "Please select a length between 8 and 128 characters");
    console.log ("Password length" + passwordLength);
  }else { 
    confirmUpper = confirm("Would you like this password to contain Upper case letters?");
    console.log("Lower case " + confirmUpper);
    confirmLower = confirm("Would you like this password to contain Lower case letters?");
    console.log("Upper case " + confirmLower);
    confirmSpecial = confirm("Would you like this password to contain special characters?");
    console.log("Number " + confirmSpecial);
    confirmNumber = confirm("Would you like this password to contain numbers ?");
    console.log("Special Character " + confirmNumber);

  };

  
  if (!confirmLower && !confirmUpper && !confirmNumber && !confirmSpecial) {
    userCriteria = alert("You must choose a criteria");

  } else if (confirmLower && confirmUpper && confirmNumber && confirmSpecial) {
    userCriteria = lowerCase.concat(upperCase, numbers, special);
    console.log(userCriteria);
  }
  
  else if (confirmLower && confirmUpper && confirmNumber) {
    userCriteria = lowerCase.concat(upperCase, numbers);
    console.log(userCriteria);
  }
  else if (confirmLower && confirmUpper && confirmSpecial) {
    userCriteria = lowerCase.concat(upperCase, special);
    console.log(userCriteria);
  }
  else if (confirmLower && confirmNumber && confirmSpecial) {
    userCriteria = lowerCase.concat(numbers, special);
    console.log(userCriteria);
  }
  else if (confirmUpper && confirmNumber && confirmSpecial) {
    userCriteria = upperCase.concat(numbers, special);
    console.log(userCriteria);
  }

  else if (confirmLower && confirmUpper) {
    userCriteria = lowerCase.concat(upperCase);
    console.log(userCriteria);
  }
  else if (confirmLower && confirmNumber) {
    userCriteria = lowerCase.concat(numbers);
    console.log(userCriteria);
  }
  else if (confirmLower && confirmSpecial) {
    userCriteria = lowerCase.concat(special);
    console.log(userCriteria);
  }
  else if (confirmUpper && confirmNumber) {
    userCriteria = upperCase.concat(numbers);
    console.log(userCriteria);
  }
  else if (confirmUpper && confirmSpecial) {
    userCriteria = upperCase.concat(special);
    console.log(userCriteria);
  }
  else if (confirmNumber && confirmSpecial) {
    userCriteria = numbers.concat(special);
    console.log(userCriteria);
  }
 
  else if (confirmLower) {
    userCriteria = lowerCase;
    console.log(userCriteria);
  }
  else if (confirmUpper) {
    userCriteria = blankUpper.concat(upperCase);
    console.log(userCriteria);
  }
  else if (confirmNumber) {
    userCriteria = numbers;
    console.log(userCriteria);
  }
  else if (confirmSpecial) {
    userCriteria = special;
    console.log(userCriteria);
  };

  var passwordBlank = [];
  

  for (var i = 0; i < passwordLength; i++) {
    var allChoices = userCriteria[Math.floor(Math.random() * userCriteria.length)];
    passwordBlank.push(allChoices);
    console.log(allChoices);
  }


  var password = passwordBlank.join("");
  console.log("Your New Pasword is: " + password);
  return password;
  
}

