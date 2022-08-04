const Employee = require('../lib/Employee');

describe('Employee', () => {

    const brenda = new Employee("Brenda", 1, "ba@gmail.com")
    it('Should return the name, id, and email for an employee', () => {
        expect(brenda.getName()).toBe("Brenda");
        expect(brenda.getId()).toBe(1);
        expect(brenda.getEmail()).toBe("ba@gmail.com");
    });

   
})