// var counter = 60
//function countdown(){
//  counter--;
//  if(counter === 0) {
//    clearInterval(strtcd);
//  };
//  return counter
//};

//var strtcd = setInterval(countdown, 1000);

//document.querySelector('#start').addEventListener('click', countdown)

//function strttimer() {
//  var strt1 = countdown();
//  document.querySelector('#timeleft').value = strt1;
//}

//var generateBtn = document.querySelector('#generate');

//function generatePassword(event) {
//  var counter = 60
//  counter--;
//  if(counter === 0) {
//    console.log("blastoff");
//    clearInterval(start);
//  }
//};

//var start = setInterval(generatePassword, 1000)

//function writePassword() {
//  var password = generatePassword();
//  document.querySelector('#password').value = password;
//}

// Add event listener to generate button
//generateBtn.addEventListener('click', writePassword);

var timerA = document.querySelector('#timer');

var startQuiz = document.querySelector('#start');

var counter = 60;

startQuiz.addEventListener('click', setCounterText);

function setCounterText() { 
  console.log(counter);
  counter--;
  if(counter === -1){
    clearInterval(countdown);
  } else {
    timerA.innerHTML = counter};
  if(counter === 59){
    var countdown = setInterval(setCounterText, 1000)
  }
};

