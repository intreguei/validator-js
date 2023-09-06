import validator from "../../validations/index.js";
describe("Required", () => {
  test("Validates Required", () => {
    var valid = ["asjdj", 0, "undefined", "null", "s ", true];
    var checkboxe = false;
    var invalid = ["", " ", [], undefined, null];
    valid.forEach(value => expect(validator.required("required", value).valid).toBeTruthy());
    expect(validator.required("required", checkboxe).valid).toBeFalsy();
    invalid.forEach(value => expect(validator.required("required", value).valid).toBeFalsy());
  });
});
//# sourceMappingURL=required.spec.js.map