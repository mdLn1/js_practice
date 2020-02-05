function rotateArray(array, rotSize) {
    if(rotSize > array.length) rotSize %= array.length;
    
    return [...array.slice(rotSize), ...array.slice(0, rotSize)];
}

console.log(rotateArray("1 2 3 4 5".split(" "), 2))