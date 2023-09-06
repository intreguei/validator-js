import utils from "../utils/utils";
export default ((name, value) => {
  var field = {
    name: name,
    valid: false
  };
  if (value.length < 8 && typeof value === "string") return field;
  var totalLength = 11;
  var renavam = utils.removeWhiteSpace(value);
  if (renavam.length < totalLength) renavam = renavam.padStart(totalLength, "0");
  var digit = 0;
  var pattern = "3298765432";
  for (var i = 0; i < 10; i++) {
    digit += renavam[i] * pattern[i];
  }
  digit = digit * 10 % 11;
  digit = digit !== 10 ? digit : 0;
  field.valid = digit === parseInt(renavam[10], 10);
  return field;
});
//# sourceMappingURL=renavam.js.map