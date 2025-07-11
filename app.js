let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () =>{
    const options = ["rock","paper","scissors"]
    const randIdx = Math.floor(Math.random() *3);
    return options[randIdx];
}

const showWinner=(userWin,userChoice,compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;   
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText = `You Lose ${compChoice} beats Your ${userChoice}`   ;
        msg.style.backgroundColor="red";
    }
}

const drawGame = () =>{
    msg.innerText = "Its a Draw";
    msg.style.backgroundColor="#081b31";
}

const playGame = (userChoice) => {
    console.log("This is user Choice",userChoice)
    const compChoice = genCompChoice();
    console.log("This is comp Choice",compChoice)

    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice==="rock"){
            //scissor or paper
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice=="paper"){
            //rock or scissor 
            userWin = compChoice === "scissors" ? false : true;
        } else{
            //rock or paper
            userWin = compChoice === "rock" ? false: true;
        }
        showWinner(userWin,userChoice,compChoice);

}
}

choices.forEach((choice) => {
    choice.addEventListener("click",() =>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})