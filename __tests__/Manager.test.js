const { test, expect } = require("@jest/globals");
const Manager = require("../lib/Manager.js");

test("Creates manager object with parent constructor", () => {
    const manager = new Manager("Aaron", 900, "@gmail.com", 1)

    expect(manager.officeNumber).toBe(1);
});

test("get Manager role for object", () => {
    const manager = new Manager("Aaron", 900, "@gmail.com", 1)
    
    expect(manager.getRole()).toBe("Manager");
});