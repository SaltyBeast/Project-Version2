
const arr =  [
    110,
    1,
    `hello world`,
    3,
    4,
    18,
    24 
];


const func = (prevValue, nextValue) => {
    if (prevValue === nextValue) {
        return 0;
    }
    if (prevValue < nextValue) {
        return -1;
    }
    if (prevValue > nextValue) {
        return 1;
    }
};

const sortNumbers = arr
.filter((value) => {
    if (typeof value === 'number') {
        return true;
    }
    return false;
})
.sort(func);

const word = arr.filter((value) => {
    if (typeof value === 'string') {
    return true;
    }
return false
})

console.log(`arr2`, sortNumbers.concat(word));
