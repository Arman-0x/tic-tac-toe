
let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let msgcontainer=document.querySelector(".msg-container");
let newbtn=document.querySelector("#new-btn");
let msg=document.querySelector("#msg");

let turno=true;//playerX,playerO

const winPatterns=[
[0,1,2],
[3,4,5],
[6,7,8],
[0,4,8],
[2,4,6],
[0,3,6],
[1,4,7],
[2,5,8],

];


const reset=()=>{


turno=true;
enableboxes();
msgcontainer.classList.add("hide");


};

boxes.forEach((box) => {
    
box.addEventListener("click",()=>{

    console.log("button was clicked");
    if(turno){
        box.innerText="O"
        turno=false;

    }else{
        box.innerText="X";
        turno=true;
    }
    box.disabled=true;
    checkWinner();
});

});

const disableboxes=()=>{
 for(let box of boxes){

    box.disabled=true;
 }

};
const enableboxes=()=>{

for(let box of boxes){
box.disabled=false;
box.innerText="";

}

}

let showWinner=(winner)=>{
msg.innerHTML=`congratulations winner is ${winner}`;


msgcontainer.classList.remove("hide");
disableboxes();

};

const checkWinner=()=>{

    for(let pattern of winPatterns){

let pos1val=boxes[pattern[0]].innerText;
let pos2val=boxes[pattern[1]].innerText;
let pos3val=boxes[pattern[2]].innerText;

if(pos1val!="" && pos2val!="" && pos3val!=""){
    if(pos1val===pos2val && pos2val===pos3val){
        console.log("Winner is",pos1val);

       showWinner(pos1val); 
    }
}

    }

};
resetbtn.addEventListener("click",reset);
newbtn.addEventListener("click",reset);
