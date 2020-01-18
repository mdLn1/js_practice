let string = `1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 2 4 4 0
0 0 0 2 0 0
0 0 1 2 4 0`;

let arr1 = string.split(/\n/);
let arr = [];
for(let z of arr1){
    arr.push((z.split(' ')).map(el => parseInt(el)))
}

function getLargestHourglass() {
    let largestHourglass = getHourglassSum(1, 1);
    for (let i = 1; i < 5; i++) {
        for (let j = 1; j < 5; j++) {
            if (getHourglassSum(i, j) > largestHourglass) {
                largestHourglass = getHourglassSum(i, j);
            }
        }
    }
    return largestHourglass;
}

function getHourglassSum(x, y) {
    return arr[x - 1][y - 1] + arr[x - 1][y] + arr[x - 1][y + 1] + arr[x][y] + arr[x + 1][y - 1] + arr[x + 1][y] + arr[x + 1][y + 1];
}

console.log(getLargestHourglass());

// arr1 = arr1.map(el => parseInt(el));

// for(let i = 0; i < 6; i++){
//     let arr2 = [];
//     for(let j = 0; j < 6; j++){
//         arr2.push(arr1[j+i*6]);
//     }
//     arr.push(arr2);
// }