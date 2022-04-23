// In addition to Employee's properties and methods
// github // GitHub username
// getGithub()
// getRole() // Overridden to return 'Engineer'

class Engineer extends Employee {
    constructor(name, id, email, github) {
      super(name, id, email);
  
      this.github = github;
    }

    getRole() {
        return 'Engineer'
    }

    getgithub() {
        return this.github
    }
};

module.exports = Engineer;