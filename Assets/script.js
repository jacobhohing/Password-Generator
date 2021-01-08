// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword()
{
  
  var passwordCharTypes = ['Lowercase','Uppercase','Numeric','Special']
  var userCharChoices = [];

  var regCharOptions = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var specialCharOptions = ['!','#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[',']','^','_','~','|','{','}'];
  var thePassword = ''

  passwordChar = prompt('How Many Characters Would you Like? Please Enter a Number Between 8 and 128');

  if (parseInt(passwordChar) > 7 && parseInt(passwordChar) < 129)
  {
    for (var i = 0; i < passwordCharTypes.length; i++) 
    {
      var confirmChar = confirm('Would you like to add ' + passwordCharTypes[i] + ' Characters?');
     
      if (confirmChar) {
          userCharChoices.push(passwordCharTypes[i]);
      }
    }

    if (userCharChoices.length == 0)
    {
      alert("You Must Select Atleast one Character Type to Include!");
      return generatePassword();
    }   
  }  
  else
  {
    alert("Make Sure You Enter a Number Between 8 and 128!");
    return generatePassword();
  }

  
  for (var i = 0; i < parseInt(passwordChar); i++) 
  {
    if (userCharChoices.length > 1)
    {
      var getRandomType = Math.floor(Math.random() * userCharChoices.length);
      
      if (userCharChoices[getRandomType] == 'Lowercase')
      {
        var getRandomLowercase = regCharOptions[Math.floor(Math.random() * regCharOptions.length)];
        var thePassword = thePassword + getRandomLowercase;
      }
      else if (userCharChoices[getRandomType] == 'Uppercase')
      {
        var getRandomUppercase = regCharOptions[Math.floor(Math.random() * regCharOptions.length)];
        var thePassword = thePassword + getRandomUppercase.toUpperCase();
      }
      else if (userCharChoices[getRandomType] == 'Numeric')
      {
        var getRandomNumeric = Math.floor(Math.random() * 10);
        var thePassword = thePassword + getRandomNumeric;
      }
      else if (userCharChoices[getRandomType] == 'Special')
      {
        var getRandomSpecial = specialCharOptions[Math.floor(Math.random() * specialCharOptions.length)];
        var thePassword = thePassword + getRandomSpecial;
      }
    }
    else
    {
      if (userCharChoices[0] == 'Lowercase')
      {
        var getRandomLowercase = regCharOptions[Math.floor(Math.random() * regCharOptions.length)];
        var thePassword = thePassword + getRandomLowercase;
      }
      else if (userCharChoices[0] == 'Uppercase')
      {
        var getRandomUppercase = regCharOptions[Math.floor(Math.random() * regCharOptions.length)];
        var thePassword = thePassword + getRandomUppercase.toUpperCase();
      }
      else if (userCharChoices[0] == 'Numeric')
      {
        var getRandomNumeric = Math.floor(Math.random() * 10);
        var thePassword = thePassword + getRandomNumeric;
      }
      else if (userCharChoices[0] == 'Special')
      {
        var getRandomSpecial = specialCharOptions[Math.floor(Math.random() * specialCharOptions.length)];
        var thePassword = thePassword + getRandomSpecial;
      }
    }
  }

  return thePassword
 
}

// Write password to the #password input
function writePassword() {
  
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
