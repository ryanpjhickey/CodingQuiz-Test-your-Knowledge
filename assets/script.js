var timerA = document.querySelector('#timer');

var startQuiz = document.querySelector('#start');

var hide = document.querySelector('#hide');

var hide2 = document.querySelector('#hide2');

var counter = 61;

startQuiz.addEventListener('click', setCounterText);
startQuiz.addEventListener('click', addQ1)

timerA.innerHTML = "60";

function setCounterText() { 
  console.log(counter);
  counter--;
  timerA.innerHTML = counter;
  if(counter === 60){
    countdown = setInterval(setCounterText, 1000);
  } else if(counter <= -1){
      timerA.innerHTML = "0";
      clearInterval(countdown);
    }
  };


  var a1q1 = document.querySelector('#a1q1')
  var a2q1 = document.querySelector('#a2q1')
  var a3q1 = document.querySelector('#a3q1')
  var a4q1 = document.querySelector('#a4q1')
  var a1q2 = document.querySelector('#a1q2')
  var a1q2 = document.querySelector('#a2q2')
  var a1q2 = document.querySelector('#a3q2')
  var a1q2 = document.querySelector('#a4q2')




  a1q1.style.display = "none"
  a2q1.style.display = "none"
  a3q1.style.display = "none"
  a4q1.style.display = "none"
  a1q2.style.display = "none"
  a2q2.style.display = "none"
  a3q2.style.display = "none"
  a4q2.style.display = "none"
  a1q3.style.display = "none"
  a2q3.style.display = "none"
  a3q3.style.display = "none"
  a4q3.style.display = "none"

  function addQ1() {
    startQuiz.style.display = 'none';
    hide.style.display = 'none';
    hide2.style.display = 'none';
    var q1add = document.querySelector('#q1');
    var q1 = document.createElement("p");
    q1.textContent = "Commonly used datatypes do NOT include:";
    q1add.appendChild(q1);
    var q1a1 = document.querySelector('#a1q1');
    var q1ans1 = document.createElement("div");
    q1ans1.textContent = "1. strings";
    q1a1.appendChild(q1ans1);
    q1a1.style.display = 'inline';
    a1q1.addEventListener('click', wrongAns)
    var q1a2 = document.querySelector('#a2q1');
    var q1ans2 = document.createElement("div");
    q1ans2.textContent = "2. booleans";
    q1a2.appendChild(q1ans2);
    q1a2.style.display = 'inline';
    a2q1.addEventListener('click', wrongAns)
    var q1a3 = document.querySelector('#a3q1');
    var q1ans3 = document.createElement("div");
    q1ans3.textContent = "3. cows";
    q1a3.appendChild(q1ans3);
    q1a3.style.display = 'inline';
    a3q1.addEventListener('click', wrongAns)
    var q1a4 = document.querySelector('#a4q1');
    var q1ans4 = document.createElement("div");
    q1ans4.textContent = "4. JQuery";
    q1a4.appendChild(q1ans4);
    q1a4.style.display = 'inline';
    a4q1.addEventListener('click', wrongAns)
    a1q1.addEventListener('click', addQ2)
    a2q1.addEventListener('click', addQ2)
    a3q1.addEventListener('click', addQ2)
    a4q1.addEventListener('click', addQ2)
  }

  function wrongAns() {
    var incorrect = document.querySelector('#wrong');
    var wrong = document.createElement('p');
    wrong.textContent = 'Wrong!';
    incorrect.appendChild(wrong);
    incorrect.style.display ='inline'
    counter = counter - 10;
  }

  function addQ2() {
    a1q1.display.style = 'none'
    a2q1.display.style = 'none'
    a3q1.display.style = 'none'
    a4q1.display.style = 'none'
    q1.display.style = 'none'
    var q2add = document.querySelector('#q2');
    var q2 = document.createElement("p");
    q2.textContent = "Q2 placeholder";
    q2add.appendChild(q2);
    var q2a1 = document.querySelector('#a1q2');
    var q2ans1 = document.createElement("div");
    q2ans1.textContent = "1. strings";
    q2a1.appendChild(q1ans1);
    q2a1.style.display = 'inline';
    a1q2.addEventListener('click', wrongAns)
  }