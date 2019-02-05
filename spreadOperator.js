

let per = ["apple", "orange", 100];
let newData = [...per];

console.log(per)
console.log(newData);
console.log(per === newData);


let d1 = [1,2,3,4,'hello', null];
let d2 = ['a','b', ...d1, 'c'];

console.log(d1);
console.log(d2);



// 배열을
function sum(a, b, c) {
    return a+ b+c;
}

let d3 =[100, 200, 300];

console.log(sum(...d3));

