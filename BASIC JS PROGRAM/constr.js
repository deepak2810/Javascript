// creating constructor function.

function FrontendDev(name,age,hasWorkPermit,Skills,languages){
   this.name = name;
   this.age = age;
   this.hasWorkPermit = hasWorkPermit;
   this.Skills = Skills;
   this.languages = languages;

}

// Creating object from the function.

var frontendEng = new FrontendDev("deepak",24,true,["HTML","CSS","JS","DJANGO","REACT"],["Hindi","English"]);

// display the value to the console.

console.log(frontendEng.Skills);
