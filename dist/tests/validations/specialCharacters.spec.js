import validator from "../../validations/index.js";
describe("Special Characters", () => {
  test("Validates Special Characters", () => {
    var valid = ["282940297", "00000000000", "AAAAAAAccccccc", "12345asdfgh", 11111111];
    var invalid = ["@@@@q4344", "!@$#$#", "asd@@@@", "@@@", false, "∆˚"];
    valid.forEach(value => expect(validator.specialCharacters("specialCharacters", value).valid).toBeTruthy());
    invalid.forEach(value => expect(validator.specialCharacters("specialCharacters", value).valid).toBeFalsy());
  });
});
//# sourceMappingURL=specialCharacters.spec.js.map