/* To do next: build out the final page (score and play again)
build out question images (and question objects)
add accessibility button to remove animations*/

//thanks to the following for helping me generate the sample sentences
/*https://forums.appleinsider.com/discussion/57707/a-better-font-sentence*/

/* DECLARE ALL NECESSARY VARIABLES */
//Game variables
const gameVersion = localStorage.getItem("gameversion")
const gameOverEl = document.querySelector('.game-over')
const gameBoardEl = document.querySelector('.game-board')

//Question variables
const questionEl = document.querySelector('.question')
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
    constructor(qNum,font1,font2,font3,font4,answer,image){
        this.qNum = qNum
        this.font1 = font1
        this.font2 = font2
        this.font3 = font3
        this.font4 = font4
        this.answer = answer
        this.image = image
    }
}

//Set up game

startGame(gameVersion)

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

function checkIfDone(question){
    if (!deckOfQuestions[question.qNum]){
        nextQuestion.innerText = "Finish"
        nextQuestion.removeEventListener('click', goToNextQuestion)
        nextQuestion.addEventListener('click', showEndScreen)
    }
}

function showEndScreen(){
    questionEl.style.opacity = "0.5"
    answersEl.style.opacity = "0.5"
    resultBoxEl.style.opacity = "0.5"
    gameOverEl.style.display = "inline-block"
}

function startGame(localStorageEl){
    if (localStorageEl === 'serif')
        buildSerifGame()
    else if (localStorageEl === 'sans-serif')
        buildSansSerifGame()
    totalNumOfQuestionsEl.innerText = deckOfQuestions.length
    presentQuestion(deckOfQuestions[0])
}

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
    checkIfDone(question)
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
    sampleString.setAttribute("src",question.image)
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

function buildSerifGame(){
    console.log("It's serif again!")
    const q1 = new Question(1,'Font1','Libre Baskerville','Font3','Font4',2,"assets/seriffont1.png")
    const q2 = new Question(2,'Playfair Display','Font2','Font3','Font4',1,"assets/seriffont2.png")
    const q3 = new Question(3,'Font1','Font2','Font3','Source Serif Pro',4,"assets/seriffont3.png")
    const q4 = new Question(4,'Font1','Merriweather','Font3','Font4',2,"assets/seriffont4.png")
    const q5 = new Question(5,'Font1','Font2','Forum','Font4',3,"assets/seriffont5.png")
    const q6 = new Question(6,'Yesiva One','Font2','Font3','Font4',1,"assets/seriffont6.png")
    const q7 = new Question(7,'Font1','Font2','Font3','Luthier',4,"assets/seriffont7.png")
    const q8 = new Question(8,'Font1','Font2','Anaktoria','Font4',3,"assets/seriffont8.png")
    const q9 = new Question(9,'Kumar One','Kumar Two','Kumar Three','Kumar Four',1,"assets/seriffont9.png")
    const q10 = new Question(10,'Font1','Font2','Noto Serif Display Medium','Font4',3,"assets/seriffont10.png")
    deckOfQuestions.push(q1,q2,q3,q4,q5,q6,q7,q8,q9,q10)
    return deckOfQuestions   
}

function buildSansSerifGame(){
    console.log("It's sans serif again!!")
    const q1 = new Question(1,'Arial','Verdana','Ubuntu','Comic Sans',3,"assets/sansfont1.png")
    const q2 = new Question(2,'Open Sans','Arial','Lato','Roboto',4,"assets/sansfont2.png")
    const q3 = new Question(3,'Font1','Cooper Hewitt','Font3','Font4',2,'assets/sansfont3.png')
    const q4 = new Question(4, 'Font1','Font2','Raleway','font4',3,'assets/sansfont4.png')
    const q5 = new Question(5, 'Antic','Font2','Font3','Font4',1,'assets/sansfont5.png')
    const q6 = new Question(6, 'Font1','Lato','Font3','Font4',2,'assets/sansfont6.png')
    const q7 = new Question(7, 'Font1','Font2','Font3','Gidole',4,'assets/sansfont7.png')
    const q8 = new Question(8, 'Font1','Font2','Helveticish','Font4',3,'assets/sansfont8.png')
    const q9 = new Question(9, 'Monserrat','Font2','Font3','Font4',1,'assets/sansfont9.png')
    const q10 = new Question(10, 'Font1','Font2','Nunito','Font4',3,'assets/sansfont10.png')
    deckOfQuestions.push(q1,q2,q3,q4,q5,q6,q7,q8,q9,q10)
    return deckOfQuestions
}

// const playAgainEl = document.querySelector('a .reset')
// playAgainEl.addEventListener('click',function(evt){
//     resetBoard(evt)
// })