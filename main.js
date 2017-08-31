const test = 2;
let test2 = test;
test2 = 4;

// console.log(test);
// console.log(test2);

const string = "hello";
let string2 = string;

string2 = "goodbye";

// console.log(string);
// console.log(string2);
// //////////////////////////////////////////////
/*
OBJECTS
*/
// /////////////////////////////////////////////
const person = {
  name: "Ville",
  age: 31
}

const person4 = {
  age: 20,
  climber: true
}
const person5 = {
  cooks: true
}

// let person2 = person;
// let person3 = person2;

// person2.name = "Thierry";
// person3.age = 25;

const person2 = Object.assign({}, person, person4, person5, {
  name: "Thierry"
})

const person3 = {...person,...person4, age: 23, support: true, name: "Carl"};

// console.log(person);
// console.log(person2);
// console.log(person3);

// console.log(person);
// console.log(person2);
// console.log(person3);
// //////////////////////////////////////////////
/*
ARRAYS
*/
// /////////////////////////////////////////////
const array = [1,2,3,4];
const array2 = ['Hello', 'Goodbye'];
const objectArray = [
  {
    name: "Ville",
    age: 31
  },
  {
    name: "Fredrik",
    age: 26
  }
]
// let myArray2 = myArray;
// myArray2.push(5);
// console.log(myArray);

const array3 = array.concat(array2);
const array4 = [...array,...array2, 5]

const objectArray2 = objectArray.map((person) => {
  if(person.name === "Fredrik") {
    return {...person, last_name: "Renstrom"}
  }
  return person;
});

const filteredArray = array.filter(number => number < 4);

const chainedArray = array.filter(number => number >= 3).map(number => {
  if(number === 4) {
    return "Four"
  }
  return number;
})


// const reduced = array.reduce((accumulator, number) => {
//   return accumulator + number;
// })
// console.log(reduced);

// console.log(filteredArray);
// console.log(objectArray2);
// console.log(objectArray);
