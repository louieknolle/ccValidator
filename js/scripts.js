function getCompanyFromNumber(number) {
  const cardNumberString = number.toString();
  const validVisa = cardNumberString.charAt();
  const validMC = cardNumberString.charAt();
  const validDisc = cardNumberString.charAt();
  const validAmEx = cardNumberString.substring(0, 2);

  let cardCompany = '';

  if (validVisa === '4' && cardNumberString.length === 16) {
    cardCompany = 'Visa';
  } else if (validMC === '5' && cardNumberString.length === 16) {
    cardCompany = 'Mastercard';
  } else if (validDisc === '6' && cardNumberString.length === 16) {
    cardCompany = 'Discover'
  } else if ((validAmEx === '34' || validAmEx === '37') && cardNumberString.length === 15) {
    cardCompany = 'American Express'
  } else {
    cardCompany = 'invalid'
  }
  return cardCompany;
}

function isCCNumberValid(number) {
  const ccArray = (number.toString().split("")).reverse();

  const arrayWithDoubledEven = ccArray.map(function (digit, index) {
    if (index % 2 !== 0) { 
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

  if (sum % 10 === 0 && sum > 0) {
  	const cardCompany = getCompanyFromNumber(number);
    return (`Your ${cardCompany} card is valid.`);
    
  } else {
    return ('Not a valid credit card.');
    
  }
}

$(document).ready(function() {
  $('form#numberform').submit(function(event) {
    event.preventDefault();
    const userCCNumber = $('#ccNumber').val();
    const companyFromNumber = getCompanyFromNumber(userCCNumber);
    const isNumberValid = isCCNumberValid(userCCNumber);

    $('#result').html(isNumberValid);
  })
  
});
