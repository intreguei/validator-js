import validator from "../../validations/index.js";
describe("Letter", () => {
  test("Validates Letter", () => {
    var invalid = ["12", "1111111", "551137673866", "1234567890"];
    var valid = ["aaaaa", "bbbbb", "cccccc"];
    valid.forEach(value => expect(validator.letter("letter", value).valid).toBeTruthy());
    invalid.forEach(value => expect(validator.letter("letter", value).valid).toBeFalsy());
  });
});