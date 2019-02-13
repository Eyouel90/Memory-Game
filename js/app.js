/*
 * Create a list that holds all of your cards
 */
  
/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one) *** completed on day one***
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

const cards= document.querySelectorAll('.card');
const cardList=Array.from(cards);
const time=document.querySelectorAll('.time')[0];
const ready=document.querySelectorAll('.ready')[0];
const playAgain=document.querySelectorAll('.play-again')[0];
const exit=document.querySelectorAll('.exit')[0];
let openCards= [];
let clickCounter = 0;
let moves=0;
let movesCounter=document.querySelectorAll('.scoring')[0]
let matchedCards=[];
let modal = document.getElementById('myModal');
let modal2=document.getElementById('endModal');
let finalMoves=document.getElementById('finalMoves');
let finalTime= document.getElementById('timer-result');
let btn = document.getElementById("myBtn");






function shuffle(array) {
    let currentIndex = array.length,
        temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;

}


cards.forEach(function(card){ 
    
    card.addEventListener('click', function(reveal){
        if (!card.classList.contains('show') ||!card.classList.contains('open')){
        card.classList.add('open','show');
        openCards.push(card);
        console.log(openCards);
        rating();
        
        
        
    if(openCards.length == 2){
        counter();
       if (openCards[0].innerHTML == openCards[1].innerHTML){
            openCards[0].classList.add('match');
            openCards[1].classList.add('match');
            console.log('matching cards');
            matchedCards.push('openCards[0]','openCards[1]');
            //console.log(matchedCards);
            if(matchedCards.length===2){
                gameEnding();
                stopTimer();
                
            }
            openCards.splice(0,1);
        }
        else ( setTimeout(function()
            {openCards[0].classList.remove('open','show');
            openCards[1].classList.remove('open','show');
                openCards=[];
     }, 400))
    }
        }
    })
    
        
})



 function reset(){

    //console.log(matchedCards)
    location.reload();
    shuffle(cardList);
    
    console.log(openCards);
    
    
    
    
    
};
    

    function shuffle(array) {
        let currentIndex = array.length,
            temporaryValue, randomIndex;
    
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
    
        return array;
    }



function counter(){
    moves++;
    movesCounter.innerHTML= moves;
    console.log(moves);
    //every click will count and chang the rating
    rating();
    finalMoves.innerHTML= moves;
}

function rating(){

    if (moves > 10){
        document.getElementsByClassName("fa fa-star")[2].style.display = 'none';
        //console.log('fire');
    }
    if(moves > 16)
    document.getElementsByClassName("fa fa-star")[1].style.display = 'none';

    if(moves >20)
    document.getElementsByClassName("fa fa-star")[0].style.display = 'none';

    //as the moves increase the rating will decrease
    let stars= document.querySelector('.stars');
    let finalStars= document.querySelector('.final-stars');
    finalStars.innerHTML=stars.innerHTML;
}



function timer() {
    let minutes = 0;
    let seconds = 0;
    
    gameInterval = setInterval(function () {
        seconds = parseInt(seconds, 10) + 1;
        minutes = parseInt(minutes, 10);
        if (seconds >= 60) {
            minutes += 1;
            seconds = 0;
        }

        seconds = seconds < 10 ? "0" + seconds : seconds;
        minutes = minutes < 10 ? "0" + minutes : minutes;

        time.innerHTML = minutes + ":" + seconds;
        
        finalTime.innerHTML= time.innerHTML;
    }, 1000);
    
}

function stopTimer(){
    clearInterval(gameInterval);
}
//my modals

window.onload= function() {
    modal.style.display = "block";
  }
  
 
  ready.onclick = function() {
    modal.style.display = "none";
    timer();
  }
  
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

function gameEnding(){
    modal2.style.display = "block";
    
    

};
playAgain.onclick = function() {
    modal2.style.display = "none";
    reset();
  }

  exit.onclick = function() {
    close()
  }
 
 
//everything is done. 
//clean up the code. 
//the only major step is to use the shuffle method for shuffling the card everythime it is refreshed. and stars still not showing up at last popup 
//submit tomororw//