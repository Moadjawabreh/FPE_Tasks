//task2

function stringItUp(arr) {
  return arr.map(function (params) {
    return params.toString();
  });
}
let array = [1, 2, 3, 4, 5];
console.log(stringItUp(array));
