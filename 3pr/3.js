// Почти самый маленький
// Создайте программу, которая будет находить второй самый маленький элемент в массиве.
// Массив данных:
// var arr = new Array(24, -63, 67, -12, 88, 94, -28, 82, 0, 53);

function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  }
var arr = new Array(24, -63, 67, -12, 88, 94, -28, 82, 0, 53)


arr.sort(compareNumeric)
console.log(arr[1])