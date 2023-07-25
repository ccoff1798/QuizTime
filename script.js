//First I need to get the home screen situatioed
//Start Button
//High score button
let start = document.querySelector('#startGame');
let body = document.querySelector('#body');
let highscoreButton = document.querySelector('#highscore')
let sectionEl = document.createElement("section");
let articleEl = document.createElement('article')
let quizPlace = 0
let answersCorrect = 0
let highscore = 0
// let questionSection = document.body.appendChild(section);


//event listner for start button, click runs init function
start.addEventListener("click", function () {

    console.log("clicked");
    init();
})

highscoreButton.addEventListener("click", getHighscore)
//Set up the initialize function onlick
function init() {
    generateQuestions()
    quizPlace = 0
}
//Second I need to get the questions set up
let question1 = {
    question: "Through the Series, the Bender is comprised of all of the folowing except What? ",
    choice1: '40% Iron',
    choice2: '40% Titanium',
    choice3: '40% Dolomite',
    choice4: '40% Diorite',
    answer: '40% Diorite'
}
let question2 = {
    question: 'q2',
    choice1: 'a',
    choice2: 'b',
    choice3: 'c',
    choice4: 'D',
    answer: 'b'
}
let question3 = {
    question: 'q3',
    choice1: 'a',
    choice2: 'b',
    choice3: 'c',
    choice4: 'D',
    answer: 'b'
}
let questionArray = [question1, question2, question3]


//How should I go about getting the questions to randomize
//Set up a way to get a random question from an array/ object property
// The goal here is to set up a section with 4 List items in it
function generateQuestions() {
    // starting by clearing the remove button
    start.remove();
    let currentQuestion = questionArray[quizPlace]
    console.log(currentQuestion)
    //set up the section that hold the questions
    let questionEl = document.createElement("div");
    questionEl.classList.add("quizContanier")
    questionEl.classList.add("quiz")
    questionEl.textContent = currentQuestion.question;

    let articleEl = document.createElement('article')
    articleEl.classList.add("buttonContainer")

    let answer1El = document.createElement("button");
    answer1El.classList.add("quiz")
    answer1El.textContent = currentQuestion.choice1;
    answer1El.addEventListener('click', checkAnswers)

    let answer2El = document.createElement("button");
    answer2El.classList.add("quiz")
    answer2El.textContent = currentQuestion.choice2;
    answer2El.addEventListener('click', checkAnswers)

    let answer3El = document.createElement("button");
    answer3El.classList.add("quiz")
    answer3El.textContent = currentQuestion.choice3;
    answer3El.addEventListener('click', checkAnswers)

    let answer4El = document.createElement("button");
    answer4El.classList.add("quiz")
    answer4El.textContent = currentQuestion.choice4;
    answer4El.addEventListener('click', checkAnswers)

    sectionEl.appendChild(questionEl)
    sectionEl.appendChild(articleEl)
    articleEl.appendChild(answer1El)
    articleEl.appendChild(answer2El)
    articleEl.appendChild(answer3El)
    articleEl.appendChild(answer4El)
    let questionSection = document.body.appendChild(sectionEl);

}
//I need to set up some way to swap out the questions with math.rando,
//The generate question needs to have a clear function items that strikes the asked question off the list
function checkAnswers(event) {
    if (questionArray[quizPlace].answer == event.target.textContent) {
        console.log(event.target.textContent)
        answersCorrect++

    }
    else {
        console.log("wrongclick")

    }
    quizPlace++
    // let clearlog = document.getElementsByClassName('quiz')
    document.querySelectorAll('.quiz').forEach(e => e.remove());
    if (quizPlace < questionArray.length) {
        generateQuestions()
    } else {
        alert("Quiz Over")
        if (answersCorrect > localStorage.getItem("Highscore")) {
            localStorage.setItem("Highscore", answersCorrect);
        }
    }
}

// function scorekeeper() {
//     let scorelist = localStorage.getItems("score")
//     console.log(scorelist)
// }

    



function getHighscore() {
    // Get the highscore from localStorage
    let highscore = localStorage.getItem("Highscore");
    if(highscore === null) {
        highscore = 0;
    }

    // Create a new div to display the highscore
    let highscoreDiv = document.createElement("div");
    highscoreDiv.textContent = "Highscore: " + highscore;

    // Add the highscore div to the body of the document
    document.body.appendChild(highscoreDiv);
}


// Get answers set up to each of the question
    // They should also be properties of an object
    // I need a variable that counts up for each correct question

//After the question issue is solved, I need to get buttons on the bottom of the screen for next page

//Once all is done, I need to save the results to local storage