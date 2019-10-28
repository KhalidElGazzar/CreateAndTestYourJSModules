// This is where we place our modules and classes.

// Name changes from Person.js to modules.js so that it includes 
// functions related to Person, Pet. Also further modules can be 
// added in the future.

function Person(pFName, pLName, pBYear) {
    this.fName = pFName;
    this.lName = pLName;
    this.bYear = pBYear;

    this.age = function () {
        let currentYear = new Date().getFullYear();
        // console.log(`${currentYear} , ${this.bYear}`)
        return currentYear - this.bYear;
    }

    this.fullName = function () {
        return `${this.fName} ${this.lName}`;
    }
}

function Pet(pName, pSpecies, pAge) {
    this.name = pName;
    this.species = pSpecies;
    this.age = pAge;
    
    this.getName = function () {
        return this.name;
    }

    this.getAge = function () {
        return this.age;
    }

    function makeSound(){
        if (this.Species == "cat")
            console.log(`Meow, from ${this.name}`);
        else if (this.Species == "dog")
            console.log(`Raaff, from ${this.name}`);
        else
            console.log('Unknown species');
    }
}

module.exports = {
                    Person, 
                    Pet
                };