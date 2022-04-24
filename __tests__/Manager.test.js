const Manager = require('../lib/Manager');

describe('Manager', () => {
    describe('Start', () => {
        it('Should create an object with an id and name', () => {
            const manager = new Manager(789, 'Robert')

            expect(manager.id).toEqual(789);
            expect(manager.name).toEqual('Robert')
        });
    });
});