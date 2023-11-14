// task6

function PandigitalNumber(number) {
  var numSt = number.toString();
  for (let digit = 0; digit <= 9; digit++) {
    if (!numSt.includes(digit.toString())) {
      return false;
    }
  }

  return true;
}

var check = PandigitalNumber(98140723568910);
console.log(check);
