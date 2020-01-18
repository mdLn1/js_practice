const N = 2;
const queries = [
    [1, 0, 5],
    [1, 1, 7],
    [1, 0, 3],
    [2, 1, 0],
    [2, 1, 1]
];

function dynamicArray(n, q) {
    let seqList = Array(n).fill().map(() => Array());
    let lastAnswer = 0; 
    q.forEach(element => {
        const [queryType, x, y] = element;
        if (queryType === 1) {
            seqList[((x ^ lastAnswer) % n)].push(y);
        } else {
            let seq = seqList[((x ^ lastAnswer) % n)];
            lastAnswer = seq[y % seq.length];
            console.log(lastAnswer);
        }
    });
}

dynamicArray(N, queries);
