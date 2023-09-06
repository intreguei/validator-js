import validator from "../../validations/index.js";
describe("REGEX", () => {
  test("Validates regex", () => {
    var regex = /^[0-9]+$/;
    expect(validator.regex("regex", "123456789", regex).valid).toBe(true);
    expect(validator.regex("regex", "abc", regex).valid).toBe(false);
    expect(validator.regex("regex", "abc-123", regex).valid).toBe(false);
  });
});
//# sourceMappingURL=regex.spec.js.map