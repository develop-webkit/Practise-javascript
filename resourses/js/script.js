"use strict";


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
