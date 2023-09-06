import cnpj from "./cnpj.js";
import cpf from "./cpf.js";

export default (name, value) => {
  let field = {
    name: name,
    masked: "",
  };

  field.masked = cpf(name, value).masked || cnpj(name, value).masked;
  return field;
};
