var startButton =  document.querySelector("#start"); 
var choices =  document.querySelector(".choices"); 

let questions = ["Question1", "Question2", "Question3"]


// startButton.addEventListener("submit", function(event) {

// })

// choices.addEventListener("submit", function(event) {

// })

function questions(){
    for (let i = 0; i < questions.length; i++) {
        const question = questions[i];
        
        let eachquestion = document.createElement("div");
    eachquestion.textContent = question;

    eachquestion.setAttribute("data-index", i)


    eachquestion.appendChild()

    }
}