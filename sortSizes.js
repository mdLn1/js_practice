let arr = ["10", "8", "8L", "6", "6", "4R", "6R", "6S", "6L", "12R", "12R", "12R", "10R", "12", "12S", "14L"];

let last = /[A-Z]$/;
let num = /[0-9]*/;

// arr = [...new Set(arr)]

arr = arr.filter(
    (item, index) =>
    arr.indexOf(item) === index);

// const makeUnique = (unique, item) => {
//     if(unique.includes(item)){
//         return unique;
//     }
//     return [...unique, item];
// };

let arr1 = ["S", "L", "","R"];
arr1 = arr1.sort(sortLetters);
console.log(arr1);

// arr.reduce(makeUnique, []);
arr = arr.sort(sortAscending);
console.log(arr);
arr = arr.sort(sortSizes);
console.log(arr);
function sortAscending(a, b) {
    const num1 = a.match(num)[0],
        num2 = b.match(num)[0];
    return num1 - num2;
}

function sortSizes(a, b) {
    const num1 = a.match(num)[0],
        num2 = b.match(num)[0];
    const aLetterExists = last.test(a),
        bLetterExists = last.test(b);
    if (num1 === num2) {
        const lastLetter = aLetterExists ? a[a.length - 1] : null;
        switch (lastLetter) {
            case "S":
                return -1;
            case "R":
                if (b[b.length - 1] === "S") {
                    return 1;
                }
                return -1;
            case "L":
                if (!bLetterExists) {
                    return 1;
                }
                return -1;
            case null:
            default:
                return 1;
        }
    }
    return num1 - num2;
}

function sortLetters(a, b) {
    const aLetterExists = last.test(a),
        bLetterExists = last.test(b);
    const lastLetter = aLetterExists ? a[0] : null;
    switch (lastLetter) {
        case "S":
            return -1;
        case "R":
            if (b[b.length - 1] === "S") {
                return 1;
            }
            return -1;
        case "L":
            if (!bLetterExists) {
                return 1;
            }
            return -1;
        case null:
        default:
            return 1;
    }
}