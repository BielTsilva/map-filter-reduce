function filterPairs(arr){
    return arr.filter(callback);
}

function callback(item){
    return item % 2 === 0;
}

function filterOdds(arr){
    return arr.filter((item) => {
        return item % 2 !== 0;
    })
}

const array = [1, 2, 4, 6, 30, 33, 5, 7, 9];

console.log(filterPairs(array));
console.log(filterOdds(array));