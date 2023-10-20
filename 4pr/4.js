// 4. Правильное окончание для слов
// Создайте функцию, которая будет возвращать правильное окончание количеству лет. 
// Например: при вводе числа 1 функция будет добавлять слово «год» (чтобы получилось 1
// год), при вводе 2 – 2 года, при вводе 5 – 5 лет и т. д.

function getYearEnding(number) {
    if (number % 10 === 1 && number % 100 !== 11) {
        return number + ' год';
    } else if (number % 10 >= 2 && number % 10 <= 4 && (number % 100 < 10 || number % 100 >= 20)) {
        return number + ' года';
    } else {
        return number + ' лет';
    }
}

// Примеры использования:
console.log(getYearEnding(1));  // 1 год
console.log(getYearEnding(2));  // 2 года
console.log(getYearEnding(5));  // 5 лет
console.log(getYearEnding(21)); // 21 год
console.log(getYearEnding(22)); // 22 года
console.log(getYearEnding(25)); // 25 лет
