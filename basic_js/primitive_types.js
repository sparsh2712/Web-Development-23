var v;
typeof v; //undefined
v = "1";
typeof v; // string
v = 2;
typeof v; //number
v = true;
typeof v; //boolean
v = {};
typeof v; //object
v = symbol();
typeof v; //symbol
typeof a; // undefined even if variable not declared
v = null;
typeof v; //object and not null 
v = function(){}
typeof v; // function
v = [1,2,3]
typeof v; //object

var greeting = "Hello class!";

var something  = greeting/2;

something; //NaN
Number.isNaN ( something );//true


