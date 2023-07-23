//First I need to get the home screen situatioed
//Start Button
//High score button
let start = document.querySelector('#startGame');
let body = document.querySelector('#body');
let section = document.createElement("section");
let quizPlace = 0
let answersCorrect = 0
// let questionSection = document.body.appendChild(section);


//event listner for start button, click runs init function
start.addEventListener("click", function () {

    console.log("clicked");
    init();
})
//Set up the initialize function onlick
function init() {
    generateQuestions()
    quizPlace = 0
}
//Second I need to get the questions set up
let question1 = {
    question: 'q1',
    choice1: 'a',
    choice2: 'b',
    choice3: 'c',
    choice4: 'D',
    answer: 'b'
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
    questionEl.classList.add("quiz")
    questionEl.textContent = currentQuestion.question;

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

    section.appendChild(questionEl)
    section.appendChild(answer1El)
    section.appendChild(answer2El)
    section.appendChild(answer3El)
    section.appendChild(answer4El)
    let questionSection = document.body.appendChild(section);

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
    if(quizPlace < questionArray.length){
    generateQuestions()
    } else{
        alert("Quiz Over")
        localStorage.setItem("Score",answersCorrect)
    }
} 

function scorekeeper(){
    localStorage.getItem("score")
}


// Get answers set up to each of the question
    // They should also be properties of an object
    // I need a variable that counts up for each correct question

//After the question issue is solved, I need to get buttons on the bottom of the screen for next page

//Once all is done, I need to save the results to local storage