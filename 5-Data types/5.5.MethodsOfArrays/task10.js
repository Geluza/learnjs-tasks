//Используем алгоритм под названием Тасование Фишера — Йетса. Суть заключается в том, 
//чтобы проходить по массиву в обратном порядке и менять местами 
//каждый элемент со случайным элементом, который находится перед ним.

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
let array=[1,5,7,8];
shuffle(array);
console.log(array);