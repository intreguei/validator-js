import validator from "../../validations/index.js";
describe("RG", () => {
  test("Validates RG", () => {
    var valid = ["282940297", "401887856", "379669614", 113440492, "11.550.559-3"];
    var invalid = ["@@@", "37966961!!!!", false];
    valid.forEach(value => expect(validator.rg("rg", value).valid).toBeTruthy());
    invalid.forEach(value => expect(validator.rg("rg", value).valid).toBeFalsy());
  });
});