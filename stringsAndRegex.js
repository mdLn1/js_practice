let str = "123ABC";
let str1 = "abcdefgh"
let regNum = /[0-9]*/;

console.log("test = " + regNum.test(str));
console.log("toString = " + regNum.toString(str));
console.log("exec = " + regNum.exec(str));

console.log("string match = " + str.match(regNum));
console.log("search = " + str.search(regNum));

console.log("slicing strings");

console.log("substr = " + str1.substr(2,4));
console.log("slice = " + str1.slice(0,3));
console.log("substring = " + str1.substring(0,3));