function convert(input) {
  var arabic = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var roman = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];
  var numeral = "";
  var number = 0;
  if(isNaN(input)===false) {
    var output;
    for(var i = 0; i < arabic.length; i++) {
      while (input%arabic[i] < input) {
        numeral += roman[i];
        input -= arabic[i];
      }
    }
    output = numeral;
  } else {
    var output;
    for(var i = 0; i < roman.length; i++) {
      while(input.indexOf(roman[i])===0) {
        number += arabic[i];
        input = input.replace(roman[i],"");
      }
    }
    output = number;
  }
  return output;
}
