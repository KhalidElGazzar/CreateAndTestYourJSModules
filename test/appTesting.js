const assert = require ('chai').assert;
const app = require('../Person'); 

let Jon = new app('Jon', 'Adam', 1999);

// start a suit of tests
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

let Pam = new app('Pam', 'Andresen', 1970);

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