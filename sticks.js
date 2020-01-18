const str = "1 2 3 4 3 3 2 1";
let arr1 = str.split(" ");


function cutTheSticks(arr) {
    let sticksCut = [];
    
    let positives = findNonZero(arr);
    while(positives > 0){
        let min = findMin(arr);
        let cutSticks = 0;
        for(let i = 0; i < arr.length; i++){
            if(arr[i] - min >= 0) {
                arr[i] = arr[i] - min;
                cutSticks++;
            } else {
                arr[i] = 0;
            }
        }
        if(cutSticks)
            sticksCut.push(cutSticks);
        positives = findNonZero(arr);
    }
    return sticksCut;
}

function findMin(arr){
    let min = findNonZero(arr);
    if (min === 0){
        return 0;
    }
    for(let i = 0; i < arr.length; i++){
        if(min === 1){
            i = arr.length;
        }
        if(arr[i] > 0 && min > arr[i]){
            min = arr[i];
        }
    }
    return min;
}

function findNonZero(arr){
    let min = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            min = arr[i];
            i = arr.length;
        }
    }
    return min;
}

console.log(cutTheSticks(arr1))