//basic variables
var totalScore, roundScore, activePlayer, dice, playGame;

totalScore = [0,0];
roundScore = 0;
activePlayer = 0;

newGame();




 /* document.getElementById("rollDice").addEventListener("click",function(){
      //1.generate random number between 1 and 6
     dice = Math.ceil(Math.random() * 6);

     // display right image
     var diceElement = document.getElementById("test");
     diceElement.style.display = "block";
     console.log(diceElement.src= "images/" + dice + ".jpg") ;
});
*/

document.querySelector(".rollDice").addEventListener("click",rollDice);

function rollDice(){

  if(playGame){
      //1.generate random number between 1 and 6
     dice = Math.ceil(Math.random() * 6);

     // display right image
     var diceElement = document.getElementById("test");
     diceElement.style.display = "block";
    diceElement.src= "images/" + dice + ".jpg" ;

    // count numbers from dice
    if(dice !== 1){
      roundScore = roundScore  + dice;
      document.getElementById("currentScore-" + activePlayer).textContent = roundScore;
    }else{
        //The next player will play
        nextPlay();
    }
  }
    
    
}

function nextPlayer(){
    if(activePlayer === 0){
      activePlayer = 1;
    }else{
      activePlayer = 0;
    }
    roundScore = 0;
    document.getElementById("currentScore-0").textContent = 0;
   document.getElementById("currentScore-1").textContent = 0;

   document.querySelector(".diceImage").style.display = "none";

   document.querySelector(".totalScore0").classList.toggle("active");
   document.querySelector(".totalScore1").classList.toggle("active");
   
}

document.querySelector(".holdScore").addEventListener("click",holdScore);

//calculation score
function holdScore(){

  if(playGame){
      totalScore[activePlayer] = totalScore[activePlayer] + roundScore;

   document.querySelector("#totalScorePlayer-"+ activePlayer).textContent = totalScore[activePlayer];

   if(totalScore[activePlayer] >= 100){
     document.querySelector("#name-" + activePlayer).textContent = "Vinner";
     document.querySelector(".diceImage").style.display = "none";
     playGame = false;
   }else{
     nextPlayer();
   }
  }
 
}

//start new game
document.querySelector(".newGame").addEventListener("click",newGame);

function newGame(){
  //zero values
  totalScore = [0,0];
roundScore = 0;
activePlayer = 0;
playGame = true;

//to zero values and remove dice
  document.getElementById("totalScorePlayer-0").textContent = 0;
document.getElementById("totalScorePlayer-1").textContent = 0;
document.getElementById("currentScore-0").textContent = 0;
document.getElementById("currentScore-1").textContent = 0;

//conceal dice

document.querySelector(".diceImage").style.display = "none";

//texts to normal state
 document.querySelector("#name-0" + activePlayer).textContent = "Score of first player";
  document.querySelector("#name-1" + activePlayer).textContent = "Score of second  player";

  //get back highlight active player
   document.querySelector(".totalScore0").classList.add("active");
   document.querySelector(".totalScore1").classList.remove("active");
  
}
