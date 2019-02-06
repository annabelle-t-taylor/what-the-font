//https://stackoverflow.com/questions/5551378/javascript-pausing-execution-of-function-to-wait-for-user-input reference

const questionNumEl = document.querySelector('.question-num')
const sampleString = document.querySelector('.string')
const answersEl = document.querySelector('.answers')
const resetEl = document.querySelector('.reset')
const resultEl = document.querySelector('.result')
let scoreEl = document.querySelector('.score-num')
let score = 0
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
deckOfQuestions.push(questionOne)
//const questionTwo = new Question(2,'Courier New','Arial','Comic Sans','Roboto',1)
//deckOfQuestions.push(questionOne,questionTwo)
presentQuestion(deckOfQuestions[0])

function presentQuestion(deckQuestion){
    setStringFont(deckQuestion)
    setAnswers(deckQuestion)
    answersEl.addEventListener('click', function(evt){
        if (evt.target.tagName === "A"){
            let domInput = evt.target
            checkAnswer(deckQuestion,domInput)
        }
    })
}

function checkAnswer(question,userInput){
    if (question.answer == userInput.dataset.answerNum){
        userInput.style.backgroundColor = "lightgreen"
        resultEl.innerText = "Correct! Onto the next question."
        updateScore()
    }
    else{
        const correctAnswer = document.querySelector(`[data-answer-num='${question.answer}']`)
        correctAnswer.style.backgroundColor = "lightgreen"
        userInput.style.backgroundColor = "lightcoral"
        resultEl.innerText = "Sorry, that's incorrect. Onto the next question."
    }
    answersEl.style.pointerEvents = 'none'
}

function updateScore(){
    score+=10
    scoreEl.innerText = score
}

function setStringFont(question){
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

    const ans1 = document.createElement('a')
    ans1.innerText = question.font1
    ans1.dataset.answerNum = '1'
    answersEl.appendChild(ans1)

    const ans2 = document.createElement('a')
    ans2.innerText = question.font2
    ans2.dataset.answerNum = '2'
    answersEl.appendChild(ans2)

    const ans3 = document.createElement('a')
    ans3.innerText = question.font3
    ans3.dataset.answerNum = '3'
    answersEl.appendChild(ans3)

    const ans4 = document.createElement('a')
    ans4.innerText = question.font4
    ans4.dataset.answerNum = '4'
    answersEl.appendChild(ans4)
}

resetEl.addEventListener('click',function(evt){
    evt.preventDefault()
    score = 0
    scoreEl.innerText = score
    resultEl.innerText = ""
    answersEl.style.pointerEvents = "auto"
    for (let i = 0; i < answersEl.childElementCount; i++){
        answersEl.children[i].style.backgroundColor = "white"
    }
})

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