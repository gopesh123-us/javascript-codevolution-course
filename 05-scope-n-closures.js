/* const x = 10;
const y = 20;

function myfunction(name) {
  console.log(name, x, y);
}

myfunction("Gope");

const a = 10;
function examplefour() {
  const a = 20;
  console.log(a);
}
examplefour();
console.log(a);

const b = 30;
function examplefive() {
  console.log(b);
}
examplefive(); */

const d = 10;
function exampleSix() {
  const e = 20;
  function inner() {
    const f = 30;
    console.log(d, e, f);
  }
  inner();
}
exampleSix();
