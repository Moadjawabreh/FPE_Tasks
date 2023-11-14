
 //task11

let calculateSupply=(age, amountPerDay) =>{
    const max_age=100;
    let restDays=(100-age)*365;
    let cupsAmount=restDays*amountPerDay;
    return `You will need ${cupsAmount} to last you until the ripe old age of ${max_age}`
    }

    console.log(calculateSupply(18,123));