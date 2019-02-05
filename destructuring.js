

let obj = {
    age : 10,
    name : 'jwon',
    address : 'seoul'
}


let {name, age} = obj;

console.log(name, age);

let {name:myName, age:myAge} = obj;
console.log(myName, myAge)