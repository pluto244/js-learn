// Есть число 345
// Функцая вернет 12, так как сумма отдельно взятого каждого элемента будет равна 12


const sumStr = (str) => {
    arr = str.split("").map(Number) 
    let sum = 0
    for (i in arr){
        sum +=arr[i]
    }
    return sum
}

console.log(sumStr("345"))