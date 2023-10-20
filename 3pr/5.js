// Минимум и максимум
// Создайте массив и выведите в консоль минимальный и максимальный элементы в этом массиве.
// Массив данных:


function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  }

var arr = new Array(24, -63, 67, -12, 88, 94, -28, 82, 0, 53);


arr.sort(compareNumeric)
console.log(arr[0],arr[arr.length-1])