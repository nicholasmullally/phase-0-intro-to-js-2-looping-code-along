// Code your solutions in this file
for (let age = 30; age <40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    debugger;
}

const gifts = ["teddy bear", "drone", "doll"];
function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++){
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }
    return gifts;
    }
    wrapGifts(gifts)
    
    //assignment 
    function countdown(){
        let counting = 10
        while (counting >= 0){
          console.log(counting--);
        }
        
      }
      countdown()