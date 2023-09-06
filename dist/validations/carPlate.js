import utils from "../utils/utils.js";
export default ((name, value) => {
  var field = {
    name: name,
    valid: false
  };
  var regexOldPlate = /^[A-Z]{3}\d{4}$/gm;
  var regexNewPlate = /[A-Z]{3}[0-9][A-Z][0-9]{2}/gm;
  var plate = value.replace("-", "");
  plate = utils.removeWhiteSpace(plate);
  if (plate.length > 7 || plate.length < 7) return field;
  field.valid = regexOldPlate.test(plate) || regexNewPlate.test(plate);
  return field;
});