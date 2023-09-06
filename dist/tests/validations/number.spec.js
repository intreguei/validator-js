import validator from "../../validations/index.js";
describe("Number", () => {
  test("Validates Number", () => {
    var valid = ["12", "1111111", "551137673866", "1234567890"];
    var invalid = ["aaaaa", "bbbbb", "@@!##$@"];
    valid.forEach(value => expect(validator.number("number", value).valid).toBeTruthy());
    invalid.forEach(value => expect(validator.number("number", value).valid).toBeFalsy());
  });
});