let dino = document.querySelector("#dino");
const cactus = document.querySelector("#cactus");
let board = document.querySelector(".board");
let isAlive = true;
function jump()
{
    if(isAlive === false)
    {
        cactus.classList.remove("move");
        cactus.style.animationPlayState = "running";
        setTimeout(()=>{cactus.classList.add("move")},10);
        isAlive = true;
    }
    else if(dino.classList != "jump")
    {
    dino.classList.add("jump");
    setTimeout(()=>{
        dino.classList.remove("jump");
    },300);
    }
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
        },10);