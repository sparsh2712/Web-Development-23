// falsy are those value when converted to boolean become true
//truthy are those values which become true on conversion
// falsy are  = 0, -0, null, NaN, false, undefined
//thruthy everything else becomes true whe converted to boolean 
bool1 = Boolean("hello") // this converts hello to boolean 
bool2 = !!"hello" // this is equivalent to using Boolean to change to boolean 

// == checks value(i.e it allows coersion)
// === checks value and type (i.e doesnot allow coersion)
// for == null and undefined is the samething but it is diffrent for ===