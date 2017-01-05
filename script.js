module.exports = convert;

function convert(input) {
  var arabic = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var roman = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"]; //haven't found a way to do this without exceptions for 4s and 9s
  var numeral = ""; //these need defined data types, otherwise summing doesn't work
  var number = 0;
  var output;

  for(var i = 0; arabic.length; i++) {
    if(isNaN(input)===false) {
        while (input%arabic[i] < input && input > 0) {
          numeral += roman[i];
          input -= arabic[i];
        }
        output = numeral;
      } else {
        while(input.indexOf(roman[i])===0) {
          number += arabic[i];
          input = input.replace(roman[i],"");
        }
        output = number;
      }
    }

  return output; //allows for flexibility in outputting either a number or a numeral
}
