function rangeOfNumbers(startNum, endNum) {
    if (startNum === endNum) {
        return [endNum];
    } else {
        let arr = rangeOfNumbers(startNum + 1, endNum);
        arr.unshift(startNum)
        return arr;
    }
};

console.log(rangeOfNumbers(1, 5))