var teacher = "Kyle";
var twitterHandle = "getify";
var age = 19;

function whoAmI(myName,myNickname,myAge)
{
  console.log(`
  Hi, I'm ${myName}
  My twitter handle is ${myNickname}
  My age is ${myAge}
  `);
}

whoAmI(teacher,twitterHandle,age);