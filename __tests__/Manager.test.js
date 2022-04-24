const Manager = require('../lib/Manager');

describe('Manager', () => {
    describe('Start', () => {
        it('Should create an object with a name', () => {
            const manager = new Manager('Robert')

            expect(manager.name).toEqual('Robert')
        });
    });
});