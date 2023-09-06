import utils from "../utils/utils";
export default ((name, value) => {
  var field = {
    name: name,
    masked: ""
  };
  if (typeof value === "number") value = String(value);
  if (typeof value !== "string") return field;
  var rg = utils.removeWhiteSpace(value);
  field.masked = rg.replace(/^(\d{1,2})(\d{3})(\d{3})([\dX])$/, "$1.$2.$3-$4");
  return field;
});
//# sourceMappingURL=rg.js.map