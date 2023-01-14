let startButton = document.querySelector("#start");
let choices = document.querySelector("#choices");
let timer = document.querySelector("#time");
let questionTitle = document.querySelector("#question-title");
let startScreenContainer = document.querySelector("#start-screen")
let questionsContainer = document.querySelector("#questions");

let questionsArray = [{question: "exQ1", answers: ["Ex1", "Ex2", "Ex3"], correctAnswer: 2},
{question: "exQ2", answers: ["Ex1", "Ex2", "Ex3"], correctAnswer: 2},
{question: "exQ3", answers: ["Ex1", "Ex2", "Ex3"], correctAnswer: 2}
]

let currentQuestion = 0;
let currentChoices = 0;

startButton.addEventListener("click", function (event) {
  let timerCount = 90;
  
  let intervalID = setInterval(function () {
    timerCount--
    timer.textContent = timerCount
    if(timerCount === 0) {
      clearInterval(intervalID);}
    }, 1000)
    
    startScreenContainer.classList.add("hide")
    questionsContainer.classList.remove("hide")
    
    eachquestion()
    choicesSelection()
  })
  
  
function eachquestion(event) {
  // event.preventDefault()
  // const question = questionsArray[currentQuestion];
  for (let i = 0; i < questionsArray.length; i++) {
    // const question = questionsArray[i].question;
    currentQuestion = questionsArray[i].question
  }
  questionTitle.innerText = currentQuestion
}
// if (currentQuestion < questionsArray.length - 1) {
//     currentQuestion++;
//     eachquestion();
//   } else {
//     alert("You've reached the last question.");
//   }
// }


choices.addEventListener("click", function(event) {
  
})

function choicesSelection(){

  for (let i = 0; i < questionsArray.length; i++) {
    // const question = questionsArray[i].question;
    currentChoices = questionsArray[i].answers
  }
  choices.innerText = currentChoices

}


    // if (event.target.matches("button")) {
    //     event.target.getAttribute("data-index")
    // }
