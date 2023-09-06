import validator from "../../validations/index.js";
describe("Email", () => {
  test("Validates Email", () => {
    var valid = ["someone@example.com", "someone@example.co", "someone123@example.co.uk", "Pelé@example.com", "very.common@example.com", "other.email-with-dash@example.com", "disposable.style.email.with+symbol@example.com"];
    var invalid = ["@example.com", "@example", undefined, null, "undefined", "null", "someone@example.c", "som*eone@example.c"];
    valid.forEach(value => expect(validator.email("email", value).valid).toBeTruthy());
    invalid.forEach(value => expect(validator.email("email", value).valid).toBeFalsy());
  });
});
//# sourceMappingURL=email.spec.js.map