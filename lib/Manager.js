const Employee = require('./Employee');

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        // employee constructor
        super (name, id, email);
        // unique to manager
        this.officeNumber = officeNumber;
    }

    getRole (){
        return '☕ Manager'
    }
}

