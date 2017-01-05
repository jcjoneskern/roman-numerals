function convert(input) {
  var arabic = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var roman = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"]; //haven't found a way to do this without exceptions for 4s and 9s
  var numeral = "";
  var number = 0;

  //feature 1: Arabic to Roman
  if(isNaN(input)===false) {
    var output;
    for(var i = 0; i < arabic.length; i++) {
      while (input%arabic[i] < input) {
        numeral += roman[i];
        input -= arabic[i];
      }
    }
    output = numeral;
  }
  //feature 2: Roman to Arabic
  if(isNaN(input)===true) {
    var output;
    for(var i = 0; i < roman.length; i++) {
      while(input.indexOf(roman[i])===0) {
        number += arabic[i];
        input = input.replace(roman[i],""); //easier/more reliable than converting input to an array & using array methods on it
      }
    }
    output = number;
  }
  return output; //allows for flexibility in outputting either a number or a numeral
}
