//task21

function shorterString(str1, str2, str3, str4, str5) {
  let s = [str1, str2, str3, str4, str5];
  var shorter = str1;
  for (let index = 0; index < s.length; index++) {
    if (s[index].length < shorter.length) {
      shorter = s[index];
    }
  }
  for (let index = 0; index < s.length; index++) {
    if (s[index].length == shorter.length) {
      return s[index];
    }
  }
}

console.log(shorterString("air", "tr", "by", "car", "github"));
