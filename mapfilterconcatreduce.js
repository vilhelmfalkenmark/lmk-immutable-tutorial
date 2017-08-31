const person = {
  name: 'Name',
  age: 100,
  male: false,
  climbs: false
}

const people = [
  {
    name: 'Fredrik',
    age: 25,
    male: true,
    climbs: false
  }, {
    name: 'Ville',
    age: 31,
    male: true,
    climbs: true
  }, {
    name: 'Britta',
    age: 34,
    male: false,
    climbs: false
  }, {
    name: 'Johan',
    age: 38,
    male: true,
    climbs: true
  }, {
    name: 'Thierry',
    age: 30,
    male: true,
    climbs: true
  }
];


// //////////////////////////////////////////////
/*
Task 1.

Create an array that only contains people older
than 30
*/
// /////////////////////////////////////////////

// const filterFunction = person => {
//   return person.age > 30
// }
// const task1 = people.filter(filterFunction);
// console.log(task1);

// //////////////////////////////////////////////
/*
Task 2.

Create an array where we take everything from
The original array. Dont change anything
*/
// /////////////////////////////////////////////
// const task2 = Object.assign([], people);
// const task2 = [...people];
// const task2 = people.map(person => person)
// const task2 = people.concat()
// const task2 = people.concat(5).filter(person => typeof(person) === "object");

// console.log(task2);

// //////////////////////////////////////////////
/*
Task 3.

Create an array where we add Carl
with the help of the person Object
*/
// /////////////////////////////////////////////
// const task3 = Object.assign({}, person, {
//   name: "Carl"
// });

// const array = people.concat(task3)
// const array = people.concat(Object.assign({}, person, {
//   name: "Carl"
// }));
// const array = people.concat({...person, name: "Carl"});

// console.log(array);


// //////////////////////////////////////////////
/*
Task 4.

Create an array where we change the name of the
person to Mike if that person climbs
otherwise name it Hans
*/
// /////////////////////////////////////////////
// const task4 = people.map(person => {
//   if(person.climbs === true) {
//     return Object.assign({}, person, {
//       name: "Mike"
//     })
//   }
//   return Object.assign({}, person, {
//     name: "Hans"
//   })
// })

// const task4 = people.map(person => {
//   if(person.climbs === true) {
//     return {...person, name: "Mike"}
//   }
//   return {...person, name: "Hans"}
// });

// const task4 = people.map(person =>
//   person.climbs ?
//   {...person, name: "Mike"} :
//   {...person, name: "Hans"}
// );

// console.log(task4);
// //////////////////////////////////////////////
/*
Task 5.

Create an array where we remove everyone that doesnt climb.
After that add Florian to the new array
*/
// /////////////////////////////////////////////
// const task5 = people.filter(person_I => person_I.climbs).concat({...person, name: "Florian", climbs: true});

// console.log(task5);

// //////////////////////////////////////////////
/*
Task 6.

Create a new variable where we calculate the age
of everyone younger than 35 (< 35 )
*/
// /////////////////////////////////////////////

// const task6 = people.map(person => person.age).filter(age => age < 35).reduce((accumulator, age) => {
//   return accumulator + age;
// });

// console.log(task6);

// //////////////////////////////////////////////
/*
Task 7.

Create an array where we

1. Add Simon
2. Remove every climber
3. Create an array only containing the ages (As Ints, not objects)
4. Returns the total age of everyone remaining
*/
// /////////////////////////////////////////////
