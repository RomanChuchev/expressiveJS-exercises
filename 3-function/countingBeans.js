/*

Символ номер N строки можно получить, добавив к ней .charAt(N) ("строчка".charAt(5)) – схожим 
образом с получением длины строки при помощи .length. Возвращаемое значение будет строковым,
 состоящим из одного символа (к примеру, "к"). У первого символа строки позиция 0, что означает,
  что у последнего символа позиция будет string.length - 1. Другими словами, у строки из двух символов 
  длина 2, а позиции её символов будут 0 и 1.

Напишите функцию countBs, которая принимает строку в качестве аргумента, и возвращает количество
 символов “B”, содержащихся в строке.

Затем напишите функцию countChar, которая работает примерно как countBs, только принимает второй
 параметр — символ, который мы будем искать в строке (вместо того, чтобы просто считать количество
    символов “B”). Для этого переделайте функцию countBs.
*/

function countBs(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === "B") count++;
    }
    return count;
}

function countChar(str, letter) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === letter) count++;
    }
    return count;
}

console.log(countBs("AAABCDEF"));
console.log(countChar("AAABCDEF", "A"));
