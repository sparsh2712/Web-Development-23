var animals = [
  {name: 'Fluffykins', species: 'rabit'},
  {name: 'caro', species: 'dog'},
  {name:'hamilton', species:'dog'},
  {name:'harold', species:'fish'},
  {name: 'Ursula', species: 'cat'},
  {name: 'Jimmy', species:'fish'}
]

//functions passed back in other functions are called callback functions
//filter is a built in js keyword used to create a new array with all elements that pass the test implemented by the provided function i.e filter expecrts the callback to return true or false 
var dogs = animals.filter(function(animal){
  return animal.species == 'dog'
})

// another way to write the same thing
var isDog = function(animal){
  return animal.species =='dog'
}
var dogs = animal.filter(isDog)
var otherAnimals = animals.reject(isDog) 
/*var dogs = [];
for(var i = 0; i < animals.length; i++) {
  if(animals[i].species == 'dog'){
    dogs.push(animals[i]);
  }
}*/

console.log(dogs)

//we can also use find the same way we use filter but it only returns the first object 