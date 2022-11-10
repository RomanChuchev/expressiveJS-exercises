/*
У массивов есть метод reverse, меняющий порядок элементов в массиве на обратный. В качестве упражнения 
напишите две функции, reverseArray и reverseArrayInPlace. Первая получает массив как аргумент и выдаёт
 новый массив – с обратным порядком элементов. Вторая работает как оригинальный метод reverse – она меняет 
 порядок элементов на обратный в том массиве, который был ей передан в качестве аргумента. Не используйте 
 стандартный метод reverse.

Если иметь в виду побочные эффекты и чистые функции из предыдущей главы, какой из вариантов вам кажется
 более полезным? Какой более эффективным?

console.log(reverseArray(["A", "B", "C"]));

// → ["C", "B", "A"];

var arrayValue = [1, 2, 3, 4, 5];

reverseArrayInPlace(arrayValue);

console.log(arrayValue);

// → [5, 4, 3, 2, 1]
 */

const reverseArray = (array) => {
    return array.reverse();
};
const reverseArrayInPlace = (array) => {
    let reverseArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reverseArray.push(array[i]);
    }
    return reverseArray;
};

let arrayValue = [1, 2, 3, 4, 5];

console.log(reverseArray(["A", "B", "C"]));
console.log(reverseArrayInPlace(arrayValue));
