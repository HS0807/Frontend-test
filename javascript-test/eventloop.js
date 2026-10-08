console.log("start javascript");


setTimeout(() => { console.log("timeout") }, 0);

// new Promise (function (resolve, reject){
//     setTimeout(()=>{
//         console.log("timeout")
//         resolve()
//     })
// })

// .then(function(){
//     console.log("promise")
// })

// console.log("end")




Promise.resolve().then(() => console.log("promise"));
console.log("end");