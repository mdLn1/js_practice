let n = 5;
let k = 3;
let str = "4 2 6 1 10";
let arr = str.split(" ");

let pageNo = 1;
let interestingNo = 0;
arr.forEach(problems => {
    if (problems <= k) {
        if (problems >= pageNo) {
            interestingNo++;
        }
        pageNo++;
    } else if (problems % k === 0) {
        let newPages = problems / k;
        for (let i = 1; i < newPages + 1; i++) {
            if (i * k >= pageNo && (i - 1 )* k < pageNo) {
                interestingNo++;

            }
            pageNo += 1;
        }
    } else {
        let newPages = Math.floor(problems / k);
        for (let i = 1; i < newPages + 1; i++) {
            if (i * k >= pageNo && (i -1) * k < pageNo) {
                interestingNo++;

            }
            pageNo += 1;
        }
        if (problems >= pageNo && Math.floor(problems / k) * k < pageNo) {
            interestingNo++;
            
        }
        pageNo++;
    }
    console.log("magical numbers " + interestingNo + " current page " + pageNo);
})


// let currPage = 1;
// let magicalNumber = 0;
// for (let i = 0; i < n; i++) {
//     let j = 1;
//     let problems = arr[i];
//     if (problems < k) {
//         if (currPage <= problems) {
//             magicalNumber++;
//         }
//         currPage += 1;
//         console.log("Chapter " + i + " magical numbers " + magicalNumber + " current page " + currPage);
//     } else {

//         while (j < Number(problems) + 1) {
//             if (j === currPage) {
//                 magicalNumber++;

//             }
//             if (!(j % k) && j >= k) {
//                 currPage += 1;
//             }
//             j++;
//         }
//         console.log("Chapter " + i + " magical numbers " + magicalNumber + " current page " + currPage);
//     }

// }

//console.log(magicalNumber);