//to access all buttons
let boxes=document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn= document.querySelector("#new-btn"); 
let msgCon = document.querySelector(".msg-con");
let msg= document.querySelector("#msg");

//To check the turn of playerX/PlayerO
let turnO= true; //true->O, false->X

const winningPatterns=[
    //horizonally
    [0,1,2],
    [3,4,5],
    [6,7,8],
    //vertically
    [0,3,6],
    [1,4,7],
    [2,5,8],
    //diagonally
    [0,4,8],
    [2,4,6],
];

//to reset
const resetgame=()=>{
    turnO=true;
    enableBoxes();
    msgCon.classList.add("hide");
};

boxes.forEach((box)=>
{
    box.addEventListener("click",()=>
    {
        console.log("Button is clicked !");
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true; //for storing only 1 value in the button

        //for checking winner
        checkWinner();
    });
});

//after getting winner, disable other empty spaces
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled = true;
    }
};
//for enable spaces for new game
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
};
const showWinner =(winner)=>{
    msg.innerText=`CONGRATS!! WINNER IS- ${winner}`;
    msgCon.classList.remove("hide");
    disableBoxes();
};

const checkWinner = ()=>{
    for(let pattern of winningPatterns){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        //not empty position
        if(pos1 !="" && pos2 !="" && pos3 !=""){
            if(pos1=== pos2 && pos2=== pos3){
                console.log("Winner",pos1);
                showWinner(pos1);
            }
        }
    }
};
newGameBtn.addEventListener("click", resetgame);
resetBtn.addEventListener("click", resetgame);