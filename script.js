const questionNumEl = document.querySelector('.question-num')
const questionString = document.querySelector('.string')
const answersEl = document.querySelector('.answers')
const resetEl = document.querySelector('.reset')
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

for (let i = 0; i < deckOfQuestions.length; i++){
    /*Question: is it better to send in the index to deckOfQuestions, or the object that lies at index i? */
    setQuestionFont(i)
    setAnswers(i)
    answersEl.addEventListener('click', function(evt){
        if (evt.target.tagName === "A"){
            let input = evt.target
            checkAnswer(i,input)
        }
    })
}

function checkAnswer(i,userInput){
    if (deckOfQuestions[i].answer == userInput.dataset.answerNum){
        console.log("Yay!")
        updateScore()
        userInput.style.backgroundColor = "green"
    }
    else{
        userInput.style.backgroundColor = "red"
    }
}

function updateScore(){
    score+=10
    scoreEl.innerText = score
}

function setQuestionFont(i){
    if (deckOfQuestions[i].answer === 1){
        questionString.style.fontFamily = deckOfQuestions[i].font1
    }
    else if (deckOfQuestions[i].answer === 2){
        questionString.style.fontFamily = deckOfQuestions[i].font2
    }
    else if (deckOfQuestions[i].answer === 3){
        questionString.style.fontFamily = deckOfQuestions[i].font3
    }
    else if (deckOfQuestions[i].answer === 4){
        questionString.style.fontFamily = deckOfQuestions[i].font4
    }
}
function setAnswers(i){
    questionNumEl.innerHTML = deckOfQuestions[i].qNum

    const ans1 = document.createElement('a')
    ans1.innerText = deckOfQuestions[i].font1
    ans1.dataset.answerNum = '1'
    answersEl.appendChild(ans1)

    const ans2 = document.createElement('a')
    ans2.innerText = deckOfQuestions[i].font2
    ans2.dataset.answerNum = '2'
    answersEl.appendChild(ans2)

    const ans3 = document.createElement('a')
    ans3.innerText = deckOfQuestions[i].font3
    ans3.dataset.answerNum = '3'
    answersEl.appendChild(ans3)

    const ans4 = document.createElement('a')
    ans4.innerText = deckOfQuestions[i].font4
    ans4.dataset.answerNum = '4'
    answersEl.appendChild(ans4)
}

resetEl.addEventListener('click',function(evt){
    evt.preventDefault()
    score = 0
    scoreEl.innerText = score
})

/* 
function sentenceGenerator(){
    //generate a line of Lorem Ipsum
    //assign it to a variable
    //set questionString.innerText to the value of that variable
}
*/