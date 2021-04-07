const { test, expect } = require("@jest/globals");
const Intern = require("../lib/Intern.js");

test("Creates Intern object with parent constructor", () => {
    const intern = new Intern("Aaron", 100, "test", "UCB")

    expect(intern.school).toBe("UCB");
});

test("Gets school from object", () => {
    const intern = new Intern("Aaron", 100, "test", "UCB")

    expect(intern.getSchool()).toBe("UCB");
});

test("Gets intern role from object", () => {
    const intern = new Intern("Aaron", 100, "test", "UCB")

    expect(intern.getRole()).toBe("Intern");
});