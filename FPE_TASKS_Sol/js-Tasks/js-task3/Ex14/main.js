//task14

function minInArray(array) {
    let min=array[0];
    for (let index = 0; index < array.length; index++) {
        if(min>array[index]){
            min=array[index];
        }

    }
   return min;
}

var nums= [1,2,3,8,9];
console.log(minInArray(nums));
