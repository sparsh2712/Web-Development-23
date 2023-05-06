var workshop = {
  teacher : "Kyle",
  ask(question){
    console.log(this.teacher,question);
  },
};//example of implicit binding 
//workshop is an object which has a property teacher and a method called ask  
//none of the lines 1-6 know about what this keyword refres to only when the function is called we kow what this refers to 
workshop.ask("hello")
// here this.teacher reffers to the teacher propert of this object 

function ask(question) {
  console.log(this.teacher,question);
}
function otherClass() {
  var myContext = {
    teacher: "Suzy"
  };
  ask.call(myContext,"Why?");//example of explicit binding 
}

otherClass();

// in this case the function ask is not in an object so it doesnt have a particular this to refer to instead this depends on how we call it 
//ask.call() is a way of invoking the function ask pointing what this is and then passing the argument for the function
