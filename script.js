let startButton = document.querySelector("#start");
let choices = document.querySelector("#choices");
let timer = document.querySelector("#time");
let questionTitle = document.querySelector("#question-title");
let startScreenContainer = document.querySelector("#start-screen")
let questionsContainer = document.querySelector("#questions");
let answer1 = document.querySelector("#answer1");
let answer2 = document.querySelector("#answer2");
let answer3 = document.querySelector("#answer3");
let endscreen = document.querySelector("#end-screen")
let finalscore = document.querySelector("#final-score")

let questionsArray = [{question: "What does JS stand for", answers: ["JavaScript", "JunctionStart", "JavaStart"], correctAnswer: 0},
{question: "exQ2", answers: ["Ex1-1", "Ex2", "Ex3"], correctAnswer: 2},
{question: "exQ3", answers: ["Ex1-2", "Ex2", "Ex3"], correctAnswer: 2}
]

let currentQuestion;
let currentChoices = 0;
let timerCount = 90;

startButton.addEventListener("click", function (event) {
  
  let intervalID = setInterval(function () {
    timerCount--
    timer.textContent = timerCount
    if(timerCount === 0) {
      clearInterval(intervalID);}
    }, 1000)
    
    startScreenContainer.classList.add("hide")
    questionsContainer.classList.remove("hide")
    
    setQuestionandanswers()
   
  })
  
let questionCount = 0;
function setQuestionandanswers(event) {
  if (questionCount <= questionsArray.length - 1){
    currentQuestion = questionsArray[questionCount].question
  
  questionTitle.innerText = currentQuestion

  currentChoices = questionsArray[questionCount].answers

  answer1.textContent = currentChoices[0];
  answer2.textContent = currentChoices[1];
  answer3.textContent = currentChoices[2];
  }
  else{
    clearInterval(timer)
    finalscore.textContent = timerCount
    endscreen.classList.remove("hide")
    questionsContainer.classList.add("hide")
  }
}


answer1.addEventListener("click", function(event) {
  questionCount++
  // questionsArray[questionCount].correctAnswer
  setQuestionandanswers(event.target.textContent)

  if (questionsArray[0].answers === questionsArray[0].correctAnswer) {
    return true
  }
  else {
    return false;
    timerCount -10;
  }
})

