import utils from "../../utils/utils";
describe("UTILS", () => {
  test("Test isNullOrUndefined function", () => {
    var valid = null;
    var invalid = "algo";
    var validFlag = utils.isNullOrUndefined(valid);
    var invalidFlag = utils.isNullOrUndefined(invalid);
    expect(validFlag).toBeTruthy();
    expect(invalidFlag).toBeFalsy();
  });
  test("Test replaceSpecialCharacters function", () => {
    utils.substitionDict = true;
    var valid = "ãéìöùçñ";
    var replaced = utils.replaceSpecialCharacters(valid);
    expect(replaced).toBe("aeioucn");
  });
  test("Test removeWhiteSpace function", () => {
    var valid = "aaaa            bbbbbbb        cccccc  ";
    var invalid = "";
    var trim = utils.removeWhiteSpace(valid);
    var invalidRule = utils.removeWhiteSpace(invalid);
    expect(trim).toBe("aaaabbbbbbbcccccc");
    expect(invalidRule).toBe("");
  });
  test("Test removeSpecialChars function", () => {
    var valid = "ABCDEF";
    var invalid = "AB@C!D%E*F";
    var validFlag = utils.removeSpecialChars(valid);
    var invalidFlag = utils.removeSpecialChars(invalid);
    expect(validFlag).toBe("ABCDEF");
    expect(invalidFlag).toBe("ABCDEF");
  });
  test("Test clone function", () => {
    var resultInvalid = utils.clone(null);
    expect(resultInvalid).toBe(null);
  });
});
//# sourceMappingURL=utils.spec.js.map