/*
Мы считали, что только последнее поколение людей дожило до 90 лет. Давайте рассмотрим этот феномен поподробнее. 
Подсчитайте средний возраст людей для каждого из столетий. Назначаем столетию людей, беря их год смерти, деля 
его на 100 и округляя: Math.ceil(person.died / 100).

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94

В качестве призовой игры напишите функцию groupBy, абстрагирующую операцию группировки. Она должна принимать 
массив и функцию, которая вычисляет группу для элементов массива, и возвращать объект, который сопоставляет 
названия групп массивам членов этих групп.
*/

let ancestry = JSON.parse(require("../ancestry"));
let byName = {};

ancestry.forEach((person) => {
    byName[person.name] = person;
});

function average(arr) {
    const years = {};
    for (let person in arr) {
        const century = Math.ceil(arr[person].died / 100);
        if (years[century]) {
            years[century] = [
                ...years[century],
                arr[person].died - arr[person].born,
            ];
        } else {
            years[century] = [arr[person].died - arr[person].born];
        }
    }
    for (let key in years) {
        const averageAge =
            years[key].reduce((a, b) => a + b) / years[key].length;
        console.log(key + ": " + averageAge.toFixed(1));
    }
}

average(byName);
