let arr = ("hello").split("");
let alphabet = ("abcdefghijklmnopqrstuvwxyz").split();
let specialCharacters = "acegikmoqsuwy";
let s = 5;

function findNextChar(code) {
    if(code < 97){
        return String.fromCharCode(code + 26);
    }
    return String.fromCharCode(code > 122 ? code - 26 : code);
}

arr.forEach((el,index) => {
    arr[index] = findNextChar(el.charCodeAt(0) + (s % 26));
    s += specialCharacters.includes(el) ? 1 : -1;
});

console.log(arr);