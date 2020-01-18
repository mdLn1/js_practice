var arrObj = [{
    topic: "Solar",
    key: "s1",
    value: 5
}, {
    topic: "Solar",
    key: "s2",
    value: 10
}, {
    topic: "Hydro",
    key: "h1",
    value: 52
}, {
    topic: "Bonassium",
    key: "b1",
    value: 54
}, {
    topic: "Hydro",
    key: "h2",
    value: 15
}];
arrObj.sort(function (a, b) {
    return a.value - b.value;
});

const removeSecond = (topicSearched) => {
    const arr = arrObj.filter(prg => topicSearched === prg.topic);
    if (arr.length > 0) {
        return arr[0];
    }
    return 0;
};

let cheapest = [removeSecond("Solar"), removeSecond("Hydro"), removeSecond("Bonassium")];
cheapest = cheapest.filter(prg => prg !== 0);
cheapest.sort(function (a, b) {
    return a.value - b.value;
});
console.log(cheapest.length > 1 ? cheapest.map(el => el.key) : cheapest[0].key);