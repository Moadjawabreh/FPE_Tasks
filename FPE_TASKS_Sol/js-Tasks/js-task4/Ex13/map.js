//task8

function valTimesIndex(arr) {
  let strName = [];
  strName = arr.map(function (params, index) {
    return index * params;
  });
  return strName;
}
console.log(valTimesIndex([1, 2, 3]));
