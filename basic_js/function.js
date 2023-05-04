// in place of f string we have interpolated string in js and we use `    ` to write interpolated string 
//we use only the keyword function irrespective of what it returns
function greet(){
  console.log("Hello world");
}
function timeRemaining(timeElapsed,endTime){
  return endTime - timeElapsed;
}

let left = timeRemaining(42,140);
greet();
console.log(left);