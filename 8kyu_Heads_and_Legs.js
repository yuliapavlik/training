function animals(heads, legs){
    let Cows = (legs / 2) - heads;
    let Chickens = heads - Cows;
    if(legs%2 !== 0 || legs<0 || heads<0 || Chickens<0 || Cows<0) {
        return "No solutions";
    }else if(heads === 0 && legs ===0) {
        return [0, 0];
    }else{
        return [Chickens, Cows];
    }
}


console.log(animals(-1, -1)); // negative, no solutions
animals(0, 0); // zeros
animals(12, 24); // positive
animals(25, 555); // No solutions
animals(54, 956); // invalid