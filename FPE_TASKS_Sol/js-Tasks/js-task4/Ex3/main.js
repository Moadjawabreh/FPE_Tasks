// task3

let strArr = ["colt", "matt", "tim", "udemy"];

function showFirstAndLast(array) {
  let newArray = [];
  array.forEach(function (params, index) {
    let firstLast = params[0] + params[params.length - 1];
    newArray.push(firstLast);
  });
  return newArray;
}

console.log(showFirstAndLast(strArr));
