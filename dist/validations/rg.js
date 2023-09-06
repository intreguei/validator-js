import utils from "../utils/utils.js";
import hasSpecialCharacters from "./specialCharacters.js";
export default ((name, value) => {
  var field = {
    name: name,
    valid: false
  };
  if (typeof value === "number") value = String(value);
  if (typeof value !== "string") return field;
  var rg = utils.removeWhiteSpace(value);
  field.valid = hasSpecialCharacters("rg", rg).valid;
  return field;
});