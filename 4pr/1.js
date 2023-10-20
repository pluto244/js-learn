// Создайте функцию, что будет увеличивать строку саму на себя несколько раз. 
// Пример:
// strMultiply ("Task", 2) → TaskTask;
// strMultiply ("Task", 1) → "Task";
// strMultiply ("Task", 3) → TaskTaskTask;

const strMultiply = (str, i) => str.repeat(i);

console.log(strMultiply("Task",4))