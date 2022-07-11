

const Employee = require("lib/employee.js");
const { default: test } = require("node:test");

const employee = new Employee("Robert", "512-210", "robert@bob.com")

test("", () => {
    expect(employee.name).toBe("Robert");
    expect(employee.id).toBe("521-210");
    expect(employee.email).toBe("Robert@bob.com")

});

test("", () => {
    expect(employee.getName()).toBe("Robert")
});


test("", () => {
    expect(employee.getId()).toBe("512-210")
});

test("", () => {
    expect(employee.getEmail()).toBe("Robert@bob.com")
});