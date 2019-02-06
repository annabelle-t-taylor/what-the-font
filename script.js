


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
resetEl.addEventListener('click',function(evt){
    resetBoard(evt)
})

answersEl.addEventListener('click', function(evt){
    if (evt.target.tagName === "A")
        checkAnswer(deckOfQuestions[currentQuestion],evt.target)
})

nextQuestion.addEventListener('click', goToNextQuestion)


//Functions
function presentQuestion(deckQuestion){
    setStringFont(deckQuestion)
    setAnswers(deckQuestion)
}

function goToNextQuestion(){
    currentQuestion++
    if (deckOfQuestions[currentQuestion]){
        presentQuestion(deckOfQuestions[currentQuestion])
        resetAnswerGrid()
    }
}

function checkAnswer(question,userInput){
    const correctAnswer = document.querySelector(`[data-answer-num='${question.answer}']`)
    showCorrect(correctAnswer)
    if (correctAnswer !== userInput)
        showIncorrect(userInput)
    else   
        updateScore()
    disableClicks()
}

function showCorrect(correctAnswer){
    correctAnswer.style.backgroundColor = "#D0F0C0"
    correctAnswer.style.borderColor = "#4F7942"
    correctAnswer.style.color = "#4F7942"
    resultTextEl.innerText = "Correct!"
}
function showIncorrect(userInput){
    userInput.style.backgroundColor = "#fa8072"
    userInput.style.borderColor = "#7c0a02"
    userInput.style.color = "#7c0a02"
    resultTextEl.innerHTML = "Sorry, but that's incorrect."
}

function disableClicks(){
    resultBoxEl.style.display = "block"
    answersEl.style.pointerEvents = "none"
}

function updateScore(){
    score+=10
    scoreEl.innerText = score
}

function setStringFont(question){
    switch(question.answer){
        case 1:
            sampleString.style.fontFamily = question.font1
            break
        case 2:
            sampleString.style.fontFamily = question.font2
            break
        case 3:
            sampleString.style.fontFamily = question.font3
            break        
        case 4:
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
    resetScore()
    resetAnswerGrid()
    presentQuestion(deckOfQuestions[0])
    currentQuestion = 0
}

function resetScore(){
    score = 0
    scoreEl.innerText = score
}

function resetAnswerGrid(){
    answersEl.style.pointerEvents = "auto"
    resultBoxEl.style.display = "none"
    for (let i = 0; i < answersEl.childElementCount; i++){
        answersEl.children[i].style.backgroundColor = "white"
        answersEl.children[i].style.borderColor = "gray"
        answersEl.children[i].style.color = "gray"
    }
}