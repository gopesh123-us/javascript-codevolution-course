function addNumbers() {
  var a = 10;
  var b = 20;
  var flag = true;

  if (flag) {
    var sum = a + b;
    console.log(`Inside if block - sum is: ${sum}`);
  }
  console.log(`Outside if block - sum is: ${a + b}`);
}

addNumbers();
