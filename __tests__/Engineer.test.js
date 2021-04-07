const Engineer = require("../lib/Engineer.js");
const { expect, test } = require("@jest/globals");

test("creates Engineer object with parent Employee", () => {
    const engineer = new Engineer("Aaron", 100, "test", "aaronquach12341");

    expect(engineer.github).toBe("aaronquach12341")

})

test("Gets Github username from object", () => {
    const engineer = new Engineer("Aaron", 100, "test", "aaronquach12341");
    
    expect(engineer.getGithub()).toBe("aaronquach12341");
});

test("Gets role of engineer from object", () => {
    const engineer = new Engineer("Aaron", 100, "test", "aaronquach12341");

    expect(engineer.getRole()).toBe("Engineer");
})