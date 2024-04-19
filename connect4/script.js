
var choice = "red";
let gameOver = false;

let mat = [
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
]

for(let i=0;i<6;i++)
{
    for(let j=0;j<7;j++)
    {
        let circle = document.querySelector("#c"+i.toString()+j.toString());
        circle.addEventListener("click",function setPeice(e)
        {
            if(gameOver!=true)
            {
                let circle = e.target.id;
            setColor(circle,choice);
            checkWinner();
            }
        });
    }
}

function setColor(circle,ch)
{
    let column = circle.split("")[2];
    for(let i=5;i>=0;i--)
    {
        let box = document.querySelector("#c"+i+column);
        if(!(box.classList.contains("red") || box.classList.contains("yellow")))
        {
            box.classList.add(ch);
            if(ch == "red")
            {
                mat[i][column] = 1;
                choice = "yellow"
            }
            else{
                mat[i][column]=2;
                choice = "red";
            }
            break;
        }
    }
}

function checkWinner()
{
    //check row
    for(let i=0;i<6;i++)
    {
        for(let j=0;j<4;j++)
        {
            if(mat[i][j]!=0)
            {
                if(mat[i][j] === mat[i][j+1] && mat[i][j]===mat[i][j+2] && mat[i][j]===mat[i][j+3])
                {
                    ShowWinner(mat[i][j]);
                }
            }
        }
    }

    //check column
    for(let i=0;i<7;i++)
    {
        for(let j=0;j<3;j++)
        {
            
            if(mat[j][i]!=0)
            {
                if(mat[j][i] === mat[j+1][i] && mat[j][i]===mat[j+2][i] && mat[j][i]===mat[j+3][i])
                {
                    ShowWinner(mat[j][i]);
                }
            }
        }
    }
    //check diagonal
    for(let i=0;i<3;i++)
    {
        for(let j=0;j<4;j++)
        {
            if(mat[i][j]!=0)
            {
                if(mat[i][j] === mat[i+1][j+1] && mat[i][j]===mat[i+2][j+2] && mat[i][j]===mat[i+3][j+3])
                {
                    ShowWinner(mat[i][j]);
                }
            }
        }
    }

    //check anti-diagonal
    for(let i=0;i<3;i++)
    {
        for(let j=6;j>2;j--)
        {
            if(mat[i][j]!=0)
            {
                if(mat[i][j] === mat[i+1][j-1] && mat[i][j]===mat[i+2][j-2] && mat[i][j]===mat[i+3][j-3])
                {
                    ShowWinner(mat[i][j]);
                }
            }
        }
    }
}

function ShowWinner(color)
{
    let Winbar = document.querySelector("#winbar");
    if(color===1)
    {
        Winbar.innerText = "Red is the Winner";
    }
    else{
        Winbar.innerText = "Yellow is the Winner";
    }
    gameOver = true;
}