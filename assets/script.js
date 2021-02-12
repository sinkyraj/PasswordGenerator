
//generate button click event and function to random generate password
document.getElementById('generate').addEventListener('click', event => {

 //Array for numbers, lowercase letters, uppercase letters and symbols
  let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  let lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  let uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  let symbols = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
  

  //Prompt to ask the length of the the password
  let haslength = prompt('how long your password would be?')
  haslength = parseInt(haslength)

  if (haslength < 8 || haslength > 128) {
    alert('Password must be between 8-128')
    return;

  }

  //Must choose the length of the password
  if (isNaN(haslength)) {
    alert('Length must be a number')
    return;
  }

  //Prompts to select criteria for the password
  let haslowercase = confirm('Do you want lowercase character?')

  let hasuppercase = confirm('Do you want uppercase character?')

  let hasnumber = confirm('Do you want Number?')

  let hassymbols = confirm('Do you want Symbols?')

  if (haslowercase === false && hasuppercase === false && hassymbols === false && hasnumber === false) {
    alert('You have to choose atleast one')
    return;

  }

//Concat the user selected lowercase letters, uppercase letters, numbers and symbols to place value
  let generateUsername = ""

  let Charset = []

  if (haslowercase) {
    Charset = Charset.concat(lowercase)
    generateUsername += lowercase[Math.floor(Math.random() * lowercase.length)]
  }

  if (hasuppercase) {
    Charset = Charset.concat(uppercase)
    generateUsername += uppercase[Math.floor(Math.random() * uppercase.length)]
  }

  if (hasnumber) {
    Charset = Charset.concat(numbers)
    generateUsername += numbers[Math.floor(Math.random() * numbers.length)]
  }
  if (hassymbols) {
    Charset = Charset.concat(symbols)
    generateUsername += symbols[Math.floor(Math.random() * symbols.length)]
  }
  let Diff = haslength - generateUsername.length


 //generating password based on user criteria
  for (let i = 0; i < Diff; i++) {
    generateUsername += Charset[Math.floor(Math.random() * Charset.length)]
  }


  //textarea get the password value from here
  let PasswordEle = document.getElementById('password')
  PasswordEle.value = generateUsername


})
