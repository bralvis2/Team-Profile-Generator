const employeeTest = require('../lib/Employee');

describe('employeeTest', () => {
    it('Should return the name, id, and email for an employee', () => {
        expect(employeeTest([0])).toBe('Brenda');
        expect(employeeTest([1])).toBe(001);
        expect(employeeTest([2])).toBe('brenda.alvis@yahoo.com');
    });

    it('should return Please enter a valid response if not name, id, or email', () => {
        expect(employeeTest([0])).toBe
    })
})