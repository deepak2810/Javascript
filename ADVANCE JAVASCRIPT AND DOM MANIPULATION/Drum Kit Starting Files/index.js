var NumOfDrumButtons = document.querySelectorAll(".drum").length;


// for adding eventListener to all of the our buttons.
for (var i = 0; i<NumOfDrumButtons; i++){

document.querySelectorAll(".drum")[i].addEventListener("click",function(){

  this.style.color = "blue";


});

}


// var audio = new Audio('sounds/tom-1.mp3');
// audio.play();
