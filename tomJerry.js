// let arr =[ [ 93, 50, 93, 13 ],
//     [ -88, 51, 55, 24 ],
//     [ 79, 16, 98, 13 ],
//     [ 83, 90, 2, -35 ] ]

// 71

// let arr = [ [ 5, 7, 6, 2, 8, 4, 4, 8 ],
//     [ 2, 5, 4, 5, 9, 8, 4, 2 ],
//     [ 5, 4, 3, 9, 8, 3, 3, 4 ],
//     [ 4, 9, 3, 4, 6, 7, 4, 9 ],
//     [ 2, 4, 6, 2, 9, 2, 4, 2 ] ]

// 3


// let arr = [ [ 1, -2, 3, 3, 5, -6, 7 ],
//     [ 7, 6, 5, 2, 3, -2, -1 ],
//     [ -2, 1, 2, 1, 3, -5, 5 ] ]

// 1

let arr = [
    [3, 7, 5, 3, 4, 5],
    [4, 5, 2, 6, 5, 4],
    [7, 4, 9, 7, 8, 3]
];

// 3


let rowLength = arr[0].length;
let columnLength = arr.length;

let tom = 0,
    jerry = 0;
let turn = true; // true tom, false jerry
let eliminatedArrays = 0;
let maxPerColumn = [];
let j;
let i;

for (j = 0; j < rowLength; j++) {
    let max = arr[0][j];
    for (i = 1; i < columnLength; i++) {
        if (max < arr[i][j]) {
            max = arr[i][j];
        }
    }
    maxPerColumn.push(max);
}

while (eliminatedArrays < rowLength) {
    let chosen = Math.max(...maxPerColumn);
    let firstIndex = maxPerColumn.indexOf(chosen);
    if (turn) {
        tom += chosen;
    } else {
        jerry += chosen;
    }
    maxPerColumn[firstIndex] = -101;
    eliminatedArrays += 1;
    turn = !turn;
}
if(tom < 0 && jerry < 0){
    console.log(Math.abs(tom) - Math.abs(jerry));
} else {
    console.log(tom - jerry);
}
