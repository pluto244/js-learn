// Напишите программу на JavaScript для отображения статуса чтения (т.е. названия
//     книги, имени автора и статуса чтения) следующих книг.
//     Пример вывода:
//     Уже прочитал Билл Гейтс by The Road Ahead.
//     Уже прочитал Стив Джобс Уолтера Айзексона.
//     Вам все еще нужно прочитать Сойка-пересмешница: последняя книга
//     Голодных игр Сюзанны Коллинз.

function Book(name,author,status){
    this.name = name;
    this.author = author;
    this.status = (status ? status : false);
}
let Books = [new Book("Билл Гейтс","by The Road Ahead",true), new Book("Стив Джобс","Уолтера Айзексона", true), new Book("Сойка-пересмешница: последняя книга Голодных игр", "Сюзанны Коллинз")]

for (key in Books){
    Books[key].status ? str = "Уже прочитал " : str = "Вам все еще нужно прочитать "
    console.log(str + Books[key].name + Books[key].author)
} 