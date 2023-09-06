import utils from "../utils/utils.js";
export default ((name, value) => {
  var field = {
    name: name,
    valid: false
  };
  if (typeof value === "number") value = String(value);
  if (typeof value !== "string") return field;
  var regex = /^[\w&.-]+$/;
  value = utils.removeWhiteSpace(value);
  field.valid = regex.test(value);
  return field;
});