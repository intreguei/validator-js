import validator from "../../validations/index.js";
describe("Credit Card", () => {
  test("Validates Credit Card Date", () => {
    var valid = ["12/25", "12/27", "12/29"];
    var invalid = ["10/2008", "12/2003", "01/2004", "02/2004", "12/2001", "12/2000", "05/1993", "09/1996", "12/2002", "08/1996", "08/100", "01/09"];
    valid.forEach(value => expect(validator.creditCardDate("creditCardDate", value).valid).toBeTruthy());
    invalid.forEach(value => expect(validator.creditCardDate("creditCardDate", value).valid).toBeFalsy());
  });
});
//# sourceMappingURL=creditCardDate.spec.js.map