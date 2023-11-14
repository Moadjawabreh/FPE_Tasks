
// task 22

var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
let newNums=[];
let count=0
function evenNumberEvenIndex(array) {
    for (let index = 0; index < array.length; index++) {
            if (index%2==0) {
                if (array[index]%2==0) {
                    newNums[count]=nums[index];
                    count++;
                }
            }

    }
    return newNums;
}

console.log(evenNumberEvenIndex(nums));
