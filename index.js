let diceRoll1 = 1;
let diceRoll2 = 1;
var dice1 = document.getElementsByClassName("img1")[0];
var dice2 = document.getElementsByClassName("img2")[0];

dice1.addEventListener("click", rollSame);

dice2.addEventListener("click", rollSame);

function rollDice1(){
    diceRoll1 = Math.floor((Math.random() * 6) + 1);
    dice1.setAttribute("src","images/dice" + diceRoll1 +".png");
}

function rollDice2(){
    diceRoll2 = Math.floor((Math.random() * 6) + 1);
    dice2.setAttribute("src","images/dice" + diceRoll2 +".png");
}

function rollSame(){
    rollDice1();
    rollDice2();
    if(diceRoll1 > diceRoll2) {
        document.getElementById("changeTitle").innerHTML = " &#128681; Player 1 Wins";
    } else if (diceRoll1 < diceRoll2) {
        document.getElementById("changeTitle").innerHTML = "Player 2 Wins &#128681;";
    } else {
        document.getElementById("changeTitle").innerHTML = "Draw";
    }
}



