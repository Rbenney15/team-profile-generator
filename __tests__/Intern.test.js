const Intern = require('../lib/Intern');

describe('Intern', () => {
    describe('Start', () => {
        it('Should create an object with an id and name', () => {
            const intern = new Intern(123, 'Rob')

            expect(intern.id).toEqual(123);
            expect(intern.name).toEqual('Rob');
        })
    })
});
