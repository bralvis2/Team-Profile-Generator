const Intern = require('../lib/Intern');

describe('Intern', () => {

    const vino = new Intern("Vino", 3, "vino@gmail.com", 'UT')
    it('Should return the name, id, email and school for an employee', () => {
        expect(vino.getName()).toBe("Vino");
        expect(vino.getId()).toBe(3);
        expect(vino.getEmail()).toBe("vino@gmail.com");
        expect(vino.getSchool()).toBe("UT");
    });

   
})