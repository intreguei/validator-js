import utils from "../utils/utils.js";

export default (name, value) => {
  let field = {
    name: name,
    masked: "",
  };

  if (typeof value === "number") value = String(value);
  if (typeof value !== "string") return field;

  let cep = utils.removeSpecialChars(value);
  cep = utils.removeWhiteSpace(cep);

  field.masked = cep.replace(/^(\d{0,5})(\d{0,3})$/, "$1-$2");

  return field;
};
