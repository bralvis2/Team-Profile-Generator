const Employee = require('./Employee');

class Intern extends Employee {
    constructor (name, id, email, school){
        // employee constructor
        super (name, id, email);
        // unique to Engineer
        this.school = school;
    }

    getSchool (){
        return this.school;
    }
}

module.exports = Intern