let inputLines = [ [ 1.0, 1.1], [ -3.0, 1.2 ], [1.0, 2.1] ];

let selling = inputLines.filter(el => el[0] < 0);
let buying = inputLines.filter(el => el[0] > 0);

let sortedSelling = selling.sort((a,b) => a[0] - b[0]);
let sortedBuying = buying.sort((a,b) => Math.abs(a[0]) - Math.abs(b[0]))
sortedBuying.reverse()
sortedBuying.forEach((el, index) => {
    sortedBuying[index]
})
return [sortedSelling[0][0], sortedSelling[0][1], ]