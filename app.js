let userName = prompt("Enter Your Name");
let userName1 = document.querySelector("#user-name");
userName1.innerText = `${userName}`;
let userScore = 0;
let compScore = 0;
let drawScore = 0;
const choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let compScore1 = document.querySelector("#comp-score");
let userScore1 = document.querySelector("#user-score");
let drawScore1 = document.querySelector("#draw-score");
let msgContainer = document.querySelector("#msg");
let computer = document.querySelector("#comp-choice");
let computer1 = document.querySelector("#computer");
const genCompChoice = () => {
const options = ["rock", "paper", "scissors"];
const randIdx = Math.floor(Math.random() * 3);
return options[randIdx];
};
const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    computer.innerText = compChoice;
    console.log(userChoice);
    console.log(compChoice);
    if(compChoice === userChoice){
        msg.innerText = "This is a Draw, Go again!";
        drawScore++;
        drawScore1.innerText = `${drawScore}`;
        msgContainer.style.backgroundColor = "Blue";
    }
    else{
        if(compChoice === "rock" && userChoice === "paper"){
            msg.innerText = "You Win, Go again!"
            userScore++;
            userScore1.innerText = `${userScore}`;
            msgContainer.style.backgroundColor = "green";
        }
        if(compChoice === "rock" && userChoice === "scissors"){
            msg.innerText = "You Lose, Go again!"
            compScore++;
            compScore1.innerText = `${compScore}`;
            msgContainer.style.backgroundColor = "red";
        }
        if(compChoice === "paper" && userChoice === "rock"){
            msg.innerText = "You Lose, Go again!"
            compScore++;
            compScore1.innerText = `${compScore}`;
            msgContainer.style.backgroundColor = "red";
        }
        if(compChoice === "paper" && userChoice === "scissors"){
            msg.innerText = "You Win, Go again!"
            userScore++;
            userScore1.innerText = `${userScore}`;
            msgContainer.style.backgroundColor = "green";
        }
        if(compChoice === "scissors" && userChoice === "rock"){
            msg.innerText = "You Win, Go again!"
            userScore++;
            userScore1.innerText = `${userScore}`;
            msgContainer.style.backgroundColor = "green";
        }
        if(compChoice === "scissors" && userChoice === "paper"){
            msg.innerText = "You Lose, Go again!"
            compScore++;
            compScore1.innerText = `${compScore}`;
            msgContainer.style.backgroundColor = "red";
        }
    }
};
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
//adding Dark Mode
let body = document.querySelector("body");
let modebtn = document.querySelector("#mode");
let heading = document.querySelector(".header");
let currMode = "light";
modebtn.addEventListener("click", () =>{
    if(currMode==="light"){
        currMode = "dark";
        body.style.backgroundColor = "black";
        body.style.color = "white";
        modebtn.style.backgroundColor = "white";
        modebtn.style.color = "black";
        msgContainer.style.backgroundColor = "white";
        msgContainer.style.color = "black";
        heading.style.backgroundColor = "rgb(22, 21, 21)";
        computer1.style.color = "white";
    }
    else {
        currMode = "light";
        body.style.backgroundColor = "palegoldenrod";
        body.style.color = "Black";
        modebtn.style.backgroundColor = "black";
        modebtn.style.color = "white";
        msgContainer.style.backgroundColor = "black";
        msgContainer.style.color = "white";
        heading.style.backgroundColor = "dodgerblue";
        computer1.style.color = "black";
    }
});
//finished


