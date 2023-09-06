import utils from "../utils/utils";
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
//# sourceMappingURL=number.js.map