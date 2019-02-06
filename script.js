/* DECLARE ALL NECESSARY VARIABLES */
//Question variables
const questionNumEl = document.querySelector('.current-question-num')
const totalNumOfQuestionsEl = document.querySelector('.total-num-questions')
const sampleString = document.querySelector('.string')
const deckOfQuestions = []

//Header variables
const resetEl = document.querySelector('.reset')
let scoreEl = document.querySelector('.score-num')
let score = 0

//Result/next question variables
const resultBoxEl = document.querySelector('.result-box')
const resultTextEl = document.querySelector('.result-text')
const nextQuestion = document.querySelector('.next-question')
let currentQuestion = 0

//Answer variables
const answersEl = document.querySelector('.answers')
const ans1 = document.querySelector('[data-answer-num^="1"]')
const ans2 = document.querySelector('[data-answer-num^="2"]')
const ans3 = document.querySelector('[data-answer-num^="3"]')
const ans4 = document.querySelector('[data-answer-num^="4"]')

class Question{
    constructor(qNum,font1,font2,font3,font4,answer){
        this.qNum = qNum
        this.font1 = font1
        this.font2 = font2
        this.font3 = font3
        this.font4 = font4
        this.answer = answer
    }
}

//Set up game
const questionOne = new Question(1,'Times New Roman','Verdana','Ubuntu','Franklin B. Gothic',3)
const questionTwo = new Question(2,'Courier New','Arial','Comic Sans','Roboto',1)
const questionThree = new Question(3,'Gotham','Papyrus','Didot','Futura',2)

deckOfQuestions.push(questionOne,questionTwo,questionThree)
totalNumOfQuestionsEl.innerText = deckOfQuestions.length

presentQuestion(deckOfQuestions[0])

//Event listeners
resetEl.addEventListener('click',function(evt){resetBoard(evt)})

answersEl.addEventListener('click', function(evt){
    if (evt.target.tagName === "A")
        checkAnswer(deckOfQuestions[currentQuestion],evt.target)
})

nextQuestion.addEventListener('click', function(evt){
    currentQuestion++
    if (deckOfQuestions[currentQuestion]){
        presentQuestion(deckOfQuestions[currentQuestion])
        answersEl.style.pointerEvents = "auto"
        for (let i = 0; i < answersEl.childElementCount; i++){
            answersEl.children[i].style.backgroundColor = "white"
    }
}
})

//Functions
function presentQuestion(deckQuestion){
    setStringFont(deckQuestion)
    setAnswers(deckQuestion)
    resultBoxEl.style.display = "none"
}

function checkAnswer(question,userInput){
    if (question.answer == userInput.dataset.answerNum){
        userInput.style.backgroundColor = "lightgreen"
        resultTextEl.innerText = "Correct!"
        updateScore()
    }
    else{
        const correctAnswer = document.querySelector(`[data-answer-num='${question.answer}']`)
        correctAnswer.style.backgroundColor = "lightgreen"
        userInput.style.backgroundColor = "lightcoral"
        resultTextEl.innerHTML = "Sorry, that's incorrect."
    }
    resultBoxEl.style.display = "block"
    answersEl.style.pointerEvents = 'none'
}

function updateScore(){
    score+=10
    scoreEl.innerText = score
    console.log(score)
}

function setStringFont(question){
    /*It'd be neat to refactor this so that it just needs one line of code, like settings question.answer equal to a variable and then displaying font[thatvariable] */
    if (question.answer === 1){
        sampleString.style.fontFamily = question.font1
    }
    else if (question.answer === 2){
        sampleString.style.fontFamily = question.font2
    }
    else if (question.answer === 3){
        sampleString.style.fontFamily = question.font3
    }
    else if (question.answer === 4){
        sampleString.style.fontFamily = question.font4
    }
}

function setAnswers(question){
    questionNumEl.innerHTML = question.qNum

    ans1.innerText = question.font1
    ans2.innerText = question.font2
    ans3.innerText = question.font3
    ans4.innerText = question.font4
}


function resetBoard(evt){
    score = 0
    scoreEl.innerText = score
    resultTextEl.innerText = "Result"
    answersEl.style.pointerEvents = "auto"
    resultBoxEl.style.display = "none"
    for (let i = 0; i < answersEl.childElementCount; i++){
        answersEl.children[i].style.backgroundColor = "white"
    }
    presentQuestion(deckOfQuestions[0])
    currentQuestion = 0
}







// found this fun little node package: http://kylestetz.github.io/Sentencer/
//if I have time, I'd love to get some help implementing this.
/*function sentenceGenerator(){
    var Sentencer = require('sentencer');
    Sentencer.make("This sentence has {{ a_noun }} and {{ an_adjective }} {{ noun }} in it.");
    //generate a line of Lorem Ipsum
    //assign it to a variable
    //set sampleString.innerText to the value of that variable
}*/
