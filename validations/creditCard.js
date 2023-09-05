// import utils from "../utils/utils";
// import validNumber from "./number";
// import validLetter from "./letter";

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
