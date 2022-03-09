// Declaration of an array.

var guestList = ["Deepak","Manish","Asish","Rahul","Lucky"]

 var name = prompt("please enter your name ? ");


// Checking a particular element with includes function.
// Includes function returns a boolean value.

if(guestList.includes(name)){
    alert(name + " "+ "Welcome to party mate ! ");
}
else{
    alert("sorry "+name+ " Your name is not in the list, please contact administration." )
}
