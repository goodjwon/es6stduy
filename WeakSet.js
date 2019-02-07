
//참조를 가지고 있는 객체만 저장 가능하다.

let arr1 = [1, 2, 3, 4];
let arr2 = [5, 6, 7, 8]
let ws = new WeakSet();

ws.add(arr1);
ws.add(arr2);
//ws.add(1); //Invalid value used in weak set
ws.add(function () {})

arr1 = null;
arr2 = null;

console.log(ws.has(arr1));
console.log(ws.has(arr2));