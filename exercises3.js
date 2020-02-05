function hardSwitch(obj) {
  return Object.entries(obj).reduce((newObj, el) => {
    newObj[reverseCase(el[1])] = reverseCase(el[0]);
    return newObj;
  }, {});;
}

function reverseCase(str) {
  return str
    .split("")
    .map(el => (el.toUpperCase() === el ? el.toLowerCase() : el.toUpperCase()))
    .join("");
}

// console.log(hardSwitch({ Hello: "Kodiri" }));

function sum(obj) {
  return Object.values(obj).reduce((total, current) => {
    if (typeof current === "string" || typeof current === "number") {
      return total + parseInt(current);
    } else {
      return total + current(total);
    }
  }, 0);
}

// console.log(sum({
// 	a: '30px',
// 	b: n => n / 2,
// 	c: m => 2 * m,
// 	d: 8
// }))

function sayHello(func, racerName, season) {
  this.racerName = racerName;
  return func(season);
}

// console.log(sayHello(function (season) {
// 	return `Welcome to Formula 1 ${season}, ${this.racerName}!`;
// }, 'Ayrton', 1984))

function areEqual(obj1, obj2) {
  let arr1 = Object.values(obj1).sort(),
    arr2 = Object.values(obj2).sort();
  if (arr1.length != arr2.length) return false;
  let found = arr1.find((el, index) => el !== arr2[index]);
  return found ? false : true;
}

// console.log(areEqual({ a: 1, b: 2 }, { a: 1, b: 2 }));

function sort(obj) {
  let newObj = {};
  Object.entries(obj).forEach(el =>
    !newObj[el[1]] ? (newObj[el[1]] = 1) : (newObj[el[1]] += 1)
  );
  return Object.entries(newObj)
    .sort((a, b) => b[1] - a[1])
    .map(el => (parseInt(el[0]) ? parseInt(el[0]) : el[0]));
}

// console.log(sort({ a: 1, b: 2, c: 1 }));
