// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
	var prefix1 = cardNumber.slice(0,1);
  var prefix2 = cardNumber.slice(0,2);
  var prefix3 = cardNumber.slice(0,3);
  var prefix4 = cardNumber.slice(0,4);
  
  
  if (cardNumber.length === 14 && (prefix2 === "38" || prefix2 === "39" )){
     return "Diner's Club";
    }else if(cardNumber.length === 15 && (prefix2 === "34" || prefix2 === "37")){
	return "American Express";
    }else if(cardNumber.length === 16 && (prefix2 >= "51" && prefix2 <= "55")){
      return "MasterCard"
    }else if((cardNumber.length === 13 ||cardNumber.length === 16 ||cardNumber.length === 19) && (prefix1 === "4")){
      return "Visa"
    }else if ((prefix2 === "65" || prefix4 === "6011" || (prefix3 >= "644" && prefix3 <= "649")) && (cardNumber.length === 16 || cardNumber.length === 19)){
    return 'Discover'
    }else if((cardNumber.length >= 12 && cardNumber.length <= 19) && (prefix4 === "5018"||prefix4 === "5020"||prefix4 === "5038"||prefix4 === "6304")){
      return "Maestro"
    }
    
    return "Not a valid number";
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
};


