import utils from "../utils/utils.js";
export default ((name, value) => {
  var field = {
    name: name,
    masked: ""
  };
  if (typeof value === "number") value = String(value);
  if (typeof value !== "string") return field;
  var cpf = utils.removeSpecialChars(value);
  cpf = utils.removeWhiteSpace(cpf);
  field.masked = cpf.replace(/^(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,2})$/, "$1.$2.$3-$4");
  return field;
});