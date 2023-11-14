//task7

function doubleValues(arr) {
  let strName = [];
  strName = arr.map(function (params) {
    return params + params;
  });
  return strName;
}

console.log(doubleValues([1, 2, 3]));
