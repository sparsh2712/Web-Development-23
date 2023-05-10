var animals = [
  {name: 'Fluffykins', species: 'rabit'},
  {name: 'caro', species: 'dog'},
  {name:'hamilton', species:'dog'},
  {name:'harold', species:'fish'},
  {name: 'Ursula', species: 'cat'},
  {name: 'Jimmy', species:'fish'}
]

// using for loop
var names = []
for(var i = 0; i< animals.length; i++){
  names.push(animals[i].name)
}

// using map 
var names = animals.map(function(animal){
  return animal.name + ' is a ' + animal.species
})

//declaring callback sepeartely to increase modularity 
function animalName(animal){
  return animal.name
}

var names = animals.map(animalName)

//using arrow function syntax 
//syntax of arrow function is (parameters) => {function body} if just a return statement can be written without curly braces no need to use the key word function 

const sum = (a,b) => a+b
var names = animals.map((animal) => animal.name )

console.log(sum(2,3))
// map is another function like filter on the array object it takes a callback function as argument this callback function loops through the array but instead of returning a true or false value it returns the transformed value
console.log(names)