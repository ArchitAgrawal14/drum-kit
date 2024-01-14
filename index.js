// you can see mdn docs to see the different types of Types(first parameter) for addEventListner.
// document.querySelector(".set").addEventListener("click",buttonsResponse);
    // this can also be used to select all the buttons but we wont be able to change the color of the text here
// }
//
// here as we have called the function in the second parameter we did not use the paranthesis as we usually do cause it will straight up call the function without being clicked so that is why we use just the name of the function
// function buttonsResponse(){
    // alert("I got clicked");
    var clickedButtons=document.querySelectorAll("button").length;
        for(i=0 ; i<=clickedButtons ; i++){
         document.querySelectorAll("button")[i].addEventListener("click" , function(){
            var buttonsInnerHtml =this.innerHTML;
            makeSound(buttonsInnerHtml);
            buttonAnimation(buttonsInnerHtml);
        });
// function buttonsResponse(){
//     this.style.color="white";

    // here 'this' gives the identity of the button that is pressed
//  }
// var audio=new Audio("sounds/tom-1.mp3");
// audio.play();
//  this above plays a sound here it creates a HTML audio tag behind after creating the object
// we will use the switch statemaent to play different sound for different buttons 
  
// yahan upar kiss button pe click kar raha hai usko store kara rahe hai this.inerHTML karke

    document.addEventListener("keydown" , function(event){
        makeSound(event.key);
        buttonAnimation(event.key);
        // here the key is the property of the event
});
function makeSound(key){
    switch(key){
        case("w"):
        var tom1=new Audio("sounds/tom-1.mp3");
         tom1.play();
         break;
    
        case("a"):
        var tom2=new Audio("sounds/tom-2.mp3");
         tom2.play();
         break;
     
        case("s"):
        var tom3=new Audio("sounds/tom-3.mp3");
         tom3.play();
         break;
    
        case("d"):
        var tom4=new Audio("sounds/tom-4.mp3");
         tom4.play();
         break;
    
        case("j"):
        var snare=new Audio("sounds/snare.mp3");
         snare.play();
         break;
    
        case("k"):
        var kickBass=new Audio("sounds/kick-bass.mp3");
        kickBass.play();
        break;
    
        case("l"):
        var crash=new Audio("sounds/crash.mp3");
        crash.play();
        break;
    
        default:
         console.log(buttonsInnerHtml);
    }
        };
    }


// document.addEventListener("keypress" , function(){
//     alert("key was pressed");
// });
function buttonAnimation(currentKey){
   var activeButton= document.querySelector("."+currentKey);
   activeButton.classList.add("pressed");
      setTimeout(function(){
        activeButton.classList.remove("pressed")
   },100);
}
// here it is used to set a time out in the animation the firest parameter is the function that will be executed and the second parameter is the the time duration in millisecond 
