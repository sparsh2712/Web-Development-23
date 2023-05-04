//you can write for loops as you write in C++ as well as the way you write in python with slight modification 

//C++ way
for(let i = 0; i < 5; i++){
  console.log(i);
}

//python way
num_list = [1,2,3,4,5]
for(let n of num_list){
  console.log(n);
}
//if we write let n in num_list then it loops through the indices of the list and not the elements so cautiously use in and of 

//while loop
var students = ['A','B','C','D','E']

while(students.length > 0){
  //let student = students.pop();
  //pop() takes the last element of the array stores it in the variable and removes it from the array
  var student = students.shift();  
  //shift takes the first elements stores it in the variable and deletes it from the array 
  //we can use both let and var to assign variables
  console.log(`Hello, ${student}!`);
}
console.log(students);