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
  var prefix6 = cardNumber.slice(0,6);
  var cardlength = cardNumber.length

		if (cardlength === 14 && (prefix2 === "38" || prefix2 === "39" )){
     return "Diner's Club";
    }else if(cardlength === 15 && (prefix2 === "34" || prefix2 === "37")){
	return "American Express";
    }else if(cardlength === 16 && (prefix2 >= "51" && prefix2 <= "55")){
      return "MasterCard"
    }else if ((prefix2 === "65" || prefix4 === "6011" || (prefix3 >= "644" && prefix3 <= "649")) && (cardlength === 16 || cardlength === 19)){
    return 'Discover'
    }else if((cardlength >= 12 && cardlength <= 19) && (prefix4 === "5018"||prefix4 === "5020"||prefix4 === "5038"||prefix4 === "6304")){
      return "Maestro"
    }else if(((prefix6 >= "622126" && prefix6< "622926") || (prefix3 >= "624" && prefix3< "627") || (prefix4 >="6282" && prefix4 < "6289")) && (cardlength >= 16 && cardlength<20)) {
      return "China UnionPay"
    }
    if (cardlength === 16 || cardlength === 19){ 
      if (prefix4=== "4903" || prefix4=== "4905" || prefix4=== "4911" || prefix4 === "4936"){
      return "Switch"
      } 
    }
    if ((cardlength === 13 || cardlength === 19 || cardlength === 16) && (prefix1 === "4") ){
      return "Visa"
    }
    if ((prefix6 === "564182" || prefix6 === "633110" || prefix4 === "6333"|| prefix4 === "6759") && (cardlength === 16 || cardlength === 18 || cardlength === 19)){
      return "Switch"
    }

    if (cardlength === 18  && ((prefix4=== "4903" || prefix4=== "4905" || prefix4=== "4911" || prefix4 === "4936")) ){
      return "Switch"
    }
    
    return "Not a valid number";
};


