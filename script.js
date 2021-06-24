var startButton = document.querySelector ("#start");
var timeEl = document.querySelector(".time");
var wordContainer = document.querySelector("#word-container");

var wins = 0;
var losses = 0;

var randomWords = [ "guitar", "couch", "headset", "window", "shirt"];


// Once you click the button, you call function startGame to start 
 startButton.addEventListener("click", startGame())

// Once the game starts, the timer starts, word is chosen, and length of word is presented
function startGame(){
    let randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];
    console.log(randomWord);
    console.log(randomWord.split());

    var splitWord = randomWord.split("");
    console.log(splitWord);
    for (i=0; i < splitWord.length; i++){
        console.log(splitWord[i]);
        // wordContainer.append(splitWord[i]);
        let p = document.createElement('p');
        p.style.color = "red";
        p.innerHTML = splitWord[i];
        wordContainer.append(p);
    }
}



// Add event.key to update when clicking on a letter of choice 
// if the chosen character is in the word, it replaces a blank
// if it is NOT in the word, prompt to guess again and list the letters already guessed 

// Timer function: if games ends, timer clears, flash alert, add to losses 
//  if full word is completed, add to wins and clear timer


