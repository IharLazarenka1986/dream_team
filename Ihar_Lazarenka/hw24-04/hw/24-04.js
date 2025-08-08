// 1. Дан массив `[3,4,7,1,9,3,7,2,5,6]`. Найдите среднее арифметическое значение всех элементов массива, которые имеют четный индекс.

const newArray = [3, 4, 7, 1, 9, 3, 7, 2, 5, 6];
let sumNumbers = 0;
let quantity = 0;

for (let i = 0; i < newArray.length; i++) {
    if (i % 2 === 0) {
        sumNumbers += newArray[i];
        quantity++;
    }
}
console.log(sumNumbers);
console.log(quantity);
//  Сложил все четные числа (31)
// Сколько получилось чисел(5)
const average = sumNumbers / quantity;
console.log(average);





// 2. Сформировать массив длиной 10, в который с помощью цикла запушить только те числа которые делятся на 3 без остатка.

const array = [];
let number = 1;

while (array.length < 10) {
    if (number % 3 === 0) {
        array.push(number);
    }
    number++;
}

console.log(array);

// 3. Дан массив чисел `[3,5,2,6,8,1,7]`, показать этот массив пользователю с помощью `alert()`, после чего попросить ввести те же числа с помощью `prompt()` по памяти, если все числа совпали, то выводим `alert()` с поздравлениям, если не совпало хотя бы одно число, сразу выводим `alert()` с ошибкой


const numbers = [3, 5, 2, 6, 8, 1, 7];

alert(`Пожалуйста запомните эти числа пожалуйста :` + numbers);
let answer = prompt(`Введите пожалуйста числа через запятую в том же порядке по памяти которые вы видели в всплывающем окне ранее ?`);
let userNumbers = answer.split(",");
// Метод split() делит строку на список подстрок и возвращает их в виде массива
let numberPrompt = true;
for (let i = 0; i < numbers.length; i++) {
  if (parseInt(userNumbers[i]) !== numbers[i]) {
    numberPrompt = false;
    break;
  }
}
if (numberPrompt) {
  alert(`ОТЛИЧНО.ПРАВИЛЬНО`);
} else {
  alert(`Числа не совпадают . Попробуйте ввести еще раз `);
};
