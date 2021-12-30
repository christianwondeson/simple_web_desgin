document.addEventListener('DOMContentLoaded', () =>{
//this is an other way of writing anonymous function
//this is dom event listener
 
//lets us create an array of card for our game

const cardArray=[
    //this array has 6*2 elements(objects) because their need to be a matching image
    //to score points
    {
      name:'fries',
      img:'images/fries.png'
    },
    {
        name:'fries',
        img:'images/fries.png'
      },
      {
        name:'cheeseburger',
        img:'images/cheeseburger.png'
      },
      {
        name:'cheeseburger',
        img:'images/cheeseburger.png'
      },
      {
        name:'hotdog',
        img:'images/hotdog.png'
      },
      {
        name:'hotdog',
        img:'images/hotdog.png'
      },
      {
        name:'ice-cream',
        img:'images/ice-cream.png'
      },
      {
        name:'ice-cream',
        img:'images/ice-cream.png'
      },
      {
        name:'milkshake',
        img:'images/milkshake.png'
      },
      {
        name:'milkshake',
        img:'images/milkshake.png'
      },
      {
        name:'pizza',
        img:'images/pizza.png'
      },
      {
        name:'pizza',
        img:'images/pizza.png'
      }
]
 

  cardArray.sort(() => 0.5 - Math.random()) 
 //creating our game board
  
  //we are going to call our grid class in the html

  const grid=document.querySelector( '.grid' )
  const resultDisplay=document.querySelector('#result')

  var cardsChosen=[]
  var cardsChosenId= []
  var cardsWon=[]
  //this is simply an empty array to store chosen cards and id

  //creating a function that iterate for all cardArray element and assign image 
   function createBoard(){

     for (let i = 0; i< cardArray.length; i++) 
     {
         //for each card we are creating an image
         var card=document.createElement('img')
         card.setAttribute('src','images/blank.png')
         card.setAttribute('data-id',i)
         //the above code will create a card var as image element and assign the blank image
         //with their for loop iteration number as an id
         card.addEventListener('click', flipcard)
        
        grid.appendChild(card);
        //this image elements will go into grid class in the html
     }
   }
   createBoard();
   //checking card 
   function checkForMatch()   
   {
       var cards=document.querySelectorAll('img')
       //this code will create a connection between all the cardArray elements

       const optionOneid=cardsChosenId[0]
       const optionTwoid=cardsChosenId[1]
       //it will assign the value to the above vars
       //this will accurately check the two chosen card
       if(cardsChosen[0] === cardsChosen[1])
       {
           alert("you found a match");
           cards[optionOneid].setAttribute('src', 'images/white.png')
           cards[optionTwoid].setAttribute('src', 'images/white.png')
           cardsWon.push(cardsChosen)
       }else
       {
           cards[optionOneid].setAttribute('src', "images/blank.png")
           cards[optionTwoid].setAttribute('src', "images/blank.png")
           alert('sorry ,try again !!')
       }

       cardsChosen=[];
       cardsChosenId=[];
       resultDisplay.textContent=cardsWon.length

       if(cardsWon.length === cardArray.length/2)
       {
           resultDisplay.textContent='congratulations ! you found them all !'
       } 
   }
     
   //card filping functionality 
   function flipcard(){
       var cardId= this.getAttribute('data-id')
       cardsChosen.push(cardArray[cardId].name)
       cardsChosenId.push(cardId)
       this.setAttribute('src',cardArray[cardId].img)
        if(cardsChosen.length ===2)
        {
            setTimeout(checkForMatch,500)
        }
   }
})

