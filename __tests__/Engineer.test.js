const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    describe('Start', () => {
        it('Should create an object with a name', () => {
            const engineer = new Engineer('Rob')
    
            expect(engineer.name).toEqual('Rob');
        });
    });
});