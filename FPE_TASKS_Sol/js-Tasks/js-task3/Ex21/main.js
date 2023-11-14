// task 21

var nums= [44, 5, 4, 3, 2, 10];

function powerElementIndex(array) {
    let newArray=[];
    for (let index = 0; index < array.length; index++) {
            newArray[index]=Math.pow(array[index],index);
    }
    return newArray;
}

console.log(powerElementIndex(nums));
