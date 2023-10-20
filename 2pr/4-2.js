// 4.	Таблица умножения
// Выведите на экран таблицу умножения числа 5. 
// Сделайте таблицу через цикл for, while и do while,
//  где число 5 будет умножаться от 1 до 10 включительно.

let number = 5
i = 1
while (i>=1 && i<=10){
    console.log(number*i++)
}
number = 5
i = 1
do{
    console.log(number*i++)
 } while (i>=1 && i<=10)

for(let i=1; 1<=i && i<=10; i++){
    console.log(number*i)
}