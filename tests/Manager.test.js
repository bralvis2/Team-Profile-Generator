const Manager = require('../lib/Manager');

describe('Manager', () => {

    const brenda = new Manager ("Brenda", 1, "brenda@gmail.com", "123-456-7890")
    it('Should return the name, id, and office number for an employee', () => {
        expect(brenda.getName()).toBe("Brenda");
        expect(brenda.getId()).toBe(1);
        expect(brenda.getEmail()).toBe("brenda@gmail.com");
        expect(brenda.getOfficeNumber()).toBe("123-456-7890");
    });

   
})