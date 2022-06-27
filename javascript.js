let rock = document.getElementsByClassName("rock")[0];
let paper = document.getElementsByClassName("paper")[0];
let sccisors = document.getElementsByClassName("sccisors")[0];
let userScoreText = document.getElementsByClassName("human_score")[0];
let computerScoreText = document.getElementsByClassName("computer_score")[0];
let resultDisplay = document.getElementsByClassName("result_display")[0];
let playAgain = document.getElementsByClassName("another_game")[0];
let button = document.getElementsByClassName("button")[0];
let rockFn=null;
let paperFn=null;
let sccisorsFn=null;
let buttonFN=null;


function computerPlay () {
    let computerSelection = Math.floor(Math.random()*3+1);
    return computerSelection;
}

function playRound(userMove){
    let winner ="";
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

function game (winner){

    let userScore=0,computerScore=0;
    userScore=userScoreText.innerHTML;
    computerScore=computerScoreText.innerHTML;
    
    if(winner=="Human"){
        userScore++;
        userScoreText.innerHTML=userScore;
    }

    if(winner=="Computer"){
        computerScore++;
        computerScoreText.innerHTML=computerScore;
    }
    
    

    if (computerScore>4) {
        document.getElementsByClassName("winner_text")[0].innerHTML="Winner is Computer ! "+computerScore+"-"+userScore;
        endGame();
    

    }else if (userScore>4) {
        document.getElementsByClassName("winner_text")[0].innerHTML="Winner is Human ! "+computerScore+"-"+userScore;
        endGame();
    }
}

function endGame() {
    resultDisplay.style.display = "none";
    playAgain.style.display = "flex";
    rock.removeEventListener("click",rockFn);
    paper.removeEventListener("click",paperFn);
    sccisors.removeEventListener("click",sccisorsFn);
    userScoreText.innerHTML=0;
    computerScoreText.innerHTML=0;
}

function newGame(){
    resultDisplay.style.display = "flex";
    playAgain.style.display = "none";
    rock.addEventListener("click",rockFn);
    paper.addEventListener("click",paperFn);
    sccisors.addEventListener("click",sccisorsFn);

}



rock.addEventListener("click",rockFn=function(){
    game(playRound(1)); 
});

paper.addEventListener("click",paperFn=function(){
    game(playRound(2));
});

sccisors.addEventListener("click",sccisorsFn=function(){
    game(playRound(3));
});

button.addEventListener("click",buttonFn=function(){
    newGame();
})

