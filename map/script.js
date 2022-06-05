const apple = {
    value: 2,
};

const orange = {
    value: 3,
}

function mapWithThis(arr, thisArg) {
    return arr.map(function(item){
    return    item * this.value;
    }, thisArg);
};

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log('this -> apple', mapWithThis(nums, apple));
console.log('this -> orange', mapWithThis(nums, orange));


function withoutThis(arr){
    return arr.map(function(item){
        return item * 2
    });
}

console.log(withoutThis(nums));