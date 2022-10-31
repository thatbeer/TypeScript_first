
function add(n1:number , n2:number) {
    return n1 + n2
}


function addAndHandle(n1:number,n2:number,cb: (num: number) => void) { // tell () to ignore eerything happen when the () return value
    const result = n1 + n2;
    const value = cb(result)
}

function printResults(num : number): void {
    console.log('Result: ' + num);
}

printResults(add(5,12));

let combineValues : (a: number , b: number) => number;

combineValues = add;
// combineValues = printResults;

console.log(combineValues(8,8));

addAndHandle(10,20, (result) => {
    console.log(result);
    return result
});
