'use strict';

/**
 * @param {Number} identifier - identification number
 */
var luhnCheck = function(identifier) {
  var isValid = false;
  var checkDigit = 0;
  var sumOfAllNumbers = 0;

  // cache the last digit of the identifier
  var ccInString = identifier.toString();
  checkDigit = ccInString.charAt(ccInString.length - 1);
  checkDigit = parseInt(checkDigit, 10);
  ccInString = ccInString.slice(0, ccInString.length - 1);

  // convert to array and reverse it
  var ccInArray = ccInString.split('');
  ccInArray = ccInArray.reverse();

  // convert every items to number
  for (var i = 0; i < ccInArray.length; i++) {
    ccInArray[i] = parseInt(ccInArray[i], 10);
  }

  var index = 0;
  var digit = 1;
  for (; index < ccInArray.length; index++, digit++) {
    if (digit % 2 > 0) {
      ccInArray[index] = ccInArray[index] * 2;
    }

    if (ccInArray[index] > 9) {
      ccInArray[index] = ccInArray[index] - 9;
    }

    sumOfAllNumbers += ccInArray[index];
  }

  if ((sumOfAllNumbers % 10) + checkDigit === 10) {
    isValid = true;
  } else {
    isValid = false;
  }

  return isValid;
};

module.exports = luhnCheck;
