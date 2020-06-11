// Assignment Code 
var generateBtn = document.querySelector("#generate");
var passwordLengthBox = document.querySelector("#pLength");
var passwordLengthError = document.querySelector("#pError");
var characterError = document.querySelector("#cError");


var lowerBox = document.querySelector("#lowerBox");
var upperBox = document.querySelector("#upperBox");
var numericBox = document.querySelector("#numericBox");
var specialBox = document.querySelector("#specialBox");

var checkBoxes = [ lowerBox , upperBox , numericBox , specialBox];


function checkCharacterTypes() {
  var checked = false;
  for(var i = 0; i < checkBoxes.length; i++) {
    if(checkBoxes[i].checked == true) {
      checked = true;
    }
  }
  
  if(checked == true){
    characterError.style.display = "none";
    
  }else {
    characterError.style.display = "block"
  }


  return checked;
}

checkCharacterTypes();

passwordLengthBox.addEventListener("input", function() {
  if(passwordLengthBox.value < 8 || passwordLengthBox.value > 128) { 
    passwordLengthError.style.display = "block";
  }
  else {
    passwordLengthError.style.display = "none";
  }
});

// Add event listener to generate button
generateBtn.addEventListener("click", myFunction);

function myFunction () {
    alert("you clicked me");
}


// Write password to the #password input
function writePassword() {
  //we want to know the length and if it satisfies length requirements?
  var length = passwordLengthBox.value;

  //check what character types are checked


  //build a for loop going for that certain length, randomly generating characters based on the types checked

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
