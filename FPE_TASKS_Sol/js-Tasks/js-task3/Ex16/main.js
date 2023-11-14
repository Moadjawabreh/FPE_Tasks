
//task 16
var nums= [1,2,3,8,9];
var oddElements=[];
let count=0;
function oddArray(array) {
    for (let index = 0; index < array.length; index++) {
        if(array[index] %2 !==0){
        oddElements[count]=array[index];
        count++;
        }
    }
    return oddElements;
}
console.log(oddArray(nums));
