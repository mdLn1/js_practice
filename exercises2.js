function addMultiple(arr, el, pos) {
	arr.splice(pos, 0, el);
	console.log(arr);
}

function removeMultiple(arr, start, finish) {
	let arr1 = arr.splice(start, finish);
	console.log( arr.filter(el => !arr1.includes(el)));
}

// Awaiting for evaluation result...
addMultiple(
	['Mozart', 'Pachelbel', 'Chopin'], 'Bach', 2
);	

removeMultiple(
	['Beethoven', 'Vivaldi'], 0, 2
);

function allocateGifts(presents) {
	let division1, division2, rest;
 [division1, division2, ...rest] = presents;
	return (
		`${division1} : ${division2} : ${rest.join(", ")}`
	);
}

// console.log(allocateGifts([
// 	'paints', 'puzzle', 'toy train', 
// 	'teddy bear', 'plush dragon', 'doll']))

// 	function findWord(string) {
// 		return string
// 			.split(" ")
// 			.reverse()
// 			.find(word => (
// 				word.split("").find((el, index)=> (
// 					index === 0 && "aeiou".includes(el.toLowerCase())
// 				)
					
// 				)
// 			));
// 	}


// 	console.log(findWord('I hear that the birds fly high during the summer'))

function allocateGifts([one , two, ...rest]) {
	return `${one} : ${two} : ${rest.join(", ")}`;
}

// console.log(allocateGifts(
// 	['teddy bear', 'toy car', 'plush cat', 'doll']))

function squareDigits(num) {
	return Number(num.toString().split("").map(el => el * el).join(""));
}

console.log(squareDigits(9119))