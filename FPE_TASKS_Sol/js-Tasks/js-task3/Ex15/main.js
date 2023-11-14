

// task 15

let nums= [1,2,3,8,9];
let count=0;
function removeFromArray(array,el){
    let newArray=[];
    for (let index = 0; index < array.length; index++) {
        if(array[index] !== el){
            newArray[count]=array[index];
            count++;
        }

    }
    return newArray;
}

 console.log(removeFromArray(nums,9));
