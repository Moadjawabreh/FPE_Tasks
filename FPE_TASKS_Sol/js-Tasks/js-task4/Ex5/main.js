// task5

function vowelCount(str) {
  var obj = {};

  var vowelsChars = str.split("");

  var vowelsCount = [0, 0, 0, 0, 0];

  vowelsChars.forEach(function (params) {
    switch (params) {
      case "A":
      case "a":
        {
          obj["a"] = ++vowelsCount[0];
        }
        break;
      case "U":
      case "u":
        {
          obj["u"] = ++vowelsCount[1];
        }
        break;
      case "I":
      case "i":
        {
          obj["i"] = ++vowelsCount[2];
        }
        break;
      case "O":
      case "o":
        {
          obj["o"] = ++vowelsCount[3];
        }
        break;
      case "E":
      case "e":
        {
          obj["e"] = ++vowelsCount[4];
        }
        break;
      default:
        break;
    }
  });
  console.log(obj);
  return obj;
}

vowelCount("elit");
vowelCount("uuii");
vowelCount("aaaeiou");
