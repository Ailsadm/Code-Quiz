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
let submitbutton = document.querySelector("#submit")
let initialsE1 = document.querySelector("#initials")
let feedbackE1 = document.querySelector("#feedback")

let questionsArray = [{question: "What does JS stand for?", answers: ["JavaScript", "JunctionStart", "JavaStart"], correctAnswer: "JavaScript"},
{question: "What are people who write computer code called?", answers: ["Manufacturers", "Programmers", "Professors"], correctAnswer: "Programmers"},
{question: "What word describes the set of instructions a computer needs to work?", answers: ["Agenda", "Blueprint", "Program"], correctAnswer: "Program"}
]

let currentQuestion;
let currentChoices = 0;
let timerCount = 90;
let questionCount = 0;

startButton.addEventListener("click", function (event) {
  
  let intervalID = setInterval(function () {
    timerCount--
    timer.textContent = timerCount
    if(timerCount === 0) {
      clearInterval(intervalID);
      if(questionCount < 3){
      endscreen.classList.remove("hide")
    }
      questionsContainer.classList.add("hide")
      finalscore.textContent = 0;
    }
  
    }, 1000)
    
    startScreenContainer.classList.add("hide")
    questionsContainer.classList.remove("hide")
    
    setQuestionandanswers()
   
  })
  

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
    finalscore.textContent = timerCount
    endscreen.classList.remove("hide")
    questionsContainer.classList.add("hide")
  }
}


answer1.addEventListener("click", function(event) {
  questionCount++
  if (event.target.textContent !== questionsArray[0].correctAnswer) {
    timerCount = timerCount -10;
  }
  console.log(event.target.textContent)
  setQuestionandanswers()

})
answer2.addEventListener("click", function(event) {
  questionCount++
  if (event.target.textContent !== questionsArray[1].correctAnswer) {
    timerCount = timerCount -10;
  }
  console.log(event.target.textContent)
  setQuestionandanswers()

})
answer3.addEventListener("click", function(event) {
  questionCount++
  if (event.target.textContent !== questionsArray[2].correctAnswer) {
    timerCount = timerCount -10;
  }
  console.log(event.target.textContent)
  setQuestionandanswers()

})

submitbutton.addEventListener("click", function(){

  feedbackE1.classList.remove("hide")
  endscreen.classList.add("hide")

  let oldscores = []
  if(localStorage.scores !== undefined){
    oldscores = JSON.parse(localStorage.scores)
  }
  
  oldscores.push({name: initialsE1.value, score: timerCount})


  localStorage.setItem( "scores", JSON.stringify(oldscores))
  let latestScores = JSON.parse(localStorage.scores)

  for (let i = 0; i < latestScores.length; i++) {
    const element = latestScores[i];
    let item1 =  document.createElement("p")
    item1.textContent = element.name + "-" + element.score
    feedbackE1.appendChild(item1)
  }


  console.log(JSON.parse(localStorage.scores))
})