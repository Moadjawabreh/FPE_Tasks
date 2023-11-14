
//task 18
var strings= ["alex","mercer","as","rashed2","al","hala"];
function shorterInArray(array)
{
    let str=strings[0];
    for (let index = 0; index < array.length; index++) {
        if(str.length>array[index].length)
            {
                str=array[index];
            }
    }
    return str;
}
console.log(shorterInArray(strings));
