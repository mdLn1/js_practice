const obj = { name: "cosmin", age: 2 };
const arr = [obj, obj, obj];
const func = (par) => {
    return par.map(({name, age}) => ({name, age}));
}
const newArr = func(arr);
console.log(newArr)