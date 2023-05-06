var yesterday = new Date("May 5, 2023");
console.log(yesterday.toUTCString());

var int = 4;
var int_string = String(transcript.int); // converts int to string S capital
int_string; // "4"
// we use new whenever we want to do a object represtentaion and we do not use it when we want to do an object conversion

//we do type conversion using coersion in JS
var msg1 = "There are ";
var numStudents = 16;
var msg2 = " students";
consloe.log(msg1 + numStudents + msg2) // the conversion of number numStudents to string while concactonating is an example of implicit coersion
console.log(`There are ${numStudents + ""} studnets.`)//this is another way to change number to string thta is by adding an empty string to it

//to order to perfrom mathematical operations on the inputs we need convert them to numbers bcz inputs are taken as strings 
var num1 = "1";
int_num1 = Number(num1); //converts string or boolean to number
