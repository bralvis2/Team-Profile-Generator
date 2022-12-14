const Employee = require('./Employee');

class Engineer extends Employee {
    constructor (name, id, email, github){
        // employee constructor
        super (name, id, email);
        // unique to Engineer
        this.github = github;
    }

    getGithub (){
        return this.github;
    }

    getRole(){
        return 'Engineer'
    }
}

module.exports = Engineer