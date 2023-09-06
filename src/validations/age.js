// import utils from "../utils/utils.js";

export default (name, data) => {
  // const { value, condition, age } = data;
  let field = {
    name: name,
    valid: false,
    data, // TODO (remove)
  };
  // '===', '>=', '<=', '<', '>', '!=='
  return field;
};
