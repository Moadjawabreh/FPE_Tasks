//task22

let longererString = (str1, str2, str3, str4) => {
  let s = [str1, str2, str3, str4];
  var longer = str1;
  for (let index = 0; index < s.length; index++) {
    if (s[index].length > longer.length) {
      longer = s[index];
    }
  }
  for (let index = 0; index < s.length; index++) {
    if (s[index].length == longer.length) {
      return s[index];
    }
  }
};
