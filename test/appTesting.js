// This is the file performing the unit tests for functions 
// and classess within the Modules.js.

const assert = require ('chai').assert;

const personApp = require('../Modules').Person; 
let Jon = new personApp('Jon', 'Adam', 1999);

const petApp = require('../Modules').Pet; 
let Fluffy = new petApp('Fluffy','cat',4);

// start a suit of tests for Person
describe('TS#1 - Testing Person Class (Jon)', function(){
    it('TS#1.TC#1 - Person fullName (Jon Adam) should string value', function(){
        assert.typeOf(Jon.fullName(), 'string');
    })

    it('TS#1.TC#2 - Person fullName (Jon Adam) should return concatenation of fName and lName', function(){
        assert.equal(Jon.fullName(), 'Jon Adam');
    })

    it('TS#1.TC#3 - Age (Jon Adam) should be of type number', function(){
        assert.typeOf(Jon.age(), 'number');
    })

    it('TS#1.TC#4 - Age (Jon Adam) is 20', function(){
        assert.equal(Jon.age(), 20)
    })
})

let Pam = new personApp('Pam', 'Andresen', 1970);

// start a suit of tests
describe('TS#2 - Testing Person Class (Pam)', function(){
    it('TS#1.TC#1 - Person fullName (Jon Adam) should string value', function(){
        assert.typeOf(Pam.fullName(), 'string');
    })

    it('TS#2.TC#2 - Person fullName (Jon Adam) should return concatenation of fName and lName', function(){
        assert.equal(Pam.fullName(), 'Pam Andresen');
    })

    it('TS#2.TC#3 - Age (Jon Adam) should be of type number', function(){
        assert.typeOf(Pam.age(), 'number');
    })

    it('TS#2.TC#4 - Age (Jon Adam) is 20', function(){
        assert.equal(Pam.age(), 49);
    })
})

// start a suit of tests for Pet
describe('TS#3 - Testing Pet Class (Fluffy)', function(){
    it('TS#3.TC#1 - Pet name (Fluffy) should string value', function(){
        assert.typeOf(Fluffy.getName(), 'string');
    })

    it('TS#3.TC#2 - Pet name (Fluffy) should return Fluffy', function(){
        assert.equal(Fluffy.getName(), 'Fluffy');
    })

    it('TS#3.TC#3 - Pet age (Fluffy) should be of type number', function(){
        assert.typeOf(Fluffy.getAge(), 'number');
    })

    it('TS#3.TC#4 - Pet Age (Fluffy) is 4', function(){
        assert.equal(Fluffy.getAge(), 4)
    })
})
