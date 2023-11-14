//task 19
var string= "alex mercer madrasa rashed2 emad hala"
let count=0;
function repeatChar(str,ch) {

    for (let index = 0; index < str.length; index++) {
        if(str[index]==ch){
            count++;
        }
    }
    return count;
}
console.log(repeatChar(string,'m'));
