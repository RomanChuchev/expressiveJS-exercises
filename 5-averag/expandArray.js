/*
 *Используйте метод reduce в комбинации с concat для свёртки массива массивов в один массив, у которого есть все
  элементы входных массивов.


 */

let arrays1 = [[1, 2, 3], [4, 5], [6]];

function expandArray(arr) {
    return arr.reduce((a, b) => a.concat(b));
}

console.log(expandArray(arrays1)); // → [1, 2, 3, 4, 5, 6]

let arrays2 = [
    [1, 2],
    [3, [4, 5, [6, 7, [8, [9, 10]]]]],
];

const res = [];
function expandArrayInArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        Array.isArray(arr[i]) ? expandArrayInArray(arr[i]) : res.push(arr[i]);
    }
    return res;
}

console.log(expandArrayInArray(arrays2)); // [ 1, 2, 3, 4,  5, 6, 7, 8, 9, 10 ]
