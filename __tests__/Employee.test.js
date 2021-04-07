const { TestScheduler } = require("@jest/core");
const Employee = require("../lib/Employee.js")

test("creates employee object", () => {

    const employee = new Employee("Aaron", 900, "@gmail.com");
    
    expect(employee.name).toBe("Aaron");
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe("@gmail.com");
});

test("Grabs name from object", () => {
    const employee = new Employee("Aaron", 900, "@gmail.com");

    expect(employee.getName()).toBe("Aaron");
});

test("Grabs id from object", () => {
    const employee = new Employee("Aaron", 900, "@gmail.com");

    expect(employee.getId()).toBe(900)
});

test("Grabs email from object", () => {
    const employee = new Employee("Aaron", 900, "@gmail.com");

    expect(employee.getEmail()).toBe("@gmail.com")
});

test("Grabs role from object", () => {
    const employee = new Employee("Aaron", 900, "@gmail.com");

    expect(employee.getRole()).toBe("Employee")
})




