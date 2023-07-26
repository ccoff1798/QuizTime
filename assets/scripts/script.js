//Global Variables
let start = document.querySelector('#startGame');
let body = document.querySelector('#body');
let highscoreButton = document.querySelector('#highscore');
let sectionEl = document.createElement("section");
let articleEl = document.createElement('article');
let quizPlace = 0;
let answersCorrect = 0;
let highscore = 0;
let hasClicked = false;


//event listner for start button, click runs init function
start.addEventListener("click", function () {
    init();
})

//gets Highscore when button is clicked
highscoreButton.addEventListener("click", getHighscore)

//Initializes the code when called
function init() {
    generateQuestions()
    quizPlace = 0
}
//question objects, this will be a big bulk, skip to line 110
let question1 = {
    question: "Through the Series, the Bender is comprised of all of the folowing except What? ",
    choice1: '40% Iron',
    choice2: '40% Titanium',
    choice3: '40% Dolomite',
    choice4: '40% Diorite',
    answer: '40% Diorite'
}
let question2 = {
    question: 'What is Fry named after?',
    choice1: 'A French fry after what his mom had for dinner the night before',
    choice2: 'A Screwdriver',
    choice3: 'A local resturant his parents regulared at',
    choice4: 'The city of Philadelphia',
    answer: 'A Screwdriver'
}
let question3 = {
    question: 'In the epsiode, "When Aliens Attack", what is the title of the fictional TV show?',
    choice1: 'Single Female Lawyer',
    choice2: 'All my Circuits',
    choice3: 'The Day the Earth Stood Stupid',
    choice4: 'Coworkers',
    answer: 'Single Female Lawyer'
}
// let question4 = {
//     question: 'In the second episode of the series, what does Professor Farnsworth say is strange about Dr.Zoidberg?',
//     choice1: 'He eats from the trash',
//     choice2: 'He wears sandles',
//     choice3: 'His claws are strangly not claw like',
//     choice4: 'His scent',
//     answer: 'He wears sandles'
// }
// let question5 = {
//     question: 'In',
//     choice1: 'a',
//     choice2: 'b',
//     choice3: 'c',
//     choice4: 'D',
//     answer: 'b'
// }
// let question6 = {
//     question: 'In',
//     choice1: 'a',
//     choice2: 'b',
//     choice3: 'c',
//     choice4: 'D',
//     answer: 'b'
// }
// let question7 = {
//     question: 'In',
//     choice1: 'a',
//     choice2: 'b',
//     choice3: 'c',
//     choice4: 'D',
//     answer: 'b'
// }
// let question8 = {
//     question: 'In',
//     choice1: 'a',
//     choice2: 'b',
//     choice3: 'c',
//     choice4: 'D',
//     answer: 'b'
// }
// let question9 = {
//     question: 'In',
//     choice1: 'a',
//     choice2: 'b',
//     choice3: 'c',
//     choice4: 'D',
//     answer: 'b'
// }
// let question10 = {
//     question: 'In',
//     choice1: 'a',
//     choice2: 'b',
//     choice3: 'c',
//     choice4: 'D',
//     answer: 'b'
// }

// array of objects
// let questionArray = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10]

//temp testing array
let questionArray = [question1, question2, question3]

// This is the function that generates the new questions
function generateQuestions() {
    // starting by clearing the remove button
    start.remove();
    //variable to keep track of where we are in the array
    let currentQuestion = questionArray[quizPlace]
    //set up the section that hold the questions

    //Creating the questions in the Dom and setting class to be maniuplated
    let questionEl = document.createElement("div");
    questionEl.classList.add("questionSectionr")
    questionEl.classList.add("quiz")
    questionEl.textContent = currentQuestion.question;

    //This is the container for all the buttons, for styling purposes
    let articleEl = document.createElement('article')
    articleEl.classList.add("buttonContainer")

    // The next 4 are all the possible button actions
    let answer1El = document.createElement("button");
    answer1El.classList.add("quiz" , "button1")
    answer1El.textContent = currentQuestion.choice1;
    answer1El.addEventListener('click', checkAnswers)

    let answer2El = document.createElement("button");
    answer2El.classList.add("quiz", "button2")
    answer2El.textContent = currentQuestion.choice2;
    answer2El.addEventListener('click', checkAnswers)

    let answer3El = document.createElement("button");
    answer3El.classList.add("quiz", "button3")
    answer3El.textContent = currentQuestion.choice3;
    answer3El.addEventListener('click', checkAnswers)

    let answer4El = document.createElement("button");
    answer4El.classList.add("quiz", "button4")
    answer4El.textContent = currentQuestion.choice4;
    answer4El.addEventListener('click', checkAnswers)

    //this is appending all the questions and possible choices to the DOM
    sectionEl.appendChild(questionEl)
    sectionEl.appendChild(articleEl)
    articleEl.appendChild(answer1El)
    articleEl.appendChild(answer2El)
    articleEl.appendChild(answer3El)
    articleEl.appendChild(answer4El)
    let questionSection = document.body.appendChild(sectionEl);
}

//This is the function that checks if clicked answer matches the answer key
function checkAnswers(event) {
    //first checking to make sure that they haven't already answered, this bug took forever to figure out, super important if statement
    if(hasClicked == false){
        //This if statement checks to see if the clicked event = the answer and adds up to the answer correct variable each time
    if (questionArray[quizPlace].answer == event.target.textContent) {
        console.log(event.target.textContent)
        answersCorrect++
        //this part adds class so I can make it Green in CSS
        event.target.classList.add('correct')

    }
    else {
        //this part adds class so I can make it red in css
        event.target.classList.add('wrong')

    }
    // this moves us up one place in the array each time the event listener is called
    quizPlace++

    // this makes sure that we aren't on the last question and creates the next question button after answer is selected
    if (quizPlace < questionArray.length) {
        if(hasClicked == false){
            let nextButtonEl = document.createElement("button");
            nextButtonEl.classList.add('quiz')
            nextButtonEl.textContent = ('next');
            nextButtonEl.addEventListener('click', nextQuestion);
            sectionEl.append(nextButtonEl);
            hasClicked = true
            }
     //This Else has 2 Major functions with it
    } else {
        //check if a new high score has been set
        if (answersCorrect > localStorage.getItem("Highscore")) {
            localStorage.setItem("Highscore", answersCorrect);
        }
        //creates Finish Button
        if(hasClicked == false){
            let finishButtonEl = document.createElement("button");
            finishButtonEl.classList.add('quiz', 'finish')
            finishButtonEl.textContent = ('finish');
            sectionEl.append(finishButtonEl);
            hasClicked = true
            finishButtonEl.addEventListener('click', finisher());
            }else{
                let finishButtonEl = document.getElementsByClassName('finish')
                finishButtonEl.addEventListener('click', resetAll)
            }
    }
}
//this function runs at the end of the quiz and checks the score recieved vs possible answers, and reflects alerts accordingly
function finisher(){
    if(answersCorrect == questionArray.length)
    alert("Congratulations you beast, you made or tied the highscore of " + answersCorrect)
    else if(answersCorrect <= (questionArray.length * .5))
    {
        alert("Well, we can't all be winners, you got " + answersCorrect + " correct out of" + questionArray.length)
    }
    else if(answersCorrect > (questionArray.length * .5))
    {
        alert("Well I guess " + answersCorrect + " isnt that bad")
    }
    if(confirm('Ready to reset?'))
    {
        resetAll()
    }
    else{
        var finishButtonEl = document.querySelector('.finish')
        finishButtonEl.addEventListener('click', resetAll)
    }

    //this refreshes the page after the quiz has been completed
}
}    

//removes all items in quiz class and removes them, then runs the generate questions function
function nextQuestion(){
    document.querySelectorAll('.quiz').forEach(e => e.remove());
    hasClicked = false
    generateQuestions()
}

//reloads page at end of quiz in function to see if there is any refinement I can make at the end of the quiz
function resetAll(){
    location.reload();
}

//G
function getHighscore() {
    // Get the highscore from localStorage or resets to 0 if the answer is null
    let highscore = localStorage.getItem("Highscore");
    if(highscore === null) {
        highscore = 0;
    }
    //alerts of current highscore
    alert("High score is " + highscore)
}
