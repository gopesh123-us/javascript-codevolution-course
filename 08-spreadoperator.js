const arrayone = [1, 2, 3];
const arraytwo = [4, 5, 6];
const combined = [...arrayone, ...arraytwo];
console.log(combined);

const [one, two, ...rest] = combined;
console.log(one);
console.log(two);
//console.log(...rest);
console.log(...combined);

const alphabets = ["A", "B", "C", "D", "E", "F"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const [p, q, ...remaining] = alphabets;
console.log(p, q, remaining);
const alphanumeric = [...alphabets, ...numbers];
console.log("alphanumeric:", alphanumeric);
console.log(remaining);

//spread operator in case of objects
const employees = [
  {
    ename: "Kirti",
    eid: "k1",
    eroll: 1,
  },
  {
    ename: "Gopi",
    eid: "g1",
    eroll: 2,
  },
];

const { ename, eid, ...ebal } = employees[0];
console.log(ename, eid, ebal);

const mgrs = [
  {
    mname: "Sam",
    mid: "s1",
    mroll: 4,
  },
  {
    mname: "John",
    mid: "j1",
    mroll: 4,
  },
];

const data = [...employees, ...mgrs];
console.log(data);
