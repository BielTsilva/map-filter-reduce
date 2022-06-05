function sumNumbers(arr){
    return arr.reduce(function(prev, current) {
        console.log({prev});
        console.log({current});
        return prev + current;
    })
}

const arr = [1, 2];

console.log(' "resolution 1" ', sumNumbers(arr))

//subtract

const list = [
    {
        name: 'soup',
        price: 30
    },
    {
        name: 'ball',
        price: 25
    },
    {
        name: 'pen',
        price: 10
    },
    {
        name: 'toy',
        price: 3
    }
]

const balanceAvailable = 100;

function calculateBalance(balanceAvailable, list){
    return list.reduce(function(prev, current, index){
        console.log('turn ', index + 1);
        console.log({prev});
        console.log({current});
        return prev - current.price;
    }, balanceAvailable);
}

console.log(calculateBalance(balanceAvailable, list));
