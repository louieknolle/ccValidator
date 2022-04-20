$(document).ready(function() {
  
});

// function valid(number) {
//   let splitNumber = parseInt(number.toString().split(""));
//   let totalEvenValue = 0;
//   let totalOddValue = 0;
// for(let i = 0; i < splitNumber.length; i++) {
// if(i % 2 === 0) {
//   if(splitNumber[i] * 2 >= 10) {
//     totalEvenValue += splitNumber[i] * 2 - 9;
//   } else {
// totalEvenValue += splitNumber[i] * 2;
//   }
// } else {
//   totalOddValue += splitNumber[i];
// }
// }
// return ((totalEvenValue = totalOddValue) %10 === 0)
// }
function isCCNumberValid(number) {
  const ccArray = (number.toString().split("")).reverse();

  const arrayWithDoubledEven = ccArray.map(function (digit, index) {
    if (index % 2 === 0) {
      return digit * 2;
    } else {
      return digit;
    }
  });

  const arrayDoubleDigitsAdded = arrayWithDoubledEven.map(function (number) {
    if (number > 9) {
      return Math.floor(number / 10 + (number % 10));
    } else {
      return number;
    }
  });

  let sum = 0;
  for (let i = 0; i < arrayDoubleDigitsAdded.length; i++) {
    sum += parseInt(arrayDoubleDigitsAdded[i]);
  }

  if (sum % 10 === 0) {
    return true;
  } else {
    return false;
  }
}
