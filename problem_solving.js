/*
1. Task: Array Filtering and Mapping
Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.
*/

// solution
const people = [
  { name: "John", age: 25, gender: "male" },
  { name: "Jane", age: 30, gender: "female" },
  { name: "Mike", age: 20, gender: "male" },
  { name: "Emily", age: 35, gender: "female" },
];

const filterMalesAndMapNames = (people) => {
  return people.filter((person) => person.gender === "male").map((person) => person.name);
};

console.log(filterMalesAndMapNames(people));
// Output: ['John', 'Mike']

/*
2. Task: Object Manipulation
Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result.
*/

// solution
const books = [
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
];

const getBookTitles = (books) => {
  return books.map((book) => book.title);
};

console.log(getBookTitles(books));
// Output: ['To Kill a Mockingbird', '1984', 'The Great Gatsby']

/*
3. Task: Function Composition
Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.
*/

// solution
const square = (num) => num * num;
const double = (num) => num * 2;
const addFive = (num) => num + 5;

const composeFunctions = (num) => addFive(double(square(num)));

console.log(composeFunctions(3));
// Output: 23 (3^2 = 9, 9*2 = 18, 18+5 = 23)

/*
4. Task: Sorting Objects
Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array.
*/

// solution
const cars = [
  { make: "Toyota", model: "Corolla", year: 2015 },
  { make: "Honda", model: "Civic", year: 2012 },
  { make: "Ford", model: "Fiesta", year: 2018 },
];

const sortCarsByYear = (cars) => {
  return cars.sort((a, b) => a.year - b.year);
};

console.log(sortCarsByYear(cars));
// Output:
// [
//   { make: 'Honda', model: 'Civic', year: 2012 },
//   { make: 'Toyota', model: 'Corolla', year: 2015 },
//   { make: 'Ford', model: 'Fiesta', year: 2018 }
// ]

/*
5. Task: Find and Modify
Write a function that searches an array of objects for a specific person by name. If found, modify their age property. Print the updated array.
*/

// solution
const friends = [
  { name: "John", age: 25, gender: "male" },
  { name: "Jane", age: 30, gender: "female" },
  { name: "Mike", age: 20, gender: "male" },
];

const findAndModifyAge = (friends, name, newAge) => {
  const person = friends.find((person) => person.name === name);
  if (person) {
    person.age = newAge;
  }
  return friends;
};

console.log(findAndModifyAge(friends, "Jane", 35));
// Output:
// [
//   { name: 'John', age: 25, gender: 'male' },
//   { name: 'Jane', age: 35, gender: 'female' },
//   { name: 'Mike', age: 20, gender: 'male' }
// ]

// ========end==========
