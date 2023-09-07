person = {
  firstName: "Gopesh",
  middleName: "Kumar",
  lastName: "Sharma",
  currentAge: 55,
};

animal = {
  genere: "Dog",
  classes: "Land Animals",
  color: "Brown",
};

const fname = person.firstName;
const mname = person.middleName;
const lname = person.lastName;

console.log(fname);
console.log(mname);
console.log(lname);

function getPerson() {
  return this.person;
}

function getAnimal() {
  return this.animal;
}

const { firstName, lastName, middleName, currentAge: age } = getPerson();
console.log(firstName);
console.log(lastName);
console.log(middleName);
console.log(age);

const vehicals = ["Ford Expedition", "Sienna", "Camry"];
const [suv, van, sedan] = vehicals;
console.log("SUV:", suv);
console.log("VAN:", van);
console.log("CAR:", sedan);

//when a function returns an array, it becomes important
function calculate(a, b) {
  const add = a + b;
  const substract = a - b;
  const divide = a / b;
  const multiply = a * b;
  return [add, substract, divide, multiply];
}

const [addition, substration] = calculate(6, 3);
console.log("addition:", addition);
console.log("substraction:", substration);

const student = {
  sname: "Amit",
  sclass: "6th",
  sroll: "25",
  sage: "15",
};

const { sname, sage, sclass, ssection: section = "standard" } = student;
console.log(sname);
console.log(sage);
console.log(sclass);
console.log(section);

const vehicleOne = {
  brand: "Ford",
  model: "Mustang",
  type: "car",
  year: 2021,
  color: "red",
  registration: {
    city: "Houston",
    state: "Texas",
    country: "USA",
  },
};

const {
  brand,
  registration: { state },
} = vehicleOne;

function printBrandSate({ brand, registration: { state } }) {
  console.log(brand, state);
}

printBrandSate(vehicleOne);
