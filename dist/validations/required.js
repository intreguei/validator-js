import utils from "../utils/utils";
export default ((name, value) => {
  var field = {
    name: name,
    valid: false
  };
  if (utils.isNullOrUndefined(value)) {
    return field;
  }

  // incase a field considers `false` as an empty value like checkboxes.
  if (value === false) {
    return field;
  }
  field.valid = !!String(value).trim().length;
  return field;
});
//# sourceMappingURL=required.js.map