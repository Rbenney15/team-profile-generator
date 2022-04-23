// In addition to Employee's properties and methods
// officeNumber
// getRole() // Overridden to return 'Manager'

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email);

        this.officeNumber = officeNumber;
    }

    getRole() {
        return 'Manager'
    }

    getOfficeNumber() {
        return this.officeNumber
    }
};

module.exports = Manager;