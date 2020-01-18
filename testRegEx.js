function findStr(str, toFind) {
    let re = new RegExp(toFind, "ig");
    let result = [], match;
    while(match = re.exec(str)){
        result.push(match);
    }
    return result.length;
}


// console.log(findStr("Blalasdsa", "a"))

// console.log(new Date('19-03-2021'.split("-").reverse().join("-")))

function getDaysOfTheMonth() {
	let date = new Date(
		'19-03-2021'.split("-").reverse().join("-")
	);
	let year = date.getFullYear();
	let month = date.getMonth();
	let newDate = (
		new Date(year, month+1, 0)
	);
	return newDate.getDate();
}

// console.log(getDaysOfTheMonth())
function findWord(string) {
	return string
		.split(" ")
		.reverse()
		.find(word => (
			'aeiou'.includes(
				word[0].toLowerCase()
			)
		));
}

function findWinner(contestants) {
	let winner = contestants
        .find(contestant => contestant.isEligible);
	return winner ?
		`Congratulations ${winner.name}, you win one thousand pounds` :
		"bad luck, we're going to spend the prize money on pizza";
}

console.log(findWinner([
	{name: 'John', isEligible: false},
	{name: 'Mick', isEligible: false},
	{name: 'Helen', isEligible: false}]))