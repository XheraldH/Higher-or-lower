
let btnL = document.getElementById('btnL');
let btnH = document.getElementById('btnH');
let output = document.getElementById('outPutText');
let pCounter = document.getElementById('number')
const image = document.getElementById("image");
//btnH.innerHTML = "Higher"

  function translate() {

 for (let i = 0; i < cards.length; i++) {
 
    if(cards[i].value === "ACE"){
     cards[i].value = 14 ;
    }
  
    if(cards[i].value === "KING"){
     cards[i].value = 13 ;
    }
  
    if(cards[i].value === "QUEEN"){
     cards[i].value = 12 ;
    }
  
    if(cards[i].value === "JACK"){
     cards[i].value = 11;
    }
    
    cards[i].value = Number(cards[i].value)
  
}
}

let cards = [];

console.log(cards);


let number = 0;
let deck = {}; 
let remaining = 0;


//Button Low
btnL.addEventListener('click',function(){
translate();


if(cards[1].value < cards[0].value){
  pCounter.innerHTML = number;
  output.innerHTML = 'Right!';
  number +=1;
console.log("Right");
translate();



}
else if (cards[0].value === cards[0].value){
  output.innerHTML ='Draw, Try Again';
  console.log('Draw');
  translate();
}
 if (cards[1].value > cards[0].value){
  output.innerHTML = `Wrong, card was higher,  ${cards[1].code}`;
   console.log('Wrong');
   image1.style.display = "display";
   translate();
  }

start();
  })
//Button High
btnH.addEventListener('click',function(){
translate();

if(cards[1].value > cards[0].value){ 
  number +=1;
  pCounter.innerHTML = number;
  output.innerHTML = 'Right!';
  console.log("Right");
  translate();
}
else if(cards[0].value === cards[0].value){
  output.innerHTML ='It is a draw, try again';
  console.log('Draw');
  translate();
}
if (cards[1].value < cards[0].value){
 output.innerHTML = `Wrong, card was lower,  ${cards[0].code}`;
  console.log('Wrong');
  translate();
  //image1.style.display = "display"; STYLING FRÅN JS DIREKT
}
start();
  })

 
  window.onload = startGame;
  async function startGame() {
  getDeck();
 
}

  async function getDeck() {
    const res = await fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1" ); 
    const dataD = await res.json();
    deck = dataD; 
    start();  
    
    
    
  }

async function start() {
    const res = await fetch( `https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=2`);
    const data = await res.json();
    remaining = data.remaining;
    cards = data.cards;
    value = cards.value;
    translate()
    
    if(cards[0].value === typeof 'string' ){
      Number.parseInt(cards[0].value)
    }


 

    console.log(`${cards[0]}`);
    console.log(cards);
    console.log(data.remaining);
    console.log(cards[0].value);
    console.log(cards[1].value);
    console.log(typeof cards[0].value);
    console.log(typeof cards[1].value);
    
    
    
    
    image.src = cards[0].image;

 
    
    if (remaining === 0){
    alert('GAME OVER. Do you want to continue?')
    getDeck();
    convert()
    pCounter.innerHTML=0;
    number = 0;
    
      
    }

    }



     
      





