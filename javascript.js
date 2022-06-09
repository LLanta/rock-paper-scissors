function computerPlay () {
    let computerSelection = Math.floor(Math.random()*3+1);
    return computerSelection;
}

function userPlay () {
    let promptInput = prompt("Rock paper or scissors","");
    let userSelection = promptInput.toLowerCase();
    if (userSelection == "rock") {
        userSelection = 1; 
    } 
    else if (userSelection == "paper") {
        userSelection = 2; 
    } 
    else if (userSelection == "scissors") {
        userSelection = 3; 
    }else {
        userSelection  = 0;
    }

    return userSelection;
}

function playRound(){
    let userMove=0;
    let winner ="";
    do{
        userMove = userPlay();
    }while(userMove==0);
    let computerMove = computerPlay();
    console.log(userMove+"  "+computerMove)
    if(computerMove == userMove){
        console.log("Tie")
    } 
    else{
        if ((userMove == computerMove-1) || (userMove==3 && computerMove==1)) {
            console.log("computer Wins")
            winner="Computer";
            
        }
        else{
            console.log("Human Wins")
            winner="Human";

        }
    }
    switch (userMove) {
        case 1:
        userMove="Rock";
        break;
        case 2:
        userMove="Paper";
        break;
        case 3:
        userMove="Scissors";
        break;
        default:
            break;
    }
    switch (computerMove) {
        case 1:
        computerMove="Rock";
        break;
        case 2:
        computerMove="Paper";
        break;
        case 3:
        computerMove="Scissors";
        break;
        default:
            break;
    }
    if (winner == "Computer") {
        console.log("Computer wins, "+computerMove+" wins "+ userMove);
        return "Computer";
    }
    if (winner == "Human") {
        console.log("Human wins, "+userMove+" wins "+ computerMove);
        return "Human";
    }
}

function game (){
    let userScore=0,computerScore=0;
    for (let i = 0; i < 5; i++) {
        console.log("Round: "+(i+1)+"/5");
        let winner=playRound();
        if (winner == "Human") {
            userScore++;
        }
        if (winner =="Computer") {
            computerScore++;
        }
        
    }
    if (computerScore>userScore) {
        console.log("Winner is Computer ! "+computerScore+"-"+userScore);
    }
    if (computerScore<userScore) {
        console.log("Winner is Human ! "+userScore+"-"+computerScore);
    }
    

}


game ();