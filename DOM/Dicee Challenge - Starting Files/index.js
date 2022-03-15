

//  variable that contains any random value.

var ramdomNumber1 = Math.floor(Math.random()*6)+1;

var randomDiceImage = "dice" + ramdomNumber1 + ".png";
// dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage;// images/dice1.png-images/dice6.png


// for changes in img 1.
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);


// for changes in img 2.
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource)
