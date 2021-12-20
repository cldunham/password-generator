// Assignment code here

//generate element by ID, arrays of data
var generateBtn=document.getElementById("generate")
var upperCase=["A","B","C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerCase=["a","b","c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var number=["0","1","2","3","4", "5", "6", "7", "8", "9"]
var specialCharacters=["!","@", "#", "$", "%", "^", "&", "*", "(", ")", ",", ".", ":"]
var arrayofAcceptableValues=[]
var length=0
var passWord=""
var characterQuantity=""
var useUpperCase=""
var useLowerCase=""
var useNumbers=""
var useSpecialCharacters=""

//entering user prompts
var generatePassword=function(){
  characterQuantity= window.prompt("Enter a number between 8 and 128 for password length")
  useUpperCase= window.prompt("Include upper case letters, yes or no","no")
  useLowerCase= window.prompt("Include lower case letters, yes or no","no")
  useNumbers= window.prompt("Include numbers, yes or no","no")
  useSpecialCharacters= window.prompt("Include special characters, yes or no","no")

  //functions for each category
    getlength()
    getuseUpperCase()
    getuseLowerCase()
    getuseNumbers()
    getusespecialcharacters()

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
}

//getting length of password input, parse = receiving the input string, if not within the required 8-128 the user will receive an alert to try again
function getlength(){
   var characterParse=parseInt(characterQuantity)
   if(characterParse>=8&&characterParse<=128){
length=characterParse
   }else{
       alert("Not accepted, try again")
       getlength()
   }
  }

  //to use or not use upper case in the password, if yes then use
  function getuseUpperCase(){
      if(useUpperCase==="yes"||useUpperCase==="no"){
          if(useUpperCase==="yes"){
         arrayofAcceptableValues.push(upperCase)
          }
      }
  }
  
 //to use or not use lower case in the password, if yes then use
  function getuseLowerCase(){
     if(useLowerCase==="yes"||useLowerCase==="no"){
         if(useLowerCase==="yes"){
        arrayofAcceptableValues.push(lowerCase)
         }
     }
 }

 //to use or not use numbers in the password, if yes then use
 function getuseNumbers(){
     if(useNumbers==="yes"||useNumbers==="no"){
         if(useNumbers==="yes"){
        arrayofAcceptableValues.push(number)
         }
     }
 } 
 
  //to use or not use special characters in the password, if yes then use
 function getusespecialcharacters(){
     if(useSpecialCharacters==="yes"||useSpecialCharacters==="no"){
         if(useSpecialCharacters==="yes"){
        arrayofAcceptableValues.push(specialCharacters)
         }
     }
 } 

 //write password to #password field
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = passWord;

}

//add event listener to generate button
generateBtn.addEventListener("click", writePassword)