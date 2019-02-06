const questionNumEl = document.querySelector('.question-num')
const sampleString = document.querySelector('.string')

const resetEl = document.querySelector('.reset')
let scoreEl = document.querySelector('.score-num')
let score = 0

const resultTextEl = document.querySelector('.result-text')
const nextQuestion = document.querySelector('.next-question')

const answersEl = document.querySelector('.answers')
const ans1 = document.querySelector('[data-answer-num^="1"]')
const ans2 = document.querySelector('[data-answer-num^="2"]')
const ans3 = document.querySelector('[data-answer-num^="3"]')
const ans4 = document.querySelector('[data-answer-num^="4"]')

const deckOfQuestions = []

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


const questionOne = new Question(1,'Times New Roman','Verdana','Ubuntu','Franklin B. Gothic',3)
const questionTwo = new Question(2,'Courier New','Arial','Comic Sans','Roboto',1)
deckOfQuestions.push(questionOne,questionTwo)

presentQuestion(deckOfQuestions[0])

function presentQuestion(deckQuestion){
    setStringFont(deckQuestion)
    setAnswers(deckQuestion)
}

answersEl.addEventListener('click', function(evt){
    /*Need way of passing what the current question is */
    if (evt.target.tagName === "A"){
        let domInput = evt.target
        checkAnswer(deckOfQuestions[0],domInput)
    }
})

resetEl.addEventListener('click',function(evt){resetBoard(evt)})

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

nextQuestion.addEventListener('click', function(evt){
    presentQuestion(deckOfQuestions[1])
    answersEl.style.pointerEvents = "auto"
    for (let i = 0; i < answersEl.childElementCount; i++){
        answersEl.children[i].style.backgroundColor = "white"
    }
})

function resetBoard(evt){
    score = 0
    scoreEl.innerText = score
    resultTextEl.innerText = "Result"
    answersEl.style.pointerEvents = "auto"
    for (let i = 0; i < answersEl.childElementCount; i++){
        answersEl.children[i].style.backgroundColor = "white"
    }
    presentQuestion(deckOfQuestions[0])
}







/* 
function sentenceGenerator(){
    //generate a line of Lorem Ipsum
    //assign it to a variable
    //set sampleString.innerText to the value of that variable
}
*/

//resumeGame function calls these other functions on the next element in deckOfQuestions
// for (let i = 0; i < deckOfQuestions.length; i++){
//     /*Question: is it better to send in the index to deckOfQuestions, or the object that lies at index i? */
//     setQuestionFont(i)
//     setAnswers(i)
//     answersEl.addEventListener('click', function(evt){
//         if (evt.target.tagName === "A"){
//             let input = evt.target
//             checkAnswer(i,input)
//         }
//     })
// }