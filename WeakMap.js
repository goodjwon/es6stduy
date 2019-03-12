

let wm = new WeakMap();
let myFun = ()=>{};

wm.set(myFun, 0);


console.log(wm)

let count = 0;
for(let i =0;i<10; i++){
    count = wm.get(myFun);
    count ++;
    wm.set(myFun, count)
}

console.log(wm.get(myFun));