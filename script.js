// Assignment code here
//generate element by ID, arrays of data
var generateBtn=document.getElementById("generate")
var upperCase=["A","B","C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerCase=["a","b","c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var number=["0","1","2","3","4", "5", "6", "7", "8", "9"]
var specialCharactors=["!","@", "#", "$", "%", "^", "&", "*", "(", ")", ",", ".", ":"]
var arrayofAcceptableValues=[]
var length=0
var passWord=""
var charactorQuantity=""
var useUpperCase=""
var useLowerCase=""
var useNumbers=""
var useSpecialCharactors=""

//entering prompts
var generatePassword=function(){
  charactorQuantity= window.prompt("Enter a number between 8 and 128 for password length")
  useUpperCase= window.prompt("Include upper case letters, yes or no","no")
  useLowerCase= window.prompt("Include lower case letters, yes or no","no")
  useNumbers= window.prompt("Include numbers, yes or no","no")
  useSpecialCharactors= window.prompt("Include special characters, yes or no","no")

  //utilize the function for each category
  getcharactorQuantity()
     getuseUpperCase()
     getuseLowerCase()
     getuseNumbers()
     getusespecialcharactors()

//using Math.floor and Math.random to console log a random password
     if(arrayofAcceptableValues.length>0){
      for(var i=0;i<length;i++){
 var pointToAcceptableValues= Math.floor( Math.random()*arrayofAcceptableValues.length)
 var addarrayofAcceptableValues=arrayofAcceptableValues[pointToAcceptableValues]
 var results=Math.floor(Math.random()*addarrayofAcceptableValues.length)
 passWord+=addarrayofAcceptableValues[results]
 console.log(passWord)
      }
}    





    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
Starting Over

generateEl.addEventListener('click', () - {
        const length = lengthEl.value;
        const hasLower = lowercaseEl.checked;
        const hasUpper = uppercaseeEl.checked;
        const hasNumber = numbersEl.checked;
        const hasSymbol = symbolEl.checked;

//console.log(typeof length);
        //// separate function for password generation, not longer just getting he values.
resultE1.innerText = generatePassword(hasLower, hasUpper, HasNumber, hasCharcter, length);
});

//generate password function
function generatePassword(lower, upper, number, character, length) {
                      // 1. INit pw var
                      //2. Filter out unchecked types
                      //3. Loop over the length and call a generator function for each type
                      //4. Add final password to the password variabel and return it

}

let generatePassword = '';
 const typesCount = lower + upper + number + character;
//console.log('typesCount: ', typesCount);                                       21:41
 const types Arr = [{ lower }, { upper }, { number }, { charcter}].filter(item => Object.values(item)[0]
);

//console.log('typesArr: ', typesArr);

//types count is equal to number of boxes
if(typesCount === 0) {
  return'';
}

//generating different characters
for(let i = 0; i < length; i += typesCount) {
   typesArr.array.forEach(type => {
      const funcName = Object.keys(type)[0];
     delete? console.log('funcName: ', funcName);
      
     generatePassword += randomFunc[funcName]();
   });
}
const finalPassword = (generatedPassword.slice(0, length));

return finalPassword;
}


function getRandomLower() {
 //console.log(String.fromCharCode(97)); from browser character set https://net-comber.com/charset.html
     return String.fromCharCode(Math.floor(Math.random() *26) + 97);
} 
console.log(getRandomLower()); 

function getRandomUpper() {
    //console.log(String.fromCharCode(97)); from browser character set https://net-comber.com/charset.html
return String.fromCharCode(Math.floor(Math.random() *26) + 65);
} 
console.log(getRandomUpper()); 

function getRandomNumber() {
    //console.log(String.fromCharCode(97)); from browser character set https://net-comber.com/charset.html
return String.fromCharCode(Math.floor(Math.random() *10) + 48);
} 
 console.log(getRandomNumber());

function getRandomCharacter() {
    //console.log(String.fromCharCode(97)); from browser character set https://net-comber.com/charset.html
const character = '!@#$%^&*(){}<>?><,.';
return character[Math.floor(Math.random() * character.length)];
//instead of numbers use math.floor to round down and math.random to randomize the characters and multiply it by the length of the character string
} 
 console.log(getRandomCharacter());



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