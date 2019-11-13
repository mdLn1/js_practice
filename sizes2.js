let arr = ["10", "8", "8L", "6", "6", "4R", "6R", "6S", "6L", "12R", "12R", "12R", "10R", "12L", "12", "12S", "14L"];

let last = /[A-Z]$/;
let num = /[0-9]*/;

arr = arr.filter(
    (item, index) =>
    arr.indexOf(item) === index);
console.log(arr.sort(sortAscending));
let mun = 1; 

function sortAscending(a, b) {
    const num1 = a.match(num)[0],
        num2 = b.match(num)[0];
    const aLetterExists = last.test(a),
        bLetterExists = last.test(b);
    if (num1 === num2) {
        const lastLetter = aLetterExists ? a[a.length - 1] : null;
        switch (lastLetter) {
            case "S":
                return -1;
            case "L":
                if (!bLetterExists) {
                    return -1;
                }
                return 1;
            case "R":
                if (b[b.length - 1] === "S") {
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