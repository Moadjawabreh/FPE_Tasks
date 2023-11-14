// task17

var nums= [1,2,3,8,9];
let sum=0;
function aveArray(array) {
    for (let index = 0; index < array.length; index++) {
       sum+=array[index];
    }
    return sum/array.length;
}
console.log(aveArray(nums));
