// import utils from "../utils/utils.js";
// import validNumber from "./number.js";
// import validLetter from "./letter.js";

export default (name, data) => {
  // const { number, owner, cvv, date } = data
  const field = {
    name: name,
    valid: false,
    errorType: "",
    data, // TODO (remove)
  };

  return field;
};
