/*
У массивов есть ещё стандартные методы every и some. Они принимают как аргумент некую функцию, которая, 
будучи вызванной с элементом массива в качестве аргумента, возвращает true или false. Так же, как && возвращает
 true, только если выражения с обеих сторон оператора возвращают true, метод every возвращает true, когда функция
  возвращает true для всех элементов массива. Соответственно, some возвращает true, когда заданная функция 
  возвращает true при работе хотя бы с одним из элементов массива. Они не обрабатывают больше элементов, чем 
  необходимо – например, если some получает true для первого элемента, он не обрабатывает оставшиеся.

Напишите функции every и some, которые работают так же, как эти методы, только принимают массив в качестве 
аргумента.

console.log(every([NaN, NaN, NaN], isNaN));
// → true

console.log(every([NaN, NaN, 4], isNaN));
// → false

console.log(some([NaN, 3, 4], isNaN));
// → true

console.log(some([2, 3, 4], isNaN));
// → false 
*/

function every(arr, action) {
    for (let el of arr) {
        if (action(el) == false) {
            return false;
        }
    }
    return true;
}

console.log(every([NaN, NaN, NaN], isNaN));
// → true

console.log(every([NaN, NaN, 4], isNaN));
// → false

function some(arr, action) {
    for (let el of arr) {
        return action(el);
    }
}
console.log(some([NaN, 3, 4], isNaN));
// → true

console.log(some([2, 3, 4], isNaN));
// → false
