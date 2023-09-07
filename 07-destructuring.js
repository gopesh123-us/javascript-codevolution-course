person = {
  firstName: "Gopesh",
  middleName: "Kumar",
  lastName: "Sharma",
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

const { firstName, lastName, middleName } = getPerson();
console.log(firstName);
console.log(lastName);
console.log(middleName);
