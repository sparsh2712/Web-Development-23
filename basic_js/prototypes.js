// this is an old way to do things
function Workshop(teacher) {
  this.teacher = teacher;
}
// this essentially creates a class called workshop 
Workshop.prototype.ask = function(question){
  console.log(this.teacher,question);
};
// this is like adding functions to the class
var deepJS = new Workshop("Kyle");// this is like creating objects so prototypes are objects 
var reactJS = new Workshop("Suzy");// creating another object 

deepJS.ask("Is 'prototype' a class?");

reactJS.ask("Isn't 'prototype' ugly?");