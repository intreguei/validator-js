import cnpj from "./cnpj";
import cpf from "./cpf";
export default ((name, value) => {
  var field = {
    name: name,
    valid: false
  };
  field.valid = cpf(name, value).valid || cnpj(name, value).valid;
  return field;
});
//# sourceMappingURL=cpfCnpj.js.map