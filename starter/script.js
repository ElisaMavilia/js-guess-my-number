'use strict';

/* console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;


document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
 */

let secretNumber = Math.trunc(Math.random()*20) + 1;
let score = 20;
let highScore = 0;

// MESSAGE
const displayMessage = function (message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function(){
    let guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    // When ther is no input
    if (!guess) { //if it is false = no value in the input
       /*  document.querySelector('.message').textContent = 'No number!' */
       displayMessage('No Number!');

// When player wins
    } else if ( guess === secretNumber ){
       displayMessage('Correct Number!');
        document.querySelector('.number').textContent = secretNumber;

        score += 5;
        document.querySelector('.score').textContent = score;
        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem';

            if (score > highScore){
                highScore = score;
                document.querySelector('.highscore').textContent = highScore;
            }
       
// When the guess is wrong
        } else if (guess !== secretNumber) {
            if (score > 1) {
                displayMessage(guess > secretNumber ? 'The number is to high!' : 'The number is to low!')
                score--;
            } else {
                displayMessage ('You lost the game!')
                document.querySelector('.score').textContent = score = 0;
            }
       }
}); 
// Coding Challenge

/* 
Implement a game rest funcionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click envent handler

2. In the handler function, restore initial values of the score and secretNumeber variables

3. Restore the initial conditions of the message, number, score and the guess input field

4. Also restore the original background color (#222) and the nmber width (15rem)
*/

// Reset button
document.querySelector('.again').addEventListener('click', function(){
    // Restoring game logic
    score = 20;
    secretNumber = Math.trunc(Math.random()*20) + 1;
    document.querySelector('.number').textContent = '?';
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    // Restoring style
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';
})

