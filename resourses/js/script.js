"use strict";

function asyncFunc1(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("Some Data 1");
            resolve("Yes!")
        },3000);
    });
}

function asyncFunc2(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("Some Data 2");
            resolve("Yes!")
        },3000);
    });
}


const p1 = asyncFunc1();

console.log("fecthing data 1")
p1.then((res) => {
    console.log("Promise was resolved for P1:",res);
    const p2 = asyncFunc2();
    p2.then((res) =>{
        console.log("Promise was resolved for P2:",res);
    })
});

// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("I am a promise");
//         reject("NetWork Error")
//     })
// }

// const promise = getPromise();
// promise.then( (res) => {
//     console.log("Yes!")
// });
// promise.catch( (err) => {
//     console.log("Reject Because:",err)
// })

// const resultPromise = function getData(data,getDatafunc){
//     return new Promise((resolve, reject) =>{
//         setTimeout(() => {
//             console.log("Data:",data);
//             resolve("success!")
//             if(getDatafunc){
//                 getDatafunc()
//             }
//         },5000);
//     });
// }

// if(resultPromise){

// }

// getData(1,() => {
//     console.log("Getting Data 2...")
//     getData(2, () => {
//         console.log("Getting Data 3...")
//         getData(3, () => {
//             console.log("Getting Data 4...")
//             getData(4);
//         });
//     });
// });

// const promise = new Promise((resolve,reject) => {
//     console.log("Promise Function");
//     reject("some error",112)
// });
