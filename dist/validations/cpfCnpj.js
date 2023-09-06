import cnpj from "./cnpj.js";
import cpf from "./cpf.js";
export default ((name, value) => {
  var field = {
    name: name,
    valid: false
  };
  field.valid = cpf(name, value).valid || cnpj(name, value).valid;
  return field;
});