// function flatlandSpaceStations(n, c) {
//     if (c.length === n) {
//         return 0;
//     }
//     if (c.length === n - 1) {
//         return 1;
//     }
//     let distances = [];
//     for (let i = 0; i < n; i++) {
//         if (c.includes(i)) {
//             distances.push(0);
//             continue;
//         }
//         let dists =c.map(el => Math.abs(el - i));
//         distances.push(Math.min(...dists));
//     }
//     return Math.max(...distances);
// }
function flatlandSpaceStations(n, c) {
    let size = c.length;

    if (size === n) {
        return 0;
    }
    if (size === n - 1) {
        return 1;
    }
    c.sort(descending);
    let maxDist = 0;
    let startDist = 0;
    let lastDist = 0;
    if (c[0] > maxDist) {
        startDist = c[0];
    }
    for (let i = 0; i < size - 1; i++) {
        if (c[i + 1] - c[i] > maxDist) {
            maxDist = c[i + 1] - c[i];
        }
    }
    if (n - 1 - c[size - 1] > Math.floor(maxDist / 2)) {
        lastDist = n - 1 - c[size - 1];

    }
    if (lastDist > Math.floor(maxDist / 2) && lastDist > startDist) return lastDist;
    if (startDist > Math.floor(maxDist / 2) && startDist > lastDist) return startDist;
    return Math.floor(maxDist / 2);

}

function descending(a, b) {
    return a - b;
}
console.log(flatlandSpaceStations(90, "4 76 16 71 56 7 77 31 2 66 12 32 57 11 19 14 42".split(" ")));