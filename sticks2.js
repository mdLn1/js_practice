const str = "1 2 3 4 3 3 2 1";
let arr1 = str.split(" ");

function cutTheSticks(arr) {
    let min = findMin(arr);
    let max = findMax(arr);

}

function findMin(arr) {
    let min = arr[0];
    arr.forEach(element => {
        if (element < min) {
            min = element;
        }
    });
    return min;
}

function findMax(arr) {
    let max = 0;
    arr.forEach(el => {
        if (max < el) {
            max = el;
        }
    });
    return el;
}

console.log(cutTheSticks(arr));