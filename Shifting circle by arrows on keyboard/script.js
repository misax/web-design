
let head = document.querySelector('h1')
 
let getComputed = getComputedStyle(head)




let circle = document.querySelector('.circle')

let press = null


let shifting = function(p){

    document.querySelector('body').addEventListener('keydown',(e) => {

        if(e.key === "ArrowLeft"){
            p = p - 5
            circle.style.left = p + "px"
        }else if(e.key === "ArrowRight"){ 
               p = p + 5
               circle.style.left = p + "px"
        }else if(e.key === "ArrowUp"){
             p = p - 5
             circle.style.top = p + "px"
        }
        else if(e.key === "ArrowDown"){
            p = p + 5
            circle.style.top = p + "px"
        }
          
        
    })
}

shifting(press)