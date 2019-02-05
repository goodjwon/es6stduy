
function print() {
    let list = document.querySelectorAll("li");
    let listArray = Array.from(list);
    let vArray =  listArray.filter((v)=>{
        return v.innerText.includes('e');
    })
    return vArray
}


console.log(print());