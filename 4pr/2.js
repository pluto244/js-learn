// Создайте функцию, которая будет превращать каждый первый символ слова строки в
// верхний регистр:
// upFirstLetter (все в верхний регистр);
// Вывод будет - Все В Верхний Регистр

const upFirstLetter = (str) => str.split(" ").map((word) => word.length > 0 ? word[0].toUpperCase() + word.substring(1) : "").join(" ");

console.log(upFirstLetter("ss dS dmCb ss S"));
