//var fs = require("fs") another way to import fs 
//fs stands for file system interaction which helps us read from and write to files  
 
import * as fs from 'fs'

var output = fs.readFileSync('data.txt', 'utf8')
.trim()
.split('\n')
.map(line => line.split('  '))
.reduce((customers, line) => {
  customers[line[0]] = customers[line[0]] || []
  customers[line[0]].push({
    name : line[1],
    price  : line[2],
    quantity : line[3],
  })
  return customers
},{})
// dictionary has diffrent key words therfore every time customer[line[0]] = [] is ruyn while looping the keywords reitirate and the last iteration is assigned 
//.split() is used to split strings ('\n') seperates the string from the point where the line ends 
// we use trim to remove any space in the start or end of the txt file 

console.log('output', JSON.stringify(output,null,1))