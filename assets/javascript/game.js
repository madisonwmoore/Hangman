var currentgame=0;
var wins=0;
var losses=0;
var guesses=10;
var wordlist = ["star","tree", "night", "galaxy","milkyway","planet"];
var guesslist=[];
var wronglist=[];
var displaylist=[];
var currentWord;
var numGuesses=0;
//TODO randomly order array


currentWord=wordlist[currentgame];
for (var i=0;i<currentWord.length;i++){
    displaylist.push(" _ ");}


function displayCurrentWord(){
document.getElementById("currentword").innerHTML="";
    for (var i=0;i<currentWord.length;i++){
        
document.getElementById("currentword").innerHTML+=displaylist[i];  }
}
  
function isLetter(i){
var letters =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
if(letters.includes(i)){
    
    return true;
}
   
    return false;
}

function wasGuessed(i){
if (guesslist.includes(i)){
    return true;
}
else{
    return false;
}

}

function checkWin(){
    if(!displaylist.includes(" _ ")){
        // alert("You won");
        displayCurrentWord();
        wins++;
        return true

    }
}

function checkLoss(){
    if(guesses<=0){
        return true;
    }
    else{
        return false;
    }

}




function showLetter(i){

for (var p=0;p<currentWord.length;p++){
if(currentWord[p]===i){
displaylist[p]=i;
}
// document.getElementById("currentword").innerHTML=displaylist; 


}
displayCurrentWord(); 
}

function newGame(){
    console.log(currentgame);
    if(currentgame<wordlist.length-1){
        currentgame++;
    }
    else{
        currentgame=0;
        displayCurrentWord(); 
    }
    numGuesses=0;
    guesslist=[];
    guesses=10;
    document.getElementById("guesslist").innerHTML ="<br>";
    document.getElementById("guesses").textContent="Guesses Remaining: "+guesses;
    wronglist=[];
    displaylist=[];
    currentWord=wordlist[currentgame];
    for (var i=0;i<currentWord.length;i++){
    displaylist.push(" _ ");}
    displayCurrentWord();
    document.getElementById("wins").textContent="Wins: "+wins;
    console.log(currentWord);
    }

displayCurrentWord();

document.onkeydown = function (event){
    
    if(isLetter(event.key)){
    
    if(currentWord.includes(event.key)){
        
        showLetter(event.key);
        
    }
    else{
        if(!wasGuessed(event.key)){
        guesses--;
        document.getElementById("guesses").textContent="Guesses Remaining: "+guesses;
       console.log("guesses " + guesses);
        guesslist.push(event.key);
        document.getElementById("guesslist").innerHTML =guesslist;
            if(checkLoss()){
                newGame();
            }
    }
        else{
            // alert("Already Guessed");
        }
    }
    }
if(checkWin()){
newGame();
}

        

}
