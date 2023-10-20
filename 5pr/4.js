// Задача №4
// Создайте функцию, которая принимает массив объектов с полями name и age и
// возвращает массив имен людей, возраст которых больше 25 лет.

function User(name,age) {
    this.name = name;
    this.age = age;
}

let UserArr = [new User("Wincent",25), new User("NO", 21), new User("Abadoba",26)]

let AgeName = (arr) => {
    let NameArr = []
    for (key in arr){
        if (arr[key].age > 25) NameArr.push(arr[key].name)
            
    }
    return NameArr
}

console.log(AgeName(UserArr))