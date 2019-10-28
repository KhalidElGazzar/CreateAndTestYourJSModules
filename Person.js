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

module.exports = Person;