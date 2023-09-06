export default {
  matchesRange(cardNumber, min, max) {
    var maxLengthToCheck = String(min).length;
    var substr = cardNumber.substr(0, maxLengthToCheck);
    var integerRepresentationOfCardNumber = parseInt(substr, 10);
    min = parseInt(String(min).substr(0, substr.length), 10);
    max = parseInt(String(max).substr(0, substr.length), 10);
    return integerRepresentationOfCardNumber >= min && integerRepresentationOfCardNumber <= max;
  },
  matchesPattern(cardNumber, pattern) {
    pattern = String(pattern);
    return pattern.substring(0, cardNumber.length) === cardNumber.substring(0, pattern.length);
  },
  matches(cardNumber, pattern) {
    if (Array.isArray(pattern)) return this.matchesRange(cardNumber, pattern[0], pattern[1]);
    return this.matchesPattern(cardNumber, pattern);
  }
};
//# sourceMappingURL=matches.js.map