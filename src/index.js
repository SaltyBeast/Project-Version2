
function Test () {
    this[`color`] = `red`;
    this[`length`] = 5;
    
    this[`go`] =  () =>  {
        console.log(`------>`)
    };
} ;
const a = new Test();

console.log(`aaa`, a.go());








