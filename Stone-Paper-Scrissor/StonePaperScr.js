let userScore =0;
let botScore=0;

//To access all the choices(e.g- Rock,Paper,Scrissor)
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const uScoPa = document.querySelector("#User-score");
const bScoPa = document.querySelector("#Bot-score");

 //generating random choice from Bot
const genBotCh = ()=>{
    const opt =["Stone","Paper","Scrissor"];
    const ind= Math.floor(Math.random(opt)*3); 
    /*->as math.random generate 0->1,
        multiplying it with a number, will generate upto that(number-1) times
        so, here (..*3) will return  0,1,2 */
        return opt[ind];
}

//Draw function
const draw = () =>{
    msg.innerText= "Game was DRAW";
    msg.style.backgroundColor = "#420C12";
}

//Result
const Result=(Uwin)=>{
    if(Uwin){
        userScore++;
        uScoPa.innerText= userScore;
        console.log("You Win !!");
        msg.innerText= "You  are the WINNER !!";
        msg.style.backgroundColor = "#011C26";
    }
    else{
        botScore++;
        bScoPa.innerText= botScore;
        msg.innerText= "You Lose :( ";
        msg.style.backgroundColor = "#C42A03";
    }
}

//Bot choice selection
const Game = (userCh)=>{
    console.log("User choice :", userCh);
    //generatie choice from Bot
    const Botch = genBotCh();
    console.log("Bot choice :", Botch);

    //playing condition
    //Draw
    if(userCh==Botch){
        draw();
    }
    else{
        //win
        let Uwin = true;
        if (userCh === "Stone"){
            Uwin = Botch ==="Paper" ? false : true;
        }
        else if (userCh === "Paper"){
            Uwin = Botch ==="Scissor" ? false : true;
        }
        else{
            Uwin = Botch ==="Stone" ? false : true;
        }
        Result(Uwin);
    }
};

//user choices
choices.forEach((choice)=>{
choice.addEventListener("click",()=>{
    //to get the choice name
    const userCh = choice.getAttribute("id");
    Game(userCh);
});
});

