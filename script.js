// Assignment Code
var generateBtn = document.querySelector("#generate");



//Shuffle Function 
function arrShuffle(arr){
  // Input : string
  // Output : Shuffled string
  // User Fisher Yates shuffle to shuffle the string. Turns the string to array then back to string 

  
  var newPos, temp;
// Split Array
  arr = arr.split("")
  // Shuffle
  for (let i = arr.length - 1; i > 0; i--){
    newPos = Math.floor(Math.random() * (i+1))
    temp = arr[i]
    arr[i] = arr[newPos]
    arr[newPos] = temp
  }
// Rejoin
  arr = arr.join("")
  // console.log(arr)
  return arr
}

// Create the password
function generatePassword(){
  // input: ask user how long the password, what characters to use
  // output: Shuffled array using the the shuffle function

  // Types of passwords
  var lowerArr = "abcdefghijklmnopqrstuvwxyz"
  var upperArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var numArr  = "0123456789"
  var specArr = '!@#$%^&*()?'
  var pass = []

  // Prompt the user the password settings
  var passLength = prompt("choose a length of at least 8 characters and no more than 128 characters")

  console.log(typeof passLength)

  while(passLength < 7 || passLength > 129){
    passLength = prompt("choose a length of at least 8 characters and no more than 128 characters")
  }
  console.log(passLength)
  var lowerCase = confirm("Would you like Lowercase letters")
  var upperCase = confirm("Would you like uppercase letters")
  var numeric = confirm("Would you like numeric characters")
  var specialCharacters = confirm("Would you like Special characters")

  for(var i = 0; i < passLength;){
    
    if(lowerCase){
      pass+=lowerArr[Math.floor(Math.random() * lowerArr.length)]
      // console.log(pass)
      i++
      } 
    if(upperCase){
      pass+=upperArr[Math.floor(Math.random() * upperArr.length)]
      // console.log(pass)
      i++
      } 
    if(numeric){
      pass+= numArr[Math.floor(Math.random() * numArr.length)]
      // console.log(pass)
      i++
      } 
    if(specialCharacters){
      pass+= specArr[Math.floor(Math.random() * specArr.length)]
      // console.log(pass)
      i++
      }    
  }
  // console.log(pass)
  pass = arrShuffle(pass)
  pass = arrShuffle(pass)


  return pass
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
