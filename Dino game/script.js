let dino = document.querySelector("#dino");
const cactus = document.querySelector("#cactus");
let board = document.querySelector(".board");
let isAlive = true;
let score = 0;
let scoreBoard = document.querySelector(".score");
function jump()
{
    if(isAlive === false)
    {
        cactus.classList.remove("move");
        cactus.style.animationPlayState = "running";
        setTimeout(()=>{cactus.classList.add("move")},10);
        isAlive = true;
        score=0;
        updateScore();
    }
    else if(dino.classList != "jump")
    {
    dino.classList.add("jump");
    setTimeout(()=>{
        dino.classList.remove("jump");
    },300);
    }
}

function updateScore()
{
    scoreBoard.innerText = "score : "+score;
}
board.addEventListener("touchstart",jump);
document.addEventListener("keydown",jump);
let checkalive = setInterval(function  ()
        {
            let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
            let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
            if(dinoTop>110 && (cactusLeft<90 && cactusLeft>50))
            {
                cactus.style.animationPlayState = "paused";
                isAlive = false;
            }
            if(cactusLeft<90 && cactusLeft>50 && isAlive===true)
            {
                score +=1;
                updateScore();
            }
        },10);
