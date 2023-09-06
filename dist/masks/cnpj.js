import utils from "../utils/utils.js";
export default ((name, value) => {
  var field = {
    name: name,
    masked: ""
  };
  if (typeof value === "number") value = String(value);
  if (typeof value !== "string") return field;
  var cnpj = utils.removeSpecialChars(value);
  cnpj = utils.removeWhiteSpace(cnpj);
  field.masked = cnpj.replace(/^(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,4})(\d{0,2})$/, "$1.$2.$3/$4-$5");
  return field;
});