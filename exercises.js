// function getCamelCaseWords(sentence) {
// 	return sentence
// 		.split(' ')
// 		.filter(word => {
// 			return word
// 				.split('')
// 				.some((char, index) => (
// 					index &&
// 					char === char.toUpperCase()
// 				));
// 		})
// 		.join(', ');
// }


// // console.log(getCamelCaseWords('Many people thinks motoGp is better than formulaOne'))

// function getFirstAvailableDayForBooking(myDays) {
// 	return myDays.find(day => day !== "Tuesday" && day !== "Thursday") || 'Sorry, no days available';
// }

// // console.log(getFirstAvailableDayForBooking(['Tuesday', "Monday"]));

function countPaint(rooms) {
	let obj = Object.values(rooms).sort((a, b) => b - a);
	return obj;
}

function setRoomColours(props) {
	let areas = countPaint(props.rooms),
		paints = Object.values(props.paints)
		.map(value => parseInt(value))
		.sort((a, b) => b - a),
		enough = new Set(
			areas.map((area, index) => area / 400 <= paints[index])
		);
	return enough.has(true) && enough.size === 1;
}

// console.log(setRoomColours({
// 	rooms: {
// 		bathroom: 400,
// 		livingRoom: 1000,
// 		bedroom: 900
// 	},
// 	paints: {
// 		grey: '2 gallons',
// 		blue: '4 gallons',
// 		green: '1 gallon'
// 	}
// }))

// function getMiddle(str) {
// 	return str.length % 2 ?
// 		str[Math.ceil(str.length / 2)] : str[str.length / 2 - 1];
// }

// console.log(removeMultiple(['Mozart', 'Pachelbel', 'Chopin', 'Holst'],
// 	1,
// 	2))

// function removeMultiple(array, firstPos, lastPos) {
// 	return array
// 		.filter((el, index) => {
// 			if (!(index >= firstPos && index <= lastPos)) {
// 				return el;
// 			}
// 		});
// }


function swap(obj) {
	let newObj = new Object();
	for (let key in obj) {
		newObj[obj[key]] = key;
	}
	return newObj;
}

function getUniqueCelebrityProps(obj, toFind) {
	return Object.keys(obj)
		.filter(prop => !Object.keys(toFind).includes(prop));
}


// console.log(getUniqueCelebrityProps({ firstName: 'Joseph', lastName: 'Blatter' },{ firstName: 'Joseph'}))con


function getAveragePixels(obj) {
	let total = 0,
		props = 0;
	for (let el in obj) {
		if (!isNaN(parseInt(obj[el]))) {
			total += parseInt(obj[el])
			props += 1;
		}
	}
	return total / props;
}

function consecutive(digits) {
	return !digits.find((el, index) => index !== 0 && digits[index - 1] + 1 !== el);
}
// console.log(consecutive([1,5,2,3]));

function getMessage(words) {
	;
	return new Set(words).size;
}

// console.log(getMessage("name1na"))
function getList(listA, listB) {
	let need = new Set();
	for (let el of listA.split(", ")) {
		need.add(el);
	}
	for (let el of listB.split(", ")) {
		if (need.has(el)) {
			need.delete(el);
		} else {
			need.add(el);
		}
	}
	return [...need].join(", ");
}
// console.log(getList(
// 	"Flobberworm Mucus, Hemlock, Dragon Claw Ooze",
// 	"Dragon Claw Ooze, Pond Slime, Flobberworm Mucus, Morning dew"))

function findSameClasses(setA, setB) {
	let common = [];
	setA.forEach(el => {
		if (setB.includes(el)) {
			common.push(el);
		}
	});
	return common || "None";
}

// console.log(findSameClasses(
// 	['Study of Ancient Runes', 'Apparition', 'Divination'],
// 	['Xylomancy']))

function findWinner(arr) {
	let found = arr.find(el => el.isEligible).name;
	if (found) {
		return `Congratulations ${found}, you win one thousand pounds`;
	}
	return "bad luck, we're going to spend the prize money on pizza";
}

function squareDigits(number) {
	return Number(number
		.toString().split("")
		.map(el => parseInt(el))
		.map(el => el * el)
		.join(""));
}

function hasUniqueChars(str) {
	let chars = [];
	for (let el of str) {
		if (chars.includes(el.toLowerCase())) {
			return false;
		}
		chars.push(el.toLowerCase());
	}
	return true;
}

function combineWords(str1, str2) {
	str1 = [...new Set(changeCase(str1))].join("");
	str2 = [...new Set(changeCase(str2))].join("")
	let newStr = str1;
	for (let el of str2) {
		if (!newStr.includes(el)) {
			newStr += el;
		}
	}
	return newStr;
}

function changeCase(str) {
	return str.split("").map(el => (
		el === el.toUpperCase() ?
		el.toLowerCase() : el.toUpperCase()
	));
}

function getCapitalConsonants(str) {
	let el = str.split("")
		.filter(el => (!"aeiou".includes(el.toLowerCase()) && el !== " " &&
			el === el.toUpperCase()))
		.map(el => el.toLowerCase())
		.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
		.join("-");
	return el;
}

function getCases(str) {
	let obj = {};
	obj.pascal = str.split("-")
		.map(el => el[0].toUpperCase() + el.substring(1)).join("");
	obj.camel = obj.pascal[0].toLowerCase() + obj.pascal.substring(1);
	obj.snake = str.replace("-", "_");
	return obj;
}

// console.log(getCases('kodiri-challenge'))
function getFormattedTime(date) {
	let seconds = normaliseDateToken(date.getSeconds());
	let minutess = normaliseDateToken(date.getMinutes());
	let hours = normaliseDateToken(date.getHours());
	return `${hours}:${minutes}:${seconds}`;
}

function normaliseDateToken(dateToken) {
	return dateToken < 10 ? `0${dateToken}` : `${dateToken}`;
}

function enoughChange(change, amountDue) {
	let totalChange = (
		change[0] * 25 +
		change[1] * 10 +
		change[2] * 5 + change[3]
	);
	console.log(totalChange / 100 >= amountDue.slice(1));

}
// enoughChange([30, 40, 20, 5], '£11.05')
function numOfPositiveArrays(arr) {
	return arr.reduce((total, c) => {
		console.log(Array.isArray(c) && c.length !== 0 && sum(c) >= 0);
		return ++total;
	}, 0);
}

function sum(array) {
	return array.reduce((total, value) => total + value);
}

numOfPositiveArrays([
	[-1, 2, 3],
	[],
	[1, 2, 3],
	[1, -3],
	[5]
])
const el = JSON.parse('[{"input": 2}, {"input1": 3}]');
// console.log(JSON.parse('[{"input": 2}, {"input1": 3}]'))
function numOfPositiveArrays(arr) {
	return arr.filter(el => el instanceof Array &&
		el.length > 0 && sum(el)).length;
}


function sum(arr) {
	return arr.reduce((total, curr) => total + curr) > 0;
}

// console.log(numOfPositiveArrays([1, 2, 3]))

function capMe(arr) {
	return arr.map(el => el.split(' ').map(word => word[0].toUpperCase() +
		word.substring(1).toLowerCase().join(' ')));
}

function calculateTotal(obj) {
	if (typeof obj !== "number") {
		Object.values(obj).forEach(el => {
			total += calculateTotal(el);
		});
	} else {
		total += obj;
	}
	return total;
}

function getMaxValue(obj, maxVal = Number.MIN_VALUE) {
	if (typeof obj === "object") {
		for (let el in obj) {
			maxVal = getMaxValue(obj[el], maxVal)
		}
	} else if (maxVal < obj) {
		maxVal = obj;
	}
	return maxVal;
}


function findEl(obj, item, found = false) {
	if (obj === item) return true;
	else if (typeof obj === "object") {
		for (let el in obj) {
			if (findEl(obj[el], item)) {
				found = true;
				break;
			}
		}
	}
	return found;
}

// function existsNumberInObject(item, obj, found = false) {
// 	if (obj === item) return true;
// 	else if (typeof obj === "object") {
// 		for (let el in obj) {
// 			if (existsNumberInObject(item, obj[el])) {
// 				found = true;
// 				break;
// 			}
// 		}
// 	}
// 	return found;
// }

function howManyArrays(arr, total = 1) {
	if (!Array.isArray(arr)) return 0;
	else {
		for (let el of arr) {
			if (el instanceof Array) {
				total += howManyArrays(el);
			}
		}
	}
	return total;
}

function existsNumberInObject(number, object, found = false) {
	for (let prop in object) {
		if (typeof object[prop] !== 'object') {
			found = object[prop] === number;
		} else {
			found = existsNumberInObject(number, object[prop]);
		}
		if (found) break;
	}
	return found;
}


function calculateNSum(num) {
	if (num === 1) return 1;
	return num + calculateNSum(num - 1);
}
// console.log(calculateNSum(5))
// console.log(calculateTotal({
// 	a: 1, 
// 	b: {c: 2, d: {f: 4, g: 5}},
// 	e: 3}))
// console.log(getMaxValue({a: 1, b: 2, c: {d: 3, e: 4}}));

// console.log(existsNumberInObject(4,
// 	{ a: 2, b: { c: 4, d: 3 }}))
console.log(howManyArrays([4, [1, [5, [8, [2]]],
	[7]
]]));