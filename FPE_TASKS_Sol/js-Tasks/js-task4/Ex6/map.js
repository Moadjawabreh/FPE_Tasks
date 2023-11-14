// task 1

function doubleNumbers(arr){
    let newArray=[];
    newArray=arr.map(function (params) {
    return  params*params;
})
    return newArray;
}

console.log(doubleNumbers([1,2,3,4]));
