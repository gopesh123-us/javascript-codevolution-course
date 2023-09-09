//function declaration
sayHello();

function sayHello() {
  return "Hello Dear";
}

//function expression
var myvar = function (a, b) {
  return a + b;
};
console.log(myvar(7, 9));
console.log(sayHello());

//arrow function assigned to a variable
let anothervar = (a, b) => {
  return a * b;
};
console.log(anothervar(9, 8));

//=====//
const x = 10;
console.log("x: ", x);
