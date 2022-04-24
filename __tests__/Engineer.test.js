const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    describe('Start', () => {
        it('Shoudl create an object with an id and name', () => {
            const engineer = new Engineer(789, 'Roberto')

            expect(engineer.id).toEqual(789);
            expect(engineer.name).toEqual('Roberto');
        });
    });
});