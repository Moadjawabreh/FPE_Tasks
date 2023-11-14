//task1

let arr1 = [1, 2, 3];

function doubleValues(array) {
  let newArray = [];
  array.forEach(function (item, index) {
    newArray[index] = item * 2;
  });
  return newArray;
}

console.log(doubleValues(arr1));
console.log(arr1);
