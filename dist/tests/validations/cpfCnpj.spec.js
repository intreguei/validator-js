import validator from "../../validations/index.js";
describe("CPF&CNPJ", () => {
  test("Validates CPF&CNPJ", () => {
    var valid = ["71.677.506/0001-88", "77.899.087/0001-05", "75.889.932/0001-36", "094.521.100-74", "229.969.000-06", "539.342.830-80"];
    var invalid = ["11111111111111", "00000000000000", "75.889", "0001-36", "087/", "11111111111", "00000000000", "094.521.", "094"];
    valid.forEach(value => expect(validator.cpfCnpj("cpfCnpj", value).valid).toBeTruthy());
    invalid.forEach(value => expect(validator.cpfCnpj("cpfCnpj", value).valid).toBeFalsy());
  });
});
//# sourceMappingURL=cpfCnpj.spec.js.map