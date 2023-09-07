function hoist() {
  const name = "Gopi";
  console.log(name);
}

function hoistTwo() {
  let myName;
  //myName = "Gopi";
  console.log(myName);
}

function hoistThree() {
  var age;
  //age = "54";
  console.log(age);
}

hoist();
hoistTwo();
hoistThree();
