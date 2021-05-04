
const heading = document.querySelector('h1');

const speedOne = document.querySelector('#speed');

const text = "Tohle je automaticky generovany kod";

let idLetter = 1;
let delay = 600 / speedOne.value;

function printText(){
    heading.innerText = text.slice(0,idLetter);
    idLetter++;

    if(idLetter > text.length){
        idLetter = 1;
    }

    setTimeout(printText,delay);

}

printText();

speedOne.addEventListener('input',function(event){
    delay = 500/event.target.value;
});