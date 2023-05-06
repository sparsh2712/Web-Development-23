//so that the variables needed in a particular scope do not pollute the general environment 
var teacher = "Kyle";

{
  let teacher = "Suzy";
  console.log(teacher);
}
//this curly braces creates a new scope and we use the keyword let to declare the variable in that particular scope if we use var insteaad then it creates a variable in the global scope
//let can be used to create local variables in if statements loops in function etc
console.log(teacher);
var myName = "sparsh";

function printName(){
  console.log(myName);
}

printName()
//so one part of the definitionof closure states that the variables in the outter scope are accesible in the inner scope without passing them as arguents 
function outerFunction(outerVariable){
  return function innerFunction(innervariable){
    console.log('Outer Variable: ' + outerVariable)
    console.log('Inner Variable: ' + innervariable)
  }
}

const newFunction = outerFunction('outside')
//newFunction('inside')
newFunction() 
//basically closure is that we can acces variable from outer scope 
// now whenever we call newFunction() it will always remeber the value 'outside' whenever it is called 
