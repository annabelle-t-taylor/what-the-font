const serifEl = document.querySelector('.play-serif')
const sansSerifEl = document.querySelector('.play-sans-serif')

serifEl.addEventListener('click',playSerif)

sansSerifEl.addEventListener('click',playSansSerif)

function playSerif(){
    localStorage.setItem("gameversion","Serif")
}

function playSansSerif(){
    localStorage.setItem("gameversion", "Sans-Serif");
}