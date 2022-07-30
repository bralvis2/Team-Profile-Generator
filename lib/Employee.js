class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }


    printEmployee() {
        return this.name, this.id, this.email;
    }
}

module.exports = Employee;