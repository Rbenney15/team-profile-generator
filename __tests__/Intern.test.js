const Intern = require('../lib/Intern');

describe('Intern', () => {
    describe('Start', () => {
        it('Should create an object with a name', () => {
            const intern = new Intern('Roberto')

            expect(intern.name).toEqual('Roberto');
        });
    });
});
