// Напишите функцию JavaScript для преобразования объекта в список пар [ключ,
//     значение].
//     [[red,#FF0000],[green,#00FF00],[white,#FFFFFF]]

function ColorCode(color, code) {
    this.color = color;
    this.code = code;
}


let ToKey = (Color) =>{return [Color.color, Color.code]}
let ColorToConsole = (Colors) =>{
    let arr = []
    for (key in Colors){
        arr.push(ToKey(Colors[key]))
    }
    return arr
}

let Colors = [new ColorCode("red","#FF0000"), new ColorCode("green","#00FF00")] 
console.log(ColorToConsole(Colors))
