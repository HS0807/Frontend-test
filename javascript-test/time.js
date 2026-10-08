// // alert("hello");

// let a = setTimeout(function () {
//     console.log("i am timeout message")
// }, 2000)

// let m = prompt("this message is for cleartimeout")
// if ("n" == m) {
//     clearTimeout(a)
// }
// console.log(a);

// // const sum = (a, b,c) => {
// //     console.log("i am runing" + (a+b+c))
// //     a+b
// // }

// // setTimeout(sum, 2000, 1, 7,2)
// // setInterval(function(){
// //     alert("I am setInterval")
// // },5000)



// let b = setInterval(()=>{
//     console.log("hitesh")
// }, 5000)

// clearInterval(b)


console.log("start");
setTimeout (function() {
    console.log("timeout")
},5000);

let time = prompt("warnning messsage");
if("n" === time){
    console.log("soory")
}


let a = setInterval(function(){
    console.log("myname is hitesh")
},2000)

clearInterval(a);