const questionNumEl = document.querySelector('.question-num')
const questionString = document.querySelector('.string')
const answersEl = document.querySelector('.answers')
let score = document.querySelector('.score-num')
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


const questionOne = new Question(1,'Times New Roman','Verdana','Ubuntu','Franklin B Gothic',3)
//const questionTwo = new Question(2,"Arial","Comic Sans MS","Georgia","Garamond")

deckOfQuestions.push(questionOne)

for (let i = 0; i < deckOfQuestions.length; i++){
    setPage(i)
    answersEl.addEventListener('click', checkAnswer)
    //check answer
    //update score
    //go onto next question and restart cycle
}

function checkAnswer(evt){
    if (evt.target.tagName === "A")
        console.log("Clicked link!")
}

function setPage(i){
    
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
    console.log(deckOfQuestions[i].answer)
    questionNumEl.innerHTML = deckOfQuestions[i].qNum

    const ans1 = document.createElement('a')
    ans1.innerText = deckOfQuestions[i].font1
    answersEl.appendChild(ans1)

    const ans2 = document.createElement('a')
    ans2.innerText = deckOfQuestions[i].font2
    answersEl.appendChild(ans2)

    const ans3 = document.createElement('a')
    ans3.innerText = deckOfQuestions[i].font3
    answersEl.appendChild(ans3)

    const ans4 = document.createElement('a')
    ans4.innerText = deckOfQuestions[i].font4
    answersEl.appendChild(ans4)
}

//questionNumEl.innerText = questionOne.qNum