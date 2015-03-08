'use strict';

/**
 * @param {Number} identifier - identification number
 */
var luhnCheck = function(identifier) {
  var isValid = false;
  var checkDigit = 0;
  var sumOfAllNumbers = 0;
  var reversedIdentifier = [];

  // cache the last digit of the identifier
  var identifierString = identifier.toString();
  checkDigit = identifierString.charAt(identifierString.length - 1);
  checkDigit = parseInt(checkDigit, 10);

  reversedIdentifier = identifierString
    .slice(0, identifierString.length - 1)
    .split('')
    .reverse();

  // convert every items to number
  for (var i = 0; i < reversedIdentifier.length; i++) {
    reversedIdentifier[i] = parseInt(reversedIdentifier[i], 10);
  }

  var index = 0;
  var digit = 1;
  for (; index < reversedIdentifier.length; index++, digit++) {
    if (digit % 2 > 0) {
      reversedIdentifier[index] = reversedIdentifier[index] * 2;
    }

    if (reversedIdentifier[index] > 9) {
      reversedIdentifier[index] = reversedIdentifier[index] - 9;
    }

    sumOfAllNumbers += reversedIdentifier[index];
  }

  if ((sumOfAllNumbers % 10) + checkDigit === 10) {
    isValid = true;
  } else {
    isValid = false;
  }

  return isValid;
};

module.exports = luhnCheck;
