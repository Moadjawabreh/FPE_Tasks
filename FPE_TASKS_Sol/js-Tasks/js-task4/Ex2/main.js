//task2

let arr1 = [1, 2, 3];

function doubleValues(array) {
  let newArray = [];
  array.forEach(function (item, index) {
    if (item % 2 == 0) newArray.push(item);
  });
  return newArray;
}

console.log(doubleValues(arr1));
