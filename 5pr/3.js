// Задача №3
// Создайте объект, содержащий информацию о человеке: имя, возраст, город и
// телефон. Напишите функцию, которая принимает этот объект в качестве
// аргумента и выводит информацию о человеке в консоль.

let Person = {
    name: 'John',
    age: 34,
    city: 'Berlin',
    phone: '012931'
}

let PersonInfo = (user) => {
    for (let key in user) {
        console.log(user[key]);
    }
}

PersonInfo(Person)