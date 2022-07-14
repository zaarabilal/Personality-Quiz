var mulanS=0;
var moanaS=0;
var qCount=0;
var restart=document.getElementById("restart");
var displayResult=document.getElementById("displayResult");
var q1a1= document.getElementById("q1a1");
var q1a2= document.getElementById("q1a2");
var q2a1= document.getElementById("q2a1");
var q2a2= document.getElementById("q2a2");
var q3a1= document.getElementById("q3a1");
var q3a2= document.getElementById("q3a2");


function mulan(){
  mulanS+=1;
  qCount+=1;
  
  console.log("qCount = "+ qCount +"mulanS = " +mulanS);
  
  if(qCount==3){
  console.log("The quiz is done");
    updateResult();
  }
}

function moana(){
  moanaS+=1;
  qCount+=1;

  console.log("qCount = "+ qCount +"moanaS = " +moanaS);

  if(qCount==3){
  console.log("The quiz is done");
    updateResult();
  }
}

restart.addEventListener("click",restarting)
q1a1.addEventListener("click", mulan);
q1a2.addEventListener("click", moana);
q2a1.addEventListener("click", moana);
q2a2.addEventListener("click", mulan);
q3a1.addEventListener("click", mulan);
q3a2.addEventListener("click", moana);

function disR(){
  if(mulanS>=2){
     result.innerHTML="You are most like Mulan!";
  console.log("you are most like Mulan!");
}
else if(moanaS>=2){
   result.innerHTML="You are most like Moana!";
  console.log("you are most like Moana!");
}
}
function updateResult(){ displayResult.addEventListener("click",disR);
   
}
function restarting(){
  result.innerHTML="You are most like...";
  mulanS=0;
  moanaS=0;
  qCount=0;
}






