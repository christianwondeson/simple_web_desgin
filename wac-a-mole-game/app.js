//js code for wac-a-mole game
//we are starting by selecting all square class fron grid div
const square=document.querySelectorAll('.square')
//also we are selecting all mole class that are begining added later
const mole=document.querySelectorAll('.mole')
//also we are selecting timers id using query selector
const timLeft=document.querySelector('#time-left')
//we are selecting our score this will change when we play our game
let score=document.querySelector('#score')
//starting our game with zero result
let result=0 
let currentTime=timLeft.textContent
//creating a function that remove the mole from each square div
function randomSquare()
{
    square.forEach(className =>
        {
            className.classList.remove('mole')
        })
            //this will remove the mole image from each square in our board
            let randomPosition=square[Math.floor(Math.random() * 9)]
            //this will allow the mole to choose a random position on the board
            //from 1 to 9 integer numbers and round it to the nearest integer

            randomPosition.classList.add(' mole')
            //this will add the mole image in what ever position resulted from the 
            //above code ,class list will iterate based on their id

        //if the randomPosition is click we are going to consider is as a hit position

        hitPosition=randomPosition.id
}
//an arrow function 
square.forEach(id =>
    {
        id.addEventListener('mouseup', () =>
        {
            if(id.id === hitPosition)
            {
                result=resu1t+1;
                //adding result
                score.textContent=result;
                //to visually display the score 
            }
        })
    })

     //mole movement and randomization
     function moveMole()
     {
       let timerId=null
       timerId=setInterval(randomSquare,1000)
     }
     moveMole()

     function countDown()
     {
         currentTime--
         timLeft.textContent=currentTime

         if(currentTime === 0)
         {
             clearInterval(timerId)
             alert('game over ! your score is :'+result)  
         }
     }      
  
     let timerId=setInterval(countDown,1000)



    




