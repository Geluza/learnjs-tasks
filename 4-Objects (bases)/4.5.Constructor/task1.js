//Да, например, они могут возвращать один и тот же объект obj

let obj = {};

function A() { return obj; }
function B() { return obj; }

console.log( new A() == new B() )