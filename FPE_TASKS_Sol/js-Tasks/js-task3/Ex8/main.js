//task 8

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function middleOfArray(arr) {
  if (arr.length % 2 == 0) {
    return `${arr[Math.floor(arr.length / 2)]}  ${
      arr[Math.floor(arr.length / 2 - 1)]
    }`;
  } else {
    return `${arr[Math.floor(arr.length / 2)]}`;
  }
}
console.log(middleOfArray(arr));
