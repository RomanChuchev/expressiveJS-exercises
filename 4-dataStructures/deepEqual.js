/*
Оператор == сравнивает переменные объектов, проверяя, ссылаются ли они на один объект. Но иногда полезно
 было бы сравнить объекты по содержимому.

Напишите функцию deepEqual, которая принимает два значения и возвращает true, только если это два 
одинаковых значения или это объекты, свойства которых имеют одинаковые значения, если их сравнивать
 рекурсивным вызовом deepEqual.

Чтобы узнать, когда сравнивать величины через ===, а когда – объекты по содержимому, используйте оператор
 typeof. Если он выдаёт "object" для обеих величин, значит нужно делать глубокое сравнение. Примите во
  внимание одно дурацкое исключение, существующее по историческим причинам: typeof null тоже возвращает 
  "object".
var obj = {here: {is: "an"}, object: 2};

console.log(deepEqual(obj, obj));
// → true

console.log(deepEqual(obj, {here: 1, object: 2}));
// → false

console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
 */

function deepEqual(a, b) {
    if (a === null || b === null) return a === null && b === null;
    if (typeof a != "object" || typeof b != "object") return a === b;

    if (Object.keys(a).length != Object.keys(b).length) return false;

    for (let key in a) {
        if (!(key in b)) return false;
        if (!deepEqual(a[key], b[key])) return false;
    }

    return true;
}
let obj = { here: { is: "an" }, object: 2 };

console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
