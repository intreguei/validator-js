export default ((name, value) => {
  var field = {
    name: name,
    valid: false
  };
  var res = value.split("/");
  var cardDate = new Date();
  var today = new Date();
  var yLength = res[1].length;
  if (yLength > 2 && yLength < 4) return field;
  var yy = yLength == 4 ? res[1] : "20".concat(res[1]);
  cardDate.setFullYear(yy, res[0], 1);
  field.valid = cardDate > today;
  return field;
});