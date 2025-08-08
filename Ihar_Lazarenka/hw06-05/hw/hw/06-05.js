// ## Spread and rest operators

// Решая эти задачи старайтесь как можно чаще использовать rest и spread операторы


// 1. Напиши функцию `findMinMax`, которая принимает массив чисел и возвращает объект с минимальным и максимальным значением, используя SPREAD для передачи элементов в `Math.min` и `Math.max`.
arrayNumber = [12,13,244,14443,657889];
function findMinmax(...array) {
    console.log(Math.max(...array));
    console.log(Math.min(...array));
}
findMinmax(...arrayNumber);


// 2. Напишите функцию `filterStrings`, которая принимает любое количество аргументов (REST) и возвращает только строки.
// ```javascript
// filterStrings(1, "hello", true, "world", 42); // ["hello", "world"]
// ```



function filterStrings(...argument) {
    return argument.filter(functionStrings => typeof functionStrings === "string");
}
// Метод filter() создает новый массив, заполненный элементами, которые проходят тест, предоставленный функцией . Метод filter() не выполняет функцию для пустых элементов. Метод filter() не изменяет исходный массив.

console.log(filterStrings(1, "hello", true, "world", 42));



// 3. Напишите функцию `mergeArrays`, которая принимает любое количество массивов и объединяет их в один с помощью SPREAD оператора.


function mergeArrays (...arrays) {
    console.log (Array.prototype.concat(...arrays)
);

}
// prototype. concat()  возвращает новый массив, состоящий из массива, на котором он был вызван, соединённого с другими массивами и/или значениями, переданными в качестве аргументов.17 февр. 2025 г.
mergeArrays ([1, 2], [3, 4], [5, 6]);
mergeArrays ([1, 2], [3, 4], [5, 6],[7, 8]); 
mergeArrays ([1,2,2,2,],[4,4,4,4,4,4,],[2,3,3,4,4,5,5,5,5,5,5,]);
// ```javascript
// mergeArrays([1, 2], [3, 4], [5, 6]); // [1, 2, 3, 4, 5, 6]
// mergeArrays([1, 2], [3, 4], [5, 6],[7, 8]); // [1, 2, 3, 4, 5, 6, 7, 8]
// // ```