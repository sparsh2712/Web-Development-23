var orders = [
  {amount: 250},
  {amount: 400},
  {amount: 100},
  {amount: 325},
]

// for loop
var totalAmount = 0
for(amount of orders){
  totalAmount+=amount.amount
}

// reduce
var totalAmount = orders.reduce(function(sum, order){
  console.log(sum, "hello", order)
  return sum + order.amount
}, 0)

//reduce unlike filter and map takes two arguments one is a callback function and one is a starting value in this case it is given as zero which is assigned to sum and every time the loop is run the value of sum changes 

// using arrow function 
var totalAmount = orders.reduce((sum,order)=> sum+order.amount,0)

console.log(totalAmount)