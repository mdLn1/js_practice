const obj = {
    flower: 2,
    power: 3,
    man: "jimmy"
};

const arr = ["a", "b", "c"];

function forin(param){
    let result = [];
    for (el in param){
        result.push(el);
    }
    return result;
}

function forof(param){
    let result = [];
    for (let el of param){
        result.push(el);
    }
    return result;
}

// console.log(forin(obj));

function getCapitalLetters(letters) {
	return letters.filter(letter => (
		letter === letter.toUpperCase()
	);
}