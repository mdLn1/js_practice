let originalString = 'hurart';
let direction = [ 0, 1 ];
let amount = [ 4, 1 ];

function rotateTheString(originalString, direction, amount) {
    let retString = originalString;
    for (let i = 0; i < direction.length; i++) {
        if (direction[i] === 0) {
            retString = cyclicLeftShift(retString,amount[i]);
        } else if (direction[i] === 1) {
            retString = cyclicLeftShift(retString,(Math.abs(retString.length-1)));
        }
    }
    return retString;
}

function cyclicLeftShift(s, k){
    k = k%s.length;
    return s.substring(k) + s.substring(0, k);
}

console.log(rotateTheString(originalString,direction,amount));