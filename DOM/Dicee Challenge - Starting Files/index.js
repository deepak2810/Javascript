

//  variable that contains any random value.

var ramdomNumber1 = Math.floor(Math.random()*6)+1;

var randomDiceImage = "dice" + ramdomNumber1 + ".png";
// dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage;// images/dice1.png-images/dice6.png


// for changes in img 1.
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);


// for changes in img 2.
var randomNumber2 = Math.floor(Math.random() *6) + 1;

var ranmdomDiceImage2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",ranmdomDiceImage2);

// If player 1 wins.
if( ramdomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML = "player 1 wins. ";
}
else if(ramdomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML = "player 2 wins. ";
}
else{
  document.querySelector("h1").innerHTML = " It's A tie. ";
}
