import utils from "../utils/utils.js";
export default ((name, value) => {
  var cnhCalc = function cnhCalc(partial) {
    var s = 0;
    for (var i = 0, j = 2; i < partial.length; i++, j++) {
      s += parseInt(partial[i]) * j;
    }
    var leftover = s % 11;
    return leftover <= 1 ? 0 : 11 - leftover;
  };
  var re = /^[0-9]*$/;
  var field = {
    name: name,
    valid: false
  };
  var cnh = utils.removeWhiteSpace(value);
  if (cnh.length > 11 || cnh.length <= 3) return field;
  if (!re.test(cnh)) return field;
  var partial = value.substr(0, 9);
  var dv1 = cnhCalc(partial);
  var dv2 = cnhCalc(dv1 + partial);
  field.valid = "" + dv1 + dv2 === value.substr(-2);
  return field;
});