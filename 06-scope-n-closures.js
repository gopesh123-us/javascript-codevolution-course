function outer() {
  let counter = 0;
  function inner() {
    counter++;
    console.log(counter);
  }
  inner();
  inner();
}
outer();

function myouter(counter) {
  function myinner() {
    counter++;
    console.log(counter);
  }
  return myinner;
}

const func = myouter(10);
func();
func();
func();
const fn = myouter(30);
fn();
fn();
func();
fn();
