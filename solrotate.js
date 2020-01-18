let originalString = 'hurart';
let direction = [ 0, 1 ];
let amount = [ 4, 1 ];

function rotateTheString(originalString, direction, amount) {
    let retString = originalString;
    direction.forEach((el,i) => {
        let shifting = amount[i] % retString.length;
        retString = shiftBy(el, shifting, retString);
    })

    return retString;
}

function shiftBy(dir, howMuch, what){
    let arr = what.split("");
    let arr1 = what.split("");
    let length = what.length;
    if(dir){
        arr.forEach((el, i) => {
            if( i + howMuch > length - 1){
                arr1[i + howMuch - length] = el;
            } else {
                arr1[i + howMuch] = el;
            }
        })
    } else {
        arr.forEach((el, i) => {
            if( i - howMuch < 0){
                arr1[length + i - howMuch ] = el;
            } else {
                arr1[i - howMuch] = el;
            }
        })
    }
    return arr1.join("");
}


console.log(rotateTheString(originalString,direction,amount));