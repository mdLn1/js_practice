function getConsecutiveChains(num) {
  numStr = num
    .toString()
    .split("")
    .map(el => Number(el));
  let consecNums = [];
  let currentStr = "" + numStr[0];
  numStr.slice(1).forEach((el, index) => {
    if (el - numStr[index] === 1) currentStr += el;
    else {
      consecNums.push(Number(currentStr));
      currentStr = "" + numStr[index + 1];
    }
  });
  if (currentStr != "") {
    consecNums.push(Number(currentStr));
  }
  return consecNums;
}

// console.log(getConsecutiveChains(1235678))
function getMultiplesOf(arr, limit) {
  let multiples = [];
  arr
    .map(el => Number(el))
    .forEach(el => {
      const initEl = el;
      while (el < limit) {
        multiples.push(el);
        el += initEl;
      }
    });
  return multiples.sort((a, b) => a - b);
}

// console.log(getMultiplesOf(["7", "3", "8"], "17"));

function sortByModulus(num) {
  let odds = [];
  let evens = [];
  let numArr = num.toString().split("");
  numArr.forEach(el => {
    if (el % 2) odds.push(el);
    else evens.push(el);
  });
  console.log(
    odds
      .sort((a, b) => a - b)
      .concat(evens.sort((a, b) => a - b))
      .join("")
  );
  return Number();
}

// console.log(sortByModulus(436763))

function sort(obj) {
  let hashmap = {};
  Object.values(obj).forEach(el => {
    if (hashmap[el]) hashmap[el] += 1;
    else hashmap[el] = 1;
  });
  let arr = Object.keys(hashmap).map(el => ({ name: el, val: hashmap[el] }));
  return arr
    .sort((a, b) => b.val - a.val)
    .map(el => (!parseInt(el.name) ? el.name : Number(el.name)));
}

// console.log(
//   sort({
//     firstScore: "Good",
//     secondScore: "Excellent",
//     thirdScore: "Excellent"
//   })
// );

var object =  { a: {b: 3, c: {d: 4}}, e: 5 },
    result = Object.keys(object).reduce(function (r, k) {
        return r.concat(k, object[k]);
    }, []);
console.log(result)