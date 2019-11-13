let str = "Always-Look-on-the-Bright-Side-of-Life";
let arr = str.split("");
let reUpper = /[A-Z]/;
let reLower = /[a-z]/;
let k = 5;
for (let i = 0; i < arr.length; i++) {
    let char = str.charCodeAt(i);
    k = k % 26;
    if (reUpper.test(arr[i])) {
        if (char + k > 90) {
            arr[i] = String.fromCharCode(64 + char + k - 90);
        } else {
            arr[i] = String.fromCharCode(char + k);
        }

    } else if (reLower.test(arr[i])) {
        if (char + k > 122) {
            arr[i] = String.fromCharCode(96 + char + k - 122);
        } else {
            arr[i] = String.fromCharCode(char + k);
        }
    }

}

console.log(arr.join(""));