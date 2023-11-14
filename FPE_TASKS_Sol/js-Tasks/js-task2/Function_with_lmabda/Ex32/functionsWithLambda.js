// task 32

var count=0;
let counter=()=> {
    return count=count+1;
}
console.log(counter());
console.log(counter());
console.log(counter());

let resetCounter=()=> {
    let countBefore=count;
    count=0;
    return `${countBefore} and the counter reset now`
}

console.log(resetCounter());

console.log(counter());
console.log(counter());
console.log(counter());
