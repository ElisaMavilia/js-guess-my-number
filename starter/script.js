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


document.querySelector('.check').addEventListener('click', function(){
    let guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    // When ther is no input
    if (!guess) { //if it is false = no value in the input
        document.querySelector('.message').textContent = 'No number!'

        // When player wins
    } else if ( guess === secretNumber ){
        document.querySelector('.message').textContent = 'Correct Number!'
        document.querySelector('.number').textContent = secretNumber;

        score += 5;
        document.querySelector('.score').textContent = score;
        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem';

            if (score > highScore){
                let NewHighScore = score;
                document.querySelector('.highscore').textContent = NewHighScore;
            }
       
        // When the number is too low
    } else if (guess < secretNumber){
        if (score > 1){
            document.querySelector('.message').textContent = 'The number is to low!'
            score--;
        }else {
            document.querySelector('.message').textContent = 'You lose the game!'
            document.querySelector('.score').textContent = score = 0;
        }
        
        document.querySelector('.score').textContent = score;
    } else if (guess > secretNumber){
        if (score > 1){
            document.querySelector('.message').textContent = 'The number is to high!'
            score--;
        }else {
            document.querySelector('.message').textContent = 'You lose the game!'
            document.querySelector('.score').textContent = score = 0;
        }
        
        document.querySelector('.score').textContent = score;
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
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    // Restoring style
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';
})

