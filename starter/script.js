'use strict';

/* console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;


document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
 */

const Secretnumber = Math.trunc(Math.random()*20) + 1;
let score = 20;
document.querySelector('.number').textContent = Secretnumber;


document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if (!guess) { //if it is false = no value in the input
        document.querySelector('.message').textContent = 'No number!'
    } else if ( guess === Secretnumber ){
        document.querySelector('.message').textContent = 'Correct Number!'
        score = score + 5;
        document.querySelector('.score').textContent = score;
    } else if (guess < Secretnumber){
        if (score > 1){
            document.querySelector('.message').textContent = 'The number is to low!'
            score--;
        }else {
            document.querySelector('.message').textContent = 'You lose the game!'
            document.querySelector('.score').textContent = score = 0;
        }
        
        document.querySelector('.score').textContent = score;
    } 
}); 