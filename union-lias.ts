type combineData = number | string;


function combine(input1: combineData , input2: combineData , resConv : 'as-number' | 'as-text' ) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resConv === 'as-number') {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result
    // if (resConv === 'as-number') {
    //     return +result;
    // } else {
    //     return result.toString();
    // }
    
}

const combineAges = combine(30,20, 'as-number');
console.log(combineAges);

const combineStringAge = combine('30','20', 'as-number');
console.log(combineStringAge);

const combineNames = combine('Alex','Walter','as-text');
console.log(combineNames);