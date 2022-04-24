const Employee = require('../lib/Employee')

describe('Employee', () => {
    describe('Start', () => {
        it('Should create an object with a name', () => {
            const employee = new Employee('Rob')

            expect(employee.name).toEqual('Rob');
        });
    });
});