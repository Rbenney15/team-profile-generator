// 

test('set name as an argument' () => {
    const name = 'Joe'
    const e = new Employee(name);
    
    expect(e.name).toBe(name)
   })

   test('getName() to get name of employee' () => {
    const name = 'Joe'
    const e = new Employee(name);
    
    expect(e.getName()).toBe(name)
   })