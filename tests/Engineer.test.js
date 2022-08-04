const Engineer = require('../lib/Engineer');

describe('Engineer', () => {

    const mia = new Engineer("Mia", 2, "mia@gmail.com", 'mialvis2')
    it('Should return the name, id, email and github for an employee', () => {
        expect(mia.getName()).toBe("Mia");
        expect(mia.getId()).toBe(2);
        expect(mia.getEmail()).toBe("mia@gmail.com");
        expect(mia.getGithub()).toBe("mialvis2");
    });

   
})