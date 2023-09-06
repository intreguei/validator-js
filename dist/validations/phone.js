import utils from "../utils/utils";
export default ((name, value) => {
  var field = {
    name: name,
    valid: false
  };
  var re = /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})-?(\d{4}))$/;
  var phone = utils.removeSpecialChars(value);
  phone = utils.removeWhiteSpace(phone);
  field.valid = re.test(phone);
  return field;
});
//# sourceMappingURL=phone.js.map