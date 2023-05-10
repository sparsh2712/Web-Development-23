// THIS IS KNOWN AS PROJECTING ARRAYS 
var names_list = ["a", "b", "c", "d", "e","f"];

for (names of names_list){
  console.log(names);
}

// the same thing can be done using a forEach loop 

names_list.forEach(function(name){
  console.log(name);
});

// the way forEach works is it loops through every element of the array and performs a certain function where the argument passed is the element of the array 

// this is another kind of syntax to do the samething

var callName = function callName(name){
  console.log(name);
}

names_list.forEach(callName);