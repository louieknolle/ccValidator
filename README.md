Specs
1) return empty string '' if an empty string is submitted
2) implement Luhn's algo. on inputted cc#
3) return 'valid#' if sum of transformed numbers is divisble   by 10
4) return 'notvalid#' if sum of transformed numbers is NOT divisible by 10 

Describe creditCardValid()

Test: "It will recognize when an empty string has been submitted and return 0."
Code: creditCardValid("");
Expected output: "0"

Test: "It will double the even number indexes."
Code: creditCardValid('4102080860435620');
Expected output: '4204016604651220'

Test: "It will add two digit doubled sums together."
Code: if (number > 9) {
      return Math.floor(number / 10 + (number % 10));
Expected output: '42040760465320'

Test: "It will add all numbers in the string together."
Code: for (let i = 0; i < arrayDoubleDigitsAdded.length; i++) {
    sum += parseInt(arrayDoubleDigitsAdded[i]);
  }
Expected output: sum(arrayDoubleDigitsAdded);

Test:"It will determine if sum of all the digits in the cc# are divisible by 10."
Code: if (sum % 10 === 0){return true}
Output: true or false

Test: "It will reverse array for all credit cards to target last digit before check number regardless of length."
Code: (number.toString().split("")).reverse();
Output: [1,2,3,4] -> [4,3,2,1]


