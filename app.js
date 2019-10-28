// This is the main entry point of the App.

let Person = require ('./Person');

let Jason = new Person("Jason", "Smith", 1985);
console.log(Jason.fullName());
console.log(Jason.age());

let Jane = new Person("Jane", "Adams", 1984);
console.log(Jane.fullName());
console.log(Jane.age());
