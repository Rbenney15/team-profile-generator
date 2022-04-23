const { TestWatcher } = require('jest');
const Employee = require('../lib/Employee.js');
const Manager = require('../lib/Manager');

test('getrole() should return Manager' () => {
 const lead = new Manager('Joe', 100, 'abc@abc.com', 6);
 
 expect(lead.getRole()).toBe('Manager')
})

test('get officeNumber() should return' () => {
    const testValue = 500
    const lead = new Manager('Joe', 100, 'abc@abc.com', testValue);
    
    expect(lead.officeNumber).toBe(testValue)
})