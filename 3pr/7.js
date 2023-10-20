// После сортировки:
// [ 78, 25, 23, 9, 4, -43 ]

const compareNumeric = (a, b) => (a < b) ? 1 : (a > b) ? -1 : 0;


var arr = [9, 25, 78, 23, -43, 4];


arr.sort(compareNumeric)
console.log(arr)