const obj = [{
    name: "carlos ferreira",
    results: [1, 2, 3]
}, {
    name: "puerto ferreira",
    results: [2, 6, 3]
}, {
    name: "primos alicios",
    results: [1, 2, 1]
}];


let arr = obj.filter(({
    results
}) => !results.some(el => el > 3));
console.log(arr);
let arr1 = obj.map(({
    name,
    results
}) => {
    if(!results.some(el => el > 3)) return name;
});
console.log(arr1);