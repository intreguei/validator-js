import utils from "../utils/utils";
export default ((name, value) => {
  var field = {
    name: name,
    valid: false
  };
  var cep = utils.removeWhiteSpace(value);
  var hasNoChar = /\D/g;
  if (hasNoChar.test(cep)) {
    var _re = /\d{5}-\d{3}/;
    field.valid = _re.test(cep);
  } else {
    cep = utils.removeSpecialChars(cep);
    if (cep.length === 8) {
      var hasNumbers = /\d/g;
      field.valid = hasNumbers.test(cep);
    } else {
      field.valid = false;
    }
  }
  return field;
});
//# sourceMappingURL=cep.js.map