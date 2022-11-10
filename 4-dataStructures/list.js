/*
Объекты могут быть использованы для построения различных структур данных. Часто встречающаяся структура 
– список (не путайте с массивом). Список – связанный набор объектов, где первый объект содержит ссылку 
на второй, второй – на третий, и т. п.

var list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};

В результате объекты формируют цепочку:
Списки удобны тем, что они могут делиться частью своей структуры. Например, можно сделать два списка, 
{value: 0, rest: list} и {value: -1, rest: list}, где list – это ссылка на ранее объявленную переменную.
 Это два независимых списка, при этом у них есть общая структура list, которая включает три последних 
 элемента каждого из них. Кроме того, оригинальный список также сохраняет свои свойства как отдельный 
 список из трёх элементов.
 
Напишите функцию arrayToList, которая строит такую структуру, получая в качестве аргумента [1, 2, 3], 
а также функцию listToArray, которая создаёт массив из списка. Также напишите вспомогательную функцию 
prepend, которая получает элемент и создаёт новый список, где этот элемент добавлен спереди к первоначальному
 списку, и функцию nth, которая в качестве аргументов принимает список и число, а возвращает элемент на заданной 
 позиции в списке или же undefined в случае отсутствия такого элемента.
Если ваша версия nth нерекурсивна, тогда напишите её рекурсивную версию.

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}

console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]

console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}

console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
 */
let list = {
    value: 1,
    rest: {
        value: 2,
        rest: {
            value: 3,
            rest: null,
        },
    },
};

function arrayToList(array, res = {}) {
    const currentValue = array.shift();
    if (array[0] != undefined) {
        res = { value: currentValue, rest: arrayToList(array, res) };
    } else {
        res = { value: currentValue, rest: null };
    }

    return res;
}

function listToArray(list, res = []) {
    if (list != null) {
        res.push(list.value);
        listToArray(list.rest, res);
    }
    return res;
}

function prepend(el, list) {
    return { value: el, rest: list };
}

function nth(list, el, count = 0) {
    if (list != undefined) {
        if (el === count) return list.value;

        return nth(list.rest, el, ++count);
    }
}
console.log(arrayToList([1, 2, 3])); // { value: 1, rest: { value: 2, rest: { value: 3, rest: null } } }
console.log(listToArray(list)); // [ 1, 2, 3 ]
console.log(prepend(10, prepend(20, null))); // { value: 10, rest: { value: 20, rest: null } }
console.log(nth(arrayToList([10, 20, 30]), 1)); //20
