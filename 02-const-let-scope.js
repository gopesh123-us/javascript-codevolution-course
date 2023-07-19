function addNumbers() {
  const a = 10;
  const b = 20;
  const flag = true;

  if (flag) {
    const sum = a + b;
    console.log(`Inside if block - sum is: ${sum}`);
  }
  console.log(`Outside if block - sum is: ${a + b}`);
}

addNumbers();
