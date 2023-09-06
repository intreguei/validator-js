import validator from "../../validations/index.js";
describe("CEP", () => {
  test("Validates CEP", () => {
    var valid = ["38055-090", "68911-153", "79815-714", "09750040", "09750030"];
    var invalid = ["91120", "aaaaaaa", "29.", "1-153", "097500", "0975AAA0"];
    valid.forEach(value => expect(validator.cep("cep", value).valid).toBeTruthy());
    invalid.forEach(value => expect(validator.cep("cep", value).valid).toBeFalsy());
  });
});
//# sourceMappingURL=cep.spec.js.map