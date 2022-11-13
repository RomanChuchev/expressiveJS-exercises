/*
Используя набор данных из примера, подсчитайте среднюю разницу в возрасте между матерями и их детьми (это возраст 
   матери во время появления ребёнка). Можно использовать функцию average, приведённую в главе.

Обратите внимание – не все матери, упомянутые в наборе, присутствуют в нём. Здесь может пригодиться объект
 byName, который упрощает процедуру поиска объекта человека по имени.

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}
var byName = {};

ancestry.forEach(function(person) {
  byName[person.name] = person;
});
// → 31.2
 */

let ancestry = JSON.parse(require("../ancestry"));

let byName = {};

ancestry.forEach((person) => {
    byName[person.name] = person;
});

function average(array) {
    return array.reduce((a, b) => a + b) / array.length;
}

function getAge(arr) {
    const age = [];
    for (let person in arr) {
        const born = arr[person].born;
        const mom = arr[person].mother;

        if (byName.hasOwnProperty(mom)) {
            age.push(born - arr[mom].born);
        }
    }
    return age;
}
console.log(average(getAge(byName)));
// Ваш код тут

// → 31.2
