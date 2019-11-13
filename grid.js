//case 1
// let arr = [
//     [0, 1, 0, 0],
//     [0, 0, 0, 0]
// ]
// let k = 1
// let rules = ['dead',
//     'alive',
//     'dead',
//     'dead',
//     'dead',
//     'dead',
//     'dead',
//     'dead',
//     'dead'
// ]
// expected output
// 1 0 1 0
// 1 1 1 0

//case2
// let arr = [
//     [0, 1, 0, 0],
//     [0, 0, 0, 0]
// ]
// let k = 2
// let rules = ['dead',
//     'alive',
//     'dead',
//     'dead',
//     'dead',
//     'alive',
//     'dead',
//     'dead',
//     'dead'
// ]
//expected output
//0 1 0 0
// 0 0 0 0

//case 3
let arr = [ [ 0, 0, 0, 0 ], [ 0, 1, 1, 0 ], [ 0, 0, 0, 0 ] ]
let k = 1
   let rules = [ 'dead',
    'dead',
    'alive',
    'dead',
    'dead',
    'dead',
    'dead',
    'dead',
    'dead' ]
//expected output
// 0 1 1 0
// 0 0 0 0
// 0 1 1 0
let rulesValues = [];
rules.forEach((el, i) => {
    if (el === "alive")
        rulesValues.push(i);
})
let arr1 = Array.from(arr);
arr1[0][0] = 10;
console.log(arr1);
let columns = arr[0].length;
let rows = arr.length;

function findingNeighbors1(val2, val1) {
    let rowLimit = rows - 1;
    let columnLimit = columns - 1;
    let neighboursValue = 0;

    for (let x = Math.max(0, val1 - 1); x <= Math.min(val1 + 1, rowLimit); x++) {
        for (let y = Math.max(0, val2 - 1); y <= Math.min(val2 + 1, columnLimit); y++) {
            if (x !== val1 || y !== val2) {
                if (arr[x][y])
                    ++neighboursValue;
            }
        }
    }
    return neighboursValue;
}


let i = 0,
    j = 0,
    l = 0;
let turnAray = Array(rows).fill().map(() => Array(columns).fill());

for (i = 0; i < k; i++) {
    for (j = 0; j < rows; j++) {
        for (l = 0; l < columns; l++) {
            let value = findingNeighbors1(l, j);
            if (rulesValues.includes(value)) {
                turnAray[j][l] = 1;
            } else {
                turnAray[j][l] = 0;
            }
        }
    }

    arr = turnAray.map(function (arr1) {
        return arr1.slice();
    });

}
console.log(arr);

let mun = 1;