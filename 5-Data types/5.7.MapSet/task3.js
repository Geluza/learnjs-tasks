//Потому что map.keys() возвращает итерируемый объект, а не массив. 
//А метод push работает только с массивами
//Но мы можем конвертировать его в массив

let map = new Map();
map.set("name", "John");
let keys = Array.from(map.keys());
keys.push("more");
console.log(keys); //[ 'name', 'more' ]