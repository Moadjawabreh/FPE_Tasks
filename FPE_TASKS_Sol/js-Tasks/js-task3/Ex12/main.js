
// task 12
var nums= [1,2,3,8,9];
function addToEnd(arr)
{
    arr.pop();
    arr.push(55);
    return arr;
}

console.log(addToEnd(nums));
