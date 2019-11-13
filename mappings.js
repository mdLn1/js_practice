let mapping = [ 2, 1, 4, 8, 6, 3, 0, 9, 7, 5 ];
let nums = [ '12', '02', '4', '023', '65', '83', '224', '50' ];

// let mapping = [3,5,4,6,2,7,9,8,0,1];
// let nums = ['990','332','32'];

function strangeSort(mapping, nums) {
    let convertedValues = [];
    let returnNums = [];

    nums.forEach((value) => {
        let str = value.toString().split("");
        let conValue = "";
        str.forEach(n => {
            let index = mapping.indexOf(parseInt(n));
            conValue += index;
        })
        convertedValues.push(parseInt(conValue));
    })

    convertedValues = convertedValues.sort((a, b) => { return a-b });

    convertedValues.forEach((value) => {
        let str = value.toString().split('');
        let conValue = '';
        str.forEach(n => {
            let index = mapping.indexOf(parseInt(n));
            conValue += index;
        })
        returnNums.push(conValue);
    })

    return returnNums;
}

console.log(strangeSort(mapping,nums));