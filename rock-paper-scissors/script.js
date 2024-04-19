let userScore=0;
let compScore=0;

let choice = document.querySelectorAll(".choice");
let options = ["rock","paper","scissor"];
let mesg = document.querySelector("#mesg");
let user = document.querySelector("#user-score");
let computer = document.querySelector("#comp-score");



const showMessage = (userWin,compChoice) =>
{
    if(userWin===true)
    {
        mesg.innerText = `You Won Computer chose ${compChoice}`;
        mesg.style.backgroundColor = "green";
        userScore++;
        user.innerText = `${userScore}`;
    }
    else{
        mesg.innerText = `You Loose Computer chose ${compChoice}`;
        mesg.style.backgroundColor = "red";
        compScore++;
        computer.innerText = `${compScore}`;
    }
}



choice.forEach( 
(choice)=>
{
    choice.addEventListener("click",
        ()=>{
            let userChoice = choice.getAttribute("id");
            let compChoice = options[Math.floor(Math.random()*3)];
            if(userChoice===compChoice)
            {
                mesg.innerText = "Draw";
                mesg.style.backgroundColor = "#007FFF";
            }
            else
            {
                let userWin = true;
                if(userChoice==="rock")
                {
                    userWin= compChoice==="scissor"?true:false;
                }
                else if(userChoice==="paper")
                {
                    userWin = compChoice==="scissor"?false:true;
                }
                else
                {
                    userWin = compChoice==="paper"?true:false;
                }
                showMessage(userWin,compChoice);
            }
        }
    );
});