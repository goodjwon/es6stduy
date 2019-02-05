

let obj = {
    age : 10,
    name : 'jwon',
    address : 'seoul'
}


let {name, age} = obj;

console.log(name, age);

let {name:myName, age:myAge} = obj;
console.log(myName, myAge)
;

//json data 바로 바인딩 하기.
const jsonmessage = [
    {
        "postTitle": "mbc",
        "postWriter": "담당자",
        "postUserId": "guest",
        "postContent": "냉무냉무냉무",
        "postPassword": null,
        "postUserEmail": "admin@naver.com",
        "postsCode": "board",
        "postsDomainCode": "abc",
        "postIpAddress": "58.225.21.444",
        "postGroup": "testPostsParents",
    },
    {
        "postTitle": "kbs",
        "postWriter": "담당자",
        "postUserId": "guest",
        "postContent": "냉무냉무냉무",
        "postPassword": null,
        "postUserEmail": "admin@naver.com",
        "postsCode": "board",
        "postsDomainCode": "abc",
        "postIpAddress": "58.225.21.444",
        "postGroup": "testPostsParents",
    }]
;


let [,{postTitle, postWriter}] = jsonmessage;
console.log(postTitle, postWriter)