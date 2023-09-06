import utils from "../utils/utils.js";
export default ((name, value) => {
  var field = {
    name: name,
    valid: false
  };
  var re = /^[0-9]+$/;
  var num = utils.removeWhiteSpace(value);
  field.valid = re.test(num);
  return field;
});