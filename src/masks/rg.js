import utils from "../utils/utils.js";

export default (name, value) => {
  let field = {
    name: name,
    masked: "",
  };

  if (typeof value === "number") value = String(value);
  if (typeof value !== "string") return field;

  let rg = utils.removeWhiteSpace(value);

  field.masked = rg.replace(/^(\d{0,2})(\d{0,3})(\d{0,3})([\dX])$/, "$1.$2.$3-$4");

  return field;
};
