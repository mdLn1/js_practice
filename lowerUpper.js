let lower = 10, upper = 25;

let els = upper - lower + 1;
let times = Math.floor(els/ 2);

let result = (upper + lower) * times;
let middle = els % 2 ? lower + times : 0;
result += middle;

console.log(result);

