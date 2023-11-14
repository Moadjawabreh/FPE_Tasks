//task 20
var strings= ["alex","mercer","madrasa","rashed2","emad","hala"];
let evenIndexOddLengthh="";
function evenIndexOddLength(array) {

    for (let i = 0; i < array.length; i++) {

            if(i %2 ==0){
                if(array[i].length %2 !==0){
                    evenIndexOddLengthh+=array[i];
                }

        }

    }
    return evenIndexOddLengthh;
}
console.log(evenIndexOddLength(strings));

