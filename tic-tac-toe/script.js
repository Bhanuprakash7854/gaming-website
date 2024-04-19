let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let turn = 'X';
let winbar = document.querySelector("#winbar");
let wincond = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach(
    (box)=>
    {
        box.addEventListener("click",
            ()=>
            {
                if(turn==='X')
                 {
                     box.innerText = 'X';
                     turn = 'O';
                     box.disabled=true;
                 }
                else{
                    box.innerText = 'O';
                    turn = 'X';
                    box.disabled=true;
                }
                checkWinner();
            }
        )
    }
);

const checkWinner = ()=>
{
    console.log("check")
    for(let cond of wincond)
    {
        let box1 = boxes[cond[0]].innerText;
        let box2 = boxes[cond[1]].innerText;
        let box3 = boxes[cond[2]].innerText;
       if(box1 !='' && box2 !='' && box3 !='')
       {
            if(box1===box2 && box2 === box3)
            {
                announceWinner(box1);
            }
       }
    }
}

const announceWinner = (winner)=>
{
    for(let box of boxes)
    {
        box.disabled = true;
    }
    turn = winner;
    winbar.innerText=`${winner} is the Winner!`;
}

reset.addEventListener("click",
    ()=>
    {
        for(let box of boxes)
        {
            box.innerText ="";
            box.disabled=false;
        }
        winbar.innerText = "";
    }
);