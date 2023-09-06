import utils from "../utils/utils.js";
export default ((name, value) => {
  var field = {
    name: name,
    valid: false
  };
  var re = /^[a-zA-Z]+$/g;
  var letter = utils.removeWhiteSpace(value);
  field.valid = re.test(letter);
  return field;
});