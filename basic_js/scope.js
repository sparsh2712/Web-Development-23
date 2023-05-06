var teacher = "Kyle";
function otherClass() {
  teacher = "Suzy";
  topic = "React";
  console.log("Welcome!");
}

otherClass();
// when the function otherClass is called it changes the value of the variable teacher along with this it also creates a global variable topic ans assigns it the value "React" this is very diffrent from python or C or C++
console.log(teacher);
console.log(topic);

// a variable is undefined when it is not assigned a value
//a variable is undeclared when it is not declared only in the first place