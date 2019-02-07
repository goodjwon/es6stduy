
let mySet = new Set();

console.log(toString.call(mySet));

//중복된 값은 반환하지 않음.
mySet.add('crong');
mySet.add('heary');
mySet.add('crong');

mySet.forEach((v)=>{console.log(v)});


//있는지 여부를 확인 한다.
console.log(mySet.has('crong'));


//대기열을 삭제 한다.
mySet.delete('crong');
mySet.forEach((v)=>{console.log(v)});