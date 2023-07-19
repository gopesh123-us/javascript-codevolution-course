function hoist() {
  const name = "Gopi";
  console.log(name);
}

function hoistTwo() {
  let myName;
  myName = "Gopi";
  console.log(myName);
}

hoist();
