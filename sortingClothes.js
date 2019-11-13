let arr = [
  "10",
  "8",
  "8L",
  "6",
  "6",
  "4R",
  "6R",
  "6S",
  "6L",
  "12R",
  "12R",
  "12R",
  "10R",
  "12L",
  "12",
  "12S",
  "14L"
];

let possibleElements = [];

for (let i = 0; i < 39; i++) {
  possibleElements.push(`${i}S`);
  possibleElements.push(`${i}R`);
  possibleElements.push(`${i}L`);
  possibleElements.push(`${i}`);
}

arr = [...new Set(arr)];

let sorted = [];

possibleElements.forEach(el => {
  if (arr.indexOf(el) !== -1) sorted.push(el);
});

console.log(sorted);