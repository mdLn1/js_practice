let trips = [["Venice", "Rome"], ["Paris", "Venice"], ["London", "Paris"]];

let startTrip = "", endTrip = "";

trips.forEach(el => {
    let seekingStart = el[0], seekingFinish = el[1];
    let foundStart = false, foundFinish = false;
    for(let i = 0; i < trips.length; i++){
        if (trips[i][1] === seekingStart){
            foundStart = true;
        }
        if (trips[i][0] === seekingFinish){
            foundFinish = true;
        }
    }
    if(foundStart === false){
        startTrip = seekingStart;
    }
    if(foundFinish === false){
        endTrip = seekingFinish;
    }
});

let finalTrip = [];
finalTrip.push(trips.find(el => el[0] === startTrip));

while(finalTrip.length < trips.length){
    finalTrip.push(trips.find(el => el[0] === finalTrip[finalTrip.length - 1][1]));
}

console.log(finalTrip);