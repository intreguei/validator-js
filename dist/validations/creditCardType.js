import utils from "../utils/utils";
import matches from "../utils/matches";
import types from "../utils/card-types";
var cardNames = {
  VISA: "visa",
  MASTERCARD: "mastercard",
  AMERICAN_EXPRESS: "american-express",
  DINERS_CLUB: "diners-club",
  DISCOVER: "discover",
  JCB: "jcb",
  UNIONPAY: "unionpay",
  MAESTRO: "maestro",
  ELO: "elo",
  MIR: "mir",
  HIPER: "hiper",
  HIPERCARD: "hipercard"
};
var ORIGINAL_TEST_ORDER = [cardNames.VISA, cardNames.MASTERCARD, cardNames.AMERICAN_EXPRESS, cardNames.DINERS_CLUB, cardNames.DISCOVER, cardNames.JCB, cardNames.UNIONPAY, cardNames.MAESTRO, cardNames.ELO, cardNames.MIR, cardNames.HIPER, cardNames.HIPERCARD];
var testOrder = utils.clone(ORIGINAL_TEST_ORDER);
export default {
  findType(type) {
    return types[type];
  },
  addMatchingCardsToResults(cardNumber, cardConfiguration, results) {
    var i, pattern, patternLength, clonedCardConfiguration;
    for (i = 0; i < cardConfiguration.patterns.length; i++) {
      pattern = cardConfiguration.patterns[i];
      if (!matches.matches(cardNumber, pattern)) continue;
      clonedCardConfiguration = utils.clone(cardConfiguration);
      if (Array.isArray(pattern)) {
        patternLength = String(pattern[0]).length;
      } else {
        patternLength = String(pattern).length;
      }
      if (cardNumber.length >= patternLength) clonedCardConfiguration.matchStrength = patternLength;
      results.push(clonedCardConfiguration);
      break;
    }
  },
  get(cardNumber) {
    var results = [];
    testOrder.forEach(type => {
      var cardConfiguration = this.findType(type);
      this.addMatchingCardsToResults(cardNumber, cardConfiguration, results);
    });
    return results;
  }
};
//# sourceMappingURL=creditCardType.js.map