import validator from "../../validations/index.js";
describe("CNPJ", () => {
  test("Validates CNPJ", () => {
    var valid = ["71.677.506/0001-88", "77.899.087/0001-05", "75.889.932/0001-36", "93462543000101", "39483185000178", "91021389000107"];
    var invalid = ["11111111111111", "00000000000000", "50.418.706/0001-4644", "50.418.706/0", "75.889", "0001-36", "087/"];
    valid.forEach(value => expect(validator.cnpj("cnpj", value).valid).toBeTruthy());
    invalid.forEach(value => expect(validator.cnpj("cnpj", value).valid).toBeFalsy());
  });
});