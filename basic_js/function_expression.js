function sum (a,b) {
  return a+b;
}
// this is an examplr of funtion declaration 
let diffrence  = function(a,b){
  return a-b;
} // this is an anonymous function expression 
// this is an example of function expression this has to be written above the point where it is called
// this variable diffrence can be passed as argument sto other functions 
let multiply = function multiply (a,b){
  return a*b;
}// this is named function expression bcz we have written function (name).....
//named function expression better practice
console.log(sum(2,1));
console.log(diffrence(2,1));

(function anotherTecaher(){
  var tecaher  = "Suzy";
  console.log(teacher);
})();
//the parenthsis binding the function makes it a function expression rather than declaration  
// this is an example of IIFE i.e imediately invoked function expression () after the expression is what is invoking it imediately
// this function expression allows us to make a new scope simiilar to that in other progrmming lanugages which do not alter the values of global variables instead create a value only for  the time the function is run  